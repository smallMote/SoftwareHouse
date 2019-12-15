export const state = () => ({
  user: {}
})

export const mutations = {
  setUser (state, { name, token, coverImgUrl }) {
    state.user = { name, token, coverImgUrl }
  }
}
