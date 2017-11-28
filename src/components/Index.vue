<template>
  <div class="index">
    <div class="index__header">
      <h1>Drag and Drop</h1>
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

