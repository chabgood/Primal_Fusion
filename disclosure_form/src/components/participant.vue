<template>
  <div>
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
          <b-form-input type="text" size="2" v-model="form.participant" placeholder="➔ INITIALS" required/>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['form', 'creds']
}
</script>
