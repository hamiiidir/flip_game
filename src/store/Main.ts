
const Main = {
  namespaced: true,

    state () {
      return {
        resetSensor: Math.random(),
        startingMinutes: 10,
        timerInterval: undefined,
        maxPlays: 40,
        playCounter: 40,
        matchCandidates: [],
        matchedCards: []
      }
    },

    mutations: {
        hitResetSensor (state: any) {
            state.resetSensor = Math.random()

            const allCards = document.querySelectorAll('#card')

            allCards.forEach(item => {
              item.classList.remove('animate-custom-pulse')
            });
            
        },

        countDownMaxPlays (state: any) {
          state.playCounter--
        },

        resetPlayCounter (state: any) {
          state.playCounter = state.maxPlays
        },

        emptyMatchCandidates (state: any){
          state.matchCandidates = []
        },

        populateMatchedCards (state: any, data: any){
          state.matchedCards.push(...data)
        },

        emptyMatchedCards (state: any, data: any){
          state.matchedCards = []
        }

    },

    actions: {
      testMatch({state, commit}: any){
        const matched = state.matchCandidates[0].name == state.matchCandidates[1].name

        if (!matched) {
          state.matchCandidates[0].flipBackFunc()
          state.matchCandidates[1].flipBackFunc()

          const audio = new Audio('/src/assets/audios/match-failure.mp3');
          audio.play();          
          
        } else {
          state.matchCandidates[0].ref.classList.add('animate-custom-pulse')
          state.matchCandidates[1].ref.classList.add('animate-custom-pulse')

          commit('populateMatchedCards', [
            state.matchCandidates[0].ref,
            state.matchCandidates[1].ref
          ])

          let audio

          if (state.matchedCards.length == 16) {
            audio = new Audio('/src/assets/audios/winner.mp3')
            commit('emptyMatchedCards')
            clearInterval(state.timerInterval)
          } else {
            audio = new Audio('/src/assets/audios/match-success.mp3')
          }

          audio!.play();
        }
        
        commit('emptyMatchCandidates')
      }

    }    

};

export default Main;
