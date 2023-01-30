<template>
    <div class="banner__secondary">
        <Header />

        <div class="shell">
            <div class="content__banner">
                <h6>MUITO MAIS QUE UM CONSOLIDADOR DE CARTEIRAS</h6>
                <h1>
                    A TECNOLOGIA QUE IMPULSIONA A SUA ASSESSORIA, OTIMIZANDO A
                    JORNADA E A INTERFACE COM O CLIENTE DE PONTA A PONTA
                </h1>
                <div class="bg-primary-gradiente"></div>
                <p>
                    Nunca foi tão fácil analisar, consolidar e monitorar
                    carteiras de investimento. Visualize de forma detalhada e
                    controle com inteligência os portfólios sob gestão.
                </p>

                <a href="" class="btn btn__secondary"> Escolha o seu plano </a>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    components: { Header },
};
</script>

<style lang="scss">
.banner__secondary {
    width: 100%;
    background-image: url(@/assets/images/secondary/banner-secondary.png);
    background-repeat: no-repeat;
    background-position: top center;
    height: 100%;
    background-size: cover;
    padding: 0 0 6.125rem;

    @media ($mobile) {
        background-image: url(@/assets/images/secondary/banner-secondary-mobile.png);
    }

    @media ($desktopLarge) {
        padding-bottom: 25rem;
    }

    .content__banner {
        width: 100%;
        margin-top: 4.8125rem;

        @media ($mobile) {
            margin-top: 1.6875rem;
        }

        h6 {
            color: $text-light;
            text-transform: uppercase;
            @include font-work(1.125rem, 300, 0);
            line-height: 1.3125rem;
            margin-bottom: 1rem;

            @media ($mobile) {
                font-size: 0.75rem;
                line-height: 1.25rem;
                max-width: 11.5625rem;
                margin-bottom: 0.5rem;
            }
        }

        h1 {
            @include font-work(1.875rem, 900, 0);
            color: $white;
            text-transform: uppercase;
            max-width: 44.5rem;
            line-height: 2.875rem;
            margin-bottom: 1.8919rem;

            @media ($mobile) {
                font-size: 1.25rem;
                line-height: 1.875rem;
                max-width: 17.375rem;
            }
        }

        .bg-primary-gradiente {
            height: 0.5456rem;
            width: 9.4688rem;
            background: transparent
                linear-gradient(0deg, #ff6b09 0%, #ffc709 100%) 0% 0% no-repeat
                padding-box;
            margin-bottom: 1.875rem;

            @media ($mobile) {
                width: 6.5625rem;
                height: 0.3581rem;
                margin-bottom: 2.2669rem;
            }
        }

        p {
            @include font-work(1.25rem, 300, 0);
            color: $text-light;
            line-height: 2.25rem;
            max-width: 33.125rem;
            margin-bottom: 5.125rem;

            @media ($mobile) {
                max-width: 14.5rem;
                font-size: 0.875rem;
                margin-bottom: 1.6875rem;
                line-height: 1.25rem;
            }
        }

        .btn__secondary {
            height: 3.1875rem;
            width: 15.5625rem;
            color: $text-dark;
            border: $blue-dark;
        }
    }
}
</style>
