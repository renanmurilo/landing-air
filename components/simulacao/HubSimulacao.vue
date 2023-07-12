<template>
  <div ref="loadHbsptSimulacao"></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      showContato: "GET_SHOW_CONTATO",
    }),
  },
  mounted() {
    this.loadHbsptSimulacao();
  },
  watch: {
    showContato() {
      if (this.showContato) {
        console.log(this.showContato);
        const scriptSimnular = document.createElement("script");
        scriptSimnular.src = "//js.hsforms.net/forms/embed/v2.js";
        scriptSimnular.onload = () => {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "22815802",
            formId: "0bc395f1-9833-4ec6-8b91-2381633ce649",
          });
        };
        this.$refs.loadHbsptSimulacao.appendChild(scriptSimnular);
      }
    },
  },
  methods: {
    loadHbsptSimulacao() {
      const scriptSimnular = document.createElement("script");
      scriptSimnular.src = "//js.hsforms.net/forms/embed/v2.js";
      scriptSimnular.onload = () => {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "22815802",
          formId: "0bc395f1-9833-4ec6-8b91-2381633ce649",
        });
      };
      this.$refs.loadHbsptSimulacao.appendChild(scriptSimnular);
    },
  },
};
</script>

<style lang="scss">
.hbspt-form {
  height: 100%;
  #hsForm_0bc395f1-9833-4ec6-8b91-2381633ce649 {
    position: fixed;
    z-index: 99;
    inset: 0;
    margin: auto;
    width: 40.3125rem;
    height: 22.625rem;
    background-color: $white;
    transition: all 0.3s ease;
    border-radius: 1.75rem;
    padding: 4.6875rem 3.8125rem;
    background-color: $white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition: opacity 0.3s ease;

    @media (max-width: 768px) {
      width: 95%;
      margin: auto;
      height: 35.625rem;
    }

    &::after {
      content: "Para simular seu plano, insira os dados abaixo:";
      @include font-work(1.125rem, 300, 0);
      color: $text-dark;
      text-align: center;
      margin-bottom: 1.625rem;
      position: absolute;
      top: 2rem;
      left: 0;
      right: 0;
      margin: auto;

      @media ($mobile) {
        font-size: 0.85rem;
      }
    }

    &::before {
      content: "";
      width: 200vw;
      height: 200vh;
      background: rgba(198, 198, 198, 0.4);
      position: absolute;
      z-index: -1;
      left: -100%;
      top: -80%;
      margin: 0;

      @media ($mobile) {
        width: 150vw;
        left: -10%;
        top: -20%;
        height: 150vh;
      }
    }

    .hs-form-0bc395f1-9833-4ec6-8b91-2381633ce649 {
      display: none;
    }

    .hs-form-field {
      width: 48%;
      height: 2.5625rem;

      @media ($mobile) {
        width: 100%;
      }

      &.hs_phone,
      &.hs_firstname,
      &.hs_lastname,
      &.hs_email {
        margin-bottom: 1.25rem;
        label {
          display: none;
        }
      }

      .input {
        margin-bottom: 1.25rem;

        input {
          &[name="firstname"],
          &[name="lastname"],
          &[name="phone"],
          &[name="email"] {
            height: 2.5625rem;
            width: 100%;
            border-radius: 0.75rem;
            background-color: $text-dark;
            padding-left: 1rem;
            color: $text;
            border: none;
            @include font-work(0.875rem, 400, 0);
            color: $white;

            @media ($mobile) {
              width: 100%;
            }
          }
        }
      }
    }

    .legal-consent-container {
      width: 100%;

      .hs-form-field {
        width: 100%;
        height: 1.5rem;
      }
    }
    .legal-consent-container .hs-error-msgs label {
      position: relative;
      bottom: 1.4rem;
    }

    .hs_error_rollup {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;

      .no-list {
        display: flex;
        justify-content: center;

        .hs-main-font-element {
          text-align: center;
          width: 100%;
        }
      }
    }

    .hs_submit {
      margin: auto;

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
          width: 15.6762rem;
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
