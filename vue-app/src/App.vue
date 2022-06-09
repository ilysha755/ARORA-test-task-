<template>
<main>
    <comment-item/>
<text-input/>
</main>
</template>

<script>


import commentItem from "@/components/commentItems.vue"
import textInput from "@/components/textInput.vue"
export default {
components:{
  commentItem,
  textInput
},
}
</script>

<style lang="scss">
body{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

main{
max-width: 1200px;
margin: 0 auto;
position: relative;

}
</style>