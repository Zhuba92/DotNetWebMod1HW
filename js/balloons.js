$(function(){

    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    // randomize the attention seeker on page load
    const seekers = ["animate__animated animate__bounce", "animate__animated animate__flash", "animate__animated animate__pulse", "animate__animated animate__rubberBand",
    "animate__animated animate__shakeX", "animate__animated animate__shakeY", "animate__animated animate__headShake", "animate__animated animate__swing",
    "animate__animated animate__tada", "animate__animated animate__wobble", "animate__animated animate__jello", "animate__animated animate__heartBeat"];
    
    var attention = Math.floor(Math.random() * ((seekers.length - 1) + 1));
    var randomClass = seekers[attention];

    $('#seeker').addClass(randomClass);

    // load toast if no checkboxes are selected
    $('#submit').on('click', function(e) {
        if ((!document.getElementById('red').checked) & 
        (!document.getElementById('green').checked) & 
        (!document.getElementById('blue').checked)) {
            $('#toast').toast('show');
        };
    });

    // check/uncheck all boxes with a button
    $('#all').on('click', function(e) {
        //select all
        $('.form-check-input').each(function () {
            $(this).prop('checked', true);
            $('#red' + 'Img').css('visibility', 'visible')
            $('#green' + 'Img').css('visibility', 'visible')
            $('#blue' + 'Img').css('visibility', 'visible')
            $('#red' + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
            $('#green' + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
            $('#blue' + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
        });
        
    });
        
    // deselect all
    $('#unselect').on('click', function(e) {
        $('.form-check-input').each(function () {
            $(this).prop('checked', false);
            $('#red' + 'Img').css('visibility', 'visible')
            $('#green' + 'Img').css('visibility', 'visible')
            $('#blue' + 'Img').css('visibility', 'visible')
            $('#red' + 'Img').addClass('animate__animated animate__bounceOutUp');
            $('#green' + 'Img').addClass('animate__animated animate__bounceOutUp');
            $('#blue' + 'Img').addClass('animate__animated animate__bounceOutUp');
        });
        
    });

    // change color of happy birthday text
    $('#red').on("mouseover", function(){
        $('#seeker').css("color", "red");
    });
    $('#green').on("mouseover", function(){
        $('#seeker').css("color", "green");
    });
    
    $('#blue').on("mouseover", function(){
        $('#seeker').css("color", "blue");
    });
    
    

});