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
      console.log('recieve', data, 'recivied')
      if (data) {
        this.disabledCity = false
      }
      this.state = data
    },
    recieveCity (data) {
      this.city = data
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>

</style>