<template>
    <div class="atividade" align="center">
        <v-container fluid>
            <v-app-bar flat height="70px" color="transparent">
                <v-app-bar-nav-icon>
                    <router-link to="/">
                        <v-icon>mdi-chevron-left</v-icon>
                    </router-link>
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
                    <thead >
                        <tr>
                            <th class="text-h5">
                                Séries
                            </th>
                            <th class="text-h5">
                                Repetições
                            </th>
                            <th class="text-h5">
                                Descanso
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-h5 text-center"> 1 </td>
                            <td class="text-h5 text-center"> 10 </td>
                            <td class="text-h5 text-center"> 20 seg </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-container>
    </div>

</template>

<script>
export default {
    name: 'Atividade'
}
</script>

<style scoped>
    .atividade a {
        color: #9E2D8C;
        text-decoration: none;
    }

    .imagem {
        max-width: 70vw;
    }

    h2 {
        font-family: Roboto;
        font-weight: normal;
        font-size: x-large;     
        padding: 30px;
    }

    .text-atividade{
        color: grey;
        font-weight: normal;
    }

    .text-btn {
        text-transform: none;
    }

    .theme--light.v-data-table {
        color: #850091;
        font-family: Roboto;
        font-weight: 450;
        margin-top: 50px;
        display: flex;
        justify-content: space-around;
    }

    .theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th {
        border-bottom: none;
    }
</style>