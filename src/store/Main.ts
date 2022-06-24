import { cards } from '@/utils/cards'
import * as functions from '@/utils/functions'

const Main = {
  namespaced: true,

    state () {
      return {
        cards: cards.sort(() => 0.5 - Math.random()),
        resetSensor: Math.random(),
        startingMinutes: 0.1,
        timerInterval: undefined,
        maxPlays: 6,
        playCounter: 6,
        matchCandidates: [],
        matchedCards: []
      }
    },

    mutations: {
        hitResetSensor (state: any) {
            state.resetSensor = Math.random()

            setTimeout(() => {
              state.cards.sort(() => 0.5 - Math.random())
            }, 100);


            functions.clearCardsPulse()
            functions.removeTimerAnimation()
            functions.removeCounterAnimation()
            functions.enableCardEvents()
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
        },

        youAreWinner(state: any){
          const audio = new Audio('/src/assets/audios/winner.mp3')
          audio.play()
          state.matchedCards = []
          clearInterval(state.timerInterval)          
        },

        youAreLooser(state: any, type: any){
          let audio = undefined
          audio = new Audio('/src/assets/audios/looser.mp3')

          if (type == 'timeout') {
            audio = new Audio('/src/assets/audios/time-out.mp3')
            functions.addTimerAnimation()
          } else {
            functions.addCounterAnimation()
          }

          audio!.play()

          state.matchedCards = []
          clearInterval(state.timerInterval)    
          
          functions.disableCardEvents()
        }

    },

    actions: {
      resetGame({commit}: any){
        commit('hitResetSensor')
        commit('emptyMatchedCards')
        commit('emptyMatchCandidates')
      },

      testMatch({state, commit}: any){
        const matched = state.matchCandidates[0].name == state.matchCandidates[1].name

        if (!matched) {
          state.matchCandidates[0].flipBackFunc()
          state.matchCandidates[1].flipBackFunc()

          const audio = new Audio('/src/assets/audios/match-failure.mp3');
          audio.play();          
          
        } else {
          state.matchCandidates[0].ref.classList.add('animate-pulse-opacity')
          state.matchCandidates[1].ref.classList.add('animate-pulse-opacity')

          commit('populateMatchedCards', [
            state.matchCandidates[0].ref,
            state.matchCandidates[1].ref
          ])

          if (state.matchedCards.length == 16) {
            commit('youAreWinner')
          } else {
            const audio = new Audio('/src/assets/audios/match-success.mp3')
            audio.play();
          }

        }
        
        commit('emptyMatchCandidates')

        functions.enableCardEvents()

        if (state.playCounter == 0) {
          commit('youAreLooser')
        }

      }

    }    

};

export default Main;
