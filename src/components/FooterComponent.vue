<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="footer__top">
      <div class="footer__company-info">
        <img src="@/assets/images/logo.png" alt="Logo" />
        <p class="footer__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptas necessitatibus
          excepturi! Nobis sequi blanditiis sit sunt sint voluptatem autem! Mollitia reprehenderit
          quia veniam non porro ducimus ab, sed sint.
        </p>
        <p class="footer__est">Est // 2024 . Pirot . Serbia</p>
      </div>
      <div class="footer__nav-menu">
        <span>Menu</span>
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/store">Store</router-link>
      </div>
      <div class="footer__access">
        <span>Access Point</span>
        <router-link to="/login">Log In</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </div>
      <div class="footer__subscribe">
        <span>Subscribe</span>
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
  @include container-padding($space-5xl, $space-4xl);
  @include border-top;
  @include flex-column($space-3xl);

  &__top {
    @include grid-columns-custom(4fr 1fr 1fr 3fr, $space-3xl);
  }

  &__bottom {
    @include flex-between(center);
  }

  &__company-info {
    @include flex-column($space-lg);

    img {
      height: 60px;
      width: fit-content;
    }

    p {
      &.footer__description {
        @include text-description($font-size-sm);
      }

      &.footer__est {
        @include text-mono($font-size-xs, $color-text-muted);
      }
    }
  }

  &__nav-menu,
  &__access {
    @include flex-column($space-md);

    span {
      @include text-mono($font-size-xs, $color-primary);
      font-weight: normal;
    }

    a {
      @include link-default;
      @include text-body($font-size-sm);
    }
  }

  &__subscribe {
    @include flex-column($space-xl);

    span {
      @include text-mono($font-size-xs, $color-primary);
      font-weight: normal;
    }

    p {
      @include text-body($font-size-sm);
    }
  }

  &__subscribe-input {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;

    input {
      padding: 12px 16px;
      @include border;
      @include text-mono;
      background-color: $color-background-secondary;

      &::placeholder {
        color: $color-text-muted;
        font-family: $font-mono;
      }
    }

    button {
      @include button-primary($color-primary, $color-background);
    }
  }

  &__copyright {
    @include text-mono($font-size-xs, $color-text-muted);
  }

  &__social-media {
    display: flex;
    gap: $space-md;

    i {
      font-size: $font-size-h6;
      color: $color-text-secondary;

      &:hover {
        color: $color-primary;
      }
    }
  }
}
</style>
