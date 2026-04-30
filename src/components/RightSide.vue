<template>
<div>
    <!-- div class="cv-steps" -->
    <div class="cv-texts-wrapper">
        <div class="cv-texts">
            <h2 v-if="section.header" class="cv-text-header"> {{ section.header }} </h2>
            
            <div v-for="block in section.blocks" class="cv-text-block">
                <h4 v-if="block.label" class="cv-text-block-label"> {{ block.label }} </h4>

                <div v-for="subBlock in block.subBlocks" :class="{ 'next-paragraph': !(subBlock.title || subBlock.title1) }" class="cv-text-subblock">
                    <div v-if="'list' == subBlock.type">
                        <span>
                            <span v-if="subBlock.title0" class="cv-title0" v-html="subBlock.title0"></span>
                            <span v-if="subBlock.title1" class="cv-title1" v-html="subBlock.title1"></span>
                        </span>
                        <div v-if="subBlock.description" v-html="subBlock.description" class="cv-description"></div>

                        <ul v-if="subBlock.list" class="cv-description-list">
                            <li v-for="listItem in subBlock.list">
                                {{ listItem }}
                            </li>
                        </ul>

                        <ul v-if="subBlock.hList" class="cv-description-list">
                            <li v-for="listItem in subBlock.hList">
                                <h5>{{  listItem.title }}</h5>
                                
                                <div v-if="listItem.list.length === 1">{{ listItem.list[0] }}</div>
                                <ul v-else v-if="listItem.list" class="cv-description-list">
                                    <li v-for="hListItem in listItem.list">
                                        {{ hListItem }}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div v-if="'list-col' == subBlock.type">
                        <div class="row">
                            <div v-if="subBlock.title0" class="cv-title0 col-4" v-html="subBlock.title0"></div>
                            <div v-if="subBlock.title1" class="cv-title1 col-8" v-html="subBlock.title1"></div>
                        </div>
                        <div v-if="subBlock.description" v-html="subBlock.description" class="row cv-description"></div>

                    </div>
                    <div v-if="'text' == subBlock.type">
                        <span v-if="subBlock.title" class="cv-title0">{{ subBlock.title }} </span>
                        <div v-if="subBlock.description" v-html="subBlock.description"  class="cv-description"></div>
                    </div>
                </div>
            </div>
            <!-- label class="formLabel" for="tn_name">What is your name?</label>
            <input type="text" class="formInput" id='tn_name' name="tn_name" autocomplete="off" spellcheck="false" />
            <div class='help-error'><i class="icon icon-warning"></i> Name field is required!</div-->   
        </div> 
    </div>

</div>

</template>


<script lang="ts">


import { Options, Vue } from 'vue-class-component';
//import Background from './Background.vue';

@Options({
  components: {
    //Background,
  },
  props:['section'],
})

export default class LeftSide extends Vue {
    

}


</script>

<style lang="scss">
</style>