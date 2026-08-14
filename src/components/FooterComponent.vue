<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="footer__top">
      <div class="footer__company-info">
        <h2>Braca Brewery</h2>
        <p class="footer__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptas necessitatibus
          excepturi! Nobis sequi blanditiis sit sunt sint voluptatem autem! Mollitia reprehenderit
          quia veniam non porro ducimus ab, sed sint.
        </p>
        <p class="footer__est">Est // 2024 . Pirot . Serbia</p>
      </div>
      <div class="footer__nav-menu">
        <h4>Menu</h4>
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/store">Store</router-link>
      </div>
      <div class="footer__access">
        <h4>Access Point</h4>
        <router-link to="/login">Log In</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </div>
      <div class="footer__subscribe">
        <h4>Subscribe</h4>
        <p>Subscribe to our newsletter to receive the latest news and updates.</p>
        <div class="footer__subscribe-input">
          <input type="email" placeholder="Enter email address" />
          <button>Submit ^</button>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__social-media">
        <i class="pi pi-instagram"></i>
        <i class="pi pi-facebook"></i>
        <i class="pi pi-twitter"></i>
      </div>
      <p class="footer__copyright">© 2024 Braca Brewery. All rights reserved.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding: 40px 80px;
  border-top: 1px solid $color-darkgray;
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__top {
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 3fr;
    gap: 32px;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__company-info {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h2 {
      font-size: 28px;
    }

    p {
      color: $color-lightgray;

      &.footer__description {
        font-family: 'GeistRegular', sans-serif;
        font-size: 15px;
      }

      &.footer__est {
        font-family: 'GeistMonoRegular', monospace;
        font-size: 13px;
        text-transform: uppercase;
        color: $color-gray;
      }
    }
  }

  &__nav-menu,
  &__access {
    display: flex;
    flex-direction: column;
    gap: 12px;

    h4 {
      font-size: 13px;
      color: $color-yellow;
      text-transform: uppercase;
      font-family: 'GeistMonoRegular', monospace;
      font-weight: normal;
    }

    a {
      text-decoration: none;
      color: $color-lightgray;
      font-family: 'GeistRegular', sans-serif;
      font-size: 14px;

      &:hover {
        color: $color-yellow;
      }
    }
  }

  &__subscribe {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h4 {
      font-size: 13px;
      color: $color-yellow;
      text-transform: uppercase;
      font-family: 'GeistMonoRegular', monospace;
      font-weight: normal;
    }

    p {
      color: $color-lightgray;
      font-family: 'GeistRegular', sans-serif;
      font-size: 14px;
    }
  }

  &__subscribe-input {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;

    input {
      padding: 12px 16px;
      border-radius: 3px;
      border: 1px solid $color-darkgray;
      background-color: $color-black-2;
      color: $color-lightgray;
      font-family: 'GeistMonoRegular', monospace;
      text-transform: uppercase;

      &::placeholder {
        color: $color-gray;
        font-family: 'GeistMonoRegular', monospace;
        text-transform: uppercase;
      }
    }

    button {
      padding: 12px 16px;
      border-radius: 3px;
      border: none;
      background-color: $color-yellow;
      color: $color-black;
      font-family: 'GeistMonoRegular', monospace;
      text-transform: uppercase;

      &:hover {
        cursor: pointer;
      }
    }
  }

  &__copyright {
    color: $color-gray;
    font-family: 'GeistMonoRegular', monospace;
    font-size: 13px;
    text-transform: uppercase;
  }

  &__social-media {
    display: flex;
    gap: 12px;

    i {
      font-size: 20px;
      color: $color-lightgray;

      &:hover {
        color: $color-yellow;
      }
    }
  }
}
</style>
