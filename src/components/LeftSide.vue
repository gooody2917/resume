<template>
<div>

    <div class="lang-selector-wrapper">
        <div class="lang-selector">
            <router-link to="/?lang=ua" :key="1" class="lang-selector-item" title="Українська">
                <div class="flag flag-ua"></div>
                <div class="lang-name">Українська</div>
            </router-link>
            <RouterLink to="/?lang=de" :key="2" class="lang-selector-item " title="Deutsch">
                <div class="flag flag-de"></div>
                <div class="lang-name">Deutsch</div>
            </RouterLink>
            <RouterLink to="/?lang=en" :key="3" class="lang-selector-item " title="English">
                <div class="flag flag-en"></div>
                <div class="lang-name">English</div>
            </RouterLink>
        </div>
    </div>


    
    <div class="hexagon">
        <!-- <img :src="userData.photo" :alt="userData.name" class="hexagon-img">  -->
        <img src="../assets/images/photo.jpeg" :alt="userData.name" class="hexagon-img">
    </div>


    <div class="cv-name text-center">
        <h3>{{userData.name}}</h3>
    </div>


    <!-- img class='cv-signup-logo' src='images/cv-logo-white.png' alt="logo"/ -->
    <p class="cv-position text-center"> {{userData.position}}</p>
    <!-- p class="cv-trial">14 Days Free Trial</p -->
    <hr/>

    <div class="cv-contakts-container text-center">
        <ul class="cv-contakts">
            <li v-for="contakt in userData.contakts" class='cv-contakt'>
                <a :href="contakt.href" target="_blank">
                    <span class="contakt-text">{{contakt.title}}</span>
                    <div :class="contakt.typeLogoClassName" class="btn-bg-image contakt-image-telegram"> </div>
                </a>
            </li>
        </ul>

    </div>

    <div class="cv-description-container">
        <div v-for="description in userData.leftSideDescriptions" class="cv-description row">
            <div class="col-md-4 cv-description-label">{{ description.label }}</div>
            <div class="col-md-8 cv-description-text" v-html="description.text"></div>
        </div>
        <div class="cv-description row">
            <div class="col-md-4 cv-description-label">Site:</div>
            <div class="col-md-8 cv-description-text"><a :href="site.url">{{ site.name }}</a></div>
        </div>
    </div>
    <Background typeClass="left-side" />

</div>
</template>

<script lang="ts">


import { Options, Vue } from 'vue-class-component';
import Background from './Background.vue';

@Options({
  components: {
    Background,
  },
  props:['userData'],
  computed:{
    site() {
        return {
            url:'https://my-resume.gooody.pp.ua/',
            name:'my-resume.gooody.pp.ua',
        };
        return {
            url:window.location.origin,
            name:window.location.host,
        };
    }
  }
})

export default class LeftSide extends Vue {
    

}


</script>

<style lang="scss">




</style>
