let username = document.getElementById('username')
let password = document.getElementById('password')
let registerBtn = document.getElementById('submit')
let loginBtn = document.getElementById('log-in')
const registerForm = document.getElementById('registerForm')

registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    const payload = new FormData(registerForm)

    console.log([...payload])

    fetch('https://testapi.io/api/Andrius/resource/Register', {
        method: "POST",
        body: payload
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})
loginBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log('sveiki')
    fetch('https://testapi.io/api/Andrius/resource/Register', {
        method: "GET",
    })
    .then((response) => response.json())
    .then((login) => {
        // console.log(username.value)
        // console.log(password.value)
        // console.log(login.data)
        const newLogin = login.data.filter((user) => {
            // console.log(user)
            if(user.username === username.value && user.password === password.value){
                // console.log(user)
                return user
            }
            localStorage.setItem('identification', username.value)
            return
            
        })
        console.log(newLogin)
        if (newLogin.length > 0){
            alert('prisijungete')
        }
        
        
    })
})

