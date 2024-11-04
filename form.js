const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const help = document.getElementById('help');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
        e.preventDefault();
        console.log("done");

        let ebody = `
        <h1> Name: </h1>${name.value}
        <br>
        <h1> Email: </h1>${email.value}
        <br>
        <h1> Phone: </h1>${phone.value}
        <br>
        <h1> Message: </h1>${help.value}

        `;

        //Email code here... 
        Email.send({
            SecureToken : "3bd563b7-0e69-4dd1-b97c-e439006fb4c4",
            To : 'thecodehousedev@gmail.com',
            From : "thecodehousedev@gmail.com",
            Subject : "This is the subject",
            Body : ebody
        }).then(
          message => alert(message)
        );


})
