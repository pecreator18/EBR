const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
 
 //Get Batch Record 
 
 router.get('/', async(req,res) => {
	 var lot_number = req.query.lot_number;
	 const client = await loadBatchRecordCollection();//Get all batch records
	 const batch_records = await client.db('Drug_Substance_Manufacturing').collection('batch_records');
	 const batch_record =  await batch_records.find({'lot_number': lot_number}).toArray();//Find the batch record with the lot number
	 client.close();
	 res.send(batch_record[0]);
	 
 });
 
 //Update Batch Record
router.post('/updateBR',async (req,res)=>{
	
	var current_step =  req.body.batch_record_step.current_step;//Get the current step of the batch record.
	const br_length =  req.body.batch_record_step.batch_record_length;
	const lot_number = req.body.batch_record_step.lot_number;
	const client = await loadBatchRecordCollection();//Get Batch Record Collection
	const batch_record = await client.db('Drug_Substance_Manufacturing').collection('batch_records');
	var update = {"$set": {}};
	if(current_step < br_length -1){
		update["$set"]["steps." + current_step] = req.body.batch_record_step.step;	
		update["$set"]["steps." + (current_step + 1)+".step_status"] = "in-progress";
		update["$set"]["current_step"] = current_step + 1;
	}
	else{
		update["$set"]["steps." + current_step] = req.body.batch_record_step.step;
	};
	await batch_record.updateOne({lot_number: lot_number},update); //Update Batch Record Step
	await client.close();
	await res.status(201).send();
} );

router.get('/createLot', async(req,res) => {
		const part_number = '4-MF-4599';
		const lot_number = '3-PRO-9968';
		const description = 'GMP Fermentation of a Molecule';
		
		const client = await loadBatchRecordCollection();
		const templateCollection = await client.db('Drug_Substance_Manufacturing').collection('batch_record_templates');
		const template =  await templateCollection.find({'part_number': part_number}).toArray();
		const batch_record_template =  template[0];
		batch_record_template.description = description;
		
		client.db('Drug_Substance_Manufacturing').collection('batch_records').insertOne(batch_record_template);
		client.close();
		res.send("Lot Created");
} );
 
  router.get('/all', async(req,res) => {
	 
	 const batch_records = await loadBatchRecordTemplateCollection();
	 const batch_record_templates =  await batch_records.find({}).toArray();
	 
	 res.send(batch_record_templates);
	 
 });
 
 
 //Add Post
 router.post('/', async (req,res)=>{
	 const batch_records = await loadBatchRecordCollection();
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
	 const client = await mongodb.MongoClient.connect("mongodb+srv://BRUser:LFDdWINQDwIyiW39@cluster0-fwg1v.mongodb.net/test?retryWrites=true",{
		 useNewUrlParser: true
	 });
	 
	 return client;
 };
 
 async function loadBatchRecordTemplateCollection(){
	 const client = await mongodb.MongoClient.connect("mongodb+srv://BRUser:LFDdWINQDwIyiW39@cluster0-fwg1v.mongodb.net/test?retryWrites=true",{
		 useNewUrlParser: true
	 });
	 
	 return client.db('Drug_Substance_Manufacturing').collection('batch_record_templates');;
 };
 
 module.exports = router;
 