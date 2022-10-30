<template>
  <div class="card">
    <img v-if="type === 'ui'" class="ui" src="~/assets/icon-skill-ui.svg" alt="Skill Icon UI - Represents a UI">
    <img v-else-if="type === 'server'" class="server" src="~/assets/icon-skill-server.svg" alt="Skill Icon Server - Represents a cloud ">
    <img v-else-if="type === 'metrics'" class="metrics" src="~/assets/icon-skill-metrics.svg" alt="Skill Icon Metrics - Represents a bar chart ">
    <div
    :class="
      type === 'ui' ? 'tail tail-ui' :
      type === 'server' ? 'tail tail-server' :
      type === 'metrics' ? 'tail tail-metrics' : ''
    "></div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  props: {
    type: {
      type: String,
      default: "ui",
    },
  },
}
</script>

<style lang="scss">
.card {
  position: relative;
  height: 180px;
  width: 180px;
  margin-bottom: 140px;

  background: linear-gradient(180deg, rgba(217, 217, 217, 0.0105) 0%, rgba(217, 217, 217, 0.0025) 100%);
  box-shadow: inset 2px -1px 4px rgba(255, 255, 255, 0.12), inset 0px 2px 2.66667px rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(0.8px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 50px;

  display: grid;
  place-items: center;

  img {
    position: absolute;
    width: 170%;
  }

  img.server {
    position: absolute;
    width: 320%;
  }

  img.metrics {
    position: absolute;
    width: 230%;
  }

  .tail {
    margin-top: 180px;
    width: 4px;
    height: 140px;
    filter: blur(1.5px);
  }

  .tail-ui {
    background: linear-gradient(164.71deg, var(--color-primary-pink) 3.52%, var(--color-primary-purple) 95.61%);
  }

  .tail-server {
    background: linear-gradient(164.71deg, var(--color-primary-purple) 3.52%, var(--color-primary-blue) 95.61%);
  }

  .tail-metrics {
    background: linear-gradient(164.71deg, #435EF8 3.52%, rgba(249, 70, 108, 0) 95.61%);
  }
}
</style>