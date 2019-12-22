<template>
  <div id="lazy">
    <div class="desc">
      为懒人提供的福利，破解麻烦？这里为你提供注册码，填写即可使用，不定时更新！
    </div>
    <div class="search-input-group">
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
    </div>
    <lazy-product-list class="list-container" />
  </div>
</template>

<script>
import LazyProductList from '@/components/product/LazyProductList'
export default {
  name: 'Lazy',
  components: {
    LazyProductList
  },
  data () {
    return {
      keyword: '',
      placeholder: '请输入软件名称'
    }
  },
  methods: {
    search () {},
    cancel () {}
  }
}
</script>

<style lang="stylus" scoped>
label
  width: 100%
  transition 4s
.search-input-group
  display flex
  align-items center
  justify-content space-between
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
#lazy
  padding 12px
  min-height calc(100vh - 4rem)
  background linear-gradient(#ffc107, #ffc107, #fff)
  .desc
    min-height 4rem
    border-radius 0.5rem
    background #ffffff40
    transition 0.4s ease
    padding 1rem
    /*animation borderRadius 3s linear infinite*/
  .list-container
    margin-top: 2rem
@keyframes borderRadius {
  25% {
    border-radius 0 0.5rem 0 0
  }
  50% {
    border-radius 0 0 0.5rem 0
  }
  75% {
    border-radius 0 0 0 0.5rem
  }
}
</style>
