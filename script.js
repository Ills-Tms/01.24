const gomb = document.querySelector('#gomb')
const emailinput = document.querySelector('#email')
const result = gomb.addEventListener('click', function () {
  console.log(emailinput.value)
})

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
if (emailinput.value.match(mailformat)) {
}
console.log('aaaaaaaaa')
