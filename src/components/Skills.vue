<template>
  <div class="skills" ref="skills">
    <h1 class="skills__header">Skills</h1>
    <span class="skills__tabs">
      <div class="skills__tab">
        <font-awesome-icon :icon="['fab', 'css3']" class="skills__tab--icon css"></font-awesome-icon>
        <p class="skills__tab--caption">
          I used to think I know everything about CSS but I don't. In the past, I relied on Bootstrap heavily (especially its Grid) but today I build everything on my own. I invested a lot of time in learning CSS Grid and Flexbox to code responsive layouts quickly. I practiced mostly via writing code snippets on jsFiddle. I still have to work on animations and transitions. 
        </p>
      </div>
      <div class="skills__tab">
        <font-awesome-icon :icon="['fab', 'js']" class="skills__tab--icon javascript"></font-awesome-icon>
        <p class="skills__tab--caption">
          There was only one app I wrote with pure Javascript. It was a calorie counter which I then refactored using Vue. In the past I would do a lot of CodeWars challenges which helped me to get better knowledge of basic String, Array and Object methods. Nowadays, if forced to write pure Javascript code, it is hard for the first few minutes but I remeber the basics just fine.
        </p>
      </div>
      <div class="skills__tab">
        <font-awesome-icon :icon="['fab', 'vuejs']" class="skills__tab--icon vue"></font-awesome-icon>
        <p class="skills__tab--caption">
          Learning Vue was a breakthrough in my web-development journey. The most basic stuff I learnt easily. It took me a bit longer to get fluent in passing data between components, Vue Router (navigation guards) and especially Vuex. It makes managing app state soo much easier! I used to work with Vue Resource too but then switched to Axios to be able to use it in Vuex store as well. Just as in CSS, I have to work a bit more on animation and transition features Vue offers.  
        </p>
      </div>
      <div class="skills__tab">
        <font-awesome-icon :icon="['fab', 'git-alt']" class="skills__tab--icon git"></font-awesome-icon>
        <p class="skills__tab--caption">
          I know what git is. I can create a repository, add remote repository, pull and push. I can also create or delete branches and switch from one to another. I am also fluent at commiting changes. I've practised that stuff a lot since I had to post my projects on my github account. One thing I have to admit though - I lack consistency. I commit changes rarely (or not at all) as you can tell by my repositories. I promise to do better in the future!
        </p>
      </div>
    </span>
  </div>
</template>

<script>
  export default {
    created() {
      this.$root.$on('skills', () => {
				this.$refs.skills.scrollIntoView({behavior: "smooth"});
			});
    }
  }
</script>

<style scoped>
  
  .skills {
    height: auto;
    padding: 5vh 1rem;
  }

  .skills__header {
    font-size: 2.5rem;
    text-align: center;
  }

  .skills__tab {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skills__tab--icon {
    font-size: 3rem;
  }

  .css {
    color: #0078B6;
  }

  .javascript {
    color: #E9D54D;
  }

  .vue {
    color: #3C8773;
  }

  .git {
    color: #F05033;
  }

  .skills__tab--caption {
    text-align: center;
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {

    .skills {
      padding: 5vh 5vw 10vh 5vw;
    }

    .skills__tabs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 4rem 6rem;
      padding-top: 4rem;
    }

    .skills__tab {
      display: block;
    }

    .skills__tab--icon {
      font-size: 5rem;
      float: left;
      margin-right: 1.5rem;
    }
    
    .skills__tab--caption {
      margin: 0;
      text-align: left;
    }
  }

</style>