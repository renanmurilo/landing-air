<template>
    <div class="agilidade__secondary">
        <div class="content__agilidade">
            <client-only>
                <slick class="slider" :options="slickOptions">
                    <div class="banner__image">
                        <img
                            class="image__desk"
                            src="@/assets/images/secondary/banner-agilidade.png"
                        />

                        <img
                            class="image__mobile"
                            src="@/assets/images/secondary/fundo-agilidade-mobile.png"
                        />

                        <div class="text">
                            <h2>
                                MUITO MAIS QUE UM CONSOLIDADOR DE CARTEIRAS DE
                                INVESTIMENTO
                            </h2>
                            <p>
                                Uma solução pensada para facilitar todo o seu
                                processo!
                            </p>
                        </div>
                    </div>

                    <div class="banner__image">
                        <img
                            class="image__desk"
                            src="@/assets/images/secondary/banner-agilidade.png"
                        />

                        <img
                            class="image__mobile"
                            src="@/assets/images/secondary/fundo-agilidade-mobile.png"
                        />

                        <div class="text">
                            <h2>
                                GANHE AGILIDADE EM SUA OPERAÇÃO E FOQUE NO QUE
                                REALMENTE IMPORTA:
                            </h2>
                            <p>
                                a rentabilidade e a saúde financeira dos seus
                                clientes.
                            </p>
                        </div>
                    </div>
                </slick>
            </client-only>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slickOptions: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            },
        };
    },
};
</script>

<style lang="scss">
.agilidade__secondary {
    width: 100%;

    .content__agilidade {
        width: 100%;
        height: 100%;

        .slider {
            width: 100%;

            @media ($mobile) {
                height: 33.75rem;
            }

            @media ($desktopLarge) {
                height: 100%;
            }

            .banner__image {
                height: 100%;
                position: relative;
                width: 100%;

                .image__desk {
                    width: 100%;

                    @media ($mobile) {
                        display: none;
                    }

                    img {
                        height: 100%;
                        width: 100%;
                        max-width: 100%;
                    }
                }

                .image__mobile {
                    display: none;
                    @media ($mobile) {
                        display: block;
                        width: 100%;

                        img {
                            height: 100%;
                            width: 100%;
                            max-width: 100%;
                        }
                    }
                }

                .text {
                    position: absolute;
                    top: 0;
                    bottom: 3rem;
                    right: calc(50% - 35rem);
                    width: 100%;
                    margin: auto 0 auto auto;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: center;

                    @media ($mobile) {
                        justify-content: initial;
                        right: initial;
                        bottom: initial;
                        margin: auto;
                        align-items: center;
                        top: 2.75rem;
                    }

                    h2 {
                        @include font-work(1.875rem, 900, 0);
                        color: $white;
                        text-transform: uppercase;
                        line-height: 2.625rem;
                        max-width: 27.4375rem;
                        margin-bottom: 2rem;

                        @media ($mobile) {
                            font-size: 1.125rem;
                            line-height: 1.875rem;
                            max-width: 16.4375rem;
                            text-align: center;
                            margin-bottom: 1.25rem;
                        }
                    }

                    p {
                        @include font-work(1.875rem, 300, 0);
                        color: $white;
                        line-height: 2.625rem;
                        max-width: 27.4375rem;
                        position: relative;

                        @media ($mobile) {
                            font-size: 1.125rem;
                            font-weight: 500;
                            max-width: 15.6563rem;
                            line-height: 1.5625rem;
                            text-align: center;
                        }

                        &::before {
                            content: '';
                            height: 0.5456rem;
                            width: 9.4688rem;
                            background: transparent
                                linear-gradient(0deg, #ff6b09 0%, #ffc709 100%)
                                0% 0% no-repeat padding-box;
                            position: absolute;
                            bottom: -1.8125rem;

                            @media ($mobile) {
                                margin: auto;
                                left: 0;
                                right: 0;
                                width: 6.5625rem;
                                height: 0.3581rem;
                                bottom: -1.25rem;
                            }
                        }
                    }
                }
            }

            .slick-dots {
                bottom: 1.5rem;

                li {
                    margin: 0 0.4375rem;

                    @media ($mobile) {
                        margin: 0 0.1rem;
                    }

                    button {
                        &::before {
                            color: $white;
                            font-size: 0.875rem;
                            opacity: 1;

                            @media ($mobile) {
                                font-size: 0.375rem;
                            }
                        }
                    }

                    &.slick-active {
                        button {
                            &::before {
                                color: $yellow;
                                font-size: 0.875rem;

                                @media ($mobile) {
                                    font-size: 0.375rem;
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
