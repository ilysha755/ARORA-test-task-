import axios from 'axios'

export default ({
    state: {
        myId:[],
        userMessage:''
        
      },
    getters: {
        getMyId(state){
            return state.myId
        },
     
    },
    mutations: {
        FETCH_MY_ID(state, myId){
            state.myId = myId
        },
        SET_USER_MESSAGE(state,userMessage){
          state.userMessage = userMessage
          
        }
      },
    actions: {
              async FETCH_MY_ID({commit}){
                  axios.get('/api/json/me')
                  .then(resp=>{
                      const myId = resp.data.answer.me.id
                      commit('FETCH_MY_ID',myId )
                  })
              }   ,   
              async SEND_COMMENT({state, dispatch }){
                await axios.post('/api/json/message', {
                    author: String(state.myId),
                    message: encodeURI(state.userMessage)
                },
                    {
                        headers: {
                          "x-access-token": "token-value",
                        },
                      })
                    .then(resp=> {
                        return resp
                    })  
                    .catch(error=> {
                        console.log(error);
                      }) 
                      dispatch('FETCH_ALL_DATA')
                      
        },

            
        }
                               
                               

          
    
})