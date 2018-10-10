<template>
  <div id="city-select">
    <b-form-select 
      v-model="selected" 
      :options="options" 
      class="mb-3" 
      :disabled="disabled"
      :loading="loading"
      v-bind="$attrs"
      v-bind:value="selected"
      v-on="onChange"
    />
  </div>
</template>

<script>
export default {
  name: 'CitySelect',
  props: {
    disabled: Boolean,
    loading: Boolean,
    state: String
  },
  computed: {
    onChange () {
      this.$emit('pickcity', this.selected)
      return this.selected
    }
  },
  data () {
    return {
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