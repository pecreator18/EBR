<template>
  <div class = 'container'>

<!--
  <h1>Latest Posts</h1>
	<div class="create-post">
		<label for="create-post"> Say Something </label>
		<input type="text"  id = "create-post"  v-model="text" placeholder = "Create A Post">
	<button v-on:click="createPost">Post</button>
	</div>
	<hr>
	<div class = 'post-container'>
		<div class = 'post'
		v-for="(post,index) in posts"
		v-bind:item = "post"
		v-bind:index= "index"
		v-bind:key= "post.id"
		v-on:dblclick="deletePost(post._id)"
		>
		{{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
		<p class="text">{{post.text}}</p>	
		</div>	
	
	</div>-->
	{{posts}}
  </div>
</template>

<script>
import StepService from '../StepServices';

export default {
  name: 'BRComponent',
  data(){
	return{
	 posts: [],
	 error: '',
	 text: ''
	 
	}
  
  },
  async created(){
	try{
		
		this.posts = await StepService.getBatchRecord()
	
	}
	catch(err){
		this.error = err.message;
	}
  
  },
  
  methods: {
	async createPost(){
		await StepService.insertPost(this.text);
		this.posts = await StepService.getBatchRecord()
	},
	async deletePost(id){
		await StepService.deletePost(id);
		this.posts = await StepService.getBatchRecord()
	}
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-container{
	border: 1px solid black;
}
.post{
	border: 1px solid black;
}
</style>
