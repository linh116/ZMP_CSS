$(document).ready(function () {
  $("#btn-edit").click(function () {
    $("#keyblock").addClass("hide-block");
    $("#editkeyblock").removeClass("hide-block");
    $("#editkeyblock").addClass("show-block");
  });
  $("#btn-cancel").click(function () {
    $("#keyblock").removeClass("hide-block");
    $("#editkeyblock").removeClass("show-block");
    $("#editkeyblock").addClass("hide-block");
  });
});

$(document).ready(function () {
  $(".info-thumb-note").click(function () {
    $(".info-thumb-note-2").removeClass("hide-block");
  });
  $("a.mf-cancel").click(function () {
    $(".info-thumb-note-2").addClass("hide-block");
  });
});

$(document).ready(function () {
  $('.bootstrap-tagsinput input').blur(function () {
    jQuery(this).attr('placeholder', '')
  });
});


$(function () {
  var handle = $("#custom-handle");
  $("#slider-time").slider();
});


$(function () {
  var handle = $("#custom-handle");
  $("#slider-time-2").slider();
});


$(function () {
  $("#row-drag").sortable({
    handle: ".btn-drag"
    //      items: "tr:not(.tr-error)"
  });
  $("#row-drag").disableSelection();
});

$(function () {
  //default date range picker
   $('#daterange').daterangepicker({
    "opens": "bottom",
    "applyClass": "btn-submit",
    "cancelClass": "btn-outline",
    "autoUpdateInput": false,
    locale: {
      cancelLabel: 'Hủy',
      applyLabel: 'Chọn',
      format: 'DD/MM/YYYY'
    }    
  });
  
  $('#daterange').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
  });

  $('#daterange-rs').daterangepicker({
    "opens": "bottom",
    "applyClass": "btn-submit",
    "cancelClass": "btn-outline",
    locale: {
      cancelLabel: 'Hủy',
      applyLabel: 'Chọn'
    }    
  });



    $('#daterange-3').daterangepicker({
        "opens": "bottom",
        "applyClass": "btn-submit",
        "cancelClass": "btn-outline",
        "autoUpdateInput": false,
        locale: {
            cancelLabel: 'Hủy',
            applyLabel: 'Chọn',
            format: 'DD/MM/YYYY'
        }
    });

    $('#daterange-3').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    });


});




$('#daterange-1').daterangepicker({
  "opens": "left",
  "applyClass": "btn-submit",
  "cancelClass": "btn-outline",
  "locale": {
        "format": "DD/MM/YYYY",
    },
  "singleDatePicker": true,
});
$('#daterange-2').daterangepicker({
  "opens": "left",
  "applyClass": "btn-submit",
  "cancelClass": "btn-outline",
  "locale": {
        "format": "DD/MM/YYYY",
    },
  "singleDatePicker": true,
});
$('.opensbottom').css({
  "width": "550px"
});

$(function () {
  $('.mf-info-circled').tooltip()
})


// var totalItems = $('.item').length;
// var currentIndex = $('div.album-review.active').index() + 1;
//    $('.num').html(''+currentIndex+'/'+totalItems+'');

// $('#myCarousel').carousel({
//     interval: 2000
// });

// $('#myCarousel').on('slid.bs.carousel', function () {
//     var currentIndex = $('div.active').index() + 1;
//    $('.num').html(''+currentIndex+'/'+totalItems+'');
// });


