<template>
  <div id="search-shop-details">
    <div class="header">
      <div class="control-bar">
        <nuxt-link tag="span" to="/search"><i class="fa fa-angle-left"></i></nuxt-link>
        <div>
          <span>
            <i class="fa fa-search"></i>
          </span>
          <span>
            <i class="fa fa-share"></i>
          </span>
        </div>
      </div>
      <div class="title">
        <h5>{{ shop.name }}</h5>
        <p>{{ shop.summary }}</p>
      </div>
    </div>
    <div class="main">
      <product-list />
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/product/SearchProductList.vue'
export default {
  name: 'SearchShopDetails',
  components: {
    ProductList
  },
  data () {
    return {
      shop: {
        name: 'Adobe',
        summary: '创意营销解决方案'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  height 8rem
  padding 1rem
  position relative
  z-index 2
  // color #ffffff
  &::before
    content ''
    width: 100%
    height: 100%
    position absolute
    left: 0
    top: 0
    background url("../../static/images/product/adobe-bg.jpg")
    background-size cover
    background-position center
    filter blur(1px) grayscale(30%)
    z-index -1
  .title
    background rgba(255, 255, 255, 1)
    box-shadow 0 1px 3px #eeeeee
    border-radius 0.5rem
    height 6rem
    padding: 1rem
    width: 100%
    transform translateY(1.5rem)
  .fa
    font-size 1.2rem
  .fa-angle-left
    font-size 2rem
  .fa-share
    margin-left: 1rem
  .control-bar
    display flex
    justify-content space-between
.main
  padding-top: 4rem
  padding-bottom: 4rem
  margin 1rem
</style>
