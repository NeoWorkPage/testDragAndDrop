<template>
  <div class="load" id="dropZone">
    <div class="load__text">Для загрузки, перетащите файл сюда.</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods: {
      loadFile(){
        const dnd = new DnDFileController('#dropZone', function(files) {
          const f = files[0];

          if (!f.type.match('application/json')) {
            alert('Not a JSON file!');
          }

          const reader = new FileReader();
          reader.onloadend = function(e) {
            console.log(e)
            const result = JSON.parse(this.result);
            console.log(result);
          };
          reader.readAsText(f);
        });
      }
    },
    mounted(){
      this.loadFile()
    }
  }
</script>

<style scoped>
  .load{
    width:30%;
    flex: 1 30%;
    margin-right: 10px;
    height: 400px;
    border: 5px dashed rgba(0, 0, 0, 0.56);
    border-radius: 5px;
  }
  .load__text{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
