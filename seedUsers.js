var mongoose = require("mongoose");
var User = require("./models/user");

const data = [{
    username: 'alec@elitescholarschina.com',
    password: 'calm-food-radiate',
    role: 'default'
  },
  {
    username: 'alexis@elitescholarschina.com',
    password: 'tearful-side-intend',
    role: 'admin'
  },
  {
    username: 'abby@elitescholarschina.com',
    password: 'latter-boundary-shoe',
    role: 'default'
  },
  {
    username: 'bilal@elitescholarschina.com',
    password: 'gorgeous-importance-guess',
    role: 'admin'
  },
  {
    username: 'bongani@elitescholarschina.com',
    password: 'silky-church-dig',
    role: 'default'
  },
  {
    username: 'carolyn@elitescholarschina.com',
    password: 'toothsome-passion-sin',
    role: 'default'
  },
  {
    username: 'catherine@elitescholarschina.com',
    password: 'brainy-balance-ban',
    role: 'default'
  },
  {
    username: 'christopher@elitescholarschina.com',
    password: 'national-paint-try',
    role: 'default'
  },
  {
    username: 'colin@elitescholarschina.com',
    password: 'hulking-brass-realize',
    role: 'admin'
  },
  {
    username: 'dorothy@elitescholarschina.com',
    password: 'eager-garden-seek',
    role: 'default'
  },
  {
    username: 'ej@elitescholarschina.com',
    password: 'vague-disgust-conclude',
    role: 'default'
  },
  {
    username: 'elaine@elitescholarschina.com',
    password: 'energetic-ball-refuse',
    role: 'pot'
  },
  {
    username: 'ellison@elitescholarschina.com',
    password: 'thinkable-picture-execute',
    role: 'default'
  },
  {
    username: 'emily@elitescholarschina.com',
    password: 'assorted-outcome-time',
    role: 'pot'
  },
  {
    username: 'emmas@elitescholarschina.com',
    password: 'sure-owner-plug',
    role: 'default'
  },
  {
    username: 'esc.cathy@gmail.com',
    password: 'selfish-pull-itch',
    role: 'default'
  },
  {
    username: 'henry@elitescholarschina.com',
    password: 'excellent-cemetery-agree',
    role: 'default'
  },
  {
    username: 'jing@elitescholarschina.com',
    password: 'coordinated-throne-delight',
    role: 'default'
  },
  {
    username: 'jordana@elitescholarschina.com',
    password: 'flashy-drama-fetch',
    role: 'default'
  },
  {
    username: 'juliette@elitescholarschina.com',
    password: 'lyrical-battle-deceive',
    role: 'default'
  },
  {
    username: 'kate@elitescholarschina.com',
    password: 'thundering-setting-swim',
    role: 'default'
  },
  {
    username: 'katie@elitescholarschina.com',
    password: 'rabid-cat-itch',
    role: 'admin'
  },
  {
    username: 'kelly@elitescholarschina.com',
    password: 'cooperative-lift-retire',
    role: 'default'
  },
  {
    username: 'kevin@elitescholarschina.com',
    password: 'every-balance-study',
    role: 'default'
  },
  {
    username: 'liza@elitescholarschina.com',
    password: 'venomous-pet-bounce',
    role: 'default'
  },
  {
    username: 'mack@elitescholarschina.com',
    password: 'sordid-idea-smile',
    role: 'default'
  },
  {
    username: 'madeleine@elitescholarschina.com',
    password: 'ratty-note-suggest',
    role: 'default'
  },
  {
    username: 'matthew@elitescholarschina.com',
    password: 'overwrought-juice-led',
    role: 'default'
  },
  {
    username: 'maya@elitescholarschina.com',
    password: 'abusive-confusion-lecture',
    role: 'default'
  },
  {
    username: 'parke@elitescholarschina.com',
    password: 'brawny-cover-battle',
    role: 'default'
  },
  {
    username: 'peter@elitescholarschina.com',
    password: 'upset-elbow-groan',
    role: 'default'
  },
  {
    username: 'pj@elitescholarschina.com',
    password: 'sable-sack-trust',
    role: 'default'
  },
  {
    username: 'regina@elitescholarschina.com',
    password: 'sulky-honey-scorch',
    role: 'default'
  },
  {
    username: 'rosemary.jones@yale.edu',
    password: 'inner-sink-assume',
    role: 'default'
  },
  {
    username: 'stacy@elitescholarschina.com',
    password: 'intelligent-tub-react',
    role: 'admin'
  },
  {
    username: 'stephen@elitescholarschina.com',
    password: 'ambiguous-fall-place',
    role: 'default'
  },
  {
    username: 'sydney@elitescholarschina.com',
    password: 'gray-digestion-suspend',
    role: 'default'
  },
  {
    username: 'taylor@elitescholarschina.com',
    password: 'big-plants-satisfy',
    role: 'default'
  },
  {
    username: 'tomer@elitescholarschina.com',
    password: 'maddening-hose-tickle',
    role: 'admin'
  },
  {
    username: 'xueying@elitescholarschina.com',
    password: 'scientific-afterthought-order',
    role: 'default'
  },
  {
    username: 'jason@elitescholarschina.com',
    password: 'tender-army-peep',
    role: 'default'
  },
  {
    username: 'jamaal@elitescholarschina.com',
    password: 'woebegone-discovery-scratch',
    role: 'default'
  },
  {
    username: 'iris@elitescholarschina.com',
    password: 'daffy-test-provide',
    role: 'default'
  },
  {
    username: 'nathan@elitescholarschina.com',
    password: 'unequal-rings-nail',
    role: 'default'
  },
  {
    username: 'amanda@elitescholarschina.com',
    password: 'critical-crush-record',
    role: 'admin'
  },
  {
    username: 'rita@elitescholarschina.com',
    password: 'colorful-product-deliver',
    role: 'srt'
  },
  {
    username: 'louisvon@elitescholarschina.com',
    password: 'physical-warning-xray',
    role: 'srt'
  },
  {
    username: 'melinda@elitescholarschina.com',
    password: 'equal-entertainment-propose',
    role: 'srt'
  }
];

function seedDB() {

  User.remove({}, err => {
    if (err) {
      console.log(err);
    }
    console.log("removed users!");

    //add users from data

    data.forEach(seed => {
      var newUser = new User({
        username: seed.username,
        role: seed.role
      });
      User.register(newUser, seed.password, err => {
        if (err) {
          console.log(err);
        } else
          console.log("User Registered!")
      })
    })
  })
};

module.exports = seedDB