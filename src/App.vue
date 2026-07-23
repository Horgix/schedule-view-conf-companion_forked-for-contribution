<template>
  <div id="app">
    <Header :day="day"/>
    <router-view
      v-if="schedule"
      :schedule="schedule"
    />
    <Loading v-else-if="loading"/>
    <Error v-else/>
    <!--<Legend/>-->
    <Footer/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import Header from '@/components/Header/Header.vue';
  import Footer from '@/components/Footer.vue';
  import Error from '@/components/Error.vue';
  import Loading from '@/components/Loading.vue';
  import { ScheduleEvent } from '@/schedule/schedule';
  import scheduleJson from './talks.json'; // for local development

  export default Vue.extend({
    components: { Loading, Error, Header, Footer},//, Legend },
    data() {
      return {
        schedule: null as ScheduleEvent[] | null,
        day: null as string | null,
        loading: true
      };
    },
    async mounted() {
      try {
        //const response = await axios.get<ScheduleEvent[]>('https://engineering.payfit.io/schedules/latest.json');
        const response = scheduleJson; // for local development
        this.schedule = response; // for local development
        this.day = response[0].fromTime; // for local development
        // if (response.status === 200) {
        //  this.schedule = response.data;
        //  this.day = response.data[0].fromTime;
        // }
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    }
  });
</script>

<style lang="scss">
@import "./styles/variables";

  @font-face {
    font-family: 'Futura Next';
    font-style: normal;
    font-weight: normal;
    src: url('./styles/FuturaNext_Book.otf');
  }

  @font-face {
    font-family: 'Inter Variable';
    font-style: normal;
    font-weight: normal;
    src: url('./styles/Inter.ttf');
  }

    @font-face {
    font-family: 'Heartbreak Eighties Regular';
    font-style: normal;
    font-weight: normal;
    src: url('./styles/HeartbreakEighties-Regular.woff');
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: $background;
    font-family: 'Inter Variable', 'Futura Next', serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  pre {
    white-space: normal;
  }

  a {
    color: inherit;
    display: inherit;
    text-decoration: none;
    width: 100%;
  }

  h1,h2,h3,h4,h5 {
    margin: 0;
    padding: 0;
    font-family: 'Heartbreak Eighties Regular', sans-serif;
    font-weight: 800;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
