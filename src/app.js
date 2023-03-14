
export default function App () {
    const cookieContainer = document.querySelector('.cookie-consent')
    if (localStorage.getItem('isAcceptCookies')) {
        cookieContainer.classList.add('hide')
    } else {
        const btn = document.querySelector('.cookie-consent__button')
        btn.addEventListener('click',() => {
            localStorage.setItem('isAcceptCookies','ok')
            cookieContainer.classList.add('hide')
        })
    }
}