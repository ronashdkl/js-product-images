import './styles/style.scss';

const KodProductImage = (images:string[]) => {
    /**
     * Selectors
     */
    const thumbnail: HTMLElement = document.getElementById('kod_thumbs');
    const activeImages: HTMLCollection =  document.getElementsByClassName('kod_thumb active');
    const arrows: HTMLCollection = document.getElementsByClassName('kod_arrow')
    const displayImageContainer: HTMLElement = document.getElementById('kod_image');
    let displayImage:HTMLImageElement;
    const zoomContainer: HTMLElement = document.getElementById('kod_zoom');

    /**
     * Add Event listners
     */
    const events:any = {
           lightBoxListner: (event: any) => {
            const imgElement: HTMLImageElement = document.createElement('img');
            imgElement.src = event.target.src;

            zoomContainer.style.display = 'block'
            zoomContainer.appendChild(imgElement);
            /**
             * hide and remove after click full screen image
             */
            zoomContainer.addEventListener('click', function () {
                this.style.display = 'none';
                this.innerHTML = "";
            })
        },

         featuresListner: (event: any) => {

            if (activeImages.length > 0) {
                activeImages[0].classList.remove('active');
            } 
            event.target.classList.add('active');
            displayImage.src = event.target.src;
        },

        arrow:()=>{
        /**
         * event for thumbnails arrow
         */
        for (let index = 0; index < arrows.length; index++) {
            const element = arrows[index];
            element.addEventListener('click', function () {
                if (index == 0) {
                    thumbnail.scrollBy(0, -100)
                } else {
                    thumbnail.scrollBy(0, 100)
                }
            })

        }
        }
       
    }

    const init = ()=>{
       
        displayImage = document.createElement('img');
        displayImage.src = images[0];
        displayImage.id = "kod_display_image"
        displayImageContainer.appendChild(displayImage);
        images.forEach(url=>{
            const imgElement = document.createElement('img');
            imgElement.src = url;
            imgElement.classList.add('kod_thumb')
            imgElement.addEventListener('mouseover',events.featuresListner)
            imgElement.addEventListener('click',events.lightBoxListner)
            thumbnail.appendChild(imgElement);
        });
       
        events.arrow()
       
    }

    
   
   return init;
}

KodProductImage([
    '/assets/images/1.jpg',
    '/assets/images/2.jpg',
    '/assets/images/3.jpg',
    '/assets/images/4.jpg',
    '/assets/images/5.jpg',
    '/assets/images/6.jpg',
    '/assets/images/3.jpg',
    '/assets/images/4.jpg',
    '/assets/images/5.jpg',
    '/assets/images/6.jpg',
    '/assets/images/3.jpg',
    '/assets/images/4.jpg',
    '/assets/images/5.jpg',
    '/assets/images/6.jpg',
])();
    