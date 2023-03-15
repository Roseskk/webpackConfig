import Service from "../utils/service";

export default class DonoList {
    constructor(value) {
        this.donoListContainer = document.querySelector('.donates-container__donates')
        this.h1 = document.querySelector('#total-amount')
        this.donoItems = document.querySelectorAll('.donate-item')

        this.price = 0

        const div = document.createElement('div')
        div.className = 'donate-item'
        div.innerHTML = `${Service.dateCreator()} - <b>${value}$</b>`
        this.donoListContainer.append(div)

        this.donoItems.forEach(item => {
            const price = item.querySelector('b').textContent.slice(0,-1)
            this.price += Number(price)
        })
        this.price += Number(value)

        this.h1.textContent = `${this.price}$`
    }
}