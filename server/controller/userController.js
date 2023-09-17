
import { v4 as uuid } from 'uuid';
import { conn } from '../db/conn.js';

let users = [

]

/*export const getUsers = (req,res) => {
    res.send(users)
} */

export const getUsers = (req,res) => {
    conn.query("select * from users",(err,result)=>{
        if(err){
            res.send("Record not Found :",err)
        }else{
            res.send(result)
        }
    })
}

/*export const getUser = (req,res) => {
    const singleUser = users.filter((user) => user.id === req.params.id)
    res.send(singleUser)
} */
export const getUser = (req,res) => {
    const {id} = req.params
    conn.query("select * from users where id = ?",id,(err,result)=>{
        if(err){
            res.send("Record not Found :",err)
        }else{
            res.send(result)
        }
    })
}


/*export const deleteUser = (req,res) => {
    users = users.filter((user) => user.id !== req.params.id)
    res.send("User Deleted Successfully")
} */
export const deleteUser = (req,res) => {
    const {id} = req.params
    conn.query("delete from users where id = ?",id,(err,result)=>{
        if(err){
            res.send("Record not Deleted :",err)
        }else{
            res.send("User Deleted Successfully")
        }
    })
}


/*export const updateUser = (req,res) => {
    const finduser = users.find((user) => user.id === req.params.id)
    finduser.name = req.body.name
    finduser.email = req.body.email
    finduser.mobile = req.body.mobile
    
    res.send("User Updated Successfully")
} */
export const updateUser = (req,res) => {
    const data = req.body
    const {id} = req.params
    try{
        conn.query("update users SET ? where id=?",[data,id],(err,result)=>{
            if(err){
                res.send("Record not Updated :",err)
            }else{
                res.send("User Updated Successfully")
            }
        })
    }catch(error){
        res.send("Record Not Inserted :",error)
    }
}



/*export const createUser = (req,res) => {
    try {
        const user = req.body
        users.push({...user,id:uuid()})
        res.send("User Added Successfully")
    } catch (error) {
        //console.log("Error = ",error);
        //res.send({err:error})
    }
}*/

export const createUser = (req,res) => {
    const {name,email,mobile} = req.body
    const id = uuid();
    try{
        conn.query("INSERT INTO users SET ?",{id,name,email,mobile},(err,result)=>{
            if(err){
                res.send("Record not Inserted :",err)
            }else{
                res.send("User Added Successfully")
            }
        })
    }catch(error){
        res.send("Record Not Inserted :",error)
    }
}

