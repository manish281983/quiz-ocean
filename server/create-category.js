console.log('starting function');
 const AWS = require('aws-sdk');
 const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

 exports.handler = function(e, ctx, callback) {
        var params = {
            Item : {
                name: 'Wine',
                id: 3,
                parentid: 0
            },
            TableName: 'shopping-category'
        };

        docClient.put(params, function(err, data){
            if(err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        });

 }