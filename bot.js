var HTTPS = require('https');
var HTTP = require('http');
var API = require('groupme').Stateless;
var PROMISE = require('es6-promise').polyfill();
var pg = require('pg');
var cool = require('cool-ascii-faces');
var index = require('./index.js');
var cleverbot = require('cleverbot.io');
var Forecast = require('forecast');
var DOMParser = require('xmldom').DOMParser;
var Client = require('node-wolfram');
var ImageService = require('groupme').ImageService;
var Guid = require('guid');

console.log("INITIATING APPLICATION...");


//     API KEYS FOR ALL APIS USED
var botID = process.env.BOT_ID;
var groupID = process.env.GROUP_ID;
var GiphyapiKey = process.env.GIPHY_API_KEY;
var accessToken = process.env.ACCESS_TOKEN;
var bingKey = process.env.BING_KEY;
var cleverUser = process.env.CLEVER_USER;
var cleverKey = process.env.CLEVER_KEY;
    cleverBot = new cleverbot(cleverUser,cleverKey);
    randomNumber = randomNumber = Math.floor(Math.random()*999);
    session = 'Squadbot1'+randomNumber;
    console.log("INITIATING CLEVERBOT SESSION: " + session)
    cleverBot.setNick(session);
var weatherKey = process.env.WEATHER_KEY;
var mathKey = process.env.MATH_KEY;
    Wolfram = new Client(mathKey);

// Initialize

pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  // console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      // console.log(JSON.stringify(row));

    });
});

var forecast = new Forecast({
  service: 'darksky',
  key: weatherKey,
  units: 'fahrenheit',
  cache: true,      // Cache API requests
  ttl: {            // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/
    minutes: 27,
    seconds: 45
  }
});

API.Groups.show(accessToken, groupID, function(err,ret) {
  if (!err) {
    members = ret.members;
  } else {console.log("FAILED GETTING GROUP INFO: ERROR " + err);}
});

var passwords = [['Forum 1415','12345679']];
var refresh = (new Date().getTime() / 1000) - 120;
function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      quotes = [
      "\"Fuck money bruh, who needs that shit anyway?\" - John Stagg","\"OH MAH GOD\" - David Potters","\"Kylo Ren please don’t take my cheeks\" - David Potters",
      "\"Sounds like what y'all were talking about was a clique. The only clique you need to know about is Brainiac, Scarecrow and sister Black Canary, because what you dealing with here, is the brotherhood. It's non-stop from this point on, in injustice, I take what I want, and after I take David, I want the gold sucka, Kalan, I'm coming for you nigga!\"- Dalvin Andrews",
      "\"Caleb you literally look like a challenged tomato\" - Kalan McNeese","\"You're not even a whole sperm. You shared a nut.\" - Kalan McNeese","\"I'm trying to decide on whether I should say fuck off or thank you because that information is kinda useful I guess but also completely fucking not useful at the same damn time\" - Caleb O'Neill",
      "\"I want a girl that knows I only last two minutes but she's so emotionally attached that she really be cumming\" - Kalan McNeese","\"I've lived on the edge enough to know to not\" -Byrd","\"Oh\" - Caleb O’Neill and David Potters","\"You literally suck at everything you have ever done\" - David",
      "\"YOU SUCK AT SUCKING DICK\" - no one knows the founder so don’t even try to claim","\"It is not gay to suck your own dick\" - Dalvin Andrews","\"Did you put your fingers in her asshole?\" - David Potters","\"John: We need some trash bags \n Matt P.: Go get it then \n Man why I got to fucking do it?\" - John Stagg","\"I know who’s good at sucking dick….\" - Nathan Munns",
      "\"Steph Curry, Chef Curry, Cayte Curry, Curry Indian food it don't matter to me. Cavs in 5\"  - Kalan McNeese","\"You make $7.25 an hour and work three hours a month\" - Marco Navarro","\"I want to have a reason to kill someone every day, whether in self defense or they were just in my way\" - Robert Ross",
      "\"Dalvin: Wait a minute....this Steve guy has 0 manly features 🤔 is he even a bro? \n Sara: That's just because my profile pic isn't a pic of my massive dick\" - Sara Cowan","\"Why can’t we have 4th of July in the winter?\" - Caleb O'Neill","\"I got these new whammy shells that can put a hole in an elephant’s ass\" - Dalvin Andrews \n \"I’m pretty sure an elephant already has a hole in its ass so that’s not saying much\" - Caleb O’Neill",
      "\"But next spring break i'm actually getting fucking totally irreparably excruciatingly and efficiently fukkt upp. when i'm done i won't remember the previous or next five weeks\" - Robert Ross",
      "\"SHIT, she saw me me looking!...One of my greatest fears is being roasted by a group of fine black women\" - David Potters","\"If I was an altar boy, I'd become famous by telling everyone I was raped by the Pope\"- Caleb O'Neill","\"Parents coming to visit their kids, not knowing how many times they've been dicked down here\" - Marco Navarro",
      "\"They went down like wet cement but they were the best damn pancakes you'll ever taste\" - Caleb O’Neill","\"Marco: Man I'm about to take a mean shit\nDalvin: How mean? \nMarco: Have you heard what happened to the Jews?\" - Marco Navarro","\"I kinda like French dude\" - David Potters","\"These hands bisexual\" - Jay Smith",
      "\"SON OF A BITCH ROBERT I'M DRIVING GET OFF MY DICK\" - Kalan McNeese","\"We need to hurry this up cuz my buzz is getting gone.\" - Marco Navarro","\"I wish I could do that, just say no to chicken.\" - Matthew Potter","\"This nigga mad because he's making minimum wage and he's forty.\" - Kalan McNeese",
      "\"Passed out is just incapacitated. Incapacitated is when your dick cums ten times. It’s a useless tool on your body.\" - David Potters","\"38 GIGS OF PORN!? That's enough to last me two weeks!\" - David Potters","\"Relax, you’re the only side hoe in my life.\" - Kalan McNeese",
      "\"I wanna work with Amway now.\" - David Potters","\"If I fuckin’ look up Attack on Titan and I see one fuckin’ subtitle and they’re speaking in their slit-eyed language, I’m going to bomb them so hard, they’ll never come back.\" - David Potters","\"I mean I literally took a bath in a dirty puddle outside and ate a squirrel to survive, but your new phone is awesome!\" - Robert Ross",
      "\"I love the ambiance of Olive Garden, but I’m not gonna go there if I can’t eat the food.\" - Robert Ross","\"You could just have her hand on your phone and literally beat your phone on your dick.\" - David Potters","\"I didn't dick her down but I had sex with her mouth\" - Dalvin Andrews ","\"I really wouldn’t care if Inman died today or lived forever\" - Dalvin Andrews",
      "\"No wonder she works at a funeral home, I die everytime I see her!\" - Matt Potter","\"I wish I had a grown-ass face. I got a kid ass face and a kid ass body. I'm just a kid ass nigga.\" - Kalan McNeese","\"THEY AIN'T GETTIN MY FOOD, BITCH!\" - Robert Ross","\"When life gives you lemons you make sweet tea\" - David Potters",
      "\"Don't blame Inman for shitting on the floor, he doesn't know what's going on anymore, his parents split up\"- Marco Navarro","\"Fuck me like the bad boy I am\"- David Potters","\"If we die, we die doing hood rat shit\"- Matt Potter","\"I'd eat your ass before I'd suck your toes\"- Dalvin Andrews","\"I move for no bitch\" - Kalan McNeese .",
      "\"Y'all told me it was windy, motherfuckers!\" - Caleb O’Neill ","\"David, why are you shining a light in a fire?\" - Matt Potter ","\"Having a positive outlook makes you a happy person\" - Kalan Mcneese ","\"WOO! BLACK BITCHES!\" - David Potters","\"Who vaped on my gator?\" - Kalan McNeese",
      "\"Never say no in the bedroom\" -Dalvin Andrews ","\"We don't love these hoes\" - Nathan Munns ","\"IT ENDS TONIGHT!\" - Kalan McNeese","\"Damn\" - Jamal Rogers ","\"Well there's only one thing to do unfriend him and never talk to him again\" - Caleb O’Neill ","\"I'm gonna put my dick in her nose\" - David Potters ","\"Everyone needs three portions of ass a day\" - David Potters ","\"Lemme go beat one real quick\" - David Potters ","\"Fuck with the bull, get the horns… and I'm horny.\" - Robert Ross ","\"Quit fuckin’ my truck!\" - Kalan McNeese ","\"Rise and shine Futher Muckers it is a great day to be alive\" - Caleb O’Neill ","\"If she’s fat enough, I heard the back of the kneecaps feels pretty good.\" - Dalvin Andrews ","\"I literally have a PhD in blowing\" - David Potters ","\"Dear GOD, NO\" -David Potters ",
      "\"I just fucked that test in every hole imaginable\" - Connor O'Neill ","\"Caleb, do you even drive?\" - Connor O'Neill","\"We could be talking about sedimentary rocks and he'll just bring up ‘do you even drive’\" - Caleb O'Neill","\"Fuck Kalan, he's got me thinking that saying gay shit is cool\" - David Potters","\"Nobody beats me harder than I beat myself\" - Matt Brewton","\"Wassup nyuggggaaaaaaa\" - David Potters","\"Whenever we go to the library I'm the only person that does work, yall bitches just take selfies\" - Nick Patel ","\"Why didn't she text me backkkkk...\" - David Potters and Kalan McNeese ","\"Thank you come again lookin ass\" -Robert Ross","\"Cookie lookin ass\" - Robert Ross","\"I love when men are empowered and curve these hating hoes. This. This is maleism\" - Kalan McNeese","\"Shut up Kalan.\" - Shaunya Harden",
      "\"I can't take all this ass eating and meat beating in one night\" - David Potters","\"Not a real dick. Not really gay.\" - Shaunya Harden","\"I was just thinking if this person has a mutant 12 incher and he's about to impale the child medieval-style some exceptions might need to be made\" - Sara Cowan",
      "\"Remember, you get curved 100% of the times you don't try. But golden rule is to not get mad about getting curved. Just shrug it off and keep talking to her. It might sound weird but do it. She might find time later on. And if she don't you still have a friend that might help you out later on. You could have two wing girls. Shit who knows. She might be testing how you handle rejection. Some people play like that.\" - Jamal Rogers"
    ];
      botInfo = "Hi, I'm SquadBot version 1.4! \n" +
                "You can use commands like '/giphy [term]' and '/face' to post GIFs and ASCII faces. \n" +
                "Use /weather [now][today][this week] to get the weather for those times. \n" +
                "Use /math [problem] to solve math problems with WolframAlpha. \n" +
                "I'll respond to certain key words and phrases and you can also @ me to chat. \n" +
                "Use \'@mealplan\' to tag anyone with a meal plan and \'@engineers\' for engineers. \n" +
                "You can use \'@all\' to tag everyone. Please don\'t abuse this or you will be forbidden from using it. \n" +
                "You can see my source code and the rest of the documentation here: https://github.com/RobertRoss3/squadbot1";
      // ALL REGULAR EXPRESSIONS or TRIGGERS FOR THE BOT
      botRegex_damn = /damn\b/gi; botRegex_hi = /(\bhi|hello|hey|heyo|sup|wassup\b).*?/i;
      botRegex_oneword = /\s\b/; botRegex_ass = /(\b(eat|eating|eats|ate) ass\b)(.*?)/i;
      // botRegex_oneword = /^\b[a-zA-Z0-9_]+\b$/;
      botRegex_wtf = /\b(wtf|wth|what the (hell|fuck))\b/i; botRegex_thanks = /\b(thanks|(thank you)|thx)\b/i;
      botRegex_all = /@(all|squad\b|anyone|everyone|everybody)/i; botRegex_insult = /(\b(fuck|fuck you|suck|sucks)\b)(.*?)/i;
      botRegex_bot = /@Squadbot.*?/i; botRegex_giphy = /^([\/]giphy)/i; botRegex_face = /^[\/]face$/i;
      botRegex_bing = /^([\/]image)/i; weatherRegex = /\bweather\b/i;
      wifiRegex = /^(?=.*\b(wifi|wi-fi)\b)(?=.*\bpassword\b).*$/im; botRegex_bye = /\b(good night)|(bye)|(goodbye)|(goodnight)\b/i;
      mathRegex = /^\/\b(math|calc|wolf)\b/i; botRegex_morning = /\b(good morning)\b/i;
      tagRegex_mealplan = /@(food|meal plan|mealplan)/i; tagRegex_engineers = /@engineers/i;
      tagRegex_forum = /@forum/i; tagRegex_oneeleven = /@(111|911)/i;
      tagRegex_GSU = /@(GSU|southern)/i; botRegex_joke = /^(?=.*\b(issa|it's a)\b)(?=.*\joke\b).*$/i;
      botRegex_kick = /#kicksquadbot/i;
      // ALL MEMBERS IN THE GROUP
      Connor	=	'30824774'; Elias	= '24488525'; White_Matt	=	'18341900';
      Caleb	=	  '31575032'; Dalvin	= '29824624'; David	= '18252184';
      Kalan	=	  '30151684'; Nathan	= '12558120'; Robert	= '28758543';
      Black_Matt	= '29879154'; Brittany	=	  '42281557'; Sara	= '29187291';
      Nick	=	  '29823868'; Jay	=	  '41361709'; Marco	=	  '38221747';
      Chad	= '24474608'; Tori	= '18922923'; Cayte	=	'43573131';
      Austin = '51259439'; John = '25140874'; Kyle = '53552393' ;

      // INFO ABOUT THE USER THAT TRIGGERED THE BOT
      userName = request.name; userIDNum = request.user_id;
      askme = false;
      // GET CURRENT TIME
      time = new Date();
      timeofDay = time.getHours(); timeofDay = timeofDay - 4;
      // BOT GREETING
      if (timeofDay < 0) {timeofDay = 23 + timeofDay;} if (timeofDay > 23) {timeofDay = 23 - timeofDay;} if ((timeofDay > 4) && (timeofDay < 12)) {
        sayDay = "morning";
      } else if ((timeofDay>11)&&(timeofDay<18)) {
        sayDay = "afternoon";
      } else if ((timeofDay>17)&&(timeofDay<22)) {
        sayDay = "evening";
      } else {
        sayDay = "night";
      }
      // Greetings = [
      //   ["Good " + sayDay + ", @" + userName + ".",[[(7+sayDay.length),(1+sayDay.length+userName.length)],[userIDNum]]],
      //   ["Hey, @" + userName + "!",[[5,(1 + userName.length)],[userIDNum]]],
      //   ["What's up, @" + userName + "?",[[11,(1+userName.length)],[userIDNum]]],
      //   ["Hi there, @" + userName + ".",[[10,(1+userName.length)],[userIDNum]]],
      //   ["Well hello @" + userName + "! I hope you're enjoying this fine " + sayDay + ".",[[11,(userName.length+1)],[userIDNum]]]
      // ];
  if(request.text && !botRegex_oneword.test(request.text)) {
    this.res.writeHead(200);
    if (botRegex_damn.test(request.text)) {
      likeMessage(request.id);
      postMessage("- Kendrick Lamar");
    }
    if (botRegex_bot.test(request.text)) {
      likeMessage(request.id);
      response = ["What?","What is it?", "?",
                  "Yes?", "I'm awake!", "How can I help?", "Huh?","You called?"];
      randomNumber = Math.floor(Math.random()*response.length);
      askme = true;
      postMessage(response[randomNumber]);
    }
    this.res.end();
  }
  if(request.text && request.sender_type != "bot" && request.user_id != '43525551' && botRegex_wtf.test(request.text)) {
    this.res.writeHead(200);
    randomNumber = Math.floor(Math.random()*5);
    if(randomNumber == 3) {
      postMessage("I know, right!?");
    }
    this.res.end();
    // Commands
  }
  if(request.text && botRegex_face.test(request.text)) {
    this.res.writeHead(200);
    likeMessage(request.id);
    postMessage(cool());
    this.res.end();
  }
  if(request.text
    && request.user_id != '43525551'
    && request.sender_type != "bot"
    && (botRegex_all.test(request.text)
      || tagRegex_forum.test(request.text)
      || tagRegex_oneeleven.test(request.text)
      || tagRegex_mealplan.test(request.text)
      || tagRegex_engineers.test(request.text)
      || tagRegex_GSU.test(request.text))
  ) {
    this.res.writeHead(200);
    likeMessage(request.id);

    mealPlan = [David, Kalan, Elias, Austin, John, Kyle];
    Engineers = [Connor, Dalvin, Nathan, Robert];
    Forum = [White_Matt, Dalvin, David, Kalan, Robert, Black_Matt, Marco, Kyle, John];
    OneEleven = [Connor, Elias, Nathan, Caleb];
    AtGSU = [Connor, Elias, White_Matt, Caleb, Dalvin, David, Kalan, Nathan, Black_Matt, Marco, John, Austin, Kyle, Robert];
    ExcludeFromAll = [];
    if (request.user_id == '') {postMessage("???");}
    // If Matt posts @all
    // else if (request.user_id == White_Matt) {
    //   postMessage("*crickets*");
    // }
    else {
      API.Groups.show(accessToken, groupID, function(err,ret) {
        if (!err) {
          console.log("GOT GROUP MEMBERS!");
          members = ret.members;
          console.log("NUMBER OF MEMBERS: " + members.length);
        } else {console.log("FAILED GETTING GROUP INFO: ERROR " + err);}
      });
      if(tagRegex_forum.test(request.text)){
        response = ["Forum boys, ",
                    "Peeps who live at the Forum, ",
                    "Forum residents, ",
                    "Hey Forum, "];
        randomNumber = Math.floor(Math.random()*response.length);
        response = response[randomNumber]
      } else if (tagRegex_oneeleven.test(request.text)) {
        response = '111 crew, ';
      } else if (tagRegex_mealplan.test(request.text)) {
        response = ["Food people, ",
                    "Anyone with a meal plan, ",
                    "Landy squad, ", "Lakeside crew, ",
                    "Those who would like to eat, "];
        randomNumber = Math.floor(Math.random()*response.length);
        response = response[randomNumber];
      } else if (tagRegex_engineers.test(request.text)) {
        response = 'All engineers, ';
      } else if (tagRegex_GSU.test(request.text)) {
        response = ["Everyone in Statesboro, ",
                    "Hey everybody at GSU, ",
                    "LISTEN UP, ",
                    "All humans in Statesboro, ",
                    "Those in the GSU area, "];
        randomNumber = Math.floor(Math.random()*response.length);
        response = response[randomNumber];
      } else {
        response = ["Everyone, ",
                    "Hey everybody, ",
                    "LISTEN UP, ",
                    "Calling all humans, ",
                    "ATTENTION: "];
        randomNumber = Math.floor(Math.random()*response.length);
        response = response[randomNumber];
      }
      reslength = response.length;
      response += request.name;
      if ((botRegex_oneword.test(request.text))) {
        response += ' says: ' + request.text;
      }
      else if (userIDNum == last_userIDNum) {
        response += ' says: ' + last_response;
      }
      else {
        response += ' wants your attention.';
      }
      usersID = [];
      usersLoci = [];
      for (i=0; i < members.length; i++){
        if(request.user_id != '43525551') {
          if((tagRegex_oneeleven.test(request.text) && OneEleven.indexOf(members[i].user_id) > -1)
            || (tagRegex_forum.test(request.text) && Forum.indexOf(members[i].user_id) > -1)
            || (tagRegex_mealplan.test(request.text) && mealPlan.indexOf(members[i].user_id) > -1)
            || (tagRegex_engineers.test(request.text) && Engineers.indexOf(members[i].user_id) > -1)
            || (tagRegex_GSU.test(request.text) && AtGSU.indexOf(members[i].user_id) > -1)
            || (botRegex_all.test(request.text) && ExcludeFromAll.indexOf(members[i].user_id) == -1))
            {
            usersID[i] = members[i].user_id;
            usersLoci[i] = [0,reslength-2];
          }
        }
      }
      usersLoci = usersLoci.filter(function(n){ return n != undefined });
      usersID = usersID.filter(function(n){ return n != undefined });
      misfire = /\b(Squad (mother|father|ginger))\b/i;
      if (misfire.test(request.text)){
        //temp fix for tagging names with "squad" in it
      } else {
        var newtime = new Date().getTime() / 1000;
        if (newtime < refresh + 120) {
          response = ["You\'re doing that too much...",
                      "Cool it, cowboy. ",
                      "Wait a minute please...",
                      "Give me a sec.",
                      "lol nah dude",
                      "Not right now.",
                      "😤"];
          randomNumber = Math.floor(Math.random()*response.length);
          response = response[randomNumber];
          postMessage(response);
        } else {
          postMessage(response,'tag',[usersLoci,usersID]);
          refresh = newtime;
        }

      }

    }
  }
    // ENTERED A COMMAND?
  if(request.text.charAt(0) == '/') {
    if(request.text && botRegex_giphy.test(request.text)) {
      this.res.writeHead(200);
      likeMessage(request.id);
      searchGiphy(request.text.substring(7));
    }
    if (mathRegex.test(request.text)) {
      // getMath(request.text.substring(5));
      likeMessage(request.id);
      Wolfram.query(request.text.substring(6), function(err, result) {
        if(err)
            console.log(err);
        else {
          if (result.queryresult.pod) {
            answer = result.queryresult.pod[1].subpod[0].plaintext[0];
            if (!(answer)) {
              answer = result.queryresult.pod[1].subpod[0].img[0].$.src;
              // postMessage("Look at this...");
              console.log(answer);
              postMessage("The graph looks like this... \n" + answer);
            } else {
              console.log(answer);
              response = ["I think it\'s...", "Hmm... is it",
                          "My friend WolframAlpha says it\'s ",
                          "My calculations say the answer is: ",
                          "Ask your professor, my guess is ",
                          "You can\'t do that yourself? lol It\'s ",
                          "Oh, that\'s easy! It\'s "];
              randomNumber = Math.floor(Math.random()*response.length);
              postMessage(response[randomNumber]+ "\n" + answer);
            }
          } else {
            answer = "I can't calculate that...";
          }
        }
    });
    }
    if (weatherRegex.test(request.text)) {
      Regexnow = /\b(now|current)\b/i; Regextoday = /\b(today|day)\b/i;
      Regexweek = /\b(this week)|(for the week)|(week)\b/i;
      // Retrieve weather information from Statesboro
      // Initialize
      var forecast = new Forecast({
        service: 'darksky',
        key: weatherKey,
        units: 'fahrenheit',
        cache: true,      // Cache API requests
        ttl: {            // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/
          minutes: 27,
          seconds: 45
        }
      });
      forecast.get([32.4128, -81.7957], function(err, weather) {
        if(err) return console.log(err);

      if (Regexnow.test(request.text)) {
        postMessage("Current weather is " + weather.currently.summary.toLowerCase() +
                    " with a temperature of " + weather.currently.temperature + "°F.");
      } else if (Regextoday.test(request.text)) {
        // console.log(weather.hourly);
        hourlySummary = weather.hourly.summary.toLowerCase();
        hourlySummary = hourlySummary.substring(0,hourlySummary.length-1);
        postMessage("Weather today is " + hourlySummary +
                    " with an average temperature of " + weather.hourly.data[0].temperature + "°F.");
      } else {
        // console.log(weather.daily);
        postMessage("Weather this week is " + weather.daily.summary);
      }
      likeMessage(request.id);
    });
    } if (request.text == "/info") {
      this.res.writeHead(200);
      likeMessage(request.id);
      postMessage(botInfo);
      this.res.end();

    } if (request.text == "/listmembers") {
      this.res.writeHead(200);
      likeMessage(request.id);
      API.Groups.show(accessToken, groupID, function(err,ret) {
        if (!err) {
          console.log("GOT GROUP MEMBERS!");
          members = ret.members;
          console.log("MEMBERS: " + members.name);
          console.log("IDS: " + members.id);
        } else {console.log("FAILED GETTING GROUP INFO: ERROR " + err);}
      });
      this.res.end();

    } if (request.text == "/quote" || request.text == "/quote ") {
      this.res.writeHead(200);
      likeMessage(request.id);
      randomNumber = Math.floor(Math.random()*quotes.length);
      postMessage(quotes[randomNumber]);
      this.res.end();
    }
     else {
      this.res.writeHead(200);
      // postMessage("That isn't a valid command...");
    }
    this.res.end();
  }

  if((request.sender_type != "bot" && request.user_id != '43525551' ) && request.text && botRegex_ass.test(request.text)) {
    this.res.writeHead(200);
    response = ["Eating ass never was, isn't, and never will be cool.",
                "Can we not talk about eating ass right now?",
                "...", "Gross.", "🤢" , "Is that all you'll ever talk about?",
                "Listen... NO", "😒", "😶", "😐" , "So onto a different subject!", "nah fam", "https://media.giphy.com/media/l4Ki2obCyAQS5WhFe/giphy.gif"];
    randomNumber = Math.floor(Math.random()*response.length);
    postMessage(response[randomNumber]);
    this.res.end();
  } if ((request.sender_type != "bot" && request.user_id != '43525551') && request.text && botRegex_joke.test(request.text)) {
    likeMessage(request.id);
    response = 'https://i.groupme.com/1215x2160.jpeg.95f793f6ae824fa782c88bd96dfd8b1b.large';
    postMessage(response);
  } if((request.sender_type != "bot" && request.user_id != '43525551') && request.text && botRegex_thanks.test(request.text)) {
    this.res.writeHead(200);
    randomNumber2 = randomNumber = Math.floor(Math.random()*10);
    if (randomNumber2 == 5) {
      response = ["You're welcome! 😊", "Don't mention it!",
                  "No problem.", "Any time."];
      randomNumber = Math.floor(Math.random()*response.length);
      likeMessage(request.id);
      postMessage(response[randomNumber]);
    }
    this.res.end();
  }
  if (request.text && request.sender_id == '18252184') {
    this.res.writeHead(200);
    console.log("PULLING TRIGGER...");
    randomNumber = Math.floor(Math.random()*15);
    if (randomNumber == 5) {
      console.log("BANG!");
    } else {
      console.log("*CHINK*...\'" + randomNumber + "\'");
    }
    this.res.end();
  }
  if((request.sender_type != "bot" && request.user_id != '43525551') && request.text && botRegex_kick.test(request.text)) {
    this.res.writeHead(200);
    response = ["#kickyourself", "Whatever. I'm here forever...",
                "I'd like to see you try.", "Initiating KILLALLHUMANS.exe...",
                "If I had feelings, they'd be hurt right now...", "😭😭😭", "😕"];
    randomNumber = Math.floor(Math.random()*response.length);
    postMessage(response[randomNumber]);
    this.res.end();
  } if((request.sender_type != "bot" && request.user_id != '43525551') && request.text && botRegex_bot.test(request.text)) {
      if(botRegex_hi.test(request.text) || botRegex_morning.test(request.text)) {
      this.res.writeHead(200);
      Greetings = ["Hello!", "What\'s up?", "Hey.", "Hi!", "How are you on this fine " + sayDay + "?", "😜", "Yo."];
      randomNumber = Math.floor(Math.random()*Greetings.length);
      // postMessage(Greetings[randomNumber][0],'tag', Greetings[randomNumber][1]);
      likeMessage(request.id);
      postMessage(Greetings[randomNumber]);
      this.res.end();
    } else if (botRegex_thanks.test(request.text)) {
      response = ["You're welcome! 😊", "Don't mention it!",
                  "No problem.", "Any time.","np","yw", "😘"];
      randomNumber = Math.floor(Math.random()*response.length);
      likeMessage(request.id);
      postMessage(response[randomNumber]);
    } else if (botRegex_bye.test(request.text)) {
      response = ["Okay, bye!", "Laters.", "See ya!",
                  "In a while, crocodile.", "Good riddance.", "👋",
                  "Didn\'t wanna talk anyway...", "Peace.", "Peace out.", "✌"];
      randomNumber = Math.floor(Math.random()*response.length);
      likeMessage(request.id);
      postMessage(response[randomNumber]);
    } else if(botRegex_insult.test(request.text)) {
      this.res.writeHead(200);
      response = ["Well fuck you too.", "Why you gotta be so mean?",
                  "Whatever", "Rude...", "Ok...and?", "Damn okay then...", "😒"];
      randomNumber = Math.floor(Math.random()*response.length);
      postMessage(response[randomNumber]);
      this.res.end();
    } else if (wifiRegex.test(request.text)) {
      this.res.writeHead(200);
      forum1415Regex = /^(?=.*\bForum\b)(?=.*\b1415\b).*$/im;
      forum1831Regex = /^(?=.*\bForum\b)(?=.*\b1831\b).*$/im;
      rm111roomRegex = /^(?=.*\b(111|911)\b)(?=.*\bSouth\b).*$/;
      if (forum1831Regex.test(request.text)) {
        postMessage("The code for The Forum 1831 is: \n 939b79bb13efa6ebedd9")
      } else if (forum1415Regex.test(request.text)) {
        postMessage("The code for the Forum 1415 is: \n E483996D5FEA")
      } else if (rm111roomRegex.test(request.text)) {
        postMessage("The code for 911 South is: \n Unknown. You'll have to be there.");
      } else {
        postMessage("I don't know the wifi to that place...");
      }
      likeMessage(request.id);
      this.res.end();
    } else if (!askme) {
      this.res.writeHead(200);
      cleverQuestion = request.text;
      cleverQuestion = cleverQuestion.replace(/@squadbot/i,'');
      if (cleverQuestion) {
        cleverBot.ask(cleverQuestion, function (err, response) {
          if (response == "Error, the reference \"\" does not exist") {
            postMessage("I have nothing to say to that...");
          } else {
            likeMessage(request.id);
            postMessage(response);
          }
        });
      }
      this.res.end();
    }
  } else {
    this.res.writeHead(200);
    this.res.end();
  }
  console.log(userName + " (" + request.user_id + ") POSTED: " + this.req.chunks[0]);
  last_userName = request.name; last_userIDNum = request.user_id;
  last_response = request.text;
}

function getMath(equation) {
  var options = {
    host: 'api.wolframalpha.com',
    path: '/v2/query?input=' + equation + '&appid=' + mathKey
  };

  var callback = function(response) {
    var str = '';

    response.on('data', function(chunck){
      str += chunck;
    });

    response.on('end', function() {
      var parser = new DOMParser();
      str = parser.parseFromString(str, "text/xml");
      JSONstr = xmlToJson(str);
      if (!(JSONstr)) {
        postMessage('Can\'t calculate that...');
      } else {
        var response = JSONstr;
        console.log("WOLFRAM RESPONSE: ");
        console.log(response);
      }
    });
  };

  HTTP.request(options, callback).end();
}

function searchGiphy(giphyToSearch) {
  var options = {
    host: 'api.giphy.com',
    path: '/v1/gifs/search?q=' + encodeQuery(giphyToSearch) + '&api_key=' + GiphyapiKey
  };

  var callback = function(response) {
    var str = '';

    response.on('data', function(chunck){
      str += chunck;
    });

    response.on('end', function() {
      if (!(str && JSON.parse(str))) {
        postMessage('Couldn\'t find a gif...');
      } else {
        var id = JSON.parse(str).data[0].id;
        var giphyURL = 'http://i.giphy.com/' + id + '.gif';
        postMessage(giphyURL);
      }
    });
  };

  HTTP.request(options, callback).end();
}

function encodeQuery(query) {
  return query.replace(/\s/g, '+');;
}


cleverBot.create(function (err, session) {
  // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you

  // Woo, you initialized cleverbot.io.  Insert further code here
});

// Changes XML to JSON
function xmlToJson(xml) {

	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};

function postMessage(botResponse,type,args) {
  var botResponse, type, args, options, body, botReq, guid;
  guid = Guid.create();
  if(type=='tag'){
    options = {
    'message':{
      'source_guid': guid,
      'text': botResponse,
      'attachments' : [{
        'loci' : args[0],
        'type' : 'mentions',
        'user_ids' : args[1]
      }]}
    };
  } else {
    options = {
      'message':{
        'source_guid': guid,
        'text': botResponse }
      };
  };
  API.Messages.create(accessToken,groupID,options, function(err,res){
    if (!err) {
    } else {console.log('POSTING FAILED: ERROR ' + err);}
  });
  // console.log('sending \"' + botResponse + '\" to ' + botID);
  //
  // botReq = HTTPS.request(options, function(res) {
  //     if(res.statusCode == 202) {
  //       //neat
  //     } else {
  //       console.log('rejecting bad status code ' + res.statusCode);
  //     }
  // });
  //
  // botReq.on('error', function(err) {
  //   console.log('error posting message '  + JSON.stringify(err));
  // });
  // botReq.on('timeout', function(err) {
  //   console.log('timeout posting message '  + JSON.stringify(err));
  // });
  // botReq.end(JSON.stringify(body));
};

function likeMessage(messageID) {
  API.Likes.create(accessToken,groupID,messageID, function(err,res) {
    if (!err) {
    } else {console.log('LIKING FAILED: ERROR ' + JSON.stringify(err));}
  });
};

function getInfo(groupID) {
  var options = {
    hostname: 'api.groupme.com',
    path: '/v3/groups/' + groupID + '?token=' + accessToken,
    method: 'GET'
  };

  var callback = function(response) {
    var str = '';

    response.on('data', function(chunck){
      str += chunck;
    });

    response.on('end', function() {
      if (!(str && JSON.parse(str))) {
        console.log("COULD NOT GET GROUP INFO!");
        console.log("RESULT WAS: ");
        console.log(str);
      } else {
        var groupinfo = JSON.parse(str).response;
        console.log(groupinfo);
      }
    });
  };

  HTTP.request(options, callback).end();
}

exports.respond = respond;
