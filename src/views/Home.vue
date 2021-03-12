<template>
  <v-container>
    <div align="center">
      <v-img class="home-imagem" src="../assets/physiotherapy.png"> </v-img>
    </div>

    <div>
      <h2 class="welcome">Olá, Lorena!</h2>
    </div>

    <div>
      <p class="msg-start-training">Vamos iniciar o seu treinamento? :)</p>
    </div>
    <div class="btn-start-training" align="center">
      <router-link to="/atividade">
        <v-btn
          class="btn-iniciar-tratamento"
          elevation="5"
          color="#5B3FFF"
          >
            Iniciar Tratamento
          </v-btn>
        </router-link>
    </div>

  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
* {
  padding: 2%;
}

.home-imagem {
  margin-top: 50px;
}

.welcome {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: xx-large;
  text-align: center;
}

.msg-start-training {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: x-large;
  text-align: center;
  color: gray;
}

 .btn-start-training a {
  text-decoration: none;
}

.btn-iniciar-tratamento {
  text-transform: none;
  align-content: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: x-large;
  color: white;
}

v-btn {
  align-items: center;
}
</style>
