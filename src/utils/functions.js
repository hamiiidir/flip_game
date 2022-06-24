export function showResetButton(){
    const button = document.getElementById('resetButton')
    button.classList.remove('invisible')
}

export function hideResetButton(){
    const button = document.getElementById('resetButton')
    button.classList.add('invisible')
}

export function showGuideButton(){
    const button = document.getElementById('showGuide')
    button.classList.remove('hidden')
}

export function hideGuideButton(){
    const button = document.getElementById('showGuide')
    button.classList.add('hidden')
}

export function disableCardEvents(){
    const allCards = document.querySelectorAll('#card')

    allCards.forEach(item => {
      item.classList.add('pointer-events-none')
    });    
}

export function enableCardEvents(){
    const allCards = document.querySelectorAll('#card')

    allCards.forEach(item => {
      item.classList.remove('pointer-events-none')
    });    
}

export function clearCardsPulse(){
    const allCards = document.querySelectorAll('#card')

    allCards.forEach(item => {
        item.classList.remove('animate-pulse-opacity')
    });    
}

export function addTimerAnimation(){
    const timer = document.querySelector('#timer')
    timer.classList.add('text-red-500', 'animate-pulse-translate')
}

export function removeTimerAnimation(){
    const timer = document.querySelector('#timer')
    timer.classList.remove('text-red-500', 'animate-pulse-translate')
}

export function addCounterAnimation(){
    const maxPlayWrapper = document.querySelector('#maxPlayWrapper')
    const maxPlayCount = document.querySelector('#maxPlayCount')

    maxPlayWrapper.classList.add('text-yellow-500')
    maxPlayCount.classList.add('animate-pulse-scale')
}

export function removeCounterAnimation(){
    const maxPlayWrapper = document.querySelector('#maxPlayWrapper')
    const maxPlayCount = document.querySelector('#maxPlayCount')

    maxPlayWrapper.classList.remove('text-yellow-500')
    maxPlayCount.classList.remove('animate-pulse-scale')
}

export function shakeAllCandidateCards(){
    const allCards = document.querySelectorAll('#cardWrapper[candidate]')
    const audio = new Audio('/src/assets/audios/shake.mp3');

    allCards.forEach(item => {
      item.classList.add('animate-pulse-rotate')
    });      

    audio.play()

    setTimeout(() => {
        allCards.forEach(item => {
          item.classList.remove('animate-pulse-rotate')
        });      
    }, 410);
}

export function shakeSingleCard(element){
    const audio = new Audio('/src/assets/audios/shake.mp3');
    audio.play()   

    element.classList.add('animate-pulse-rotate')

    setTimeout(() => {
        element.classList.remove('animate-pulse-rotate')
    }, 410)    
}

export function addCandidateAttributeToWrappers(){
    const allWrappers = document.querySelectorAll('#cardWrapper') 
    
    allWrappers.forEach(item => {
        item.setAttribute('candidate', '')
    });      
}