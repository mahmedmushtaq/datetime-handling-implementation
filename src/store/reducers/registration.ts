import { ACTIONS } from "../enums";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

interface loginInitialState {
  id: string;
  full_name: string;
  email: string;
  token: string;
  
}

interface Actions {
  type: string;
  payload: loginInitialState;
}

const initialState: loginInitialState = {
  id: "",
  email: "",
  full_name: "",
  token: "",
  
};

// const persistConfig = {
//   key: "login-reducer",
//   storage,
// };

const registrationReducer = (state = initialState, actions: Actions) => {
  switch (actions.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        id: actions.payload.id,
        email: actions.payload.email,
        full_name: actions.payload.full_name,
        token: actions.payload.token,
        
      };
    
    
    case ACTIONS.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

//const persistedReducer = persistReducer(persistConfig, loginReducer);

export default registrationReducer;
