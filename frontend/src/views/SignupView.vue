<template>
  <div class="signup">
    <HeaderNotLogged />
    <form class="flex flex_column" v-on:submit.prevent="registerSubmit">
      <h2 class="flex flex_horizontal--center">S'inscrire</h2>
      <label for="lastname">Nom:</label>
      <input class="flex flex_justify--center flex_align--center" type="text" name="lastname" id="lastname"
        placeholder="Doe" autocomplete="lastname" v-on:keyup="getLastname" />
      <label for="firstname">Prénom:</label>
      <input class="flex flex_justify--center flex_align--center" type="text" name="firstname" id="firstname"
        placeholder="John" autocomplete="firstname" v-on:keyup="getFirstname" />
      <label for="email">Email:</label>
      <input class="flex flex_justify--center flex_align--center" type="email" name="email" id="email"
        placeholder="doe.john@outlook.fr" autocomplete="email" v-on:keyup="getEmail" />
      <label for="password">Mot de passe:</label>
      <input class="flex flex_justify--center flex_align--center" type="password" name="password" id="password"
        placeholder="Motdepasse" autocomplete="password" v-on:keyup="getPassword" />
      <label for="confirm_password">Confirmer mot de passe:</label>
      <input class="flex flex_justify--center flex_align--center" type="password" name="confirm_password"
        id="confirm_password" placeholder="Motdepasse" autocomplete="confirm_password" v-on:keyup="getConfirmPassword" />
      <div class="flex flex_row flex_between flex_align--center">
        <input type="submit" value="Valider" id="button_submit" class="submit_button" />
      </div>
    </form>
  </div>
</template>

<script>
import HeaderNotLogged from '@/components/HeaderNotLogged.vue'
import { /* mapGetters, */ mapMutations } from 'vuex'

export default {
  name: 'SignupView',
  components: {
    HeaderNotLogged
  },
  computed:{
    /* ...mapGetters(['getLastname', 'getFirstname', 'getEmail', 'getPassword', 'getConfirmPassword']) */
  },
  methods:{
    ...mapMutations(['getLastname', 'getFirstname', 'getEmail', 'getPassword', 'getConfirmPassword'])
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

.submit {
  &_button {
    font-family: 'Satisfy', sans-serif;
    margin-top: 10px;
    padding-left: 0;
    margin-bottom: 10px;
    width: 100px;
    max-width: 100px;
    height: 40px;
    max-height: 40px;
    font-size: 20px;

    &:active {
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