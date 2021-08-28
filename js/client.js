$(function(){

    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
        $('#product').text(e.currentTarget.attributes.getNamedItem("data-product").value);
        $('#code').text(e.currentTarget.attributes.getNamedItem("data-code").value);
    });

      $(document).on('keydown', function(event) {
        if (event.key == "Escape") {
            $('#toast').toast().toast('hide');
        }
    });
});






