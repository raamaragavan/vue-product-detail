<template lang="">
    <div class="bg-gray-100 py-8">
        
        <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4 md:w-1/3 relative">
                    <div class="carousel"  @mouseleave="imageZoomOut">
  <div class="slides" @touchstart="touchStartMethod"
  @touchend="touchEndMethod">
    <div class="slide" @click="openDetailPopup(productDetail)" v-for="(productDetail, index) in productDetails" :key="index">
  <img v-if="productDetail.type === 'IMAGES'" @mouseenter="imageZoom" v-bind:src="'./../assets/products/' + productDetail.src">
  <div class="video-section" v-if="productDetail.type === 'VIDEOS'">
    <img  v-bind:src="'./../assets/products/' + productDetail.thumbnail">
    <a class="button button-play " href="javascript:void(0);"></a>
  </div>
    </div>
  </div>
  <div class="home-thumbnails-section">
  <div class="home-thumbnails" :class="{ 'home-thumbnails-active':productDetail.isActive }" @click="goToSlide(index)" v-for="(productDetail, index) in productDetails" data-index='{{index+1}}' :key="index">
  <img v-if="productDetail.type === 'IMAGES'" v-bind:src="'./../assets/products/' + productDetail.src">
  <div class="thumbnail-video-section" v-if="productDetail.type === 'VIDEOS'">
    <a class="button thumbnail-button-play" href="javascript:void(0);"></a>
  </div>    
</div>
  </div>
  
  <div class="controls" id="slider-controls">
    <div class="control prev-slide" @click="previousSlide()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
</path>
</svg></div>
    <div class="control next-slide"  @click="nextSlide()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
</path>
</svg></div>
  </div>
</div>
<div class='slider-interface'>
    <div v-for="(productDetail, index) in productDetails" :key="index">
        <button class='slider-dot' v-if="productDetail.type === 'IMAGES'" :class="{ 'active':productDetail.isActive }" @click="goToSlide(index)"   data-index='{{index+1}}'></button>
    <button class='dots-button-play' v-if="productDetail.type !== 'IMAGES'" :class="{ 'active':productDetail.isActive }" @click="goToSlide(index)" data-index='{{index+1}}'></button>
    </div>
   
    
  </div>
                </div>
                <div class="w-full px-4 md:w-2/3 text-left relative">
                    <div id="result" class="img-zoom-result" style="display:none;"></div>
                    <div class="lg:pl-20">
                        <div class="mb-8 small-device-margin border-bottom-gray">
                            <p>
                            <span class="text-gray-600 dark:text-gray-300 text-left text-light">One Plus</span>
                            <span class="text-green-600 dark:text-green-300 pull-right">Hurry Limited stock</span>
                            </p>
                            <h4 class="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-2xl">
                                OnePlus Nord CE 3 5G</h4>
                            <p class="inline-block mb-8 font-bold text-gray-700 dark:text-gray-400 ">
                                <span>£1000.99</span>
                            </p>
                        </div>
                        <div class="mb-8 border-bottom-gray">
                            <p class="mb-4"><span class="font-bold">Sim:</span><span class="description-text"> DUAL SIM</span></p>
                            <p class="mb-4"><span class="font-bold">Condition:</span><span class="description-text"> LIKE NEW</span></p>
                            <p class="mb-4"><span class="font-bold">Colour:</span><span class="description-text"> GREY SHIMMER</span></p>
                            <p class="mb-4"><span class="font-bold">Network:</span><span class="description-text"> UNLOCKED</span></p>
                            <p class="mb-4"><span class="font-bold">Storage:</span><span class="description-text"> 256GB</span></p>
                        </div>
                        <div class="w-32 mb-8 ">
                            <div class="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                <button type="button" @click="decrementQuantity()"
                                    class="w-20 h-full text-gray-600 rounded-r outline-none cursor-pointer dark:text-gray-400">
                                    <span class="m-auto text-3xl font-thin">-</span>
                                </button>
                                <input type="text" :value="quantity"
                                    disabled="true" class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-200 outline-none dark:text-gray-400 focus:outline-none text-md hover:text-black"
                                    placeholder="1">
                                <button
                                type="button" @click="incrementQuantity()" class="w-20 h-full text-gray-600 rounded-r outline-none cursor-pointer dark:text-gray-400">
                                    <span class="m-auto text-3xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center -mx-4 ">
                            <div class="w-full px-4 mb-4">
                                <button
                                    class="flex items-center justify-center w-full p-4 add-basket-btn">
                                    Add to Basket
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
<div v-if="detailPopup" class="modal-backdrop">
      <div class="modal-outer-section">
        <div class="modal-section">
          <div class="modal-header">
            <div class="hidden md:block text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px relative">
        <li class="popover-tab"  v-for="(tab, index) in tabList" :key="index">
            <a href="javascript:void(0);" @click="goToTab(tab.name)" :class="{ 'active':tab.isActive }">{{tab.name}}</a>
        </li>
        <li  class="icon-right">
            <a href="javascript:void(0);" class="font-bold text-2xl text-gray-600" @click="closeDetailPopup()">x</a>
        </li>
    </ul>
</div>
<div class="show-small-device pull-left mb-8">
    <button type="button" class="back-btn font-bold text-2xl text-gray-600" @click="closeDetailPopup()">Back</button>
</div>
            
          </div>
          <div class="modal-content hidden-overflow popover-content">
            <div class="flex flex-wrap height-full" :class="{ hidden:tabName !== 'IMAGES' }">
                
            <div class="w-full px-4 md:w-2/3 text-left relative height-full">
                <div class="show-small-device mb-8">
                    <div class="popover-img-title mb-4" title="OnePlus Nord CE 3 5G (Grey Shimmer, 12GB RAM, 256GB Storage)" style="">OnePlus Nord CE 3 5G</div>
                                <div class="mb-4"><div class="popover-img-desc">Colour:Grey Shimmer</div><div  class="popover-img-desc">Size:12GB RAM, 256GB Storage</div></div>
</div>
                <div class="height-full hidden-overflow">
                    <div class="popover-carousel" >
  <div class="popover-slides" @touchstart="popoverImgTouchStartMethod"
  @touchend="popoverImgTouchEndMethod">
    <div class="popover-slide"  v-for="(popoverProductDetail, index) in popoverProductDetails" :key="index">
        <input class="show-only-big-device" type="checkbox" v-bind:id="'zoomCheck'+index">
  <label class="show-only-big-device" v-bind:for="'zoomCheck'+index">
    <img v-bind:src="'./../assets/products/' + popoverProductDetail.src">
  </label>
  <div class="show-small-device mobile-image-zoom" @dblclick="doubleTab" v-bind:style='{ backgroundImage: "url(./../assets/products/" + popoverProductDetail.src +")", }'>

  </div>
    </div>
  </div>
                    </div>

</div>

            </div>
            <div class="w-full px-4 md:w-1/3 text-left height-full border-grey hidden md:block ">
                <div class="mb-8">
                                <div class="popover-img-title mb-4" title="OnePlus Nord CE 3 5G (Grey Shimmer, 12GB RAM, 256GB Storage)" style="">OnePlus Nord CE 3 5G</div>
                                <div class="mb-4"><div class="popover-img-desc">Colour:Grey Shimmer</div><div  class="popover-img-desc">Size:12GB RAM, 256GB Storage</div></div>
                </div>
                <div class="product-thumb-nails" :class="{ 'thumbnails-active':productDetail.isActive }" @click="goToPopoverSlide(thumbnailIndex)" v-for="(productDetail, thumbnailIndex) in popoverProductDetails" data-index='{{thumbnailIndex}}' :key="thumbnailIndex">
  <img v-if="productDetail.type === 'IMAGES'" v-bind:src="'./../assets/products/' + productDetail.src">
    </div>
            
            </div>
                </div>
                <div class="flex flex-wrap height-full" :class="{ hidden:tabName !== 'VIDEOS' }">
                    <div class="w-full px-4 md:w-2/3 text-left relative height-full">
                    <div class="center-flex" v-if="!popoverProductDetail">
                        No Videos Found
                    </div>
                    <div class="center-flex" v-if="popoverProductDetail">
                        <video controls width="500" height="400" autoplay>
  <source v-bind:src="'./../assets/products/' + popoverProductDetail.src"  type="video/mp4">
  Your browser does not support the video tag.
</video>
                    </div>
                    </div>
                    <div class="w-full px-4 md:w-1/3 text-left height-full border-grey hidden md:block ">
                        <div class="mb-8">
                                <div class="popover-img-title mb-4" title="OnePlus Nord CE 3 5G (Grey Shimmer, 12GB RAM, 256GB Storage)" style="">OnePlus Nord CE 3 5G</div>
                                <div class="mb-4"><div class="popover-img-desc">Colour:Grey Shimmer</div><div  class="popover-img-desc">Size:12GB RAM, 256GB Storage</div></div>
                </div>
                        <div class="mb-8">
                    <div class="product-thumb-nails" :class="{ 'thumbnails-active':productDetail.isActive }" @click="selectVideo(productDetail)" v-for="(productDetail, thumbnailIndex) in popoverProductDetails" data-index='{{thumbnailIndex}}' :key="thumbnailIndex">
                        <div class="thumbnail-video-section" v-if="productDetail.type === 'VIDEOS'">
    <a class="button thumbnail-button-play" href="javascript:void(0);"></a>
  </div>  
    </div>
</div>
          </div>
                    </div>
          </div>
          <div class="popover-thumbnail-section show-small-device">
<div class="popover-mobile-thumbnails" :class="{ 'thumbnails-active':productDetail.isActive }" @click="goToPopoverSlide(thumbnailIndex)" v-for="(productDetail, thumbnailIndex) in popoverProductDetails" data-index='{{thumbnailIndex}}' :key="thumbnailIndex">
  <img v-if="productDetail.type === 'IMAGES'" v-bind:src="'./../assets/products/' + productDetail.src">
  <div class="thumbnail-video-section" v-if="productDetail.type === 'VIDEOS'">
    <a class="button thumbnail-button-play" href="javascript:void(0);"></a>
  </div>  
    </div>
</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dist1: 0,
            dist2: 0,
            detailPopup: false,
            doubleTapEnabled: false,
            quantity: 1,
            tabName: 'IMAGES',
            tabList: [{ name: 'VIDEOS', isActive: false }, { name: 'IMAGES', isActive: true }],
            productDetails: [{
                'src': 'product-zoom-1.jpg',
                "type": "IMAGES",
                "thumbnail": 'product-zoom-1.jpg',
                'name': '',
                'isActive': true
            }, {
                'src': 'product-zoom-2.jpg',
                "type": "IMAGES",
                "thumbnail": 'product-zoom-2.jpg',
                'name': '',
                'isActive': false
            }, {
                'src': 'product-video-1.mp4',
                "type": "VIDEOS",
                "thumbnail": 'product-video-1.jpg',
                'name': '',
                'isActive': false
            },
            {
                'src': 'product-zoom-3.jpg',
                "type": "IMAGES",
                "thumbnail": 'product-zoom-3.jpg',
                'name': '',
                'isActive': false
            }, {
                'src': 'product-video-2.mp4',
                "type": "VIDEOS",
                "thumbnail": 'product-video-2.jpg',
                'name': '',
                'isActive': false
            }, {
                'src': 'product-zoom-4.jpg',
                'name': '',
                "type": "IMAGES",
                "thumbnail": 'product-zoom-4.jpg',
                'isActive': false
            }, {
                'src': 'product-zoom-5.jpg',
                "type": "IMAGES",
                "thumbnail": 'product-zoom-5.jpg',
                'name': '',
                'isActive': false
            }],
            videoTab: false,
            popoverProductDetails: [],
            popoverProductDetail: null,
            current: 0,
            slides: null,
            maxLeft: 0,
            slidesCount: 0,
            popoverCurrent: 0,
            popoverSlides: null,
            popoverMaxLeft: 0,
            popoverSlidesCount: 0,
            popoverContentHeight: window.innerHeight - 155,
            touchstartX: 0,
            touchendX: 0
        }
    },

    mounted() {
        if (window.innerWidth < 800) {
            const productDetails = this.productDetails.filter(productDetail => productDetail.type !== 'VIDEOS')
            this.productDetails = productDetails
        }
        setTimeout(() => {
            this.slides = document.querySelector(".slides");
            this.slidesCount = this.slides.childElementCount;
            this.maxLeft = (this.slidesCount - 1) * 100 * -1;
            this.popoverProductDetails = JSON.parse(JSON.stringify(this.productDetails));
        }, 350);

    },
    methods: {
        start(ev) {
            if (ev.targetTouches.length == 2) {//check if two fingers touched screen
                this.dist1 = Math.hypot( //get rough estimate of distance between two fingers
                    ev.touches[0].pageX - ev.touches[1].pageX,
                    ev.touches[0].pageY - ev.touches[1].pageY);
            }
        },
        move(ev) {
            if (ev.targetTouches.length == 2 && ev.changedTouches.length == 2) {
                // Check if the two target touches are the same ones that started
                this.dist2 = Math.hypot(//get rough estimate of new distance between fingers
                    ev.touches[0].pageX - ev.touches[1].pageX,
                    ev.touches[0].pageY - ev.touches[1].pageY);
                //alert(dist);
                if (this.dist1 > this.dist2) {//if fingers are closer now than when they first touched screen, they are pinching
                    alert('zoom out');
                }
                if (this.dist1 < this.dist2) {//if fingers are further apart than when they first touched the screen, they are making the zoomin gesture
                    alert('zoom in');
                }
            }
        },
        goToTab(tabName) {
            this.popoverProductDetail = null;
            this.tabName = tabName;
            this.tabList.forEach((item) => {
                if (item.name === tabName) {
                    item.isActive = true;
                } else {
                    item.isActive = false;
                }
            })
            const popoverProductDetails = JSON.parse(JSON.stringify(this.productDetails));
            const tabProductDetails = popoverProductDetails.filter((productDetail) => productDetail.type === tabName);
            this.popoverProductDetails = tabProductDetails;
            if (tabName === 'VIDEOS') {
                this.popoverProductDetail = this.popoverProductDetails[0];
            }
            this.selectActiveVideoThumbnail(this.popoverProductDetails[0], false);
        },
        touchStartMethod(touchEvent) {
            if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
                return;
            }
            const posXStart = touchEvent.changedTouches[0].clientX;
            addEventListener('touchend', (touchEvent) => this.touchEndMethod(touchEvent, posXStart), { once: true });
        },
        touchEndMethod(touchEvent, posXStart) {
            if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
                return;
            }
            const posXEnd = touchEvent.changedTouches[0].clientX;
            if (posXStart < posXEnd) {
                this.previousSlide(); // swipe right
            } else if (posXStart > posXEnd) {
                this.nextSlide(); // swipe left
            }
        },
        popoverImgTouchStartMethod(touchEvent) {
            if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
                return;
            }
            const posXStart = touchEvent.changedTouches[0].clientX;
            addEventListener('touchend', (touchEvent) => this.popoverImgTouchEndMethod(touchEvent, posXStart), { once: true });
        },
        popoverImgTouchEndMethod(touchEvent, posXStart) {
            if (touchEvent.changedTouches.length !== 1) { // We only care if one finger is used
                return;
            }
            const posXEnd = touchEvent.changedTouches[0].clientX;
            if (posXStart < posXEnd) {
                this.previousPopoverSlide(); // swipe right
            } else if (posXStart > posXEnd) {
                this.nextPopoverSlide(); // swipe left
            }
        },

        closeDetailPopup() {
            this.detailPopup = false;
            document.getElementById('slider-controls').classList.remove('hide-controls');
            document.querySelector('body').classList.remove('hidden-overflow');
        },
        openDetailPopup(selectedProductDetail) {
            this.popoverProductDetail = null;
            this.popoverProductDetails = JSON.parse(JSON.stringify(this.productDetails));
            this.detailPopup = true;
            document.getElementById('slider-controls').classList.add('hide-controls')
            document.querySelector('body').classList.add('hidden-overflow');
            setTimeout(() => {
                this.initPopoverSlides(selectedProductDetail);
                this.tabName = selectedProductDetail.type;
                this.tabList.forEach((item) => {
                    if (item.name === selectedProductDetail.type) {
                        item.isActive = true;
                    } else {
                        item.isActive = false;
                    }
                })
                if (selectedProductDetail.type === 'VIDEOS') {
                    this.popoverProductDetail = this.popoverProductDetails.find((popoverProductDetail) => popoverProductDetail.src === selectedProductDetail.src)
                }
                const openPopup = true;
                this.selectActiveVideoThumbnail(selectedProductDetail, openPopup);
                
            }, 250);

        },
        selectActiveVideoThumbnail(selectedProductDetail, openPopup) {
            this.popoverProductDetails.forEach((item, index) => {
                if (item.src === selectedProductDetail.src) {
                    item.isActive = true;
                    if (openPopup) {
                        this.goToPopoverSlide(index);
                    }
                } else {
                    item.isActive = false;
                }
            })
        },
        selectVideo(selectedProductDetail) {
            this.popoverProductDetail = null;
            setTimeout(() => {
                this.popoverProductDetail = selectedProductDetail
                this.selectActiveVideoThumbnail(selectedProductDetail, false);
                console.log(this.popoverProductDetail);
            }, 500);

        },
        initPopoverSlides(selectedProductDetail) {
            const popoverProductDetails = this.popoverProductDetails.filter((productDetail) => productDetail.type === selectedProductDetail.type);
            this.popoverProductDetails = popoverProductDetails
            this.popoverSlides = document.querySelector(".popover-slides");
            this.popoverSlidesCount = this.popoverSlides.childElementCount;
            this.popoverMaxLeft = (this.popoverSlidesCount - 1) * 100 * -1;
            this.popoverProductDetails.forEach((item, sliderIndex) => {
                if (sliderIndex === 0) {
                    item.isActive = true;
                } else {
                    item.isActive = false;
                }
            })
        },
        incrementQuantity() {
            this.quantity++;
        },
        decrementQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },

        goToSlide(index) {
            this.current = (index) * 100 * -1;
            this.slides.style.left = this.current + "%";
            this.productDetails.forEach((item, sliderIndex) => {
                if (sliderIndex === index) {
                    item.isActive = true;
                } else {
                    item.isActive = false;
                }
            })
            this.imageZoomOut();
        },
        changeSlide(next = true) {

            if (next) {
                this.current += this.current > this.maxLeft ? -100 : this.current * -1;
            } else {
                this.current = this.current < 0 ? this.current + 100 : this.maxLeft;
            }
            this.productDetails.forEach((item, sliderIndex) => {
                if ((sliderIndex) * 100 * -1 === this.current) {
                    item.isActive = true;
                } else {
                    item.isActive = false;
                }
            })
            this.slides.style.left = this.current + "%";
            this.imageZoomOut();
        },
        changePopoverSlide(next = true) {

            if (next) {
                this.popoverCurrent += this.popoverCurrent > this.popoverMaxLeft ? -100 : this.popoverCurrent * -1;
            } else {
                this.popoverCurrent = this.popoverCurrent < 0 ? this.popoverCurrent + 100 : this.popoverMaxLeft;
            }
            this.popoverProductDetails.forEach((item, sliderIndex) => {
                if ((sliderIndex) * 100 * -1 === this.popoverCurrent) {
                    item.isActive = true;
                } else {
                    item.isActive = false;
                }
            })
            this.popoverSlides.style.left = this.popoverCurrent + "%";
        },
        imageZoom(e) {
            console.log('e', e);
            var img, lens, result, cx, cy;
            img = e.target;
            result = document.getElementById('result');
            result.style.display = 'block';
            const zoomLens = document.querySelectorAll('.img-zoom-lens');
            if (zoomLens && zoomLens.length) {
                zoomLens.forEach((zoomNode) => {
                    zoomNode.remove();
                })
            }
            /* Create lens: */
            lens = document.createElement("DIV");
            lens.setAttribute("class", "img-zoom-lens");
            /* Insert lens: */
            img.parentElement.insertBefore(lens, img);
            /* Calculate the ratio between result DIV and lens: */
            cx = result.offsetWidth / lens.offsetWidth;
            cy = result.offsetHeight / lens.offsetHeight;
            /* Set background properties for the result DIV */
            result.style.backgroundImage = "url('" + img.src + "')";
            result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
            /* Execute a function when someone moves the cursor over the image, or the lens: */
            lens.addEventListener("mousemove", moveLens);
            img.addEventListener("mousemove", moveLens);
            /* And also for touch screens: */
            lens.addEventListener("touchmove", moveLens);
            img.addEventListener("touchmove", moveLens);
            function moveLens(e) {
                var pos, x, y;
                /* Prevent any other actions that may occur when moving over the image */
                e.preventDefault();
                /* Get the cursor's x and y positions: */
                pos = getCursorPos(e);
                /* Calculate the position of the lens: */
                x = pos.x - (lens.offsetWidth / 2);
                y = pos.y - (lens.offsetHeight / 2);
                /* Prevent the lens from being positioned outside the image: */
                if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
                if (x < 0) { x = 0; }
                if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
                if (y < 0) { y = 0; }
                /* Set the position of the lens: */
                lens.style.left = x + "px";
                lens.style.top = y + "px";
                /* Display what the lens "sees": */
                result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
            }
            function getCursorPos(e) {
                var a, x = 0, y = 0;
                /* Get the x and y positions of the image: */
                a = img.getBoundingClientRect();
                /* Calculate the cursor's x and y coordinates, relative to the image: */
                x = e.pageX - a.left;
                y = e.pageY - a.top;
    y = y - window.scrollY;
                return { x: x, y: y };
            }
        },
        doubleTab(event){
            var img;
            img = event.target;
            if(!this.doubleTapEnabled) {
                this.doubleTapEnabled = true
                console.log('event',event);
         
            
            // img.style.transform = "scale("+300 / event.pageX + ")";
            console.log('img',img);
            const zoomedX = 300 - (event.pageX * 2.5);
            const zoomedY = 400 - (event.pageY * 1.5);
            img.style.backgroundSize = "200% 200%";
            img.style.backgroundPosition = `${zoomedX}px ${zoomedY}px`;
            } else{
                this.doubleTapEnabled = false;
                img.style.backgroundSize = "contain";
            img.style.backgroundPosition = `center`;
            }
            
        },


        imageZoomOut() {
            document.getElementById('result').style.display = 'none';
            const zoomLens = document.querySelectorAll('.img-zoom-lens');
            if (zoomLens && zoomLens.length) {
                zoomLens.forEach((zoomNode) => {
                    zoomNode.remove();
                })
            }
        },
        previousSlide() {
            this.changeSlide(false);
        },
        nextSlide() {
            this.changeSlide();
        },
        goSlide() {
            this.changeSlide(false);
        },
        previousPopoverSlide() {
            this.changePopoverSlide(false);
            this.resetDoubleTab();
        },
        zoom(e){
            let x, y, offsetX,offsetY;
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
},
        nextPopoverSlide() {
            this.changePopoverSlide();
            this.resetDoubleTab();
        },
        goToPopoverSlide(index) {
            this.popoverCurrent = (index) * 100 * -1;
            this.popoverSlides.style.left = this.popoverCurrent + "%";
            this.popoverProductDetails.forEach((item, sliderIndex) => {
                if (sliderIndex === index) {
                    item.isActive = true;
                } else {
                    item.isActive = false;
                }
            })
            this.resetDoubleTab();
            
        },
        resetDoubleTab(){
            const zoomLens = document.querySelectorAll('.mobile-image-zoom');
            this.doubleTapEnabled = false;
            if (zoomLens && zoomLens.length) {
                zoomLens.forEach((zoomNode) => {
                    zoomNode.style.backgroundSize = "contain";
                    zoomNode.style.backgroundPosition = `center`;
                })
            }
        }
    },
    computed: {}
}
</script>
<style lang="css">
input[type=checkbox] {
    display: none;
}

.container {
    background-color: none;
    height: 450px;
    width: 100%;
}

.container img {
    height: 100%;
    width: 100%;
    margin: 100px;
    transition: transform 0.25s ease;
    cursor: zoom-in;
}

input[type=checkbox]:checked~label>img {
    transform: scale(2);
    cursor: zoom-out;
}

.popover-content {
    height: calc(100% - 90px);
}

.back-btn {
    float: left;
    border: 1px solid #222;
    padding: 6px 12px;
    border-radius: 7px;
}

.popover-tab a {
    transition: all .1s linear;
    text-decoration: none;
    line-height: 20px;
    height: 45px;
    font-size: 15px;
    padding: 15px 0;
    margin: 0 15px;
    display: block;
    border-bottom: 2px solid transparent;
    position: relative;
    color: #6C7778;
}

.hidden-overflow {
    overflow: hidden;
}

.popover-tab a.active {
    border-color: #FF8F00;
    background-color: #fff;
    color: #002F36;
    font-weight: 400;
    height: 45px;
}

.icon-right {
    position: absolute;
    right: 0px;
}

.border-grey {
    border: 1px solid #ccc;
}

.product-thumb-nails {
    width: 70px;
    height: 70px;
    float: left;
    margin: 5px 10px;
    cursor: pointer;
    border: 1px solid #ddd;
}

.popover-mobile-thumbnails {
    width: 40px;
    height: 40px;
    float: left;
    margin: 2.5px 5px;
    cursor: pointer;
    border: 1px solid #eee;
}

.home-thumbnails {
    width: 40px;
    height: 40px;
    float: left;
    margin: 2.5px 5px;
    cursor: pointer;
    border: 1px solid #eee;
}

.popover-thumbnail-section {
    position: absolute;
    bottom: 5px;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.home-thumbnails-active {
    border: 2px solid blue;
}


.product-thumb-nails img {
    width: 100%;
    height: 100%;
}

.height-full {
    height: 100%;
}

.absolute {
    position: absolute;
}

.popover-img-title {
    color: #111;
    margin-top: 15px;
    font-weight: 600;
    text-align: left;
    font-size: 24px;
    word-wrap: break-word;
}

.popover-img-desc {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
    color: #767676;
}

.modal-backdrop {
    position: fixed;
    z-index: 1090;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.thumbnails-active {
    border: 2px solid #FF8F00;
}

.modal-outer-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0rem;
}


.modal-section {
    background: #fff;
    display: block;
    width: 100%;
    height: 100%;
    min-height: auto;
}

.modal-header {
    padding: 15px;
    width: 100%;
    display: block;
}

.modal-header h3 {
    text-align: left;
    font-size: 22px;
    color: #000;
}

.modal-content {
    padding: 0px 15px;
    display: block;
    width: 100%;
}

.modal-content p {
    text-align: left;
    color: #333;
    font-size: 14px;
}

.modal-footer {
    padding: 15px;
    width: 100%;
    display: block;
    margin-bottom: 15px;
    height: 55px;
}

.modal-footer button {
    margin-right: 10px;
    float: right;
}

.text-left {
    text-align: left;
}

.text-right {
    text-align: right;
}

.border-bottom-gray {
    border-bottom: 2px solid #ddd;
}

.add-basket-btn {
    background-color: rgba(255, 216, 17, 1);
    color: #333;
    font-weight: 600;
    font-size: 16px;
}

.description-text {
    color: #212121;
    font-size: 14px;
}

.carousel {
    width: 100%;
    height: 460px;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.popover-carousel {
    width: 100%;
    height: calc(100% - 90px);
    border-radius: 3px;
    position: relative;
}

.text-light {
    color: rgba(158, 158, 158, 1);
    text-transform: uppercase;
}

.pull-right {
    float: right;
}

.img-zoom-container {
    position: relative;
}

.home-thumbnails-section {
    position: absolute;
    bottom: 2px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slider-interface {
    position: relative;
    top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slider-dot {
    width: 0.5rem;
    height: 0.5rem;
    border: none;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 1rem;
    background-color: #ccc;
    cursor: pointer;
    transition: width 0.5s;
}

.dots-button-play {
    margin-left: 5px;
    margin-right: 5px;
    background-color: transparent !important;
}

.active {
    background-color: red;
}

.img-zoom-lens {
    position: absolute;
    /*set the size of the lens:*/
    background-image: url('./../assets/products/magnifier.gif');
    width: 75px;
    height: 75px;
    background-color: rgba(0, 0, 0, 0.25);
}

input[type=checkbox]:checked ~ label > img {
  transform: scale(2);
  cursor: zoom-out;
}

.thumbnail-video-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    height: 100%;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.25);
}

.thumbnail-button-play:before {
    display: block;
    position: absolute;
    content: "";
    bottom: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-width: 10px 0px 10px 20px;
    border-radius: 0;
    border-left-color: white;
    transform: translate(-9px, 50%);
}

.dots-button-play:before {
    display: block;
    content: "";
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-width: 4.5px 0px 4.5px 9px;
    border-radius: 0;
    border-left-color: #ccc;
    transform: translate(0, 0);
}

.dots-button-play.active:before {
    border-left-color: red;
}

.video-section {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.relative {
    position: relative;
}

.img-zoom-result {
    position: absolute;
    top: 0px;
    z-index: 1000;
    border: 1px solid #d4d4d4;
    /*set the size of the result div:*/
    width: 100%;
    height: 520px;
}

.carousel:hover .controls {
    opacity: 1;
}

.controls {
    display: flex;
    position: absolute;
    top: 50%;
    left: 0;
    justify-content: space-between;
    width: 100%;
    z-index: 99999;
    transition: all ease 0.5s;
}

.control {
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    opacity: .5;
    transition: ease .3s;
    cursor: pointer;
}

.slides {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    width: 100%;
    transition: 1s ease-in-out all;
}

.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 300px;

}

.slide {
    min-width: 100%;
    min-height: 250px;
    height: auto;
    position: relative;
}

.popover-slides {
    position: absolute;
    top: 0;
    left: 0;
    transform: none;
    display: flex;
    width: 100%;
    transition: 1s ease-in-out all;
}

.popover-slide {
    min-width: 100%;
    min-height: 250px;
    height: auto;
    position: relative;
}

.shipping {
    font-size: 0.75rem;
}

.disc {
    font-size: 0.75rem;
}

figure.zoom {
    background-position: 50% 50%;
    position: relative;
    margin: 150px auto;
    border: 5px solid white;
    box-shadow: -1px 5px 15px black;
    height: 100%;
    width: 100%;
    overflow: hidden;
    cursor: zoom-in;
}

.hide-controls {
    display: none !important;
}

figure.zoom img:hover {
    opacity: 0;
}

figure.zoom img {
    display: block;
    width: 100%;
    -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    -ms-transition: opacity 0.5s ease-in-out;
    -o-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;
}

.show-small-device {
    display: none;
}



.mobile-image-zoom{
    width: 300px;
    height: 400px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-transition: all 300ms ease-in infinite;
  -moz-transition: all 300ms ease-in infinite;
  -o-transition: all 300ms ease-in infinite;
  transition: all 300ms ease-in infinite;
}

.show-only-big-device{
    display:block;
}


.circle {
    display: block;
    position: absolute;
    top: -4px;
    left: -4px;
    width: 120px;
    height: 120px;
    stroke-dasharray: 1000px;
    stroke-dashoffset: 0;
    transform-origin: 50% 50%;
    transition: all .8s linear .2s, opacity 0s linear 0s;

}

.button-play {
    display: block;
    cursor: pointer;
    border: 0px solid white;
    box-shadow: 0 4px 6px -3px rgba(black, .3), inset 0 3px 4px -2px rgba(black, .25);
    width: 112px;
    height: 112px;
    background: grey;
    background-image: linear-gradient(120deg, rgba(lighten(grey, 15%), .3) 50%, grey 51%);
    border-radius: 50%;
    transition: all .2s cubic-bezier(0.68, -0.55, 0.465, 1.55) .2s, border-width .4s cubic-bezier(0.68, -0.55, 0.465, 1.55);
}

.button-play:before {
    display: block;
    position: absolute;
    content: "";
    bottom: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border: 30px solid transparent;
    border-width: 25px 0px 25px 40px;
    border-radius: 0;
    border-left-color: white;
    transform: translate(-13px, 50%);
}



@media only screen and (max-width: 700px) {
    .show-only-big-device{
        display: none;
    }
    .show-small-device {
        display: block;
    }

    .small-device-margin {
        margin-top: 1rem;
    }

    .popover-thumbnail-section {
        display: flex;
    }

    .popover-content {
        height: calc(100% - 110px);
    }

    .slider-interface {
        position: relative;
        top: -25px;
    }

    .home-thumbnails-section {
        display: none;
    }
}
</style>