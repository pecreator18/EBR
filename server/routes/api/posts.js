const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get all pending batch records
router.get('/allBRs', async(req,res) => {
  const client = await loadBatchRecordCollection();
  const batch_record_DB = await client.db('Drug_Substance_Manufacturing').collection('batch_records');
  const batch_records =  await batch_record_DB.find({batch_record_status : 'pending'}).toArray();
  client.close();

  const batch_record_list = [];
  for(var i = 0; i < batch_records.length; i++){
    batch_record_list.push(
        {
            part_number : batch_records[i].part_number,
            lot_number: batch_records[i].lot_number,
            unit_operation: batch_records[i].unit_operation,
            description: batch_records[i].description

        }

    )


  };

  res.send(batch_record_list);

});

//Get all completed Batch records
router.get('/Completed_BRs', async(req,res) => {
  const client = await loadBatchRecordCollection();
  const batch_record_DB = await client.db('Drug_Substance_Manufacturing').collection('batch_records');
  const batch_records =  await batch_record_DB.find({batch_record_status : 'complete'}).toArray();
  client.close();

  const batch_record_list = [];
  for(var i = 0; i < batch_records.length; i++){
    batch_record_list.push(
        {
            part_number : batch_records[i].part_number,
            lot_number: batch_records[i].lot_number,
            unit_operation: batch_records[i].unit_operation,
            description: batch_records[i].description

        }

    )


  };

  res.send(batch_record_list);

});


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
    update["$set"]["batch_record_status"] = req.body.batch_record_step.batch_record_status;
	};
	await batch_record.updateOne({lot_number: lot_number},update); //Update Batch Record Step
	await client.close();
	await res.status(201).send();
} );

//Get all batch record templates
router.get('/all', async(req,res) => {

  const batch_records = await loadBatchRecordTemplateCollection();
  const batch_record_templates =  await batch_records.find({}).toArray();


  res.send(batch_record_templates);

});

//Get a batch record template
router.get('/getTemplate', async(req,res) => {
		const template_part_number = req.query.template_part_number;

		const client = await loadBatchRecordCollection();
		const templateCollection = await client.db('Drug_Substance_Manufacturing').collection('batch_record_templates');
		const template =  await templateCollection.find({'part_number': template_part_number}).toArray();
    await client.close();
		const batch_record_template =  template[0];

		res.send(batch_record_template);
} );


//Create a batch record lot
router.post('/createLot', async(req,res) => {
    const batch_record = req.body.batch_record;
		const client = await loadBatchRecordCollection();
		await client.db('Drug_Substance_Manufacturing').collection('batch_records').insertOne(batch_record);
    await client.close();
  	await res.status(201).send();
} );




 //Add Post
 router.post('/', async (req,res)=>{
	 const batch_records = await loadBatchRecordCollection();
	 await posts.insertOne({
		 text: req.body.text,
		 createdAt: new Date()
	 });

	 res.status(201).send();

 });

 //Authenticate User
 router.get('/authenticateUser', async(req,res) => {
    const username = req.query.username;
    const password = req.query.password;
 		const client = await loadBatchRecordCollection();
 		const usersCollection = await client.db('Drug_Substance_Manufacturing').collection('Users');
 		const authentication =  await usersCollection.find({'username': username, 'password': password}).toArray();
    await client.close();

 		if(authentication.length == 0){
      res.send("None");
    }else{
      res.send(authentication[0]);
    }


 } );


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

	 return client.db('Drug_Substance_Manufacturing').collection('batch_record_templates');
 };

 module.exports = router;
