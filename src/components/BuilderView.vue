<template>
  <v-layout>
    <div class="d-block w-100">
      <MainWidgetView @openModalWindow="openModalWindow" />

      <HeaderView :phone_numbers="phone_numbers" @openModalWindow="openModalWindow" />

      <MainContentView @openModalWindow="openModalWindow" :logo="logo" />

      <FooterView :logo="logo" :phone_numbers="phone_numbers" />

      <MainModalWindowView :dialog="dialog" :forceImage="forceImage" @closeModalWindow="closeModalWindow" />
    </div>
  </v-layout>
</template>

<script>
  import HeaderView from '@/components/Layouts/HeaderView.vue';
  import FooterView from '@/components/Layouts/FooterView.vue';
  import MainContentView from '@/components/Contents/MainContentView.vue';
  import MainWidgetView from '@/components/Widgets/MainWidgetView.vue';
  import MainModalWindowView from '@/components/Modals/MainModalWindowView.vue';
  import Logo from '@/assets/logo.png';
  import ForceImage from '@/assets/force_modal_window.jpg';

  export default {
    name: 'BuilderView',
    components: { HeaderView,  FooterView, MainContentView, MainWidgetView, MainModalWindowView },
    data() {
      return {
        logo: Logo,
        forceImage: ForceImage,
        phone_numbers: ['096 951 04 64', '066 242 18 19'],
        dialog: false,
      }
    },
    methods: {
      closeModalWindow() {
        this.dialog = false;
      },

      openModalWindow() {
        this.dialog = true;
      }
    }
  };
</script>
