var parser = require('cron-parser');

var options = {
	currentDate: new Date('Wed, 26 Dec 2021 12:38:53 UTC'),
	endDate: new Date('Wed, 26 Dec 2021 14:40:00 UTC'),
	iterator:true,
	tz: 'Europe/Athens'
}

try {

	var interval = parser.parseExpression('*/22 * * * *',options);

	while(true){
		try{
			var obj = interval.next();
			console.log('value:',obj.value.toString(),'done:',obj.done);
		}catch(e){
			break;
		}
	}
}catch(err){
	console.log("Error: " + err.message);
}


// Simple Expression example below

// try {

// 	var interval = parser.parseExpression('*/222 * * * *',options);

// 	console.log('Date: ', interval.next().toString());
// 	console.log('Date: ', interval.next().toString());

// 	console.log('Date: ', interval.prev().toString());
// 	console.log('Date: ', interval.prev().toString());

// }catch(err){
// 	console.log('Error: ' + err.message);
// }