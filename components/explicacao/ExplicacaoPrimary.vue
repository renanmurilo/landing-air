<template>
    <div class="explicacao__primary">
        <div class="shell">
            <div class="content__explicacao">
                <div class="row__wrapper">
                    <div class="image">
                        <img src="@/assets/images/primary/gestao.png" alt="" />
                    </div>

                    <div class="text">
                        <h2>GESTÃO MULTICARTEIRAS</h2>
                        <p>
                            Crie subcarteiras e faça a consolidação por
                            estratégia
                        </p>
                    </div>
                </div>

                <div class="row__wrapper">
                    <div class="image">
                        <img src="@/assets/images/primary/crm.png" alt="" />
                    </div>

                    <div class="text">
                        <h2 class="title__desk">
                            CRM <br />
                            OTIMIZADO
                        </h2>

                        <h2 class="title__mobile">CRM OTIMIZADO</h2>

                        <p>
                            Monitore toda a jornada do seu cliente desde a
                            captação até o pagamento
                        </p>
                    </div>
                </div>

                <div class="row__wrapper">
                    <div class="image">
                        <img
                            src="@/assets/images/primary/integracao.png"
                            alt=""
                        />
                    </div>

                    <div class="text">
                        <h2>FÁCIL INTEGRAÇÃO E PROCESSAMENTO ONLINE</h2>
                        <p>
                            Conecte os dados de investimento do seu cliente de
                            forma automática
                        </p>
                    </div>
                </div>

                <div class="row__wrapper">
                    <div class="image">
                        <img
                            src="@/assets/images/primary/carteira.png"
                            alt=""
                        />
                    </div>

                    <div class="text">
                        <h2>CARTEIRA TEÓRICA E ACOMPANHAMENTO DE METAS</h2>
                        <p>
                            Indique metas e trabalhe a estratégia de forma
                            transparente e colaborativa
                        </p>
                    </div>
                </div>

                <a href="#simulacao" class="btn btn__black flutuante">
                    Escolha seu plano
                </a>

                <div class="inner__explicacao">
                    <h3>
                        E mais! Personalize a plataforma para ficar com a
                        identidade visual da sua empresa.
                    </h3>
                    <h2>ADICIONE SEU LOGO E ESCOLHA ATÉ 3 OPÇÕES DE CORES!</h2>
                    <h5>Faça o teste agora!</h5>

                    <div class="colors">
                        <div class="color">
                            <div class="color__style">
                                <div class="color__blue"></div>
                                <div class="color__white"></div>

                                <p>AZUL E BRANCO</p>
                            </div>

                            <a
                                class="btn btn__black"
                                @click.stop.prevent="selectPrimary"
                                >Escolher</a
                            >
                        </div>

                        <div class="color">
                            <div class="color__style">
                                <div class="color__yellow"></div>
                                <div class="color__black"></div>

                                <p>AMARELO E PRETO</p>
                            </div>

                            <a
                                class="btn btn__black"
                                @click.stop.prevent="selectSecondary"
                                >Escolher</a
                            >
                        </div>

                        <div class="color">
                            <div class="color__style">
                                <div class="color__green"></div>
                                <div class="color__white"></div>

                                <p>VERDE E BRANCO</p>
                            </div>

                            <a
                                class="btn btn__black"
                                @click.stop.prevent="selectGreen"
                                >Escolher</a
                            >
                        </div>
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
.explicacao__primary {
    width: 100%;
    padding-top: 3.3125rem;

    @media ($mobile) {
        padding-top: 3.4544rem;
    }

    .content__explicacao {
        width: 100%;

        .row__wrapper {
            display: flex;
            align-items: center;
            justify-content: space-around;
            position: relative;

            @media ($mobile) {
                flex-wrap: wrap;
                justify-content: center;
            }

            &:first-child {
                .text {
                    p {
                        max-width: 20rem;

                        @media ($mobile) {
                            max-width: 15.5rem;
                        }
                    }
                }
            }

            &:nth-child(2) {
                bottom: 3.5rem;

                @media ($mobile) {
                    bottom: initial;
                }
            }

            &:nth-child(3) {
                bottom: 8rem;

                @media ($mobile) {
                    bottom: initial;
                }
            }

            &:nth-child(4) {
                left: 4rem;
                bottom: 10rem;

                @media ($mobile) {
                    bottom: initial;
                    left: initial;
                }

                .image {
                    @media ($mobile) {
                        margin-bottom: 3.75rem;
                    }
                }

                .text {
                    h2 {
                        max-width: 22rem;
                    }
                }
            }

            &:nth-child(even) {
                .image {
                    order: 1;
                }

                .text {
                    @media ($mobile) {
                        order: 0;
                    }

                    h2 {
                        text-align: right;

                        @media ($mobile) {
                            text-align: center;
                        }
                    }

                    p {
                        text-align: right;

                        @media ($mobile) {
                            text-align: center;
                        }
                    }
                }
            }

            .image {
                @media ($mobile) {
                    order: 1;
                    width: 100%;
                }
            }

            .text {
                @media ($mobile) {
                    order: 0;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 1.875rem auto;
                }

                h2 {
                    @include font-work(1.875rem, 900, 0);
                    color: $text-dark;
                    text-transform: uppercase;
                    line-height: 2.1875rem;
                    max-width: 25.25rem;

                    @media ($mobile) {
                        font-size: 1.125rem;
                        line-height: 1.875rem;
                        max-width: 17.6875rem;
                        text-align: center;
                    }
                }

                .title__desk {
                    @media ($mobile) {
                        display: none;
                    }
                }

                .title__mobile {
                    display: none;
                    @media ($mobile) {
                        display: flex;
                    }
                }

                p {
                    @include font-work(1.125rem, 300, 0);
                    color: $text;
                    line-height: 2.1875rem;
                    max-width: 21.8125rem;

                    @media ($mobile) {
                        font-size: 0.875rem;
                        line-height: 1.25rem;
                        text-align: center;
                        max-width: 17.375rem;
                    }
                }
            }
        }

        .btn__black {
            &.flutuante {
                margin: auto;
                position: relative;
                bottom: 7rem;
                width: 17.0625rem;
                font-size: 1.25rem;
                font-weight: 600;

                @media ($mobile) {
                    bottom: initial;
                    width: 14.25rem;
                    border-radius: 1.125rem;
                    height: 2.9375rem;
                    font-size: 0.875rem;
                    margin: auto auto 3.9069rem;
                }
            }
        }

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

                    .btn__black {
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
    }
}
</style>
