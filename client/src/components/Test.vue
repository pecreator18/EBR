<template>
	<div class="test">
		<div class="batch_record_select" v-if = "br_selected === false">
			<h3 v-if = "batch_record_list.length === 0">NONE</h3>
			<h3 v-else>Pending Batch Record Lots</h3>
						<ol>
						<li v-for = "batch_record in batch_record_list">
							<p>
							<strong>Part Number: </strong>{{batch_record.part_number}}
							<strong>Lot Number: </strong>{{batch_record.lot_number}}
							<strong>Unit Operation: </strong>{{batch_record.unit_operation}}
							<strong>Description: </strong>{{batch_record.description}}
							<button class = "" id = "" v-on:click = "loadBatchRecord(batch_record.lot_number)">Start Batch Record</button>
						</p>
						</li>

			</ol>
		</div>
		<div class="batch_record" v-if = "br_selected">
			<div class="container" id = 'container'>
				<table>
					<tr>
						<td class = "step_title">Batch Record Description</td>
						<td>  <strong>{{batch_record.description}}</strong></td>
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
		<div class="container">
		<div id = "step header" class = "step_header">
			<table class = "header_table">
			<tr>
				<td id = "step number" class = "step_number">{{step.step_number}}</td>
				<td class = "step_image"><img id = "step symbol" :src = getImgUrl(step.step_symbol)></td>
				<td id = "step title"  class = "step_title">{{step.step_title}}</td>
			</tr>
			</table>
		</div>

		<div id = "instructions">
			<ol>
				<li v-for = "instruction in step.step_instructions"><p>{{instruction.instruction}}</p></li>
			</ol>
		</div>

		<h3>Step Data</h3>

			<div class = "step_data" id = "step data">

				<table class = 'data_table'>
					<tr>
						<th>Description</th>
						<th>Specification</th>
						<th>Value</th>
					</tr>

					<tr v-if = "step.step_status === 'in-progress' " v-for = "data_input in step.step_data">
							<td class = 'data_description'><label> {{data_input.process_component}}</label></td>
							<td class = 'data_description'><label v-if = "data_input.specification != null"> {{data_input.specification}}&#177{{data_input.error_range}}{{data_input.units}}</label> <label v-else>NA</label> </td>
							<td class = 'data_entry'><input class = 'data_input'  type = 'text'  v-model = "data_input.data"></input></td>
					</tr>

					<tr v-else >
							<td class = 'data_description'><label> {{data_input.process_component}}</label></td>
							<td class = 'data_description'><label> {{data_input.specification}}&#177{{data_input.error_range}}{{data_input.units}}</label></td>
							<td class = 'data_entry'><input class = 'data_input'  type = 'text'  v-model = "data_input.data" disabled ></input></td>
					</tr>

				</table>

			</div>

			<h3>Performed By and Verified By</h3>
		<div class= "sign_off" id = "sign off">
			<ul>
	      <li v-for = "err in error_list">{{err}}</li>
	    </ul>
			<table class = "signatures">
				<tr>
					<td>
						<button v-if = "step.step_status === 'in-progress'" type="button" name="button" v-on:click ="check_data_inputs" >Performed By</button>
					</td>
					<td>
					<signoff v-if = "error == false && step.step_status === 'in-progress'" v-on:user_authenticated = "performed($event)"></signoff>
					<span v-else-if = "step.step_status === 'performed' || step.step_status === 'complete'"><strong>Performed By: </strong>{{step.performed_by}},<br><strong>Performed On: </strong>{{step.performed_on}}</span>
					<span v-else><img :src="step_symbols[1]" alt="No Image"></span>
					</td>
					<td><button type="button" name="button" disabled>Verified By</button></td>
					<td>
						<verifier :performer = "step.performed_by" v-if = "step.step_status === 'performed'" v-on:user_authenticated = "verified($event)"></verifier>
						<span v-else-if = "step.step_status === 'complete'">
							<strong>Verifed By: </strong>{{step.verified_by}},
							<br>
							<strong>Verified On: </strong>{{step.verified_on}}
						</span>
						<span v-else><img :src="step_symbols[1]" alt="No Image"></span>
					</td>
				</tr>
		</table>
	</div>
		</div>
		</div>

	</div>

</template>

<script>
import signoff from './SignOff'
import verifier from './Verify'
import StepService from '../StepServices'

	export default {
		name: 'test',
		props: ['steps[current_step].performed_by','steps[current_step].verified_by'],
		components: {
			verifier,
			signoff
		},
		data(){
			return {
				error: true,
				error_list:[],
				br_selected: false,
				batch_record_list: [],
				wait:require('@/assets/Step Symbols/wait.jpg'),
				step_symbols: [
					require('@/assets/Step Symbols/image001.png'),
					require('@/assets/Step Symbols/wait.jpg')

				],
				step_symbol: "'Stop.jpg'",
				current_step: 0,
				preview_counter: 0,
				batch_record_length: 0,
				batch_record: {},
				step: {}


			}

		},
	async created(){
		try{
			this.batch_record_list = await StepService.getBatchRecordList().then( (res) => { return res} );
		}
	catch(err){
			this.error = err.message;
	}

  },

		methods: {

			loadBatchRecord: async function(lot_number){

				this.batch_record = await StepService.getBatchRecord(lot_number);//Get the batch record from the database.
				this.step = this.batch_record.steps[this.batch_record.current_step];
				this.step_symbol = this.step_symbols[this.step.step_symbol];
				this.batch_record_length = this.batch_record.steps.length;
				this.br_selected = true;


			},

			view_previous: function(){
					if(this.batch_record.current_step > 0){
						this.batch_record.current_step = this.batch_record.current_step - 1;
						this.preview_counter = this.preview_counter - 1;
						this.step = this.batch_record.steps[this.batch_record.current_step];
						this.step_symbol = this.step_symbols[this.step.step_symbol];
					}

			},
			view_next: function(){
							if(this.batch_record.current_step < this.batch_record.steps.length -1){
								this.batch_record.current_step = this.batch_record.current_step + 1;
								this.preview_counter = this.preview_counter +1;
								this.step = this.batch_record.steps[this.batch_record.current_step];
								this.step_symbol = this.step_symbols[this.step.step_symbol];
							}
			},
			return_to_current: function(){
						this.batch_record.current_step = this.batch_record.current_step - this.preview_counter;
						this.preview_counter = 0;
						this.step = this.batch_record.steps[this.batch_record.current_step];
						this.step_symbol = this.step_symbols[this.step.step_symbol];
			},
			performed: function(signature){
				this.step.performed_by = signature;
				this.step.step_status = 'performed';
				this.step.performed_on = new Date();
			},
			verified: async function(signature){
				if(this.batch_record.current_step >= this.batch_record.steps.length - 1){
					this.batch_record.batch_record_status = 'complete'
				}
				this.step.verified_by =  await signature;
				this.step.verified_on =  await new Date();
				this.step.step_status =  await 'complete';
				var batch_record_step = {
										lot_number: this.batch_record.lot_number,
										current_step: this.batch_record.current_step,
										batch_record_length: this.batch_record_length,
										batch_record_status: this.batch_record.batch_record_status,
										step: this.step
									};
				await StepService.updateBR(batch_record_step);
				this.batch_record = await StepService.getBatchRecord(this.batch_record.lot_number);
				this.step = this.batch_record.steps[this.batch_record.current_step];
				this.step_symbol = this.step_symbols[this.step.step_symbol];
				this.error = true;


			},
			check_data_inputs: function(){
				this.error_list = [];
				for(var i = 0; i < this.step.step_data.length; i++){
					if(this.step.step_data[i].data == ""){

						this.error = true;
						this.error_list.push("Please enter a value for : " + this.step.step_data[i].process_component)

					}else{
						this.error = false;
					}
				}


			},
			getImgUrl(img) {
            return require('@/assets/Step_Symbols/' + img)}

		},

		computed: {


		}

	}

</script>
<style scoped>



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
}

/*
ol {
  margin: 0 0 0;
  padding: 1.5em;
  counter-reset: item;
}

ol > li {
  margin: 0;
  padding: 0 0 0 ;
  text-indent: -2em;
  list-style-type: none;
  counter-increment: item;
}

ol > li:before {
  display: inline-block;
  width: 1em;
  padding-right: 0.5em;
  font-weight: bold;
  text-align: left;
  content: counter(item) ".";
}*/
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
