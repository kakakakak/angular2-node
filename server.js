var express = require('express')
,	app = express()
,	path = require('path')
,	http = require('http').Server(app);


app.set('port', process.env.PORT || 9000);
app.use(express.static(path.join(__dirname, 'public')));


//首页
app.get('/', function(req,	res){
	res.sendfile('views/index.html');
});


app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});