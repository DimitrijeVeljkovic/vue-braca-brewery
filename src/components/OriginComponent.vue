<script setup lang="ts"></script>

<template>
  <div class="origin">
    <img
      src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,w_1800,h_800/crm/chicago/corridor-4646-2-copy0_2ff440d2-5056-a36f-23f0c429f9749edf.jpg"
      alt="Origin"
    />
    <div class="origin__text">
      <span>Since: 2024</span>
      <h1>Origin of Braća Brewery</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde earum illum error, enim facere
        magnam architecto dolor alias tenetur minima assumenda necessitatibus, ab iure deleniti
        aperiam! Vero aliquid dolor id! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Unde earum illum error, enim facere magnam architecto dolor alias tenetur minima assumenda
        necessitatibus, ab iure deleniti aperiam! Vero aliquid dolor id!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illum fugit placeat iure
        expedita tenetur consequatur quae perferendis enim nulla! Labore cupiditate natus autem iste
        enim veniam illo velit rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        earum illum error, enim facere magnam architecto dolor alias tenetur minima assumenda
        necessitatibus, ab iure deleniti aperiam! Vero aliquid dolor id!
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.origin {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  padding-right: 80px;

  img {
    height: 600px;
    width: 50%;
    object-fit: cover;
    mask-image: linear-gradient(to left, transparent 0%, $color-black 30%);
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 24px;

    span {
      color: $color-red;
      border: 1px solid $color-red;
      padding: 4px 8px;
      border-radius: 3px;
      text-transform: uppercase;
      font-size: 12px;
      background-color: rgb($color-red, 0.1);
      width: fit-content;
      font-family: 'GeistMonoRegular', monospace;
    }

    h1 {
      font-size: 72px;
      text-transform: uppercase;
    }

    p {
      font-size: 16px;
      font-family: 'Geist', sans-serif;
      color: $color-lightgray;
      width: 70%;
    }
  }
}
</style>
