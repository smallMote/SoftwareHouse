<template>
  <div id="lazy-product-list">
    <b-row>
      <b-col v-for="item in list" :key="item.id" class="img-outer-box" cols="6" sm="3">
        <div>
          <b-img v-if="false" rounded blank blank-color="#ccc" width="100%"></b-img>
          <b-img-lazy
            class="img-box"
            src="https://picsum.photos/600/400/?image=80"
            width="100%"
            rounded
          />
          <p>PhotoShop</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BImg, BImgLazy } from 'bootstrap-vue'
export default {
  name: 'LazyProductList',
  components: {
    BRow,
    BCol,
    BImg,
    BImgLazy
  },
  props: {
    list: {
      type: Array,
      default: () => [
        { id: 1, coverImgUrl: '' },
        { id: 2, coverImgUrl: '' },
        { id: 3, coverImgUrl: '' },
        { id: 4, coverImgUrl: '' },
        { id: 5, coverImgUrl: '' },
        { id: 6, coverImgUrl: '' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.img-outer-box
  display flex
  align-items center
  justify-content center
  margin-bottom: 1rem
  .img-box
    width: 100%
</style>
