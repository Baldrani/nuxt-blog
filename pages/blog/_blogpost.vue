<template>
    <article>
        <div v-html="content" />
    </article>
</template>
<script>
export default {
    async asyncData({ params, payload }) {
        if (payload) return { blogPost: payload }
        else
            return {
                post: await require(`~/content/posts/${params.blog}.md`)
            }
    },
    computed: {
        content() {
            return 'Nimp'
            // TODO add prims ++ read md
            //            return post
        }
    }
}
</script>
