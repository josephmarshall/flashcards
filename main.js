//show card feature

// add click handler to each card

$(document).ready ( function () {

 $(document).on("click", ".flash-card", function() {
   //console.log("here")

   let description = this.children[2];
   vis = $(description).css("visibility")
     if (vis == "visible") {
       vis = "hidden"
     } else if (vis == "hidden") {
       vis = "visible"
     }
   $(description).css("visibility", vis)
 })

var newCard = 1

 $(document).on("click", ".edit", function(){
   let parent = this.parentElement
   let title = this.parentElement.children[0].innerText
   $(this.parentElement.children[2]).css("visibility", "visible")
   let description = this.parentElement.children[2].innerText
   $(parent).html(
     "<form id='card-form'" +
     "id='newCard'" + newCard +
     ">" +
     "<input type='text' id='new-card-title' name='ftitle' value='" + title + "'>" +
     "<hr />" +
     "<textarea form='card-form' id='new-card-description' name='fdescription' >" +
     description + "</textarea>" +
     "<input type='button'"+
     "onClick='newCard()'" +
     "value='Save'>" +
     "</form>"
     )
 })

 $(document).on("click", ".delete", function (){
   let card = this.parentElement
   card.remove()
 })


})

function newCard() {
 let title = document.getElementsByName("ftitle")[0].value
 let description = document.getElementsByName("fdescription")[0].value
 let parent = document.getElementById("card-form").parentElement
 parent.innerHTML = (
 "<p class='title'>" + title +"</p>" +
 "<hr />" +
 "<p class='description'>" + description + "</p>" +
 "<button class='edit'>Edit</button>" +
 "<button class='delete'>Delete</button>" +
 "</div>"
 )
}

function addNewCard() {
 let firstCard = document.getElementsByClassName("grid-container")[0]
 let title = ""
 let description = ""
 $(firstCard).prepend(
   "<div class='flash-card'>"+
   "<form id='card-form'>" +
   "<input type='text' id='new-card-title' name='ftitle' value='" + title + "'>" +
   "<hr />" +
   "<textarea form='card-form' class='description-input' id='new-card-description' name='fdescription'>" +
   description + "</textarea>" +
   "<input type='button'"+
   "onClick='newCard()'" +
   "value='Save'>" +
   "</form>"+
   "<div>"
   )
}