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
  watch: { 
    state: function(newVal, oldVal) { 
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
       if (newVal !== oldVal) {
      this.requestCities(newVal)
      }
    }
  },
  methods: {
    requestCities (state) {
      console.log(state)
      if (state) {
        this.$http.get(`${VUE_APP_GREENLIFE_API_URL}/cities/names/${state}`)
        .then((res) => {
            console.log(res)
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