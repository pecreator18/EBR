<template>
	<div class="test">
	
		<ol >
			<li v-for = "template in templates">Template Part Number: {{template.template_part_number}},  Template Description: {{template.template_description}}</li>
		</ol>
		
	</div>
</template>

<script>


	export default {
		name: 'test',
		props: [],	
		components: {
			
		},
		data(){
			return {
				error : '',
				templates: []
			}
		
		},
	async created(){
		try{
		
				this.templates = [
				
					{
						'template_part_number' : 0,
						'template_description' : 'Automated Cell Banking'
					},
					{
						'template_part_number' : 1,
						'template_description' : '100 L Fermentation'
					}
				];
	}
	catch(err){
		this.error = err.message;
	}
  
  },
		
		methods: {
		
			view_previous: function(){
					if(this.current_step > 0){

						this.current_step = this.current_step - 1;
						this.preview_counter = this.preview_counter - 1;
					}
			},
			view_next: function(){
							if(this.current_step < this.steps.length -1){
							this.current_step = this.current_step + 1;
							this.preview_counter = this.preview_counter +1;
							}
			},
			return_to_current: function(){

						this.current_step = this.current_step - this.preview_counter;

						this.preview_counter = 0;

			},
			performed: function(signature){
				if(signature.length > 1){
				this.step.performed_by = signature;
				this.step.step_status = 'performed';
				}else{
				this.step.performed_by = null;
				this.step.step_status = 'in-progress';
				}
			},
			verified: async function(signature){
				if(signature.length > 2){
				this.step.verified_by =  await signature;
				this.step.step_status = await 'complete';
				this.batch_record.current_step = await this.batch_record.current_step + 1;
				this.batch_record.steps[this.batch_record.current_step].step_status = await 'in-progress';
				this.step = this.batch_record.steps[this.batch_record.current_step];
				}else{
				this.steps[this.current_step].verified_by = null;
				}
			}
		
		},
		
		computed: {
			
		
		}
		
	}

</script>
<style scoped>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


.container {

	width: 95%;
	margin:auto;
	padding:1%;
	border:2px solid black;
	background-color: White;


}

th {
 
	background-color: lightgrey;
	

}
table, td,th {

	border: 1px solid black;
	border-collapse: collapse;

}


/* Operator Navigation */

.operator_nav{
	
	width: 95%;
	height:5em;
	margin:auto;
	border:2px solid black;
	background-color: White;

}

.nav_buttons{
	
	width:100%;
	height:100%;
	border:2px solid black;


}
.nav_button{

	width:100%;
	height:100%;
	font-weight: bold;
	font-size:36px;
	

}
.nav_button_cell{

	width:33%;
	height:100%;
	

}


/* Header Styling */
.step_header{
	padding: 0px;
	margin: auto;
	width: 100%;

}

.header_table{
	width: 100%;
	
}

.step_number{
	width:10%;
	background-color: White;
	text-align: center;
	font-weight: bold;
	font-size: 20px;
	

}
.step_image{
	width:10%;
	text-align: center;
	


}
.step_title{
	width:80%;
	background-color: lightgrey;
	text-align: center;
	font-weight: bold;
	font-size: 20px;
}

/* Instructions */
.instructions{
	text-align: left;

}
 
ol {
  margin: 0 0 1.5em;
  padding: 0;
  counter-reset: item;
}

ol > li {
  margin: 0;
  padding: 0 0 0 2em;
  text-indent: -2em;
  list-style-type: none;
  counter-increment: item;
}

ol > li:before {
  display: inline-block;
  width: 1em;
  padding-right: 0.5em;
  font-weight: bold;
  text-align: right;
  content: counter(item) ".";
}
/*Data Table*/

.step_data{
	width: 100%;

}

.data_table{
	width: 80%;


}


.data_description{

	background-color: lightgrey;
	font-weight: bold;


}

.data_entry{
	margin: 0px;
	padding: 5px;
	background-color:black;

}
.data_input{
	
	width: 100%;
	height: 100%;

}

/*Performed By and Verified By */

.sign_off{
	width: 100%;
	border:2px solid black;

}

.sign_off td{
	width: 20%;
	border:2px solid black;

}

.signatures{
	margin:0px;
	width: 100%;
	height: 20%;
}

.performer_verifier{

	background-color: lightgrey;
	font-weight: bold;
	text-align: center;
	
}

</style>