<template>
  <main>
    <h1>Welcome to the <span>Gallery</span></h1>
    <p>
      Here you can all my original artworks as well as artists who made them.
      <br />
      Feel free to explore and enjoy the art!
    </p>
    <div class="artworks-grid">
      <div v-for="artwork in artworks" :key="artwork.id" class="artwork-card">
        <NuxtImg :src="artwork.image" alt="Gus Artwork" />
        <div class="artwork-details">
          <a :href="artwork.artistLink" target="_blank">{{ artwork.artist }}</a>
          <p>{{ artwork.year }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const artworks = ref([
  {
    id: 1,
    image: '/artworks/chonchon.draw/gugustinette.jpg',
    artist: 'ChonchonDraw',
    artistLink: 'https://www.instagram.com/chonchon.draw/',
    year: 2018,
  },
  {
    id: 2,
    image: '/artworks/chonchon.draw/heaven.png',
    artist: 'ChonchonDraw',
    artistLink: 'https://www.instagram.com/chonchon.draw/',
    year: 2019,
  },
  {
    id: 3,
    image: '/artworks/chonchon.draw/daemon.jpg',
    artist: 'ChonchonDraw',
    artistLink: 'https://www.instagram.com/chonchon.draw/',
    year: 2020,
  },
  {
    id: 4,
    image: '/artworks/anihaaya/nights-of-our-lives.png',
    artist: 'AnihaAya',
    artistLink: 'https://www.instagram.com/anihaaya',
    year: 2020,
  },
  {
    id: 5,
    image: '/artworks/chonchon.draw/sekai.jpg',
    artist: 'ChonchonDraw',
    artistLink: 'https://www.instagram.com/chonchon.draw/',
    year: 2020,
  },
  {
    id: 6,
    image: '/artworks/chonchon.draw/hokori.png',
    artist: 'ChonchonDraw',
    artistLink: 'https://www.instagram.com/chonchon.draw/',
    year: 2021,
  },
  {
    id: 7,
    image: '/artworks/noss/gugustinette.jpg',
    artist: 'noss',
    artistLink: 'https://x.com/nossiVT',
    year: 2021,
  },
  {
    id: 8,
    image: '/artworks/nylae/arrival.png',
    artist: 'Nylae',
    artistLink: 'https://www.instagram.com/nylae_art/',
    year: 2022,
  },
  {
    id: 9,
    image: '/artworks/nylae/prends-moi-par-la-main.png',
    artist: 'Nylae',
    artistLink: 'https://www.instagram.com/nylae_art/',
    year: 2023,
  },
  {
    id: 10,
    image: '/artworks/erwan/fly.png',
    artist: 'Erwan',
    artistLink: 'https://www.instagram.com/erwanchannel.art/',
    year: 2024,
  }
]);

// Reverse the artworks array to show the latest artworks first
artworks.value.reverse();
</script>

<style lang="scss" scoped>
main {
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 8em 0;

  h1 {
    padding: 0 1em;
    margin-bottom: 0.4em;
    color: var(--color-font);

    span {
      color: var(--color-primary-pink);
    }
  }

  p {
    padding: 0 1em;
    color: var(--color-font-grey);
    max-width: 800px;
    text-align: left;
  }

  .artworks-grid {
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1em;
    margin-top: 2em;

    .artwork-card {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1em;
      padding: 1em;
      border-radius: 8px;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
        border-radius: 8px;
        object-fit: cover;
      }

      .artwork-details {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        top: 100%;
        width: 100%;
        padding: 1em;
        background:
          linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.8) 100%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0, 0.2) 0%
          );
        transform: translateY(0);

        transition: all 0.2s ease-in-out;

        a {
          color: var(--color-primary-pink);
          font-weight: 500;
          text-decoration: none;
        }

        p {
          padding: 0;
          color: var(--color-font-grey);
        }
      }

      &:hover {
        .artwork-details {
          transform: translateY(-105%);
        }
      }
    }

    @media (max-width: 940px) {
      display: flex;
      flex-direction: column;
      gap: 2em;
      max-width: 600px;
    }
  }
}
</style>