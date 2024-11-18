document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const coffeeType = document.getElementById('coffeeType').value;
    const size = document.getElementById('size').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

   
    const message = `<strong>Merci ${name} !</strong><br>Votre commande :<br>
                     Type de café : ${coffeeType}<br>
                     Taille : ${size}<br>
                     Numéro de téléphone : ${phone}<br><br><i>Votre commande a été reçue.</i>`;

    const confirmationDiv = document.getElementById('confirmationMessage');
    confirmationDiv.innerHTML = message;
    confirmationDiv.style.display = 'block';
});