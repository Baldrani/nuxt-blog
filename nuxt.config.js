import EventService from './services/EventService.js'

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#39b982'
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        '@nuxtjs/markdownit',
        [
            'nuxt-i18n',
            {
                locales: [{
                        name: 'Français',
                        code: 'fr',
                        iso: 'fr-FR',
                        file: 'fr-FR.js'
                    },
                    {
                        name: 'English',
                        code: 'en',
                        iso: 'en-EN',
                        file: 'en-EN.js'
                    }
                ],
                lazy: true, // Lazy load language files
                langDir: 'lang/',
                defaultLocale: 'fr',
                // Enable browser language detection to automatically redirect user
                // to their preferred language as they visit your app for the first time
                // Set to false to disable
                detectBrowserLanguage: {
                    // If enabled, a cookie is set once a user has been redirected to his
                    // preferred language to prevent subsequent redirections
                    // Set to false to redirect every time
                    useCookie: true,
                    // Set to override the default domain of the cookie. Defaults to host of the site.
                    cookieDomain: null,
                    // Cookie name
                    cookieKey: 'i18n_redirected',
                    // Set to always redirect to value stored in the cookie, not just once
                    alwaysRedirect: false,
                    // If no locale for the browsers locale is a match, use this one as a fallback
                    fallbackLocale: null
                },
            }
        ]
    ],
    markdownit: {
        linkify: true,
        breaks: true,
        use: ['markdown-it-div', 'markdown-it-attrs', 'markdown-it-meta']
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    generate: {
        routes: () => {
            return EventService.getEvents().then((response) => {
                return response.data.map((event) => {
                    return '/blog/' + event.id
                })
            })
        }
    }
}
