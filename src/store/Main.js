
const Main = {
  namespaced: true,

    state () {
      return {
        // ifRequestEverMade: false,

      }
    },

    mutations: {
        // requestIsNotMade (state) {
        //     state.ifRequestEverMade = false;
        // },
    },

    getters: {
        // ifSessionExpired (state) {
        //     const sessionElapsedTime = Date.now() - state.lastActivity; 
        //     // console.log(sessionElapsedTime - state.sessionExpirationTime);
        //     return sessionElapsedTime >= state.sessionExpirationTime ? true : false;
        // },
    },

    actions: {
        // allStatesDefault({commit}) {
        //     commit('requestIsNotMade');
        //     commit('sessionExpired');
        //     commit('authenticatedUserAbsent');
        //     commit('authenticatedAdminAbsent');
        //     commit('unsetlastActivity');
        //     commit('unsetSessionExpirationTime');
        //     commit('unsetGuard');
        // },

    }    

};

export default Main;
