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