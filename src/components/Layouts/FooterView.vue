<template>
  <div class="container">
    <footer class="d-flex justify-content-between align-items-center py-3 mt-3 border-top w-100">
      <p class="mb-0 text-body-secondary">© {{ currentyYear() }}, Miron</p>

      <ul class="nav" v-for='number in phone_numbers' :key='number.id'>
        <li class="nav-item"><a :href="`tel:+38${number.replaceAll(' ', '')}`" class="nav-link px-2 text-body-secondary tel-block">{{ number }}</a></li>
      </ul>

      <a href="/" class="d-flex align-items-center justify-content-center">
        <img :src="logo" width="80" class="bi logo">
      </a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'FooterView',
    props: {
      logo: Object,
      phone_numbers: Array,
    },
    methods: {
      currentyYear() {
        return new Date().getFullYear();
      }
    }
  }
</script>
