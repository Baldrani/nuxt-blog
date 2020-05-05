<template name="component-name">
    <v-container>
        <UserAuthForm button-text="Login" :submit-form="loginUser" />
    </v-container>
</template>
<script>
import UserAuthForm from '@/components/UserAuthForm'

export default {
    components: {
        UserAuthForm
    },
    methods: {
        loginUser(loginInfo) {
            this.$auth.loginWith('local', {
                data: loginInfo
            })
        }
    }
}
</script>
