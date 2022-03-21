












// let sizeOfPizza = document.getElementById("text-1").innerHTML.value
// let toppingsOfPizza=document.getElementById("test-1").innerHTML.value
// let crustOfPizza = document.getElementById("demo").innerHTML.value
// let total = parseInt(sizeOfPizza)+ parseInt(toppingsOfPizza)+parseInt(crustOfPizza);
// let order = 1;
// let grandTotal = 0



$(document).ready(function () {
  $("p").alert("  Hello")


let yourTotal=0
 
  function Pizza(size, toppings, crust, total, orderNo) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.total = total;
    this.orderNo = orderNo;
}




  

  $('.btn.order').click(function () {
      let sizeOfPizza = $(".size option:selected").val();
      let toppingsOfPizza = $(".toppings option:selected").val();
      let crustOfPizza = $(".crust option:selected").val();
      let total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
      let order = 1;
      let grandTotal = 0;

      $("table").show();
      $(".additional-buttons").show();
      $(".btn.order").hide();

      $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
      $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
      $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
      $("#total").html(total);


      function Pizza(size, toppings, crust, total, orderNo) {
          this.size = size;
          this.toppings = toppings;
          this.crust = crust;
          this.total = total;
          this.orderNo = orderNo;
      }


      $('.btn.add-pizza').click(function () {
          let sizeOfPizza = $(".size option:selected").val();
          let toppingsOfPizza = $(".toppings option:selected").val();
          let crustOfPizza = $(".crust option:selected").val();
          let total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
          order = order + 1;
          grandTotal = grandTotal + total;

          yourTotal = yourTotal + total

          let newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

          let newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

          $("#pizza").append(newRow);
      });
  })
  $('.btn.check-out').click(function () {
      document.getElementById('your-total').innerHTML = yourTotal;
  });

})


$(document).ready(function () {
  $("#blue").click(function () {
      alert('you have selected your toppings')


  })
})

$(docuent).ready(function () {
  ("#red").click(function () {
      alert("you have selected size of pizza")
  })

})


// end of js