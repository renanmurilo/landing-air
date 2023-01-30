<template>
    <div class="termos__de__uso">
        <div class="header__termos">
            <Header />
        </div>

        <div class="shell">
            <div class="content__termos">
                <h1>Termos De Uso</h1>
                <div class="bg-primary-gradiente"></div>
                <div class="pre__text">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla
                        pariatur
                    </p>
                </div>

                <div class="list">
                    <h2>1. LOREM IPSUM</h2>
                    <p>
                        1.1. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                        1.1. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <h2>2. LOREM IPSUM</h2>
                    <p>
                        1.1. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                        1.1. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <h2>3. LOREM IPSUM</h2>
                    <p>
                        1.1. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                        1.1. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <h2>4. LOREM IPSUM</h2>
                    <p>
                        1.1. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                        1.1. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <h2>5. LOREM IPSUM</h2>
                    <p>
                        1.1. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                        1.1. Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
    name: 'TermosDeUso',
};
</script>

<style lang="scss">
.termos__de__uso {
    width: 100%;

    .header__termos {
        background-color: $text-dark;
    }

    .content__termos {
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

        .pre__text {
            width: 100%;

            p {
                @include font-work(1.125rem, 300, 0);
                color: $text-dark;
                line-height: 2rem;

                @media ($mobile) {
                    font-size: 0.875rem;
                    line-height: 1.25rem;
                }
            }
        }

        .list {
            width: 100%;
            margin-bottom: 3.625rem;

            @media ($mobile) {
                margin-bottom: 2.5894rem;
            }

            h2 {
                @include font-work(1.375rem, 900, 0);
                color: $text-dark;
                text-transform: uppercase;
                margin: 3.4081rem 0 1.2631rem;

                @media ($mobile) {
                    margin: 1.5131rem 0 0.5131rem;
                    font-size: 1rem;
                }
            }

            p {
                @include font-work(1.125rem, 300, 0);
                color: $text-dark;
                line-height: 2rem;
                margin-bottom: 0.6381rem;

                @media ($mobile) {
                    font-size: 0.875rem;
                    margin-bottom: 0.8881rem;
                    line-height: 1.25rem;
                }
            }
        }
    }
}
</style>
