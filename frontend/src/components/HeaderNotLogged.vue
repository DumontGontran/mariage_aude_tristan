<template>
    <header>
        <div class="flex flex_vertical--center flex_between">
            <router-link to="/">
                <h1 class="logo">Aude & Tristan</h1>
            </router-link>
            <nav class="dropdown">
                <button class="fas fa-2xl fa-bars dropdown-button" v-on:click.prevent="dropdownStatus"></button>
                <ul id="dropdown-mine" class="dropdown-content" v-if="getDropdownStatus == true">
                    <li>
                        <router-link to="signup">S'inscrire</router-link>
                    </li>
                    <li>
                        <router-link to="login">Se connecter</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';


export default {
    computed: {
     ...mapGetters(['getDropdownStatus'])
    },
    methods: {
        ...mapMutations(['dropdownStatus'])
    }
}
</script>