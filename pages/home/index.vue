<template>
  <div id="home">
    <div class="header">
      <search-input-btn />
      <ul class="platform">
        <li
          v-for="item in firstClassify"
          :key="item.name"
          @click="search(item.name)"
          class="platform-item"
        >
          <i :class="item.icon"></i>
          <p>{{ item.name }}</p>
        </li>
      </ul>
      <div class="classify">
        <ul class="useful">
          <li
            v-for="item in secondClassify"
            :key="item.name"
            @click="search(item.name)"
            class="useful-item"
          >
            <div
              :style="{ background: item.bgColor }"
              class="useful-icon"
            >
              <i :class="item.icon"></i>
            </div>
            <p>{{ item.name }}</p>
          </li>
        </ul>
        <div class="header-banner">
          <b-carousel>
            <b-carousel-slide :img-src="require('@/static/images/banner/1.jpg')" />
            <b-carousel-slide :img-src="require('@/static/images/banner/2.jpg')" />
            <b-carousel-slide :img-src="require('@/static/images/banner/3.jpg')" />
          </b-carousel>
        </div>
      </div>
    </div>
    <div class="product-list">
      <product-list :list="homeProductList" />
    </div>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'
import SearchInputBtn from './SearchInputBtn.vue'
import ProductList from '@/components/product/HomeProductList.vue'
import ProductAPI from '@/api/module/product'
const productAPI = new ProductAPI()
export default {
  components: {
    BCarousel,
    BCarouselSlide,
    SearchInputBtn,
    ProductList
  },
  data () {
    return {
      homeProductList: []
    }
  },
  async asyncData () {
    const firstClassify = [
      { name: 'Win', icon: 'fa fa-windows' },
      { name: 'Mac', icon: 'fa fa-apple' },
      { name: 'IOS', icon: 'fa fa-mobile-phone' },
      { name: 'Android', icon: 'fa fa-android' }
    ]
    const secondClassify = [
      { name: '办公', icon: 'fa fa-paperclip', bgColor: '#FFA500' },
      { name: '设计', icon: 'fa fa-object-ungroup', bgColor: '#ff433f' },
      { name: '剪辑', icon: 'fa fa-film', bgColor: 'rgba(155, 86, 72, 0.89)' },
      { name: '编程', icon: 'fa fa-github', bgColor: 'rgba(53, 166, 70, 0.87)' },
      { name: '娱乐', icon: 'fa fa-gamepad', bgColor: '#ffc107' }
    ]
    const { data } = await productAPI.fetchHomeList()
    return {
      firstClassify,
      secondClassify,
      homeProductList: data.data.rows
    }
  },
  methods: {
    search (keyword) {
      this.$router.push({
        path: '/search',
        query: {
          keyword
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~assets/stylus/minix"
#home
  background #ffffff
.header
  background linear-gradient(#ffc107, #ffc107, #fff)
.header-banner
  border-radius 0.5rem
  overflow hidden
.platform
  display flex
  justify-content center
  .platform-item
    flex 1
    text-align center
    .fa
      text-align center
      font-size 2.5rem
.classify
  margin 1rem
  background #ffffff
  border-radius 1rem 1rem 0.5rem 0.5rem
  box-shadow 0 0 0.4rem #ccc
  overflow hidden
  img
    border-radius 0.5rem
.useful
  padding 1rem
  display flex
  align-items center
  justify-content space-between
  text-align center
  p
    margin-top: 0.25rem
.useful-icon
  rect(4rem)
  background deepskyblue
  border-radius 1rem
  .fa
    font-size 2.5rem
    color #ffffff
    line-height 4rem
.product-list
  margin 1rem
</style>
