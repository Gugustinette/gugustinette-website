<template>
  <div>
    <div id="navbar-burger-button" :class="{ open: isNavbarOpen }" @click="isNavbarOpen = !isNavbarOpen">
      <div id="burger-bar-one"></div>
      <div id="burger-bar-two"></div>
      <div id="burger-bar-three"></div>
    </div>
    <nav :class="{ open: isNavbarOpen }" @click="isNavbarOpen = false">
      <NuxtLink to="/">Home
        <div class="glow-circle"></div>
      </NuxtLink>
      <NuxtLink to="/gallery">Gallery
        <div class="glow-circle"></div>
      </NuxtLink>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isNavbarOpen = ref(false);
</script>

<style lang="scss">
#navbar-burger-button {
  position: fixed;
  top: 32px;
  right: 32px;

  width: 30px;
  height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1001;

  cursor: pointer;
  transition: all 0.3s ease;

  div {
    width: 100%;
    height: 3px;
    background: #3B353E;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  &.open {
    div {
      width: 120%;
    }

    #burger-bar-one {
      transform: translateY(12px) rotate(45deg);
    }

    #burger-bar-two {
      opacity: 0;
    }

    #burger-bar-three {
      transform: translateY(-11px) rotate(-45deg);
    }
  }
}

nav {
  position: fixed;
  top: 20px;
  left: 100%;
  height: 0%;
  width: 0%;
  backdrop-filter: blur(10px) saturate(180%) contrast(80%) brightness(30%);
  border-radius: 100%;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  scale: 0;

  a {
    position: relative;
    margin: 1rem;
    margin-left: 20%;
    padding: 30px;
    font-size: 1.5rem;
    text-decoration: none;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -300px;
      width: 300px;
      height: 3px;
      background: #3B353E;
      transform: translateY(-50%);
      border-radius: 100%;
      filter: blur(1px);
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: -300px;
      width: 0;
      height: 3px;
      background: linear-gradient(96.4deg, var(--color-primary-pink) -12.6%, var(--color-primary-blue) 87.1%);
      transition: all 0.2s ease;
      transform: translateY(-50%);
      border-radius: 100%;
      filter: blur(1px);
    }

    .glow-circle {
      position: absolute;
      top: 50%;
      right: 20px;
      width: 90%;
      height: 40px;
      background: linear-gradient(96.4deg, var(--color-primary-pink) -12.6%, var(--color-primary-blue) 87.1%);
      border-radius: 50%;
      transition: all 0.3s ease;
      transform: translate(-50%, -50%);
      filter: blur(28px);
      opacity: 0;
    }

    &:hover {
      &::after {
        width: 300px;
      }

      .glow-circle {
        opacity: 0.8;
      }
    }
  }

  &.open {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    scale: 1;
    border-radius: 0;
  }
}
</style>
