(function(angular) {
  var app = angular.module('xamarin-app');

  app.controller('BolinhaCtrl', function(localStorageService) {
    console.log(localStorageService.email);
    var x = 0, y = 0,
  	vx = 0, vy = 0,
  	ax = 0, ay = 0;

  	var sphere = document.getElementById("sphere");

  	if (window.DeviceMotionEvent != undefined) {
  		window.ondevicemotion = function(e) {
  			ax = event.accelerationIncludingGravity.x * 5;
  			ay = event.accelerationIncludingGravity.y * 5;
  	   }

    	setInterval( function() {
    		var landscapeOrientation = window.innerWidth/window.innerHeight > 1;

    		if ( landscapeOrientation) {
    			vx = vx + ay;
    			vy = vy + ax;
    		} else {
    			vy = vy - ay;
    			vx = vx + ax;
    		}
    		vx = vx * 0.98;
    		vy = vy * 0.98;
    		y = parseInt(y - vy);
    		x = parseInt(x - vx);

    		boundingBoxCheck();

    		sphere.style.top = y + "px";
    		sphere.style.left = x + "px";
    	}, 25);
    }


  function boundingBoxCheck() {
  	if (x<0) { x = 0;
  		document.body.style.backgroundColor = 'green';
  		vx = -vx;
    }
  	if (y<0) { y = 0; vy = -vy;
  		document.body.style.backgroundColor = 'blue';
  	}
  	if (x>document.documentElement.clientWidth-20) {
  		document.body.style.backgroundColor = 'orange';
  		x = document.documentElement.clientWidth-20; vx = -vx;
  	}
  	if (y>document.documentElement.clientHeight-20) {
  		document.body.style.backgroundColor = 'red';
  		y = document.documentElement.clientHeight-20; vy = -vy;
    }
	}

  });
})(angular);
