// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("new burger button clicked");
        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: $("[name=doneEating]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log(newBurger)
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".change-sleep").on("click", function (event) {
        var id = $(this).data("id");
        var newSleep = $(this).data("newsleep");

        var newSleepState = {
            sleepy: newSleep
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newSleepState
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".delete-cat").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted cat", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
