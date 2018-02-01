;(function() {
    var ball = document.getElementById('ball');
    var box = document.getElementById('box');
    var isDrag = false;
    var overBox = false;
    var mayDrop = false;
    var left = 0;
    var top = 0;
    var x = 0;
    var y = 0;
    
    document.addEventListener('mousedown', function(e){
        var elem = e.target.closest('#ball');
      if (elem) {
        isDrag = true;
        x = e.pageX;
        y = e.pageY;
        left = parseFloat(ball.style.transform.slice(7, -1).split(',')[4]) || parseFloat(getComputedStyle(ball).transform.slice(7, -1).split(',')[4]) || 0;
        top = parseFloat(ball.style.transform.slice(7, -1).split(',')[5]) || parseFloat(getComputedStyle(ball).transform.slice(7, -1).split(',')[5]) || 0;
        console.log(isDrag, x, y);
        ball.style.pointerEvents = 'none';
      }
    });
    
    document.addEventListener('mouseup', function(e)	{
    isDrag = false;
            x = e.pageX;
            y = e.pageY;
      ball.style.pointerEvents = 'auto';
    
    });
    document.addEventListener('mousemove', function(e)	{
      if(isDrag) {
        var	dX = x - e.pageX;
        var	dY = y - e.pageY;
        ball.style.cssText = 
        `transform: translate3d(${left - dX}px, ${top - dY}px, 0);
         top:  pointer-events: none;`
      }
    });
    
}());
