'use strict';
console.log('work');
var aSlider = {
    isDrag : false,
    ball : document.getElementById('ball'),
    slider : document.getElementById('slider'),
    value : 0,
    dx : null,
    x : null,
    updateValue : function(value) {
        if (value) {
            this.value = value;
        } else {
            this.value = parseFloat(this.ball.style.left ) || parseFloat(getComputedStyle(this.ball).left) || 0;
        }
    }
};
aSlider.slider.addEventListener('mousedown', function(e){
    if (e.target.closest('#ball')) {
        this.isDrag = true;
        this.x = e.pageX;
        console.log(aSlider);
    }
}.bind(aSlider));
aSlider.slider.addEventListener('mouseleave', function(e){
        this.isDrag = false;
        console.log(aSlider);
}.bind(aSlider));
document.addEventListener('mouseup', function(e){
        this.isDrag = false;
        this.updateValue(this.value - this.dx);
        console.log(aSlider);
}.bind(aSlider));
aSlider.slider.addEventListener('mousemove', function(e){
    if (this.isDrag){
        this.dx = this.x - e.pageX;
        this.ball.style.left = `${this.value - this.dx}px`;
        console.log(aSlider);
    }
    
}.bind(aSlider));
console.log(aSlider);