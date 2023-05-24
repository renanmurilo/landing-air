<template>
    <div class="contato__green" id="contato">
        <div class="shell">
            <div class="content__contato">
                <div class="text">
                    <h3>Quer saber mais?</h3>
                    <h2>ENTRE EM CONTATO!</h2>
                    <div class="bg-primary-gradiente"></div>
                </div>

                <Hub>
                    <slot name="contato" />
                </Hub>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contato__green {
    width: 100%;
    padding: 9rem 0 10rem;

    @media ($mobile) {
        display: block;
        height: 40.625rem;
    }

    .content__contato {
        width: 100%;
        margin: 3.2806rem 0 2.8375rem;
        display: flex;
        align-items: center;
        height: 100%;

        @media ($mobile) {
            flex-wrap: wrap;
            justify-content: center;
            margin: 2.84rem auto 2.0587rem;
        }

        .text {
            justify-content: center;
            height: 100%;
            display: flex;
            flex-direction: column;

            @media ($mobile) {
                max-width: 100%;
                justify-content: flex-start;
                margin: 0;
            }

            h3 {
                @include font-work(1.375rem, 300, 0);
                color: $text-dark;
                line-height: 2.625rem;

                @media ($mobile) {
                    font-size: 1rem;
                    text-align: center;
                    line-height: 1.5625rem;
                }
            }

            h2 {
                @include font-work(1.875rem, 900, 0);
                color: $text-dark;
                line-height: 2.625rem;
                text-transform: uppercase;
                margin-bottom: 1.1875rem;

                @media ($mobile) {
                    font-size: 1.125rem;
                    text-align: center;
                    line-height: 1.875rem;
                    margin-bottom: 1.4444rem;
                }
            }

            .bg-primary-gradiente {
                height: 0.5456rem;
                width: 9.4688rem;
                background: transparent
                    linear-gradient(90deg, #0a5711 0%, #94cc33 100%) 0% 0%
                    no-repeat padding-box;
                margin: 0;

                @media ($mobile) {
                    width: 6.5625rem;
                    height: 0.3581rem;
                    margin: auto;
                }
            }
        }

        .form__class {
            width: 27.4375rem;

            @media ($mobile) {
                width: 17.6875rem;
                margin-top: 1.4444rem;
            }

            .form__row {
                width: 100%;
                display: flex;
                justify-content: space-between;

                @media ($mobile) {
                    flex-wrap: wrap;
                    justify-content: center;
                }

                &.button {
                    justify-content: flex-end;

                    @media ($mobile) {
                        justify-content: center;
                    }

                    .btn__green {
                        width: 9.6762rem;
                        color: $text-dark;
                        font-size: 1.25rem;

                        @media ($mobile) {
                            width: 8.375rem;
                            height: 2.625rem;
                            font-size: 0.875rem;
                            border-radius: 0.75rem;
                        }
                    }
                }

                .form__controls {
                    width: 100%;
                    margin-bottom: 1.25rem;

                    @media ($mobile) {
                        margin-bottom: 0.875rem;
                    }

                    &.w45 {
                        width: 45%;

                        @media ($mobile) {
                            width: 100%;
                        }
                    }

                    .field {
                        border-radius: 0.6875rem;
                        background-color: $green;
                        height: 2.4375rem;
                        width: 100%;
                        @include font-work(0.9375rem, 300, 0);
                        color: $grenn-ligth;
                        padding: 0 1.0625rem;
                        border: none;

                        &::placeholder {
                            color: $grenn-ligth;
                        }

                        &[name='message'] {
                            height: 10.125rem;
                            border-radius: 1.125rem;
                            padding-top: 1rem;
                        }

                        @media ($mobile) {
                            font-size: 0.875rem;
                            border-radius: 0.75rem;
                        }
                    }
                }
            }
        }
    }
}
</style>
