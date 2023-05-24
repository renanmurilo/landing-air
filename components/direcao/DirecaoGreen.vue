<template>
    <div class="direcao__green">
        <div class="shell">
            <div class="content__direcao">
                <div class="logo__direcao">
                    <img src="@/assets/images/logo-large.svg" alt="" />
                </div>

                <div class="bg-primary-gradiente"></div>
                <h3>
                    <span>Não sabe por onde começar?</span> Te ajudaremos a
                    descobrir!
                </h3>

                <a href="#contato" class="btn btn__green">
                    CONSULTE UM DOS NOSSOS ESPECIALISTAS
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.direcao__green {
    width: 100%;
    background-image: url(@/assets/images/green/fundo-direcao-desktop.png);
    height: 100%;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 5rem;

    @media ($mobile) {
        background-image: url(@/assets/images/green/fundo-direcao-mobile.png);
    }

    @media ($desktopLarge) {
        padding-bottom: 8rem;
    }

    .content__direcao {
        width: 100%;
        padding: 7.1894rem 0 5.2825rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media ($mobile) {
            padding: 3.6694rem 0 3.8438rem;
        }

        @media ($desktopLarge) {
            padding-top: 10rem;
        }

        .logo__direcao {
            margin-bottom: 1.4219rem;

            @media ($mobile) {
                max-width: 11.125rem;
                margin-bottom: 3.105rem;
            }
        }

        h2 {
            @include font-work(1.875rem, 700, 0);
            color: $white;
            text-transform: uppercase;
            text-align: center;
            line-height: 2.625rem;
            max-width: 31.3637rem;
            margin-bottom: 1.4219rem;

            @media ($mobile) {
                font-size: 1.125rem;
                line-height: 1.875rem;
                text-align: center;
                max-width: 16.4688rem;
                margin-bottom: 1.1875rem;
            }
        }

        .bg-primary-gradiente {
            height: 0.5456rem;
            width: 9.4688rem;
            background: transparent
                linear-gradient(90deg, #0a5711 0%, #94cc33 100%) 0% 0% no-repeat
                padding-box;
            margin: auto auto 3.4225rem;

            @media ($mobile) {
                width: 6.5625rem;
                height: 0.3581rem;
                margin: auto auto 2.5863rem;
            }
        }

        h3 {
            @include font-work(1.875rem, 400, 0);
            color: $white;
            line-height: 2.625rem;
            text-align: center;
            max-width: 28.5rem;
            margin-bottom: 1.4212rem;

            @media ($mobile) {
                font-size: 1rem;
                max-width: 15.3125rem;
                line-height: 1.5625rem;
                margin-bottom: 1.25rem;
            }

            span {
                font-weight: 700;
            }
        }

        .btn__green {
            width: 31.2888rem;
            color: $text-dark;
            font-size: 1.25rem;
            margin: auto;

            @media ($mobile) {
                width: 14.25rem;
                height: 3.25rem;
                font-size: 0.875rem;
                border-radius: 1.125rem;
                text-align: center;
                border-radius: 1.125rem;
                padding: 0 1rem;
                line-height: 1.25rem;
            }
        }
    }
}
</style>
