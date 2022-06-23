
const Main = {
  namespaced: true,

    state () {
      return {
        reset: undefined,
        startingMinutes: 10
      }
    },

    mutations: {
        resetTheGame (state: any) {
            let audio = new Audio('/src/assets/audios/restart.mp3')
            audio.play()
            state.reset = Math.random();
        },
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
