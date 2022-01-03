<template>
  <li :class="{tab:true, active:isActive}" @click="clickItemHandle">
    {{label}}
  </li>
</template>

<script>
export default {
  name:"TabHeader",
  props:{
    label:{
      type:[String,Number],
      default:"Tab1"
    },
    index:{
      type:[Number,String],
      default:"1"
    }
  },
  mounted(){
    this.$parent.pans.push(this);
  },
  methods:{
    clickItemHandle(){
      this.$parent.changeIndex(this.index);
    }
  },
  computed:{
    isActive(){
      return this.$parent.currentIndex == this.index;
    }
  }
}
</script>

<style scoped>
.tab{
  line-height: 50px;
  width: 100px;
}
.active{
  border-bottom: 2px solid #Efd364;
}
</style>