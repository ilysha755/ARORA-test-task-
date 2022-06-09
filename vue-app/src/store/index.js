import { createStore } from 'vuex'

import usersAndMessages from './modules/usersAndMessages'
import me from './modules/me'
export default createStore({

  modules:{
    usersAndMessages,
    me
  }
    })
