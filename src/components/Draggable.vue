<template>
  <transition name="opacity" v-if="show" mode="out-in">
    <div class="drag">

      <div class="drag__area" >
          <pre>
            {{listFile}}
          </pre>
          <a class="button" :href="'data: text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(listFile)) " download="data.json">Скачать JSON</a>
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
    },
    methods:{
      removeJob: function(index) {
        this.$store.commit('spliceItem', { type: 'loaderFile', items: index })
      }
    }
  }
</script>
