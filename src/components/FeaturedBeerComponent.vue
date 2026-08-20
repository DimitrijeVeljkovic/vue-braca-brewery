<script setup lang="ts">
import { useCart } from '@/stores/useCart'

const props = defineProps<{
  beer: {
    id: number
    name: string
    description: string
    imageName: string
    price: number
    abv: number
    type: string
  }
}>()

const { addToCart } = useCart()
const imagePath = new URL(`../assets/images/${props.beer.imageName}`, import.meta.url).href
</script>

<template>
  <div class="featured-beer">
    <img :src="imagePath" :alt="beer.name" />
    <div class="featured-beer__details">
      <span class="type">{{ beer.type }}</span>
      <span class="abv">ABV: {{ beer.abv.toFixed(2) }}%</span>
    </div>
    <div class="featured-beer__bottom">
      <div class="featured-beer__description">
        <div class="featured-beer__info">
          <h4>{{ beer.name }}</h4>
          <span class="price">{{ beer.price.toFixed(2) }} RSD</span>
        </div>
        <p class="description">{{ beer.description }}</p>
      </div>
      <button class="add-to-cart" @click="addToCart(beer.id)">Load To Cart +</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.featured-beer {
  @include card($color-background-secondary);
  @include flex-column;

  img {
    width: 100%;
  }

  &__bottom {
    @include flex-between;
    @include flex-column;
    flex: 1;
  }

  &__details {
    @include flex-between(center);
    @include container-padding($space-xl, $space-xl);
    @include border-bottom;
  }

  &__info {
    @include flex-between(center);
    margin-bottom: $space-lg;
  }

  &__description {
    @include container-padding($space-xl, $space-xl);
  }

  .add-to-cart {
    @include button-primary($color-darkgray, $color-primary);
    border: none;
    width: 100%;
  }

  .type {
    @include tag($color-accent, $color-accent, $color-accent);
  }

  .abv {
    @include text-mono($font-size-sm, $color-text-secondary);
  }

  .price {
    @include text-mono($font-size-large, $color-primary);
  }

  .description {
    @include text-description;
  }
}
</style>
