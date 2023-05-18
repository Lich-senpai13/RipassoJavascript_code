let email = window.prompt("inserire la tua email");
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
       alert("L'indirizzo email che hai inserito e' valido")
    }
    else {
       alert("L'indirizzo email che hai inserito non e' valido");
    }