<template>
  <div id="home" class="content">
    <search-form></search-form>
  </div>
</template>

<script>  
  const { VUE_APP_GREENLIFE_API_URL } = process.env
  
  export default {
    name: 'HomePage',
    props: {
      // Props do Componente
      msg: String
    },
    data () {
      return {
        // Binds Aqui
      }
    },
    created: function() {
      // Create do Componente
      this.request()
    },
    methods: {
      // Metodos a serem invocados
      request () {
        this.$http.get(`${VUE_APP_GREENLIFE_API_URL}/air/`)
          .then((res) => {
            // Dados -> res.body
          }, (err) => {
            // Error -> err
          })
      }
    }      
  }
</script>

<style lang="scss" scoped>

</style>