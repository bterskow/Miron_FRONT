<template>
  <div class="d-block w-100">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom px-3">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none display-6">
          Miron
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" v-for='number in phone_numbers' :key='number.id'>
        <li><a :href="`tel:+38${number.replaceAll(' ', '')}`" class="nav-link px-2 link-secondary tel-block">{{ number }}</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-dark me-2" @click.prevent="openModalWindow">Вам передзвонити?</button>
      </div>
    </header>

    <v-carousel hide-delimiters cycle class="mb-3">
      <v-carousel-item
        v-for="(item,i) in carousel_images"
        :key="i"
        :src="item"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  import FirstImage from '@/assets/carousel/image_1.jpg';
  import SecondImage from '@/assets/carousel/image_2.jpg';
  import ThirdImage from '@/assets/carousel/image_3.jpg';
  import FourImage from '@/assets/carousel/image_4.jpg';

  export default {
    name: 'HeaderView',
    props: {
      phone_numbers: Array
    },
    data() {
      return {
        carousel_images: [
          FirstImage, SecondImage, ThirdImage, FourImage
        ]
      }
    },
    methods: {
      openModalWindow() {
        return this.$emit('openModalWindow');
      }
    }
  }
</script>
