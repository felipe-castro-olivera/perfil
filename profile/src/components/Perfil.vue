<template>
  <div>
    <b-alert show variant="primary">
      <h4 class="alert-heading">Profesional</h4>
      <p>
        {{ perfil.person.summaryOfBio }}
      </p>
      <hr />
      <h4>Intereses:</h4>
      <h6 v-for="oportunidad in oportunidades" :key="oportunidad">
        {{ oportunidad }}
      </h6>
    </b-alert>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      perfil: {},
      oportunidades: [],
    };
  },
  methods: {
    async buscarPerfil() {
      console.log("BUSCANDO PERFIL");
      this.perfil = {};
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
    obtenerIntereses() {
      setTimeout(() => {
        var intereses = this.perfil.opportunities;
        // console.log(intereses);

        for (const i in intereses) {
          if (intereses[i].interest == "industries") {
            for (const n in intereses[i].data) {
              const oportunidad = intereses[i].data[n].name;
              // console.log(oportunidad);
              this.oportunidades.push(oportunidad);
            }
          }
        }
      }, 3000);
    },
  },
  mounted() {
    this.buscarPerfil();
    this.obtenerIntereses();
  },
};
</script>
