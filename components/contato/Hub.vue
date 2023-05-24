<template slot="contato">
    <div ref="hbsptForm"></div>
</template>

<script>
export default {
    mounted() {
        this.loadHbsptForm();
    },
    methods: {
        loadHbsptForm() {
            const script = document.createElement('script');
            script.src = '//js.hsforms.net/forms/v2.js';
            script.onload = () => {
                window.hbspt.forms.create({
                    region: 'na1',
                    portalId: '22815802',
                    formId: 'd281f4fa-7233-4beb-af74-d5d04f25add4',
                });
            };
            this.$refs.hbsptForm.appendChild(script);
        },
    },
};
</script>

<style lang="scss">
.hbspt-form {
    #hsForm_d281f4fa-7233-4beb-af74-d5d04f25add4 {
        position: absolute;
        z-index: 9;
        bottom: calc(0% - 522rem);
        right: calc(50% - 32.5rem);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 27.4375rem;

        @media ($laptopMediumMax) and ($laptopMax) {
            bottom: calc(0% - 539rem);
        }

        @media ($desktopLarge) {
            bottom: calc(0% - 589rem);
        }

        @media ($mobile) {
            right: 2.875rem;
            left: 2.875rem;
            margin: auto;
            bottom: calc(0% - 565rem);
        }

        @media ($mobile) {
            width: 17.6875rem;
        }

        .hs-form-field {
            width: 100%;
            label {
                display: none;
            }

            &.hs_phone,
            &.hs_company {
                width: 48%;

                @media ($mobile) {
                    width: 100%;
                }
            }

            &.hs_termos_de_condicoes {
                display: none;
            }

            .input {
                margin-bottom: 1.25rem;

                input {
                    &[name='firstname'],
                    &[name='company'],
                    &[name='phone'],
                    &[name='email'],
                    &[name='message'] {
                        border-radius: 0.6875rem;
                        background-color: $text-dark;
                        height: 2.4375rem;
                        width: 100%;
                        @include font-work(0.9375rem, 300, 0);
                        color: $white;
                        padding: 0 1.0625rem;
                        border: none;
                    }

                    &[name='message'] {
                        height: 10.125rem;
                        border-radius: 1.125rem;
                        padding-top: 1rem;
                    }
                }

                textarea {
                    &[name='message'] {
                        border-radius: 0.6875rem;
                        background-color: $text-dark;
                        height: 2.4375rem;
                        width: 100%;
                        @include font-work(0.9375rem, 300, 0);
                        color: $white;
                        padding: 0 1.0625rem;
                        border: none;
                    }

                    &[name='message'] {
                        height: 10.125rem;
                        border-radius: 1.125rem;
                        padding-top: 1rem;
                    }
                }
            }
        }

        .hs_submit {
            margin: auto 0 auto auto;

            @media ($mobile) {
                margin: auto;
            }

            .actions {
                .hs-button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 1.125rem;
                    border: none;
                    text-transform: uppercase;
                    height: 3.4375rem;
                    @include font-work(1.25rem, 600, 0);
                    width: 9.6762rem;
                    background-color: $text-dark;
                    color: $white;
                    transition: all 0.4s;

                    @media ($mobile) {
                        width: 8.375rem;
                        height: 2.625rem;
                        font-size: 0.875rem;
                        border-radius: 0.75rem;
                    }
                }
            }
        }
    }
}
</style>
