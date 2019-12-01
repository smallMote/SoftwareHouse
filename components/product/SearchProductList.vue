<template>
  <div id="search-product-list">
    <b-media
      v-for="product in productList"
      :key="product.id"
      class="product-item"
    >
      <template v-slot:aside>
        <b-img-lazy
          :src="product.coverImgUrl"
          width="64"
          alt="placeholder"
        />
      </template>
      <h5 @click="goTutorial(product.id)">{{ product.name }}</h5>
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
        <b-badge variant="warning">
          保存到网盘
        </b-badge>
        <b-badge variant="primary">
          复制下载连接
        </b-badge>
      </p>
    </b-media>
  </div>
</template>

<script>
import { BMedia, BImgLazy, BBadge } from 'bootstrap-vue'
export default {
  name: 'SearchProductList',
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
          name: 'Adobe Illustrator CC 2020',
          like: 990,
          download: 990,
          desc: '你的完美设计工具',
          coverImgUrl: require('@/static/images/product/ai.png'),
          wangpanUrl: '',
          downloadLink: ''
        },
        {
          id: 2,
          name: 'Adobe Audition CC 2020',
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
  margin-bottom: 2rem
</style>
