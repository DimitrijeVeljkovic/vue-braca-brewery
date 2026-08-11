<script setup lang="ts"></script>

<template>
  <div class="nav-menu">
    <div class="nav-menu-left">
      <router-link to="/home">HOME</router-link>
    </div>
    <div class="nav-menu-middle">
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/contact">CONTACT</router-link>
      <router-link to="/store">STORE</router-link>
    </div>
    <div class="nav-menu-right">
      <router-link to="/cart" class="button button-cart">
        <i class="pi pi-shopping-bag"></i>[0]
      </router-link>
      <router-link to="/access" class="button button-access">Access Point</router-link>
    </div>
  </div>
</template>

<style scoped>
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 80px;
  border-bottom: 1px solid #1c1c24;

  .router-link-active {
    color: #e2ff00;
  }

  a {
    text-decoration: none;
    padding: 5px 10px;
    color: #a5a5b0;
    font-family: 'GeistMonoRegular', sans-serif;
    font-size: 13px;

    &:hover {
      color: #e2ff00;
    }

    .pi-shopping-bag {
      margin-right: 5px;
      font-size: 16px;
      color: #e2ff00;
    }
  }

  .button {
    border: 1px solid #e2ff00;
    border-radius: 3px;
  }

  .button-cart {
    border-color: #1c1c24;
    background-color: #0e0e12;
  }

  .button-access {
    color: #e2ff00;
  }

  .nav-menu-right {
    display: flex;
    gap: 16px;
  }
}
</style>
