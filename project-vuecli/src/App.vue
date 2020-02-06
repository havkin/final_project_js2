<template>
  <div id="app">
    <header>
      <div class="logo">E-shop</div>
      <div class="search-and-cart">
        <search-filter></search-filter>
        <div id="cart" class="cart">
          <button class="btn-cart" type="button" @click="$refs.cart.showUp()">Корзина</button>
          <cart ref="cart"></cart>
        </div>
      </div>
    </header>
    <main>
      <server-error></server-error>
      <catalog ref="catalog"></catalog>
    </main>
  </div>
</template>

<script>
import cart from "./components/cart";
import catalog from "./components/catalog";
import serverError from "./components/error";
import searchFilter from "./components/filter";

export default {
  name: "app",
  data() {
    return {
      smthWrong: false
    };
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(err => {
          this.smthWrong = true;
          console.log(err);
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .catch(err => {
          this.smthWrong = true;
          console.log(err);
        });
    },
    deleteJson(url, data) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .catch(err => {
          this.smthWrong = true;
          console.log(err);
        });
    }
  },
  components: {
    cart,
    catalog,
    "server-error": serverError,
    "search-filter": searchFilter
  }
};
</script>

<style lang="sass">
@import 'style/normalize.css'
@import 'style/style.css'
</style>
