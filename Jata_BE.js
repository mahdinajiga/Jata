/*
Jata for test
10/4/2018
booklet dealing web app
*/






// Libs
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const fs = require('fs');
var dateTime = require('node-datetime');

// MongoDB queries
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// MongoDB Settup
var MainDB;
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    MainDB = db.db("Main");






    // Create application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false })
    app.use(express.static('public'));
    ////////////////////////////////////////////// end of Libs

    //global variables
    var Faculties = {
        "Faculties": ["دانشکده مهندسی برق و کامپیوتر", "دانشکده جغرافیا و برنامه ریزی", "دانشکده زبان های خارجی و ادبیات", "دانشکده ریاضی", "دانشکده شیمی", "دانشکده کشاورزی",
            "دانشکده علوم تربیتی و روانشناسی", "دانشکده علوم طبیعی", "دانشکده فیزیک", "دانشکده دامپزشکی", "دانشکده فنی مهندسی مرند", "دانشکده کشاورزی و منابع طبیعی اهر", "دانشکده الهیات و علوم اسلامی",
            "دانشکده حقوق و علوم اجتماعی", "دانشکده اقتصاد مدیریت و بازرگانی", "دانشکده تربیت بدنی و علوم ورزشی", "دانشکده مهندسی فناوری های مدرن", "دانشکده مهندسی شیمی و نفت", "دانشکده فنی مهندسی میانه", "دانشکده مهندسی عمران",
            "دانشکده مهندسی مکانیک"
        ]
    };

    var MTRTR = 10;// the most times ready to respond to IPs, (IPTs)


    //Static Html codes
    //delete record page default
    var DlHtml4 = `);" style="background: rgb(40, 0, 40) none repeat scroll 0% 0%; font-size: 150%;" type="button"><div id="msg2"></div></div>`;
    var DlHtml3 = `<span class="txt3">Wrong password. sending regenerated password to this email???<br></span><input class="inputbox0" name="SBeml" id="emls" value="youremail@test.com" onclick=" " style="background: rgb(0, 0, 0) none repeat scroll 0% 0%; font-size: 150%;" type="text">
<input class="button" name="SrgB" id="BSrgB" value="Send New Password" onclick="RegPsB(`;
    var DlHtml2 = `);" style="background: rgb(40, 0, 40) none repeat scroll 0% 0%; font-size: 150%;" type="button"><div id="msg"></div></div>`;
    var DlHtml1 = `<html><head><p><font size="1" color="black"><a href="http://t.me/TNEGABSU" target="_blank">@TNEGABSU</a></font></p>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>More details...</title><link rel="stylesheet" href="./del.css"><script type="text/javascript" src="/del.js"></script></head><body><div class="contain"><span class="txt3">Password: </span>
<input class="inputbox0" name="SBpass" id="Spass" value="Password" onclick=" " style="background: rgb(0, 0, 0) none repeat scroll 0% 0%; font-size: 150%;" type="password">
<input class="button" name="SubmitNewB" id="BSubmitNewB" value="Submit" onclick="SendDel(`;

    //show records page default
    var ShHtml3 = `</td></tr></table><table id="t01"><tr><th>Description</th></tr><tr><td>`;
    var ShHtml2 = `</td></tr></table><table id="t01"><tr><th>Proffesor</th><th>Lesson Name</th> </tr><tr><td>`;
    var ShHtml = `
<html><head><p><font size="1" color="black"><a href="http://t.me/TNEGABSU" target="_blank">@TNEGABSU</a></font></p>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>More details...</title><link rel="stylesheet" href="./more.css"></head>
<body><div class="contain"><table id="t01">
<tr>
<th>Phone Number</th>
<th>Date</th> 
<th>Faculty</th>
</tr><tr><td>`;




    /***************************************************************************************************
    fs.readFile('a.txt', (err, data) => {
        if (err) throw err;
        console.log(data.toString());
    
      });
    
      fs.open('a.txt', 'w', (err, fd) => {
        if (err) throw err;
    
        fs.write(fd, 'data to append', (err , written , string ) => {
            if (err) throw err;
            console.log(written);
            console.log(string);
            fs.close(fd, (err) => {
                if (err) throw err;
              });
          })
    
      });
    */



    //PAGE:index
    //#region index
    app.get('/', function (req, res) {
							var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
                
        console.log("///\t" + formatted + "\t" + req.ip);
        res.sendFile(__dirname + "/public/" + "index.htm");
    })
    app.get('/index.css', function (req, res) {
							var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        console.log("index.css\t" + formatted + "\t" + req.ip);
        res.sendFile(__dirname + "/public/" + "index.css");
    })
    app.get('/index.js', function (req, res) {
        var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        console.log("index.js\t" + formatted + "\t" + req.ip);
        res.sendFile(__dirname + "/public/" + "index.js");
    })
    //#endregion



    //PAGE:more.css
    //#region more
    app.get('/more.css', function (req, res) {
							var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        
        console.log("more.css\t" + formatted + "\t" + req.ip);
        res.sendFile(__dirname + "/public/" + "more.css");
    })
    //#endregion



    //PAGE:delete
    //#region delete
    app.get('/del', function (req, res) {
							var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        
        console.log("del\t" + formatted + "\t" + req.ip);
        var resp = DlHtml1 + req.query.Add + "," + req.query.index + "" + DlHtml2;
        res.send(resp);
    })

    app.get('/del.css', function (req, res) {
							var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        console.log("del.css\t" + formatted + "\t" + req.ip);
        res.sendFile(__dirname + "/public/" + "del.css");
    })

    app.get('/del.js', function (req, res) {
							var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        console.log("del.js\t" + formatted + "\t" + req.ip);
        res.sendFile(__dirname + "/public/" + "del.js");
    })
    //#endregion





    //responding (var Faculties)
    app.get('/Faculties', function (req, res) {
							var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        console.log("Faculties\t" + formatted + "\t" + req.ip);
        res.send(JSON.stringify(Faculties));
    })










    /*
    a test code to reset IP counting index
    for currently requested ip
    */
    app.get('/8980', function (req, res) {
							var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        console.log("8980\t" + formatted + "\t" + req.ip);
        var y;
        var reess = "<html><body>";
        /*
        try {
            y = JSON.parse(fs.readFileSync('IPT').toString());
        } catch (err) {
            if (err.code === 'ENOENT') {
                reess += "ENOENT<br>";
            } else {
                reess += err;
                reess += "<br><br>";
                throw err;
            }
        }
        var timess = y[req.ip];*/
        GetIPT(req.ip, function (ret) {
            reess += ret;
            SetIPT(req.ip, 0);

            //reess += timess;
            //y[req.ip] = 0;
            //fs.writeFileSync(__dirname + '/IPT', JSON.stringify(y));
            reess += "<br><br><hr><h2>Confirmed</h2></body></html>";
            res.send(reess);
        });
    })

    /***************************************************************************************************
    app.get('/', function (req, res) {
       res.send('Hello World');
       console.log("%s\n", req.a;
    })*/



















    //REQUEST:delete record
    //#region delete
    /*
    delete a selected record (not actually :D:D)
    "Method-Type": POST
    "Content-Type": "application/x-www-form-urlencoded"
    
    only once called in "async function SendDel(add, inx) " in del.js
    
    INPUTS:
    JSON{name:"BD"}in body(req.body.BD)
    {
        index: record file indexed name in "Addr"
        addr: Faculty indexed name folder address
        sps: Password requested for deleting						
    }
    
    
    OUTPUTS:
    response to web page
    and
    new file in 'faculty folder' named 'next index' including JSON data about new booklet
    JSON
    {
        PhN: Phone Number
        Faculty: Faculty index
        Eml: EMail address
        Spass: Deleting Password
        LeN: Lesson Name
        ProffN: Proffesor name
        Desc: Description about booklet
        +
        ip: first ip recorded for assinging
        date_added: date_added	
        IsDeleted: 0for first time, 1 for after deleting the record (CAUTION:records always remain)					
    }
    
    */

    app.post('/delb', urlencodedParser, function (req, res) {
							var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        console.log("delB\t" + formatted + "\t" + req.ip);
        var datatdd = JSON.parse(req.body.BD);  // getting data from body


        /*
        try     // file not found error recovery
        {
            datatod = JSON.parse(fs.readFileSync(__dirname + '/Reqs/' + datatdd['addr'] + '/' + datatdd['index']).toString());
        } catch (err) {
            if (err.code === 'ENOENT') {
                res.end("Record Not Found!!!");
            } else {
                res.end("Something went wrong!!!");
                throw err;
            }
        }*/


        GetIPT(req.ip, function (ret) {
            IncOne(req.ip);// increase IPT by one
            timess = ret;
            if (timess > MTRTR) {
                res.end("TwoManyRequests");
            }
            else { // free to serve
                try {
                    var QueryToFindRecord = { Index: datatdd['index'].toString() };
                    MainDB.collection("Reqs").find(QueryToFindRecord).toArray(function (err, result) {
                        if (err) {
                            throw err;
                        }
                        if (result.length == 0) {
                            res.end("Record Not Found!!!");
                        }
                        else {
                            if (result[0]['IsDeleted'] == 1) {
                                res.end("Record Not Found!!!");
                            }
                            else {
                                if (result[0]['Spass'] == datatdd['sps']) {
                                    //                                  confirmed deleting by user
                                    //                  password is correct and putting some new members to record JSON
                                    //                    such as date_deleted, ip_deleted and setting IsDeleted to 1
                                    var dt = dateTime.create();
                                    var formatted = dt.format('Y-m-d H:M:S');
                                    MainDB.collection("Reqs").updateOne({ _id: result[0]['_id'] }, { $set: { "IsDeleted": 1, "ip_del": req.ip, "date_del": formatted } });
                                    res.end("Record successfully deleted...");
                                }
                                else {
                                    //                              file found but password isn't correct
                                    //                            redirecting to password recovery by email
                                    //                        GOTO: "Sending new password to email (UNAVAILABLE)" 
                                    res.end(DlHtml3 + datatdd['addr'] + "," + datatdd['index'] + DlHtml4);
                                }
                            }
                        }
                    });
                }
                catch (e) {
                    console.log(e);
                }


            }
        });
    })
    //#endregion


















    //PAGE:Sending new password to email (UNAVAILABLE)
    //#region Send Recovered Password
    app.post('/SRP', urlencodedParser, function (req, res) {
							var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        console.log("SRP\t" + formatted + "\t" + req.ip);
        var RPSTE = JSON.parse(req.body.BDa);
        try {
            dataie = JSON.parse(fs.readFileSync(__dirname + '/Reqs/' + RPSTE['addr'] + '/' + RPSTE['index']).toString());
        } catch (err) {
            if (err.code === 'ENOENT') {
                res.end("Something went wrong!!!");
            } else {
                res.end("Something went wrong!!!");
                throw err;
            }
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //                                  sending new pass to email address
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        res.end("No password recovery ability yet.<br>try again later...");
    })
    //#endregion

















    //REQUEST:get more details about selected record
    //#region REQ
    /*
    get more details to costumer
    "Method-Type": GET
    "Content-Type": "application/x-www-form-urlencoded"
    
    only once called in main page "more" link for each record in index.htm
    
    
    INPUTS:
    index: record file index in "Add"
    Add: faculty indexed folder
    
    
    OUTPUTS:
    new web page including members of a record
    
    */
    app.get('/req', function (req, res) {
							var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        console.log("req\t" + formatted + "\t" + req.ip);
        /*
        try     // file not found error recovery
        {
            dFS = JSON.parse(fs.readFileSync(__dirname + '/Reqs/' + req.query.Add + '/' + req.query.index).toString());
        } catch (err) {
            if (err.code === 'ENOENT') {
                res.end("Record Not Found!!!");
            } else {
                res.end("Something went wrong!!!");
                throw err;
            }
        }*/


        try {
            var QueryToFindSameRecord = { Index: req.query.index };
            MainDB.collection("Reqs").find(QueryToFindSameRecord).toArray(function (err, result) {
                if (err) {
                    throw err;
                }
                if (result.length == 0) {
                    res.end("Record Not Found!!!");
                }
                else {
                    // constructing more details webpage
                    var resp = ShHtml + result[0].PhN + "</td><td>" +
                        result[0].date_added + "</td><td>" +
                        Faculties.Faculties[result[0].Faculty] + ShHtml2 +
                        result[0].ProffN + "</td><td>" +
                        result[0].LeN + ShHtml3 + result[0].Desc + `</td></tr></table>
            <a href="/del?index=`+ req.query.index + `&Add=` + req.query.Add + `" target="_blank">Delete this record?</a>
            </div></body></html>`;
                    res.send(resp);
                }
            });
        }
        catch (e) {
            console.log(e);
        }



    })
    //#endregion
















    //PAGE: show info about records
    //#region GetBooklet
    /*
    get booklets to show in main page (lesson name, professor name, date_added, moreLink)  + sort records (UNAVAILABLE)
    "Method-Type": POST
    "Content-Type": "application/x-www-form-urlencoded"
    
    only once called in "async function GetBLs(inx, pge, dccin, dcc)" in index.js
    
    
    INPUTS:
    JSON{name:"BA"}in body(req.body.BA)
    {
        index: faculty index number
        page: page to show data*
        decindex: (UNAVAILABLE) sorting booklets in show
        dec: (UNAVAILABLE)
                            	
    }
    
    
    OUTPUTS:
    response to web page including members of a table in main page
    
    */
    app.post('/GetB', urlencodedParser, function (req, res) {
							var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        console.log("GetB\t" + formatted + "\t" + req.ip);
        var GBD = JSON.parse(req.body.BA);  // getting data from body in BA
        
        var response = "";
        var sortD;
        switch (GBD['decindex']) {
            case 2:
                sortD = {LeN : ((GBD['dec']==1) ? -1 : 1)};
                break;
            case 1:
                sortD = {ProffN : ((GBD['dec']==1) ? -1 : 1)};
                break;
            case 0:
                sortD = {date_added : ((GBD['dec']==1) ? -1 : 1)};
                break;
            default:
                sortD = {date_added : -1};
                break;
        }
        

        try {
            var QueryToFindRecords = { Faculty: GBD['index'] , IsDeleted: 0 };
            MainDB.collection("Reqs").find(QueryToFindRecords).sort(sortD).toArray(function (err, result) {
                if (err) {
                    ret = 0;
                    throw err;
                }
                if (result.length == 0) {
                    var dt = dateTime.create();
                    var formatted = dt.format('Y-m-d H:M:S');
                    response += "<tr><td>" + "هیچ آگهی وجود ندارد" + "</td><td>" + "هیچ آگهی وجود ندارد" + "</td><td>" + formatted + "</td><td>More</td></tr>";
                    res.end(JSON.stringify({data: response, APGS: 1,CPG: 1}));
                }
                else {
                    var ccp = parseInt((result.length - 1) / 10) + 1; // page counts for 10 reocrd per page
                    for (var i = (GBD['page'] - 1) * 10; i < (((GBD['page'] * 10)>=result.length) ? result.length : (GBD['page'] * 10)); i++) {
                        response += "<tr><td>";
                        response += result[i].LeN + "</td><td>" + result[i].ProffN + "</td><td>" + result[i].date_added + "</td><td><a href=\"/req?index=" + result[i].Index + "&Add=" + GBD['index'] + "\" target=\"_blank\">More</a></td></tr>";
                    }
                    res.end(JSON.stringify({data: response, APGS:ccp, CPG:GBD['page']}));
                }
            });
        }
        catch (e) {
            console.log(e);
        }



    })
    //#endregion


















    //REQUEST: recording new booklet
    //#region Newbooklet Assign
    /*
    "Method-Type": POST
    "Content-Type": "application/x-www-form-urlencoded"
    
    only once called in "async function SendNewB()" in index.js
    
    
    INPUTS:
    JSON{name:"NewBA"}in body(req.body.NewBA)
    {
        PhN:document.getElementById("PhN").value
        Faculty:document.getElementById("FacultySelectN").selectedIndex 
        Eml:document.getElementById("Eml").value
        Spass:document.getElementById("Spass").value
        LeN:document.getElementById("LeN").value
        ProffN:document.getElementById("ProffN").value
        Desc:document.getElementById("Descr").value
                            	
    }
    
    
    OUTPUTS:
    response to web page
    and
    new file in 'faculty folder' named 'next index' including JSON data about new booklet
    JSON
    {
        PhN: Phone Number
        Faculty: Faculty index
        Eml: EMail address
        Spass: Deleting Password
        LeN: Lesson Name
        ProffN: Proffesor name
        Desc: Description about booklet
        +
        ip: first ip recorded for assinging
        date_added: date_added	
        IsDeleted: 0for first time, 1 for after deleting the record (CAUTION:records always remain)					
    }
    */
    app.post('/NewBA', urlencodedParser, function (req, res) {
							var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        console.log("NewBA\t" + formatted + "\t" + req.ip);
        /*var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress ;*/

        //IPT(the times that one ip requested for deleting or assinging booklets)
        GetIPT(req.ip, function (ret) {
            IncOne(req.ip);// increase IPT by one
            timess = ret;
            if (timess > MTRTR) {
                res.end("TwoManyRequests");
            }
            else {   // free to request
                


                var IncomingData = JSON.parse(req.body.NewBA);  // parsing incoming data in JSON
                IncomingData['ip'] = req.ip;  // adding new objs to incoming data for saving in record files
                var dt = dateTime.create();
                var formatted = dt.format('Y-m-d H:M:S');
                IncomingData['date_added'] = formatted;
                IncomingData['IsDeleted'] = 0;


                var NIn;    // geting next index name for current record to save
                try     // file not found error recovery
                {
                    NIn = parseInt(fs.readFileSync(__dirname + '/NextIn').toString());
                } catch (err) {
                    if (err.code === 'ENOENT') {
                        res.end("500 something went wrong!!!");
                        throw err;
                    } else {
                        res.end("500 something went wrong!!!");
                        throw err;
                    }
                }
                NIn += 1; // next index :D and saving it
                fs.writeFileSync(__dirname + '/NextIn', NIn.toString());

                IncomingData['Index'] = NIn.toString();

                try {
                    var QueryToFindSameRecord = { $and: [{ LeN: IncomingData['LeN'] }, { ProffN: IncomingData['ProffN'] }, { ip: IncomingData['ip'] } , { IsDeleted: 0}] };
                    MainDB.collection("Reqs").find(QueryToFindSameRecord).toArray(function (err, result) {
                        if (err) {
                            ret = 0;
                            throw err;
                        }
                        if (result.length == 0) {
                            MainDB.collection("Reqs").insertOne(IncomingData, function (err, resu) {
                                if (err) throw err;
                                res.end("Recorded successfully :D");
                            });
                        }
                        else {
                            res.end("403 Something went wrong");
                        }
                        //db.close();
                    });
                    //});
                }
                catch (e) {
                    console.log(e);
                }

                // saving new booklet named "next index" in its faculty folder as JSON
                //fs.writeFileSync(__dirname + '/Reqs/' + (IncomingData.Faculty == -1 ? 'N1' : IncomingData.Faculty) + '/' + NIn.toString(), JSON.stringify(IncomingData));

                //res.end("500 Something went wrong");    //but echo back something else :D:D:D:D
            }
        });
    })
    //#endregion















    /*
    runnign server on port 8000 (router problem unless port 80)
    
    
    */
    var server = app.listen(80, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("Example app listening at http://%s:%s", host, port)
    })






    // IPT Functions

    /*      IPTFunc: GetIPT(string IPAddress)
    
    returns IPT of IPAddress, 0 if no request confirmed
    */
    function GetIPT(IPAddress, callback) {
        var ret = 0;
        try {
            /*MongoClient.connect(url, function (err, db) {
                if (err) throw err;*/
            var dt = dateTime.create();
            var formatted = dt.format('Y-m-d');
            var QueryToFindIPT = { IPA: IPAddress };
            MainDB.collection("IPT").find(QueryToFindIPT).toArray(function (err, result) {
                if (err) {
                    callback(-1);
                    throw err;
                }
                if (result.length == 0) {
                    callback(-2);
                }
                else {
                    if (result[0]['IPA'] == IPAddress) {
                        var Entss = result[0]['Ents'];
                        var foundD = 0;
                        for (var index = 0; index < Entss.length; index++) {

                            if (Entss[index].date == formatted) {
                                foundD = 1;
                                ret = Entss[index].Times;
                                callback(ret);
                            }

                        }
                        if (foundD != 1) {
                            result[0]['Ents'].push({ date: formatted, Times: 0 });
                            MainDB.collection("IPT").updateOne({ _id: result[0]['_id'] }, { $set: { "Ents": result[0]['Ents'] } });
                            callback(0);
                        }
                    }
                    else {
                        console.log(result);
                        callback(-1);
                    }
                }
                //db.close();
            });
            //});
        }
        catch (e) {
            console.log(e);
            callback(-1);
        }
    }


    /*      IPTFunc: SetIPT(string IPAddress, int IPT)
    
    sets the IPT for IPAddress
    */
    function SetIPT(IPAddress, IPTToWrite) {
        var ret = 1;
        try {/*
            MongoClient.connect(url, function (err, db) {
                if (err) throw err;*/
            var dt = dateTime.create();
            var formatted = dt.format('Y-m-d');
            var QueryToFindIPT = { IPA: IPAddress };
            MainDB.collection("IPT").find(QueryToFindIPT).toArray(function (err, result) {
                if (err) {
                    ret = 0;
                    throw err;
                }
                //console.log("\nIPT Transfer:::" + result + "\nDone Transfer//\n");
                if (result.length == 0) {
                    MainDB.collection("IPT").insertOne({ IPA: IPAddress, Ents: [{ date: formatted, Times: IPTToWrite }] }, function (err, res) {
                        if (err) throw err;
                        //console.log("1 document inserted");
                        //db.close();
                    });
                }
                else {
                    if (result[0]['IPA'] == IPAddress) {
                        var Entss = result[0]['Ents'];
                        for (var index = 0; index < Entss.length; index++) {

                            if (Entss[index].date == formatted) {
                                Entss[index].Times = IPTToWrite;
                                result[0]['Ents'] = Entss;
                            }
                        }
                        MainDB.collection("IPT").updateOne({ _id: result[0]['_id'] }, { $set: { "Ents": result[0]['Ents'] } });
                    }
                    else {
                        console.log(result);
                        return 0;
                    }
                }
                //db.close();
            });
            //});
        }
        catch (e) {
            console.log(e);
        }
        return ret;
    }


    /*      IPTFunc: IncOne(string IPAddress)
    
    increases the IPT of IPAddress
    */
    function IncOne(IPAddress) {
        GetIPT(IPAddress, function (ret) {
            if (ret >= 0) {
                ret += 1;
                SetIPT(IPAddress, ret);
            }
            else if(ret == -2)
            {
                SetIPT(IPAddress, 1);
            }
            else {
                console.log("IncOneFailed");
            }
        });
    }
});
