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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 80px;
  border-bottom: 1px solid $color-darkgray;
  background-color: $color-black;

  .router-link-active {
    color: $color-yellow;
  }

  a {
    text-decoration: none;
    color: $color-lightgray;
    font-family: 'GeistMonoRegular', monospace;
    font-size: 13px;
    text-transform: uppercase;
    display: inline-block;

    &:hover {
      color: $color-yellow;
    }

    .pi-shopping-cart {
      margin-right: 5px;
      font-size: 16px;
      color: $color-yellow;
      vertical-align: middle;
    }
  }

  .button {
    border: 1px solid $color-darkgray;
    border-radius: 3px;
    background-color: $color-black-2;

    &__access {
      text-transform: capitalize;
      border-color: $color-yellow;

      span {
        color: $color-yellow;
      }
    }
  }

  &__right {
    display: flex;
    gap: 16px;

    a {
      padding: 5px 10px;
    }
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      height: 60px;
    }
  }
}
</style>
