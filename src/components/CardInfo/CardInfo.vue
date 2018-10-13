<template>
  <div id="card-info">
    <b-card 
      header="Informações climáticas"
      :title="thisWeather.name"
      :class="thisAir.color"
    >
      <h1>
        {{thisWeather.data.temperature}} / {{thisWeather.data.sensation}}
        <span>
          Temperatura / Sensação
        </span>
      </h1>
      <h2>
        {{thisWeather.data.condition}}
        <span>
          Condição
        </span>
      </h2>
      <h3>
        {{thisAir.class.br}} ({{thisAir.index}})
        <span>
           Qualidade do ar
        </span>
      </h3>
      <h4>
        {{thisWeather.data.humidity}}
        <span>
          Humidade
        </span>
      </h4>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'CardInfo',
    props: {
      weather: Object,
      air: Object
    },
    data () {
      return {
        thisWeather: {
          data: {}
        },
        thisAir: {
          class: {}
        }
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