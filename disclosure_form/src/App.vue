<template>
  <b-container class="position: relative; margin: 100px auto 0 auto; width 635px;">
    <b-row>
      <div>
        <img src="./assets/primal_fusion_logo.jpeg">
      </div>
    </b-row>
    <h3 class="mx-auto" style="width: 400px;">NST Consent and Disclosure</h3>
    <br>
    <div b-col cols="6">
      <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
        <b-form-group id="name_label">
          <b-form-input id="name"
                        type="text"
                        v-model="form.name"
                        required
                        placeholder="Enter Name">
          </b-form-input>
        </b-form-group>
        <b-form-group id="dob_label">
          <b-form-input id="dob"
                        type="text"
                        v-model="form.dob"
                        required
                        placeholder="Dob">
          </b-form-input>
        </b-form-group>

        <b-form-group id="street_label">
          <b-form-input id="street"
                        type="text"
                        v-model="form.street"
                        required
                        placeholder="Street">
          </b-form-input>
        </b-form-group>
        <b-form-group id="apt_number_label">
          <b-form-input id="apt_number"
                        type="text"
                        v-model="form.apt_number"
                        placeholder="Apt#">
          </b-form-input>
        </b-form-group>

        <b-form-group id="city_state_zip">
          <b-form-input id="dob"
                        type="text"
                        v-model="form.city_state_zip"
                        required
                        placeholder="City/State/Zip">
          </b-form-input>
        </b-form-group>
        <b-form-group id="email_label">
          <b-form-input id="email"
                        type="email"
                        v-model="form.email"
                        required
                        placeholder="Email">
          </b-form-input>
        </b-form-group>
        <b-form-group id="home_phone_label">
          <b-form-input id="home_phone"
                        type="text"
                        v-model="form.home_phone"
                        required
                        placeholder="Home Phone/Cell">
          </b-form-input>
        </b-form-group>
        <b-form-group id="emergency_contact_name_label">
          <b-row>
          <b-col cols="5">
            <b-form-input id="emergency_contact_name"
                          type="text"
                          v-model="form.emergency_contact_name"
                          required
                          placeholder="Emergency Contact(Name)">
            </b-form-input>
          </b-col>
          <b-col cols="5">
            <b-form-input id="emergency_contact_phone"
                          type="text"
                          v-model="form.emergency_contact_phone"
                          required
                          placeholder="Emergency Contact(Phone)">
            </b-form-input>
          </b-col>
          </b-row>
        </b-form-group>
        <div>
      </div>
      <whatisnst :form="form" ></whatisnst>
      <br />
      <participant :form="form" :creds="creds" ></participant>
      <br  />
      <pricingandpayment :form="form" ></pricingandpayment>
      <br />
      <finalagreement :form="form" ></finalagreement>
      <br>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
  </b-container>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import whatisnst from './components/whatisnst.vue'
import participant from './components/participant.vue'
import pricingandpayment from './components/pricingandpayment.vue'
import finalagreement from './components/finalagreement.vue'
// axios.defaults.withCredentials = true
export default {
  data () {
    return {
      creds: 'CPT, LMT, NST, HLC III, CP4',
      logo_link: './assets/primal_fusion_logo.jpeg',
      form: {
        name: '',
        dob: '',
        street: '',
        apt_number: '',
        city_state_zip: '',
        email: '',
        home_phone: '',
        whatisnst: '',
        participant: '',
        pricingandpayment: '',
        finalagreement: '',
        emergency_contact_name: '',
        emergency_contact_phone: ''
      }
    }
  },
  components: {
    whatisnst,
    participant,
    pricingandpayment,
    finalagreement
  },
  methods: {
    onSubmit (evt) {
      let name = this.form['name']
      // let doc  = jsPDF.new('p', 'pt')

      if (navigator.onLine) {
        axios.post('http://localhost:3000/disclosure_forms', qs.stringify(this.form), 'json')
          .then(function (response) {
            localStorage.removeItem(name)
            evt.target.reset()
            // theThis.onReset()
          })
      } else {
        localStorage.setItem(name, qs.stringify(this.form))
        alert('You are offline, therefore setting data locally')
      }
    },
    onReset (evt) {
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.street = ''
      this.form.apt_number = ''
      this.form.dob = ''
      this.form.home_phone = ''
      this.form.city_state_zip = ''
      this.form.whatisnst = ''
      this.form.participant = ''
      this.form.pricingandpayment = ''
      this.form.finalagreement = ''
      this.form.emergency_contact_name = ''
      this.form.emergency_contact_phone = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
