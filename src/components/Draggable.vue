<template>
  <transition name="opacity" v-if="show" mode="out-in">
    <div class="drag">

      <div class="drag__area" >
          <pre>
            {{listFile}}
          </pre>
          <a class="button" :href="'data: text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(listArea)) " download="data.json">Скачать JSON</a>
      </div>

      <div class="drag__normal">
        <h3>Полный список файлов</h3>
        <div class="dragArea">
          <div class="dragArea_item" v-for="(element, index) in list">
            <span class="dragArea_item-close" @click="removeJob(index)">x</span>
            {{element.NameFile}}
            <span class="dragArea_item-size">{{ element.SizeFile }} Байт</span>
          </div>
        </div>
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
        data: ''
      }
    },
    components: {
      draggable
    },
    watch: {
      listFile(now){
        this.list = now
        this.show = true
      }
    },
    computed: {
      listFile(){
        return this.$store.state.loadFile.loaderFile
      },
      listArea(){
        return this.$store.state.loadFile.listArea
      }
    },
    methods:{
      removeJob: function(index) {
        // Remove job from GUI
        console.log(index)
        this.$store.commit('spliceItem', { type: 'loaderFile', items: index })
//        this.list.splice(index, 1);
      }
    }
  }
</script>

<style scoped>

</style>
