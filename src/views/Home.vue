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
    <div align="center">
      <v-btn
        class="btn-iniciar-tratamento"
        elevation="5"
        color="#5B3FFF"
        >
          Iniciar tratamento
        </v-btn>
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

.btn-iniciar-tratamento {
  align-content: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  color: white;
}

v-btn {
  align-items: center;
}
</style>
