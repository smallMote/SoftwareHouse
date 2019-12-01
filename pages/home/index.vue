<template>
  <div id="home">
    <div class="header">
      <search-input-btn />
      <ul class="platform">
        <li class="platform-item">
          <i class="fa fa-windows"></i>
          <p>Win</p>
        </li>
        <li class="platform-item">
          <i class="fa fa-apple"></i>
          <p>Mac</p>
        </li>
        <li class="platform-item">
          <i class="fa fa-mobile-phone"></i>
          <p>IOS</p>
        </li>
        <li class="platform-item">
          <i class="fa fa-android"></i>
          <p>Android</p>
        </li>
      </ul>
      <div class="classify">
        <ul class="useful">
          <li class="useful-item office">
            <div class="useful-icon">
              <i class="fa fa-paperclip"></i>
            </div>
            <p>办公</p>
          </li>
          <li class="useful-item design">
            <div class="useful-icon">
              <i class="fa fa-object-ungroup"></i>
            </div>
            <p>设计</p>
          </li>
          <li class="useful-item edit">
            <div class="useful-icon">
              <i class="fa fa-film"></i>
            </div>
            <p>剪辑</p>
          </li>
          <li class="useful-item program">
            <div class="useful-icon">
              <i class="fa fa-github"></i>
            </div>
            <p>编程</p>
          </li>
          <li class="useful-item distraction">
            <div class="useful-icon">
              <i class="fa fa-gamepad"></i>
            </div>
            <p>娱乐</p>
          </li>
        </ul>
        <div class="header-banner">
          <b-carousel>
            <b-carousel-slide img-src="https://picsum.photos/1024/280/?image=54" />
            <b-carousel-slide img-src="https://picsum.photos/1024/280/?image=58" />
            <b-carousel-slide img-src="https://picsum.photos/1024/280/?image=55" />
          </b-carousel>
        </div>
      </div>
    </div>
    <div class="product-list">
      <product-list />
    </div>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'
import SearchInputBtn from './SearchInputBtn.vue'
import ProductList from '@/components/product/HomeProductList.vue'
export default {
  components: {
    BCarousel,
    BCarouselSlide,
    SearchInputBtn,
    ProductList
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
.useful-item
  &.office .useful-icon
    background orange
  &.design .useful-icon
    background #ff433f
  &.edit .useful-icon
    background rgba(155, 86, 72, 0.89)
  &.program .useful-icon
    background rgba(53, 166, 70, 0.87)
  &.distraction .useful-icon
    background #ffc107
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
