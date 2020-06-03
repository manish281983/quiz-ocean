console.log('starting function');
 const AWS = require('aws-sdk');
 const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

 
 exports.handler = function(e, ctx, callback) {
    let scanningParameters = {
        TableName: 'shopping-category',
        Limit: 100
    }

    docClient.scan(scanningParameters, function(err, data){
        if(err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });

    /*
//FOR FETCH SPECIFIC RECORD
    var params = {
            Key : {
                id: 1
            },
            TableName: 'shopping-category'
        };

        docClient.get(params, function(err, data){
        if(err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });

        */
}




