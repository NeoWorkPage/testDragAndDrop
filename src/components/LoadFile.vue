<template>
  <div class="load" id="dropZone">
    <div class="load__text" v-if="show">Для загрузки, перетащите файл сюда.</div>
    <div class="load__text" v-if="!show">Загрузка</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        show: true
      }
    },
    methods: {
      errorPopup(now){
        const newDiv = document.createElement('div');
        newDiv.classList.add('popup');
        newDiv.innerHTML = now;
        document.body.appendChild(newDiv);
        setTimeout(function () {
          document.body.removeChild(newDiv)
        }, 3000)
      },
      loadFile(){
        const self = this;

        const dnd = new DnDFileController('#dropZone', function(files) {
          const f = files[0];
          self.show = false;
          const reader = new FileReader();
          reader.onloadend = function(e) {
            try {
              const result = JSON.parse(this.result)
              result.NameFile = files[0].name;
              result.SizeFile = files[0].size;
              self.show = true;
              self.$store.commit('pushItem', { type: 'loaderFile', items: result})
            } catch (err) {
              self.errorPopup(err)
              self.show = true;
            }

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
