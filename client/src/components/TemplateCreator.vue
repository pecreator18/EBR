<template>
	<div class="main_div">
	<div class="template_select" v-if = "template_selected === false">
		<h3> Batch Record Templates </h3>
		<br>
		<ol>
					<li v-for = "template in batch_record_template_list">
						<p>
						<strong>Template Number: </strong>{{template.template_number}}
						<strong>Unit Operation: </strong>{{template.unit_operation}}
						<strong>Template Description: </strong>{{template.description}}
						<button class = "" id = "" v-on:click = "loadTemplate(template.template_number)">Start with this template</button>
						</p>
					</li>

		</ol>
	</div>

	<div class= "batch_record" v-if = "template_selected">

		<div class="br_header" v-if = "template_selected">
			<table class = "br_header_table">
				<tr>
					<td class = "br_details">Batch Record Description</td>
					<td class = "br_details"><input type="text" name="" value="" v-model = "batch_record.description"></td>
				</tr>
				<tr>
					<td class = "br_details">Part Number</td>
					<td class = "br_details">TBD</td>
				</tr>
				<tr>
					<td class = "br_details">Lot Number</td>
					<td class = "br_details">TBD</td>
				</tr>
			</table>
		</div>
			<br>


		<div class = "operator_nav">
			<table class = "nav_buttons">
				<tr>
					<td class = "nav_button_cell">
						<button class = "nav_button" id = "Previous" v-on:click = "view_previous">Previous Step</button>
					</td>
					<td class = "nav_button_cell">
						<button class = "nav_button" id = "Next" v-on:click = " return_to_current">Return to Current Step</button>
					</td>
					<td class = "nav_button_cell">
						<button class = "nav_button" id = "Next" v-on:click = " view_next">Next Step</button>
					</td>
				</tr>
			</table>
		</div>
		<br>
		<br>
		<div class="container" id = 'container'>
		<div id = "step header" class = "step_header">
			<table class = "header_table">
			<tr>
				<td id = "step number" class = "step_number">{{step.step_number}}</td>
				<td class = "step_image"><!--<button v-on:click = "select_image">Change Image</button>-->
								<selectstepsymbol v-if = "change_image" @update = "updateIcon($event)"></selectstepsymbol>
								<img v-on:click = "select_image" v-if = "change_image == false"  :src="getImgUrl(step.step_symbol)" alt = "no image found">
				</td>

				<td id = "step title"  class = "step_title"><input class = "step_title_input" type ="text" v-model = "step.step_title" placeholder = "Enter Step Title"></td>
			</tr>
			</table>
		</div>

		<div id = "instructions" class = "instructions">
			<ol>
				<li  v-for = "instruction in step.step_instructions"><p><textarea class = "instruction_input"  type = "text" v-model = "instruction.instruction" placeholder= "Enter Instruction"></textarea> <button v-on:click = "removeInstruction(instruction.instruction)">Remove</button></p></li>
			</ol>
			<button v-on:click = "addInstruction">Add Instruction</button>
		</div>

		<h3>Step Data</h3>

			<div class = "step_data" id = "step data">
				<table class = 'data_table'>
					<tr>
						<th>Data Type</th>
						<th>Description</th>
						<th>Specification</th>
					</tr>

					<tr v-for = "data_input in step.step_data">
						 <td class = 'custom_data_type'>
						 	<select class='custom_data_type_select' name="" v-model = "data_input.custom_data_type" >
								<option value="" disabled selected>Select Data Type</option>
								<option value="Raw Material">Raw Material</option>
								<option value="Equipment">Equipment</option>
								<option value="In-Process Data">In-Process Data</option>
						 	</select>
						 </td>
							<td class = 'data_description'><input class = "process_component_input" type="text" v-model = "data_input.process_component" placeholder="Enter Component Name"> </td>
							<td class = 'data_entry'>
								<input v-if = "data_input.custom_data_type == 'In-Process Data'" class = 'data_input'  type = 'number' v-model.number = "data_input.specification" placeholder="Target"></input>
								<span v-if = "data_input.custom_data_type == 'In-Process Data'" class="plus_minus">&#177</span>
								<input v-if = "data_input.custom_data_type == 'In-Process Data'" class = 'error_range'  type = 'number' v-model.number = "data_input.error_range" placeholder="Error Range"></input>
								<select v-if = "data_input.custom_data_type == 'In-Process Data'" class="unit_select" name="" v-model = "data_input.units">
									<option value="" disabled selected>Select Data Type</option>
									<option value="L">Liters(L)</option>
									<option value="mL">Milliliters(mL)</option>
									<option value="g">Grams(g)</option>
									<option value="mg">Milligrams(mg)</option>
									<option value="kg">Killigrams</option>
									<option value="s">Seconds(s)</option>
									<option value="min">Minutes(min)</option>
									<option value="hr">Hours</option>
								</select>
								<a class= "NA" v-else>NA</a>
							</td>
							<td><button v-on:click = "removeData(data_input.process_component)">Remove</button></td>
					</tr>

				</table>
				<br>
				<button v-on:click = "addData">Add Data</button>

			</div>

		</div>
	<button v-on:click = "addStep">Add Step</button>
	</div>
		<div class = "step_list"  v-if = "template_selected">
			<h1>Batch Record Steps</h1>
			<ol>

				<li v-for = "step in batch_record.steps"><p>{{step.step_title}}</p></li>
			</ol>
			<button type="button" name="button" v-on:click = "createLot">Create Batch Record</button>
		</div>
	</div>

</template>

<script>
import StepService from '../StepServices';
import selectstepsymbol from './step_symbol_select'

	export default {
		name: 'test',
		props: ['step.performed_by','step.verified_by'],
		components: {
				selectstepsymbol
		},
		data(){
			return {
				image_source: 'Stop.jpg',
				change_image:false,
				error: '',
				project_code: "",
				template_selected: false,
				preview_counter: 0,
				batch_record_template_list:[],
				batch_record: {

					part_number: "",
					lot_number: "",
					current_step: 0,
					steps: []

				},
				step: {

					step_status: 'pending',
					step_number:1,
					step_symbol: "'Stop.jpg'",
					step_title: "",
					step_instructions: [
							{instruction: ""}
						],
					step_data: [
						{
							custom_data_type: "",
							process_component: "",
							specification: 0,
							error_range: 0,
							units:"",
							data: ""
						}

					]
				}
			}

		},
	async created(){
		try{
			this.batch_record_template_list = await StepService.getBatchRecordTemplates().then( (res) => { return res} );


		}
		catch(err){
			this.error = err.message;
		}
	},
	methods: {
			addStep: function(){
					this.batch_record.steps[this.batch_record.current_step] = this.step,
					this.batch_record.steps.push(
					{
						step_status: 'pending',
						step_number: this.step.step_number + 1,
						step_symbol: 'Stop.jpg',
						step_title: "",
						step_visual_aid: 0,
						step_instructions: [
							{instruction: ""}
						],
						step_data: [
							{
								custom_data_type: "",
								process_component: "",
								specification:0 ,
								error_range: 0,
								units:"",
								data: ""
							}

						],
						perfomed_by:"",
						performed_on:"",
						verified_by:"",
						verified_on:""
					}

					),
					this.batch_record.current_step += 1,
					this.step = this.batch_record.steps[this.batch_record.current_step]
			},

			addInstruction: function(){
				this.step.step_instructions.push(
					{instruction: ""}
				);
				},
			removeInstruction: function(value){
				   for( var i = 0; i < this.step.step_instructions.length; i++){
  						 if ( this.step.step_instructions[i].instruction === value) {
    							 this.step.step_instructions.splice(i, 1);
   									}
					}

			},
			addData: function(){

					this.step.step_data.push(

						{
							custom_data_type: "",
							process_component: "",
							data: ""
						}


					)
				},
			removeData: function(value){
				for( var i = 0; i < this.step.step_data.length; i++){
  						 if ( this.step.step_data[i].process_component === value) {
                    this.step.step_data.splice(i, 1);
             }
					 }

			},
			loadTemplate: async function(template_number){
				var record =  await StepService.getTemplate(template_number).then( (res) => { return res} );
				delete record._id; //Delete the id object from the template
				this.batch_record = record;
				this.step = this.batch_record.steps[this.batch_record.current_step];
				this.template_selected = true;


			},
			createLot: function(){
					this.batch_record.part_number = String(Math.floor(Math.random() * 1000));
					this.batch_record.lot_number = String(Math.floor(Math.random() * 1000));
					this.batch_record.current_step = 0;
					StepService.createLot(this.batch_record);
					this.template_selected = false;


			},



			//Batch Record Methods
			view_previous: function(){

					if(this.batch_record.current_step > 0){

						this.batch_record.current_step -=  1;
						this.preview_counter -= 1;
						this.step = this.batch_record.steps[this.batch_record.current_step];

					}
			},
			view_next: function(){

					if(this.batch_record.current_step < this.batch_record.steps.length -1){

						this.batch_record.current_step +=  1;
						this.preview_counter += 1;
						this.step = this.batch_record.steps[this.batch_record.current_step];
					}
			},
			return_to_current: function(){

						this.batch_record.current_step -= this.preview_counter;
						this.preview_counter = 0;
						this.step = this.batch_record.steps[this.batch_record.current_step];


			},
			updateIcon: function(e){

						this.step.step_symbol = e;
            this.select_image();
                                },
      getImgUrl(img) {
            return require('@/assets/Step_Symbols/' + img)
                      },
      select_image(){
            if(this.change_image == true){
              this.change_image = false
              }else{
                    this.change_image = true
                  }
                                }


		},

		computed: {


		}

	}

</script>
<style scoped>

.main_div{

	background-color:lightgrey;
	height: 100%;
	width: 100%;

}

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
.br_header {

	width: 25%;
	margin:auto;
	padding:1%;
	border:2px solid black;
	background-color: White;
}

.br_header_table{

	width: 100%;
}
.br_details{
	width: 0.166666666666666667;


}

/* Operator Navigation */

.operator_nav{

	width: 95%;
	height:5%;
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
	font-size:2.0vw;


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
.step_title_input{
	width: 100%;
	height: 100%;
	background-color: lightgrey;
	font-weight: bold;
	font-size: 20px;

}

/* Instructions */
instructions{
	text-align: left;
	width:100%;
}
ol{
	font-weight: bold;

}
li p {
	text-align: left;
	line-height: 1.5em;
	text-indent: 0.5em;
	font-weight: normal;
	width:100%;

}
li textarea{
	width: 90%;
	height:auto;
	vertical-align: middle;
}
/*Data Table*/

.step_data{
	width: 100%;

}

.data_table{
	width: 90%;


}


.data_description{

	background-color: lightgrey;
	font-weight: bold;
	padding:0.5%;
	width:30%;


}

.data_entry{
	margin: 0px;
	padding: 5px;
	background-color:lightgrey;
	width:30%;

}
.NA{
	font-weight: bold;

}

.data_input{

	width: 22%;
	height: 100%;
	font-size: 20px;
	float: left;

}
.process_component_input{
	width: 100%;
	height: 100%;
	background-color: lightgrey;
	font-weight: bold;
	font-size: 20px;
	text-align: center;

}
.custom_data_type{
	background-color:lightgrey;
	width:30%;

}
.custom_data_type_select{
	width: 100%;
	height: 100%;
	font-size: 20px;
}

.unit_select{
	width: 40%;
	height: 100%;
	font-size: 20px;
	float: left;
}
.plus_minus{
	width: 10%;
	height: 100%;
	font-size: 20px;
	float: left;
}
.error_range{
	width: 18%;
	height: 100%;
	font-size: 20px;
	float: left;
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
