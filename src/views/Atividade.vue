<template>
    <div align="center">
        <v-container id="atividade" fluid>
            <v-app-bar flat prominent color="transparent">
                <v-app-bar-nav-icon>
                    <v-icon @click="back">mdi-chevron-left</v-icon>
                </v-app-bar-nav-icon>
            </v-app-bar>
            
            <div class="imagem">
                <v-img contain src="../assets/stretching.jpg">
                </v-img>
            </div>
                        
            <h2 class="text-atividade">Alongamento lateral</h2>
  
            <v-btn color="#5B3FFF" dark>
                <h2 class="text-btn">Feito!</h2>
            </v-btn>

            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                Séries
                            </th>
                            <th class="text-left">
                                Repetições
                            </th>
                            <th class="text-left">
                                Descanso
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 1 </td>
                            <td> 10 </td>
                            <td> 20 seg </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-container>
    </div>

</template>

<script>
export default {
    name: 'Atividade',
    methods: {
        back() {
            
        }
    }
}
</script>

<style scoped>
    .imagem {
        max-width: 70vw;
    }

    h2 {
        font-family: Roboto;
        font-weight: 300;
        padding: 30px;
    }

    .text-atividade{
        color: grey;
        font-weight: 500;
    }

    .text-btn {
        text-transform: none;
    }

    .theme--light.v-data-table {
        color: #850091;
        font-family: Roboto;
        font-weight: 450;
        font-size: 21;
        margin-top: 50px;
        display: flex;
        justify-content: space-around;
    }

    .theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th {
        border-bottom: none;
}
</style>