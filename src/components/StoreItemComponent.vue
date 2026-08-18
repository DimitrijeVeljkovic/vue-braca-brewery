<script setup lang="ts">
import { useCart } from '@/stores/useCart'

const props = defineProps<{
  storeItem: {
    id: number
    name: string
    description: string
    imageName: string
    price: number
    abv: number
    type: string
    volume: number
  }
}>()

const { addToCart } = useCart()
const imagePath = new URL(`../assets/images/${props.storeItem.imageName}`, import.meta.url).href
</script>

<template>
  <div class="store-item">
    <img :src="imagePath" :alt="storeItem.name" />
    <p class="store-item__type">{{ storeItem.type }}</p>
    <div class="store-item__info">
      <div>
        <span>Alc by vol</span>
        <br />
        <span class="store-item__info--yellow">{{ storeItem.abv.toFixed(2) }}%</span>
      </div>
      <div>
        <span>Volume</span>
        <br />
        <span class="store-item__info--yellow">{{ storeItem.volume }}ml</span>
      </div>
    </div>
    <div class="store-item__bottom">
      <div class="store-item__details">
        <div class="store-item__details-heading">
          <h2>{{ storeItem.name }}</h2>
          <span>{{ storeItem.price.toFixed(2) }} RSD</span>
        </div>
        <p>{{ storeItem.description }}</p>
      </div>
      <button class="store-item__button" @click="addToCart(storeItem.id)">Load to cart +</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.store-item {
  border: 1px solid $color-darkgray;
  border-radius: 3px;
  overflow: hidden;
  background-color: $color-black-2;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  &__type {
    color: $color-red;
    border: 1px solid $color-red;
    padding: 4px 8px;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 12px;
    background-color: rgb($color-red, 0.1);
    width: fit-content;
    font-family: 'GeistMonoRegular', monospace;
    margin: 16px;
  }

  &__info {
    padding: 16px;
    background-color: $color-black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid $color-darkgray;
    border-bottom: 1px solid $color-darkgray;
    font-size: 12px;
    font-family: 'GeistMonoRegular', monospace;
    text-transform: uppercase;
    color: $color-gray;

    &--yellow {
      color: $color-yellow;
      font-size: 13px;
      font-weight: bold;
    }
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  &__details {
    padding: 24px 16px;

    p {
      font-family: 'GeistRegular', sans-serif;
      font-size: 14px;
      color: $color-lightgray;
    }
  }

  &__details-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    h2 {
      text-transform: uppercase;
      font-size: 30px;
    }

    span {
      font-size: 18px;
      font-weight: bold;
      font-family: 'GeistMonoRegular', monospace;
    }
  }

  &__button {
    font-size: 13px;
    font-weight: bold;
    font-family: 'GeistMonoRegular', monospace;
    background-color: $color-yellow;
    text-transform: uppercase;
    padding: 16px 0;
    border: none;
    width: 100%;

    &:hover {
      cursor: pointer;
    }

    .pi {
      font-size: 16px;
      vertical-align: middle;
    }
  }
}
</style>
