<template>
  <div class="contact-wrapper">
    <h1 class="contact">Contact</h1>
    <div class="links">
      <!-- Twitter -->
      <a href="https://twitter.com/gugustinette" target="_blank">
        <img src="~/assets/icon-socials/twitter.svg" alt="Twitter" />
      </a>

      <!-- LinkedIn -->
      <a href="https://www.linkedin.com/in/augustin-mercier-gugustinette/" target="_blank">
        <img src="~/assets/icon-socials/linkedin.svg" alt="LinkedIn" />
      </a>

      <!-- Instagram -->
      <a href="https://www.instagram.com/gugustinette/" target="_blank">
        <img src="~/assets/icon-socials/instagram.svg" alt="Instagram" />
      </a>

      <!-- GitHub -->
      <a href="https://github.com/gugustinette" target="_blank">
        <img src="~/assets/icon-socials/github.svg" alt="GitHub" />
      </a>

      <!-- Mail -->
      <a href="mailto:mercier.augustin@outlook.fr" target="_blank">
        <img src="~/assets/icon-socials/mail.svg" alt="Mail" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexContact",
}
</script>

<style lang="scss">
.contact-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  h1.contact {
    font-family: 'Have Heart One';
    font-style: normal;
    font-weight: 400;
    font-size: 40vw;
    line-height: 700px;
    display: flex;
    align-items: center;
    text-align: center;
    width: 200%;

    background: linear-gradient(164.71deg, rgba(249, 70, 108, 0.4) 3.52%, rgba(67, 94, 248, 0.4) 95.61%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    // text-fill-color: transparent;

    transform: translateX(-5vw) rotate(12.98deg);
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    column-gap: 3em;

    a {
      display: grid;
      place-items: center;
      padding: 1em;
      border-radius: 50%;
      border: 2px solid rgba(207, 131, 168, 0.21);
      transition: all 0.15s ease-in-out;

      img {
        width: 1.5em;
        height: 1.5em;
      }

      &:hover {
        border: 2px solid rgba(207, 131, 168, 0.5);
      }
    }
  }

  @media (max-width: 900px) {
    h1.contact {
      transform: translateX(-5vw) rotate(12.98deg) translateY(-20vw);
    }

    .links {
      column-gap: 1.5em;
    }
  }

  @media (min-width: 1400px) {
    h1.contact {
      transform: translateX(-5vw) rotate(12.98deg);
      font-size: 30vw;
      line-height: 700px;
    }
  }

  @media (min-width: 1700px) {
    h1.contact {
      font-size: 25vw;
    }
  }
}
</style>