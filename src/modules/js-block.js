import jsImg from '../../assets/logo.png'

export default class JSBlock {
    #container

    constructor() {
        this.#container = document.createElement('div');
        this.#container.className = 'block'
    }

    render () {
        const mainTitle = document.createElement('h1')
        mainTitle.className = 'main-title'
        mainTitle.textContent = 'JavaScript'

        const JSImage = document.createElement('img')
        JSImage.className = 'js-image'
        JSImage.src = jsImg

        const foundedText = document.createElement('p')
        foundedText.textContent = 'С момента создания JS прошло'
        foundedText.className = 'founded-text'

        this.#container.append(mainTitle, JSImage, foundedText)

        return this.#container
    }
}