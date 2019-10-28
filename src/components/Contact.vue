<template>
  <div class="contact" ref="contact">
    <h1 class="contact__header">Find me</h1>
    <div class="contact__tabs">
      <div class="contact__tab">
        <a href="mailto:lukasz.mateusz.sliwa@gmail.com">
          <font-awesome-icon icon="envelope" class="contact__tab--icon"></font-awesome-icon>
          <p class="contact__tab--caption">Send email</p>
        </a>
      </div>
      <div class="contact__tab">
        <a href="tel:784-184-075">
          <font-awesome-icon icon="mobile-alt" class="contact__tab--icon"></font-awesome-icon>
          <p class="contact__tab--caption">Make a call</p>
        </a>
      </div>
      <div class="contact__tab">
        <a href="https://github.com/lsliwaradioluz/" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" class="contact__tab--icon"></font-awesome-icon>
          <p class="contact__tab--caption">Github</p>
        </a>
      </div>
      <div class="contact__tab">
        <a href="https://jsfiddle.net/user/LSliwa/fiddles/" target="_blank">
          <font-awesome-icon :icon="['fab', 'jsfiddle']" class="contact__tab--icon"></font-awesome-icon>
          <p class="contact__tab--caption">JSFiddle</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.$root.$on('find-me', () => {
				this.$refs.contact.scrollIntoView({behavior: "smooth"});
			});
    }
  }
</script>

<style scoped>
  
  .contact {
    height: auto;
    width: 100%;
    padding: 5vh 1rem;
    background-image: url('../assets/vue-background-contact.svg');
    background-size: cover;
    color: white;
  }

  .contact__header {
    margin: 5vh 0 0 0;
    font-size: 2.5rem;
    text-align: center;
  }

  .contact__tab {
    padding-top: 2rem;
    cursor: pointer;
    transition: color 0.3s;
  }

  .contact__tab:hover {
    color: #35495E;
  }

  .contact__tab a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact__tab--icon {
    font-size: 3rem;
  }

  .contact__tab--caption {
    font-weight: 700;
  }

  @media (min-width: 1024px) {

    .contact__tabs {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding-top: 2rem;
    }
  }

</style>