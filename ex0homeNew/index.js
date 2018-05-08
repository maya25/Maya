var Emitter = require('events');
var eventsConfig = require('./config').functions;
var myEmtr = new Emitter();
var message = require('./config').messages;
var summSurvey = require('./config').summerySurvey;
var main = require('./mainVote');



var http = require("http");
http.createServer(function (req, res) {

  //  call to 'mainVote'
var invoke1 = main(['flowers','red','blue','green']);
var invoke2 = main(['movies','drama','comedy','seince']);
 //var invoke3 = main('vaad','dira1','dira2','dira3');
// var invoke4 = main('vaad','dira1','dira2','dira3');

// for 4 :
// var invoke4 = main('vaad','dira1','dira2','dira3','dira4');


// print to browser:
res.write(message.toString());
  // GET ALL:
console.log(" S U M M E R Y :");
console.log(summSurvey.toString());
res.write(" S U M M E R Y :");
res.write(summSurvey.toString());

  res.end();
}).listen(3000);    // need to be 8080 !
console.log("listening on port 3000");





