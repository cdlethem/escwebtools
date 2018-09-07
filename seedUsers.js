var mongoose = require("mongoose");
var User = require("./models/user"); 
 
 const data = [
  { username: 'alec@elitescholarschina.com',
    password: 'calm-food-radiate' },
  { username: 'alexis@elitescholarschina.com',
    password: 'tearful-side-intend' },
  { username: 'abby@elitescholarschina.com',
    password: 'latter-boundary-shoe' },
  { username: 'bilal@elitescholarschina.com',
    password: 'gorgeous-importance-guess' },
  { username: 'bongani@elitescholarschina.com',
    password: 'silky-church-dig' },
  { username: 'carolyn@elitescholarschina.com',
    password: 'toothsome-passion-sin' },
  { username: 'catherine@elitescholarschina.com',
    password: 'brainy-balance-ban' },
  { username: 'christopher@elitescholarschina.com',
    password: 'national-paint-try' },
  { username: 'colin@elitescholarschina.com',
    password: 'hulking-brass-realize' },
  { username: 'dorothy@elitescholarschina.com',
    password: 'eager-garden-seek' },
  { username: 'ej@elitescholarschina.com',
    password: 'vague-disgust-conclude' },
  { username: 'elaine@elitescholarschina.com',
    password: 'energetic-ball-refuse' },
  { username: 'ellison@elitescholarschina.com',
    password: 'thinkable-picture-execute' },
  { username: 'emily@elitescholarschina.com',
    password: 'assorted-outcome-time' },
  { username: 'emmas@elitescholarschina.com',
    password: 'sure-owner-plug' },
  { username: 'esc.cathy@gmail.com',
    password: 'selfish-pull-itch' },
  { username: 'henry@elitescholarschina.com',
    password: 'excellent-cemetery-agree' },
  { username: 'jing@elitescholarschina.com',
    password: 'coordinated-throne-delight' },
  { username: 'jordana@elitescholarschina.com',
    password: 'flashy-drama-fetch' },
  { username: 'juliette@elitescholarschina.com',
    password: 'lyrical-battle-deceive' },
  { username: 'kate@elitescholarschina.com',
    password: 'thundering-setting-swim' },
  { username: 'katie@elitescholarschina.com',
    password: 'rabid-cat-itch' },
  { username: 'kelly@elitescholarschina.com',
    password: 'cooperative-lift-retire' },
  { username: 'kevin@elitescholarschina.com',
    password: 'every-balance-study' },
  { username: 'liza@elitescholarschina.com',
    password: 'venomous-pet-bounce' },
  { username: 'mack@elitescholarschina.com',
    password: 'sordid-idea-smile' },
  { username: 'madeleine@elitescholarschina.com',
    password: 'ratty-note-suggest' },
  { username: 'matthew@elitescholarschina.com',
    password: 'overwrought-juice-led' },
  { username: 'maya@elitescholarschina.com',
    password: 'abusive-confusion-lecture' },
  { username: 'parke@elitescholarschina.com',
    password: 'brawny-cover-battle' },
  { username: 'peter@elitescholarschina.com',
    password: 'upset-elbow-groan' },
  { username: 'pj@elitescholarschina.com',
    password: 'sable-sack-trust' },
  { username: 'regina@elitescholarschina.com',
    password: 'sulky-honey-scorch' },
  { username: 'rosemary.jones@yale.edu',
    password: 'inner-sink-assume' },
  { username: 'stacy@elitescholarschina.com',
    password: 'intelligent-tub-react' },
  { username: 'stephen@elitescholarschina.com',
    password: 'ambiguous-fall-place' },
  { username: 'sydney@elitescholarschina.com',
    password: 'gray-digestion-suspend' },
  { username: 'taylor@elitescholarschina.com',
    password: 'big-plants-satisfy' },
  { username: 'tomer@elitescholarschina.com',
    password: 'maddening-hose-tickle' },
  { username: 'xueying@elitescholarschina.com',
    password: 'scientific-afterthought-order'},
  { username: 'jason@elitescholarschina.com',
    password: 'tender-army-peep' },
  { username: 'jamaal@elitescholarschina.com',
    password: 'woebegone-discovery-scratch' },
  { username: 'iris@elitescholarschina.com',
    password: 'daffy-test-provide' },
  { username: 'nathan@elitescholarschina.com',
    password: 'unequal-rings-nail'},   
]

function seedDB() {

User.remove({}, err => {
    if(err){
        console.log(err);
    }
    console.log("removed users!");

     //add users from data

 data.forEach(seed => {
    var newUser = new User({username: seed.username});
    User.register(newUser, seed.password, err => {
        if(err){
            console.log(err);
        } else
        console.log("User Registered!")
        })
    }
)
})
};

module.exports = seedDB