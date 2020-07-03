    const url= 'http://logger.api.com'

function sendLog(data){
    console.log('Log: '+data)
}

exports.url = url;
exports.sendLog= sendLog;