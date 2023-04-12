const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

// function short hand =>
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})