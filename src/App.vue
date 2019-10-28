<template>
  <div>
    <appNavigation></appNavigation>
    <appLandingPage></appLandingPage>
    <appAbout></appAbout>
    <appPortfolio></appPortfolio>
    <appSkills></appSkills>
    <appContact></appContact>
  </div>
</template>

<script>
  import Navigation from './components/Navigation';
  import LandingPage from './components/LandingPage.vue';
  import About from './components/About.vue';
  import Portfolio from './components/Portfolio.vue';
  import Skills from './components/Skills.vue';
  import Contact from './components/Contact.vue';

  export default {
    components: {
      appNavigation: Navigation,
      appLandingPage: LandingPage, 
      appAbout: About, 
      appPortfolio: Portfolio, 
      appSkills: Skills, 
      appContact: Contact
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap');

  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
