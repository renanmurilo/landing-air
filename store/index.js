
const state = {
    primary: true,
    secondary: false,
    green: false
};

const getters = {
    GET_TEMPLATE_PRIMARY: state => state.primary,

    GET_TEMPLATE_SECONDARY: state => state.secondary,

    GET_TEMPLATE_GREEN: state => state.green,
};

const mutations = {
    SET_TEMPLATE_PRIMARY: (state, primary) => {
        state.primary = primary
    },
    SET_TEMPLATE_SECONDARY: (state, secondary) => {
        state.secondary = secondary
    },
    SET_TEMPLATE_GREEN: (state, green) => {
        state.green = green
    },
};

const actions = {

};

export default {
    state,
    getters,
    mutations,
    actions
}
