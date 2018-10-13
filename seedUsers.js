var mongoose = require("mongoose");
var User = require("./models/user");

const data = [{
    username: 'alec@elitescholarschina.com',
    password: 'calm-food-radiate',
    role: 'counselor'
  },
  {
    username: 'alexis@elitescholarschina.com',
    password: 'tearful-side-intend',
    role: 'admin'
  },
  {
    username: 'abby@elitescholarschina.com',
    password: 'latter-boundary-shoe',
    role: 'counselor'
  },
  {
    username: 'bilal@elitescholarschina.com',
    password: 'gorgeous-importance-guess',
    role: 'admin'
  },
  {
    username: 'bongani@elitescholarschina.com',
    password: 'silky-church-dig',
    role: 'counselor'
  },
  {
    username: 'carolyn@elitescholarschina.com',
    password: 'toothsome-passion-sin',
    role: 'counselor'
  },
  {
    username: 'catherine@elitescholarschina.com',
    password: 'brainy-balance-ban',
    role: 'counselor'
  },
  {
    username: 'christopher@elitescholarschina.com',
    password: 'national-paint-try',
    role: 'counselor'
  },
  {
    username: 'colin@elitescholarschina.com',
    password: 'hulking-brass-realize',
    role: 'admin'
  },
  {
    username: 'dorothy@elitescholarschina.com',
    password: 'eager-garden-seek',
    role: 'counselor'
  },
  {
    username: 'ej@elitescholarschina.com',
    password: 'vague-disgust-conclude',
    role: 'counselor'
  },
  {
    username: 'elaine@elitescholarschina.com',
    password: 'energetic-ball-refuse',
    role: 'pot'
  },
  {
    username: 'ellison@elitescholarschina.com',
    password: 'thinkable-picture-execute',
    role: 'counselor'
  },
  {
    username: 'emily@elitescholarschina.com',
    password: 'assorted-outcome-time',
    role: 'pot'
  },
  {
    username: 'emmas@elitescholarschina.com',
    password: 'sure-owner-plug',
    role: 'counselor'
  },
  {
    username: 'esc.cathy@gmail.com',
    password: 'selfish-pull-itch',
    role: 'counselor'
  },
  {
    username: 'henry@elitescholarschina.com',
    password: 'excellent-cemetery-agree',
    role: 'admin'
  },
  {
    username: 'jing@elitescholarschina.com',
    password: 'coordinated-throne-delight',
    role: 'counselor'
  },
  {
    username: 'jordana@elitescholarschina.com',
    password: 'flashy-drama-fetch',
    role: 'counselor'
  },
  {
    username: 'juliette@elitescholarschina.com',
    password: 'lyrical-battle-deceive',
    role: 'counselor'
  },
  {
    username: 'kate@elitescholarschina.com',
    password: 'thundering-setting-swim',
    role: 'admin'
  },
  {
    username: 'katie@elitescholarschina.com',
    password: 'rabid-cat-itch',
    role: 'admin'
  },
  {
    username: 'kelly@elitescholarschina.com',
    password: 'cooperative-lift-retire',
    role: 'counselor'
  },
  {
    username: 'kevin@elitescholarschina.com',
    password: 'every-balance-study',
    role: 'counselor'
  },
  {
    username: 'liza@elitescholarschina.com',
    password: 'venomous-pet-bounce',
    role: 'counselor'
  },
  {
    username: 'mack@elitescholarschina.com',
    password: 'sordid-idea-smile',
    role: 'counselor'
  },
  {
    username: 'madeleine@elitescholarschina.com',
    password: 'ratty-note-suggest',
    role: 'counselor'
  },
  {
    username: 'matthew@elitescholarschina.com',
    password: 'overwrought-juice-led',
    role: 'counselor'
  },
  {
    username: 'maya@elitescholarschina.com',
    password: 'abusive-confusion-lecture',
    role: 'admin'
  },
  {
    username: 'parke@elitescholarschina.com',
    password: 'brawny-cover-battle',
    role: 'counselor'
  },
  {
    username: 'peter@elitescholarschina.com',
    password: 'upset-elbow-groan',
    role: 'counselor'
  },
  {
    username: 'pj@elitescholarschina.com',
    password: 'sable-sack-trust',
    role: 'counselor'
  },
  {
    username: 'regina@elitescholarschina.com',
    password: 'sulky-honey-scorch',
    role: 'counselor'
  },
  {
    username: 'rosemary.jones@yale.edu',
    password: 'inner-sink-assume',
    role: 'counselor'
  },
  {
    username: 'stacy@elitescholarschina.com',
    password: 'intelligent-tub-react',
    role: 'admin'
  },
  {
    username: 'stephen@elitescholarschina.com',
    password: 'ambiguous-fall-place',
    role: 'counselor'
  },
  {
    username: 'sydney@elitescholarschina.com',
    password: 'gray-digestion-suspend',
    role: 'counselor'
  },
  {
    username: 'taylor@elitescholarschina.com',
    password: 'big-plants-satisfy',
    role: 'counselor'
  },
  {
    username: 'tomer@elitescholarschina.com',
    password: 'maddening-hose-tickle',
    role: 'admin'
  },
  {
    username: 'xueying@elitescholarschina.com',
    password: 'scientific-afterthought-order',
    role: 'counselor'
  },
  {
    username: 'jason@elitescholarschina.com',
    password: 'tender-army-peep',
    role: 'counselor'
  },
  {
    username: 'jamaal@elitescholarschina.com',
    password: 'woebegone-discovery-scratch',
    role: 'counselor'
  },
  {
    username: 'iris@elitescholarschina.com',
    password: 'daffy-test-provide',
    role: 'counselor'
  },
  {
    username: 'nathan@elitescholarschina.com',
    password: 'unequal-rings-nail',
    role: 'counselor'
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
  },
  {
    username: 'susansun@elitescholarschina.com',
    password: 'daffy-discovery-deliver',
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