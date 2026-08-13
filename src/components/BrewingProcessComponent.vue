<script setup lang="ts">
import { BREWING_STEPS } from '@/data/steps.data'

const steps = BREWING_STEPS
</script>

<template>
  <div class="brewing-process" id="brewing-process">
    <h2>The Brewing Process</h2>
    <div class="brewing-process__steps">
      <div v-for="(step, index) in steps" :key="index" class="brewing-process__step">
        <span>Step #{{ index + 1 }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brewing-process {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 80px;
  background-color: $color-black-2;
  border-top: 1px solid $color-darkgray;
  border-bottom: 1px solid $color-darkgray;

  h2 {
    font-size: 56px;
    text-transform: uppercase;
  }

  &__steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  &__step {
    padding: 24px;
    background-color: $color-black;
    border: 1px solid $color-darkgray;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    span {
      font-size: 16px;
      font-family: 'GeistMonoRegular', monospace;
      text-transform: uppercase;
      color: $color-yellow;
    }

    h3 {
      font-size: 24px;
      text-transform: uppercase;
    }

    p {
      color: $color-lightgray;
      font-size: 14px;
      font-family: 'GeistRegular', sans-serif;
    }
  }
}
</style>
