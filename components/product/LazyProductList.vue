<template>
  <div id="lazy-product-list">
    <b-row>
      <b-col v-for="item in list" :key="item.id" class="img-outer-box" cols="6" sm="3">
        <div
          @click="$router.push(`/lazy/${item.id}`)"
          class="product-container"
        >
          <b-img-lazy
            :src="item.coverImgUrl"
            class="img-box"
            width="100%"
            rounded
          />
          <p>{{ item.name }}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BImgLazy } from 'bootstrap-vue'
export default {
  name: 'LazyProductList',
  components: {
    BRow,
    BCol,
    BImgLazy
  },
  props: {
    list: {
      type: Array,
      default: () => [
        {
          id: 1,
          name: 'WebStorm',
          coverImgUrl: require('../../assets/product/webstorm.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.row
  padding 0
  margin: 0
.img-outer-box
  display flex
  align-items center
  justify-content center
  margin-bottom: 1rem
  &:nth-child(odd) {
    padding-left 0
  }
  &:nth-child(even) {
    padding-right 0
  }
  .img-box
    width: 100%
.product-container
  cursor pointer
  p
    text-align center
    margin-top: 0.5rem
@media screen and (min-width: 575px)
  .img-outer-box
    &:nth-child(odd)
      padding-left 10px
    &:nth-child(even)
      padding-right 10px
</style>
