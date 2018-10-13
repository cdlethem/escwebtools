const express = require("express");
const router  = express.Router();
const Podio = require('podio-js').api;

const config = require('../config.js')
const clientId = config.clientId;
const clientSecret = config.clientSecret;

const PodioResponse = require("../models/PodioResponse")

processResponse = require('../utilities/processItems')

router.get("/update/:podio_app", (req,res) => {

    const podio = new Podio({
        authType: 'app',
        clientId: clientId,
        clientSecret: clientSecret
      });
    
    const selectedApp = req.params.podio_app;  
    const appId = config[selectedApp].appId;  
    const viewId = config[selectedApp].viewId;
    const appToken = config[selectedApp].appToken;

    podio.authenticateWithApp(appId, appToken, (err) => {
        results = {};
        if (err) throw new Error(err);
        
        const go = async () => {
        await podio.isAuthenticated();
        results = await getItems();
        console.log("Fetched " + Object.keys(results).length + "items in total");
        
        newlyCreated = await PodioResponse.create({
                JSON: JSON.stringify(results),
                app: req.params.podio_app
            })                   
            
        // redirect to success page
        console.log("Podio data successfully updated at " + newlyCreated.createdAt);
        res.redirect('/success')
        }

        const getItems = async () => {
            let records = {};
            let keepGoing = true;
            let offset = 0;
            while (keepGoing) {
                let response = await podio.request('POST', '/item/app/' + appId + '/filter/' + viewId, {"limit":500,"offset":offset,"sort_by":"created_on"})
                await Object.assign(records, processResponse(response));
                offset += 500;
                console.log("fetched " + (Object.keys(records).length) + " items so far");
                if (response.items.length < 500) {
                    keepGoing = false;
                    return records
                };
            }; 
        };
        
        go().catch((error) => { 
            console.log(error);
            res.redirect('/failure)')
        })
    });
})

router.get('/fetch/:podio_app', (req,res) => {
    const selectedApp = req.params.podio_app;
    PodioResponse.findOne({'app': selectedApp}).sort('-createdAt').limit(1).exec((err, newData) => {
        if (err) {
            console.log(err);
        } else {
            console.log("sending JSON data fetched at " + newData.createdAt)
            res.send(newData.JSON)
        }
    })
})

router.get('/fetchCreatedAt/:podio_app', (req,res) => {
    const selectedApp = req.params.podio_app;
    PodioResponse.findOne({'app': selectedApp}).sort('-createdAt').limit(1).exec((err, newData) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(newData.createdAt))
        }
    })
})

module.exports = router