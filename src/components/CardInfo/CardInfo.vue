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
      toJSON (object) {
        return JSON.parse(JSON.stringify(object))
      }
    },
    watch: {
      weather (newVal, oldVal) {
        newVal = this.toJSON(newVal)
        oldVal = this.toJSON(oldVal)
        console.log(newVal.name)
        if (newVal !== oldVal) {
          this.thisWeather = this.toJSON(newVal)
          console.log(this.thisWeather)
        }
      },
      air (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.thisAir = this.toJSON(newVal)
          // console.log(this.thisAir)
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