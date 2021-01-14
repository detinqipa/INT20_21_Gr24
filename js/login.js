const form=document.getElementById('form');

const email=document.getElementById('email');
const password=document.getElementById('password');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
   
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
   
   

   
    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');

    }
    else{
        setSuccessFor(email);

    }
    
    if (passwordValue === ''){
        setErrorFor(password, 'password cannot be blank');

    }
    else{
        setSuccessFor(password);
    }
    if(emailValue !== ''&&passwordValue !== ''){
        open('../html/homepage.html');
    }
    
}

function setErrorFor(input, message){
    const formControl=input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText=message;
    formControl.className='form-control error';
}
function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}