
<template>
  <div class="app">
          <div class="side">
            <div class="center">
              <h3>Electronic Batch Record System Login</h3>
            </div>
          </div>
      <div class="login">
        <div class="center">
          <!--List the errors if there are any -->
          <ul>
              <li v-for = "err in error_list">{{err}}</li>
          </ul>

          <br>
          <input type="text" name="username_input" value="" v-model = "username" placeholder="Username">
          <br>
          <br>
          <br>
          <input type="password" name="password_input" value="" v-model = "password" placeholder="Password">
          <br>
          <br>
          <br>
          <input type="submit" name="" value="Sign-In" v-on:click = "authenticate">
          </div>
      </div>

  </div>
</template>

<script>
import StepService from '../StepServices';

export default {
  name: 'app',
  components: {


  },
  data(){

			return {
        error: false,
        error_list: [],
				username: "",
        password: "",
        authenticated: false

			}

		},
	methods:{
    authenticate: async function(){
      this.error_list = [];
      if(this.username == "" || this.password == ""){

        if(this.username == ""){
          this.error = true;
          this.error_list.push("Enter a username")

        }
        if(this.password == ""){
            this.error = true;
            this.error_list.push("Enter a password")
          }

      }else{
        //Enter API Call to the database for authentication
        var user = {
          username: this.username,
          password: this.password
        }
        var authentication = await StepService.authenticateUser(user);
        if(authentication == "None"){
          this.error = true;
          this.error_list.push("Incorrect Username or Password")
        }else{
          this.$emit('user_authenticated');
          this.authenticated = true;
        }


      }
    }
	}
}

</script>

<style scoped>

.app {
  display:flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
  padding:0px;
  width: 100vw;
  height:100vh;
  background-color:white;
}
.side{
  flex:1;
  background-color: #98A4AE;
  color:#012169;
  text-align:center;
  font-size:3.0vw;
}
.login{
  flex:2;
  background-color: #BFCED6;
}
.center{
  margin-top:35vh;
}
input{
  height:5vh;
  width: 40vw;
  font-size:2.0vw;
  color:#5B6770;
}
input[type="submit"]{
  height:8vh;
  background-color: #7FADE3;
  border-radius: 8px;
  color:#5B6770;
}
ul li{
  list-style-type: none;
  font-size:1.5vw;
  color:#EE1C26;
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
