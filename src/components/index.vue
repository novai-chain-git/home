<template>
	<div>
    <router-view></router-view>
    <FooterModuler></FooterModuler>
	</div>
</template>

<script>
import FooterModuler from './public/Footer.vue'
export default {
  components: {
    FooterModuler
  }
}
</script>

<style>
</style>
