<template>
    <Navbar />
    <NuxtPage />
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Gugustinette',
  ogTitle: 'Gugustinette',
  description: 'The personal website of Gugustinette.',
  ogDescription: 'The personal website of Gugustinette.',
  twitterCard: 'summary_large_image',
});
</script>

<style lang="scss">
// Import font 'Sarala' from assets folder
@font-face {
  font-family: 'Sarala';
  src: url('~/assets/fonts/Sarala/Sarala-Regular.ttf');
  font-weight: 400;
}
@font-face {
  font-family: 'Sarala';
  src: url('~/assets/fonts/Sarala/Sarala-Bold.ttf');
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

  color: var(--color-font);
}

body {
  background-color: var(--color-background);
}

* {
  margin: 0;
  padding: 0;

  font-family: 'Sarala', sans-serif;
  font-style: normal;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>