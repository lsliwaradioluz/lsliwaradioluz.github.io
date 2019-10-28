<template>
  <header class="header" :class="{ 'is-triggered': isTriggered }">
    <div class="hamburger" :class="{ black: navVisible }">
      <font-awesome-icon icon="bars" @click="toggleNav"></font-awesome-icon>
    </div>
    <transition name="navigation">
      <div class="header-navigation" ref="headerNavigation" v-show="navVisible || screenSize > 1023">
        <ul class="header-navigation__links" @click="toggleNav">
          <li class="header-navigation__link" href="bio">Bio</li>
          <li class="header-navigation__link" href="portfolio">Portfolio</li>
          <li class="header-navigation__link" href="skills">Skills so far</li>
          <li class="header-navigation__link" href="find-me">Find me</li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        navVisible: false,
        screenSize: window.innerWidth, 
        scroll: 0
      }
    },
    computed: {
      isTriggered() {
        return this.scroll == 0 ? false : true;
      }
    },
    methods: {
      toggleNav() {
        if (window.innerWidth < 1024) {
          this.navVisible == true ? this.navVisible = false : this.navVisible = true;
        }
        if (event.target.attributes.href) {
          const tab = event.target.attributes.href.value;
          this.$root.$emit(tab);
        }

			}
    }, 
    created() {
      window.addEventListener('scroll', () => {
        this.scroll = window.scrollY;
      })
    }
  }
</script>

<style scoped>

  .header {
    width: 100vw;
    height: 10vh;
    max-height: 10vh;
    background: transparent;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    position: fixed;
    z-index: 98;
    transition: all 0.3s;
  }

  .hamburger {
    margin: 0 auto 0 0;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    font-size: 1.5rem;
    z-index: 100;
    transition: all 0.3s;
  }

  .header-navigation {
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: white;
    color: black;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header-navigation__links{
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  .header-navigation__link {
    margin-bottom: 1.5rem;
    cursor: pointer;
    transition: color 0.3s;
    font-weight: 700;
  }

  .header-navigation__link:hover, 
  .header-navigation__link:active {
    color: #35495E;
  }

  .is-triggered {
    background-color: #40B181;
    box-shadow: 0px 2px 5px #424c48;
    max-height: 8vh;
  }

  .black {
    color: black; 
  }

  @media (min-width: 1024px) {

    .header {
      padding-left: 5vw;
      justify-content: center;
    }

    .hamburger {
      display: none;
    }

    .header-navigation {
      height: auto;
      width: 100%;
      position: static;
      background-color: transparent;
      color: white;
      flex-direction: row;
      justify-content: flex-start;
    }

    .header-navigation__link {
      display: inline-block;
      margin: 0 2rem 0 0;
    }

  }

  @keyframes slide-down {
    from {
      transform: translateY(-100vh);
    }
    to {
      transform: translateY(0);
    }
  }

  .navigation-enter-active {
    animation: slide-down 0.3s;
  }

  .navigation-leave-active {
    animation: slide-down 0.3s reverse;
  }

</style>