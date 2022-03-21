


//     document.getElementById("return1").innerHTML =
//       "You have chosen " +
//       $("#size option:selected").text() +
//       " pizza, " +
//       $("#crust option:selected").text() +
//       " crust and " +
//       $("#topping option:selected").text() +
//       " topping. " +
//       " The total price is Ksh. " +
//       totalPrice;


// $(document).ready(function () {
//   $("#btn3").click(function () {
//     // Call user inputs
//     var pizzaSize = $("#size").val();
//     var pizzaCrust = $("#crust").val();
//     var pizzaTopping = $("#topping").val();
//     var orderNumber = $("#ordernumber").val();
//     console.log(pizzaSize, pizzaCrust, pizzaTopping);


$(document).ready(function () {
  $("p").alert("  Hello")


let yourTotal=0
let deliveryFee = 650







  

  $('.btn.order').click(function () {
      let sizeOfPizza = $(".size option:selected").val();
      let toppingsOfPizza = $(".toppings option:selected").val();
      let crustOfPizza = $(".crust option:selected").val();
      let total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
      let order = 0;
      // let grandTotal = order + delivery +anotherOrder;
      let grandTotal = 0

      $("table").show();
      $(".additional-buttons").show();
      $(".btn.order").hide();

//     document.getElementById("return1").innerHTML =
//       "You have chosen " +
//       $("#size option:selected").text() +
//       " pizza, " +
//       $("#crust option:selected").text() +
//       " crust and " +
//       $("#topping option:selected").text() +
//       " topping. " +
//       " The total price is Ksh. " +
//       totalPrice;

//     document.getElementById("return2").innerHTML =
//       "Your new total price is Ksh " +
//       grandTotal +
//       ". Our delivery guy will be at your doorstep soon. Enter your details below.";
//   });

      $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
      $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
      $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
      $("#total").html(total);

//     document.getElementById("return1").innerHTML =
//       "You have chosen " +
//       $("#size option:selected").text() +
//       " pizza, " +
//       $("#crust option:selected").text() +
//       " crust and " +
//       $("#topping option:selected").text() +
//       " topping. " +
//       " The total price is Ksh. " +
//       totalPrice;

//     document.getElementById("return2").innerHTML =
//       "Your new total price is Ksh " +
//       grandTotal +
//       ". Our delivery guy will be at your doorstep soon. Enter your details below.";
//   });

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
          grandTotal = grandTotal + order;
      

          yourTotal = yourTotal + total + 650 

          let newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

          let newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

          $("#pizza").append(newRow);


          $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
          $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
          $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
          $("#total").html(total);
    
      });
  });

  $('.btn.check-out').click(function () {
      document.getElementById('your-total').innerHTML = yourTotal;
  });

})


$(document).ready(function () {
  $("#blue").click(function () {
      alert('you have selected your toppings')


  })
})

$(document).ready(function () {
  ("#red").click(function () {
      alert("you have selected size of pizza")
  })

})

let sizeOfPizza=document.getElementById("text-1").value




$(".btn.complete").click(function() {
  var location = $(".additional-info .location input").val();
  $(".additional-info h4").show();
  $(".additional-info .location").hide();
  $(".additional-info h4 span").html(location);
});



$("#sub").click(function(){


})



$(document).ready(function(){
  $("deliv").click(function(){
    alert("Your delivery will be dispatched within 2hrs")
  })})

$(document).ready(function(){
  $("#sub").click(function(){
  
prompt("will you like to be delivered at an additional fee of 650")
prompt("type your location")
alert("your delivery will be dispatched within 2hrs...Thank you for shopping with us!!")
  
  })})



// $("#sub").click(function(){
//   hide()
// })

document.ready(function(){
  $("#delivered").click(function(){

    alert("your order has been received and you will be dispatched within 2hours")
  })
})





// untracked


// $(document).ready(function () {
//   $("#btn3").click(function () {
//     // Call user inputs
//     var pizzaSize = $("#size").val();
//     var pizzaCrust = $("#crust").val();
//     var pizzaTopping = $("#topping").val();
//     var orderNumber = $("#ordernumber").val();
//     // console.log(pizzaSize, pizzaCrust, pizzaTopping);

//     var totalPrice =
//       (parseInt(pizzaSize) + parseInt(pizzaCrust) + parseInt(pizzaTopping)) *
//       parseInt(orderNumber);
//     // console.log(totalPrice);

//     var deliveryFee = 300;

//     const grandTotal = totalPrice + deliveryFee;
//     console.log(grandTotal);

//     document.getElementById("return1").innerHTML =
//       "You have chosen " +
//       $("#size option:selected").text() +
//       " pizza, " +
//       $("#crust option:selected").text() +
//       " crust and " +
//       $("#topping option:selected").text() +
//       " topping. " +
//       " The total price is Ksh. " +
//       totalPrice;

//     document.getElementById("return2").innerHTML =
//       "Your new total price is Ksh " +
//       grandTotal +
//       ". Our delivery guy will be at your doorstep soon. Enter your details below.";
//   }); 


$(document).ready(function(){
$("#sub").click(function(){

prompt("will you like to be dlivered at an additional fee of 650")

})})