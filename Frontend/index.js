//**********this functions direct where the user needs to be when they click on button*********************/
function home() {
    $('#home').attr('hidden', false);
    $('.navbar').attr('hidden', false);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#FosterSignup').attr('hidden', true);
    $('#facility_care').attr('hidden', true);
    $('#manager_id').attr('hidden', true);
    $('#manager_page').attr('hidden', true);
    $('#foster_page').attr('hidden', true);
    $('#foster_care').attr('hidden', true);
    $('#FosterLogin').attr('hidden', true);
}
function FosterSignup() {
    $('#home').attr('hidden', true);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#FosterSignup').attr('hidden', false);
    $('#facility_care').attr('hidden', true);
    $('#manager_id').attr('hidden', true);
    $('#foster_page').attr('hidden', true);
    $('#foster_care').attr('hidden', true);
    $('#FosterLogin').attr('hidden', true);
}
function FosterPage() {
    $('#foster_page').attr('hidden', false);
    $('#home').attr('hidden', true);
    $('.navbar').attr('hidden', true);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#FosterLogin').attr('hidden', true);
    $('#FosterSignup').attr('hidden', true);
    $('#facility_care').attr('hidden', true);
    $('#manager_id').attr('hidden', true);
}
function FosterLogin() {
    $('#home').attr('hidden', true);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#FosterSignup').attr('hidden', true);
    $('#facility_care').attr('hidden', true);
    $('#manager_id').attr('hidden', true);
    $('#foster_page').attr('hidden', true);
    $('#foster_care').attr('hidden', true);
    $('#FosterLogin').attr('hidden', false);
}
function FosterCare() {
    $('#home').attr('hidden', true);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#FosterSignup').attr('hidden', true);
    $('#facility_care').attr('hidden', true);
    $('#manager_id').attr('hidden', true);
    $('#foster_page').attr('hidden', true);
    $('#foster_care').attr('hidden', false);
    $('#FosterLogin').attr('hidden', true);
}
function manager_page() {
    $('.navbar').attr('hidden', true);
    $('#home').attr('hidden', true);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#foster_care').attr('hidden', true);
    $('#FosterSignup').attr('hidden', true);
    $('#manager_id').attr('hidden', true);
    $('#manager_choice').attr('hidden', true);
    $('#manager_page').attr('hidden', false);
}
function manager() {
    $('#home').attr('hidden', true);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#FosterSignup').attr('hidden', true);
    $('#facility_care').attr('hidden', true);
    $('#manager_id').attr('hidden', false);
    $('#foster_page').attr('hidden', true);
    $('#foster_care').attr('hidden', true);
    $('#FosterLogin').attr('hidden', true);
}
//*********************************************************************************************************/

//**********this will show the animals and the animals info ***********************************************/
function showInfo() {
    $('#myModal').css('display', 'block');
}
function closemodel() {
    $('#myModal').css('display', 'none');
}
function animals(x) {
    var html =
        '<center><div class="col-lg-3"><p><img src="./images/animallogo.jpg" width="225" height="225"/></p>';
    html += '<p>Name: ' + x.name + '</p>';
    html += '<p>Breed: ' + x.breed + '</p>';
    html += '<p>Gender: ' + x.male_female + '</p>';
    html += '<p>Color: ' + x.color + '</p>';
    html += '<p>Age: ' + x.age_year + ' year(s)<br>';
    html += '   ' + x.age_month + ' month(s)<br>    ';
    html +=
        x.age_week +
        ' week(s)</p><button onclick="showInfo()">View</button></div></center>';
    $('#popup_name').html(x.name);
    return html;
}
function show_animals(animal) {
    console.log(animal);
    $('#home').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#FosterSignup').attr('hidden', true);
    $('#facility_care').attr('hidden', true);
    $('#manager_id').attr('hidden', true);

    console.log(animal);
    $.ajax({
        url: 'http://localhost:8080/showAnimals',
        type: 'POST',
        data: JSON.stringify({
            animal
        }),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
        .then(function handleFeedResponse(response) {
            $('#adoption').attr('hidden', false);
            console.log(response);
            if (animal === 'dog') {
                var dog =
                    '<center><img src="./images/logo.jpg" width="425" length="425"/></center><h1>DOGS IN NEED OF ADOPTION:</h1><hr>' +
                    response
                        .map(function(y) {
                            return animals(y);
                        })
                        .join('');
                $('#adoption').html(dog);
            } else if (animal === 'cat') {
                var cat =
                    '<center><img src="./images/logo.jpg" width="425" length="425"/></center><h1>CATS IN NEED OF ADOPTION:</h1><hr>' +
                    response
                        .map(function(y) {
                            return animals(y);
                        })
                        .join('');
                $('#adoption').html(cat);
            }
        })
        .catch(function handleErrorResponse(err) {
            console.log(err);
        });
}
function other_animals(x) {
    var html =
        '<center><div class="col-lg-3"><p><img src="./images/animallogo.jpg" width="225" height="225"/></p>';
    html += '<p>Name: ' + x.name + '</p>';
    html += '<p>Species: ' + x.species + '</p>';
    html += '<p>Breed: ' + x.breed + '</p>';
    html += '<p>Gender: ' + x.male_female + '</p>';
    html += '<p>Color: ' + x.color + '</p>';
    html += '<p>Age: ' + x.age_year + ' year(s)<br>';
    html += '   ' + x.age_month + ' month(s)<br>    ';
    html += x.age_week + ' week(s)</p><button>View</button></div></center>';
    return html;
}
function other_pets() {
    $('#home').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#foster_care').attr('hidden', true);
    $('#FosterSignup').attr('hidden', true);
    $('#manager_id').attr('hidden', true);
    $('#manager_page').attr('hidden', true);
    $('#manager_choice').attr('hidden', true);
    $('#adoption').attr('hidden', false);
    $.ajax({
        url: 'http://localhost:8080/otherPets',
        type: 'POST',
        data: JSON.stringify({}),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
        .then(function handleFeedResponse(response) {
            console.log(response);
            var other_pet =
                '<center><img src="./images/logo.jpg" width="425" length="425"/></center><h1>OTHER PETS IN NEED OF ADOPTION:</h1><hr>' +
                response
                    .map(function(y) {
                        return other_animals(y);
                    })
                    .join('');
            $('#adoption').html(other_pet);
        })
        .catch(function handleErrorResponse(err) {
            console.log(err);
        });
}
//***********************************************************************************************************/

//**************this is all of the login, signup, and logout for the user and manager ***********************/
$('#manager-login').submit(function(event) {
    console.log(event);
    event.preventDefault();
    $.ajax({
        url: 'http://localhost:8080/managerLogin',
        type: 'POST',
        data: JSON.stringify({
            username: $('#username-input').val(),
            password: $('#password-input').val()
        }),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
        .then(function handleFeedResponse(response) {
            if (response) {
                manager_page();
            } else {
                $('.form-group').addClass('has-danger');
                $('#password-input').val('');
                $('#login-error').html('Incorrect username or password');
            }
        })
        .catch(function handleErrorResponse(err) {
            console.log(err);
        });
});
function manager_logout(id) {
    console.log(id);
    $.ajax({
        url: 'http://localhost:8080/managerLogOut/' + id,
        type: 'POST',
        crossDomain: true,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
        .then(function handleFeedResponse(response) {
            console.log(response);
            if (response) {
                home();
            } else {
                console.log('this does not work either');
            }
        })
        .catch(function handleErrorResponse(err) {
            console.log(err);
        });
}
$('#foster-login').submit(function(event) {
    event.preventDefault();
    console.log($('#Foster-username').val());
    $.ajax({
        url: 'http://localhost:8080/FosterLogin',
        type: 'POST',
        data: JSON.stringify({
            username: $('#Foster-username').val(),
            password_hash: $('#Foster-password').val()
        }),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
        .then(function handleFeedResponse(response) {
            console.log(response);
            FosterPage();
            var feed = foster_page(response);
            $('#foster_page').html(feed);
        })
        .catch(function handleErrorResponse(err) {
            console.log(err);
            console.log('this did not work');
        });
});
$('#foster-signup').on('submit', function FosterParentSignup(event) {
    event.preventDefault();
    console.log($('#first_name').val());
    console.log(event);
    $.ajax({
        url: 'http://localhost:8080/FosterSignup',
        type: 'POST',
        data: JSON.stringify({
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            email: $('#email').val(),
            city: $('#city').val(),
            county: $('#county').val(),
            home_address: $('#home_address').val(),
            username: $('#username').val(),
            password_hash: $('#password').val()
        }),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
        .then(function handleFeedResponse(response) {
            console.log(response);
            FosterPage();
            var feed = foster_page(response);
            $('#foster_page').html(feed);
        })
        .catch(function handleErrorResponse(err) {
            console.log(err);
            console.log('this did not work');
        });
});
function FosterParentLogout(id) {
    $.ajax({
        url: 'http://localhost:8080/FosterLogOut/' + id,
        type: 'POST',
        crossDomain: true,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
        .then(function handleFeedResponse(response) {
            if (response) {
                home();
            } else {
                console.log('this does not work either');
            }
        })
        .catch(function handleErrorResponse(err) {
            console.log(err);
        });
}

//***********************************************************************************************************/

//**************this is all of the thing that the user or manager can do once they login ********************/
function insertAnimal() {
    $('#manager_page').attr('hidden', true);
    $('#manager_choice').attr('hidden', false);
    $('#manager_choice').html(AddAnimal());
    $('#animal-insert').on('submit', function(event) {
        console.log(event);
        event.preventDefault();
        $.ajax({
            url: 'http://localhost:8080/insertAnimal',
            type: 'POST',
            data: JSON.stringify({
                species: $('#species').val(),
                breed: $('#breed').val(),
                name: $('#name').val(),
                male_female: $('#male_female').val(),
                age_year: $('#year').val(),
                age_month: $('#month').val(),
                age_week: $('#week').val(),
                size: $('#size').val(),
                color: $('#color').val(),
                date: $('#date').val(),
                location: $('#location').val(),
                houseTrained: $('#housetrained').val(),
                declawed: $('#declawed').val(),
                spayed_or_neutured: $('#spayed_neutured').val()
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        })
            .then(function handleFeedResponse(response) {
                var html =
                    "<div class='col-lg-3'> <p>Succes! would you like to </p>";
                html +=
                    "<button onclick='insertAnimal'>ADD ANOTHER ANIMAL</button></div>";
                html +=
                    "<div class='col-lg-3'><button onclick='manager_page'>Other choice.</button></div>";
                if (response) {
                    $('#animalMessage').html(html);
                    manager_page();
                }
            })
            .catch(function handleErrorResponse(err) {
                console.log(err);
                $('#animalMessage').html(
                    'Sorry invalid choices please make sure you have everythin fill out correctly.'
                );
            });
    });
}
function AddAnimal() {
    var addAnimal =
        "<center><img src='./images/logo.jpg' width='425' length='425'/></center>";
    addAnimal += "<div class='container'> <h1>ADD ANIMAL</h1><hr>";
    addAnimal +=
        "<form id='animal-insert'><div class='col-lg-3'><p>What kind of animals is it? (dog, cat, etc.)<br>";
    addAnimal +=
        "<input id='species' name='species' typ='text' autocomplete='off' value='' aria-required='true' placeholder='species'><p>";
    addAnimal += '<p>What kind of breed is it?';
    addAnimal +=
        "<input id='breed' name='breed' typ='text' autocomplete='off' value='' aria-required='true' placeholder='breed'><p>";
    addAnimal += '<p>What is the name of it?';
    addAnimal +=
        "<input id='name' name='name' typ='text' autocomplete='off' value='' aria-required='true' placeholder='name'><p>";
    addAnimal += '<p>Is the animal Male of Female?';
    addAnimal +=
        "<input id='male_female' name='male_female' typ='text' autocomplete='off' value='' aria-required='true' placeholder='gender'><p></div>";
    addAnimal += "<div class='col-lg-3'>";
    addAnimal += '<p>Age of the animal';
    addAnimal +=
        "<input id='year' name='year' typ='numeric' autocomplete='off' value='' aria-required='true' placeholder='years'>";
    addAnimal +=
        "<input id='month' name='month' typ='numeric' autocomplete='off' value='' aria-required='true' placeholder='months'>";
    addAnimal +=
        "<input id='week' name='week' typ='numeric' autocomplete='off' value='' aria-required='true' placeholder='weeks'><p>";
    addAnimal +=
        '<p> what size is the animal? (small, medium, large, etc.)<br>';
    addAnimal +=
        "<input id='size' name='size' typ='text' autocomplete='off' value='' aria-required='true' placeholder='size'><p>";
    addAnimal += '<p> What is the color of the animal?';
    addAnimal +=
        "<input id='color' name='color' typ='text' autocomplete='off' value='' aria-required='true' placeholder='color'><p></div>";
    addAnimal +=
        "<div class='col-lg-3'><p>What is the intake date? (yyyy-mm-dd)<br>";
    addAnimal +=
        "<input id='date' name='date' typ='text' autocomplete='off' value='' aria-required='true' placeholder='yyyy-mm-dd'><p>";
    addAnimal +=
        '<p>Where is the animal located? (Foster care, puppy cage, etc.)';
    addAnimal +=
        "<input id='location' name='location' typ='text' autocomplete='off' value='' aria-required='true' placeholder='location'><p>";
    addAnimal += '<p>Is the animal housetrained?';
    addAnimal +=
        "<input id='housetrained' name='housetrained' typ='text' autocomplete='off' value='' aria-required='true' placeholder='true or false'><p>";
    addAnimal += '<p>Is the animal declawed?';
    addAnimal +=
        "<input id='declawed' name='declawed' typ='text' autocomplete='off' value='' aria-required='true' placeholder='true or false'><p></div>";
    addAnimal += '<div class="col-lg-3">';
    addAnimal += '<p>Is the animal spayed or neutured?</p>';
    addAnimal +=
        "<input id='spayed_neutured' name='spayed_neutured' typ='text' autocomplete='off' value='' aria-required='true' placeholder='true or false'></div>";
    addAnimal +=
        "<button class='submit-button' type='submit'>add animal</button></form>";
    addAnimal += "<div id='animalMessage'></div>";
    return addAnimal;
}
function foster_page(x) {
    var html =
        '<button onclick="FosterParentLogout(' + x.id + ')"> Log out </button>';
    html +=
        '<center><div class="container"><img src="./images/logo.jpg" width="425" length="425" /></div>';
    html +=
        '</center><div class="container"><h1>' +
        x.first_name +
        ' ' +
        x.last_name +
        '</h1><hr>';
    html += '<div class="col-lg-3"><h1>' + x.username + ' info</h1><hr>';
    html += '<p>' + x.email + '</p>';
    html += '<p>' + x.city + '</p>';
    html += '<p>' + x.county + '</p>';
    html += '<p>' + x.home_address + '</p></div>';
    html += '<div class="col-lg-4"><h1>Foster Parenting</h1><hr>';
    html +=
        '<p><button onclick="show_animals("dog")">Foster a dog</button></p>';
    html +=
        '<p><button onclick="show_animals("cat")">Foster a cat</button></p>';
    html +=
        '<p><button onclick="other_pets()">Foster other pets</button></p></div>';
    html +=
        '<div id="foster_pet" class="col-lg-5"><h1> hello world</h1></div></div>';
    html +=
        '<div class="container"><div class="col-lg-3"><h1>Foster pet</h1><hr><p>hello world</p>';
    html += '<button>Unfoster Pet</button></div></div';
    return html;
}
//***********************************************************************************************************/
function main() {
    home();
}

$(main);
