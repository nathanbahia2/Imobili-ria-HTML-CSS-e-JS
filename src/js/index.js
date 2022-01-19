$("#btn-open-menu").on('click', openCloseMenu)
$("#btn-close-menu").on('click', openCloseMenu)

$("#prev-carousel").on('click', () => CarouselItem.handleCarousel({direction:'prev', carouselId: 'carousel'}))
$("#next-carousel").on('click', () => CarouselItem.handleCarousel({direction:'next', carouselId: 'carousel'}))


function  openCloseMenu () {
    const menu = document.getElementById("menu-mobile")
    menu.className == 'hidden' ? menu.className = 'flex' : menu.className = 'hidden'
}


$(function () {
    const container = document.getElementById('carousel')
    for (let item of products) {
        let carousel = new CarouselItem(item, container)
            carousel.build()
    }
})
