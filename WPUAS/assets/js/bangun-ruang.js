// menampilkan form di bawah gambar
function showForm(shape) {
    $(".card-body").hide();
    $("#" + shape + "-form").show();
}

$(document).ready(function () {
    // Kubus
    $('.Kubus').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungKubus').click(function () {
        var s = $(this).closest('.card-body').find('.s').val();
        var luasPermukaan = 6 * s * s;
        var volume = s * s * s;

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Sisi:</span><span class='result-value'>" + s + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas Permukaan:</span><span class='result-value'>" + luasPermukaan + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Volume:</span><span class='result-value'>" + volume + "</span></div>";

        $(this).closest('.card').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').css('display', 'block');
    });

    // Balok
    $('.Balok').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungBalok').click(function () {
        var p = $(this).closest('.card-body').find('.p').val();
        var l = $(this).closest('.card-body').find('.l').val();
        var t = $(this).closest('.card-body').find('.t').val();
        var luasPermukaan = 2 * (p * l + p * t + l * t);
        var volume = p * l * t;

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Panjang:</span><span class='result-value'>" + p + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Lebar:</span><span class='result-value'>" + l + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Tinggi:</span><span class='result-value'>" + t + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas Permukaan:</span><span class='result-value'>" + luasPermukaan + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Volume:</span><span class='result-value'>" + volume + "</span></div>";

        $(this).closest('.card').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').css('display', 'block');
    });

    // Bola
    $('.Bola').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungBola').click(function () {
        var r = $(this).closest('.card-body').find('.r').val();
        var luasPermukaan = 4 * Math.PI * r * r;
        var volume = (4 / 3) * Math.PI * r * r * r;

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Radius:</span><span class='result-value'>" + r + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas Permukaan:</span><span class='result-value'>" + luasPermukaan + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Volume:</span><span class='result-value'>" + volume + "</span></div>";

        $(this).closest('.card').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').css('display', 'block');
    });

    // Silinder
    $('.Silinder').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungSilinder').click(function () {
        var r = $(this).closest('.card-body').find('.r').val();
        var t = $(this).closest('.card-body').find('.t').val();
        var luasPermukaan = 2 * Math.PI * r * (r + t);
        var volume = Math.PI * r * r * t;

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Radius:</span><span class='result-value'>" + r + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Tinggi:</span><span class='result-value'>" + t + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas Permukaan:</span><span class='result-value'>" + luasPermukaan + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Volume:</span><span class='result-value'>" + volume + "</span></div>";

        $(this).closest('.card').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').css('display', 'block');
    });

    // Kerucut
    $('.Kerucut').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungKerucut').click(function () {
        var r = $(this).closest('.card-body').find('.r').val();
        var t = $(this).closest('.card-body').find('.t').val();
        var s = Math.sqrt(r * r + t * t);
        var luasPermukaan = Math.PI * r * (r + s);
        var volume = (1 / 3) * Math.PI * r * r * t;

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Radius:</span><span class='result-value'>" + r + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Tinggi:</span><span class='result-value'>" + t + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Sisi Miring:</span><span class='result-value'>" + s + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas Permukaan:</span><span class='result-value'>" + luasPermukaan + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Volume:</span><span class='result-value'>" + volume + "</span></div>";

        $(this).closest('.card').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').css('display', 'block');
    });

    // Prisma
    $('.Prisma').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungPrisma').click(function () {
        var la = $(this).closest('.card-body').find('.la').val();
        var t = $(this).closest('.card-body').find('.t').val();
        var luasPermukaan = parseFloat(la) + parseFloat(la) + parseFloat(la) + parseFloat(la) + parseFloat(la);
        var volume = parseFloat(la) * parseFloat(t);

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Luas Alas:</span><span class='result-value'>" + la + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Tinggi:</span><span class='result-value'>" + t + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas Permukaan:</span><span class='result-value'>" + luasPermukaan + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Volume:</span><span class='result-value'>" + volume + "</span></div>";

        $(this).closest('.card').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').css('display', 'block');
    });

    // Limas
    $('.Limas').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungLimas').click(function () {
        var la = $(this).closest('.card-body').find('.la').val();
        var t = $(this).closest('.card-body').find('.t').val();
        var luasPermukaan = parseFloat(la) + parseFloat(la) + parseFloat(la);
        var volume = (1 / 3) * parseFloat(la) * parseFloat(t);

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Luas Alas:</span><span class='result-value'>" + la + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Tinggi:</span><span class='result-value'>" + t + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas Permukaan:</span><span class='result-value'>" + luasPermukaan + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Volume:</span><span class='result-value'>" + volume + "</span></div>";

        $(this).closest('.card').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').html(tx);
        $(this).closest('.card-body').find('.result-container').css('display', 'block');
    });

    // Tabung
    $('.Tabung').click(function () {
        var cardBody = $(this).next('.card-body');
        cardBody.slideDown();
        cardBody.prev('.card-img-top').addClass('hide');
        setTimeout(function () {
            cardBody.show().addClass('open').removeClass('hide');
        }, 300);
    });

    $('.HitungTabung').click(function () {
        var r = $(this).closest('.card-body').find('.r').val();
        var t = $(this).closest('.card-body').find('.t').val();
        var luasPermukaan = 2 * Math.PI * r * (r + t);
        var volume = Math.PI * r * r * t;

        var tx = "<div class='result-title'>Hasil Perhitungan</div>";
        tx += "<div class='result-item'><span class='result-label'>Radius:</span><span class='result-value'>" + r + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Tinggi:</span><span class='result-value'>" + t + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Luas Permukaan:</span><span class='result-value'>" + luasPermukaan + "</span></div>";
        tx += "<div class='result-item'><span class='result-label'>Volume:</span><span class='result-value'>" + volume + "</span></div>";

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
