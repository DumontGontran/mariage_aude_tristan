<template>
  <div class="notLogged">
    <HeaderNotLogged />
    <FooterToUse />
  </div>
</template>

<script>
import HeaderNotLogged from '@/components/HeaderNotLogged.vue'
import FooterToUse from '@/components/FooterToUse.vue'

export default {
  name: 'notLoggedView',
  components: {
    HeaderNotLogged,
    FooterToUse
  }
}
</script>
