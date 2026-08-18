<script setup lang="ts">
import { BREWING_STEPS } from '@/data/steps.data'

const steps = BREWING_STEPS
</script>

<template>
  <div class="brewing-process" id="brewing-process">
    <h3>The Brewing Process</h3>
    <div class="brewing-process__steps">
      <div v-for="(step, index) in steps" :key="index" class="brewing-process__step">
        <span>Step #{{ index + 1 }}</span>
        <h4>{{ step.title }}</h4>
        <p>{{ step.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brewing-process {
  @include flex-column($space-4xl);
  @include container-padding;
  @include border-top;
  @include border-bottom;
  background-color: $color-background-secondary;

  &__steps {
    @include grid-columns(3, $space-2xl);
  }

  &__step {
    @include container-padding($space-2xl, $space-2xl);
    @include card($color-background);
    @include flex-column($space-lg);

    span {
      @include text-mono($font-size-body, $color-primary);
    }

    p {
      @include text-body($font-size-sm);
    }
  }
}
</style>
