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

  $(".edit").on("click", function(){
    $(this.parentElement).html("<div class='flash_card'><p class='title'>Tit</p><hr /><p class='description'>Descrip</p><button class='edit'>Edit</button><button id='delete'>Delete</button></div>")
  })
  
})