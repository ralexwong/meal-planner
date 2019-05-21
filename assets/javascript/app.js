$(document).ready(function () {


    var daysArray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var mealArray = ["breakfast", "lunch", "dinner"];
    var nutrientArray = ["calories", "protein", "carbohydrates", "fats",];
    var shortDayArray = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"]

    // Hide the meal menus at the beginning
    $("#breakfast-menu").hide();
    $("#lunch-menu").hide();
    $("#dinner-menu").hide();

    /* Events fired on the drag target */
    document.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("Text", event.target.id);

    });

    document.addEventListener("drag", function (event) {
        event.preventDefault();

    });

    /* Events fired on the drop target */
    document.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    // Events fired on the actual drop event
    document.addEventListener("drop", function (event) {
        event.preventDefault();

        if (event.target.className == "foodBox droptarget") {

            var data = event.dataTransfer.getData("Text");
            console.log("data stored: " + data);

            var cloneDiv = $("#" + data).clone();
            cloneDiv.attr("id", data);
            $("#" + data).after(cloneDiv);

            event.target.appendChild(document.getElementById(data));
            console.log("successful drop")

            calculate();
        }
    });

    $(".droptarget").dblclick(function(){
        
        $(this).empty();

    });

    // Reveal the breakfast menu when clicked
    $("#breakfast-button").on("click", function () {

        if ($("#breakfast-menu").is(":hidden")) {
            $("#breakfast-menu").show();
        }
        else {
            $("#breakfast-menu").hide();
        };

        $("#lunch-menu").hide();
        $("#dinner-menu").hide();
    });

    // Reveal the lunch button when clicked
    $("#lunch-button").on("click", function () {

        if ($("#lunch-menu").is(":hidden")) {
            $("#lunch-menu").show();
        }
        else {
            $("#lunch-menu").hide();
        };

        $("#breakfast-menu").hide();
        $("#dinner-menu").hide();
    });

    // Reveal the dinner button when clicked
    $("#dinner-button").on("click", function () {

        $("#breakfast-menu").hide();
        $("#lunch-menu").hide();

        if ($("#dinner-menu").is(":hidden")) {
            $("#dinner-menu").show();
        }
        else {
            $("#dinner-menu").hide();
        };
    });

    $("#clear").on("click", function () {
        $(".droptarget").empty();
    })


    // calcualtes the nutrients from the foodboxes
    function calculate() {


        // loop through the days array
        for (var i = 0; i < daysArray.length; i++) {

            // make sure to empty it the first time
            $("#" + daysArray[i] + "-stats").empty();

            // loop through the nutrient array
            for (var k = 0; k < nutrientArray.length; k++) {

                // add together the nutrient from all the meals of that day and round it to a number
                var count = Math.round((+$("#" + daysArray[i] + "-breakfast").children().attr(nutrientArray[k])) + (+$("#" + daysArray[i] + "-lunch").children().attr(nutrientArray[k])) + (+$("#" + daysArray[i] + "-dinner").children().attr(nutrientArray[k])));

                // append numbers to html
                $("#" + daysArray[i] + "-stats").append(nutrientArray[k] + ": " + count + "<br>");

            }
        }
    }

    //     var sundayBreakfastCalories = $("#sunday-breakfast").children().attr("calories");
    //     var sundayLunchCalories = $("#sunday-lunch").children().attr("calories");
    //     var sundayDinnerCalories = $("#sunday-dinner").children().attr("calories");

    //     var sundayCalories = Math.round((+sundayBreakfastCalories) + (+sundayLunchCalories) + (+sundayDinnerCalories));

    //     var sundayBreakfastProtein = $("#sunday-breakfast").children().attr("protein");
    //     var sundayLunchProtein = $("#sunday-lunch").children().attr("protein");
    //     var sundayDinnerProtein = $("#sunday-dinner").children().attr("protein");

    //     var sundayProtein = Math.round((+sundayBreakfastProtein) + (+sundayLunchProtein) + (+sundayDinnerProtein));

    //     var sundayBreakfastCarbs = $("#sunday-breakfast").children().attr("carbohydrates");
    //     var sundayLunchCarbs = $("#sunday-lunch").children().attr("carbohydrates");
    //     var sundayDinnerCarbs = $("#sunday-dinner").children().attr("carbohydrates");

    //     var sundayCarbs = Math.round((+sundayBreakfastCarbs) + (+sundayLunchCarbs) + (+sundayDinnerCarbs));

    //     var sundayBreakfastFats = $("#sunday-breakfast").children().attr("fats");
    //     var sundayLunchFats = $("#sunday-lunch").children().attr("fats");
    //     var sundayDinnerFats = $("#sunday-dinner").children().attr("fats");

    //     var sundayFats = Math.round((+sundayBreakfastFats) + (+sundayLunchFats) + (+sundayDinnerFats));

    //     $("#sunday-stats").empty().append("Calories: " + sundayCalories + "<br>");
    //     $("#sunday-stats").append("Protein: " + sundayProtein + "g" + "<br>");
    //     $("#sunday-stats").append("Carbs: " + sundayCarbs + "g" + "<br>");
    //     $("#sunday-stats").append("Fats: " + sundayFats + "g" + "<br>");

    function firebaseMeals() {

        var sundayBreakfast = $("#sunday-breakfast").html();
        var sundayLunch = $("#sunday-lunch").html();
        var sundayDinner = $("#sunday-dinner").html();

        var mondayBreakfast = $("#monday-breakfast").html();
        var mondayLunch = $("#monday-lunch").html();
        var mondayDinner = $("#monday-dinner").html();

        var tuesdayBreakfast = $("#tuesday-breakfast").html();
        var tuesdayLunch = $("#tuesday-lunch").html();
        var tuesdayDinner = $("#tuesday-dinner").html();

        var wednesdayBreakfast = $("#wednesday-breakfast").html();
        var wednesdayLunch = $("#wednesday-lunch").html();
        var wednesdayDinner = $("#wednesday-dinner").html();

        var thursdayBreakfast = $("#thursday-breakfast").html();
        var thursdayLunch = $("#thursday-lunch").html();
        var thursdayDinner = $("#thursday-dinner").html();

        var fridayBreakfast = $("#friday-breakfast").html();
        var fridayLunch = $("#friday-lunch").html();
        var fridayDinner = $("#friday-dinner").html();

        var saturdayBreakfast = $("#saturday-breakfast").html();
        var saturdayLunch = $("#saturday-lunch").html();
        var saturdayDinner = $("#saturday-dinner").html();

        database.ref($("#login").val().trim()).set({

            sundayBreakfast: sundayBreakfast,
            sundayLunch: sundayLunch,
            sundayDinner: sundayDinner,

            mondayBreakfast: mondayBreakfast,
            mondayLunch: mondayLunch,
            mondayDinner: mondayDinner,

            tuesdayBreakfast: tuesdayBreakfast,
            tuesdayLunch: tuesdayLunch,
            tuesdayDinner: tuesdayDinner,

            wednesdayBreakfast: wednesdayBreakfast,
            wednesdayLunch: wednesdayLunch,
            wednesdayDinner: wednesdayDinner,

            thursdayBreakfast: thursdayBreakfast,
            thursdayLunch: thursdayLunch,
            thursdayDinner: thursdayDinner,

            fridayBreakfast: fridayBreakfast,
            fridayLunch: fridayLunch,
            fridayDinner: fridayDinner,

            saturdayBreakfast: saturdayBreakfast,
            saturdayLunch: saturdayLunch,
            saturdayDinner: saturdayDinner,

        });

    };

    
    $("#add-user").on("click", function() {
        var user = $("#login").val().trim();
        event.preventDefault();

        $("#current-user").html("Current User: " + user);

        console.log(user);
        console.log(database.ref(user));
        console.log(database.ref(user).key);

        if (database.ref(user).key) {

            database.ref(user).on("value", function(snapshot) {

                console.log(snapshot.val());
        
                $("#sunday-breakfast").html(snapshot.val().sundayBreakfast);
                $("#sunday-lunch").html(snapshot.val().sundayLunch);
                $("#sunday-dinner").html(snapshot.val().sundayDinner);
        
                $("#monday-breakfast").html(snapshot.val().mondayBreakfast);
                $("#monday-lunch").html(snapshot.val().mondayLunch);
                $("#monday-dinner").html(snapshot.val().mondayDinner);
        
                $("#tuesday-breakfast").html(snapshot.val().tuesdayBreakfast);
                $("#tuesday-lunch").html(snapshot.val().tuesdayLunch);
                $("#tuesday-dinner").html(snapshot.val().tuesdayDinner);
        
                $("#wednesday-breakfast").html(snapshot.val().wednesdayBreakfast);
                $("#wednesday-lunch").html(snapshot.val().wednesdayLunch);
                $("#wednesday-dinner").html(snapshot.val().wednesdayDinner);
        
                $("#thursday-breakfast").html(snapshot.val().thursdayBreakfast);
                $("#thursday-lunch").html(snapshot.val().thursdayLunch);
                $("#thursday-dinner").html(snapshot.val().thursdayDinner);
        
                $("#friday-breakfast").html(snapshot.val().fridayBreakfast);
                $("#friday-lunch").html(snapshot.val().fridayLunch);
                $("#friday-dinner").html(snapshot.val().fridayDinner);
        
                $("#saturday-breakfast").html(snapshot.val().saturdayBreakfast);
                $("#saturday-lunch").html(snapshot.val().saturdayLunch);
                $("#saturday-dinner").html(snapshot.val().saturdayDinner);

                calculate();
                
            });

        }

        else {
            database.ref(user).push({

                sundayBreakfast: sundayBreakfast,
                sundayLunch: sundayLunch,
                sundayDinner: sundayDinner,

                mondayBreakfast: mondayBreakfast,
                mondayLunch: mondayLunch,
                mondayDinner: mondayDinner,

                tuesdayBreakfast: tuesdayBreakfast,
                tuesdayLunch: tuesdayLunch,
                tuesdayDinner: tuesdayDinner,

                wednesdayBreakfast: wednesdayBreakfast,
                wednesdayLunch: wednesdayLunch,
                wednesdayDinner: wednesdayDinner,

                thursdayBreakfast: thursdayBreakfast,
                thursdayLunch: thursdayLunch,
                thursdayDinner: thursdayDinner,

                fridayBreakfast: fridayBreakfast,
                fridayLunch: fridayLunch,
                fridayDinner: fridayDinner,

                saturdayBreakfast: saturdayBreakfast,
                saturdayLunch: saturdayLunch,
                saturdayDinner: saturdayDinner,

                
            })
            console.log("work");
        }
    });

    var firebaseConfig = {
        apiKey: "AIzaSyDKrVHt43u2axKy28_3Oy1y1mmC9yj1TPU",
        authDomain: "meal-prep-b23a3.firebaseapp.com",
        databaseURL: "https://meal-prep-b23a3.firebaseio.com",
        projectId: "meal-prep-b23a3",
        storageBucket: "meal-prep-b23a3.appspot.com",
        messagingSenderId: "413133199350",
        appId: "1:413133199350:web:7a9b0fdb10a8cabc"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    $("#save").on("click", function () {
        event.preventDefault();

        firebaseMeals();

    });

    //Prevents refresh on clicking submit button
    $('#submitbutton').click(function (e) {
        e.preventDefault();
    });

    $("#stats").click(function (e) {
       
        calculate();

    });


    //On click of submit next to input form, AJAX request for user input
    $(document).on("click", "#submitbutton", function () {
        var apiID = "aee51471";
        var apiKey = "b4a9d4d9acaf471f9a836e6615157895";
        var q = document.getElementById("searchAPI").value;
        var queryURL = `https://api.edamam.com/search?q=${q}&app_id=${apiID}&app_key=${apiKey}`

        $("#searchContainer").show();

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                //For loop for appending images and title of user search
                console.log(response);
                var rowDiv = $("<div class='row' style='margin: 0 auto 0 auto'>");
                for (var i = 0; i < 5; i++) {

                    var foodDiv = $("<div class='card searchCard' style='width: 11rem;' draggable='true'>");
                    var pDiv = $("<p>" + response.hits[i].recipe.label + "</p>");
                    var imgDiv = $("<img class='mealCards' draggable='false'>");

                    $(foodDiv).append(pDiv);
                    $(foodDiv).append(imgDiv);
                    $(imgDiv).attr("src", response.hits[i].recipe.image);

                    $(foodDiv).attr({
                        "calories": response.hits[i].recipe.calories / response.hits[i].recipe.yield,
                        "protein": response.hits[i].recipe.digest[2].total / response.hits[i].recipe.yield,
                        "fats": response.hits[i].recipe.digest[0].total / response.hits[i].recipe.yield,
                        "carbohydrates": response.hits[i].recipe.digest[1].total / response.hits[i].recipe.yield,
                    })

                    $(rowDiv).append(foodDiv);
                }
                $("#searchContainer").append(rowDiv);

                var rowDiv2 = $("<div class='row' style='margin: 0 auto 0 auto'>");
                for (var i = 5; i < 10; i++) {

                    var foodDiv = $("<div class='card searchCard' style='width: 11rem;' draggable='true'>");
                    var pDiv = $("<p>" + response.hits[i].recipe.label + "</p>");
                    var imgDiv = $("<img class='mealCards' draggable='false'>");

                    $(foodDiv).append(pDiv);
                    $(foodDiv).append(imgDiv);
                    $(imgDiv).attr("src", response.hits[i].recipe.image);

                    $(foodDiv).attr({
                        "calories": response.hits[i].recipe.calories / response.hits[i].recipe.yield,
                        "protein": response.hits[i].recipe.digest[2].total / response.hits[i].recipe.yield,
                        "fats": response.hits[i].recipe.digest[0].total / response.hits[i].recipe.yield,
                        "carbohydrates": response.hits[i].recipe.digest[1].total / response.hits[i].recipe.yield,
                    })

                    $(rowDiv2).append(foodDiv);
                }
                $("#searchContainer").append(rowDiv2);

            });

    });


    //On click of x button, call api for images and nutrient information
    $(document).on("click", ".mealButton", function () {
        console.log($(this).text().toLowerCase());

        // For breakfast, hide lunch/dinner. For lunch, hide breakfast/dinner. etc..


        // ajax call
        var apiID = "9f84eb9a";
        var apiKey = "87c7dc23bc1d85a4af08d0fed3b5eb4e";
        var q = $(this).text().toLowerCase();
        var queryURL = `https://api.edamam.com/search?q=${q}&app_id=${apiID}&app_key=${apiKey}`

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                for (var i = 0; i < 5; i++) {

                    var foodDiv = $("<div class='card' style='width: 11rem;' draggable='true'>");
                    var pDiv = $("<p id='" + q + i + "'>" + response.hits[i].recipe.label + "</p>");
                    var imgDiv = $("<img class='mealCards' draggable='false'>");

                    $(foodDiv).append(pDiv);
                    $(foodDiv).append(imgDiv);
                    $(imgDiv).attr("src", response.hits[i].recipe.image);

                    $(foodDiv).attr({
                        "calories": response.hits[i].recipe.calories / response.hits[i].recipe.yield,
                        "protein": response.hits[i].recipe.digest[2].total / response.hits[i].recipe.yield,
                        "fats": response.hits[i].recipe.digest[0].total / response.hits[i].recipe.yield,
                        "carbohydrates": response.hits[i].recipe.digest[1].total / response.hits[i].recipe.yield,
                    })

                    $("#" + q + "Menu").append(foodDiv);
                }

                for (var i = 5; i < 10; i++) {

                    var foodDiv = $("<div class='card' style='width: 11rem;' draggable='true'>");
                    var pDiv = $("<p id='" + q + i + "'>" + response.hits[i].recipe.label + "</p>");
                    var imgDiv = $("<img class='mealCards' draggable='false'>");

                    $(foodDiv).append(pDiv);
                    $(foodDiv).append(imgDiv);
                    $(imgDiv).attr("src", response.hits[i].recipe.image);

                    $(foodDiv).attr({
                        "calories": response.hits[i].recipe.calories / response.hits[i].recipe.yield,
                        "protein": response.hits[i].recipe.digest[2].total / response.hits[i].recipe.yield,
                        "fats": response.hits[i].recipe.digest[0].total / response.hits[i].recipe.yield,
                        "carbohydrates": response.hits[i].recipe.digest[1].total / response.hits[i].recipe.yield,
                    })

                    $("#" + q + "Menu2").append(foodDiv);
                }


                console.log(response);
            });
    });

});

