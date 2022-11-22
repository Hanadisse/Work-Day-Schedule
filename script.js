var save = $(".saveBtn")

function dayPlanner() {
    // gets the current date
    var today = moment().format("dddd MMMM Do")
    $("#currentDay").text(today)

    // gets the current hour
    var currentTime = moment().hours()
    // grabs each time-block class
    var timeBlock = $(".time-block")
    // loops through all time-block classes
    timeBlock.each(function () {
        // splits each hour into its own item
        var hour = parseInt($(this).attr("id"))
        // grabs the id to that div, compares current hour to that divs id value
        if (hour === currentTime) {
            $(this).children(".col-sm-10").attr("class", "present col-sm-10 description")
        } else if (hour < currentTime) {
            $(this).children(".col-sm-10").attr("class", "past col-sm-10 description")
        } else {
            $(this).children(".col-sm-10").attr("class", "future col-sm-10 description")
        }
    })

    // jquery event listener on save button
    save.on("click", function (event) {
        event.preventDefault()
        // var for what user types into teaxtarea
        var description = $(this).siblings(".col-sm-10").val().replace(timeStamp)
        // grabs id for which timeblock the user types in
        var timeStamp = $(this).parent().attr("id")

        // saves whatever the user types in to local storage with a key of the time-blocks id(hour 9-17)
        localStorage.setItem(timeStamp, JSON.stringify(description))
    })


}

dayPlanner()