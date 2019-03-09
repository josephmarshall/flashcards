//show card feature

// add click handler to each card

$(document).ready ( function () {

  $(".flash_card").on("click", function() {
    //console.log("here")
    let description = this.childNodes[5];
    vis = $(description).css("visibility")
      if (vis == "visible") {
        vis = "hidden"
      } else if (vis == "hidden") {
        vis = "visible"
      }
    $(description).css("visibility", vis)
  })

var newCard = 1

  $(".edit").on("click", function(){
    $(this.parentElement).html(
      "<form id='card-form'" +
      "id='newCard'" + newCard +
      ">Front: " +
      "<input type='text' id='new-card-title' name='ftitle'>" +
      "<br>Back: " +
      "<input class='description-input' id='new-card-description' type='text' name='fdescription'>" +
      "<br><br>" +
      "<input type='button'"+
      "onClick='newCard()'" +
      "value='Submit'>" +
      "</form>"
      )
  })


})

function newCard() {
  let title = document.getElementsByName("ftitle")[0].value
  let description = document.getElementsByName("fdescription")[0].value
  let parent = document.getElementById("card-form").parentElement
  parent.innerHTML = ("<h1>" + title + "</h1><p>" + description + "</p>")
}

