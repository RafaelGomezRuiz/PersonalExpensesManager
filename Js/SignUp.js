const btnValidateEmail=document.getElementById('validate-email');
const btnCreateACount=document.getElementById('create-acount');
const email=document.getElementById('email-register');
const password=document.getElementById('password');
const userName=document.getElementById('user-name');

const emailEmpty=()=>{
    const emailValue=email.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
       alert("Direccion de correo invalida. Ejemplo: 'Admin@gmail.com'")
       return false;
    }
    return true;
}

const btnValidateFields=document.getElementById('btn-validate-fields');

btnValidateFields.addEventListener('click',(e)=>{
    e.preventDefault();
    if (emailEmpty()) {
        ValidatePassword();
    }
});

const ValidatePassword=()=>{
    const valuePassword=password.value;
    const confirmPassword=document.getElementById('confirm-password').value;
    if(valuePassword===confirmPassword){
        validateCode();
        return true;
    }
    alert("The passwords don't do match");
    return false;
}

const validateCode=()=>{
    document.getElementById('digits-content').innerHTML=`
    <label>Te enviaremos un codigo de verificacion al correo</label>
    <div class="register-data">
    <input id="access-code" type="text" placeholder="Enter the code">
    </div>
    <button id="create-acount" class="btn">Create Acount</button>`;
}

// btnCreateACount.addEventListener('click',)

// const CreateDiv=(text)=>{
//     const formSignUp=document.getElementById('form-SignUp');
//     const div=document.createElement('div');
//     div.classList.add('register-data');

//     const input=document.createElement('input');
//     input.type="text";
//     input.placeholder=`Ingrese su ${text}`;
//     input.id=text;
//     div.appendChild(input);
//     const button=document.createElement('button');
//     button.id=text;
//     button.innerText="Continue";
//     div.appendChild(button);
//     formSignUp.appendChild(div)
// }


