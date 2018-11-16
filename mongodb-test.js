var dateTime = require('node-datetime');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
/*
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("IPT");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("collects0").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }); 
*/
var t = 0;
var MainDB;
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    MainDB = db.db("Main");
});



var dt = dateTime.create();
var formatted = dt.format('Y-m-d');
var IPAddress = ':::fff:192:168:100:100';
var QueryToFindIPT = { IPA: ':::fff:192:168:100:100' };
MainDB.collection("IPT").find(QueryToFindIPT).toArray(function (err, result) {
    if (err) {
        throw err;
    }
    if (result.length == 0) {
        MainDB.collection("IPT").insertOne({ IPA: IPAddress, Ents: [{ date: formatted, Times: 3 }, { date: "Hi", Times: 9 }] }, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
        });
    }
    else {
        if (result[0]['IPA'] == IPAddress) {
            var Entss = result[0]['Ents'];
            for (let index = 0; index < Entss.length; index++) {

                if (Entss[index].date == formatted) {
                    Entss[index].Times += 1;
                    result[0]['Ents'] = Entss;
                }
            }
            MainDB.collection("IPT").updateOne({ _id: result[0]['_id'] }, { $set: { "Ents": result[0]['Ents'] } });
        }
        else {
            console.log(result);
        }
    }


    db.close();

});
    /*
    MainDB.collection("IPT").find(QueryToFindIPT).toArray(function (err, result) {
        if (err) {

            throw err;
        }
        console.log(result);
        db.close();
    });*/