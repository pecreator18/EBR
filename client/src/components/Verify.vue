<!-- This component is the user sign off for the electronic batch record.    -->
<template>
  <div class="app">
    <ul>
      <li v-for = "err in error_list">{{err}}</li>
    </ul>
    <label for="username_input">Username</label>
    <input type="text" name="username_input" value="" v-model = "username">
    <br>
    <br>
    <label for="password_input">Password</label>
    <input type="password" name="password_input" value="" v-model = "password">
    <br>
    <input type="submit" name="" value="Sign-In" v-on:click = "authenticate">
  </div>
</template>

<script>
import StepService from '../StepServices';

export default {
  name: 'app',
  components: {
  },
  props:['performer'],
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
    /* This function tests for user authentication and emits the username back to the parent component once authenticated */
    authenticate: async function(){
      this.error_list = [];
      if(this.username == "" || this.password == "" || this.username == this.performer){

        if(this.username == ""){
          this.error = true;
          this.error_list.push("Enter a username")

        }
        if(this.password == ""){
            this.error = true;
            this.error_list.push("Enter a password")
          }
       if (this.performer == this.username) {
           this.error = true;
           this.error_list.push("Performer can't be verifier")
         }

      }

      else{
        //Enter API Call to the database for authentication
        var user = {
          username: this.username,
          password: this.password
        }
          var authentication = await StepService.authenticateUser(user);
          if(authentication == "None"){
            this.error = true;
            this.error_list.push("Incorrect user id or password")
          }else{
            this.$emit('user_authenticated', this.username);
            this.username = "";
            this.password = "";
          }


      }


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
