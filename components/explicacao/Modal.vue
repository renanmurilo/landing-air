<template>
    <transition name="modal">
        <div class="modal__mask" v-if="showModal">
            <div class="modal__wrapper">
                <div class="modal__container">
                    <div class="content__modal">
                        <a
                            @click.stop.prevent="closeModal"
                            class="close__modal"
                        >
                            x
                        </a>

                        <div class="image">
                            <img :src="`_nuxt/assets/images${image}`" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['image'],
    computed: {
        ...mapGetters({
            showModal: 'GET_SHOW_MODAL',
        }),
    },
    methods: {
        closeModal() {
            this.$store.commit('SET_SHOW_MODAL', !this.showModal);
        },
    },
};
</script>

<style lang="scss">
.modal__mask {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(198, 198, 198, 0.5);
    display: table;
    transition: opacity 0.3s ease;

    &.modal-enter {
        opacity: 0;

        .modal__container {
            transform: scale(1.1);
        }
    }

    &.modal-leave-active {
        opacity: 0;

        .modal__container {
            transform: scale(1.1);
        }
    }

    .modal__wrapper {
        display: table-cell;
        vertical-align: middle;
        overflow-y: auto;

        .modal__container {
            width: 62.5rem;
            height: 40rem;
            margin: 0px auto;
            background-color: $white;
            transition: all 0.3s ease;
            position: relative;
            border-radius: 30px;

            @media (max-width: 768px) {
                width: 95%;
                margin: auto;
                height: 18.75rem;
            }

            .content__modal {
                display: flex;
                justify-content: center;
                padding: 0;
                width: 100%;
                overflow: hidden;
                margin: auto;

                .close__modal {
                    position: absolute;
                    right: 34px;
                    top: 30px;
                    @include font-work(30px, 500, 0);
                    color: $primary;
                }

                .image {
                    width: 100%;
                    height: 100%;
                    margin: auto;
                    display: flex;
                    justify-content: center;

                    img {
                        object-fit: cover;
                        width: 70%;
                        height: auto;
                        margin: auto;
                    }
                }
            }
        }
    }
}
</style>
