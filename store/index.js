
const state = {
    primary: true,
    secondary: false,
    green: false,
    showSimulacao: false,
    showContato: false
};

const getters = {
    GET_TEMPLATE_PRIMARY: state => state.primary,

    GET_TEMPLATE_SECONDARY: state => state.secondary,

    GET_TEMPLATE_GREEN: state => state.green,

    GET_SHOW_SIMULACAO: state => state.showSimulacao,

    GET_SHOW_CONTATO: state => state.showContato
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
    SET_SHOW_SIMULACAO: (state, showSimulacao) => {
        state.showSimulacao = showSimulacao
    },
    SET_SHOW_CONTATO: (state, showContato) => {
        state.showContato = showContato
    }
};

const actions = {

};

export default {
    state,
    getters,
    mutations,
    actions
}
