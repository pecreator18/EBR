
<template>
  <div class="app">
	<div class = "nav">
		<button v-on:click = "Home">Home</button>
		<button v-on:click = "Create">Create A Batch Record</button>
		<button v-on:click = "Execute">Execute a Batch Record</button>
	</div>
	<br>
	<div v-if = "home">
		<h1>Batch Record System Home</h1>
		<p> This application will be developed to be used as a electronic batch record system
			for use in manufacturing operations that must comply with FDA regulations.</p>

	</div>
	<br>
	<batch_record v-if = "execute"></batch_record>
	<templateCreation v-if = "create"></templateCreation>
  </div>
</template>

<script>
import batch_record from './components/Test'
import templateCreation from './components/TemplateCreator'

export default {
  name: 'app',
  components: {
	batch_record,
	templateCreation

  },
  data(){
			return {
				create: false,
				execute: false,
				home:true
			}

		},
	methods:{

			Create: function(){
				this.create = true;
				this.execute = false;
				this.home = false;

			},
			Execute: function(){
				this.create = false;
				this.execute = true;
				this.home = false;

			},
			Home: function(){
				this.create = false;
				this.execute = false;
				this.home = true;

			}


	}
}

</script>

<style>


.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  padding:1px;
  width: 100%;
  background-color: lightgrey;
}
</style>
