import axios from 'axios'

export default ({
    state: {
        usersAndMessages:[],
        users:[],
        messages:[],
      },
      getters: {
        usersAndMessages(state){
        const fetchedUsers = state.users
        const fetchedMessages = state.messages
        const result = fetchedMessages.map(arr2 => {
        const withCurrentId = fetchedUsers.filter(item1 => item1['id'] === arr2['author']);
        const arr1 = withCurrentId.reduce((acc, curr) => {
        acc['name'] = (acc['name'] || "") + curr['name'];
        acc['image'] = (acc['image'] || "") + curr['image'];
        acc['surname'] = (acc['surname'] || "") + curr['surname'];
        return acc;
        }, {});
        return { ...arr2, ...arr1 };
        });
        return result;
        }
    },
      mutations: {
        FETCHING_USERS(state, fetchedUsers){
          state.users = fetchedUsers
        },
        FETCHING_POSTS(state, fetchedMessages){
          state.messages = fetchedMessages 
        },
      },
      actions: {
                         async FETCH_ALL_DATA({commit,state}){
                            const urlUsers = axios.get('/api/json/users')
                            const urlMessages =  axios.get('/api/json/messages')
                              await axios.all([ urlUsers, urlMessages]).then(axios.spread(function(res1, res2) {
                                let fetchedUsers = res1.data.answer.users
                                let fetchedMessages = res2.data.answer.messages
                                commit('FETCHING_USERS', fetchedUsers)
                                commit('FETCHING_POSTS', fetchedMessages)
                              }));
                            },
  }
})