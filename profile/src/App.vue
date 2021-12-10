<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col cols="12" sm="5" lg="3" md="4">
          <div class="px-3 py-4">
            <b-card
              :title="perfil.person.name"
              :sub-title="perfil.person.professionalHeadline"
              border-variant="primary"
            >
              <div>
                <b-img
                  :src="perfil.person.picture"
                  fluid-grow
                  rounded="circle"
                  :alt="perfil.person.name"
                  style="max-width: 10rem"
                  class="mb-2"
                ></b-img>
              </div>
              <b-card-sub-title class="my-2"
                ><b-icon-geo-alt-fill variant="primary"></b-icon-geo-alt-fill>
                {{ perfil.person.location.name }}</b-card-sub-title
              >
              <!-- <b-card-text class="sumario">
                {{ perfil.person.summaryOfBio }}
              </b-card-text> -->

              <div class="h2 mb-0">
                <b-link href="#" class="card-link"
                  ><b-icon-linkedin></b-icon-linkedin
                ></b-link>
                <b-link href="#" class="card-link"
                  ><b-icon-twitter></b-icon-twitter
                ></b-link>
              </div>
            </b-card>
          </div>
          <div class="px-3">
            <b-card
              border-variant="primary"
              header="Lenguajes"
              header-bg-variant="primary"
              header-text-variant="white"
              align="center"
              class="mb-3"
            >
              <b-card-text
                v-for="lenguaje in perfil.languages"
                :key="lenguaje.code"
                >{{ lenguaje.language }} - {{ lenguaje.fluency }}</b-card-text
              >
            </b-card>
          </div>
        </b-col>
        <b-col cols="12" sm="7" lg="9" md="8">
          <div id="nav" class="pt-4 px-0">
            <b-pagination-nav
              :pages="rutas"
              use-router
              align="fill"
            ></b-pagination-nav>
          </div>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { BIconLinkedin, BIconTwitter, BIconGeoAltFill } from "bootstrap-vue";
import axios from "axios";

export default {
  components: {
    BIconLinkedin,
    BIconTwitter,
    BIconGeoAltFill,
  },
  data() {
    return {
      perfil: {},
      rutas: [
        { link: "/", text: "Perfil" },
        { link: "/conocimientos", text: "Conocimientos" },
        { link: "/intereses", text: "Intereses" },
        { link: "/experiencia", text: "Experiencia" },
      ],
    };
  },
  methods: {
    async buscarPerfil() {
      console.log("BUSCANDO PERFIL");
      this.perfil = {}
      try {
        const persona = await axios.get(
          "https://bio.torre.co/api/bios/felipecastroolivera"
        );
        this.perfil = persona.data;
        console.log(this.perfil);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.buscarPerfil();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fff;
  text-decoration: none;
}
</style>
