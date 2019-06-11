const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
 
 //Get Posts
 
 router.get('/', async(req,res) => {
	 
	 const posts = await loadBatchRecordCollection();
	 
	 res.send(await posts.find({}).toArray());
	 
 });
 
 
 //Add Post
 router.post('/', async (req,res)=>{
	 const posts = await loadBatchRecordCollection();
	 await posts.insertOne({
		 text: req.body.text,
		 createdAt: new Date()	 
	 });
	 
	 res.status(201).send();
	 
 });
 
 
 //Delete Post
 router.delete('/:id', async (req,res)=>{
	 const posts = await loadBatchRecordCollection();
	 await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
	 res.status(200).send();
	 
 });
 
 async function loadBatchRecordCollection(){
	 const client = await mongodb.MongoClient.connect("mongodb+srv://BRUser:DB1fofu@cluster0-fwg1v.mongodb.net/test?retryWrites=true",{
		 useNewUrlParser: true
	 });
	 
	 return client.db('Drug_Substance_Manufacturing').collection('batch_records');
 }
 
 module.exports = router;
 