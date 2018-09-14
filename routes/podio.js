const express = require("express");
const router  = express.Router();
const Podio = require('podio-js').api;

const config = require('../config.js')
const clientId = config.clientId;
const clientSecret = config.clientSecret;

const PodioResponse = require("../models/PodioResponse")

processResponse = require('../utilities/processPFPItems')

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
    this.results = {};
    if (err) throw new Error(err);
    
        podio.isAuthenticated().then(() => {
            podio.request('POST', '/item/app/' + appId + '/filter/' + viewId, {"limit":500,"offset":0,"sort_by":"created_on"})
            .then((responseData) => {
            Object.assign(this.results, processResponse(responseData));
            return podio.request('POST', '/item/app/' + appId + '/filter/' + viewId, {"limit":500,"offset":500,"sort_by":"created_on"})
            }).then((responseData) => {
                Object.assign(this.results, processResponse(responseData));
                return podio.request('POST', '/item/app/' + appId + '/filter/' + viewId, {"limit":500,"offset":1000,"sort_by":"created_on"})
                }).then((responseData) => {
                    Object.assign(this.results, processResponse(responseData));
                    console.log(Object.keys(this.results).length);
                    const newPodioResponse = {
                        JSON: JSON.stringify(this.results),
                        app: req.params.podio_app
                    };
                    PodioResponse.create(newPodioResponse, (err, newlyCreated) => {
                        if (err) {
                            console.log("Error in PodioResponse.create");
                            res.redirect('/failure')
                        } else {
                            // redirect to success page
                            console.log("Podio data successfully updated at " + newlyCreated.createdAt);
                            res.redirect('/success')
                        }
                    })
                });     
        });
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

module.exports = router