<template>
  <div id="card-info">
    <b-card
      header="Informações climáticas"
      :class="thisAir.color"
    >
      <div class="loader-container" v-if="loading">
        <font-awesome-icon class="loader rotate-paused" icon="hourglass-half" />
      </div>
      <div v-if="!loading">
        <h1>
          <font-awesome-icon icon="map-marker" />
          {{thisWeather.name}}
          <span>
            Local
          </span>
        </h1>
        <h2>
          <font-awesome-icon icon="thermometer-half" />
          {{thisWeather.data.temperature}}&deg; <div class="two">/ {{thisWeather.data.sensation}}&deg;</div>
          <span>
            Temperatura <div class="two">/ Sensação térmica</div>
          </span>
        </h2>
        <h3>
          <div class="wrapper-icons">
            <font-awesome-icon icon="sun" />
            <font-awesome-icon icon="cloud" />
          </div>
          {{thisWeather.data.condition}}
          <span>
            Condição climática
          </span>
        </h3>
        <h4>
          <font-awesome-icon icon="seedling" />
          {{thisAir.class.br}} ({{thisAir.index}})
          <span>
            Qualidade do ar
          </span>
        </h4>
        <h5>
          <font-awesome-icon icon="tint" />
          {{thisWeather.data.humidity}}
          <span>
            Humidade
          </span>
        </h5>
      </div>
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
        },
        iconName: '',
        loading: true
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
          if (this.loading) {
            this.loading = false
          }
        }
      },
      air (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.thisAir = this.toJSON(newVal.air)
          if (this.loading) {
            this.loading = false
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/globals";
  #card-info {
    .card {
      border-radius: 10px;
      max-width: 600px;
      margin: 15px auto 15px;
      border-color: $white;
      color: $white;
      background: $gray;
      position: relative;
      .card-header {
        text-transform: uppercase;
        font-weight: 700;
        border-color: $white;
      }
      .card-body {
        padding: 0 15px;
      }
      h1, h2, h3, h4, h5 {
        position: relative;
        margin: 15px auto;
      }
      h1 {
        font-size: 25px;
      }
      h2 {
        font-size: 25px;
      }
      h3 {
        font-size: 23px;
      }
      h4 {
        font-size: 23px;
      }
      h5 {
        font-size: 20px;
      }
      span {
        display: block;
        font-size: 50%;
      }
      .two {
        font-size: 75%;
        display: inline-block;
      }
      .wrapper-icons {
        display: inline-block;
        position: relative;
      }
      @media (max-width: 991px) {
        margin: 70px auto 15px;
        span {
          display: none;
        }
      }
      &.green {
        background: $green-light;
        box-shadow: 0 0 1px 1px $green;
      }
      &.yellow {
        background: $yellow-light;
        color: $black;
        border-color: $black;
        box-shadow: 0 0 1px 1px $yellow-dark;
        .card-header {
          border-color: $black;
        }
      }
      &.orange {
        background: $orange-light;
        box-shadow: 0 0 1px 1px $orange-dark;
      }
      &.red {
        background: $red-light;
        box-shadow: 0 0 1px 1px $red-dark;
      }
      &.purple {
        background: $purple-light;
        box-shadow: 0 0 1px 1px $purple-dark;
      }
      &.black {
        background: $black;
        box-shadow: 0 0 1px 1px $black;
      }
    }
    .loader-container {
      margin: 15px;
      svg{
        font-size: 30px;
      }
    }
  }
</style>