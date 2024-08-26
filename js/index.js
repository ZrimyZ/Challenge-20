console.log("Loaded");

$(".navButton").on('click', function(event){

    
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
    
        // Store hash
        var hash = this.hash;
    
        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({scrollTop: $(hash).offset().top}, 200, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    }
});

$(".navButton, button").hover(
     
    function(){

    $(this).addClass("buttonHover");

    },
    
    function(){
        
    $(this).removeClass("buttonHover");

    }

);

$(".workShowcase").hover(
    
    function(){

        var getId = $(this).attr('id');
        console.log(getId);

    $("#" + getId + " p").css("display", "block");
    $("#" + getId + " p").css("position", "absolute");
    $("#" + getId + " p").css("top", "100px");
    $("#" + getId + " p").css("left", "25px");
    $("#" + getId + " p").css("color", "white");
    $("#" + getId + " p").css("transition", ".3s");
    

    $("#" + getId + " img").css("filter", "brightness(25%)");
    $("#" + getId + " img").css("transition", ".3s");
    
    },
    
    function(){

        var getId = $(this).attr('id');
        console.log(getId);
        
        $("#" + getId + " p").css("display", "none");

        $("#" + getId + " img").css("filter", "none");

    }

);

