<template>
  <div class="main">
    <div class="section-1">
      <IndexCore />
      <h1 id="name">AUGUSTIN</h1>
      <h1 id="title">WEB DEVELOPER</h1>
    </div>
    <div class="section-2">
      <div class="skill skill-ui">
        <IndexSkill type="ui" />
        <div class="description">
          <p>In an effort to modernize our way to interact with software, I <span>design</span> and <span>develop</span> tomorrow’s interfaces, giving the user a powerful and ergonomic UI.</p>
        </div>
       </div>
      <div class="skill skill-server">
        <IndexSkill type="server" />
        <div class="description">
          <p>Every application has it’s needs when it comes to servers and databases, I can build <span>fast</span> & <span>reliable</span> software architectures that fits any context.</p>
        </div>
      </div>
      <div class="skill skill-metrics">
        <IndexSkill type="metrics" />
        <div class="description">
          <p>My goal is to make <span>maintaining</span> as easy as possible, through continuous development & integration, metrics, and much more.</p>
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

:root {
  --color-background: #07000B;
  --color-font: #F2F2F2;
  --color-font-transparent: rgba(255, 255, 255, 0.15);

  --color-primary-pink: #F9466C;
  --color-primary-purple: #8955C3;
  --color-primary-blue: #495EF4;

  --color-main-gradient: linear-gradient(164.71deg, var(--color-primary-pink) 3.52%, var(--color-primary-blue) 95.61%);
}

// CSS Gradient Animation

body {
  background-color: var(--color-background);
}

* {
  color: var(--color-font);
  margin: 0;
  padding: 0;

  font-family: 'Open Sans', sans-serif;
  font-style: normal;
}

h1 {
  font-family: 'Cyrvetica';
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    max-width: 1920px;
  }
}

.section-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  // https://getwallpapers.com/wallpaper/full/3/f/f/18044.jpg
  background-image: url('~/assets/Background.png');
  background-size: cover;
  background-position: center;

  h1 {
    align-self: flex-end;
    width: 100%;
    margin: 0.8rem 1rem;
    color: var(--color-font-transparent);

    font-weight: 700;
    font-size: 5rem;
    line-height: 4rem;
  }

  #title {
    text-align: right;

    max-width: 500px;
  }
}

.section-2 {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin-top: 20vh;

  .skill {
    width: 100%;
    margin-left: 10vw;
    
    display: flex;
    flex-direction: row;

    .description {
      width: 60%;
      height: 160px;
      margin-left: 2rem;

      display: grid;
      place-items: center;

      p {
        width: 100%;
      }
    }

    &.skill-ui {
      p {
        span {
          color: var(--color-primary-pink);
        }
      }
    }

    &.skill-server {
      p {
        span {
          color: var(--color-primary-purple);
        }
      }
    }

    &.skill-metrics {
      p {
        span {
          color: var(--color-primary-blue);
        }
      }
    }
  }
}
</style>
