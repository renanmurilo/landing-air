<template>
    <div class="simulacao__green">
        <div class="shell">
            <div class="content__simulacao">
                <h2>
                    FAÇA UMA SIMULAÇÃO E VEJA QUAL PLANO FAZ MAIS SENTIDO PARA
                    VOCÊ!
                </h2>

                <div class="bg-primary-gradiente"></div>

                <div class="box">
                    <form action="" class="form__class">
                        <div class="form__row">
                            <div class="form__controls">
                                <p>
                                    Quantidade de clientes com
                                    <span
                                        >patrimônio líquido SUPERIOR a R$
                                        500K</span
                                    >
                                </p>

                                <input
                                    type="text"
                                    placeholder="Digite aqui..."
                                    class="field"
                                />
                            </div>

                            <div class="form__controls">
                                <p>
                                    Quantidade de clientes com
                                    <span
                                        >patrimônio líquido INFERIOR a R$
                                        500K</span
                                    >
                                </p>

                                <input
                                    type="text"
                                    placeholder="Digite aqui..."
                                    class="field"
                                />
                            </div>
                        </div>

                        <div class="form__row button">
                            <button type="submit" class="btn btn__green">
                                Simular
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.simulacao__green {
    width: 100%;
    margin: 3.7938rem auto 6.4831rem;

    @media ($mobile) {
        margin: 3.0531rem auto 3rem;
    }

    .content__simulacao {
        width: 100%;

        h2 {
            @include font-work(1.875rem, 900, 0);
            color: $text-dark;
            text-transform: uppercase;
            text-align: center;
            max-width: 42rem;
            line-height: 2.625rem;
            margin: auto auto 1.3538rem;

            @media ($mobile) {
                font-size: 1.125rem;
                line-height: 1.875rem;
                max-width: 16.4688rem;
                margin-bottom: 1rem;
            }
        }

        .bg-primary-gradiente {
            height: 0.5456rem;
            width: 9.4688rem;
            background: transparent
                linear-gradient(90deg, #0a5711 0%, #94cc33 100%) 0% 0% no-repeat
                padding-box;
            margin: auto auto 1.875rem;

            @media ($mobile) {
                width: 6.5625rem;
                height: 0.3581rem;
                margin: auto auto 2.3919rem;
            }
        }

        .box {
            background-color: #333333;
            border-radius: 1.875rem;
            padding: 4.0625rem 5.1875rem 3.1938rem;
            width: 100%;
            height: 22.625rem;

            @media ($mobile) {
                height: 32.0625rem;
                padding: 3.1875rem 2.875rem 3.5rem;
                width: 17.6875rem;
                margin: auto;
                border-radius: 2.6875rem;
            }

            .form__class {
                display: flex;
                flex-wrap: wrap;
                width: 100%;

                .form__row {
                    width: 100%;
                    display: flex;
                    justify-content: center;

                    @media ($mobile) {
                        flex-wrap: wrap;
                    }

                    &.button {
                        margin-top: 2.9625rem;

                        @media ($mobile) {
                            margin-top: 3.9531rem;
                        }

                        .btn__green {
                            font-size: 1.25rem;
                            font-weight: 600;
                            color: $text-dark;

                            @media ($mobile) {
                                width: 8.9375rem;
                                height: 2.9375rem;
                                font-size: 0.875rem;
                            }
                        }
                    }

                    .form__controls {
                        width: 50%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        @media ($mobile) {
                            width: 100%;
                            margin-bottom: 1.8906rem;
                        }

                        p {
                            @include font-work(1.25rem, 300, 0);
                            color: $white;
                            text-align: center;
                            line-height: 2.25rem;
                            margin-bottom: 1.7813rem;

                            @media ($mobile) {
                                font-size: 1rem;
                                line-height: 1.5625rem;
                                margin-bottom: 0.6563rem;
                            }

                            span {
                                font-weight: 700;
                            }
                        }

                        .field {
                            width: 14.7606rem;
                            height: 3.4375rem;
                            border-radius: 1.125rem;
                            border: 0.0625rem solid $text-dark;
                            background-color: $text-light;
                            text-align: center;
                            color: $text-dark;
                            @include font-work(1.25rem, 400, 0);

                            @media ($mobile) {
                                width: 9.9375rem;
                                height: 2.25rem;
                                border-radius: 0.75rem;
                                font-size: 0.875rem;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
