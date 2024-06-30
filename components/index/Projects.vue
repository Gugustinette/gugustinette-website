<template>
  <div class="projects-wrapper">
    <div class="projects">
      <!-- World Where -->
      <a class="project-card" href="https://gugustinette.github.io/WorldWhere/" target="_blank">
        <img src="~/assets/projects/WorldWhere.png" alt="Project Image - WorldWhere" />
        <!-- Visible on hover -->
        <div class="project-card-hover">
          <h3>World Where</h3>
          <p>
            Web application that collect data from Twitter about
            Ukraine/Russia conflict and visualize it on maps and charts.
          </p>
        </div>
      </a>

      <!-- Eris -->
      <a class="project-card" href="https://gugustinette.github.io/eris/" target="_blank">
        <img src="~/assets/projects/Eris.png" alt="Project Image - Eris" />
        <!-- Visible on hover -->
        <div class="project-card-hover">
          <h3>Eris</h3>
          <p>
            Chrome extension to modify website's interface.
          </p>
        </div>
      </a>

      <!-- Nuxt Leaflet -->
      <a class="project-card" href="https://leaflet.nuxtjs.org/" target="_blank">
        <img src="~/assets/projects/Nuxt-Leaflet.png" alt="Project Image - Nuxt Leaflet" />
        <!-- Visible on hover -->
        <div class="project-card-hover">
          <h3>Nuxt Leaflet</h3>
          <p>
            Nuxt module to use Leaflet in Nuxt projects.
          </p>
        </div>
      </a>

      <!-- Flew -->
      <a class="project-card" href="https://github.com/Gugustinette/flew" target="_blank">
        <img src="~/assets/projects/Flew.png" alt="Project Image - Flew" />
        <!-- Visible on hover -->
        <div class="project-card-hover">
          <h3>Flew</h3>
          <p>
            Discord-like chat application.
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexProjects",
}
</script>

<style lang="scss">
.projects-wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 8em 0;

  .projects {
    height: calc(70vw / 3 * 2);
    width: 80%;
    display: grid;
    place-items: center;

    // Grid Layout
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 1em;
    column-gap: 1em;

    .project-card {
      height: 100%;
      width: 100%;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      p {
        color: var(--color-font-grey);
      }

      .project-card-hover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        opacity: 0;
        transition: opacity 0.2s ease-in-out;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        row-gap: 2rem;

        cursor: pointer;

        > * {
          margin-left: 1rem;
          max-width: 85%;
        }
      }

      &:hover {
        .project-card-hover {
          opacity: 1;
        }
      }
    }

    // Grid
    // 1 2 3
    // 4 4 3

    // First child
    .project-card:nth-child(1) {
      grid-row-start: 1;
      grid-column-start: 1;

      grid-row-end: 2;
      grid-column-end: 2;
    }
    // Second child
    .project-card:nth-child(2) {
      grid-row-start: 1;
      grid-column-start: 2;

      grid-row-end: 2;
      grid-column-end: 3;
    }
    // Third child
    .project-card:nth-child(3) {
      grid-row-start: 2;
      grid-column-start: 1;

      grid-row-end: 3;
      grid-column-end: 3;
    }
    // Fourth child
    .project-card:nth-child(4) {
      grid-row-start: 1;
      grid-column-start: 3;

      grid-row-end: 3;
      grid-column-end: 4;
    }
  }

  @media (max-width: 900px) {
    .projects {
      height: calc(100vw / 3 * 2);
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr;

      .project-card:nth-child(1) {
        grid-row-start: 1;
        grid-column-start: 1;

        grid-row-end: 2;
        grid-column-end: 3;
      }

      .project-card:nth-child(2) {
        grid-row-start: 2;
        grid-column-start: 1;

        grid-row-end: 3;
        grid-column-end: 2;
      }

      .project-card:nth-child(3) {
        grid-row-start: 2;
        grid-column-start: 2;

        grid-row-end: 3;
        grid-column-end: 3;
      }

      .project-card:nth-child(4) {
        grid-row-start: 3;
        grid-column-start: 1;

        grid-row-end: 4;
        grid-column-end: 3;
      }
    }
  }

  @media (max-width: 700px) {
    .projects {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 2rem;
      height: auto;

      .project-card {
        height: 300px;
      }
    }
  }

  @media (min-width: 1400px) {
    .projects {
      max-height: 700px;
      max-width: 1200px;
    }
  }

  @media (prefers-color-scheme: light) {
    .project-card-hover h3 {
      color: var(--color-background);
    }
  }
}
</style>
