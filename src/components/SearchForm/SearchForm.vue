<template>
  <div id="search-form">
    <div class="loader-container" v-if="loading">
      <font-awesome-icon class="loader spin-grow" icon="cog" />
      <span>
        Coletando dados
      </span>
    </div>
    <b-form v-if="!loading">
      <country-select
        v-on:pickcountry="recieveCountry"
        v-model="country"
        :disabled="disableCountry"
      />
      <state-select
        v-on:pickstate="recieveState"
        v-model="state"
        :country="country"
        :disabled="disabledState"
      />
      <city-select
        v-on:pickcity="recieveCity"
        v-model="city"
        :state="state"
        :disabled="disabledCity"
      />
      <b-button
        class="right"
        type="button"
        v-on:click.prevent="submit()"
        :disabled="disableButton"
      >
        Encontrar <font-awesome-icon icon="leaf" />
      </b-button>
      <b-button
        class="left"
        type="button"
        v-on:click.prevent="submitLocation()"
        :disabled="disableLocation"
      >
        Usar localização <font-awesome-icon icon="map-marker" />
      </b-button>
      <p class="error" v-if="error">
        {{error}}
      </p>
    </b-form>
  </div>
</template>

<script>
const { VUE_APP_GREENLIFE_API_URL } = process.env

export default {
  name: 'SearchForm',
  data () {
    return {
      weather: false,
      air: false,
      country: null,
      state: null,
      city: null,
      disableCountry: false,
      disabledState: true,
      disabledCity: true,
      disableButton: true,
      disableLocation: false,
      disables: [],
      error: false,
      loading: false
    }
  },
  created () {
    (async () => {
      // Coordenadas de São Paulo como padrão
      const lat = -23.5525
      const lng = -46.6386

      await this.getInfosByGeolocation(lat, lng)  
    })()
  },
  methods: {
    recieveCountry (data) {
      if (data) {
        this.disabledState = false
      }
      this.country = data
    },
    recieveState (data) {
      if (data) {
        this.disabledCity = false
      }
      this.state = data
    },
    recieveCity (data) {
      if (data) {
        this.disableButton = false
      }
      this.city = data
    },
    getInfosByGeolocation (lat, lng) {
      (async () => {
        try {
          this.disableForm()

          const responseAir = await this.getAirGeo(lat, lng)
          const responseWeather = await this.getWeatherGeo(lat, lng)

          this.air = this.toString(responseAir.body)
          this.weather = this.toString(responseWeather.body)
          this.onSuccess()
        } catch (err) {
          this.onError()
        }
      })()
    },
    submit () {
      (async () => {
        try {
          this.disableForm()

          const responseAir = await this.getAir()
          const responseWeather = await this.getWeather()

          this.air = this.toString(responseAir.body)
          this.weather = this.toString(responseWeather.body)

          this.onSuccess()
        } catch (err) {
          this.onError()
        }
      })()
    },
    submitLocation () {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (p) => {
          await this.getInfosByGeolocation(p.coords.latitude, p.coords.longitude)  
        })
      } else {
        this.disableLocation = true
        this.error = 'Seu navegador não suporta geolocation :('
      }
    },
    getWeather () {
      return this.$http.get(`${VUE_APP_GREENLIFE_API_URL}/weather/${this.state}/${this.city}`)
    },
    getWeatherGeo (lat, lng) {
      return this.$http.get(`${VUE_APP_GREENLIFE_API_URL}/weather/geo/${lat}/${lng}`)
    },
    getAir () {
      return this.$http.get(`${VUE_APP_GREENLIFE_API_URL}/air/${this.state}/${this.city}`)
    },
    getAirGeo (lat, lng) {
        return this.$http.get(`${VUE_APP_GREENLIFE_API_URL}/air/geo/${lat}/${lng}`)
    },
    toggleDisabledAll (enabled) {
      this.disableCountry = this.toggleProp(this.disableCountry, "country", enabled)

      this.disabledState = this.toggleProp(this.disabledState, "state", enabled)

      this.disabledCity = this.toggleProp(this.disabledCity, "city", enabled)

      this.disableButton = this.toggleProp(this.disableButton, "button", enabled)

      this.disableLocation = this.toggleProp(this.disableLocation, "location", enabled)
    },
    toggleProp (prop, string, enabled) {
      if (!enabled) {
        if (prop === false) {
          this.disables.push(string)
        }
        return true
      } else if (this.disables.includes(string)) {
        this.disables = this.removeArrayItem(this.disables, string)
        return false
      } else {
        return true
      }
    },
    removeArrayItem (array, remove) {
      return array.filter((item) => {
        return item !== remove
      })
    },
    toString (object) {
      return JSON.stringify(object)
    },
    onSuccess () {
      this.enableForm()
      this.$emit('success', {
        weather: this.weather,
        air: this.air
      })
    },
    onError () {
      this.error = "Não foi possivel obter os dados :( Verifique o formulário e tente novamente."
      this.enableForm()
    },
    enableForm () {
      this.toggleDisabledAll(true)
      this.loading = false
    },
    disableForm () {
      this.toggleDisabledAll(false)
      this.loading = true
      this.error = false
    },
    getRandomInRange (from, to, fixed) {
      return (Math.random() * (to - from) + from).toFixed(fixed) * 1
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/globals";
#search-form {
  margin: 0 auto 60px;
  .loader-container {
    z-index: 1;
    margin: 15px auto;
    span {
      display: inline-block;
      line-height: 20px;
      font-size: 16px;
      font-weight: 600;
      top: calc(50% + 75px);
      left: calc(50% - 60px);
      position: absolute;
      animation: grow 1.5s linear infinite;
    }
    .loader {
      font-size: 50px;
      z-index: 2;
      color: $green;
    }
  }
  select {
    width: 100%;
    border-radius: 0;
    color: $green;
    border-color: $green-hover;
  }
  button {
    background: $green;
    border-radius: 0;
    margin: 0 auto 15px;
    border-color: $green-hover;
    position: absolute;
    transition: $transition;
    width: calc(50% - 15px);
    overflow: hidden;
    &.left {
      left: 15px;
    }
    &.right {
      right: 15px;
    }
    &:hover {
      background: $white;
      color: $green;
    }
    &.disabled {
      background: $gray-disable;
      border-color: $gray-disable;
      &:hover {
        background: $gray-disable;
        color: $white;
        cursor: not-allowed;
      }
    }
  }
  .error {
    color: red;
    font-weight: 700;
    margin: 60px auto -40px;
    border: 2px solid red;
    transition: $transition;
    max-width: 50%;
  }
}
</style>