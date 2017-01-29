// Handle Ajax Messages
var timerID = null;

$(function() {
    $('.close').click(function() {
        $(this).parent().fadeOut('slow');
       clearTimeout(timerID);
    });
});

function clearMessage() {
    $('.alert-danger').removeClass('alert-danger').find('.close').trigger('click');
    $('.alert-success').removeClass().hide();
    $('.alert-error').removeClass().hide();
    clearTimeout(timerID);
}

function displayMessage(sID, sText, bSuccess) {
    sClass = 'alert alert-dismissible alert-'+((bSuccess) ? 'success' : 'danger');
    $('#'+sID).find('strong').html(sText);
    $('#'+sID).addClass(sClass).show(700);
}
