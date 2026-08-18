<script setup lang="ts">
import StoreItemComponent from '@/components/StoreItemComponent.vue'
import { ALL_BEERS } from '@/mocks/all-beers.mock'

// ToDo: take data from API
const allBeers = ALL_BEERS
</script>

<template>
  <div class="store">
    <h1>Welcome to <span>Braća Brewery</span> store</h1>
    <div class="store__products">
      <StoreItemComponent v-for="beer in allBeers" :key="beer.id" :storeItem="beer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.store {
  padding: 60px 80px;

  h1 {
    text-transform: uppercase;
    font-size: 64px;
    margin-bottom: 60px;
  }

  span {
    color: $color-yellow;
  }

  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 24px;
  }
}
</style>
