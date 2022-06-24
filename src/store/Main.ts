
const Main = {
  namespaced: true,

    state () {
      return {
        resetSensor: Math.random(),
        startingMinutes: 10,
        maxPlays: 40,
        playCounter: 40
      }
    },

    mutations: {
        hitResetSensor (state: any) {
            state.resetSensor = Math.random()
        },

        countDownMaxPlays (state: any) {
          state.playCounter--
        },

        resetPlayCounter (state: any) {
          state.playCounter = state.maxPlays
        }


    },

    actions: {


    }    

};

export default Main;
