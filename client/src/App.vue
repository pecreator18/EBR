<template>
  <div class="app">
  <div class="sign_in" v-if = "authenticated == false">
    <login @user_authenticated = "user_authenticated()"></login>
  </div>
  <div class="secure" v-else>
    <a class = "logout" href="#" v-on:click = "LogOut">Log Out</a>
	<div class = "nav">
		<button v-on:click = "Home">Home</button>
		<button v-on:click = "Create">Create A Batch Record</button>
		<button v-on:click = "Execute">Execute a Batch Record</button>
    <button v-on:click = "Completed">View Completed Batch Records</button>
	</div>
	<br>2
	<div v-if = "home">
		<h1>Batch Record System Home</h1>
		<p> This application will be developed to be used as a electronic batch record system
			for use in manufacturing operations that must comply with FDA regulations.</p>
      <br>
	</div>
	<br>
	<batch_record v-if = "execute"></batch_record>
	<templateCreation v-if = "create"></templateCreation>
  <completed_brs v-if = "completed"> </completed_brs>
</div>
  </div>
</template>

<script>
import batch_record from './components/Test'
import templateCreation from './components/TemplateCreator'
import completed_brs from './components/Completed_BRs'
import login from './components/Login'

export default {
  name: 'app',
  components: {
	batch_record,
	templateCreation,
  completed_brs,
  login

  },
  data(){
			return {
				create: false,
				execute: false,
				home:true,
        completed:false,
        authenticated: false

			}

		},
	methods:{

			Create: function(){
				this.create = true;
				this.execute = false;
				this.home = false;
        this.completed = false;

			},
			Execute: function(){
				this.create = false;
				this.execute = true;
				this.home = false;
        this.completed = false;


			},
			Home: function(){
				this.create = false;
				this.execute = false;
				this.home = true;
        this.completed = false;

			},
			Completed: function(){
				this.create = false;
				this.execute = false;
				this.home = false;
        this.completed = true;

			},
      user_authenticated: function(){
        this.authenticated = true;
      },
      LogOut: function(){
        this.authenticated = false;
      },
      Reset: function(){


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

.logout{
  float: right;

}
</style>
