<script setup lang="ts">
import { BREWERS } from '@/data/brewers.data'

const brewers = BREWERS
</script>

<template>
  <div class="brewmasters">
    <div class="brewmasters__heading">
      <h2>Meet the Brewers</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem unde beatae, sequi
        quisquam iste fugiat distinctio non rem, tempora assumenda aperiam. Quaerat facere sunt
        soluta sequi repellat saepe rem.
      </p>
    </div>
    <div class="brewmasters__content">
      <div v-for="brewer in brewers" :key="brewer.id" class="brewmasters__card">
        <img :src="brewer.imageUrl" :alt="brewer.name" />
        <div class="brewmasters__info">
          <div class="brewmasters__details">
            <h3>{{ brewer.name }}</h3>
            <span>{{ brewer.title }}</span>
          </div>
          <p>{{ brewer.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brewmasters {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding: 80px;

  p {
    color: $color-lightgray;
    font-family: 'GeistRegular', sans-serif;
    font-size: 16px;
  }

  h2 {
    font-size: 56px;
    text-transform: uppercase;
  }

  &__heading {
    display: flex;
    justify-content: space-between;

    p {
      width: 30%;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  &__card {
    background-color: $color-black-2;
    border: 1px solid $color-darkgray;
    border-radius: 3px;

    img {
      height: 300px;
      width: 100%;
      object-fit: contain;
    }
  }

  &__details {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 28px;
      text-transform: uppercase;
    }

    span {
      color: $color-blue;
      border: 1px solid $color-blue;
      padding: 4px 8px;
      border-radius: 3px;
      text-transform: uppercase;
      font-size: 12px;
      background-color: rgb($color-blue, 0.1);
    }
  }

  &__info {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-top: 1px solid $color-darkgray;
  }
}
</style>
