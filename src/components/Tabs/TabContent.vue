<script>
export default {
    name:"TabContent",
    props:{
      pans:{
        type:[],
        default:function(){
          return[]
        }
      }
    },
    render(){
      return(
        <div>
          {
            this.pans.map((vc,index)=>{
              // return vc.isActive ? vc.$slots.default : '';
              return <div style={{display:vc.isActive?'block':'none'}}>{vc.$slots.default}</div>
            })
          }
        </div>
      )
    }
}
</script>

<style>

</style>