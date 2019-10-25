<template>
  <div class="app">

  <div class="sign_in" v-if = "authenticated == false">
    <login @user_authenticated = "user_authenticated()"></login>
  </div>

  <div class="secure" v-else>
    <a class = "logout" href="#" v-on:click = "LogOut">Log Out</a>
	<a class = "homescreen" href="#" v-on:click = "Home">Home</a><br>

	<div class = "home" v-if = "home">
		<div class = "menu">
			<button class="option" v-on:click = "Create">Create A Batch Record Template</button>
			<br>
			<button class="option" v-on:click = "Create">Create A Batch Record</button>
			<br>
			<button class="option" v-on:click = "Execute">Execute a Batch Record</button>
			<br>
			<button class="option" v-on:click = "Completed">View Completed Batch Records</button>
		</div>
	</div>
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

<style scoped>


.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100vw;
  height:100vh;
}
.secure{
	height:100%;
	width:100%;
	background-color: #BFCED6;
}
.logout{
  float: right;
}
.homescreen{
	float:left;
}
.menu{
	display:flex;
	flex-direction: column;
	padding:10%;
	justify-content: space-between;
}
.option{
  height:8vh;
  background-color: #7FADE3;
  border-radius: 8px;
  color:#5B6770;
  font-size:2.0vw;
  font-weight:bold;
}
/*
{Name: "AJI RED", Value: ColorValue("#EE1C26")},
{Name: "SLATE GREY", Value: ColorValue("#98A4AE")},
{Name: "DARK GREY",Value: ColorValue("#5B6770")},
{Name:"LIGHT GREY",Value: ColorValue("#BFCED6")},
{Name:"SILVER GREY",Value: ColorValue("#D9E1E2")},
{Name:"DARK BLUE",Value: ColorValue("#012169")},
{Name:"SKY BLUE",Value: ColorValue("#7FADE3")},
{Name:"AQUA",Value: ColorValue("#8BD3E6")},
{Name:"TEAL",Value: ColorValue("#007396")},
{Name:"CORAL",Value: ColorValue("#FF8D6D")},
{Name:"GREEN",Value: ColorValue("#00B388")},
{Name:"YELLOW",Value: ColorValue("#FFC658")},
{Name:"PURPLE",Value: ColorValue("#606EB2")});*/
</style>
