<template>
    <div class="simulacao__green" id="simulacao">
        <div class="shell">
            <div class="content__simulacao">
                <h2>
                    FAÇA UMA SIMULAÇÃO E VEJA QUAL PLANO FAZ MAIS SENTIDO PARA
                    VOCÊ!
                </h2>

                <div class="bg-primary-gradiente"></div>

                <div class="box">
                    <form action="" class="form__class" @submit.stop.prevent="simulate">
                        <div class="form__row">
                            <div class="form__controls">
                                <p>
                                    Quantidade de clientes com
                                    <span
                                        >patrimônio líquido SUPERIOR a R$
                                        500K</span
                                    >
                                </p>

                                <input type="text" placeholder="Digite aqui..." class="field" v-model="superior" />
                            </div>

                            <div class="form__controls">
                                <p>
                                    Quantidade de clientes com
                                    <span
                                        >patrimônio líquido INFERIOR a R$
                                        500K</span
                                    >
                                </p>

                                <input type="text" placeholder="Digite aqui..." class="field" v-model="inferior" />
                            </div>
                        </div>

                        <div class="form__row button" :class="{ active: !total}">
                            <div class="total" v-if="total">
                                <h5>R$</h5>
                                <h3>{{ total }}</h3>
                                <h6>,00 <span>/mês</span></h6>
                            </div>

                            <button type="submit" class="btn btn__green">
                                Simular
                            </button>

                            <a v-if="total" @click.stop.prevent="reset" class="btn__link">Simular outro plano</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <ModalSimulacao />
    </div>
</template>

<script>
export default {
    data() {
        return {
            superior: null,
            inferior: null,
            total: null
        }
    },
    methods: {
        simulate() {
            let valorSuperior = 30;
            let valorInferior = 10;
            let valorInferiorComDesconto = 6;
            let valorSuperiorComDesconto = 20;
            let totalSuperior = this.superior * valorSuperior;
            let totalInferior = this.inferior * valorInferior;
            let total = totalSuperior + totalInferior

            if(total > 210) {
                let sobraSuperior = this.superior - 7;
                let sobraInferior = this.inferior - 21;

                if(this.superior > 7 && this.inferior > 21) {
                    this.total = 210 + (valorSuperiorComDesconto * sobraSuperior) + (valorInferiorComDesconto * sobraInferior)
                }

                if(this.superior > 7 && this.inferior <= 21) {
                    this.total = 210 + valorSuperiorComDesconto * sobraSuperior
                }

                if(this.superior <= 7 && this.inferior > 21) {
                    this.total = 210 + (valorInferiorComDesconto * sobraInferior)
                }

                if (this.inferior && this.superior == 7) {
                    this.total = 210 + (valorInferiorComDesconto * this.inferior)
                }

                if (this.superior && this.inferior == 21) {
                    this.total = 210 + (valorSuperiorComDesconto * this.superior)
                }

                if (this.superior && this.inferior > 21) {
                    this.total = 210 + (valorSuperiorComDesconto * this.superior) + (valorInferiorComDesconto * sobraInferior)
                }

                if (this.inferior && this.superior > 7) {
                    this.total = 210 + (valorInferiorComDesconto * this.inferior) + (valorSuperiorComDesconto * sobraSuperior)
                }
            } else {
                this.total = 210
            }

            this.$store.commit("SET_SHOW_SIMULACAO", true)
        },
        reset() {
            this.superior= null;
            this.inferior= null;
            this.total= null;
        }
    }
};
</script>

<style lang="scss">
.simulacao__green {
    position: relative;
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
            padding: 3.0625rem 5.1875rem 3.1938rem;
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
                        flex-wrap: wrap;

                         &.active {
                             margin-top: 2.9625rem;
                        }

                        .total {
                            display: flex;
                            justify-content:center;
                            width: 100%;
                            margin-bottom: .2rem;

                            h5 {
                                @include font-work(1.125rem, 900, 0);
                                color: $white;
                                align-self: center;
                                position: relative;
                                top: 0.625rem;
                            }

                            h3 {
                                color: $white;
                                @include font-work(2.5rem, 900, 0);
                            }

                            h6 {
                               @include font-work(1.125rem, 900, 0);
                                color: $white;
                                max-width:3.125rem;
                                line-height: 0.875rem;
                                align-self: center;

                                span {
                                    font-size: 0.75rem;
                                    font-weight: 300;
                                }
                            }
                        }

                        .btn__link {
                            @include font-work(1.125rem, 300, 0);
                            color: $white;
                            text-decoration: underline;
                            width: 100%;
                            text-align: center;
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
