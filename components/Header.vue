<template>
  <header>
    <div class="shell">
      <div class="content__header">
        <nuxt-link to="/" class="logo">
          <img src="~assets/images/logo.svg" alt="" />
        </nuxt-link>

        <a @click.stop.prevent="openMenu" class="open__menu" v-if="primary">
          <img src="@/assets/images/primary/np_menu.svg" alt="" />
        </a>

        <a @click.stop.prevent="openMenu" class="open__menu" v-if="secondary">
          <img src="@/assets/images/secondary/np_menu.svg" alt="" />
        </a>

        <a @click.stop.prevent="openMenu" class="open__menu" v-if="green">
          <img src="@/assets/images/green/np_menu.svg" alt="" />
        </a>

        <nav class="nav__bar" :class="{ active: showMenu }">
          <a @click.stop.prevent="openMenu" class="close__menu"> x </a>

          <ul class="nav__content">
            <div class="logo__nav">
              <img src="~assets/images/logo.svg" alt="" />
            </div>

            <li class="nav__link">
              <!-- <a href="#conheca" class="link"> A BRITECH </a> -->
              <a @click.stop.prevent="linkPlanos" class="link">PLANOS</a>
            </li>

            <li class="nav__link">
              <a href="/DuvidasFrequentes" class="link"> DÚVIDAS FREQUENTES </a>
            </li>

            <li class="nav__link">
              <a
                href="https://air-acesso.britech.com.br/login"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn__primary"
                :class="[{ secondary: secondary, green: green }]"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters({
      primary: "GET_TEMPLATE_PRIMARY",
      secondary: "GET_TEMPLATE_SECONDARY",
      green: "GET_TEMPLATE_GREEN",
    }),
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    openMenu() {
      this.showMenu = !this.showMenu;
    },
    linkPlanos() {
      if (
        window.location.pathname === "/DuvidasFrequentes" ||
        window.location.pathname === "/TermosDeUso" ||
        window.location.pathname === "/PoliticaDePrivacidade"
      ) {
        window.location.href = "/#simulacao";
      } else {
        window.location.href = "#simulacao";
      }
    },
  },
};
</script>

<style lang="scss">
header {
  width: 100%;
  height: 10.1875rem;

  @media ($mobile) {
    height: 4.375rem;
  }

  .content__header {
    height: 10.1875rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ($mobile) {
      height: 4.375rem;
    }

    .logo {
      @media ($mobile) {
        max-width: 7.7044rem;
      }
    }

    .open__menu {
      display: none;

      @media ($mobile) {
        display: flex;
      }
    }

    .nav__bar {
      @media ($mobile) {
        position: fixed;
        top: 0;
        right: 0;
        width: 13.25rem;
        height: 11.6875rem;
        background-color: $text-dark;
        transform: translateX(1000px);
        transition: all 0.4s;

        &.active {
          transform: translateX(0);
          transition: all 0.4s;
        }
      }

      .logo__nav {
        display: none;

        @media ($mobile) {
          display: flex;
          width: 7.7044rem;
          margin-bottom: 1.6575rem;
        }
      }

      .close__menu {
        display: none;

        @media ($mobile) {
          display: flex;
          position: absolute;
          left: 1rem;
          top: 0.5rem;
          @include font-work(1rem, 300, 0);
          color: $white;
        }
      }
      .nav__content {
        width: 100%;
        display: flex;
        align-items: center;

        @media ($mobile) {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          padding-top: 1.5rem;
        }

        .nav__link {
          @media ($mobile) {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .link {
            margin-right: 2.375rem;
            @include font-work(1rem, 400, 0);
            color: $white;
            text-transform: uppercase;

            @media ($mobile) {
              font-size: 0.625rem;
              text-align: center;
              margin: auto auto 1.4375rem;

              &:last-child {
                margin-bottom: 0;
              }
            }
          }

          .btn__primary {
            width: 5.6875rem;
            height: 2.6875rem;
            font-size: 1rem;
            color: $text;
            font-weight: 400;

            &.secondary {
              background-color: $yellow;
            }

            &.green {
              background-color: $green;
            }
          }
        }
      }
    }
  }
}
</style>
