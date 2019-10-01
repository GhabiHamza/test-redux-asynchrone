
import {Get_Users} from '../actions/types'

  const ReducerProfile=(state=[],action)=>{
      switch (action.type){
        case Get_Users:
          return [
            ...state,
            ...action.users
          ]
        default:
            return state
      }

  }
  export default ReducerProfile;