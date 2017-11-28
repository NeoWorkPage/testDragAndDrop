<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>



<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
  }


  ::-webkit-scrollbar-button {
    background-repeat:no-repeat;
    width:5px;
    height:0px
  }

  ::-webkit-scrollbar-track {
    background-color: #d6d6d6
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-color: #6b6b6b;
  }

  ::-webkit-scrollbar-thumb:hover{
    background-color: #767676;
  }

  ::-webkit-resizer{
    background-repeat:no-repeat;
    width:4px;
    height:0px
  }

  ::-webkit-scrollbar{
    width: 6px;
    height: 6px;
  }
</style>
