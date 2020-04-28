<template>
    <div>
        <article v-for="(post, i) in posts" :key="i">
            <!-- <div v-html="$md.render(Object.values(post)[0])" /> -->
        </article>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    async fetch({ store, error }) {
        try {
            await store.dispatch('posts/fetchPosts')
        } catch (e) {
            error({
                statusCode: 503,
                message: 'Unable to fetch'
            })
        }
    },
    computed: mapState({
        posts: (state) => state.posts.posts
    })
}
</script>
