<template>
  <div id="country-select">
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
export default {
  name: 'CountrySelect',
  props: {
    disabled: Boolean,
    loading: Boolean
  },
  watch: {
    selected (newVal, oldVal) {
       if (newVal !== oldVal) {
        this.$emit('pickcountry', newVal)
        return newVal
      }
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