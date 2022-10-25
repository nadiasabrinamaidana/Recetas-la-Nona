
window.addEventListener ('load' , ()=>{
    const form= document.querySelector('#formulario')
    const usuario= document.getElementById('usuario')
    const email= document.getElementById('email')
    const pass= document.getElementById('pass')
    const passConfirma= document.getElementById('passConfirma')
    
    //PREVENIMOS EL COMPORTAMIENTO POR DEFECTO QUE REALIZA LA PAGINA
    form.addEventListener('submit' , (e) => {
    e.preventDefault()
    validaCampos()
          })
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        const usuarioValor = usuario.value.trim()
        const emailValor = usuario.value.trim()
        const passValor = usuario.value.trim()
        const passConfirmaValor = usuario.value.trim()  }
    
        //validando campo usuario
        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
    if(!usuarioValor) {
    console.log('CAMPO VACIO')
    validaFalla(usuario, 'Campo vacio')
    
    } else {
        validaOk(usuario)
    
        //validando campo email
        if(!emailValor){
            validaFalla(email, 'campo vacio')
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es valido')
            }else {
                   validaOk(email)
     }
     }
     //validando campo password
     const er = /^(?=.*\d) (?=.*[a-z]) (?=.*[A-Z]). {6,18}$/
     if(!passValor) {
        validaFalla(pass, 'campo vacio')
        } else if (passValor.length < 8){
            validaOk(pass, 'Debe tener 8 caracteres como minimo.')
     } else if(!passValor.match(er)) {
        validaFalla(pass, 'Debe tener al menos una may., una min. y un num.')
    } else {
        validaOk(pass)
    }
    
    //validando campo password Confirmacion
    if(!passConfirmaValor){
        validaFalla(passConfirma, 'Confirme su password')
    } else if(passValor !== passConfirmaValor) {
        validaFalla(passConfirma, 'La password no coincide')
    } else {
        validaOk (passConfirma)
    }
    
    const validaFalla =(input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje
    
    formControl.className = 'form-control falla'
     }
    
     const validaOk =(input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
     }
    
     const validaEmail = (email) => {
        return value
     }
      })

    let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))

const mostrarData =(data)=> {
    console.log(data)


let div = ''
for (let i = 0; i<data.length; i++){
    div += `<div>${data[i].name}</div>`
}
document.getElementById('data').innerHTML = div
}