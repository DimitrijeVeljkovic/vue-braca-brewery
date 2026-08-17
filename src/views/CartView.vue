<script setup lang="ts">
import { ALL_BEERS } from '@/mocks/all-beers.mock'
import { useCart } from '@/stores/useCart'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'

const cartStore = useCart()
const { cart } = storeToRefs(cartStore)
const { addToCart, removeFromCart } = cartStore

const allProducts = ref<any>([])
const cartItems = computed(() => {
  return allProducts.value
    .filter((product: any) => cart.value.includes(product.id))
    .map((product: any) => {
      const quantity = cart.value.filter((id) => id === product.id).length
      const total = quantity * product.price

      return {
        ...product,
        quantity,
        total,
      }
    })
})

onMounted(() => {
  // ToDo: Get data from API
  allProducts.value = ALL_BEERS
})
</script>

<template>
  <div class="cart">
    <div class="cart__content">
      <h1>Your beer allocation</h1>
      <div class="cart__items">
        <div class="cart__items-heading">
          <span>Beer info</span>
          <div>Quantity</div>
          <div>Price</div>
          <div>Total</div>
        </div>
        <div class="cart__item" v-for="item in cartItems">
          <div class="cart__item-details">
            <img :src="item.imageUrl" :alt="item.name" />
            <div>
              <h3>{{ item.name }}</h3>
              <div>
                <span class="cart__item-type">{{ item.type }}</span>
                <span class="cart__item-abv">ABV: {{ item.abv }}</span>
              </div>
            </div>
          </div>
          <div class="cart__item-qty">
            <button @click="removeFromCart(item.id)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="addToCart(item.id)">+</button>
          </div>
          <div class="cart__item-price">${{ item.price }}</div>
          <div class="cart__item-total">${{ item.total }}</div>
        </div>
      </div>
    </div>
    <div class="cart__summary">
      <h2>Cart Summary</h2>
      <div class="cart__summary-info">
        <div>
          <span>Subtotal</span>
          <span>$123</span>
        </div>
        <div>
          <span>Displatch fee</span>
          <span>$12.67</span>
        </div>
      </div>
      <div class="cart_summary-total">
        <h3>Grand total</h3>
        <h3>$156.78</h3>
      </div>
      <button>Place an order</button>
      <router-link to="/store">Keep browsing store</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  padding: 60px 80px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 48px;

  &__content {
    h1 {
      font-size: 64px;
      text-transform: uppercase;
      margin-bottom: 32px;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__items-heading,
  &__item {
    background-color: $color-black-2;
    padding: 16px;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
  }

  &__items-heading {
    color: $color-gray;
    font-size: 11px;
    text-transform: uppercase;
    font-family: 'GeistMonoRegular', monospace;
    border-bottom: 1px solid $color-darkgray;

    div {
      align-items: center;
      justify-self: center;
    }
  }

  &__item {
    border: 1px solid $color-darkgray;
    border-radius: 3px;

    img {
      height: 80px;
      width: 80px;
      object-fit: cover;
      border-radius: 3px;
    }
  }

  &__item-details {
    display: flex;
    gap: 16px;
    align-items: center;

    h3 {
      font-size: 24px;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    span {
      font-family: 'GeistMonoRegular', monospace;
      font-size: 12px;
    }
  }

  &__item-type {
    color: $color-red;
    border: 1px solid $color-red;
    padding: 4px 8px;
    border-radius: 3px;
    text-transform: uppercase;
    background-color: rgb($color-red, 0.1);
    margin-right: 8px;
  }

  &__item-abv {
    color: $color-gray;
  }

  &__item-qty,
  &__item-price,
  &__item-total {
    align-self: center;
    justify-self: center;
    font-family: 'GeistMonoRegular', monospace;
    font-size: 14px;
    font-weight: bold;
  }

  &__item-qty {
    color: $color-yellow;

    button {
      height: 28px;
      width: 28px;
      margin: 12px;
      background-color: $color-black;
      border: 1px solid $color-darkgray;
      color: $color-white;
      border-radius: 3px;
      font-weight: bold;
      font-size: 14px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  &__item-price {
    color: $color-lightgray;
  }
}
</style>
