var mysql      = require('mysql');
var teamplyDB = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    database : ''
});

teamplyDB.Connect();    //DB 접속

//테이블 불러오기
teamplyDB.query(`SELECT * FROM user`, function (error, result){
   if(error) throw error;
   console.log("user table : " + result);
   var row2_id = result[1].id;
});

teamplyDB.query(`SELECT * FROM user_information`, function (error, result){
    if(error) throw error;
    console.log("user_information table : " + result);
    var row2_id = result[1].id;
});

teamplyDB.query(`SELECT * FROM user_review`, function (error, result){
    if(error) throw error;
    console.log("user_review table : " + result);
    var row2_id = result[1].id;
});

teamplyDB.query(`SELECT * FROM project_information`, function (error, result){
    if(error) throw error;
    console.log("project_information table : " + result);
    var row2_id = result[1].id;
});

teamplyDB.query(`SELECT * FROM project_review`, function (error, result){
    if(error) throw error;
    console.log("project_review table : " + result);
    var row2_id = result[1].id;
});

teamplyDB.query(`SELECT * FROM schedule`, function (error, result){
    if(error) throw error;
    console.log("schedule table : " + result);
    var row2_id = result[1].id;
});

teamplyDB.end();    //DB 접속 종료