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
let currentDateTime = new Date();
$('#daterange-schedule').daterangepicker({
  "timePicker": true,
  "timePicker24Hour": true,
  "minDate": currentDateTime,
  "maxDate": new Date(currentDateTime.getFullYear(), currentDateTime.getMonth() + 6, currentDateTime.getDay(), currentDateTime.getHours(), currentDateTime.getMinutes(), currentDateTime.getSeconds(), currentDateTime.getMilliseconds()),
  "startDate": new Date(currentDateTime.getTime()+ 900000),
  "singleDatePicker": true,
  "applyClass": "btn-submit",
  "cancelClass": "btn-outline",
  locale: {
    format: 'HH:mm - DD/MM/YYYY'
  }

});

function setDateRangeSchedule(publishTime, minTime){
  let current = new Date();
  let defaultTime = new Date(current.getTime() + 900000);
  if(publishTime){
    defaultTime = new Date(publishTime);
  }
  
  let minDate = new Date(current.getTime() + 600000);
  if(minTime){
      minDate = new Date(minTime);
  }
  $('#daterange-schedule').daterangepicker({

    "timePicker": true,
    "timePicker24Hour": true,
    "minDate": minDate,
    "maxDate": new Date(current.getFullYear(), current.getMonth() + 6, current.getDay(), current.getHours(), current.getMinutes(), current.getSeconds(), current.getMilliseconds()),
    "startDate": defaultTime,
    "singleDatePicker": true,
    "applyClass": "btn-submit",
    "cancelClass": "btn-outline",
    locale: {
      format: 'HH:mm - DD/MM/YYYY'
    }

  });
}
function getTimeFromDaterangeSchedule(){
  let str = $('#daterange-schedule').data('daterangepicker').startDate._d;
  let date = new Date(str);
  let publishTime = date.getTime();
  $('#publishDTM').val(publishTime);
}



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
  $('[data-toggle="tooltip"]').tooltip();
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


