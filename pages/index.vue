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
          <p>Every application has its needs when it comes to servers and databases, I can build <span>fast</span> & <span>reliable</span> software architectures that fits any context.</p>
        </div>
      </div>
      <div class="skill skill-metrics">
        <IndexSkill type="metrics" />
        <div class="description">
          <p>My goal is to make <span>maintaining</span> as easy as possible, through continuous development & integration, metrics, and much more.</p>
        </div>
      </div>
    </div>
    <div class="section-3">
      <h2>Tech Stack</h2>
      <p>Amongst all the available environments, here are some that I have experience with.</p>
      <RadarTech />
    </div>
    <div class="section-4">
      <h2>Projects</h2>
      <p>
        Want to see what I did ?
        <br />
        Here are some of my projects.
      </p>
      <Projects />
    </div>
    <IndexContact />
  </div>
</template>

<script>

export default {
    name: "IndexPage",
}
</script>

<style lang="scss">
// Import font 'Have Heart One' from assets folder
@font-face {
  font-family: 'Have Heart One';
  src: url('~/assets/fonts/Have-Heart/TTF/Have\ Heart\ One.ttf');
}

// Import font 'Open Sans' from assets folder
@font-face {
  font-family: 'Open Sans';
  src: url('~/assets/fonts/Open-Sans/static/OpenSans/OpenSans-Regular.ttf');
  font-weight: 400;
}
@font-face {
  font-family: 'Open Sans';
  src: url('~/assets/fonts/Open-Sans/static/OpenSans/OpenSans-Bold.ttf');
  font-weight: 600;
}

:root {
  --color-background: #07000B;
  --color-font: #F2F2F2;
  --color-font-transparent: rgba(255, 255, 255, 0.15);
  --color-font-grey: #BDBDBD;

  --color-primary-pink: #F9466C;
  --color-primary-purple: #8955C3;
  --color-primary-blue: #495EF4;

  --color-main-gradient: linear-gradient(164.71deg, var(--color-primary-pink) 3.52%, var(--color-primary-blue) 95.61%);
}

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

h2 {
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  background: linear-gradient(96.4deg, var(--color-primary-pink) -12.6%, var(--color-primary-blue) 87.1%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  // text-fill-color: transparent;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
    row-gap: 2.5vh;
  overflow-x: hidden;
}

.section-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  // https://getwallpapers.com/wallpaper/full/3/f/f/18044.jpg
  // background-image: url('~/assets/Background.png');
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

  // Media Queries
  @media (max-width: 1100px) {
    // Make text vertical but letter in horizontal
    h1 {
      text-orientation: upright;
      writing-mode: vertical-rl;
      font-size: 4rem;
    }

    #name {
      writing-mode: vertical-lr;
    }
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

  // Media Queries
  @media (max-width: 900px) {
    .skill {
      flex-direction: column;
      align-items: center;
      margin-left: 0;
      margin-bottom: 2rem;

      .description {
        width: 80%;
        margin: 0;
        text-align: center;
      }
    }
  }
}

.section-3 {
  position: relative;

  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin-top: 100px;

  max-width: 1920px;

  h2 {
    margin-bottom: 0.4em;
    margin: 0 5vw;
  }

  p {
    max-width: 40vw;
    margin: 0 5vw;
  }
}

.section-4 {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 300px;
  margin-bottom: 150px;

  max-width: 1920px;

  h2 {
    margin-bottom: 0.4em;
    margin: 0 5vw;
  }

  p {
    max-width: 40vw;
    margin: 0 5vw;
  }
}
</style>
