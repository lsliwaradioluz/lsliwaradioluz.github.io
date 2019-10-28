<template>
  <div class="bio" ref="bio">
    <div class="bio__tab">
      <h1 class="bio__tab--header">I used to be a journalist...</h1>
      <p class="bio__tap--caption">But it didn't work long-term. I met great people, learnt a lot but in the end something was missing. Somewhere along the line I lost my childhood passion and needed a change.</p>
    </div>
    <div class="bio__tab">
      <h1 class="bio__tab--header">Then a personal trainer...</h1>
      <p class="bio__tap--caption">I started working as a fitness instructor in 2016 and a year later I became a personal trainer. Don't worry - I am interested in more than just chicken, rice and heavy lifting.</p>
    </div>
    <div class="bio__tab">
      <h1 class="bio__tab--header">But now I want to code!</h1>
      <p class="bio__tap--caption">I started programming in April 2018. I didn't think I would like it so much. However, once I made it through the basics, I fell in love with how much you can create using just VS Code and Vue documentation.</p>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.$root.$on('bio', () => {
				this.$refs.bio.scrollIntoView({behavior: "smooth"});
			});
    }
  }
</script>

<style scoped>
  .bio {
    height: auto;
    padding: 0 1rem 5vh 1rem;
  }

  .bio__tab--header {
    font-size: 2.2rem;
  }

  .bio__tap--caption {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    .bio {
      padding: 2vh 5vw 10vh 5vw;
      display: flex;
    }

    .bio__tab:nth-child(2) {
      margin: 0 8rem;
    }

  }
</style>