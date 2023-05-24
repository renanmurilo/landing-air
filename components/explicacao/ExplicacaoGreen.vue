<template>
    <div class="explicacao__green">
        <div class="shell">
            <div class="content__explicacao">
                <div class="row__wrapper">
                    <div class="image">
                        <img src="@/assets/images/green/gestao.png" alt="" />
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
                        <img src="@/assets/images/green/crm.png" alt="" />
                    </div>

                    <div class="text">
                        <h2 class="title__desk">
                            CRM <br />
                            OTIMIZADO
                        </h2>

                        <h2 class="title__mobile">CRM OTIMIZADO</h2>

                        <p>
                            Monitore toda a jornada do seu cliente desde a
                            captação até o pagamento. Agende tarefas, ações e
                            próximos vencimentos de todos os clientes
                        </p>
                    </div>
                </div>

                <div class="row__wrapper">
                    <div class="image">
                        <img
                            src="@/assets/images/green/integracao.png"
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
                        <img src="@/assets/images/green/carteira.png" alt="" />
                    </div>

                    <div class="text">
                        <h2>CLASSIFICAÇÃO DOS ATIVOS POR CLASSE E SUBCLASSE</h2>
                        <p>
                            Personalize a sua estratégia com autonomia
                            permitindo a visibilidade para gestores e clientes
                            por agrupamentos de ativos
                        </p>
                    </div>
                </div>

                <a href="#simulacao" class="btn btn__black flutuante">
                    Escolha seu plano
                </a>

                <IndexSimulacao />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.explicacao__green {
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
    }
}
</style>
