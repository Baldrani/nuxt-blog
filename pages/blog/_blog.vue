<template>
    <article>
        <div v-html="hello" />
    </article>
</template>
<script>
const test = require(`~/content/posts/2019-09-22-test.md`)
const MarkdownIt = require('markdown-it')
const meta = require('markdown-it-meta')

// Make new instance
const md = new MarkdownIt()
// Add markdown-it-meta
md.use(meta)

export default {
    computed: {
        content() {
            return md.render(test)
        },
        meta() {
            return md.meta
        }
    }
}
</script>
