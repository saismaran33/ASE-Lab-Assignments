var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://saismaran33:Option1234@ds127065.mlab.com:27065/aselab9';
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});
