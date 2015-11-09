$(document).ready(function() {
	// #NOTE: create a global variable to keep track of keydown
	var isDown;

    $(document).keyup(function(e) {
    	// #NOTE: if isDown is true, set it to false
    	if (isDown) {
    		isDown = false;
    	}
        $('body').css("background-color","black")

        // #NOTE: remove the audio element
        $('audio').remove();
    });


    $(document).keydown(function(e) {
    	// #NOTE: keep track of when key is pressed 
    	// if it's down, return out of this function
    	if (isDown)
    		return;
    	
    	// #NOTE: otherwise set isDown to true
    	isDown = true;
    	console.log(e);

        // a #NOTE: changed this to lower case a 
        if (e.keyCode == 65) {

          $('body').css("background-color","#DF2BFF")

            //SOUND

            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/adams_family.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            // #NOTE: select the main div and add the audio element to it
            // this way, we can access the element and remove it on keyup
            $('.container_12').append(audioElement); 

        }

        //lowercase b
        if (e.keyCode == 66) {
                      $('body').css("background-color","#FF7600")

            //SOUND

            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/batman.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
            

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

        
            $('.container_12').append(audioElement); 

        }
        //lowercase c
        if (e.keyCode == 67) {
                      $('body').css("background-color","#7FFF8B")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/apple_ring.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');
           

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 

        }
        //lowercase d
        if (e.keyCode == 68) {

            $('body').css("background-color","#FF840A")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/army_wake_up.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 

        }
        //lowercase e
        if (e.keyCode == 69) {

            $('body').css("background-color","#FF3EB1")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/elegant_ringtone.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

        //lowercase f
        if (e.keyCode == 70) {
            $('body').css("background-color","#0025FF")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/blackberry.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

        //lowercase g
        if (e.keyCode == 71) {
            $('body').css("background-color","#94FF38")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/casper.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

        //lowercase h
        if (e.keyCode == 72) {
            $('body').css("background-color","#FFAC20")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/cool_whistle.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

        //lowercase i
        if (e.keyCode == 73) {
            $('body').css("background-color","#FF8082")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/crazy_chicken.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

        //lowercase j
        if (e.keyCode == 74) {
            $('body').css("background-color","#68FF1B")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/Irish_Traditional.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

        //lowercase k
        if (e.keyCode == 75) {
            $('body').css("background-color","#FF0FC2")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/popcorn.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

        //lowercase l
        if (e.keyCode == 76) {
            $('body').css("background-color","#38BAFF")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/notification_sound.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

        //lowercase m
        if (e.keyCode == 77) {
            $('body').css("background-color","#F78DFF")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/trap_android.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

        //lowercase n
        if (e.keyCode == 78) {
            $('body').css("background-color","#FFD88A")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/Spanish_Guitar.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

        //lowercase o
        if (e.keyCode == 79) {
            $('body').css("background-color","#04197F")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/star_wars.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

        //lowercase p
        if (e.keyCode == 80) {
            $('body').css("background-color","#FF3005")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/psycho.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

        //lowercase q
        if (e.keyCode == 81) {
            $('body').css("background-color","#66D9FF")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/frozen.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }


        //lowercase r
        if (e.keyCode == 82) {
            $('body').css("background-color","#FF7D14")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/godfather_guitar.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }


        //lowercase s
        if (e.keyCode == 83) {
            $('body').css("background-color","#41E0FF")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/super_mario_bros.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

         //lowercase t
         if (e.keyCode == 84) {
            $('body').css("background-color","#FFF500")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/ta_ra_ra_ra.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
         }

        //lowercase u
        if (e.keyCode == 85) {
            $('body').css("background-color","#6435FF")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/google.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

        //lowercase v
        if (e.keyCode == 86) {
            $('body').css("background-color","#FF0C08")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/halloween_theme.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }
        //lowercase w
        if (e.keyCode == 87) {
            $('body').css("background-color","#B125FF")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/hotline_bling_iphone.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }
        //lowercase x
        if (e.keyCode == 88) {
            $('body').css("background-color","#FFF100")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/minion_ring_ring.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }

         //lowercase y
         if (e.keyCode == 89) {
            $('body').css("background-color","#1DFFD9")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/new_iphone_6_remix.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
         }

        //lowercase z
        if (e.keyCode == 90) {
            $('body').css("background-color","#A056FF")

            //SOUND
            audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/tokyo_drift.mp3');
            audioElement.setAttribute('autoplay', 'autoplay');

            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);

            $('.container_12').append(audioElement); 
        }


        });

});
