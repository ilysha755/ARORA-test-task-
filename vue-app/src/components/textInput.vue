<template>
    <form class="sendform" @submit.prevent mehod="post">
        <input name="" :value="userMessage" @input="inputMsg"  @keyup.enter="sendComment" id="" class="textarea" placeholder="Введите сообщение...">
    </form>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    mounted(){

this.FETCH_MY_ID()
},
methods:{
  ...mapActions([
    'FETCH_MY_ID',
  ]),
  ...mapMutations([
    'SET_USER_MESSAGE'
    ]),
inputMsg(e){
  this.$store.commit('SET_USER_MESSAGE', e.target.value)
},
sendComment(e){
this.$store.dispatch('SEND_COMMENT')
  this.$store.commit('SET_USER_MESSAGE', e.target.value = '')
}
    },
    computed:{
      ...mapGetters([
        'getMyId',
      ]),
      ...mapState({
              userMessage:state => state.userMessage
      })
    }
}
</script>
<style lang="scss" scoped>
.sendform {
    width: 100%;
    display: flex;
    position: sticky;
    left: 0;
    bottom: 0;
    justify-content: space-between;
}
.textarea {
    width: 100%;
    resize: none;
    height: 30px;
    text-align: center;
    padding-top: 10px;
    border: none;
    background-color:#ededed;
    border-radius: 5px 0px 0px 5px;
}
</style>