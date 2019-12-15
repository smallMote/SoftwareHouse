<template>
  <div class="search-input-btn-container">
    <div
      @click="$router.push('/search')"
      class="search-input-btn"
    >
      <span>{{ message }}</span>
    </div>
    <div class="search-keywords">
      <b-badge
        v-for="badge in badges"
        :key="badge"
        pill
        variant="light"
        class="badge"
      >
        {{ badge }}
      </b-badge>
    </div>
  </div>
</template>

<script>
import { BBadge } from 'bootstrap-vue'
export default {
  name: 'SearchInputBtn',
  components: {
    BBadge
  },
  data () {
    return {
      message: 'office',
      badges: []
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-input-btn-container
  padding-top: 1.2rem
.search-input-btn
  height 2.4rem
  // width: calc(100% - 2.4rem)
  color #333
  font-size 1rem
  margin 0 1.2rem 0.6rem 1.2rem
  padding 0 1.2rem 0 1.2rem
  line-height 2.4rem
  background #eeeeee
  border-radius 2.4em
  border 1px solid #eeeeee
.search-keywords
  margin 1.2rem
  margin-top: 0
  .badge:not(:last-child)
    margin-right: 0.325rem
</style>
