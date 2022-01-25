class CarouselItem {
    constructor(item, container) {
        this.item = item
        this.container = $(container)
    }

    build = function () {
        const carouselItem = `
            <div class="card">
                <div class="card-image">
                    <img src="${ this.item['image'] }" alt="product image">
                </div>
                <div class="card-info">
                    <div class="card-title">
                        <b>${ this.item['title'] }</b><br>
                        <span>${ this.item['address'] }</span>
                    </div>
                    <div class="card-details">
                        <span>
                            <span><img src="src/images/icons/expand.png" width="12" alt="icone área do imóvel"></span>
                            <span>Área m²</span>
                            <span>-</span>
                        </span>
                        <span>
                            <span><img src="src/images/icons/bed.png" width="12" alt="icone quartos"></span>
                            <span>Dorm.</span>
                            <span>3</span>
                        </span>
                        <span>
                            <span><img src="src/images/icons/bed.png" width="12" alt="icone suítes"></span>
                            <span>Suítes</span>
                            <span>1</span>
                        </span>
                        <span>
                            <span><img src="src/images/icons/car.png" width="12" alt="icone vagas na garagem"></span>
                            <span>Vagas</span>
                            <span>1</span>
                        </span>
                        <span>
                            <span><img src="src/images/icons/water.png" width="12" alt="icone banheiros"></span>
                            <span>Banheiros</span>
                            <span>2</span>
                        </span>
                    </div>
                    <div class="product-price">R$ ${ this.item['price'] }</div>
                    <button class="secondary">DETALHES</button>
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
            pos +=  $(carouselItems[i]).width()
            carouselItemsWidth.push(pos)
        }

        console.log(carouselItemsWidth);
    
        const carouselNextIndex = getNextIndex()
        const carouselNextPos = carouselItemsWidth[carouselNextIndex]
    
        $(carousel).animate({scrollLeft: carouselNextPos}, 800)
        $(carousel).attr('pos', carouselNextIndex)
    }
}