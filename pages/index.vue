<template>
    <div>
        <h1>Events</h1>
        <EventCard
            v-for="(event, index) in events"
            :key="index"
            :event="event"
            :data-index="index"
        />
        <script>
            if (window.netlifyIdentity) {
                window.netlifyIdentity.on('init', (user) => {
                    if (!user) {
                        window.netlifyIdentity.on('login', () => {
                            document.location.href = '/admin/'
                        })
                    }
                })
            }
        </script>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue'

export default {
    components: {
        EventCard
    },
    async fetch({ store, error }) {
        try {
            await store.dispatch('events/fetchEvents')
        } catch (e) {
            error({
                statusCode: 503,
                message: 'Unable to fetch'
            })
        }
    },
    computed: mapState({
        events: (state) => state.events.events
    }),
    head() {
        return {
            title: 'Event Listing',
            script: [
                {
                    src:
                        'https://identity.netlify.com/v1/netlify-identity-widget.js'
                }
            ]
        }
    }
}
</script>
