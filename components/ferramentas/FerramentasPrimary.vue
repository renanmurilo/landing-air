<template>
    <div class="ferramentas__primary">
        <div class="shell">
            <div class="content__ferramentas">
                <h2>A FERRAMENTA IDEAL PARA GERIR MÚLTIPLOS INVESTIMENTOS</h2>
                <div class="bg-primary-gradiente"></div>

                <div class="inner__ferramentas">
                    <div class="box">
                        <div class="image">
                            <img
                                src="@/assets/images/primary/check-primary.svg"
                                alt=""
                            />
                        </div>
                        <h3>Implemente de simples e rápida</h3>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img
                                src="@/assets/images/primary/integre.png"
                                alt=""
                            />
                        </div>
                        <h3>Integre as principais casas do mercado</h3>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img
                                src="@/assets/images/primary/people-primary.svg"
                                alt=""
                            />
                        </div>
                        <h3>
                            Gerencie todo o fluxo operacional do escritório e de
                            clientes
                        </h3>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img
                                src="@/assets/images/primary/acompanhe-primary.svg"
                                alt=""
                            />
                        </div>
                        <h3>Acompanhe metas e evolução da carteira</h3>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img
                                src="@/assets/images/primary/celular-primary.svg"
                                alt=""
                            />
                        </div>
                        <h3>
                            Aproveite a usabilidade intuitiva e responsiva ao
                            mobile
                        </h3>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img
                                src="@/assets/images/primary/dolar-primary.svg"
                                alt=""
                            />
                        </div>
                        <h3>
                            Conte com atualização automática das informações de
                            mercado
                        </h3>
                    </div>
                </div>

                <a href="#simulacao" class="btn btn__black">COMECE AGORA</a>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.ferramentas__primary {
    width: 100%;
    margin: 3rem auto 5.625rem;

    .content__ferramentas {
        width: 100%;

        h2 {
            @include font-work(30px, 900, 0);
            color: $text-dark;
            text-transform: uppercase;
            max-width: 35.625rem;
            text-align: center;
            line-height: 2.875rem;
            margin: 0 auto 1rem;

            @media ($mobile) {
                font-size: 1.125rem;
                max-width: 15.25rem;
                line-height: 1.875rem;
            }
        }

        .bg-primary-gradiente {
            height: 0.5456rem;
            width: 9.4688rem;
            background: transparent
                linear-gradient(90deg, #803290 0%, #40bbe0 100%) 0% 0% no-repeat
                padding-box;
            margin: 0 auto;

            @media ($mobile) {
                width: 6.5625rem;
                height: 0.3581rem;
            }
        }

        .inner__ferramentas {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 7.8125rem;

            @media ($mobile) {
                margin-top: 2.5263rem;
                justify-content: center;
            }

            .box {
                max-width: 17.25rem;
                margin-bottom: 5.2613rem;
                display: flex;
                flex-direction: column;
                align-items: center;

                @media ($mobile) {
                    max-width: 13.875rem;
                    margin-bottom: 2.1575rem;
                }

                &:nth-child(1) {
                    margin-top: 1.2rem;

                    @media ($mobile) {
                        margin-top: 0;
                    }

                    .image {
                        @media ($mobile) {
                            max-width: 2.125rem;
                        }
                    }

                    h3 {
                        max-width: 15.5rem;

                        @media ($mobile) {
                            max-width: 12.6875rem;
                        }
                    }
                }

                &:nth-child(2) {
                    position: relative;
                    left: 0.9375rem;

                    @media ($mobile) {
                        left: 0;
                    }

                    .image {
                        max-width: 4.375rem;
                        @media ($mobile) {
                            max-width: 3.375rem;
                        }
                    }
                }

                &:nth-child(3) {
                    .image {
                        @media ($mobile) {
                            max-width: 5.0788rem;
                        }
                    }

                    h3 {
                        max-width: 15.75rem;
                    }
                }

                &:nth-child(4) {
                    .image {
                        @media ($mobile) {
                            max-width: 3.1875rem;
                        }
                    }
                }

                &:nth-child(5) {
                    .image {
                        @media ($mobile) {
                            max-width: 1.8544rem;
                        }
                    }
                }

                &:nth-child(6) {
                    @media ($mobile) {
                        max-width: 15.875rem;
                    }

                    .image {
                        @media ($mobile) {
                            max-width: 64.17px;
                        }
                    }
                }

                h3 {
                    @include font-work(1.375rem, 500, 0);
                    color: $text-dark;
                    line-height: 1.5625rem;
                    text-align: center;
                    margin-top: 1.25rem;

                    @media ($mobile) {
                        font-size: 1.125rem;
                        line-height: 1.5625rem;
                    }
                }
            }
        }
        .btn__black {
            margin: 0.375rem auto 0;
            font-size: 1.25rem;
            width: 17.0625rem;

            @media ($mobile) {
                width: 14.25rem;
                border-radius: 1.125rem;
                font-size: 0.875rem;
            }
        }
    }
}
</style>
