<script setup lang="ts">
import { BREWERS } from '@/data/brewers.data'

const brewers = BREWERS
</script>

<template>
  <div class="brewmasters">
    <div class="brewmasters__heading">
      <h3>Meet the Brewers</h3>
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
            <h4>{{ brewer.name }}</h4>
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
  @include flex-column($space-4xl);
  @include container-padding;

  p {
    @include text-body;
  }

  &__heading {
    @include flex-between;

    p {
      width: 30%;
    }
  }

  &__content {
    @include grid-columns(2, $space-4xl);
  }

  &__card {
    @include card;

    img {
      height: 300px;
      width: 100%;
      object-fit: contain;
    }
  }

  &__details {
    @include flex-between(center);

    span {
      @include tag($color-accent, $color-accent, $color-accent);
    }
  }

  &__info {
    @include container-padding($space-2xl, $space-2xl);
    @include flex-column($space-2xl);
    @include border-top;
  }
}
</style>
