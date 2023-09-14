
import { v4 as uuid } from 'uuid';

let users = [

]

export const getUsers = (req,res) => {
    res.send(users)
} 

export const getUser = (req,res) => {
    const singleUser = users.filter((user) => user.id === req.params.id)
    res.send(singleUser)
} 

export const deleteUser = (req,res) => {
    users = users.filter((user) => user.id !== req.params.id)
    res.send("User Deleted Successfully")
} 

export const updateUser = (req,res) => {
    const finduser = users.find((user) => user.id === req.params.id)
    finduser.name = req.body.name
    finduser.email = req.body.email
    finduser.mobile = req.body.mobile
    
    res.send("User Updated Successfully")
} 


export const createUser = (req,res) => {
    try {
        const user = req.body
        users.push({...user,id:uuid()})
        res.send("User Added Successfully")
    } catch (error) {
        //console.log("Error = ",error);
        //res.send({err:error})
    }
}

