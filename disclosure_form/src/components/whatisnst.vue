<template>
  <div>
    <div class="mx-auto" style="width: 400px;">
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
          <b-form-input type="text" size="1" v-model="form.whatisnst" placeholder="➔ INITIALS" required/>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['form']
}
</script>
