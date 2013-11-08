var firebase = new Firebase('https://codepro-contactus.firebaseio.com/');

$(document).ready(function() {
    $('#contactSubmit').click(function() {
        var name = $('#nameInput').val();
        var email = $('#emailInput').val();
        firebase.push({name: name, email: email}, function(error) {
            if (error !== null) {
                alert(error);
            } else {
                alert("Success! Now go bother Dan for even temporarily using alert()!");
            }
        });
    })
})

/*function tickClockForward(confirmation) {
    if (confirmation == true) {
        var USNukes = this.country.nukes;
        USNukes.doNuclearOverrideSequence();
        USNukes.launch(true, "North Korea");
    } else {
        var areYouSure = true;
        overrideLaunchCodes(areYouSure);
    }
}*/