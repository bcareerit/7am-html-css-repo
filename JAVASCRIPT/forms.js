function register(){
    let fname = document.forms["regForm"]["fname"].value;
    let arr1 = [];
    if(/^$/.test(fname)){
        arr1.push("can't left first name as empty !!!");
    }else if(! /^[A-Za-z0-9]{4,8}$/.test(fname)){
        arr1.push("please follow validation rules");
    }
    document.getElementById("fname_errors").innerHTML = arr1.join("");

    let lname = document.forms["regForm"]["lname"].value;
    let arr2 = [];
    if(/^$/.test(lname)){
        arr2.push("can't left last name as empty !!!");
    }else if(! /^[A-Za-z0-9]{4,8}$/.test(lname)){
        arr2.push("please follow validation rules");
    }
    document.getElementById("lname_errors").innerHTML = arr2.join("");

    let upwd = document.forms["regForm"]["upwd"].value;
    let arr3 = [];
    if(/^$/.test(upwd)){
        arr3.push("can't left password as empty !!!");
    }else if(!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,16}/.test(upwd)){
        arr3.push("please follow validation rules");
    }
    document.getElementById("upwd_errors").innerHTML = arr3.join("");


    let cupwd = document.forms["regForm"]["cupwd"].value;
    let arr4 = [];
    if(/^$/.test(cupwd)){
        arr4.push("can't left conf password as empty !!!");
    }else if(upwd != cupwd){
        arr4.push("password & confirm password must be same");
    }
    document.getElementById("cupwd_errors").innerHTML = arr4.join("");


    let uemail = document.forms["regForm"]["uemail"].value;
    let arr5 = [];
    if(/^$/.test(uemail)){
        arr5.push("can't left email as empty !!!");
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(uemail)){
        arr5.push("password & confirm password must be same");
    }
    document.getElementById("uemail_errors").innerHTML = arr5.join("");

    let ucontact = document.forms["regForm"]["ucontact"].value;
    let arr6 = [];
    if(/^$/.test(ucontact)){
        arr6.push("can't left ucontact as empty !!!");
    }else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(ucontact)){
        arr6.push("password & confirm password must be same");
    }
    document.getElementById("ucontact_errors").innerHTML = arr6.join("");

    return false;
}