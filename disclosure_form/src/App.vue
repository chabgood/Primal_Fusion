<template>
  <b-container>
    <b-row>
      <div>
        <b-img src="./assets/logo.png" fluid />
      </div>
    </b-row>
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
        <div>
      </div>
      <div>
        What is neurosomatic therapy?
      </div>
      <br />
      <div>
        Neurosomatic Therapy (NST) is an integrative form of manual therapy that identifies and corrects structural and biomechanical
patterns in the body that cause chronic pain. Chronic pain is traditionally treated in a way that does not address the underlying soft
tissue causes of pain. When performed in isolation, Massage Therapy, Physical Therapy, and medicinal pain management fail to
address the entire health issue. By using careful analysis of dysfunctional postural and movement patterns to create a
comprehensive therapy program NST fully addresses the five stages of rehabilitation: Eliminate Muscle Spasm
      </div>
      <div>
        <ul>
          <li>Eliminate muscle spasm</li>
          <li>Restore Flexibility</li>
          <li>Restore Proper Biomechanics</li>
          <li>Increase Muscle Strength</li>
          <li>Increase Muscular Endurance</li>
        </ul>
      </div>
      <br />
      <div>
        INFORMED CONSENT FOR AN EVALUATION & NEUROSOMATIC THERAPY SESSION:
      </div>
      <br />
      <div>
        EXPLANATION OF THE EVALUATION: I understand that I will perform an exercise and/or movement test, and may be asked
questions about my health and physical well being during my initial consultation. I understand that I may stop whenever I wish
because of feelings of fatigue or any other discomfort.
      </div>
      <br />
      <div>
        <b-row>
          <b-col cols="2">
            <b-form-input type="text" size="1" placeholder="➔ INITIALS" required/>
          </b-col>
        </b-row>
      </div>
      <br />
      <div>
        RESPONSIBILITIES OF THE PARTICIPANT: I understand that information I possess about my health status and/or previous
experiences of unusual feelings with physical effort and/or injury may affect the safety and value of my therapy session. I understand
that I may feel discomfort and pain during this session and that is to be expected during muscle and tissue release performed by my
therapist, Aleksandr Rybchinskiy {{ creds }}. I acknowledge that my prompt reporting of unusual feelings during
the session itself is extremely important and that I am responsible for fully disclosing such information whether or not requested by
the therapist. I understand the helpfulness of reporting any pain or discomfort by levels 1 to 10, and that discomfort is to be expected
before relief.
      </div>
      <br />
      <div>
        <b-row>
          <b-col cols="2">
            <b-form-input type="text" size="1" placeholder="➔ INITIALS" required/>
          </b-col>
        </b-row>
      </div>
      <br />
      <div>
        FREEDOM OF CONSENT: My permission to participate in a neurosomatic therapy session by me is voluntary. I understand that I
am free to stop at any point, if I desire.
      </div>
      <br />
      <div>
        <b-row>
          <b-col cols="4">
            I, <b-form-input type="text" size="2" placeholder="➔ INITIALS" required/>
          </b-col>
        </b-row>
        consent to participate in a neurosomatic therapy session with my practitioner Aleksandr Rybchinskiy {{ creds }}
      </div>
      <br />
      <div>
        By checking this document, I acknowledge, and agree that I am legally bound by its content.
      </div>
      <br />
      <div>
        <b-row>
          <b-col cols="2">
            <b-form-input type="text" size="2" placeholder="➔ INITIALS" required/>
          </b-col>
        </b-row>
      </div>
      <div>
        PRICING AND PAYMENT
      </div>
      <br />
      <div>
        I acknowledge and agree that this Contract is not transferable or assignable. I acknowledge that blocks of sessions are scheduled in
advance and confirm and guarantee my spot. I agree to pay for all scheduled sessions at the time of appointment or in advance.
      </div>
      <div>
        <b-row>
          <b-col cols="2">
            <b-form-input type="text" size="2" placeholder="➔ INITIALS" required/>
          </b-col>
        </b-row>
      </div>
      <br />
      <div>
        I understand this money is not refundable and all requests are made to and considered by the discretion of the coach or practitioner.
I understand this contract and the terms it presents is for the purchase of sessions and any other purchase of services in the future.
I acknowledge that this specific contract, release of liability, consent, and agreement is continuously valid indefinitely. I understand
that a minimum requirement of one session per week must be completed or I will be charged for the session(s) missed. No refund
will be granted for sessions that have not been completed. I understand Austin Primal Fitness & Nutrition, LLC (DBA Primal Fusion)
has the right and the authority to terminate the program at any time, with no refund, if I do not follow the program or fail to conduct
myself in an appropriate manner.
      </div>
      <br />
      <div>
        By initialing this document, I attest, contract, acknowledge, and agree that I am legally bound by its content.
      </div>
      <div>
        <b-row>
          <b-col cols="2">
            <b-form-input type="text" size="2" placeholder="➔ INITIALS" required/>
          </b-col>
        </b-row>
      </div>
      <br />
      <div>
        I understand this money is not refundable and all requests are made to and considered by the discretion of the coach or practitioner.
I understand this contract and the terms it presents is for the purchase of sessions and any other purchase of services in the future.
I acknowledge that this specific contract, release of liability, consent, and agreement is continuously valid indefinitely. I understand
that a minimum requirement of one session per week must be completed or I will be charged for the session(s) missed. No refund
will be granted for sessions that have not been completed. I understand Austin Primal Fitness & Nutrition, LLC (DBA Primal Fusion)
has the right and the authority to terminate the program at any time, with no refund, if I do not follow the program or fail to conduct
myself in an appropriate manner.
      </div>
      <br />
      <div>
        I acknowledge that appointment times are reserved and that cancellations must be made 48 hours in advance in consideration of
the coach’s planning, as well as other clients on a waiting list for specific time slots. Cancellations must be made by calling OR
TEXTING: 512. 468. 1036 (voicemail/text will record date/time). I understand that I will not receive a refund for missed
appointments. It is my responsibility to attend my personal training appointments when they are scheduled.
      </div>
      <br />
      <div>
        I understand that sessions will run approximately one hour unless otherwise stated. I acknowledge that a delay to a scheduled
session cannot change the session status to anything else except a whole session, unless otherwise stated by the trainer at that
time.
      </div>
      <br  />
      <div>
        By signing this document, I acknowledge, and agree that I am legally bound by its content.
      </div>
      <div>
        <b-row>
          <b-col cols="4">
            <b-form-input type="text" size="2" placeholder="Signature" required/>
          </b-col>
        </b-row>
      </div>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
  </b-container>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
// axios.defaults.withCredentials = true
export default {
  data () {
    return {
      creds: 'CPT, LMT, NST, HLC III, CP4',
      form: {
        name: '',
        dob: '',
        street: '',
        apt_number: '',
        city_state_zip: '',
        email: '',
        home_phone: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      let theThis = this
      let name = theThis.form['name']
      if (navigator.onLine) {
        // alert(navigator.onLine)
        axios.post('http://localhost:3000/disclosure_forms', qs.stringify(this.form), 'json')
          .then(function (response) {
            localStorage.removeItem(name)
            theThis.onReset()
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
