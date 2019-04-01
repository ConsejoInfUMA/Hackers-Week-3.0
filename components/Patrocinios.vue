<template>
  <div>
    <div class="hidden-xs-only">
      <v-layout align-center justify-center>
        <v-flex
          v-for="imo in oro"
          :key="imo.name"
          class="px-5"
          xs-12
        >
          <v-card flat tile color="transparent">
            <v-img
              class="pa1"
              :src="'/images/empresas/'+imo.name"
            />
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center pt-3>
        <v-flex
          v-for="imp in plata"
          :key="imp.name"
          class="px-5"
          xs-12
        >
          <v-card flat tile color="transparent">
            <v-img
              class="pa2"
              :src="'/images/empresas/'+imp.name"
            />
          </v-card>
        </v-flex>
      </v-layout>
    </div>
    <div class="hidden-sm-and-up">
      <v-layout align-center justify-center column>
        <v-flex
          v-for="imo in oro"
          :key="imo.name"
          class="pa-2"
          xs-12
        >
          <v-card flat tile color="transparent">
            <v-img
              class="pa1"
              :src="'/images/empresas/'+imo.name"
            />
          </v-card>
        </v-flex>
      </v-layout>
      <br>
      <v-layout align-center justify-center pt-5>
        <v-flex
          v-for="imp in plata"
          :key="imp.name"
          class="px-2"
          xs-12
        >
          <v-card flat tile color="transparent">
            <v-img
              class="pa2"
              :src="'/images/empresas/'+imp.name"
            />
          </v-card>
          <br>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    oro: [{ name: 'TWB.png' }, { name: 'AUT.png' }, { name: 'CCC.png' }],
    plata: [
      { name: 'EB.png' },
      { name: 'CIK.png' },
      { name: 'SEQ.png' },
      { name: 'FPC.png' }
    ]
  })
}
</script>
