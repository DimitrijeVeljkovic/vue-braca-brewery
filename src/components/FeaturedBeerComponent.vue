<script setup lang="ts">
defineProps<{
  beer: {
    id: number
    name: string
    description: string
    imageUrl: string
    price: number
    abv: number
    type: string
  }
}>()
</script>

<template>
  <div class="featured-beer">
    <img :src="beer.imageUrl" :alt="beer.name" />
    <div class="featured-beer__details">
      <span class="type">{{ beer.type }}</span>
      <span class="abv">ABV: {{ beer.abv }}%</span>
    </div>
    <div class="featured-beer__description">
      <div class="featured-beer__info">
        <h2 class="name">{{ beer.name }}</h2>
        <span class="price">${{ beer.price.toFixed(2) }}</span>
      </div>
      <p class="description">{{ beer.description }}</p>
    </div>
    <button class="add-to-cart">Load To Cart +</button>
  </div>
</template>

<style lang="scss" scoped>
.featured-beer {
  border: 1px solid $color-darkgray;
  background-color: $color-black-2;
  border-radius: 3px;

  img {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }

  &__details {
    font-family: 'GeistMonoRegular', monospace;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid $color-darkgray;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  &__description {
    padding: 20px;
  }

  .add-to-cart {
    text-transform: uppercase;
    font-family: 'GeistMonoRegular', monospace;
    color: $color-yellow;
    background-color: $color-darkgray;
    border: none;
    width: 100%;
    font-size: 13px;
    padding: 16px 0;

    &:hover {
      cursor: pointer;
    }
  }

  .type {
    color: $color-blue;
    border: 1px solid $color-blue;
    padding: 4px 8px;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 12px;
    background-color: rgb($color-blue, 0.1);
  }

  .abv {
    font-size: 14px;
    color: $color-lightgray;
  }

  .name {
    font-size: 28px;
  }

  .price {
    font-size: 18px;
    color: $color-yellow;
    font-family: 'GeistMonoRegular', monospace;
  }

  .description {
    font-size: 14px;
    color: $color-lightgray;
    font-family: 'GeistRegular', sans-serif;
  }
}
</style>
