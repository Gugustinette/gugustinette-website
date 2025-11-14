<script setup lang="ts">
import { useLoop } from '@tresjs/core'
import { useGLTF } from '@tresjs/cientos'
import { ref } from 'vue'
import { Box3, Object3D, Vector3 } from 'three'

const { nodes } = useGLTF('/3d/low_poly_planet_earth.glb', {
  traverse(child: TresObject) {
    // Center the pivot of the Earth model
    if (child.name === 'Sketchfab_Scene' && !child.userData.__pivotCentered) {
      const boundingBox = new Box3()
      const pivotCenter = new Vector3()

      const pivotTarget = child as unknown as Object3D
      pivotTarget.userData.__pivotCentered = true

      boundingBox.setFromObject(pivotTarget).getCenter(pivotCenter)
      pivotTarget.position.sub(pivotCenter)
    }
  }
})

// Reference earth for animation
const earth = ref()

// Animation loop
const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (earth.value) {
    // Rotate the earth on Y axis
    earth.value.rotation.y = elapsed * 0.2
  }
})
</script>

<template>
  <TresGroup ref="earth">
    <!-- Render the Earth node if it exists -->
    <primitive
      v-if="nodes?.Sketchfab_Scene"
      :object="nodes?.Sketchfab_Scene"
    />
  </TresGroup>
</template>
