<template>
    <div class="seguranca__secondary">
        <div class="shell">
            <div class="content__seguranca">
                <h2>
                    VEJA COMO É SIMPLES E INTUITIVO TER AGILIDADE E SEGURANÇA NA
                    GESTÃO DE INVESTIMENTOS:
                </h2>
                <div class="bg-primary-gradiente"></div>

                <div class="inner__seguranca">
                    <ul>
                        <li>
                            <img
                                src="@/assets/images/secondary/one.svg"
                                alt=""
                            />
                            Abra sua conta e cadastre seus clientes
                        </li>
                        <li>
                            <img
                                src="@/assets/images/secondary/two.svg"
                                alt=""
                            />
                            Cadastre ativos ou integre automaticamente com as
                            principais casas
                        </li>
                        <li>
                            <img
                                src="@/assets/images/secondary/three.svg"
                                alt=""
                            />
                            Defina metas, estratégias e acompanhe a
                            rentabilidade das suas carteiras
                        </li>
                        <li>
                            <img
                                src="@/assets/images/secondary/four.svg"
                                alt=""
                            />
                            Exporte estudos e relatórios detalhados
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.seguranca__secondary {
    width: 100%;
    background-image: url(@/assets/images/secondary/fundo-seguranca-desktop.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    margin-top: 4.4869rem;

    @media ($mobile) {
        background-image: url(@/assets/images/primary/banner-fundo-seguranca-mobile.png);
        height: 100%;
        margin-top: 3.5744rem;
    }

    @media ($desktopLarge) {
        padding-bottom: 20rem;
    }

    .content__seguranca {
        width: 100%;
        padding: 5.3594rem 0 8.1994rem;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        flex-direction: column;
        margin: auto 0 auto auto;

        @media ($mobile) {
            padding: 3.0088rem 0 2.1356rem;
            align-items: center;
        }

        h2 {
            @include font-work(1.875rem, 700, 0);
            color: $white;
            text-transform: uppercase;
            text-align: center;
            max-width: 61.5625rem;
            line-height: 2.625rem;
            margin-bottom: 0.6875rem;

            @media ($mobile) {
                font-size: 1.125rem;
                line-height: 1.875rem;
                max-width: 100%;
                margin-bottom: 0.6875rem;
            }
        }

        .bg-primary-gradiente {
            height: 0.5456rem;
            width: 9.4688rem;
            background: transparent
                linear-gradient(0deg, #ff6b09 0%, #ffc709 100%) 0% 0% no-repeat
                padding-box;
            margin: 0 auto 3.6225rem;

            @media ($mobile) {
                width: 6.5625rem;
                height: 0.3581rem;
                margin: auto auto 2.405rem;
            }
        }

        .inner__seguranca {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            margin: auto 0 auto auto;

            @media ($mobile) {
                justify-content: center;
                margin: auto;
            }

            ul {
                max-width: 32.5625rem;

                @media ($mobile) {
                    max-width: 100%;
                }

                li {
                    @include font-work(1.375rem, 300, 0);
                    color: $white;
                    display: flex;
                    align-items: flex-start;
                    line-height: 2.625rem;
                    margin-bottom: 1.3256rem;

                    @media ($mobile) {
                        flex-direction: column;
                        align-items: center;
                        font-size: 1rem;
                        max-width: 14.5038rem;
                        margin: auto auto 1.6162rem;
                        text-align: center;
                        line-height: 1.5625rem;
                    }

                    &:first-child {
                        max-width: 22.625rem;

                        @media ($mobile) {
                            max-width: 11.8125rem;
                        }
                    }

                    &:last-child {
                        max-width: 18.75rem;

                        @media ($mobile) {
                            max-width: 13rem;
                        }
                    }

                    img {
                        margin-right: 1.2775rem;
                        position: relative;
                        bottom: 0.375rem;

                        @media ($mobile) {
                            margin: auto;
                            bottom: initial;
                            width: 2.5069rem;
                            margin-bottom: 0.7181rem;
                        }
                    }
                }
            }
        }
    }
}
</style>
