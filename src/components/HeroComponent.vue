<script setup lang="ts"></script>

<template>
  <div class="hero">
    <div class="hero-text">
      <h1>
        <span>Lorem ipsum dolor sit amet</span>
        <br />
        <span class="highlight">consectetur adipisicing elit</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quia, voluptatum,
        voluptates, quibusdam, quidem, quos, quae, quibusdam, quibusdam, quibusdam.
      </p>
      <div class="hero-buttons">
        <router-link to="/store" class="button button-store">Visit Store ></router-link>
        <router-link to="/about" class="button button-about">Learn More +</router-link>
      </div>
    </div>
    <img src="https://insights.ehl.edu/hubfs/1440/1440x960-beer-types.jpg" alt="Hero Image" />
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding-left: 80px;
  display: flex;
  justify-content: space-between;
  gap: 40px;

  img {
    height: 760px;
    width: 50%;
    object-fit: cover;
    mask-image: linear-gradient(to right, transparent 0%, $color-black 30%);
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;

    h1 {
      font-size: 90px;

      .highlight {
        color: $color-yellow;
      }
    }

    p {
      font-size: 18px;
      color: $color-lightgray;
      width: 70%;
      font-family: 'GeistRegular', sans-serif;
    }

    .hero-buttons {
      display: flex;
      gap: 20px;

      .button {
        border: 1px solid $color-yellow;
        background-color: $color-yellow;
        border-radius: 3px;
        padding: 18px 32px;
        text-decoration: none;
        color: $color-black-2;
        font-family: 'GeistMonoRegular', monospace;
        font-size: 18px;
      }

      .button-about {
        border-color: $color-darkgray;
        background-color: transparent;
        color: $color-white;
      }

      .button-store {
        text-transform: uppercase;
      }
    }
  }
}
</style>
