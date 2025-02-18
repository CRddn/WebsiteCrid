<?php
/* Template Name: Contact Page */
get_header(); // Includes the header.php file
?>
<main>
  <section class="contact">
    <h1>Contact Me</h1>
    <p>If you'd like to reach out, feel free to send me a message!</p>
    <form action="#" method="post" class="contact-form">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
</main>
<?php
get_footer(); // Includes the footer.php file
?>

<style>
/* Contact Page */
.contact {
  padding: 50px;
  text-align: center;
  min-height: 100vh;
  background-color: #f2f2f2;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.contact-form button {
  background-color: #f54291;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #e1347b;
}

</style>