<template>
    <transition name="modal">
        <div class="modal__mask" v-if="showSimulacao">
            <div class="modal__wrapper">
                <div class="modal__container">
                    <div class="content__simulacao">
                        <h3>Para simular seu plano, insira os dados abaixo:</h3>
                        <form class="form__simulacao" @submit.stop.prevent="simular">
                            <div class="form__row">
                                <div class="form__controls">
                                    <label class="label__field">Nome:</label>
                                    <input type="text" class="field">
                                </div>

                                 <div class="form__controls">
                                    <label class="label__field">Sobrenome:</label>
                                    <input type="text" class="field">
                                </div>
                            </div>

                            <div class="form__row">
                                <div class="form__controls">
                                    <label class="label__field">E-mail:</label>
                                    <input type="text" class="field">
                                </div>

                                 <div class="form__controls">
                                    <label class="label__field">Telefone:</label>
                                    <input type="text" class="field">
                                </div>
                            </div>

                            <div class="form__row button">
                                <div class="row__accepted">
                                     <input type="checkbox" class="field__check" name="" id="accepted">
                                     <label for="accepted" class="label__check">
                                        Ao continuar, você concorda com os <nuxt-link to="/TermosDeUso">Termos de Uso</nuxt-link> da BRITech Air.
                                     </label>
                                </div>
                                <button class="btn btn__primary" v-if="primary">Simular</button>
                                <button class="btn btn__secondary" v-if="secondary">Simular</button>
                                <button class="btn btn__green" v-if="green">Simular</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            showSimulacao: 'GET_SHOW_SIMULACAO',
            primary: 'GET_TEMPLATE_PRIMARY',
            secondary: 'GET_TEMPLATE_SECONDARY',
            green: 'GET_TEMPLATE_GREEN',
        })
    },
    data() {
        return {
            nome: '',
            sobrenome: '',
            email: '',
            telefone:''
        }
    },
    methods: {
        simular() {
            // if (!this.nome && !this.sobrenome && !this.email && !this.telefone) return;

            this.$store.commit('SET_SHOW_SIMULACAO', !this.showSimulacao)
        }
    },
};
</script>

<style lang="scss">
.modal__mask {
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(198, 198, 198, 0.5);
    display: table;
    transition: opacity 0.3s ease;

    &.modal-enter {
        opacity: 0;

        .modal__container {
            transform: scale(1.1);
        }
    }

    &.modal-leave-active {
        opacity: 0;

        .modal__container {
            transform: scale(1.1);
        }
    }

    .modal__wrapper {
        display: table-cell;
        vertical-align: middle;
        overflow-y: auto;

        .modal__container {
            width: 40.3125rem;
            height: 22.625rem;
            margin: 0px auto;
            background-color: $white;
            transition: all 0.3s ease;
            position: relative;
            border-radius: 1.75rem;
            margin-top: 9rem;
            padding: 2.6875rem 3.8125rem;

            @media (max-width: 768px) {
                width: 95%;
                margin: auto;
                height: 35.625rem;
            }

            .content__simulacao {
                width: 100%;

                h3 {
                    @include font-work(1.125rem, 300, 0);
                    color: $text-dark;
                    text-align: center;
                    margin-bottom: 1.625rem;
                }

                .form__simulacao {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .form__row {
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;

                        @media ($mobile) {
                            justify-content: center;
                        }

                        &.button {
                            justify-content: center;

                            .btn__primary,
                            .btn__secondary,
                            .btn__green {
                                width: 12.125rem;
                                height: 3.4375rem;
                                color: $text-dark;
                                font-size: 1.25rem;
                            }

                            .row__accepted {
                                width: 100%;
                                display: flex;
                                justify-content:center;
                                margin-bottom: 0.9375rem;

                                .label__check {
                                    @include font-work(0.875rem, 300, 0);
                                    color: $text-dark;
                                    margin-left: .5rem;

                                    a {
                                        color: $text-dark;
                                        text-decoration: underline;
                                    }
                                }
                            }
                        }

                        .form__controls {
                            width: 48%;
                            display: flex;
                            flex-direction: column;
                            margin-bottom: 1.1375rem;

                            @media ($mobile) {
                                width: 100%
                            }

                            .label__field {
                                @include font-work(1rem, 300, 0);
                                color:$text-dark;
                            }

                            .field {
                                height: 2.5625rem;
                                width: 15.5rem;
                                border-radius: 0.75rem;
                                background-color: $text-dark;
                                padding-left: 1rem;
                                color: $text;
                                border: none;
                                @include font-work(0.875rem, 400, 0);
                                color: $white;

                                @media ($mobile) {
                                    width: 100%
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
