<template>
    <footer>
        <div class="content__footer">
            <div class="shell">
                <div class="inner__footer">
                    <div class="widget">
                        <div class="logo">
                            <img src="~assets/images/logo.svg" alt="" />
                        </div>

                        <div class="sociais__desk" v-if="primary">
                            <a
                                href="https://www.instagram.com/britechglobal/"
                                target="_blank"
                                class="instagram"
                            >
                                <img
                                    src="@/assets/images/primary/instagram.svg"
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/britechsa/"
                                target="_blank"
                                class="linkedin"
                            >
                                <img
                                    src="@/assets/images/primary/linkedin.svg"
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.youtube.com/channel/UCdjaK4YxXhUr6XE8pnijUfQ"
                                target="_blank"
                                class="youtube"
                            >
                                <img
                                    src="@/assets/images/primary/youtube.svg"
                                    alt=""
                                />
                            </a>
                        </div>

                        <div class="sociais__desk" v-if="secondary">
                            <a
                                href="https://www.instagram.com/britechglobal/"
                                target="_blank"
                                class="instagram"
                            >
                                <img
                                    src="@/assets/images/secondary/instagram.svg"
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/britechsa/"
                                target="_blank"
                                class="linkedin"
                            >
                                <img
                                    src="@/assets/images/secondary/linkedin.svg"
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.youtube.com/channel/UCdjaK4YxXhUr6XE8pnijUfQ"
                                target="_blank"
                                class="youtube"
                            >
                                <img
                                    src="@/assets/images/secondary/youtube.svg"
                                    alt=""
                                />
                            </a>
                        </div>

                        <div class="sociais__desk" v-if="green">
                            <a
                                href="https://www.instagram.com/britechglobal/"
                                target="_blank"
                                class="instagram"
                            >
                                <img
                                    src="@/assets/images/green/instagram.svg"
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/britechsa/"
                                target="_blank"
                                class="linkedin"
                            >
                                <img
                                    src="@/assets/images/green/linkedin.svg"
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.youtube.com/channel/UCdjaK4YxXhUr6XE8pnijUfQ"
                                target="_blank"
                                class="youtube"
                            >
                                <img
                                    src="@/assets/images/green/youtube.svg"
                                    alt=""
                                />
                            </a>
                        </div>

                        <a
                            href="https://britech.global/"
                            target="_blank"
                            class="link__desk"
                        >
                            Acesse o site BRITech
                        </a>
                    </div>

                    <div class="widget">
                        <h3>Contato</h3>

                        <ul class="menu__footer">
                            <div class="links">
                                <li>
                                    <a href="mailto:email@britechair.com">
                                        email@britechair.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+5511900000000">
                                        +55 11 90000-0000
                                    </a>
                                </li>
                            </div>
                            <div class="links">
                                <li>
                                    <nuxt-link to="/PoliticaDePrivacidade">
                                        Política de privacidade
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/DuvidasFrequentes">
                                        Dúvidas frequentes
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/TermosDeUso">
                                        Termo de uso
                                    </nuxt-link>
                                </li>
                            </div>
                        </ul>

                        <div class="sociais__mobile" v-if="primary">
                            <a
                                href="https://www.instagram.com/britechglobal/"
                                target="_blank"
                                class="instagram"
                            >
                                <img
                                    src="@/assets/images/primary/instagram.svg"
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/britechsa/"
                                target="_blank"
                                class="linkedin"
                            >
                                <img
                                    src="@/assets/images/primary/linkedin.svg"
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.youtube.com/channel/UCdjaK4YxXhUr6XE8pnijUfQ"
                                target="_blank"
                                class="youtube"
                            >
                                <img
                                    src="@/assets/images/primary/youtube.svg"
                                    alt=""
                                />
                            </a>
                        </div>

                        <div class="sociais__mobile" v-if="secondary">
                            <a
                                href="https://www.instagram.com/britechglobal/"
                                target="_blank"
                                class="instagram"
                            >
                                <img
                                    src="@/assets/images/secondary/instagram.svg"
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/britechsa/"
                                target="_blank"
                                class="linkedin"
                            >
                                <img
                                    src="@/assets/images/secondary/linkedin.svg"
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.youtube.com/channel/UCdjaK4YxXhUr6XE8pnijUfQ"
                                target="_blank"
                                class="youtube"
                            >
                                <img
                                    src="@/assets/images/secondary/youtube.svg"
                                    alt=""
                                />
                            </a>
                        </div>

                        <div class="sociais__mobile" v-if="green">
                            <a
                                href="https://www.instagram.com/britechglobal/"
                                target="_blank"
                                class="instagram"
                            >
                                <img
                                    src="@/assets/images/green/instagram.svg"
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/britechsa/"
                                target="_blank"
                                class="linkedin"
                            >
                                <img
                                    src="@/assets/images/green/linkedin.svg"
                                    alt=""
                                />
                            </a>

                            <a
                                href="https://www.youtube.com/channel/UCdjaK4YxXhUr6XE8pnijUfQ"
                                target="_blank"
                                class="youtube"
                            >
                                <img
                                    src="@/assets/images/green/youtube.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <a
                            href="https://britech.global/"
                            target="_blank"
                            class="link__mobile"
                        >
                            Acesse o site BRITech
                        </a>
                    </div>
                </div>
            </div>

            <div class="copy">
                <p>Copyright BRITech 2022. All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            primary: 'GET_TEMPLATE_PRIMARY',
            secondary: 'GET_TEMPLATE_SECONDARY',
            green: 'GET_TEMPLATE_GREEN',
        }),
    },
};
</script>

<style lang="scss">
footer {
    width: 100%;

    .content__footer {
        background-color: #3d3333;
        border: 0.0625rem solid #707070;
        width: 100%;
        height: 21.1875rem;

        @media ($mobile) {
            height: 100%;
        }

        .inner__footer {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 4.4519rem 0 2.75rem;

            @media ($mobile) {
                flex-wrap: wrap;
                justify-content: center;
                padding: 3.8125rem 0 1.9512rem;
            }

            .widget {
                width: 20.25rem;

                @media ($mobile) {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                &:last-child {
                    width: 26.875rem;
                    margin-top: 1.375rem;

                    @media ($mobile) {
                        width: 100%;
                        margin-top: 0;
                    }
                }

                .logo {
                    margin-bottom: 3.6875rem;

                    @media ($mobile) {
                        max-width: 12.4763rem;
                        margin-bottom: 3.4431rem;
                    }
                }

                .sociais__desk {
                    margin-bottom: 3.8556rem;

                    @media ($mobile) {
                        display: none;
                    }

                    .instagram,
                    .linkedin {
                        margin-right: 1.5969rem;
                    }
                }

                .sociais__mobile {
                    display: none;

                    @media ($mobile) {
                        display: flex;
                        align-items: center;
                    }

                    .instagram,
                    .linkedin {
                        margin-right: 1.5969rem;
                    }
                }

                .link__desk {
                    text-decoration: underline;
                    @include font-work(1.125rem, 400, 0);
                    color: $white;

                    @media ($mobile) {
                        display: none;
                    }
                }

                .link__mobile {
                    display: none;

                    @media ($mobile) {
                        display: flex;
                        justify-content: center;
                        text-decoration: underline;
                        @include font-work(1.125rem, 400, 0);
                        color: $white;
                        margin-top: 0.875rem;
                    }
                }

                h3 {
                    @include font-work(1.125rem, 900, 0);
                    color: $white;
                    margin-bottom: 1.5625rem;

                    @media ($mobile) {
                        margin-bottom: 1.3125rem;
                    }
                }

                .menu__footer {
                    width: 100%;
                    max-height: 4.8125rem;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;

                    @media ($mobile) {
                        max-height: 100%;
                        align-items: center;
                    }

                    .links {
                        width: 50%;

                        @media ($mobile) {
                            width: 100%;
                        }

                        li {
                            @media ($mobile) {
                                width: 100%;
                                margin: auto;
                                display: flex;
                                justify-content: center;
                            }

                            &:last-child {
                                margin-bottom: 0;

                                @media ($mobile) {
                                    margin-bottom: 48.99px;
                                }
                            }

                            a {
                                @include font-work(1.125rem, 400, 0);
                                color: $white;
                                line-height: 2.625rem;

                                @media ($mobile) {
                                    text-align: center;
                                    font-size: 0.875rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .copy {
        height: 3.875rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $white;

        @media ($mobile) {
            height: 2.375rem;
        }

        p {
            @include font-work(0.875rem, 400, 0);
            color: #707070;

            @media ($mobile) {
                font-size: 0.75rem;
            }
        }
    }
}
</style>
