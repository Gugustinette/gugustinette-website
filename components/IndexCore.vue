<template>
  <div class="core">
    <div class="core-main">
      <div class="core-front main-gradient"></div>
      <div class="ellipse ellipse-1"></div>
      <div class="ellipse ellipse-2"></div>
      <div class="ellipse ellipse-3"></div>
      <div class="ellipse ellipse-4"></div>
    </div>
    <div class="tail">
      <div class="tail-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexCore",
}
</script>

<style lang="scss">
.core {
  position: absolute;
  width: 60vw;
  height: 60vw;

  .core-main {
    position: absolute;
    height: 100%;
    width: 100%;
    filter: blur(50px);
    z-index: 10;
  }

  .core-front {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    z-index: 10;
    background: var(--color-main-gradient);
    background-size: 100% 100%;
    // animation: MainGradient 4s ease infinite;

    // CSS Gradient Animation
    /*
    @keyframes MainGradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    */
  }

  .ellipse {
    position: absolute;
    border-radius: 50%;
    transform: rotate(-10.56deg);
  }

  .ellipse-1 {
    left: 25%;
    top: 10%;
    right: 35%;
    bottom: 70%;

    box-shadow: 0px 0px 836.64px var(--color-primary-pink), 0px 0px 478.08px var(--color-primary-pink), 0px 0px 278.88px var(--color-primary-pink), 0px 0px 139.44px var(--color-primary-pink), 0px 0px 39.84px var(--color-primary-pink), 0px 0px 19.92px var(--color-primary-pink);
  }

  .ellipse-2 {
    left: 10%;
    top: 30%;
    right: 40%;
    bottom: 55%;

    box-shadow: 0px 0px 836.64px var(--color-primary-pink), 0px 0px 478.08px var(--color-primary-pink), 0px 0px 278.88px var(--color-primary-pink), 0px 0px 139.44px var(--color-primary-pink), 0px 0px 39.84px var(--color-primary-pink), 0px 0px 19.92px var(--color-primary-pink);
  }

  .ellipse-3 {
    left: 40%;
    top: 75%;
    right: 15%;
    bottom: 10%;

    box-shadow: 0px 0px 836.64px var(--color-primary-blue), 0px 0px 478.08px var(--color-primary-blue), 0px 0px 278.88px var(--color-primary-blue), 0px 0px 139.44px var(--color-primary-blue), 0px 0px 39.84px var(--color-primary-blue), 0px 0px 19.92px var(--color-primary-blue);
  }

  .ellipse-4 {
    left: 55%;
    top: 55%;
    right: 5%;
    bottom: 25%;

    box-shadow: 0px 0px 836.64px var(--color-primary-blue), 0px 0px 478.08px var(--color-primary-blue), 0px 0px 278.88px var(--color-primary-blue), 0px 0px 139.44px var(--color-primary-blue), 0px 0px 39.84px var(--color-primary-blue), 0px 0px 19.92px var(--color-primary-blue);
  }

  .tail {
    position: absolute;
    top: 50%;
    left: 0;
    height: 640px;
    width: 100%;

    display: grid;
    place-items: center;

    .tail-1 {
      position: relative;
      height: 57.4vh;
      width: 4px;

      background: linear-gradient(0deg, var(--color-primary-pink) 0%, var(--color-primary-blue) 77.6%);
      filter: blur(1.5px);
    }
  }

  @media screen and (max-width: 900px) {
    .tail-1 {
      position: relative;
      height: 57.4vh;
      width: 4px;

      background: linear-gradient(0deg, var(--color-primary-purple) 0%, var(--color-primary-blue) 77.6%) !important;
      filter: blur(1.5px);
    }
  }

  @media screen and (min-width: 1400px) {
    width: 80vh;
    height: 80vh;
  }
}
</style>