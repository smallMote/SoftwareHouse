<template>
  <div id="search-page">
    <div class="search-input-group">
      <span v-show="keyword" @click="cancel" class="cancel-btn">
        <i class="fa fa-angle-left"></i>
      </span>
      <label for="search-input">
        <input
          id="search-input"
          v-model="keyword"
          :placeholder="placeholder"
          @keydown.enter="search(keyword)"
          autofocus
          type="text"
        />
      </label>
      <span v-show="!keyword" @click="cancel" class="cancel-btn">取消</span>
    </div>
    <keyword-panel v-if="showKeywordPanel" @search="search" />
    <shop-list
      v-if="!showKeywordPanel && shopList.length"
      :shop-list="shopList"
    />
  </div>
</template>

<script>
import KeywordPanel from './KeywordPanel'
import ShopList from '@/components/product/SearchShopList'
import ShopAPI from '@/api/module/ShopModule'
const shopAPI = new ShopAPI()
export default {
  name: 'Search',
  components: {
    KeywordPanel,
    ShopList
  },
  data () {
    return {
      keyword: '',
      defKeyword: '',
      placeholder: 'office',
      showKeywordPanel: true,
      total: 0,
      shopList: []
    }
  },
  created () {
    this.defKeyword = this.placeholder
  },
  methods: {
    async search (keyword = this.defKeyword) {
      this.keyword = keyword || this.defKeyword
      const result = await shopAPI.searchShopList(this.keyword)
      this.showKeywordPanel = false
      if (result && result.data.code === 0) {
        const { count, data } = result.data
        this.total = count
        this.shopList = data
      }
    },
    cancel () {
      this.$router.go(-1)
      this.keyword = ''
      this.showKeywordPanel = true
    }
  },
  watch: {
    keyword (val) {
      this.defKeyword = val
    }
  }
}
</script>

<style lang="stylus" scoped>
label
  width: calc(100% - 3rem)
  transition 4s
.search-input-group
  display flex
  align-items center
  justify-content space-between
  margin 1.2rem
  margin-top: 0
  padding-top: 1.2rem
#search-input
  height 2.4rem
  width: 100%
  color #333
  font-size 1rem
  padding 0 1.2rem
  line-height 2.4rem
  background #eeeeee
  border-radius 2.4em
  outline none
  border 1px solid #eeeeee
.cancel-btn
  font-size 1rem
  width 2rem
  text-align center
  .fa
    font-size 2rem
</style>
