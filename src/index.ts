import './styles/style.scss';
const ImageZoom = require('./zoomify');
const KodProductImage = (images:string[]) => {
    var imagezoom:any;
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
            zoomify();
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

    const zoomify = ()=>{
        var w = window.innerWidth;
        if(w < 500){
            return;
        }
        if(imagezoom){
            imagezoom.kill();
        }
        var options = {
            width: 400,
            zoomWidth: 500,
            offset: {vertical: 35, horizontal: 0}
        };
        imagezoom =new ImageZoom(document.getElementById("kod_image"), options);
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
       
        events.arrow();
        zoomify();

       
    }

    
   
   return init;
}

Object.assign(window, { KodProductImage });