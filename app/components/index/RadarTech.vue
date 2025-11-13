<template>
  <div class="radar-tech">
    <div class="radar-tech-child">
      <div class="radar-tech-child">
        <div class="radar-tech-child">
          <div class="radar-tech-child">

            <!-- TypeScript -->
            <div class="radar-tech-bar"></div>
            <div class="radar-tech-bar radar-tech-bar-up"></div>
            <div class="radar-tech-bar radar-tech-bar-down"></div>

            <!-- TypeScript -->
            <div class="tech tech-c1-angle-1">
              <img src="~/assets/icon-tech/TypeScript.png" alt="Tech Icon - TypeScript" />
            </div>

            <!-- PHP -->
            <div class="tech tech-c1-angle-2">
              <img src="~/assets/icon-tech/PHP.png" alt="Tech Icon - PHP" />
            </div>

            <!-- Ubuntu -->
            <div class="tech tech-c1-angle-3">
              <img src="~/assets/icon-tech/Ubuntu.png" alt="Tech Icon - Ubuntu" />
            </div>

            <!-- Vue -->
            <div class="tech tech-c2-angle-1">
              <img src="~/assets/icon-tech/Vue.png" alt="Tech Icon - Vue" />
            </div>
            
            <!-- NestJS -->
            <div class="tech tech-c2-angle-2">
              <img src="~/assets/icon-tech/NestJS.png" alt="Tech Icon - NestJS" />
            </div>

            <!-- Laravel -->
            <div class="tech tech-c2-angle-3">
              <img src="~/assets/icon-tech/Laravel.png" alt="Tech Icon - Laravel" />
            </div>

            <!-- MariaDB -->
            <div class="tech tech-c2-angle-4">
              <img src="~/assets/icon-tech/MariaDB.png" alt="Tech Icon - MariaDB" />
            </div>

            <!-- Nuxt -->
            <div class="tech tech-c3-angle-1">
              <img src="~/assets/icon-tech/Nuxt.png" alt="Tech Icon - Nuxt" />
            </div>

            <!-- React -->
            <div class="tech tech-c3-angle-2">
              <img src="~/assets/icon-tech/React.png" alt="Tech Icon - React" />
            </div>

            <!-- ElectronJS -->
            <div class="tech tech-c3-angle-3">
              <img src="~/assets/icon-tech/ElectronJS.png" alt="Tech Icon - ElectronJS" />
            </div>

            <!-- Java Spring -->
            <div class="tech tech-c3-angle-4">
              <img src="~/assets/icon-tech/Java Spring.png" alt="Tech Icon - Java Spring" />
            </div>

            <!-- Grafana -->
            <div class="tech tech-c3-angle-5">
              <img src="~/assets/icon-tech/Grafana.png" alt="Tech Icon - Grafana" />
            </div>

            <!-- MongoDB -->
            <div class="tech tech-c3-angle-6">
              <img src="~/assets/icon-tech/MongoDB.png" alt="Tech Icon - MongoDB" />
            </div>

            <!-- Angular -->
            <div class="tech tech-c4-angle-1">
              <img src="~/assets/icon-tech/Angular.png" alt="Tech Icon - Angular" />
            </div>

            <!-- Android -->
            <div class="tech tech-c4-angle-2">
              <img src="~/assets/icon-tech/Android.png" alt="Tech Icon - Android" />
            </div>

            <!-- Docker -->
            <div class="tech tech-c4-angle-3">
              <img src="~/assets/icon-tech/Docker.png" alt="Tech Icon - Docker" />
            </div>

            <!-- Gitlab -->
            <div class="tech tech-c4-angle-4">
              <img src="~/assets/icon-tech/Gitlab.png" alt="Tech Icon - Gitlab" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadarTech",
}
</script>

<style lang="scss">
.radar-tech {
  --radar-size: 1400px;
  --radar-child-gap: 250px;
  --tech-icon-size: 70px;
  --tech-icon-first-circle-distance: 120px;
  --tech-icon-second-circle-distance: calc(var(--tech-icon-first-circle-distance) + 10px + var(--radar-child-gap) / 2);
  --tech-icon-third-circle-distance: calc(var(--tech-icon-second-circle-distance) + 10px + var(--radar-child-gap) / 2);
  --tech-icon-fourth-circle-distance: calc(var(--tech-icon-third-circle-distance) - 5px + var(--radar-child-gap) / 2);

  /* Positioning */
  margin: 0 !important;
  position: absolute;
  top: 0%;
  right: 0%;
  transform: translateX(50%) translateX(calc(var(--tech-icon-size) * -1));
  // Origin to middle

  /* Size */
  width: var(--radar-size);
  height: var(--radar-size);
  border-radius: 50%;

  /* Radar */
  background: linear-gradient(90deg, rgba(127, 70, 249, 0.07) 0%, rgba(127, 70, 249, 0.01) 100%);
  /* Radar Shadow */
  box-shadow: inset 4px 0px 4px 2px rgba(127, 70, 249, 0.02);

  // Radar Tech Child
  .radar-tech-child {
    /* Positioning */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* Size */
    width: calc(100% - var(--radar-child-gap));
    height: calc(100% - var(--radar-child-gap));
    border-radius: 50%;

    /* Radar */
    background: linear-gradient(90deg, rgba(127, 70, 249, 0.07) 0%, rgba(127, 70, 249, 0.01) 100%);
    /* Radar Shadow */
    box-shadow: inset 4px 0px 4px 2px rgba(127, 70, 249, 0.02);
  }

  // Radar Tech Bar
  .radar-tech-bar {
    /* Positioning */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-100%, -50%);

    /* Size */
    width: calc(var(--radar-size) / 2);
    height: 4px;

    /* Radar Bar */
    background: radial-gradient(50% 50% at 50% 50%, rgba(127, 70, 249, 0.6) 0%, rgba(127, 70, 249, 0.1) 50.52%, rgba(127, 70, 249, 0) 100%);
    filter: blur(1px);
  }

  .radar-tech-bar-up {
    // Change element anchor point
    transform-origin: 100% 100%;
    transform: translate(-100%, -50%) rotate(45deg);
  }

  .radar-tech-bar-down {
    // Change element anchor point
    transform-origin: 100% 100%;
    transform: translate(-100%, -50%) rotate(-45deg);
  }

  // Tech Icon
  .tech {
    /* Positioning */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* Size */
    width: var(--tech-icon-size);
    height: var(--tech-icon-size);
    border-radius: 50%;

    display: grid;

    /* Icon Image */
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      opacity: 0.4;
      transition: opacity 0.2s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }
  }

  .tech-c1-angle-3 {
    --angle: 0deg;

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-first-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c1-angle-2 {
    --angle: 90deg;

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-first-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c1-angle-1 {
    --angle: 180deg;

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-first-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c2-angle-1 {
    // 90deg + 45deg + 45deg / 2
    --angle: 157.5deg;

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-second-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c2-angle-2 {
    // 90deg + 45deg / 2
    --angle: 112.5deg;

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-second-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c2-angle-3 {
    // 90deg - 45deg / 2
    --angle: 67.5deg;

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-second-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c2-angle-4 {
    // 0deg + 45deg / 2
    --angle: 22.5deg;

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-second-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c3-angle-1 {
    // 90deg + 45deg + 45deg / 2 - 45deg / 8
    --angle: calc(90deg + 45deg + 45deg / 2 - 45deg / 8);

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-third-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c3-angle-2 {
    // 90deg + 45deg / 4
    --angle: 101.25deg;

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-third-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c3-angle-3 {
    // 90deg + 45deg / 4 * 3
    --angle: calc(90deg + 45deg / 4 * 3);

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-third-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c3-angle-4 {
    // 90deg - 45deg / 4
    --angle: 78.75deg;

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-third-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c3-angle-5 {
    // 90deg - 45deg / 4 * 3
    --angle: calc(90deg - 45deg / 4 * 3);

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-third-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c3-angle-6 {
    // 0deg + 45deg / 2 + 45deg / 8
    --angle: calc(0deg + 45deg / 2 + 45deg / 8);

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-third-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c4-angle-1 {
    // 90deg + 45deg + 45deg / 2 - 45deg / 8 - 45deg / 16
    --angle: calc(90deg + 45deg + 45deg / 2 - 45deg / 8 - 45deg / 16);

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-fourth-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c4-angle-2 {
    // 90deg + 45deg / 4 - 45deg / 16
    --angle: calc(90deg + 45deg / 4 - 45deg / 16);

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-fourth-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c4-angle-3 {
    // 90deg - 45deg / 4 + 45deg / 16
    --angle: calc(90deg - 45deg / 4 + 45deg / 16);

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-fourth-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  .tech-c4-angle-4 {
    // 90deg - 45deg / 4 * 3 - 45deg / 16
    --angle: calc(90deg - 45deg / 4 * 3 - 45deg / 16);

    /* Positioning */
    transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--tech-icon-fourth-circle-distance)) rotate(calc(var(--angle) * -1));
  }

  // Media queries
  @media (max-width: 900px) {
    --radar-size: 1100px;
    --radar-child-gap: 200px;
    --tech-icon-size: 60px;
    --tech-icon-first-circle-distance: 90px;
    --tech-icon-second-circle-distance: calc(var(--tech-icon-first-circle-distance) + 10px + var(--radar-child-gap) / 2);
    --tech-icon-third-circle-distance: calc(var(--tech-icon-second-circle-distance) + 10px + var(--radar-child-gap) / 2);
    --tech-icon-fourth-circle-distance: calc(var(--tech-icon-third-circle-distance) - 5px + var(--radar-child-gap) / 2);
  }

  @media (max-width: 600px) {
    --radar-size: 900px;
    --radar-child-gap: 160px;
    --tech-icon-size: 45px;
    --tech-icon-first-circle-distance: 75px;
    --tech-icon-second-circle-distance: calc(var(--tech-icon-first-circle-distance) + 10px + var(--radar-child-gap) / 2);
    --tech-icon-third-circle-distance: calc(var(--tech-icon-second-circle-distance) + 10px + var(--radar-child-gap) / 2);
    --tech-icon-fourth-circle-distance: calc(var(--tech-icon-third-circle-distance) - 5px + var(--radar-child-gap) / 2);

    top: 10%;
  }
}
</style>
