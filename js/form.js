document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    console.log('Form submitted!');
    console.log('Name:', document.getElementById('name').value);
    console.log('Phone:', document.getElementById('phone').value);
    console.log('Email:', document.getElementById('email').value);
    console.log('Message:', document.getElementById('message').value);
    
    
    this.reset();
  });