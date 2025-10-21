// Example vulnerable code
var userInput = "<script>alert('XSS attack! found');</script>";
document.write(userInput);
