<template>
  <div id="Home-product-list">
    <b-media
      v-for="product in list"
      :key="product.id"
      @click="goTutorial(product.contentId)"
      class="product-item"
      right-align
    >
      <template v-slot:aside>
        <b-img-lazy
          :src="product.cover_img_url"
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
        <b-badge v-if="product.brand " variant="info">
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
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      content: '',
      productList: []
    }
  },
  methods: {
    goTutorial (id) {
      this.$router.push(`/tutorial/${id}`)
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
