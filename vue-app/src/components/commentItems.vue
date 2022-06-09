<template>
 <div v-if="typeof usersAndMessages != null">
    <div class="comment__item" v-for="user in usersAndMessages" :key="user.id">
        <div class="comments__img">
            <img v-if="typeof user.image != 'undefined' " :src="user.image" alt="" >
            <img v-if=" user.image == 'undefined' " src="./images/logo.png" alt="" >
        </div>
        <div class="comment__text">
            <p class="author">{{decodeURI(user.name)}} {{decodeURIComponent(user.surname)}}</p>
            <span class="comment" >{{decodeURIComponent(user.message)}}</span>
            <span class="time">{{new Date(user.timestamp * 1000).getDay()}}.{{new Date(user.timestamp * 1000).getMonth() + 1}}.{{new Date(user.timestamp * 1000).getFullYear() }} {{new Date(user.timestamp * 1000).getHours()}} : {{new Date(user.timestamp * 1000).getMinutes()}}</span>
            <span></span>

        </div>
    </div>
   </div>
   <div v-else>
       <p class="loader">Загрузка</p>
   </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
 

name:'commentItems',
mounted(){
this.FETCH_ALL_DATA()
},
methods:{
  ...mapActions([
    'FETCH_ALL_DATA',
    'POST_CONSTRUCTOR'
  ]
  )
    },
    computed:{
      ...mapGetters([
        'usersAndMessages',
      ]),
    },
   
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&&display=swap');
.comment__item {
    width: 100%;
    display:flex;
    justify-content: flex-start;
    padding-bottom: 5px;
    border-bottom: 1px solid #ededed;
    align-items: center;
    padding-top: 10px;
}
.comments__img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    img{
        width: 100%;
        background-position: center;
        background-size: cover;
        border-radius: 50%;
    }
}
.comment__text {
  span{ 
    display: block;
    font-weight: 300;
  }
}
.author {
  margin:0;
  font-weight: 500;
}
.loader{
  text-align: center;
  font-weight: 500;
}
.time {
  font-size: 12px;
  color: #aaa5a5;
}
</style>