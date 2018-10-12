<template>
  <div id="home" class="content">
      <div class="form-container" :class="{show:showForm}">
        <div class="form-wrapper">
          <div class="push-form" @click="showForm = false">
            <font-awesome-icon icon="angle-double-left" />
          </div>
          <p> 
            O GreenLife busca informações socio ambientais baseados na localização escolhida.
          </p>
          <search-form v-on:success="pickData" />
        </div>
        <div class="pull-form" @click="showForm = true">
          <font-awesome-icon icon="angle-double-right" />
        </div>
    </div>
    <b-container>
      <b-row>
        <b-col cols="12">
          conteudo
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data () {
      return {
        showForm: false,
        weather: {},
        air: {}
      }
    },
    methods: {
      pickData (data) {
        this.showForm = false
        if (data) {
          this.weather = data.weather
          this.air = data.air
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/styles/globals";
#home {
  position: relative;
  p {
    display: inline-block;
    color: $green;
    margin: 15px auto;
  }
  .form-container {
    width: 100%;
    height: 99%;
    display: flex;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    position: absolute;
    left: -100%;
    top: 0;
    box-shadow: 0 0 1px 1px $green-light;
    z-index: 2;
    background: $white;
    transition: $transition;
    &.show {
      left: 0;
      max-width: 50%;
      overflow-x: hidden;
      .pull-form {
        opacity: 0;
        pointer-events: none;
      }
    }
    .form-wrapper {
      width: 100%;
      align-self: center;
    }
    .pull-form, .push-form {
      position: absolute;
      top: 0;
      width: 55px;
      font-size: 35px;
      transition: $transition;
      cursor: pointer;
      svg {
        animation: $shake-right;
      }
      &:hover, &:active, &:focus {
        width: 65px;
      }
    }
    .push-form {
      border-bottom-left-radius: 10px;
      right: 0;
      background: $green-light;
      color: $white;
      &:hover, &:active, &:focus {
        color: $green;
        width: 65px;
      }
    }
    .pull-form {
      right: -55px;
      width: 55px;
      border-bottom-right-radius: 10px;
      box-shadow: 0 0 1px 1px $green-light;
      &:hover, &:active, &:focus {
        right: -65px;
        background: $green-light;
        color: $white;
      }
    }
    @media (max-width: 991px) {
      height: 100%;
      &.show {
        max-width: 100%;
      }
    }
  }
}
</style>