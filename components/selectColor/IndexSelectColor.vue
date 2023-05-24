<template>
    <div>
        <div v-if="primary">
            <SelectPrimary />
        </div>

        <div v-if="secondary">
            <SelectSecondary />
        </div>

        <div v-if="green">
            <SelectGreen />
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
