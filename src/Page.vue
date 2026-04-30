<template>

<div v-if="!userData" class="cv-loader-container">
    <div class="cv-loader"></div>
</div>

<div v-if="userData" class='cv-main-container cv-theme' style="display: block;">
    <div class='container'>
        <div v-for="(section, sectionI) in userData.sections" :class="`row section-container section-container-page${sectionI}`">
            <div :class="sectionI?'no-print':''" class='cv-page-left col-md-4 col-sm-4'>
                <LeftSide v-if="!sectionI" :userData="userData" />
            </div>
            
            <div :class="sectionI?'col-print-12':''" class='right-side cv-page-right col-md-8 col-sm-8 '>
                <RightSide :section="section" />
            </div>
        </div>

        <div class="fixed-menu no-print">
          <button @click="printPage()" class="btn-bg-image btn-image-print"></button>
        </div>

    
        <Background typeClass="right-side" />
        <div class="bg"></div>
    </div>
</div>
<!-- Background / -->

</template>

<script lang="ts">

import { useRoute, useRouter } from 'vue-router'
import { Options, Vue } from 'vue-class-component';
import LeftSide from './components/LeftSide.vue';
import RightSide from './components/RightSide.vue';
import Background from './components/Background.vue';

const DEFAULT_LANG = 'de';
const LOCALSTORAGE_ITEM_LANG = 'LANG';


const langContents = {
  en: async () => import('./assets/langContents/en.js'),
  de: async () => import('./assets/langContents/de.js'),
  ua: async () => import('./assets/langContents/ua.js'),
}


@Options({
  components: {
    LeftSide,
    RightSide,
    Background,
  },
  watch: {
    '$route'(to, from) {
      this.loadLangContents(this.$route, this.$router);
    }
  },

  //mounted(props) {
  //  loadLangContents();
  //}
})
export default class App extends Vue {
    
    printPage =() => {
      window.print();
    }

    userData = null;
   
    loadLangContents = async (route, router):Promise<void> => {
      this.userData = null;
      
      if (route ) {
        if (route && route.query && route.query.lang && langContents[route.query.lang]) {
          localStorage.setItem(LOCALSTORAGE_ITEM_LANG, route.query.lang);       
        }   
        
        if (route.query && Object.keys(route.query).length) {
          await router.push('/');
          //window.location.href = '/';
        }  
      }

      let lang = localStorage.getItem(LOCALSTORAGE_ITEM_LANG) || DEFAULT_LANG;
      this.userData =  (await langContents[lang]()).default;
      document.title = `${this.userData.sections[0].header} :: ${this.userData.name} :: ${this.userData.position}`;
    }

    async mounted() {
      const route = useRoute();
      const router = useRouter();
      this.loadLangContents(route, router);
    }
}


</script>

<style lang="scss">

</style>
