import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    profileName: null,
    plat:null //login from FB or Google=>decide logout function
  },
  mutations: {
    setProfileInfo(state, payload) {
      state.profileName = payload;
    },
    setPlat(state,payload){
      state.plat=payload;
    }
  },
  actions: {
    
  },
  modules: {},
});
