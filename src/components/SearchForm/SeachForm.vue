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
      <b-button type="submit">
        Encontrar <font-awesome-icon icon="leaf" />
      </b-button>
      <b-button type="button">
        Usar localização <font-awesome-icon icon="map-marker" />
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'SeachForm',
  data () {
    return {
      country: null,
      state: null,
      city: null,
      disabledState: true,
      disabledCity: true
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
      this.city = data
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
    margin: 0 15px 15px;
    border-color: $green-hover;
    transition: $transition;
    transition: $transition;
    &:hover {
      background: $white;
      color: $green;
    }
  }
}
</style>