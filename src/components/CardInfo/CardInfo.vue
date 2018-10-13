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
        <div class="button-caption" @click="showCapiton = !showCapiton">
          <font-awesome-icon v-if="!showCapiton" icon="question-circle" />
          <font-awesome-icon v-if="showCapiton" icon="times" />
        </div>
        <h1>
          <font-awesome-icon icon="map-marker" />
          {{thisWeather.name}}
          <span :class="{showcaption:showCapiton}">
            Local
          </span>
        </h1>
        <h2>
          <font-awesome-icon icon="thermometer-half" />
          {{thisWeather.data.temperature}}&deg; <div class="two">/ {{thisWeather.data.sensation}}&deg;</div>
          <span :class="{showcaption:showCapiton}">
            Temperatura <div class="two">/ Sensação térmica</div>
          </span>
        </h2>
        <h3>
          <div class="wrapper-icons">
            <font-awesome-icon icon="sun" />
            <font-awesome-icon icon="cloud" />
          </div>
          {{thisWeather.data.condition}}
          <span :class="{showcaption:showCapiton}">
            Condição climática
          </span>
        </h3>
        <h4>
          <font-awesome-icon icon="seedling" />
          {{thisAir.class.br}} ({{thisAir.index}})
          <span :class="{showcaption:showCapiton}">
            Qualidade do ar
          </span>
        </h4>
        <h5>
          <font-awesome-icon icon="tint" />
          {{thisWeather.data.humidity}}
          <span :class="{showcaption:showCapiton}">
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
        showCapiton: false,
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
      color: $black;
      background: $gray;
      position: relative;
      transition: $transition;
      .card-header {
        text-transform: uppercase;
        font-weight: 700;
        border-color: $white;
        transition: $transition;
      }
      .card-body {
        padding: 0 15px;
        transition: $transition;
        .button-caption {
          position: absolute;
          z-index: 0;
          border-radius: 50%;
          top: -60px;
          right: 15px;
          cursor: pointer;
          color: $black;
          background: $gray;
          width: 30px;
          height: 30px;
          line-height: 35px;
          svg {
            font-size: 20px;
          }
        }
        h1, h2, h3, h4, h5 {
          position: relative;
          margin: 15px auto;
          transition: $transition;
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
          opacity: 0;
          height: 0;
          transition: $transition;
          &.showcaption {
            height: 15px;
            opacity: 1;
          }
        }
        .two {
          font-size: 75%;
          display: inline-block;
        }
        .wrapper-icons {
          display: inline-block;
          position: relative;
        }
      }
      &.green {
        background: $green-light;
        box-shadow: 0 0 1px 1px $green;
        color: $white;
        .button-caption {
          background: $green-light;
          color: $white;
        }
      }
      &.yellow {
        background: $yellow-light;
        border-color: $black;
        box-shadow: 0 0 1px 1px $yellow-dark;
        .card-header {
          border-color: $black;
        }
        .button-caption {
          background: $yellow-light;
        }
      }
      &.orange {
        background: $orange-light;
        box-shadow: 0 0 1px 1px $orange-dark;
        color: $white;
        .button-caption {
          background: $orange-light;
          color: $white;
        }
      }
      &.red {
        background: $red-light;
        box-shadow: 0 0 1px 1px $red-dark;
        color: $white;
        .button-caption {
          background: $red-light;
          color: $white;
        }
      }
      &.purple {
        background: $purple-light;
        box-shadow: 0 0 1px 1px $purple-dark;
        color: $white;
        .button-caption {
          background: $purple-light;
          color: $white;
        }
      }
      &.black {
        background: $black;
        box-shadow: 0 0 1px 1px $black;
        color: $white;
        .button-caption {
          background: $black;
          color: $white;
        }
      }
      @media (max-width: 991px) {
        margin: 70px auto 15px;
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