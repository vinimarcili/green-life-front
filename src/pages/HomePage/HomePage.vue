<template>
  <div id="home" class="content">
    <b-container>
      <b-row>
        <b-col cols="12">
          <p> 
            O GreenLife busca informações socio ambientais baseados na localização escolhida.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
            <search-form />
        </b-col>
      </b-row>
    </b-container>
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
@import "../../assets/styles/globals";
#home {
  p {
    display: inline-block;
    color: $green;
    margin: 15px auto;
  }
}
</style>