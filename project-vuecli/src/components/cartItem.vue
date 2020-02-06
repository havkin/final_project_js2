<template>
  <div class="cart-item">
    <div class="product-bio">
      <img :src="item.img" alt="some image"/>
      <div class="product-desc">
        <p class="product-title">{{ item.title }}</p>
        <p class="product-quantity">Quantity: {{ item.quantity }}</p>
        <p class="product-single-price">\${{ item.price }} each</p>
      </div>
    </div>
    <div class="right-block">
      <p class="product-price">\${{ item.quantity * item.price }}</p>
      <button class="del-btn" @click="$parent.$parent.$refs.cart.removeItemfromDB(item)">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style>
</style>