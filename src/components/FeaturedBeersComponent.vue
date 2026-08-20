<script setup lang="ts">
import { FEATURED_BEERS_MOCK } from '@/mocks/featured-beers.mock'
import FeaturedBeerComponent from './FeaturedBeerComponent.vue'

// TODO: Fetch featured beers from API instead of using mock data
const beers = FEATURED_BEERS_MOCK
</script>

<template>
  <div class="featured-beers">
    <div class="featured-beers__heading">
      <h2>The smash trio</h2>
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
  @include container-padding;

  &__heading {
    @include grid-columns-custom(2fr 1fr);
    margin-bottom: $space-4xl;

    p {
      @include text-body;
    }
  }

  &__content {
    @include grid-auto-fit(300px);
  }
}
</style>
