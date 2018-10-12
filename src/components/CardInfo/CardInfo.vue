<template>
  <div id="card-info">
    <b-card 
      title="Informações climáticas"
      :sub-title="thisWeather.name"
    >

    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'CardInfo',
    props: [
      'weather',
      'air'
    ],
    data () {
      return {
        thisWeather: {
          name: ''
        },
        thisAir: {}
      }
    },
    methods: {
      toJSON (string) {
        return JSON.parse(string)
      }
    },
    watch: {
      weather (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.thisWeather = this.toJSON(newVal.weather)
        }
      },
      air (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.thisAir = this.toJSON(newVal.air)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/globals";
  #card-info {

  }
</style>