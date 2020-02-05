<template>
  <form action="#" class="search-form">
    <input type="text" class="search-field" v-model.trim="value" />
    <button class="btn-search" type="submit" @click="$root.$refs.catalog.filterList(value)">
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style>
</style>