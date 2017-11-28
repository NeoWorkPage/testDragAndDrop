<template>
  <transition name="opacity" v-show="show" mode="out-in">
    <div class="drag">

      <div class="drag__area" v-if="list.length">
          <pre>
            {{list}}
          </pre>
          <a class="button" :href="'data: text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(list)) " download="data.json">Скачать JSON</a>
      </div>
      <div class="drag__draggable">
        <h3>Добавленные файлы</h3>
        <draggable
          v-model="list"
          :options="{group:'people'}"
          class="dragArea">
          <div class="dragArea_item" v-for="(element, index) in list">
            <span class="dragArea_item-close" @click="removeJob(index)">x</span>
            {{element.NameFile}}
            <span class="dragArea_item-size">{{ element.SizeFile }} Байт</span>
          </div>
        </draggable>
      </div>

      <div class="drag__normal">
        <h3>Полный список файлов</h3>
        <draggable
          v-model="list2"
          :options="{group:{ name:'people',  pull:'clone', put:false }}"
          class="dragArea">
          <div class="dragArea_item" v-for="element in list2">
            {{element.NameFile}}
            <span class="dragArea_item-size">{{ element.SizeFile }} Байт</span>
          </div>
        </draggable>
      </div>
    </div>
  </transition>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    data(){
      return {
        show: false,
        textArea: '',
        list: [],
        list2: [],
        data: ''
      }
    },
    components: {
      draggable
    },
    watch: {
      listFile(now){
        this.list2 = now
        this.show = true
        this.textArea = JSON.stringify(now, null, 2)
      }
    },
    computed: {
      listFile(){
        return this.$store.state.loadFile.loaderFile
      }
    },
    methods:{
      removeJob: function(index) {
        // Remove job from GUI
        this.list.splice(index, 1);
      }
    }
  }
</script>

<style scoped>

</style>
