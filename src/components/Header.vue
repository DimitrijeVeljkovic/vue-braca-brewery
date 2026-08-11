<script setup lang="ts"></script>

<template>
  <div class="nav-menu">
    <div>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/contact">CONTACT</router-link>
    </div>
    <div>
      <router-link to="/">HOME</router-link>
    </div>
    <div>
      <router-link to="/store">STORE</router-link>
      <router-link to="/cart"><i class="pi pi-shopping-cart"></i>0</router-link>
    </div>
  </div>
</template>

<style scoped>
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    margin: 0 10px;
    vertical-align: middle;
  }
}
</style>
