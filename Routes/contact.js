const express = require("express");

const router = express.Router();

//require model contact
const Contact = require("../models/Contact");

///////// router
/**
 *@desc :testing route
 *@path :http://localhost:4000/api/contacts/test
 *@method:Get
 *@data :no data
 **/
router.get("/test", (req, res) => {
    res.send("hellooooo rany na5dem");
});

/**
 *@desc :add contact
 *@path :http://localhost:4000/api/contacts/
 *@method:post
 *@data :req.body
 **/
router.post("/", async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        //handling errors
        if (!name || !email) {
            res.status(400).send({ msg: "name or email are required" }, error);
            return;
        }
        //handling errors :email is unique
        const contact = await Contact.findOne({ email: email });
        if (contact) {
            res.status(400).send({ msg: "conatct already exist" });
        }

        const newContact = new Contact({
            name,
            email,
            phone,
        });
        await newContact.save();
        res.status(200).send({
            msg: "contact added succesfully...",
            newContact,
        });
    } catch (error) {
        res.status(400).send({
            msg: "contact cannot be added",
            error,
        });
    }
});

/**
 *@desc :get all contacts
 *@path :http://localhost:4000/api/contacts/
 *@method:Get
 *@data :req.body
 **/
router.get("/", async (req, res) => {
    try {
        const listContact = await Contact.find();
        res.status(200).send({
            msg: "this is the list of all contacts",
            listContact,
        });
    } catch (error) {
        res.status(400).send({
            msg: "cannot get all the contacts",
            error,
        });
    }
});

/**
 *@desc :get  contact by id
 *@path :http://localhost:4000/api/contacts/:id
 *@method:Get
 *@data :req.params.id
 **/
router.get("/:id", async (req, res) => {
    try {
        const oneContact = await Contact.findOne({_id:req.params.id});
        res.status(200).send({
            msg: "this is the  contact u want",
            oneContact,
        });
    } catch (error) {
        res.status(400).send({
            msg: "cannot get  the contact",
            error,
        });
    }
});

/**
 *@desc :delete  contact by id
 *@path :http://localhost:4000/api/contacts/:id
 *@method:Delete
 *@data :req.params.id
 **/
router.delete('/:_id',async(req,res)=>{
    try {
        const {_id}=req.params
        await Contact.findOneAndDelete({_id})
        res.status(200).send({msg:'contact deleted'})

    } catch (error) {
        res.status(400).send({
            msg: "cannot delete  this contact",
            error,
        });
        
    }
})

/**
 *@desc :edit contact 
 *@path :http://localhost:4000/api/contacts/:id
 *@method:put
 *@data :req.params.id & req .body
 **/
router.put('/:id',async(req,res)=>{
    try {
        const {_id}=req.body
        const result = await Contact.updateOne({id:_id},{$set:{...req.body}})
        res.status(200).send({msg:'contact updated'})
    } catch (error) {
        res.status(400).send({
            msg: "cannot edit  this contact",
            error,
        });
        
    }
})

module.exports = router;
