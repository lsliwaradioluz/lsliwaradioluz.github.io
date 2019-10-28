<template>
  <div class="portfolio" ref="portfolio">
    <div class="triangle-top"></div>
    <div class="triangle-bottom"></div>
    <h1 class="portfolio__header">Portfolio</h1>
    <div class="portfolio__tabs">
      <div 
        class="portfolio__tab"
        v-for="(tab, index) in tabs" 
        :ref="`tab${index}`"  
        :key="`tab${index}`" 
        data-aos="slide-up"
        data-aos-duration="700"
        :data-aos-delay="setDelay(index)">
        <img class="portfolio__tab--image" :src="require(`../assets/${tab.imgName}.png`)" v-if="detailsVisible && screenSize > 1023">
        <span v-if="!detailsVisible">
          <img class="portfolio__tab--image" :src="require(`../assets/${tab.imgName}.png`)">
          <h3 class="portfolio__tab--header">{{ tab.header }}</h3>
          <p class="portfolio__tab--caption">{{ tab.subheader }}</p>
          <button class="portfolio__tab--button" @click="showDetails(index)">Learn more</button>
        </span>
        <span v-if="detailsVisible" class="portfolio__tab--wrapper">
          <font-awesome-icon icon="times" class="portfolio__tab--close" @click="showDetails(index)"></font-awesome-icon>
          <h3 class="portfolio__tab--header">{{ tab.header }}</h3>
          <p class="portfolio__tab--caption">{{ tab.description }}</p>
          <button class="portfolio__tab--button"><a :href="tab.liveLink" target="_blank">Live</a></button>
          <button class="portfolio__tab--button"><a :href="tab.codeLink" target="_blank">Code</a></button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import tabs from './components-data/portfolio-tabs.json';

  export default {
    data() {
      return { 
        detailsVisible: false,
        screenSize: window.innerWidth,
        tabs: tabs
      }
    },
    methods: {
      showDetails(index) {
        this.detailsVisible = !this.detailsVisible;
        this.$refs[`tab${index}`][0].classList.toggle('tab-open');
      }, 
      setDelay(index) {

        // if (this.screenSize < 1024) {
        //   return 100
        // }

        const numberOfRows = Math.ceil(this.tabs.length/3);
        const firstColumn = [];
        const secondColumn = [];
        const thirdColumn = [];

        for (var n = 0; n < numberOfRows; n++) {
          firstColumn.push(0 + 3*n);
          secondColumn.push(1 + 3*n);
          thirdColumn.push(2 + 3*n);
        }

        if (firstColumn.indexOf(index) != -1) {
          return 100
        } else if (secondColumn.indexOf(index) != -1) {
          return 200
        } else if (thirdColumn.indexOf(index) != -1) {
          return 300
        }
      }
    },
    created() {
      this.$root.$on('portfolio', () => {
				this.$refs.portfolio.scrollIntoView({behavior: "smooth"});
			});
    }
  }
</script>

<style scoped>

  .triangle-top {
    background-image: url('../assets/vue-triangle-top.svg');
    background-size: contain;
    position: absolute;
    top: -1.9vh;
    left: 0;
    width: 100%;
    height: 2vh;
  }

  .triangle-bottom {
    background-image: url('../assets/vue-triangle-bottom.svg');
    background-size: contain;
    position: absolute;
    bottom: -1.9vh;
    left: 0;
    width: 100%;
    height: 2vh;
  }

  .portfolio {
    height: auto;
    position: relative;
    width: 100%;
    background-color: #41B582;
    padding: 5vh 1rem 5vh 1rem;
    color: white;
  }

  .portfolio__header {
    font-size: 2.5rem;
    text-align: center;
  }

  .portfolio__tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
  }

  .portfolio__tab--image {
    width: 100%;
  }

  .portfolio__tab--header {
    text-align: center;
  }

  .portfolio__tab--caption {
    text-align: center;
    margin-top: 0;
  }

  .portfolio__tab--technologies {
    font-size: 2rem;
  }

  .portfolio__tab--close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.5rem 0.5rem 0 0; 
  }

  .portfolio__tab--button {
    font-size: 1.2rem;
    padding: 1rem;
    background-color: #35495E;
    color: white;
    border: none;
    border-radius: 15px;
    font-family: inherit;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 700;
    width: 100%;
    margin: 0.5rem 0;
  }

  .portfolio__tab--button:hover, 
  .portfolio__tab--button:active {
    background-color: #163c52;
    outline: none;
  }

  .tab-open {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    padding: 5vh 1rem;
    color: black;
    animation: shake 0.5s;
    z-index: 100;
  }

  @media (min-width: 1024px) {

    .portfolio__tabs {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .portfolio__tab {
      padding: 4rem;
    }

    .portfolio__tab:last-child {
      grid-column: 2/3;
    }

    .portfolio__tab--wrapper {
     padding-left: 2rem; 
    }

    .portfolio__tab--close {
      cursor: pointer;
      transition: all 0.3s;
    }

    .portfolio__tab--close:hover, 
    .portfolio__tab--close:active {
      color: #35495e;
    }

    .tab-open {
      flex-direction: row;
      padding: 5vh 5rem;
    }

    .tab-open img {
      height: 50vh;
      width: auto;
    }
    
  }

  @keyframes shake {
    0% {
      transform: translateX(6vw);
    }
    20% {
      transform: translateX(-5vw);
    }
    40% {
      transform: translateX(5vw);
    }
    60% {
      transform: translateX(-4vw);
    }
    80% {
      transform: translateX(4vw);
    }
    100% {
      transform: translateX(0);
    }
  }

</style>
