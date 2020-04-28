export const state = () => ({
    posts: []
})

export const mutations = {
    setPosts(state, list) {
        state.posts = list
    }
}

export const actions = {
    // TODO undiplucita + understand true utility of nuxtServerInit
    // eslint-disable-next-line prettier/prettier
    async nuxtServerInit({
        commit
    }) {
        const files = await require.context('~/content/posts', false, /\.md$/)
        const posts = files.keys().map((key) => {
            const res = files(key)
            return res
        })
        await commit('setPosts', posts)
    },
    // eslint-disable-next-line prettier/prettier
    async fetchPosts({
        commit
    }) {
        const files = await require.context('~/content/posts', false, /\.md$/)
        const posts = files.keys().map((key) => {
            const res = files(key)
            return res
        })
        await commit('setPosts', posts)
    }
}
