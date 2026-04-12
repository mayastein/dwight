if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['name'])
        && !empty($_POST['mail'])
        && !empty($_POST['msg'])
    ){
        $name = $_POST["name"];
        $email = $_POST["mail"];
        $phone = $_POST["phone"];
        $message = $_POST["msg"];
        $texts = $_POST["texts"];
        $emails = $_POST["emails"];
        $file = $_POST["filename"];


        $to = "mayastein03@gmail.com";
        $subject = "New Contact Form Submission";
        $body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}\nTXT:{$texts}\nMAIL:{$emails}\n{$file}";
        $headers = "From: {$email}";


        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    }
}