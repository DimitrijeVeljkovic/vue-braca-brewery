<script setup lang="ts">
import { useCart } from '@/stores/useCart'
import { storeToRefs } from 'pinia'

const cartStore = useCart()
const { cartCount } = storeToRefs(cartStore)
</script>

<template>
  <div class="nav-menu">
    <div class="nav-menu__left">
      <router-link to="/home">
        <img src="@/assets/images/logo.png" alt="Logo" />
      </router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/store">Store</router-link>
    </div>
    <div class="nav-menu__right">
      <router-link to="/cart" class="button button__cart">
        <i class="pi pi-shopping-cart"></i>[{{ cartCount }}]
      </router-link>
      <router-link to="/login" class="button button__access">Log <span>in</span></router-link>
      <router-link to="/signup" class="button button__access">Sign <span>up</span></router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-menu {
  @include flex-between(center);
  @include container-padding($space-5xl, $space-xs);
  @include border-bottom;
  background-color: $color-background;

  .router-link-active {
    color: $color-primary;
  }

  a {
    @include link-default;
    @include text-mono;
    display: inline-block;

    .pi-shopping-cart {
      margin-right: $space-xs;
      font-size: $font-size-body;
      color: $color-primary;
      vertical-align: middle;
    }
  }

  .button {
    @include border;
    background-color: $color-background-secondary;

    &__access {
      text-transform: capitalize;
      border-color: $color-primary;

      span {
        color: $color-primary;
      }
    }
  }

  &__right {
    display: flex;
    gap: $space-lg;

    a {
      padding: $space-xs $space-sm;
    }
  }

  &__left {
    @include flex-center;
    justify-content: flex-start;
    gap: $space-2xl;

    img {
      height: 60px;
    }
  }
}
</style>
