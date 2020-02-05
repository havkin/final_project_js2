<template>
  <div class="product-item">
    <img :src="item.img" alt="some image"/>
    <div class="desc">
      <h3>{{ item.title}}</h3>
      <p>{{ item.price}} $</p>
      <button class="buy-btn" @click="$root.$refs.cart.addItemToDB(item)">Купить</button>
    </div>
  </div>
</template>

<script>
export default {
   props: ['item'],
};
</script>

<style>
</style>