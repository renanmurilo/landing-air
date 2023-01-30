<template>
    <div class="consolidador__green">
        <div class="shell">
            <div class="content__consolidador">
                <h2>
                    O CONSOLIDADOR DE INVESTIMENTOS MAIS COMPLETO DO MERCADO
                </h2>
                <div class="bg-primary-gradiente"></div>

                <p>
                    Com uma tecnologia de ponta, a nova plataforma do grupo
                    BRITech garante um rápido processamento de múltiplas
                    carteiras de investimento e uma alta segurança dos dados
                    inseridos.
                </p>

                <a href="" class="btn btn__green">Comece agora</a>
                <a href="" class="link">Saiba mais sobre a BRITech</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.consolidador__green {
    width: 100%;
    background-image: url(@/assets/images/green/fundo-consolidador-desktop.png);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 13.4375rem 0 12.875rem;
    margin-top: -4rem;

    @media ($mobile) {
        margin-top: 0;
        padding: 2.3125rem 0 0;
        background-image: url(@/assets/images/green/fundo-consolidador-mobile.png);
        height: 45.75rem;
    }

    .content__consolidador {
        width: 100%;

        h2 {
            @include font-work(1.875rem, 900, 0);
            color: $white;
            text-transform: uppercase;
            line-height: 2.625rem;
            max-width: 30rem;
            margin-bottom: 1.1256rem;

            @media ($mobile) {
                font-size: 1.125rem;
                text-align: center;
                max-width: 16.4688rem;
                line-height: 1.875rem;
                margin: auto auto 1.4444rem;
            }
        }

        .bg-primary-gradiente {
            height: 0.5456rem;
            width: 9.4688rem;
            background: transparent
                linear-gradient(90deg, #0a5711 0%, #94cc33 100%) 0% 0% no-repeat
                padding-box;
            margin: 0 0 3.7037rem;

            @media ($mobile) {
                width: 6.5625rem;
                height: 0.3581rem;
                margin: auto auto 1.4444rem;
            }
        }

        p {
            @include font-work(1.125rem, 300, 0);
            color: $white;
            max-width: 25.5rem;
            line-height: 1.9375rem;
            margin-bottom: 2.1713rem;

            @media ($mobile) {
                font-size: 1rem;
                line-height: 1.5625rem;
                text-align: center;
                max-width: 16.6875rem;
                margin: auto auto 1.4406rem;
            }
        }

        .btn__green {
            width: 13.3125rem;
            font-size: 1.25rem;
            color: $text-dark;
            margin-bottom: 2.75rem;

            @media ($mobile) {
                width: 14.25rem;
                border-radius: 1.125rem;
                height: 2.9375rem;
                font-size: 0.875rem;
                margin: auto auto 0.5rem;
            }
        }

        .link {
            text-decoration: underline;
            @include font-work(1.125rem, 400, 0);
            color: $white;

            @media ($mobile) {
                margin: auto;
                font-size: 0.875rem;
                text-align: center;
                display: flex;
                justify-content: center;
            }
        }
    }
}
</style>
