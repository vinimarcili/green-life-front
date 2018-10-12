<template>
  <div id="city-select">
    <b-form-select 
      v-model="selected" 
      :options="options" 
      class="mb-3" 
      :disabled="disabled"
      :loading="loading"
    />
  </div>
</template>

<script>
const { VUE_APP_GREENLIFE_API_URL } = process.env

export default {
  name: 'CitySelect',
  props: {
    disabled: Boolean,
    loading: Boolean,
    state: String
  },
  watch: { 
    state (newVal, oldVal) { 
      if (newVal !== oldVal) {
        this.requestCities(newVal)
      }
    },
    selected (newVal, oldVal) {
       if (newVal !== oldVal) {
        this.$emit('pickcity', newVal)
        return newVal
      }
    }
  },
  methods: {
    requestCities (state) {
      if (state) {
        this.$http.get(`${VUE_APP_GREENLIFE_API_URL}/cities/names/${state}`)
        .then((res) => {
            const parse = res.body.map((item) => {
              return {
                value: item,
                text: item
              }
            })
            this.options = [
              { value: null, text: 'Selecione o Cidade', disabled: true }
            ]
            this.options = this.options.concat(parse)
            this.selected = null
            this.now = state
          })
      }
    }
  },
  data () {
    return {
      now: null,
      selected: null,
      options: [
        { value: null, text: 'Selecione o Cidade', disabled: true }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>