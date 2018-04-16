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
function modal(x) {
    var html = '<div id="myModal" class="modal">';
    html +=
        '<div class="modal-content"><div class="modal-header"><span class="close" onclick="closemodel()">&times;</span>';
    html +=
        '<h1 id="popup_name">' + x.name + '</h1></div><div class="modal-body">';
    html += '<p>Breed: ' + x.breed + '</p>';
    html += '<p>M/F: ' + x.male_female + '</p>';
    html +=
        '<p>Age: ' +
        x.age_year +
        ' year(s)\n\t' +
        x.age_month +
        ' month(s)\n\t' +
        x.age_week +
        ' week(s)</p>';
    html += '<p>Size: ' + x.size + '</p>';
    html += '<p>Color: ' + x.color + '</p>';
    html += '<p>With us since: ' + x.intake_date + '</p>';
    html += '<p>Location: ' + x.location + '</p>';
    html += '<p>House Trained: ' + x.houseTrained + '</p>';
    html += '<p>Declawed: ' + x.declawed + '</p>';
    html += '<p>Spayed or Neutured: ' + x.spayed_or_neutured + '</p></div>';
    html +=
        '<div class="modal-footer"><button onclick="application(' +
        x.id +
        ')">ADOPT</button></div> </div>';
    return html;
}
function modal2(x, user_id) {
    var html = '<div id="myModal" class="modal">';
    html +=
        '<div class="modal-content"><div class="modal-header"><span class="close" onclick="closemodel()">&times;</span>';
    html +=
        '<h1 id="popup_name">' + x.name + '</h1></div><div class="modal-body">';
    html += '<p>Breed: ' + x.breed + '</p>';
    html += '<p>M/F: ' + x.male_female + '</p>';
    html +=
        '<p>Age: ' +
        x.age_year +
        ' year(s)\n\t' +
        x.age_month +
        ' month(s)\n\t' +
        x.age_week +
        ' week(s)</p>';
    html += '<p>Size: ' + x.size + '</p>';
    html += '<p>Color: ' + x.color + '</p>';
    html += '<p>With us since: ' + x.intake_date + '</p>';
    html += '<p>Location: ' + x.location + '</p>';
    html += '<p>House Trained: ' + x.houseTrained + '</p>';
    html += '<p>Declawed: ' + x.declawed + '</p>';
    html += '<p>Spayed or Neutured: ' + x.spayed_or_neutured + '</p></div>';
    // html +=
    //     '<div class="modal-footer"><button onclick="application(' +
    //     x.id +
    //     ')">YES THIS PERSON CAN ADOPT</button><button onclick="NoAdoption(' +
    //     x.id +
    //     ')">NO THIS PERSON CAN NOT ADOPT</button></div> </div>';
    html +=
        '<div class="modal-footer"><button onclick="YesAdoption(' +
        x.id +
        ')">YES THIS PERSON CAN ADOPT</button><button onclick="NoAdoption(' +
        user_id +
        ')">NO THIS PERSON CAN NOT ADOPT</button></div> </div>';
    return html;
}
function application(id) {
    $('.modal').css('display', 'none');
    $('#adoption').attr('hidden', true);
    $('#application').attr('hidden', false);
    $('#animal_id').html(id);
}
$('#application-form').submit(function(event) {
    event.preventDefault();
    $('#animal_id').attr('hidden', false);
    console.log($('#animal_id').html());
    $.ajax({
        url: 'http://localhost:8080/insertApplicant',
        type: 'POST',
        data: JSON.stringify({
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            age: $('#age').val(),
            email: $('#email').val(),
            animal_id: $('#animal_id').html(),
            city: $('#city').val(),
            county: $('#county').val(),
            home_address: $('#home_address').val(),
            ownership_status: $('#ownership_status').val(),
            amount_pets_own: $('#amount_pets_own').val(),
            amount_pets_own_past: $('#amount_pets_own_past').val(),
            animal_living_with_you: $('#animal_living_with_you').val(),
            inside_outside: $('#inside_outside').val(),
            kept_during_day: $('#kept_during_day').val(),
            kept_at_night: $('#kept_at_night').val(),
            surrender_animals_at_us: $('#surrender_animals_at_us').val(),
            adopted_from_us_before: $('#adopted_from_us_before').val(),
            current_veterinarian_name: $('#current_veterinarian_name').val(),
            if_no_vet_name_vet_planing: $('#if_no_vet_name_vet_planning').val(),
            saw_pet_first: $('#saw_pet_first').val()
        }),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
        .then(function handleFeedResponse(response) {
            $('.applicant-button').attr('disabled', true);
            $('#finish-error').html(
                '<p>Your application has been submited!</p><button onclick="location.reload();">HOME</button>'
            );
        })
        .catch(function handleErrorResponse(err) {
            console.log(err);
            $('#finish-erro').html(
                '<p>Sorry You must complete in form the right format'
            );
        });
});
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
        ' week(s)</p><button onclick="getanimalByid(' +
        x.id +
        ')">View</button></div></center>';
    return html;
}
function getanimalByid(id) {
    console.log(id);
    $.ajax({
        url: 'http://localhost:8080/getAnimalbyId/' + id,
        type: 'POST',
        crossDomain: true,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
        .then(function handleFeedResponse(response) {
            console.log(response);
            var animal = response.map(function(y) {
                return modal(y);
            });
            $('#myModal').html(animal);
            $('.modal').css('display', 'block');
        })
        .catch(function handleErrorResponse(err) {
            console.log(err);
        });
}
function BoolgetanimalByid(id, user_id) {
    console.log(id);
    $.ajax({
        url: 'http://localhost:8080/getAnimalbyId/' + id,
        type: 'POST',
        crossDomain: true,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
        .then(function handleFeedResponse(response) {
            console.log(response);
            var animal = response.map(function(y) {
                return modal2(y, user_id);
            });
            $('#myModal').html(animal);
            $('.modal').css('display', 'block');
        })
        .catch(function handleErrorResponse(err) {
            console.log(err);
        });
}
function show_animals(animal) {
    $('#home').attr('hidden', true);
    $('#application').attr('hidden', true);
    $('#FosterSignup').attr('hidden', true);
    $('#facility_care').attr('hidden', true);
    $('#manager_id').attr('hidden', true);
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
    html +=
        x.age_week +
        ' week(s)</p><button onclick="getanimalByid(' +
        x.id +
        ')">View</button></div></center>';
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
    event.preventDefault();
    $.ajax({
        url: 'http://localhost:8080/managerLogin',
        type: 'POST',
        data: JSON.stringify({
            username: $('#username-input').val(),
            password_hash: $('#password-input').val()
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
            if (response) {
                var feed = foster_page(response);
                $('#foster_page').html(feed);
                FosterPage();
            } else {
                $('#password-input').val('');
                $('#login-error').html('Incorrect username or password');
            }
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
function NoAdoption(id) {
    console.log(this);
    $.ajax({
        url: 'http://localhost:8080/deleteApplicant/' + id,
        type: 'POST',
        crossDomain: true,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
        .then(function handleFeedResponse(response) {
            $('#manager_choice').hide(150);
            $('#manager_choice').html('');
            GetApplicants();
        })
        .catch(function handleErrorResponse(err) {
            console.log(err);
        });
}
function YesAdoption(id) {
    console.log(this);
    $.ajax({
        url: 'http://localhost:8080/deleteApplicantsandPet/' + id,
        type: 'POST',
        crossDomain: true,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
        .then(function handleFeedResponse(response) {
            $('#manager_choice').hide(150);
            $('#manager_choice').html('');
            GetApplicants();
        })
        .catch(function handleErrorResponse(err) {
            console.log(err);
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
function applicants(x) {
    var html = '<div class="col-lg-3">';
    html += '<p>Full Name: ' + x.first_name + ' ' + x.last_name + '</p>';
    html += '<p>Age: ' + x.age + '</p>';
    html += '<p>Email: ' + x.email + '</p>';
    html += '<p>City: ' + x.city + '</p>';
    html += '<p>County: ' + x.county + '</p>';
    html += '<p>Home Address: ' + x.home_address + '</p>';
    html += '<p>Ownership Status: ' + x.ownership_status + '</p>';
    html += '<p>Number of Pets Own: ' + x.amount_pets_own + '</p>';
    html +=
        '<p>Number of Pets Owned in the past: ' +
        x.amount_pets_own_past +
        '</p>';
    html +=
        '<p>Is the pet living with this person: ' +
        x.animal_living_with_you +
        '</p>';
    html += '<p>Pet will be a : ' + x.inside_outside + ' pet</p>';
    html +=
        '<p> Pet will be kept: ' + x.kept_during_day + ' during the day</p>';
    html += '<p> Pet will be kept: ' + x.kept_at_night + ' at night</p>';
    html += '<p> Surrender a pet before: ' + x.surrender_animals_at_us + '</p>';
    html += '<p> Adopted from us: ' + x.adopted_from_us_before + '</p>';
    html +=
        '<p> Current Veterinarian name: ' +
        x.current_veterinarian_name +
        '</p>';
    html +=
        '<p> If no current Vet. Will be planing to visit: ' +
        x.if_no_vet_name_vet_planing +
        '</p>';
    html += '<p> Saw animal first on: ' + x.saw_pet_first + '</p>';
    html +=
        '<button onclick="BoolgetanimalByid(' +
        x.animal_adopting_id +
        ', ' +
        x.id +
        ')">See pet</button><br><br><br><br></div>';
    return html;
}
function GetApplicants() {
    $.ajax({
        url: 'http://localhost:8080/getApplicant',
        type: 'POST',
        crossDomain: true,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
        .then(function handleFeedResponse(response) {
            console.log('refreshing applicants...' + response.length);
            // var applicant =
            //     '<center><img src="./images/logo.jpg" width="425" length="425"/></center><h1>Applicants</h1><hr>' +
            //     response
            //         .map(function(y) {
            //             return applicants(y);
            //         })
            //         .join('');
            var applicant =
                '<div class="row"><div class="col-lg-12"><center><img src="./images/logo.jpg" width="425" length="425"/></center><h1>Applicants</h1><hr></div></div>';
            applicant += '<div class="row">';
            for (var c = 0; c < response.length; c++) {
                if (c > 0 && c % 4 == 0) {
                    // adds row so there is not the funny overlap between the applications
                    console.log('NEW ROW');
                    applicant += '</div><div class="row">';
                }
                applicant += applicants(response[c]);
            }
            applicant += '</div>';

            $('#manager_page').attr('hidden', true);
            $('#manager_choice').html(applicant);
            $('#manager_choice').show(150);
        })
        .catch(function handleErrorResponse(err) {
            console.log(err);
        });
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
