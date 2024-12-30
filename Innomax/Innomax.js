document.getElementById('startup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form validation
    const startupName = document.getElementById('startup-name').value;
    const foundersName = document.getElementById('founders-name').value;
    const industryCategory = document.getElementById('industry-category').value;
    const description = document.getElementById('description').value;
    const attachments = document.getElementById('attachments').files.length;

    let errorMessage = '';
    if (!startupName || !foundersName || !industryCategory || !description || attachments === 0) {
        errorMessage = 'Please fill in all required fields and upload the attachments.';
    }

    if (errorMessage) {
        document.getElementById('form-message').innerHTML = `<p style="color: red;">${errorMessage}</p>`;
    } else {
       
        document.getElementById('form-message').innerHTML = '<p style="color: green;">Application submitted successfully!</p>';

        // Reset the form fields
        document.getElementById('startup-form').reset();
    }
});




document.getElementById('registerBtn').addEventListener('click', function() {
  
    document.getElementById('registrationForm').scrollIntoView({ behavior: 'smooth' });

  
    document.getElementById('registrationForm').style.display = 'block';
});

document.getElementById('registrationFormElement').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    
    if (name && email && phone) {
        // Display success message and hide the form
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('registrationForm').style.display = 'none'; 

        document.getElementById('registrationFormElement').reset();
    } else {
        alert("Please fill out all required fields.");
    }
});

document.getElementById('closeForm').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'none'; // Hide form
});


document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const amount = document.getElementById('amount').value;
    const email = document.getElementById('email').value;

   
    document.getElementById('payment-message').innerHTML = '';

 
    if (amount && email) {
       
        document.getElementById('payment-message').innerHTML = `
            <p style="color:green ; font-size: 16px; padding: 10px; background-color: #d4edda; border-radius: 5px;">
                Payment of $${amount} was successful. Thank you for your donation/registration!
            </p>
        `;

     
        document.getElementById('payment-form').reset();
    } else {
       
        document.getElementById('payment-message').innerHTML = `
            <p style="color: red; font-size: 16px; padding: 10px; background-color: #f8d7da; border-radius: 5px;">
               Payment Submited Successfully!!
            </p>
        `;
    }
});




