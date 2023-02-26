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
$('#9am .events').val(localStorage.getItem('9am'));
$('#10am .events').val(localStorage.getItem('10am'));
$('#11am .events').val(localStorage.getItem('11am'));
$('#12pm .events').val(localStorage.getItem('12pm'));
$('#1pm .events').val(localStorage.getItem('1pm'));
$('#2pm .events').val(localStorage.getItem('2pm'));
$('#3pm .events').val(localStorage.getItem('3pm'));
$('#4pm .events').val(localStorage.getItem('4pm'));
$('#5pm .events').val(localStorage.getItem('5pm'));
$('#currentDay').text(moment().format('dddd,MMMM Do'));
