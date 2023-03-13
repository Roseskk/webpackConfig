import '../index.css'

import Image from '../assets/logo.png'

console.log('Hello World!');

function createPage() {
    const img = document.createElement('img')
    img.src = Image

    document.body.append(img)
}

createPage()

