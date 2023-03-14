
export default class TimerBlock {
    #date
    #timeContainer
    #timerText

    constructor(date) {
        this.#date = date
        this.#timeContainer = document.createElement('div')
        this.#timerText = document.createElement('h2')
    }

    render() {
        this.#timeContainer.id = 'timer'
        this.#timerText.className = 'timer-text'
        this.#timerText.textContent = ''

        const todayDate = document.createElement('div')
        todayDate.className = 'today-date'
        todayDate.textContent = new Date()

        this.#timeContainer.append(this.#timerText, todayDate)
        return this.#timeContainer
    }

}