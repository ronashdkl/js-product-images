# kodProduct Images Plugin

By Ronash Dhakal. Version 0.0.0

**Todo**

* [ ] Image zoom

<br>
**Development Guide**

1. download the repository
2. cd into the project
3. `npm install` it and run it by
4. `npm start`
5. to build your project `npm build:prod`

<br>
**User Guide**

* Link style and script in html file from dist folder.
* copy assets directory to your projrct directory.
* copy and paste following code inside html body

``` htmlbars
 <div class="kod_product_image">
        <div id="kod_thumbs_wrapper">
          <img src="/assets/n_p.png" class="kod_arrow up" alt="">
          <div id="kod_thumbs"></div>
          <img src="/assets/n_p.png" class="kod_arrow down" alt="">
        </div>
        <div id="kod_image"></div>
        <div id="kod_zoom"></div>
 </div>
```

* call <span class="colour" style="color:rgb(220, 220, 170)">KodProductImage() </span> inside script tag in html or create new custom.js and call it.

<span class="colour" style="color:rgb(220, 220, 170)">KodProductImage(image:array)</span> require images array. i.e url of image
<br>
``` javascript
KodProductImage([
    '/assets/images/1.jpg',
    '/assets/images/2.jpg',
    '/assets/images/3.jpg',
    '/assets/images/4.jpg',
    '/assets/images/5.jpg',
    '/assets/images/6.jpg',
])();
```