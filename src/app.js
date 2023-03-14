import Utils from "./utils";

export default function InitApp () {
    const button = document.createElement('button')
    button.className = 'button'
    button.textContent = 'Изменить цвет страницы'

    button.addEventListener('click', ()=> {
        document.body.style.backgroundColor = `${Utils.getRandomColor()}`
    })

    document.body.append(button)
}

// <button className="button">Изменить цвет страницы</button>