<template>
    <div class="conheca__primary" id="conheca">
        <div class="shell">
            <div class="content__conheca">
                <h2>CONHEÇA A BRITECH</h2>

                <div class="inner__conheca">
                    <div class="text">
                        <p>
                            Nossas soluções estão no cenário desde 2017,
                            apoiadas por mais de 10 parceiros em todo o mundo.
                        </p>
                        <p>
                            Com o nosso trabalho, alcançamos reconhecimento
                            internacional e estamos indo além para criar nossos
                            próprios padrões de excelência.
                        </p>
                        <a
                            href="https://britech.global/"
                            target="_blank"
                            class="link"
                            >Saiba mais</a
                        >
                    </div>

                    <div class="icons">
                        <div class="icon">
                            <div class="image">
                                <img
                                    src="@/assets/images/primary/acompanhe-primary.svg"
                                    alt=""
                                />
                            </div>

                            <div class="text">
                                <h3>+ 1 MILHÃO</h3>
                                <p>de posições processadas por dia</p>
                            </div>
                        </div>

                        <div class="icon">
                            <div class="image">
                                <img
                                    src="@/assets/images/primary/bilhoes.svg"
                                    alt=""
                                />
                            </div>

                            <div class="text">
                                <h3>+ USD 600 BILHÕES</h3>
                                <p>de ativos sob custódia (AUC)</p>
                            </div>
                        </div>

                        <div class="icon">
                            <div class="image">
                                <img
                                    src="@/assets/images/primary/clientes.svg"
                                    alt=""
                                />
                            </div>

                            <div class="text">
                                <h3>+ 840</h3>
                                <p>clientes globais</p>
                            </div>
                        </div>

                        <div class="icon">
                            <div class="image">
                                <img
                                    src="@/assets/images/primary/mundo.svg"
                                    alt=""
                                />
                            </div>

                            <div class="text">
                                <h3>+ 22 PAÍSES</h3>
                                <p>atendidos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.conheca__primary {
    width: 100%;
    margin-top: 5.8569rem;

    @media ($mobile) {
        margin-top: 2.7963rem;
    }

    .content__conheca {
        width: 100%;

        h2 {
            @include font-work(1.875rem, 700, 0);
            color: $text-dark;
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 4.3125rem;

            @media ($mobile) {
                font-size: 1.125rem;
                font-weight: 900;
                margin-bottom: 1.4444rem;
            }
        }

        .inner__conheca {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            @media ($mobile) {
                justify-content: center;
            }

            .text {
                max-width: 27.4375rem;
                margin-top: 2.5rem;

                @media ($mobile) {
                    max-width: 17.6875rem;
                    margin-top: 0;
                    width: 100%;
                    margin: auto;
                }

                p {
                    @include font-work(1.375rem, 300, 0);
                    color: $text-dark;
                    line-height: 1.9375rem;
                    margin-bottom: 1.8819rem;

                    @media ($mobile) {
                        font-size: 1rem;
                        line-height: 1.5625rem;
                        text-align: center;
                        margin-bottom: 1rem;
                    }
                }

                .link {
                    @include font-work(1.125rem, 300, 0);
                    color: $text-dark;
                    text-decoration: underline;

                    @media ($mobile) {
                        font-size: 0.875rem;
                        text-align: center;
                        width: 100%;
                        margin: auto;
                        display: flex;
                        justify-content: center;
                    }
                }
            }

            .icons {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                max-width: 30.125rem;

                @media ($mobile) {
                    justify-content: center;
                    max-width: 9.375rem;
                    margin-top: 2.0994rem;
                }

                .icon {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    width: 49%;
                    margin-bottom: 1.2744rem;

                    @media ($mobile) {
                        width: 100%;
                        margin-bottom: 1.4444rem;
                    }

                    &:nth-child(2) {
                        position: relative;
                        top: 1rem;

                        @media ($mobile) {
                            top: initial;
                        }

                        .text {
                            p {
                                max-width: 10.9375rem;
                                margin: auto;

                                @media ($mobile) {
                                    max-width: 8.4375rem;
                                }
                            }
                        }
                    }

                    .image {
                        max-width: 4.25rem;

                        @media ($mobile) {
                            max-width: 3.25rem;
                        }
                    }

                    .text {
                        margin-top: 1.025rem;

                        h3 {
                            @include font-work(1.375rem, 700, 0);
                            color: $text-dark;
                            text-transform: uppercase;
                            text-align: center;
                            margin-bottom: 0.375rem;

                            @media ($mobile) {
                                font-size: 1.125rem;
                            }
                        }
                        p {
                            @include font-work(1.125rem, 300, 0);
                            color: $text-dark;
                            line-height: 1.5625rem;
                            text-align: center;

                            @media ($mobile) {
                                font-size: 0.875rem;
                                line-height: 1.25rem;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
