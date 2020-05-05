<template name="component-name">
    <v-app-bar class="nav">
        <nuxt-link to="/" class="brand">Real World Events</nuxt-link>
        <nav>
            <nuxt-link :to="localePath('/')">List</nuxt-link>
            <nuxt-link :to="localePath('/blog')">Listing Blog</nuxt-link>
            <nuxt-link :to="localePath('/blog/create')">Create</nuxt-link>
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
            <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
            <v-spacer />
            <div v-if="$auth.loggedIn">
                {{ $auth.user.email }}
                <nuxt-link :to="localePath('/logout')">Logout</nuxt-link>
            </div>
            <div v-else>
                <nuxt-link :to="localePath('/login')">Login</nuxt-link>
                <nuxt-link :to="localePath('/register')">Register</nuxt-link>
            </div>
        </nav>
    </v-app-bar>
</template>
