import mysql from "mysql2"

export const conn = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"1234",
    database:"reactnode2023"
})

conn.connect((err)=>{
    if(err) throw err;
    console.log("DB Connected");
})