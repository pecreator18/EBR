import axios from 'axios';

const url = 'api/batch_records/';

class StepService{
	//Get Posts
	
	static getBatchRecord(lot_number){
		
		return new Promise(async (resolve, reject) =>{
			try{
				const res = await axios.get(url,{
						params: {
							lot_number: lot_number
						}
					});
				const data = res.data;
				resolve(
					data
					);
			}catch(err){
				reject(err);	
			}
		})
		
	}
	
	//Update Batch Record
	static updateBR(batch_record_step){
		return axios.post(`${url}updateBR`,{
			batch_record_step
		});
			
	}
	
	//Get batch record templates
	static getBatchRecordTemplates(){
		return new Promise(async (resolve, reject) =>{
			try{
				const res = await axios.get(`${url}all` );
				const data = res.data;
				resolve(
					data
					);
			}catch(err){
				reject(err);	
			}
		})
		
		
	}
	
	//Create Post
	static insertPost(text){
		return axios.post(url,{
			text
		});
	}
	
	
	
	//Delete Post
	static deletePost(id){
		return axios.delete(`${url}${id}`);
	}
	
	
}

export default StepService;
