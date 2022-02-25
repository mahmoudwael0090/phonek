
function getValue(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    swal(user+"مرحبا بك يا  " , "اصبحت الان تمتلك حساب في موقع تلفونك", "success", {button: "تمام"});
    if (length > 8) {
        swal("يجب ان لا يكون اسمك او الباسورد اكبر 20 كلمة" , "عندك مشكله" , "warning")
    }
}

sub.addEventListener("click", (eo) => {
    sf99.style.display = "block"
})

