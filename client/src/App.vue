
<template>
  <div class="app">
	<batch_record></batch_record>
	<templateCreation></templateCreation	>
  </div>
</template>

<script>
import batch_record from './components/Test'
import templateCreation from './components/TemplateCreation'

export default {
  name: 'app',
  components: {
	batch_record,
	templateCreation
	
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
}
</style>
