<template>
    <header>
        <div class="flex flex_vertical--center flex_between">
            <router-link to="/welcome">
                <h1 class="logo">Aude & Tristan</h1>
            </router-link>
            <nav class="dropdown">
                <button class="fas fa-2xl fa-bars dropdown-button" v-on:click.prevent="dropdownStatus"></button>
                <ul id="dropdown-mine" class="dropdown-content" v-if="getDropdownStatus == true">
                    <li>
                        <router-link to="/welcome">Accueil</router-link>
                    </li>
                    <li>
                        <router-link to="location">Géolocalisation</router-link>
                    </li>
                    <li>
                        <router-link to="chat">Chat</router-link>
                    </li>
                    <li>
                        <router-link to="photos">Partage des photos</router-link>
                    </li>
                    <li>
                        <router-link to="journey">Programme de la journée</router-link>
                    </li>
                    <li>
                        <button v-on:click.prevent="logout">Déconnexion</button>
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
        ...mapMutations(['dropdownStatus', 'logout'])
    }
}
</script>