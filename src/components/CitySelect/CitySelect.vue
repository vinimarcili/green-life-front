<template>
  <div id="city-select">
    <b-form-select 
      v-model="selected" 
      :options="options" 
      class="mb-3" 
      :disabled="disabled"
      :loading="loading"
      v-on="onChange"
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
  updated () {
    console.log(this.now)
    console.log(this.state)
    if (this.state !== this.now) {
      this.requestCities(this.state)
    }
  },
  methods: {
    requestCities (state) {
      console.log(state)
      if (state) {
        this.$http.get(`${VUE_APP_GREENLIFE_API_URL}/cities/names/${state}`)
        .then((res) => {
            const parse = res.body.map((item) => {
              return {
                value: item,
                text: item
              }
            })
            this.options = this.options.concat(parse)
            this.now = state
          })
      }
    }
  },
  computed: {
    onChange () {
      this.$emit('pickcity', this.selected)
      return this.selected
    }
  },
  data () {
    return {
      now: null,
      selected: null,
      options: [
        { value: null, text: 'Por favor selecione o Cidade', disabled: true }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#city-select {
  select {
    width: 100%;
    border-radius: 0;
  }
}
</style>