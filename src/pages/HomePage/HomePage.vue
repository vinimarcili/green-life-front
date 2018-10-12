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
  export default {
    name: 'HomePage'    
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