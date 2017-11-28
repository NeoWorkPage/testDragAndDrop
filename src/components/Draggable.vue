<template>
  <div class="drag">
    <div class="drag__draggable">
      <h2>Draggable</h2>
      <draggable :list="list" class="dragArea">
        <div v-for="element in list">{{element.name}}</div>
      </draggable>
    </div>

    <div class="drag__normal">
      <h2>Normal v-for</h2>
      <div class="dragArea">
        <div v-for="element in list">{{element.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    data(){
      return {
        list: [
          {
            name: 'test1'
          },
          {
            name: 'test2'
          },
        ]
      }
    },
    components: {
      draggable
    }
  }
</script>

<style scoped>
  .drag{
    width:70%;
    flex: 1 70%;
    display: flex;
    justify-content: space-around;

  }
</style>
