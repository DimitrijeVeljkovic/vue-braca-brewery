import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCart = defineStore('cart', () => {
  const cart = ref<number[]>([])
  const cartCount = computed(() => cart.value.length)

  function setCart() {
    cart.value = JSON.parse(localStorage.getItem('cart') || '[]')
  }

  function addToCart(productId: number) {
    cart.value.push(productId)
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }

  function removeFromCart(productId: number) {
    cart.value.splice(cart.value.indexOf(productId), 1)
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }

  return { cart, cartCount, setCart, addToCart, removeFromCart }
})
