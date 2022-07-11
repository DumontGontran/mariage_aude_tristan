<template>
  <div class="signup">
    <HeaderNotLogged />
    <form class="flex flex_column" v-on:submit.prevent="login">
      <h2 class="flex flex_horizontal--center">Se connecter</h2>
      <label for="email">Email:</label>
      <input class="flex flex_justify--center flex_align--center" type="email" name="email" id="email"
        placeholder="doe.john@outlook.fr" autocomplete="email" v-on:change="getLoginEmail" />
      <label for="password">Mot de passe:</label>
      <input class="flex flex_justify--center flex_align--center" type="password" name="password" id="password"
        placeholder="Motdepasse" autocomplete="password" v-on:change="getLoginPassword" />
      <div class="flex flex_row flex_between flex_align--center">
        <input type="submit" value="Valider" id="button_submit" class="button_submit" />
      </div>
    </form>
    <FooterToUse />
  </div>
</template>

<script>
import HeaderNotLogged from '@/components/HeaderNotLogged.vue'
import FooterToUse from '@/components/FooterToUse.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'LoginView',
  components: {
    HeaderNotLogged,
    FooterToUse
},
computed:{
  ...mapGetters(['getUserId', 'getToken'])
},
methods: {
  ...mapMutations(['getLoginEmail', 'getLoginPassword']),
  ...mapActions(['login'])
}
}
</script>

<style lang="scss">
@mixin rainbow-color {
  border-image: linear-gradient(to right, rgb(217, 112, 147), rgb(255, 220, 164), turquoise);
  border-image-slice: 1;
  -webkit-background-clip: border-box;
  -webkit-text-fill-color: transparent;
}

form {
  margin: auto;
  width: 350px;
  border: 1px solid turquoise;
  border-radius: 10px 10px 10px 10px;
}

.button {
  &_submit {
    font-family: 'Satisfy', sans-serif;
    margin-top: 10px;
    padding-left: 0;
    margin-bottom: 10px;
    width: 100px;
    max-width: 100px;
    height: 40px;
    max-height: 40px;
    transition: border-width font-size 50ms;
    font-size: 20px;

    &:hover {
      border-width: 3px;
      font-size: 22px;
    }
  }
}

label {
  font-family: 'Satisfy', sans-serif;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 50px;
  margin-bottom: 5px;
}

input {
  font-family: 'Satisfy', sans-serif;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  height: 35px;
  padding-left: 10px;
  @include rainbow-color;
  -webkit-text-fill-color: black;

&::placeholder{
    -webkit-text-fill-color: grey;
  }

  &:focus-visible {
    font-family: 'Satisfy', sans-serif;
    outline-color: turquoise;
    outline-width: 1px;
    outline-style: dashed;

    &::placeholder{
    -webkit-text-fill-color: transparent;
  }
  }
}
</style>