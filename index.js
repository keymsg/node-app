/**
 * Created by PCAPPS50 on 11/28/2016.
 */


var express = require('express');
var app = express();

var queue = async.queue(SendEmail, 1);
// assign a callback
queue.drain = function() {
    console.log('all items have been processed');
};
app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.listen(9003, function () {
    console.log('Node app listening on port 9003...!!!');
});

function pushNotification() {
    queue.push({url: "/users/1", data: {attrib: "value"}, method: "POST"}, function (error) {
        if (error) {
            lconsole.log(error);
        }
        else {
            console.log("Finished processing: ", url);
        }
    });

}

function sendNotification(data, next) {
    console.log("Received Data: ", data);
    next(null, true);
}