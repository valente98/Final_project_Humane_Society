function manager_login() {
    $('#home').attr('hidden', true);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#volunteer').attr('hidden', true);
    $('#foster_care').attr('hidden', true);
    $('#facility_care').attr('hidden', true);
    $('#manager_id').attr('hidden', false);
    $('.login-button').on('click', function() {
        var info = $.post(
            'http://localhost:8080/login/',
            JSON.stringify({
                username: $('#username-input').val(),
                password: $('#password-input').val()
            })
        )
            .then(function handleFeedResponse(response) {
                PAGE_DATA = response;
                var key = window.localStorage.setItem('key', PAGE_DATA.key);
                window.location =
                    '../user_homepage/index.html?user=' +
                    $('#username-input').val();
            })
            .catch(function handleFeedReason(reason) {
                console.log('Failure:', reason);
                $('#login-error').html(
                    '<li id="error" >Sorry incorrect username or password</li>'
                );
            });
    });
}

function home() {
    $('#home').attr('hidden', false);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#volunteer').attr('hidden', true);
    $('#foster_care').attr('hidden', true);
    $('#facility_care').attr('hidden', true);
    $('#manager_id').attr('hidden', true);
}

window.onload = home;
