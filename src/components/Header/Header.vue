<template>
  <header class="header">
    <a href="https://engineering.payfit.io">
      <img class="header__logo" alt="Engineering I/O logo" src="./engineering-io-blue-horizontal.svg"/>
    </a>
    <div class="header__banner">
      <h2>{{theDay}}</h2>
    </div>
  </header>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'Header',
    props: ['day'],
    computed: {
      theDay: function () {
        moment.locale('en');
        return moment(this.day).format('Do MMMM YYYY')
      }
    }
  }
</script>

<style scoped lang="scss">
@import "../../styles/variables";

  .header {
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    padding-top: 40px;

    &__logo {
      max-width: 400px;
      width: 90%;
    }

    &__banner {
      margin-top: 20px;
      height: 40px;
      background-color: $passive;
      color: $text-on-passive;
      vertical-align: middle;
      text-align: center;
      font-weight: 600;
      line-height: 44px;
    }
  }
</style>
