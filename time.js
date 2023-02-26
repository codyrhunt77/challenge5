function tracker() {
    const currentTime = moment().hours();
    $('.time-block').each(function () {
        const hour = parseInt($(this).attr('id').split('-')[1]);
        if ( hour < currentTime ) {
            $(this).addClass('past');
        } else if ( hour === currentTime) {
            $(this).removeClass('past');
            $(this).removeClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        }
    });
}
tracker();
$(document).ready(function () {
    $('.saveBtn').on('click' , function () {
        const text = $(this).siblings('.events').val();
        const time = $(this).parent().attr('id');
        localStorage.setItem(time, text);
        $('.alert').addClass('show');
    setTimeout(function () {
        $('.alert').removeClass('show');
    }, 10);
    });
});
const cycle = setInterval(tracker, 15000);
$('#hour-9 .events').val(localStorage.getItem('hour-9'));
$('#hour-10 .events').val(localStorage.getItem('hour-10'));
$('#hour-11 .events').val(localStorage.getItem('hour-11'));
$('#hour-12 .events').val(localStorage.getItem('hour-12'));
$('#hour-13 .events').val(localStorage.getItem('hour-13'));
$('#hour-14 .events').val(localStorage.getItem('hour-14'));
$('#hour-15 .events').val(localStorage.getItem('hour-15'));
$('#hour-16 .events').val(localStorage.getItem('hour-16'));
$('#hour-17 .events').val(localStorage.getItem('hour-17'));
$('#currentDay').text(moment().format('dddd,MMMM Do'));
