
function submitHandler(event)
{

    event.preventDefault();

    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var city = document.getElementById("city");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");

    var output = document.getElementById("output");
    var output2 = document.getElementById("output2");
    var output3 = document.getElementById("output3");
    var output4 = document.getElementById("output4");
    var output5 = document.getElementById("output5");

    if(name.value == "")
    {
        output.innerHTML = "Name is required*"
        output.style.color = "red"
    }
    else if(name.value.length < 4)
    {
        output.innerHTML = "Name must be at least 4 char.."
        output.style.color = "red"
    }
    else
    {
        output.innerHTML = name.value 
        output.style.color = "green"
    }

    if(age.value=="")
    {
        output2.innerHTML = "age is required!"
        output2.style.color = "red"
    }

    else
    {
        output2.innerHTML = age.value 
        output2.style.color = "green"
    }

    if(city.value == "")
    {
        output3.innerHTML = "city name is required!!"
        output3.style.color = "red"
    }
    else
    {
        output3.innerHTML = city.value 
        output3.style.color = "green"
    }

    if(phone.value == "")
    {
            output4.innerHTML ="phone number is required!!"
            output4.style.color = "red"
    }
    else
    {
            output4.innerHTML = phone.value 
            output4.style.color = "green"
    }

    if(email.value == "")
    {
            output5.innerHTML = "Email is required!!"
            output5.style.color = "red"
    }
    else
    {
            output5.innerHTML = email.value 
            output5.style.color = "green"
    }
    
   
     alert("Form submitted...")
    // console.log("Form submitted...");
    
}
