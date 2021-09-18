

window.onload = () => {
    const schoolEmail = document.getElementById("school_email");
    const schoolPass = document.getElementById("school_password");
    const receiverEmail = document.getElementById("receive_email");
    const receiverPhone = document.getElementById("receive_phone");
    const emailPass = document.getElementById("email_password");
    const submitBtn = document.getElementById("submit_btn");

   

    submitBtn.onclick = async () => {
        let schoolEmailText = schoolEmail.value;
        let schoolPassText = schoolPass.value;
        let receiverEmailText = receiverEmail.value;
        let receiverPhoneText = receiverPhone.value;
        let emailPassText = emailPass.value;

        if(receiverEmailText.length <= 0) {
            receiverEmailText = schoolEmailText;
        }

        let userInfo = {
            school_email: schoolEmailText,
            school_pass: schoolPassText,
            receiver_email: receiverEmailText,
            receiver_phone: receiverPhoneText,
            email_pass: emailPassText
        }      
        
        let keys = Object.keys(userInfo);
        let leave = false;

        for (var i = 0; i < keys.length; i++) {
            let item = userInfo[keys[i]];
            if (item === undefined || item === "") {
                switch(keys[i]) {
                    case "school_email":
                        // missing school email
                        console.log("missing school email");
                        leave = true;
                        break;
                    case "school_pass":
                        // missing school password
                        console.log("missing school password");
                        leave = true;
                        break;
                    case "email_pass":
                        // missing email password
                        console.log("missing email password");
                        leave = true;
                        break;
                    default:
                        break
                }

                if(leave) {
                    break;
                }
            }
        }

        console.log(userInfo);
        // await fetch(`http://localhost:3000/saveInfo?info=${JSON.stringify(userInfo)}`);

    }
}