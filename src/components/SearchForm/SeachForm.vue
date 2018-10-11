<template>
  <div id="search-form">
    <b-form>
      <country-select
        v-on:pickcountry="recieveCountry"
        v-model="country"
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
      >
        Usar localização <font-awesome-icon icon="map-marker" />
      </b-button>
    </b-form>
  </div>
</template>

<script>
const { VUE_APP_GREENLIFE_API_URL } = process.env

export default {
  name: 'SeachForm',
  data () {
    return {
      country: null,
      state: null,
      city: null,
      disabledState: true,
      disabledCity: true,
      disableButton: true
    }
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
    submit () {
      this.$http.get(`${VUE_APP_GREENLIFE_API_URL}/temperature/${this.state}/${this.city}`)
        .then((data) => {
          console.log(data)
        })
    },
    submitLocation () {
      window.alert("Em Breve")
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/globals";
#search-form {
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
}
</style>