<template>
  <div class="landing">
    <div class="landing__content">
      <h1 class="landing__content--header">Check my Vue on coding!</h1>
      <p class="landing__content--caption">My name is Łukasz and I am more than happy to welcome you on my website. Looking for a dedicated web developer with speed typing skills and positive mindset? You've found just the one!</p>
      <button class="landing__content--btn" @click="$root.$emit('portfolio');">See the portfolio</button>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

  .landing {
    height: auto;
    width: 100%;
    background-image: url('../assets/vue-background-2.svg');
    background-size: cover;
    padding: 15vh 1rem;
  }

  .landing__content--header {
    font-size: 2.5rem;
    color: white;
    margin: 0;
  }

  .landing__content--caption {
    font-size: 1.2rem;
    color: rgb(245, 245, 245);
  }

  .landing__content--btn {
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
  }

  .landing__content--btn:hover, 
  .landing__content--btn:active {
    background-color: #163c52;
    outline: none;
  }

  @media (min-width: 1024px) {
    
    .landing {
      height: 80vh;
      padding-left: 5vw;
      background-position: bottom right;
    }

    .landing__content {
      width: 40%;
    }

    .landing__content--btn {
      width: 100%;
    }
  }
/* 
  .landing {
    height: 100vh;
    width: 100%;
    padding-left: 5vw;
    background-image: url('../assets/vue-background.svg');
    background-size: cover;
    background-position: bottom;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }

  .landing__content {
    width: 50%;
    color: white;
  }

  .landing__content--header {
    font-size: 2.5rem;
  }

  .landing__content--caption {
    font-size: 1.5rem;
  }

  

  .landing__logo {
    position: absolute;
    top: 0;
    right: 0;
    height: 10vh;
    width: 10vh;
  } */
</style>