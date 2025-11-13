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
    width: 200%;
    font-family: 'Have Heart One';
    font-style: normal;
    font-weight: 400;
    font-size: 40vw;
    line-height: 600px;
    display: flex;
    align-items: center;
    text-align: center;

    background: var(--color-main-gradient);
    opacity: 0.4;
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

  @media (max-width: 500px) {
    .links {
      row-gap: 1.5em;
      flex-direction: column;
    }
  }

  @media (max-width: 900px) {
    h1.contact {
      transform: translateX(-5vw) rotate(12.98deg);
      line-height: 300px;
    }
  }

  @media (min-width: 1400px) {
    h1.contact {
      transform: translateX(-5vw) rotate(12.98deg);
      font-size: 30vw;
    }
  }

  @media (min-width: 1700px) {
    h1.contact {
      font-size: 25vw;
    }
  }
}
</style>