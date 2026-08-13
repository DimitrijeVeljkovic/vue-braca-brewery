<script setup lang="ts"></script>

<template>
  <div class="nav-menu">
    <div class="nav-menu-left">
      <router-link to="/home">Home</router-link>
    </div>
    <div class="nav-menu-middle">
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/store">Store</router-link>
    </div>
    <div class="nav-menu-right">
      <router-link to="/cart" class="button button-cart">
        <i class="pi pi-shopping-bag"></i>[0]
      </router-link>
      <router-link to="/access" class="button button-access">Access Point</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 80px;
  border-bottom: 1px solid $color-darkgray;
  background-color: $color-black;

  .router-link-active {
    color: $color-yellow;
  }

  a {
    text-decoration: none;
    padding: 5px 10px;
    color: $color-lightgray;
    font-family: 'GeistMonoRegular', monospace;
    font-size: 13px;
    text-transform: uppercase;
    display: inline-block;

    &:hover {
      color: $color-yellow;
    }

    .pi-shopping-bag {
      margin-right: 5px;
      font-size: 16px;
      color: $color-yellow;
    }
  }

  .button {
    border: 1px solid $color-yellow;
    border-radius: 3px;
  }

  .button-cart {
    border-color: $color-darkgray;
    background-color: $color-black-2;
  }

  .button-access {
    color: $color-yellow;
    text-transform: capitalize;
  }

  .nav-menu-right {
    display: flex;
    gap: 16px;
  }
}
</style>
