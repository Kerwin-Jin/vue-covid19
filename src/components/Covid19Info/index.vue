<template>
  <div id="info">
    <h2>病毒信息</h2>
    <div class="detail">
        <p>{{info.note1}}</p>
        <p>{{info.note2}}</p>
        <p>{{info.note3}}</p>
        <p>{{info.remark1}}</p>
        <p>{{info.remark2}}</p>
        <p>{{info.remark3}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name:"Covid19Info",
    props:['info']
}
</script>

<style scoped>
    #info{
        background:#fff;
        padding: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    #info h2{
        font-weight: normal;
        border-left: 3px solid #406fe7;
        padding-left: 5px;
        font-size: 18px;
        color: #696969;
    }
    #info .detail{
        margin-top: 10px;
    }
    #info .detail p{
        color: #696969;
        margin-top: 5px;
        font-size: 14px;
        padding-left: 10px;
    }
</style>