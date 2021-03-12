<template>
    <div align="center">
        <v-container id="atividade">
            <v-app-bar app flat color="transparent">
                <v-app-bar-nav-icon>
                    <v-icon @click="back">mdi-chevron-left</v-icon>
                </v-app-bar-nav-icon>
            </v-app-bar>
            
            <v-img :aspect-ratio="40/20" :width="width" src="../assets/stretching.jpg">
            </v-img>
                        
            <h2 class="text-atividade">Alongamento lateral</h2>
  
            <v-btn color="#5B3FFF" dark>
                <h2 class="text-btn">Feito!</h2>
            </v-btn>
        </v-container>
    </div>

</template>

<script>
export default {
    name: 'Atividade',
    data: () => ({
      width: 900,
    }),
    methods: {
        back() {
            
        }
    }
}
</script>

<style scoped>
    h2 {
        font-family: REVERT;
        font-weight: 300;
    }

    .text-atividade{
        color: grey;
    }
</style>