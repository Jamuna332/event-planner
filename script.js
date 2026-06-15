<script>
document.querySelector(".booking-form button")
.addEventListener("click", function(e){

    e.preventDefault();

    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let phone = document.querySelectorAll('input[type="text"]')[1].value;

    if(name === "" || email === "" || phone === ""){
        alert("Please fill all required fields!");
    }
    else{
        alert("Booking Submitted Successfully!");
    }
});
</script>