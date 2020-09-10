import './styles/style.scss';

const KodProductImage = (images:string[]) => {
    /**
     * Selectors
     */
    const thumbnail: HTMLElement = document.getElementById('kod_thumbs');
    const thumbnails: HTMLCollection = document.getElementsByClassName('kod_thumb');
    const activeImages: HTMLCollection = document.getElementsByClassName('kod_thumb active');
    const arrows: HTMLCollection = document.getElementsByClassName('kod_arrow')
    const displayImage: HTMLImageElement = document.getElementById('kod_image').getElementsByTagName('img')[0];
    const zoomContainer: HTMLElement = document.getElementById('kod_zoom');
    /**
     * Add Event listners
     */
    const events = () => {

        const lightBoxListner = (event: any) => {
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
        }

        const featuresListner = (event: any) => {

            if (activeImages.length > 0) {
                activeImages[0].classList.remove('active');
            }
            event.target.classList.add('active');
            displayImage.src = event.target.src;
        }


        /**
         * Event for thumbnails
         */
        for (let index = 0; index < thumbnails.length; index++) {
            const element = thumbnails[index];
            element.addEventListener('mouseover', featuresListner) //change display 
            element.addEventListener('click', lightBoxListner) //image light box

        }

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


    events();
}

KodProductImage([
    '/assets/images/1.jpg',
    '/assets/images/2.jpg',
    '/assets/images/3.jpg',
    '/assets/images/4.jpg',
    '/assets/images/5.jpg',
    '/assets/images/6.jpg',
]);