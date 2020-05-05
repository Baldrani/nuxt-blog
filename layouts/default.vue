<template>
    <div id="app">
        <nav-bar />
        <nuxt />
    </div>
</template>
<script>
import NavBar from '~/components/NavBar'
export default {
    components: {
        NavBar
    },
    head() {
        return {
            titleTemplate: '%s - Real World Events',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Where you can find all the SWAG'
                }
            ]
        }
    }
}
</script>
