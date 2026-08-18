<script setup lang="ts">
import { FEATURED_BEERS_MOCK } from '@/mocks/featured-beers.mock'
import FeaturedBeerComponent from './FeaturedBeerComponent.vue'

// TODO: Fetch featured beers from API instead of using mock data
const beers = FEATURED_BEERS_MOCK
</script>

<template>
  <div class="featured-beers">
    <div class="featured-beers__heading">
      <h2>THE SMASH TRIO</h2>
      <p>
        Discover our selection of featured beers, carefully crafted to delight your taste buds. From
        hoppy IPAs to rich stouts, explore the flavors that define our brewery's excellence.
      </p>
    </div>
    <div class="featured-beers__content">
      <FeaturedBeerComponent v-for="beer in beers" :key="beer.id" :beer="beer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.featured-beers {
  padding: 80px 80px;

  &__heading {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 40px;

    h2 {
      font-size: 64px;
      text-transform: uppercase;
    }

    p {
      font-size: 16px;
      color: $color-lightgray;
      font-family: 'GeistRegular', sans-serif;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
}
</style>
