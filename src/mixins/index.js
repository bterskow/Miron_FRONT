import axios from 'axios';
import KJUR from 'jsrsasign';

export default {
  data() {
    return {
      url: this.$store.getters.getUrl,
      secret_key: this.$store.getters.getSecretKey,
    }
  },
  methods: {
    async sendMessage(name, email, phone) {
      try {
        const payload = {
          fullname: name,
          phone_number: phone,
          email: email,
        };

        const header = { alg: 'HS256', typ: 'JWT' };
        const macKey = {utf8: this.secret_key};
        const token = KJUR.jws.JWS.sign("HS256", header, payload, this.secret_key);

        const formData = new FormData();
        formData.append('data', `{"data": "${token}"}`);

        const response = await axios.post(this.url + '/send_message', formData);
        return response.data;
      } catch (error) {
        console.error('Error sending message:', error);
        return {
          status: 'error',
          message: "Упс... Щось трапилось, спробуйте пізніше!"
        }
      }
    }
  }
}
