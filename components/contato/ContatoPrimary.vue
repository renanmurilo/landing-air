<template>
    <div class="contato__primary" id="contato">
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
.contato__primary {
    width: 100%;
    padding: 9rem 0 10rem;
    position: relative;

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
            width: 100%;
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
                    linear-gradient(90deg, #803290 0%, #40bbe0 100%) 0% 0%
                    no-repeat padding-box;
                margin: 0;

                @media ($mobile) {
                    width: 6.5625rem;
                    height: 0.3581rem;
                    margin: auto;
                }
            }
        }
    }
}
</style>
