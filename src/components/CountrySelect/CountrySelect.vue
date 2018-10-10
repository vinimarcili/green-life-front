<template>
  <div id="country-select">
    <b-form-select 
      v-model="selected" 
      :options="options" 
      class="mb-3" 
      :disabled="disabled"
      :loading="loading" 
      v-on:change="onChange"
    />
  </div>
</template>

<script>
export default {
  name: 'CountrySelect',
  model: {
    event: 'change'
  },
  props: {
    disabled: Boolean,
    loading: Boolean
  },
  computed: {
    onChange (event) {
      this.$emit('pickcountry', this.selected)
      return this.selected
    }
  },
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Por favor selecione o País', disabled: true },
        { value: 'brazil', text: 'Brasil' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #country-select {
    select {
      width: 100%;
      border-radius: 0;
    }
  }
</style>