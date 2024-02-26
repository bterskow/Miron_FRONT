<template>
  <div class="position-fixed bottom-0 end-0 mb-3 me-3 z-1">
    <v-btn class="btn py-2 d-flex align-items-center" color="green" icon="mdi-phone" @click="openModalWindow">

    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'MainWidgetView',
    methods: {
      openModalWindow() {
        return this.$emit('openModalWindow');
      }
    }
  };
</script>
