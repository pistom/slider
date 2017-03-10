SLIDER = function(obj){
    this.obj = obj;
    this.container = obj.getElementsByClassName("home__sliderContainer")[0];
    this.images = obj.getElementsByClassName("home__sliderItem");
    this.getDimensions();
    this.navigation = obj.getElementsByClassName("home__sliderNavigation")[0];
    this.navigation.addEventListener("click",this.slide.bind(this),false);
    window.addEventListener("resize",this.getDimensions.bind(this),false);
};
SLIDER.prototype.getDimensions = function(){
    this.area = [this.obj.offsetWidth, this.obj.offsetHeight];
    this.imageWidth = this.area[0];
    Array.prototype.forEach.call(this.images, function(item){
        item.style.width = this.imageWidth+"px";
        item.style.opacity = 1;
    }.bind(this));
    this.container.style.width = (this.container.offsetWidth*this.images.length)+"px";
    this.counter = 0;
};

SLIDER.prototype.slide = function(e){
    if(e.target.dataset.direction === "next"){
        this.images[this.counter].style.width = 0;
        this.images[this.counter++].style.opacity = 0;
        if (this.counter === this.images.length) {
            this.counter = 0;
            Array.prototype.forEach.call(this.images,function(item){
                item.style.width = this.imageWidth+"px";
                item.style.opacity = 1;
            }.bind(this))
        }
    }
    if(e.target.dataset.direction === "prev"){
        this.counter--;
        if(this.counter < 0) {
            this.counter = this.images.length-1;
            for(var i=0; i<this.images.length-1;i++){
                this.images[i].style.width = 0;
                this.images[i].style.opacity = 0;
            }
        } else {
            this.images[this.counter].style.width = this.imageWidth+"px";
            this.images[this.counter].style.opacity = 1;
        }
    }
};

Object.prototype.SLIDER = function(config) {
    this.s = new SLIDER(this);
};

document.getElementsByClassName("home__slider")[0].SLIDER();



