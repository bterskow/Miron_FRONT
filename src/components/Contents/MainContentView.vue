<template>
    <div class="my-1 mb-3">
      <div class="p-5 text-center bg-body-tertiary rounded-3">
        <img :src="logo" width="200" alt="logo.png" class="bi mt-4 mb-3 logo" @click.prevent="openModalWindow" />
        <p class="col-lg-8 mx-auto fs-5 text-muted">
          Професійне виготовлення та встановлення <strong>європарканів</strong> під ключ з максимальною надією та безпекою!
        </p>
        <div class="d-flex align-center justify-center w-100 gap-2 mb-4">
          <p class="m-0 fst-italic text-decoration-overline">Дізнайтеся ціну зі знижкою 
            <v-icon aria-hidden="false">
              mdi-arrow-right
            </v-icon>
          </p>
          <button class="btn btn-outline-dark btn-lg px-4 rounded-pill" type="button" @click.prevent="openModalWindow">
            Замовити дзвінок
          </button>
        </div>
      </div>
    </div>

    <div class="album px-3 mb-3">
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body">
              <p class="card-text">Привабливі та красиві декоративні паркани, які називаються європарканами.  Такі огородження виробляються з бетону, і нараховують безліч кольорів та елегантних конструкцій.  Встановивши подібний європаркан у себе на дачі або вдома, він додасть безпеки і яскравості вашої території, заощадивши при цьому ваші кошти. </p> 
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-dark">Замовити дзвінок</button>
                </div>
                <small class="text-body-secondary">
                  <v-icon
                    size="large"
                    color="dark"
                    icon="mdi-arrow-right"
                  ></v-icon>
                </small>
              </div>
            </div>
          </div>
          <img class="bd-placeholder-img card-img-top ing-fliud" :src="content_images[0]" />
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body">
              <p class="card-text">У нашій компанії ми розуміємо, що багато хто використовує шпаклівку для обробки єврозаборів. Проте ми йдемо крок далі, рекомендуючи застосування ґрунтівки. Цей підхід відрізняє нас від інших, оскільки надає додатковий рівень захисту вашому паркану від неблагоприятних умов, що забезпечує його тривалу естетичність та міцність.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-dark" @click.prevent="openModalWindow">Замовити дзвінок</button>
                </div>
                <small class="text-body-secondary">
                  <v-icon
                    size="large"
                    color="dark"
                    icon="mdi-arrow-right"
                  ></v-icon>
                </small>
              </div>
            </div>
            <img class="bd-placeholder-img card-img-top ing-fliud" :src="content_images[1]" />
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-body">
              <p class="card-text">Однією з ключових переваг європаркану, який може бути одно- або двостороннім - це унікальна можливість імітувати будь-які поверхні. Не потрібно вкладати час та кошти у встановлення цегляного паркану, щоб ваша огорожа мала цегляний вигляд. Встановіть наш європаркан і насолоджуйтесь естетикою та практичністю без зайвих витрат.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-dark">Замовити дзвінок</button>
                </div>
                <small class="text-body-secondary">🔥🔥🔥</small>
              </div>
            </div>
            <img class="bd-placeholder-img card-img-top ing-fliud" :src="content_images[2]" />
          </div>
        </div>
      </div>
    </div>

    <div class="chart d-flex align-center justify-center mb-3 px-3 bg-body-tertiary py-3 container">
      <canvas class="canvas"></canvas>
    </div>

    <div class="d-flex align-center justify-center w-100">
      <v-col cols="12" sm="6" md="4">
        <v-btn block rounded="xl" color="primary" size="x-large" @click.prevent="openModalWindow">Вау, бажаю замовити!</v-btn>
      </v-col>
    </div>
</template>

<script>
  import FirstImage from '@/assets/content/image_1.jpg';
  import SecondImage from '@/assets/content/image_2.jpg';
  import ThirdImage from '@/assets/content/image_3.jpg';
  import Chart from 'chart.js/auto';

  export default {
    name: 'MainContentView',
    props: {
      logo: Object,
    },
    data() {
      return {
        content_images: [
          FirstImage, SecondImage, ThirdImage
        ]
      }
    },
    mounted() {
      this.uploadChart()
    },
    methods: {
      openModalWindow() {
        return this.$emit('openModalWindow');
      },

      uploadChart() {
        const ctx = document.querySelector('.canvas');
        const prevYear = new Date().getFullYear() - 1;
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
            datasets: [{
              label: `Статистика замовлень у ${prevYear} році`,
              data: [6, 3, 9, 9, 17, 25, 44, 33, 29, 18, 31, 12],
              borderWidth: 3,
              borderColor: 'green'
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            },
            plugins: {
              tooltip: {
                displayColors: false,
                callbacks: {
                  label: function (context) {
                    var month = context.label.toLowerCase();
                    var value = context.formattedValue;
                    var text = `Кількість замовлень за ${month} місяць: ${value}`

                    return text
                  },
                }
              },
              legend: {
                display: false,
              },
              subtitle: {
                display: true,
                text: `Статистика замовлень у ${prevYear} році`,
                color: 'black',
                font: {
                  size: 20,
                  family: 'tahoma',
                  weight: 'normal',
                  style: 'italic',
                },
                padding: {
                  bottom: 10
                }
              }
            }
          }
        });
      }
    }
  }
</script>
