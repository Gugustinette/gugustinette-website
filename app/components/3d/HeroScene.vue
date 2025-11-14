<template>
  <!-- Camera Setup -->
  <TresPerspectiveCamera
    :position="[5, 2, 2]"
    :look-at="[-1, 0, 1]"
  />

  <!-- Lights -->
  <TresAmbientLight />
  <TresDirectionalLight
    :position="[3, 3, 3]"
    :intensity="1.5"
  />

  <Earth ref="earth" />

  <!-- Visual Helpers -->
  <!--
  <TresAxesHelper />
  <TresGridHelper />
  -->
</template>
