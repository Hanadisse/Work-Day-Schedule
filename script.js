var save = $(".saveBtn")

function dayPlanner() {
    var today = moment().format("dddd MMMM Do")
    $("#currentDay").text(today)

    var currentTime = moment().hours()
    var timeBlock = $(".time-block")
    timeBlock.each(function() {
        var hour = parseInt($(this).attr("id"))
        if(hour === currentTime) {
            $(this).children(".col-sm-10").attr("class", "present col-sm-10 description")
        } else if (hour < currentTime) {
            $(this).children(".col-sm-10").attr("class", "past col-sm-10 description")
        } else {
            $(this).children(".col-sm-10").attr("class", "future col-sm-10 description")
        }
    })



}

dayPlanner()