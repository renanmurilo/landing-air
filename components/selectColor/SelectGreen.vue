<template>
    <div class="body__select__color">
        <div class="shell">
            <div class="inner__explicacao">
                <h3>E mais! Personalize a plataforma do seu jeito</h3>
                <h2>ADICIONE SEU LOGO E ESCOLHA A PALETA DE CORES!</h2>

                <div class="colors">
                    <div class="color">
                        <div class="color__style">
                            <div class="color__blue"></div>
                            <div class="color__white"></div>

                            <p>AZUL E BRANCO</p>
                        </div>

                        <a
                            class="btn btn__green"
                            @click.stop.prevent="selectPrimary"
                        >
                            Escolher
                        </a>
                    </div>

                    <div class="color">
                        <div class="color__style">
                            <div class="color__yellow"></div>
                            <div class="color__black"></div>

                            <p>AMARELO E PRETO</p>
                        </div>

                        <a
                            class="btn btn__green"
                            @click.stop.prevent="selectSecondary"
                        >
                            Escolher
                        </a>
                    </div>

                    <div class="color">
                        <div class="color__style">
                            <div class="color__green"></div>
                            <div class="color__white"></div>

                            <p>VERDE E BRANCO</p>
                        </div>

                        <a
                            href=""
                            class="btn btn__green"
                            @click.stop.prevent="selectGreen"
                        >
                            Escolher
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        selectPrimary() {
            this.$store.commit('SET_TEMPLATE_PRIMARY', true);
            this.$store.commit('SET_TEMPLATE_SECONDARY', false);
            this.$store.commit('SET_TEMPLATE_GREEN', false);
        },
        selectSecondary() {
            this.$store.commit('SET_TEMPLATE_PRIMARY', false);
            this.$store.commit('SET_TEMPLATE_SECONDARY', true);
            this.$store.commit('SET_TEMPLATE_GREEN', false);
        },
        selectGreen() {
            this.$store.commit('SET_TEMPLATE_PRIMARY', false);
            this.$store.commit('SET_TEMPLATE_SECONDARY', false);
            this.$store.commit('SET_TEMPLATE_GREEN', true);
        },
    },
};
</script>

<style lang="scss">
.inner__explicacao {
    width: 100%;

    h3 {
        @include font-work(1.375rem, 300, 0);
        color: $text;
        text-align: center;
        margin-bottom: 1.0625rem;

        @media ($mobile) {
            font-size: 1rem;
            line-height: 1.5625rem;
            text-align: center;
            max-width: 15.625rem;
            margin: auto auto 1.3125rem;
        }
    }

    h2 {
        @include font-work(1.875rem, 900, 0);
        color: $text-dark;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 1.1875rem;

        @media ($mobile) {
            font-size: 1rem;
            line-height: 1.875rem;
            max-width: 16.3125rem;
            margin: auto auto 1.3125rem;
        }
    }

    h5 {
        @include font-work(1.375rem, 300, 0);
        color: $text;
        text-decoration: underline;
        text-align: center;

        @media ($mobile) {
            font-size: 1rem;
            line-height: 1.875rem;
        }
    }

    .colors {
        display: flex;
        width: 100%;
        margin-top: 3.5625rem;
        justify-content: space-between;

        @media ($mobile) {
            flex-wrap: wrap;
            justify-content: center;
            flex-direction: column;
            margin-top: 1rem;
        }

        .color {
            display: flex;
            flex-direction: column;
            align-items: center;

            @media ($mobile) {
                margin-bottom: 2.5944rem;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            .color__style {
                width: 12.3125rem;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                @media ($mobile) {
                    width: 8.375rem;
                }

                .color__blue {
                    width: 5.0625rem;
                    height: 5.0625rem;
                    border-radius: 100%;
                    background-color: $primary;

                    @media ($mobile) {
                        width: 3.11rem;
                        height: 3.11rem;
                    }
                }

                .color__yellow {
                    width: 5.0625rem;
                    height: 5.0625rem;
                    border-radius: 100%;
                    background-color: $yellow;
                    border: 0.0625rem solid $text-light;

                    @media ($mobile) {
                        width: 3.11rem;
                        height: 3.11rem;
                    }
                }

                .color__black {
                    width: 5.0625rem;
                    height: 5.0625rem;
                    border-radius: 100%;
                    background-color: $black;
                    border: 0.0625rem solid $text-light;

                    @media ($mobile) {
                        width: 3.11rem;
                        height: 3.11rem;
                    }
                }

                .color__green {
                    width: 5.0625rem;
                    height: 5.0625rem;
                    border-radius: 100%;
                    background-color: $green;
                    border: 0.0625rem solid $text-light;

                    @media ($mobile) {
                        width: 3.11rem;
                        height: 3.11rem;
                    }
                }

                .color__white {
                    width: 5.0625rem;
                    height: 5.0625rem;
                    border-radius: 100%;
                    border: 0.0625rem solid $primary;

                    @media ($mobile) {
                        width: 3.11rem;
                        height: 3.11rem;
                    }
                }

                p {
                    @include font-work(1.375rem, 300, 0);
                    color: $text;
                    margin-top: 0.6875rem;
                    width: 100%;
                    text-align: center;

                    @media ($mobile) {
                        font-size: 0.875rem;
                        margin-top: 0.6875rem;
                    }
                }
            }

            .btn__green {
                margin-top: 2.4681rem;

                @media ($mobile) {
                    width: 8.375rem;
                    height: 2.625rem;
                    font-size: 0.875rem;
                    margin-top: 0.7181rem;
                    border-radius: 0.75rem;
                }
            }
        }
    }
}
</style>
