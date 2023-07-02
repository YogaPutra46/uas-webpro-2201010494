
// menampilkan form di bawah gambar
function showForm(shape) {
    $(".card-body").hide();
    $("#" + shape + "-form").show();
}

$(document).ready(function () {

    // Persegi
    $('.persegi').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungPersegi').click(function () {
        var s = $(this).closest('.card-body').find('.S').val();
        var luas = s * s * s;
        var keliling = 4 * s;

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Sisi:</span><span class='result-value'>" + s + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas:</span><span class='result-value'>" + luas + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Keliling:</span><span class='result-value'>" + keliling + "</span></div>";

        $(this).closest('.card').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').css('display', 'block');
    });


    // Persegi Panjang
    $('.PersegiPanjang').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungPersegiPanjang').click(function () {
        var p = $(this).closest('.card-body').find('.pj').val();
        var l = $(this).closest('.card-body').find('.lb').val();
        var luas = p * l;
        var keliling = 2 * (parseInt(p) + parseInt(l));

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Panjang:</span><span class='result-value'>" + p + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Lebar:</span><span class='result-value'>" + l + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas:</span><span class='result-value'>" + luas + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>keliling:</span><span class='result-value'>" + keliling + "</span></div>";

        $(this).closest('.card').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').css('display', 'block');
    });


    // Lingkaran
    $('.Lingkaran').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungLingkaran').click(function () {
        var j = $(this).closest('.card-body').find('.j').val();
        var luas = Math.PI * (parseFloat(j) * parseFloat(j));
        var keliling = 2 * Math.PI * j;

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Jari - Jari:</span><span class='result-value'>" + j + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas:</span><span class='result-value'>" + luas + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>keliling:</span><span class='result-value'>" + keliling + "</span></div>";

        $(this).closest('.card-body').find('.result-container').html(tx);
        $('.result-container').html(tx);
        $('.result-container').css('display', 'block');
    });


    // Segitiga
    $('.Segitiga').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungSegitiga').click(function () {
        var a = $(this).closest('.card-body').find('.a').val();
        var t = $(this).closest('.card-body').find('.t').val();
        var s = $(this).closest('.card-body').find('.s').val();
        var luas = 1 / 2 * a * t;
        var keliling = s + s + s;

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Alas:</span><span class='result-value'>" + a + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Tinggi:</span><span class='result-value'>" + t + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Sisi:</span><span class='result-value'>" + s + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas:</span><span class='result-value'>" + luas + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>keliling:</span><span class='result-value'>" + keliling + "</span></div>";

        $(this).closest('.card-body').find('.result-container').html(tx);
        $('.result-container').html(tx);
        $('.result-container').css('display', 'block');
    });


    // Trapesium
    $('.Trapesium').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungTrapesium').click(function () {
        var s1 = $(this).closest('.card-body').find('.s1').val();
        var s2 = $(this).closest('.card-body').find('.s2').val();
        var t = $(this).closest('.card-body').find('.t').val();
        var luas = ((parseFloat(s1) + parseFloat(s2)) / 2) * parseFloat(t);
        var keliling = parseFloat(s1) + parseFloat(s2) + (2 * parseFloat(t));

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Sisi Sejajar 1:</span><span class='result-value'>" + s1 + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Sisi Sejajar 2:</span><span class='result-value'>" + s2 + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Tinggi:</span><span class='result-value'>" + t + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas:</span><span class='result-value'>" + luas + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Keliling:</span><span class='result-value'>" + keliling + "</span></div>";

        $(this).closest('.card').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').css('display', 'block');
    });


    // Jajar Genjang
    $('.JajarGenjang').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungJajarGenjang').click(function () {
        var a = $(this).closest('.card-body').find('.a').val();
        var t = $(this).closest('.card-body').find('.t').val();
        var s1 = $(this).closest('.card-body').find('.s1').val();
        var s2 = $(this).closest('.card-body').find('.s2').val();
        var luas = parseFloat(a) * parseFloat(t);
        var keliling = (2 * parseFloat(s1)) + (2 * parseFloat(s2));

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Alas:</span><span class='result-value'>" + a + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Tinggi:</span><span class='result-value'>" + t + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Sisi Sejajar 1:</span><span class='result-value'>" + s1 + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Sisi Sejajar 2:</span><span class='result-value'>" + s2 + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas:</span><span class='result-value'>" + luas + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Keliling:</span><span class='result-value'>" + keliling + "</span></div>";

        $(this).closest('.card').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').css('display', 'block');
    });


    // Back button
    $('.back').click(function () {
        var cardBody = $(this).closest('.card-body');
        cardBody.find('.result-container').empty();
        cardBody.find('.result-container').css('display', 'none');
        cardBody.addClass('hide');
        cardBody.prev('.card-img-top').removeClass('hide');
        setTimeout(function () {
            cardBody.hide().removeClass('open hide');
        }, 300);
    });
});