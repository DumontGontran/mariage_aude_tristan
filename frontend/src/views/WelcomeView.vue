<template>
  <div class="signup">
    <HeaderLogged />
      <h3 class="flex flex_horizontal--center">Bienvenue</h3>
      <p>{{ getUserId }}</p>
      <p>{{ getToken }}</p>
    <FooterToUse />
  </div>
</template>

<script>
import HeaderLogged from '@/components/HeaderLogged.vue'
import FooterToUse from '@/components/FooterToUse.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'WelcomeView',
  components: {
    HeaderLogged,
    FooterToUse
  },
  computed:{
    ...mapGetters(['getUserId', 'getToken'])
  }
}
</script>