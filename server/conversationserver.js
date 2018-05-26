var express = require('express');
var bodyParser = require('body-parser');
var watson = require('watson-developer-cloud');
var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

var assistant = new watson.AssistantV1({
  username: 'a5a11b4e-2d70-4424-8c07-f43c27d8be41',
  password: 'TWOL7OCOk8Uy',
  version: watson.ConversationV1.VERSION_DATE_2017_05_26
});

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.post('/api/message', function(req, res) {
  var input = req.query.message;
  //Possibly parse input to something... don't know yet

  assistant.message({
    workspace_id: '5a5da6e5-685a-45d3-b8a2-9ef125a14afd',
    input: {'text': input}
  },  function(err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
      //res.send(JSON.stringify(response, null, 2));
      var a = "sup";
      res.json(response);
  });

});

app.listen(3002, () => console.log("Listening on 3002"));
