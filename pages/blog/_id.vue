<template name="component-name">
    <div>
        <h1>{{ event.title }}</h1>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    async fetch({ store, params, error }) {
        try {
            await store.dispatch('events/fetchEvent', params.id)
        } catch (e) {
            error({
                statusCode: 503,
                message: 'Unable to fetch event #' + params.id
            })
        }
    },
    head() {
        return {
            title: 'Event Listing ' + this.id,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Where you can find all the SWAG'
                }
            ]
        }
    },
    computed: mapState({
        event: (state) => state.events.event
    })
}
</script>
