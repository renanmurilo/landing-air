<template>
    <div class="duvidas__frequentes">
        <div class="header__duvidas">
            <Header />
        </div>

        <div class="shell">
            <div class="content__duvidas">
                <h1>DÚVIDAS FREQUENTES</h1>
                <div class="bg-primary-gradiente"></div>

                <div class="inner__duvidas">
                    <div
                        class="accordeon"
                        :class="{ active: showAccordeon === 1 }"
                    >
                        <h3
                            :class="{ active: showAccordeon === 1 }"
                            @click.stop.prevent="openAccondeon(1)"
                        >
                            COMO FAÇO PARA ME TORNAR UM CLIENTE?

                            <img src="@/assets/images/arrow-down.svg" alt="" />
                        </h3>

                        <div
                            class="description"
                            :class="{ active: showAccordeon === 1 }"
                        >
                            <p>
                                Entre em contato conosco via e-mail, por
                                telefone ou através do nosso representante em
                                sua região. Todo cliente deve ser pessoa
                                jurídica. As vendas de ferramentas são feitas
                                somente no atacado, existindo uma política de
                                faturamento mínimo.
                            </p>
                        </div>
                    </div>

                    <div
                        class="accordeon"
                        :class="{ active: showAccordeon === 2 }"
                    >
                        <h3
                            :class="{ active: showAccordeon === 2 }"
                            @click.stop.prevent="openAccondeon(2)"
                        >
                            Como cadastrar um cliente?

                            <img src="@/assets/images/arrow-down.svg" alt="" />
                        </h3>

                        <div
                            class="description"
                            :class="{ active: showAccordeon === 2 }"
                        >
                            <p>
                                Basta acessar o menu de clientes e efetuar uma
                                nova inclusão. Importante falar que um cliente
                                não possui uma carteira, ou seja, seu cliente
                                poderá ter mais de uma carteira, caso seja uma
                                família, ou caso ele queira ver os investimentos
                                de forma segregada.
                            </p>
                        </div>
                    </div>

                    <div
                        class="accordeon"
                        :class="{ active: showAccordeon === 3 }"
                    >
                        <h3
                            :class="{ active: showAccordeon === 3 }"
                            @click.stop.prevent="openAccondeon(3)"
                        >
                            Como faço para integrar contas?

                            <img src="@/assets/images/arrow-down.svg" alt="" />
                        </h3>

                        <div
                            class="description"
                            :class="{ active: showAccordeon === 3 }"
                        >
                            <p>
                                Depois de cadastrado uma carteira, no comando de
                                conectar contas, você poderá buscar os
                                investimentos realizados nas casas disponíveis,
                                informando os dados das contas e as credenciais
                                necessárias.
                            </p>
                        </div>
                    </div>

                    <div
                        class="accordeon"
                        :class="{ active: showAccordeon === 4 }"
                    >
                        <h3
                            :class="{ active: showAccordeon === 4 }"
                            @click.stop.prevent="openAccondeon(4)"
                        >
                            Como minha carteira é atualizada?

                            <img src="@/assets/images/arrow-down.svg" alt="" />
                        </h3>

                        <div
                            class="description"
                            :class="{ active: showAccordeon === 4 }"
                        >
                            <p>
                                A cada nova movimentação a posição da sua
                                carteira já será atualizada, com preço de compra
                                do ativo. Caso esse já exista, ficará com o
                                preço de aquisição. Já o preço atualizado
                                ocorrerá de forma automática de um dia para o
                                outro, com o fechamento dos mercados.
                            </p>
                        </div>
                    </div>

                    <div
                        class="accordeon"
                        :class="{ active: showAccordeon === 5 }"
                    >
                        <h3
                            :class="{ active: showAccordeon === 5 }"
                            @click.stop.prevent="openAccondeon(5)"
                        >
                            Posso ter operações manuais e integradas?

                            <img src="@/assets/images/arrow-down.svg" alt="" />
                        </h3>

                        <div
                            class="description"
                            :class="{ active: showAccordeon === 5 }"
                        >
                            <p>
                                Sim. O sistema irá consolidar as operações
                                integradas, bem como aquelas colocadas
                                manualmente, somando todas as posições.
                            </p>
                        </div>
                    </div>

                    <div
                        class="accordeon"
                        :class="{ active: showAccordeon === 6 }"
                    >
                        <h3
                            :class="{ active: showAccordeon === 6 }"
                            @click.stop.prevent="openAccondeon(6)"
                        >
                            Como funciona o acompanhamento da carteira, frente
                            aos meus objetivos?

                            <img src="@/assets/images/arrow-down.svg" alt="" />
                        </h3>

                        <div
                            class="description"
                            :class="{ active: showAccordeon === 6 }"
                        >
                            <p>
                                Você pode incluir notas de acompanhamento da
                                carteira, como decisões de realocação, objetivos
                                a serem alcançados, reunião com clientes,
                                através do recurso de acompanhamento disponível
                                no dashboard. Você poderá colocar a data e o
                                texto que desejar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
    name: 'DuvidasFrequentes',
    data() {
        return {
            showAccordeon: null,
        };
    },
    methods: {
        openAccondeon(i) {
            if (this.showAccordeon === null) {
                this.showAccordeon = i;
            } else if (this.showAccordeon !== i) {
                this.showAccordeon = null;
                this.showAccordeon = i;
            } else {
                this.showAccordeon = null;
            }
        },
    },
};
</script>

<style lang="scss">
.duvidas__frequentes {
    width: 100%;

    .header__duvidas {
        background-color: $text-dark;
    }

    .content__duvidas {
        width: 100%;
        padding-top: 4.1875rem;

        @media ($mobile) {
            padding-top: 2.9375rem;
        }

        h1 {
            @include font-work(1.875rem, 900, 0);
            color: $text-dark;
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 0.5837rem;
            line-height: 2.1875rem;

            @media ($mobile) {
                font-size: 1.25rem;
                line-height: 1.875rem;
                margin-bottom: 1.0625rem;
            }
        }

        .bg-primary-gradiente {
            height: 0.5456rem;
            width: 9.4688rem;
            background: transparent
                linear-gradient(90deg, #803290 0%, #40bbe0 100%) 0% 0% no-repeat
                padding-box;
            margin: auto auto 4.1875rem;

            @media ($mobile) {
                width: 6.5625rem;
                height: 0.3581rem;
                margin-bottom: 2.9375rem;
            }
        }

        .inner__duvidas {
            width: 100%;
            margin-bottom: 3.4006rem;

            .accordeon {
                width: 100%;
                height: 4.125rem;
                margin-bottom: 1.5137rem;
                transition: all 0.4s;

                @media ($mobile) {
                    margin-bottom: 1.5225rem;
                }

                &.active {
                    height: 100%;
                    transition: all 0.4s;
                }

                h3 {
                    @include font-work(1.375rem, 900, 0);
                    color: $text-dark;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-bottom: 1.2813rem;
                    text-transform: uppercase;
                    margin-bottom: 1.3438rem;
                    border-bottom: 0.1875rem solid $blue;
                    cursor: pointer;
                    transition: all 0.4s;

                    @media ($mobile) {
                        font-size: 1rem;
                        line-height: 1.5625rem;
                        padding-bottom: 0.5rem;
                        margin-bottom: 1.0938rem;
                    }

                    img {
                        margin-right: 4.375rem;
                        transform: rotateX(0);
                        transition: all 0.4s;

                        @media ($mobile) {
                            margin-right: 0;
                        }
                    }

                    &.active {
                        color: $text-dark;
                        transition: all 0.4s;

                        img {
                            transform: rotateX(180deg);
                            transition: all 0.4s;
                        }
                    }
                }

                .description {
                    width: 100%;
                    height: 0%;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.4s;

                    &.active {
                        height: 100%;
                        opacity: 1;
                        visibility: visible;
                        transition: all 0.4s;
                    }

                    p {
                        @include font-work(1.125rem, 300, 0);
                        color: $text-dark;
                        line-height: 1.5rem;
                        max-width: 95%;

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
</style>
