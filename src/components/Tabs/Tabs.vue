<template>
    <div>
        <ul class="tabs">
            <slot></slot>
        </ul>
        <TabContent :pans="pans"/>
    </div>
</template>

<script>
import TabContent from './TabContent.vue';
export default {
    name:"Tabs",
    data(){
        return{
            pans:[]
        }
    },
    components: { TabContent },
    props:{
        currentIndex:{
            type:[String,Number],
            default:"1"
        }
    },
    methods:{
        changeIndex(index){
            this.$emit('change',index);
        }
    }
}
</script>

<style scoped>
.tabs{
    display: flex;
    flex:1;
    justify-content: space-around;
    height: 50px;
    text-align: center;
}
</style>