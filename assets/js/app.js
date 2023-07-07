var taxRate = 0.05;
var fadeTime = 300;

// verified button 
function varifiedMember() {
    var verified = document.getElementById("verified");
    if (isMember === true) {
        verified.disply = "none";
    }
    else {
        verified.disply = "block";
    }
}

// session storage for displaing class 
function classDetails() {
    if (sessionStorage.setItem) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
      sessionStorage.clickcount = 1;
      }
    document.getElementById("demo").innerHTML = sessionStorage.clickcount;
  }
// cart 
/* Assign actions */
$('.remove-btn').click(function () {
    removeItem(this);
});

/* Recalculate cart */
function recalculateCart() {
    var subtotal = 0;

    // Calculate total 
    document.getElementById
    var subtotal = classLength * 0.75;
    $('#subtotal').html(subtotal.toFixed(2));
    // document.getElementById("subtotal").innerHTML = subtotal.toFixed(2);

    //Calculate tax
    var tax = subtotal * taxRate;
    $('#tax').html(tax.toFixed(2));

    // Calculate total 
    var total = tax + subtotal;
    $('#total').html(total.toFixed(2));
}
/* Remove item from cart */
function removeItem(removeButton) {
    /* Remove row from DOM and recalc cart total */
    var scheduleInCart = $(removeButton);
    scheduleInCart.slideUp(fadeTime, function () {
        scheduleInCart.remove();
        recalculateCart();
    });
}