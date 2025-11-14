<template>
  <div class="section-1-wrapper">
    <div class="titles">
      <h1>Changing the world with code</h1>
      <h2>One line at a time</h2>
    </div>
    <TresCanvas
      clear-color="#07000B"
    >
      <HeroScene />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
import HeroScene from '../3d/HeroScene.vue';
</script>

<style scoped lang="scss">
.section-1-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  .titles {
    position: absolute;
    top: 20%;
    left: 10%;
    z-index: 1;

    h1 {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    h2 {
      font-size: 24px;
      font-weight: normal;
    }
  }
}
</style>
