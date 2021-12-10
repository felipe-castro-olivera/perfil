<template>
  <div>
    <b-card-group deck class="mb-5">
      <b-card
        border-variant="primary"
        header="Máster"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
        <b-card-text>
          <b-list-group v-for="habilidad in masters" :key="habilidad">
            <p>{{ habilidad }}</p>
          </b-list-group>
        </b-card-text>
      </b-card>

      <b-card
        border-variant="info"
        header="Experto"
        header-bg-variant="info"
        header-text-variant="white"
        align="center"
      >
        <b-card-text
          ><b-list-group v-for="habilidad in expert" :key="habilidad">
            <p>{{ habilidad }}</p>
          </b-list-group></b-card-text
        >
      </b-card>

      <b-card
        border-variant="warning"
        header="Competente"
        header-bg-variant="warning"
        header-text-variant="white"
        align="center"
      >
        <b-card-text
          ><b-list-group v-for="habilidad in proficient" :key="habilidad">
            <p>{{ habilidad }}</p>
          </b-list-group></b-card-text
        >
      </b-card>
      <b-card
        border-variant="primary"
        header="Novato"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
        <b-card-text
          ><b-list-group v-for="habilidad in novice" :key="habilidad">
            <p>{{ habilidad }}</p>
          </b-list-group></b-card-text
        >
      </b-card>
      <!-- <b-card
        border-variant="danger"
        header="Me gustaría conocer"
        header-bg-variant="danger"
        header-text-variant="white"
        align="center"
      >
        <b-card-text
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text
        >
      </b-card> -->
    </b-card-group>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Conocimientos",
  data() {
    return {
      perfil: {},
      masters: [],
      expert: [],
      proficient: [],
      novice: [],
      status: 0
    }
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
        this.status = persona.status;
        console.log(this.status);
        console.log(this.perfil);
      } catch (error) {
        console.log(error);
      }
    },
    habilidades(){
      // console.log("Dentro de habilidades");
      var habilidades =  [];
      habilidades = this.perfil.strengths;

      for (const i in habilidades) {
        if (habilidades[i].proficiency == "master" ) {
          var master = habilidades[i].name
          this.masters.push(master)
        }
      }

      for (const i in habilidades) {
        if (habilidades[i].proficiency == "expert" ) {
          var habilidad = habilidades[i].name
          this.expert.push(habilidad)
        }
      }

      for (const i in habilidades) {
        if (habilidades[i].proficiency == "proficient" ) {
          var habilidad = habilidades[i].name
          this.proficient.push(habilidad)
        }
      }

      for (const i in habilidades) {
        if (habilidades[i].proficiency == "novice" ) {
          var habilidad = habilidades[i].name
          this.novice.push(habilidad)
        }
      }

      // for (const i in habilidades) {
      //   if (habilidades[i].proficiency == "no-experience-interested" ) {
      //     var habilidad = habilidades[i].name
      //     this.masters.push(habilidad)
      //   }
      // }
    }
  },
  watch: {
    status() {
      if (this.status === 200) {
        this.habilidades()
      }
    }
  },
  mounted() {
    this.buscarPerfil();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
