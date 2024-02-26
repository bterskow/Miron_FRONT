<template>
  <div class="modal d-block" tabindex="-1" v-if="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header">
          <h5 class="modal-title">Залиште контакти, ми передзвонимо</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" @click.prevent="closeModalWindow()"></button>
        </div>
        <div class="modal-body">
          <div class="w-100 mb-3 d-flex align-center justify-center">
            <img :src="forceImage" class="img-fluid" />
          </div>
          <v-alert
            v-if="alert.show"
            :color="alert.color"
            :icon="alert.icon"
            :text="alert.text"
            class="mb-3"
          ></v-alert>
          <v-form>
            <v-text-field
              v-model="user.name.value"
              :rules="rules"
              label="ПІБ *"
            ></v-text-field>

            <v-text-field
              type="email"
              v-model="user.email.value"
              :rules="rules"
              label="Пошта *"
            ></v-text-field>

            <v-text-field
              type="phone"
              v-model="user.phone.value"
              :rules="rules"
              :country="'UA'"
              label="Телефон *"
              @input="uaPhoneCode"
            ></v-text-field>
            <v-btn type="submit" block class="mt-2" @click.prevent="sendMessageToAdmin" :disabled="button.state" :loading="button.state">Чекатиму дзвінка</v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import sendMessage from '@/mixins/index.js';

  export default {
    name: 'MainModalWindowView',
    props: {
      dialog: Boolean,
      forceImage: Object,
    },
    mixins: [sendMessage],
    data() {
      return {
        alert: {
          show: false,
          color: "",
          icon: "",
          text: "",
        },
        user: {
          name: {
            value: ""
          },
          email: {
            value: ""
          },
          phone: {
            value: "+380"
          }
        },
        button: {
          state: false
        }
      }
    },
    methods: {
     closeModalWindow() {
      return this.$emit('closeModalWindow');
     },

     uaPhoneCode() {
      const code = "+380";
  const rex = /^[0-9+#*()-]*$/;
  if (this.user.phone.value.length < 4 || !rex.test(this.user.phone.value)) {
    this.user.phone.value = code;
  }
     },

     ifEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
     },

     createAlert(text, param) {
      const alert = this.alert;
      alert.text = text;

      if(param === 'error') {
        alert.color = 'error';
        alert.icon = '$error';
      } else if(param === 'success') {
        alert.color = 'success';
        alert.icon = '$success';
      }

      alert.show = true;
      return;
     },

     async sendMessageToAdmin() {
      this.alert.show = false;

      var text;
      var alert_param;

      const user = this.user;
      const button = this.button;

      const name = user.name.value;
      const email = user.email.value;
      const phone = user.phone.value;

      var ifEmail = this.ifEmail(email);
      var ifName = false;
      var ifPhone = false;

      name.length !== 0 ? ifName = true : false;
      phone.length === 13 ? ifPhone = true : false;

      if([ifName, ifEmail, ifPhone].includes(false)) {
        text = 'Будь-ласка, введіть усі параметри коректно!';
        alert_param = 'error';
        this.createAlert(text, alert_param);
        return;
      }

      try {
        button.state = true;
        const request = await this.sendMessage(name, email, phone);
        alert_param = request.status;
        text = request.message;
      } catch (error) {
        console.error('Error sending message:', error);
        alert_param = 'error';
        text = "Упс... Щось трапилось, спробуйте пізніше!"
      }

      this.createAlert(text, alert_param);
      button.state = false;
      return;
     }
    }
  };
</script>
