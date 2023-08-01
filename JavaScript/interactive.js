function validating()
{
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const dob = document.getElementById("dob");
    const phnumber = document.getElementById("phnumber");
    const nameRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])$/;
    let flag = 0;
    if (phnumber != 10)
    {
        flag = 1;
    }
    
    if(nameRegex.test(name)){
        flag = 0;
    }
    else{
        flag = 1;
    }

    if(emailRegex.test(email)){
        flag = 0;
    }
    else{
        flag = 1;
    }

    if(dateRegex.test(dob)){
        flag = 0;
    }
    else{
        flag = 1;
    }

    if(flag == 0){
        alert("Thank you");
    }
    else{
        alert("Recheck the Details");
    }
}