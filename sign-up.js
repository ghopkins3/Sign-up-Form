
const passwordForm = document.getElementById("password");
const confirmForm = document.getElementById("confirm");
const passwordMatchTag = document.getElementById("password-match");
const phoneForm = document.getElementById("phone");

passwordForm.onkeyup = () => {
    let userPassword = passwordForm.value;
    if(userPassword === "") {
        passwordMatchTag.textContent = "";
    }
}

confirmForm.onkeyup = () => {
    let userPassword = passwordForm.value;
    let userConfirm = confirmForm.value;
    if(userPassword !== userConfirm) {
        passwordMatchTag.textContent = "* Passwords do not match";
    } else if(userPassword === userConfirm) {
        passwordMatchTag.textContent = "";
    }
}

phoneForm.onkeydown = () => {
    let userPhoneNumber = phoneForm.value;

    if(userPhoneNumber.length === 4 && userPhoneNumber.charAt(3) !== "-") {
        let userPhone2 = userPhoneNumber.substring(0, 3) + "-" + userPhoneNumber.charAt(3);
        userPhoneNumber = userPhone2;
        phoneForm.value = userPhoneNumber;
        console.log(userPhoneNumber);
    }

    if(userPhoneNumber.length === 8 && userPhoneNumber.charAt(7) !== "-") {
        userPhone2 = userPhoneNumber.substring(0, 7) + "-" + userPhoneNumber.charAt(7);
        userPhoneNumber = userPhone2;
        phoneForm.value = userPhoneNumber;
        console.log(userPhoneNumber);
    }
}