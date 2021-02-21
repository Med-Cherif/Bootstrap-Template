// Links Of Navbar
const links = document.querySelectorAll('.nav-item')

for (let i = 0; i < links.length; i++) {
    links[i].onclick = () => {
        links.forEach(link => link.classList.remove('active'))
        links[i].classList.add('active')
    }
}

// The Height Of The Slider Of Images
const heightOfSlider = () => {

    const upperBar = document.querySelector('.upper-bar')
    const navbar = document.querySelector('.navbar')
    const slider = document.querySelector('.slider')

    slider.style.height = window.innerHeight - (upperBar.offsetHeight + navbar.offsetHeight) + 'px'
}
heightOfSlider()

window.addEventListener('resize', () => heightOfSlider())


// Work items ( li span )
const workItems = document.querySelectorAll('.work ul li')

for (let i = 0; i < workItems.length; i++) {
    workItems[i].onclick = () => {
        workItems.forEach(item => item.classList.remove('active'))
        workItems[i].classList.add('active')
    }
}

// Filter work images
const workItemsText = document.querySelectorAll('.work ul li span')
const images = document.querySelectorAll('.work .row img')
const col = document.querySelectorAll('.work .row .pr-0')

for (let i = 0; i < workItemsText.length; i++) {
    workItemsText[i].onclick = () => {
        if (workItemsText[i].textContent == 'all') {
            col.forEach(elem => {
                elem.style.opacity = 1
                elem.style.pointerEvents = 'auto'
            })
        } else {
            col.forEach(elem => {
                elem.style.opacity = 1
                elem.style.pointerEvents = 'auto'
            })
                
            images.forEach((img, j) => {
                if (img.getAttribute('class') !== workItemsText[i].textContent) {
                    col[j].style.opacity = .09
                    col[j].style.pointerEvents = 'none'
                } 
            })
        }
    }
}

