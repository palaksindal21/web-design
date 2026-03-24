function validate(){

    let n = document.fname.name.value
    let e = document.fname.email.value
    let br = document.fname.branch.value
    let num = document.fname.number.value

    if(n==""){

        alert("Enter name!!")
        return false

    }

    else if(e==""){

        alert("Enter email!!")
        return false
    }

    else if(br=="CSE" || br=="ME" || br=="CIVIL" || br=="ECE" || br=="AI" || br=="EE"){
        return true
        
    }
    else if(br!="CSE" || br!="ME" || br!="CIVIL" || br!="ECE" || br!="AI" || br!="EE"){
            alert("Enter branch name correctly!!")
            return false
    }

    else if(num==0){
        alert("Enter number!!")
        return false
    }


}