import DonoList from "./donoList";

export default class DonoForm {
    constructor() {
        this.form = document.querySelector('.donate-form')
        this.input = document.querySelector('.donate-form__donate-input')
        this.value = ''

        this.input.addEventListener('input', (e) => {
            if (e.target.value >= 101) {
                return
            }
            this.value = e.target.value
        })

        this.form.addEventListener('submit', (e) => {
            e.preventDefault()

            new DonoList(this.value)
            this.input.value = ''
        })
    }
}