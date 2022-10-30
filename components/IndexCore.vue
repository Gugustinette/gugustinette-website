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
      <div class="tail-1">
        <div class="tail-2">
          <div class="tail-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
}
</script>

<style lang="scss">
.core {
  position: absolute;
  width: 650px;
  height: 650px;

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
    background-size: 200% 200%;
    animation: MainGradient 4s ease infinite;
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
    height: 500px;
    width: 100%;

    display: grid;
    place-items: center;

    .tail-1 {
      position: relative;
      height: 60vh;
      width: 4px;

      background: linear-gradient(0deg, #F9466C 0%, #435EF8 77.6%);
      filter: blur(1.5px);

      .tail-2 {
        position: absolute;
        height: 4px;
        width: 34vw;

        top: 100%;
        right: 0;

        background: linear-gradient(-90deg, #F9466C 0%, #435EF8 77.6%);

        .tail-3 {
          position: absolute;
          height: 10vh;
          width: 4px;

          top: 100%;
          left: 0;

          background: linear-gradient(0deg, #F9466C 0%, #435EF8 77.6%);
        }
      }
    }
  }
}
</style>
