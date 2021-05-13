$(document).ready(function() {
    $(".filter .item").click(function(){
      $(this).addClass("active").siblings().removeClass("active")
      $(".itens").fadeOut()
      setTimeout(function(){
        $(".itens").fadeIn()
      }, 700)

      let value = $(this).attr("data-filter")

      setTimeout(function(){

        if(value == "todos") {
          $(".itens .item").show("500")
        } else {
          $(".itens .item").not("." + value).hide("500")
          $(".itens .item").filter("." + value).show("500")

        }

      }, 350)
    })
  })