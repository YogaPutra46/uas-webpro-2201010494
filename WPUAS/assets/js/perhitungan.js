
// menampilkan form di bawah gambar
function showForm(shape) {
  $(".card-body").hide();
  $("#" + shape + "-form").show();
}

$(document).ready(function () {

  // Pertambahan
  $('.Tambah').click(function () {
    var cardBody = $(this).next('.card-body');
    cardBody.slideDown();
    cardBody.prev('.card-img-top').addClass('hide');
    setTimeout(function () {
      cardBody.show().addClass('open').removeClass('hide');
    }, 300);
  });

  $('.HitungTambah').click(function () {
    var a1 = $(this).closest('.card-body').find('.a1').val();
    var a2 = $(this).closest('.card-body').find('.a2').val();
    var hasil = parseInt(a1) + parseInt(a2);

    var tx = "<div class='result-title'>Hasil Perhitungan:</div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 1:</span><span class='result-value'>" + a1 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 2:</span><span class='result-value'>" + a2 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Hasil:</span><span class='result-value'>" + hasil + "</span></div>";

    $(this).closest('.card').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').css('display', 'block');
  });

  // Pengurangan
  $('.Kurang').click(function () {
    var cardBody = $(this).next('.card-body');
    cardBody.slideDown();
    cardBody.prev('.card-img-top').addClass('hide');
    setTimeout(function () {
      cardBody.show().addClass('open').removeClass('hide');
    }, 300);
  });

  $('.HitungKurang').click(function () {
    var a1 = $(this).closest('.card-body').find('.a1').val();
    var a2 = $(this).closest('.card-body').find('.a2').val();
    var hasil = parseInt(a1) - parseInt(a2);

    var tx = "<div class='result-title'>Hasil Perhitungan:</div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 1:</span><span class='result-value'>" + a1 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 2:</span><span class='result-value'>" + a2 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Hasil:</span><span class='result-value'>" + hasil + "</span></div>";

    $(this).closest('.card').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').css('display', 'block');
  });

  // Perkalian
  $('.Kali').click(function () {
    var cardBody = $(this).next('.card-body');
    cardBody.slideDown();
    cardBody.prev('.card-img-top').addClass('hide');
    setTimeout(function () {
      cardBody.show().addClass('open').removeClass('hide');
    }, 300);
  });

  $('.HitungKali').click(function () {
    var a1 = $(this).closest('.card-body').find('.a1').val();
    var a2 = $(this).closest('.card-body').find('.a2').val();
    var hasil = a1 * a2;

    var tx = "<div class='result-title'>Hasil Perhitungan:</div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 1:</span><span class='result-value'>" + a1 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 2:</span><span class='result-value'>" + a2 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Hasil:</span><span class='result-value'>" + hasil + "</span></div>";

    $(this).closest('.card').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').css('display', 'block');
  });

  // Pembagian
  $('.Bagi').click(function () {
    var cardBody = $(this).next('.card-body');
    cardBody.slideDown();
    cardBody.prev('.card-img-top').addClass('hide');
    setTimeout(function () {
      cardBody.show().addClass('open').removeClass('hide');
    }, 300);
  });

  $('.HitungBagi').click(function () {
    var a1 = $(this).closest('.card-body').find('.a1').val();
    var a2 = $(this).closest('.card-body').find('.a2').val();
    var hasil = a1 / a2;

    var tx = "<div class='result-title'>Hasil Perhitungan:</div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 1:</span><span class='result-value'>" + a1 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 2:</span><span class='result-value'>" + a2 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Hasil:</span><span class='result-value'>" + hasil + "</span></div>";

    $(this).closest('.card').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').css('display', 'block');
  });

  // Modulo
  $('.Modulo').click(function () {
    var cardBody = $(this).next('.card-body');
    cardBody.slideDown();
    cardBody.prev('.card-img-top').addClass('hide');
    setTimeout(function () {
      cardBody.show().addClass('open').removeClass('hide');
    }, 300);
  });

  $('.HitungModulo').click(function () {
    var a1 = $(this).closest('.card-body').find('.a1').val();
    var a2 = $(this).closest('.card-body').find('.a2').val();
    var hasil = a1 % a2;

    var tx = "<div class='result-title'>Hasil Perhitungan:</div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 1:</span><span class='result-value'>" + a1 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 2:</span><span class='result-value'>" + a2 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Hasil:</span><span class='result-value'>" + hasil + "</span></div>";

    $(this).closest('.card').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').css('display', 'block');
  });

  // Pangkat
  $('.Pangkat').click(function () {
    var cardBody = $(this).next('.card-body');
    cardBody.slideDown();
    cardBody.prev('.card-img-top').addClass('hide');
    setTimeout(function () {
      cardBody.show().addClass('open').removeClass('hide');
    }, 300);
  });

  $('.HitungPangkat').click(function () {
    var a1 = $(this).closest('.card-body').find('.a1').val();
    var a2 = $(this).closest('.card-body').find('.a2').val();
    var hasil = Math.pow(a1, a2);

    var tx = "<div class='result-title'>Hasil Perhitungan:</div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 1:</span><span class='result-value'>" + a1 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 2:</span><span class='result-value'>" + a2 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Hasil:</span><span class='result-value'>" + hasil + "</span></div>";

    $(this).closest('.card').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').css('display', 'block');
  });

  // Akar Kuadrat
  $('.Akar').click(function () {
    var cardBody = $(this).next('.card-body');
    cardBody.slideDown();
    cardBody.prev('.card-img-top').addClass('hide');
    setTimeout(function () {
      cardBody.show().addClass('open').removeClass('hide');
    }, 300);
  });

  $('.HitungAkar').click(function () {
    var a = $(this).closest('.card-body').find('.a').val();
    var hasil = Math.sqrt(a);

    var tx = "<div class='result-title'>Hasil Perhitungan:</div>";
    tx += "<div class='result-item'><span class='result-label'>Angka:</span><span class='result-value'>" + a + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Hasil:</span><span class='result-value'>" + hasil + "</span></div>";

    $(this).closest('.card').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').html(tx);
    $(this).closest('.card-body').find('.result-container').css('display', 'block');
  });

  // Persentase
  $('.Persen').click(function () {
    var cardBody = $(this).next('.card-body');
    cardBody.slideDown();
    cardBody.prev('.card-img-top').addClass('hide');
    setTimeout(function () {
      cardBody.show().addClass('open').removeClass('hide');
    }, 300);
  });

  $('.HitungPersen').click(function () {
    var a1 = $(this).closest('.card-body').find('.a1').val();
    var a2 = $(this).closest('.card-body').find('.a2').val();
    var hasil = (a1 * a2) / 100;

    var tx = "<div class='result-title'>Hasil Perhitungan:</div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 1:</span><span class='result-value'>" + a1 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Angka 2:</span><span class='result-value'>" + a2 + "</span></div>";
    tx += "<div class='result-item'><span class='result-label'>Hasil:</span><span class='result-value'>" + hasil + "</span></div>";

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