<template>
    <div>
        <div v-if="primary">
            <BannerPrimary />
        </div>

        <div v-if="secondary">
            <BannerSecondary />
        </div>

        <div v-if="green">
            <BannerGreen />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            primary: 'GET_TEMPLATE_PRIMARY',
            secondary: 'GET_TEMPLATE_SECONDARY',
            green: 'GET_TEMPLATE_GREEN',
        }),
    },
};
</script>

<style>
</style>
