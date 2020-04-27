export const state = () => ({
    blogPosts: []
})

export const mutations = {
    setBlogPosts(state, list) {
        state.blogPosts = list
    }
}

export const actions = {
    // eslint-disable-next-line prettier/prettier
    // async nuxtServerInit({
    //     commit
    // }) {
    //     const files = await require.context(
    //         '~/assets/content/blog/',
    //         false,
    //         /\.md$/
    //     )
    //     const blogPosts = files.keys().map((key) => {
    //         const res = files(key)
    //         return res
    //     })
    //     await commit('setBlogPosts', blogPosts)
    // }
}
