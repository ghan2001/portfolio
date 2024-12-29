 var mysql=require('mysql');
 var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: ""
        });
        con.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");

// create table 
        //   con.query(`CREATE TABLE  mydb.Persons (
        //     PersonID int,
        //     LastName varchar(255),
        //     FirstName varchar(255),
        //     Address varchar(255),
        //     City varchar(255)
        //   )`, function (err, result) {
        //     if (err) throw err;
        //     console.log("table created");
        //   });
        // });


        

        // con.query(`INSERT INTO mydb.persons(PersonID,LastName, FirstName, Address,     City) 
        // VALUES(2,'prajapati','ghanshyam','mp','chhatarpur')`, function (err, result) {
        //     if (err) throw err;
        //     console.log("table created");
        //   });
        // });
        con.query(`select * from gbdb2001.mod_admin`,function(err,result){
          if(err) throw err;
          
          
          result.filter(function(item){
            // console.log(item);
           })
           module.exports=result;
          console.log("data selcted successfully");
        });
      });
