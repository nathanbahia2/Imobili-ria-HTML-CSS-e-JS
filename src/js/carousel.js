class CarouselItem {
    constructor(item, container) {
        this.item = item
        this.container = $(container)
    }

    build = function () {
        const carouselItem = `
            <div class="card">
                <div class="product-price">R$ ${ this.item['price'] }</div>
                <div class="card-image">
                    <img src="${ this.item['image'] }" alt="product image">
                </div>
                <div class="card-info">
                    <div class="card-title">
                        <b>${ this.item['title'] }</b><br>
                        <span>${ this.item['address'] }</span>
                    </div>
                </div>
            </div>
        `
        this.container.append(carouselItem)
    }

    static handleCarousel ({direction, carouselId}) {        
        function getNextIndex() {
            const carouselCurrentIndex = parseInt($(carousel).attr('pos'))
            if (direction == 'next') 
                return carouselCurrentIndex + 2 <= carouselItems.length ? carouselCurrentIndex + 1 : 0
            return carouselCurrentIndex > 0 ? carouselCurrentIndex - 1 : carouselItems.length - 1
        }
    
        const carousel = $(`#${carouselId}`)
        const carouselItems = $(`#${carouselId} > .card`)    
    
        let pos = 0
        let carouselItemsWidth = [0]
    
        for (let i = 0; i < carouselItems.length; i++) {
            pos +=  $(carouselItems[i]).width() + 16
            carouselItemsWidth.push(pos)
        }
    
        const carouselNextIndex = getNextIndex()
        const carouselNextPos = carouselItemsWidth[carouselNextIndex]
    
        $(carousel).animate({scrollLeft: carouselNextPos}, 800)
        $(carousel).attr('pos', carouselNextIndex)
    }
}