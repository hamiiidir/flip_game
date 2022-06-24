import { cards } from '@/utils/cards'
import * as functions from '@/utils/functions'

const Main = {
  namespaced: true,

    state () {
      return {
        cards: cards.sort(() => 0.5 - Math.random()),
        start: false,
        reset: Math.random(),
        startingMinutes: 2,
        timeCounter: undefined,
        timerInterval: undefined,
        maxPlays: 40,
        playCounter: 40,
        maxGuide: 3,
        guideCounter: 3,
        matchCandidates: [],
        matchedCards: []
      }
    },

    mutations: {
        startTheGame (state: any) {
            if (!state.start) {
            state.start = true
            }
        },

        stopTheGame (state: any) {
            state.start = false
        },

        setInterval (state: any, interval: any) {
            state.timerInterval = interval
        },

        updateTimeCounter (state: any, count: any) {
            state.timeCounter = count
        },

        countDownMaxPlays (state: any) {
            state.playCounter--
        },

        resetPlayCounter (state: any) {
            state.playCounter = state.maxPlays
        },

        countDownMaxGuide (state: any) {
            state.guideCounter--
        },

        resetGuideCounter (state: any) {
            state.guideCounter = state.maxGuide
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
    },

    getters: {
      startingSeconds(state: any){
        return state.startingMinutes * 60
      }
    },

    actions: {
      resetGame({state, commit}: any){
        
        state.reset = Math.random()

        setTimeout(() => {
          state.cards.sort(() => 0.5 - Math.random())
        }, 100);

        functions.clearCardsPulse()
        functions.removeTimerAnimation()
        functions.removeCounterAnimation()
        functions.enableCardEvents()
        functions.addCandidateAttributeToWrappers()
        
        commit('stopTheGame')
        commit('emptyMatchedCards')
        commit('emptyMatchCandidates')
      },

      victory({state}: any){
        const audio = new Audio('/src/assets/audios/winner.mp3')
        audio.play()
        clearInterval(state.timerInterval)           
      },

      gameOver({state}: any, type: any){
        let audio = undefined
        audio = new Audio('/src/assets/audios/looser.mp3')

        if (type == 'timeout') {
          audio = new Audio('/src/assets/audios/time-out.mp3')
          functions.addTimerAnimation()
        } else {
          functions.addCounterAnimation()
        }

        audio!.play()

        clearInterval(state.timerInterval)  
        
        functions.showResetButton()
        functions.hideGuideButton()
      },

      testMatch({state, commit, dispatch}: any){
        const matched = state.matchCandidates[0].name == state.matchCandidates[1].name

        const refactor = () => {
            commit('emptyMatchCandidates')
            if (state.timeCounter > 0 && state.playCounter > 0) {
                functions.enableCardEvents()
            }                
            if (state.playCounter == 0 && (state.matchedCards.length != state.cards.length)) {
                dispatch('gameOver')
            }               
        }

        if (!matched) {
            setTimeout(() => {
                state.matchCandidates[0].flipBackFunc()
                state.matchCandidates[1].flipBackFunc()

                const audio = new Audio('/src/assets/audios/match-failure.mp3');
                audio.play();  
                
                setTimeout(() => {
                    refactor()
                }, 100);
                
            }, 700);
          
        } else {
            state.matchCandidates[0].ref.classList.add('animate-pulse-opacity')
            state.matchCandidates[1].ref.classList.add('animate-pulse-opacity')

            state.matchCandidates[0].ref.parentElement.removeAttribute('candidate')
            state.matchCandidates[1].ref.parentElement.removeAttribute('candidate')

            commit('populateMatchedCards', [
                state.matchCandidates[0].ref,
                state.matchCandidates[1].ref
            ])

            if (state.matchedCards.length == state.cards.length) {
                dispatch('victory')
            } else {
                const audio = new Audio('/src/assets/audios/match-success.mp3')
                audio.play();
            }
            
            refactor()
        }
      }

    }    

};

export default Main;
