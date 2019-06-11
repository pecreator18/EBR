<template>
	<div class="test">
	
	<ol>
		<li v-for = "template in templates">{{template.description}}</li>
	
	</ol>
		
	</div>
	
	

</template>

<script>
import esig from './Signature'
import StepService from '../StepServices';

	export default {
		name: 'test',
		props: ['steps[current_step].performed_by','steps[current_step].verified_by'],	
		components: {
			esig
		},
		data(){
			return {
				templates: []
						
				
			}
		
		},
	async created(){
	try{
		
		this.templates = await StepService.getBatchRecordTemplates();
		
	}
	catch(err){
		this.error = err.message;
	}
  
  },
		
		methods: {
		
		
		},
		
		computed: {
			
		
		}
		
	}

</script>
<style scoped>



</style>