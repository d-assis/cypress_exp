// tentei exportar parte do conteúdo deste arquivo para endpoints, porém, UID não estava assumindo o valor esperado, no caso, um número

function hash(){return Number.parseInt(Math.random() * 1000000)}

//exports.UID = function(){return Number.toString(hash())}
//export const UID = hash()

console.log(hash())

/*
export let userForm = {
    "firstName": "generic",
    "lastName": "user",
    "username": `genUser${UID}`,
    "password": "s3cret",
    "confirmPassword": "s3cret"
}
*/

