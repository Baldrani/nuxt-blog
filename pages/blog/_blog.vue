<template>
    <article>
        <div v-html="content" />
    </article>
</template>
<script>
import marked from 'marked'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight(code, language) {
        const hljs = require('highlight.js')
        const validLanguage = hljs.getLanguage(language)
            ? language
            : 'plaintext'
        return hljs.highlight(validLanguage, code).value
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
})

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
            return marked(Object.values(this.post)[0])
        }
    }
}
</script>
