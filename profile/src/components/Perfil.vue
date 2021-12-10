<template>
  <div>
    <b-alert show variant="primary">
      <h4 class="alert-heading">Profesional</h4>
      <p>
        {{ perfil.person.summaryOfBio}}
      </p>
      <hr />
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </b-alert>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      perfil: {},
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
