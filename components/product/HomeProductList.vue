<template>
  <div id="Home-product-list">
    <b-media
      v-for="product in productList"
      :key="product.id"
      @click="goTutorial(product.id)"
      class="product-item"
      right-align
    >
      <template v-slot:aside>
        <b-img-lazy
          :src="product.coverImgUrl"
          width="64"
          alt="placeholder"
        />
      </template>
      <h5>{{ product.name }}</h5>
      <p>{{ product.desc }}</p>
      <p>
        <b-badge variant="success">
          <i class="fa fa-download"></i>
          {{ product.download }}
        </b-badge>
        <b-badge variant="danger">
          <i class="fa fa-heart"></i>
          {{ product.like }}
        </b-badge>
        <b-badge variant="info">
          {{ product.brand }}
        </b-badge>
      </p>
    </b-media>
  </div>
</template>

<script>
import { BMedia, BImgLazy, BBadge } from 'bootstrap-vue'
export default {
  name: 'HomeProductList',
  components: {
    BMedia,
    BImgLazy,
    BBadge
  },
  data () {
    return {
      productList: [
        {
          id: 0,
          brand: 'Adobe',
          name: 'Adobe Photoshop CC 2020',
          like: 990,
          download: 990,
          desc: '你的完美设计工具',
          coverImgUrl: require('@/static/images/product/ps.png'),
          wangpanUrl: '',
          downloadLink: ''
        },
        {
          id: 1,
          brand: 'Adobe',
          name: 'Adobe Photoshop CC 2020',
          like: 990,
          download: 990,
          desc: '你的完美设计工具',
          coverImgUrl: require('@/static/images/product/au.png'),
          wangpanUrl: '',
          downloadLink: ''
        }
      ]
    }
  },
  methods: {
    goTutorial (id) {
      this.$router.push({
        name: 'search-tutorial',
        params: { id }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.product-item
  box-shadow 0 0 3px #eeeeee
  padding 0.25rem
  border-radius 0.25rem
  margin-top: 2rem
  margin-bottom: 2rem
</style>
