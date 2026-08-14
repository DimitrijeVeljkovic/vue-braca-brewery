<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { onMounted } from 'vue'
import { useCart } from './stores/useCart'

const { setCart } = useCart()

onMounted(() => {
  setCart()
})
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>
