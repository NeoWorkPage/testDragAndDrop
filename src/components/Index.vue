<template>
  <div class="index">
    <div class="index__header">
    </div>
    <div class="index__wrapper">
      <drag-and-drop></drag-and-drop>
      <load-file></load-file>
    </div>

  </div>
</template>

<script>
  import dragAndDrop from './Draggable.vue'
  import loadFile from './LoadFile.vue'

  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      dragAndDrop,
      loadFile
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    border: 20px solid rgba(0, 0, 0, 0.09);
    width: 100%;
    height: 100vh;
  }
  .index__header{
    height: 100px;
    width: 100%;
    background-color: aqua;
  }
  .index__wrapper{
    display: flex;
    margin-top: 40px;

  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
