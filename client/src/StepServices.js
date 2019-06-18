import axios from 'axios';

const url = 'api/batch_records/';

class StepService{
	//Get all batch record templates
	static getBatchRecordList(){
		return new Promise(async (resolve, reject) =>{
			try{
				const res = await axios.get(`${url}allBRs` );
				const data = res.data;
				resolve(
					data
					);
			}catch(err){
				reject(err);
			}
		})}
//Get a single batch record
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

	//Get all batch record templates
	static getBatchRecordTemplates(){
		return new Promise(async (resolve, reject) =>{
			try{
				const res = await axios.get(`${url}all` );
				const data = res.data;
				const template_list = [];
				for(var i = 0; i < data.length; i++){
					template_list.push(
							{
									template_number : data[i].part_number,
									unit_operation: data[i].unit_operation,
									description: data[i].description

							}

					)


				};
				resolve(
					template_list
					);
			}catch(err){
				reject(err);
			}
		})}

		//Get a single batch record template
		static getTemplate(template_number){
			return new Promise(async (resolve, reject) =>{
				try{
					const res = await axios.get(`${url}getTemplate`,{
							params: {
								template_part_number: template_number
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

	//Create Batch Record Lot
	static createLot(batch_record){
		return axios.post(`${url}createLot`,{
			batch_record
		});
	}



	//Delete Post
	static deletePost(id){
		return axios.delete(`${url}${id}`);
	}


}

export default StepService;
