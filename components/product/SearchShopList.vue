<template>
  <div id="search-shop-list">
    <section
      v-for="shop in shopList"
      :key="shop.id"
      class="product"
    >
      <b-media>
        <template v-slot:aside>
          <b-img-lazy
            :src="shop.cover_img_url"
            width="64"
            alt="placeholder"
          ></b-img-lazy>
        </template>
        <h5 @click="$router.push(`/search/${shop.id}`)">{{ shop.name }}</h5>
        <p @click="$router.push(`/search/${shop.id}`)">
          <b-badge variant="success">
            <i class="fa fa-download"></i>
            {{ shop.download }}
          </b-badge>
          <b-badge variant="danger">
            <i class="fa fa-heart"></i>
            {{ shop.like }}
          </b-badge>
        </p>
        <p @click="$router.push(`/search/${shop.id}`)" class="desc">{{ shop.desc }}</p>
        <div class="slider">
          <b-img-lazy
            v-for="product in shop.software"
            :key="product.id"
            :src="product.cover_img_url"
            :alt="product.name"
            blant
            width="64"
          ></b-img-lazy>
          <nuxt-link
            v-if="shop.software.length === 3"
            :to="`/search/${shop.id}`"
            tag="a"
            class="more-btn"
          >
            更多
            <i class="fa fa-chevron-right"></i>
          </nuxt-link>
        </div>
      </b-media>
    </section>
  </div>
</template>

<script>
import { BMedia, BImgLazy, BBadge } from 'bootstrap-vue'
export default {
  name: 'SearchShopList',
  components: {
    BImgLazy,
    BMedia,
    BBadge
  },
  props: {
    shopList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      searchResult: []
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/stylus/minix"
#search-shop-list
  margin 1rem
  .product
    margin-bottom: 4rem
  .slider
    display block
    img
      width: 64px
      height: 64px
      overflow hidden
      margin-right: 0.4rem
    img:last-child
      margin-right: 0
  .more-btn
    text-align center
    display inline-block
    line-height 64px
    rect(64px)
  .desc
    margin 0.4rem 0
</style>
