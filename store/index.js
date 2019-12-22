export const state = () => ({
  user: {}
})

export const mutations = {
  setUser (state, user) {
    if (!user) {
      user = {
        name: '',
        token: '',
        coverImgUrl: ''
      }
    }
    state.user = { name: user.name, token: user.token, coverImgUrl: user.coverImgUrl }
  }
}
