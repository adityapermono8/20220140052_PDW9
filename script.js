$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    $("a.d-block.mb-4.h-100").click(function(event) {
        event.preventDefault();
        modal.style.display = "block";
        modalImg.src = this.href;
        captionText.innerHTML = this.children[0].alt;
    });

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    $(document).ready(function(){
        $('#contactForm').submit(function(e){
            e.preventDefault(); // Menghentikan pengiriman formulir standar
            
            
            // Tampilkan notifikasi
            $('#notification').html('<div class="alert alert-success" role="alert">Formulir telah berhasil dikirim!</div>');
    
            // Atur agar notifikasi hilang setelah beberapa detik
            setTimeout(function(){
                $('#notification').empty(); // Menghapus notifikasi setelah 3 detik
            }, 3000);
        });
    });
});
