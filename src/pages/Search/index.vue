<template>
  <div class="search-goods">
    <m-head :title='title'></m-head>
    <h3>搜索商品</h3>
    <input type="text">
  </div>
</template>
<script>
export default {
  name: "search-goods",
  data: () => ({
    title: 'search'
  })
}
</script>
