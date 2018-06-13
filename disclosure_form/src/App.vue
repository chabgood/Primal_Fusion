<template>
  <div b-col cols="">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
                      required
                      placeholder="Apt#">
        </b-form-input>
      </b-form-group>

      <b-form-group id="city_state_zip">
        <b-form-input id="dob"
                      type="text"
                      v-model="form.city_state_zip"
                      required
                      placeholder="Dob">
        </b-form-input>
      </b-form-group>
      <b-form-group id="email_label">
        <b-form-input id="enail"
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
                      placeholder="Home Phone">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        dob: '',
        street: '',
        apt_number: '',
        city_state_zip: '',
        email: '',
        home_phone: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
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
