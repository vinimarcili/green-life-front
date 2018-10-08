<template>
  <div id="app">
    <b-navbar toggleable="md" type="light">
      <b-navbar-brand>
        <router-link to="/">
          <figure>
            <img class="img-fluid" alt="GreenLife" title="GreenLife" src="./assets/images/logo.png">
          </figure>
          <h1>
            GreenLife
          </h1>
        </router-link>
      </b-navbar-brand>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "./assets/styles/globals";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  .navbar {
    background: #15A784;
    .navbar-brand {
      margin: 0 auto;
      a {
        color: $green;
        transition: $transition;
        font-family: "Comic Sans MS", cursive, sans-serif;
        figure {
          margin: 0 auto;
          max-width: 15vh;
          border-radius: 50%;
          box-shadow: 0 0 5px 0 $green;
          transition: $transition;
        }
        h1 {
          font-size: 20px;
          transition: $transition;
        }
        &:hover, &:active, &:focus {
          color: #317464;
          text-decoration: none;
          figure {
            box-shadow: 0 0 5px 3px $green;
            background: #fff;
          }
          h1 {
            text-shadow: 0 0 5px $green;
          }
        }
      }
    }
  }
}
</style>
