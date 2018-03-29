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
addAnimal += '<p> what size is the animal? (small, medium, large, etc.)<br>';
addAnimal +=
    "<input id='size' name='size' typ='text' autocomplete='off' value='' aria-required='true' placeholder='size'><p>";
addAnimal += '<p> What is the color of the animal?';
addAnimal +=
    "<input id='color' name='color' typ='text' autocomplete='off' value='' aria-required='true' placeholder='color'><p></div>";
addAnimal +=
    "<div class='col-lg-3'><p>What is the intake date? (yyyy-mm-dd)<br>";
addAnimal +=
    "<input id='date' name='date' typ='text' autocomplete='off' value='' aria-required='true' placeholder='yyyy-mm-dd'><p>";
addAnimal += '<p>Where is the animal located? (Foster care, puppy cage, etc.)';
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

// When the user clicks on the button, open the modal
function showInfo() {
    $('#myModal').css('display', 'block');
}

// When the user clicks on <span> (x), close the modal
function closemodel() {
    $('#myModal').css('display', 'none');
}

function manager_login() {
    $('#home').attr('hidden', true);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#foster_care').attr('hidden', true);
    $('#FosterSignup').attr('hidden', true);
    $('#manager_id').attr('hidden', false);
    $('#user-info').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            url: 'http://localhost:8080/login',
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

function insertAnimal() {
    $('#manager_page').attr('hidden', true);
    $('#manager_choice').attr('hidden', false);
    $('#manager_choice').html(addAnimal);
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

function home() {
    $('#home').attr('hidden', false);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#FosterSignup').attr('hidden', true);
    $('#facility_care').attr('hidden', true);
    $('#manager_id').attr('hidden', true);
}

function volunteer() {
    $('#home').attr('hidden', true);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#foster_care').attr('hidden', true);
    $('#FosterSignup').attr('hidden', true);
    $('#manager_id').attr('hidden', true);
}

function FosterSignup() {
    $('#home').attr('hidden', true);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#foster_care').attr('hidden', true);
    $('#FosterSingup').attr('hidden', false);
    $('#manager_id').attr('hidden', true);
}

function FosterCare() {
    $('#home').attr('hidden', true);
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#foster_care').attr('hidden', false);
    $('#FosterSignup').attr('hidden', true);
    $('#manager_id').attr('hidden', true);
}

window.onload = home;
