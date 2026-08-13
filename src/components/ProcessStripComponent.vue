<script setup lang="ts"></script>

<template>
  <div class="strip">
    <h2>Malt Milling // Mashing // Boiling // Cooling // Fermentation // Bottling</h2>
    <router-link to="/about">The Brewing Process</router-link>
  </div>
</template>

<style lang="scss" scoped>
.strip {
  background-color: $color-yellow;
  padding: 32px 80px;
  display: flex;
  justify-content: space-between;

  h2 {
    color: $color-black;
    font-size: 32px;
    text-transform: uppercase;
  }

  a {
    font-family: 'GeistMonoRegular', monospace;
    color: $color-black;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
