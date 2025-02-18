<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title><?php wp_title('|', true, 'right'); bloginfo(''); ?></title>
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap">
    
	<!-- Link to Custom Stylesheet -->
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

	
<!-- Header with Hamburger Menu -->
  <header>
    <div class="menu-icon" id="menu-icon">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
  </header>

  <!-- Navigation Menu -->
  <nav class="nav-menu" id="nav-menu">
    <ul>
      <li><a href="<?php echo site_url('/about'); ?>">About</a></li>
      <li><a href="<?php echo site_url('/contact'); ?>">Contact</a></li>
    </ul>
  </nav>

	<main>
<!-- Section 1: Introduction -->
<section class="section introduction">
    <div id="static-text">
        <p>Hi!</p>
        <p>I am Crissy</p>
        <p>> <span id="dynamic-text"></span></p>
    </div>
    <div class="profile-container">
        <img src="https://www.cridden.com/wp-content/uploads/2024/06/Crissy-professional-photo-black-and-white.jpeg" alt="Headshot" class="profile-pic">
    </div>
</section>

<!-- Section 2: About -->
<section class="section about">
    <h2>About Me</h2>
    <p>Hello! I’m Crissy, a passionate web developer and marketing expert with years of experience in crafting meaningful user experiences.</p>
</section>

  <!-- Section 3: Portfolio -->
    <section class="portfolio">
        <h2>My Portfolio</h2>
        <div class="projects">
            <div class="project">
                <h3>Project 1</h3>
                <p>A responsive e-commerce website built with WordPress and custom code.</p>
            </div>
            <div class="project">
                <h3>Project 2</h3>
                <p>A data-driven marketing campaign that increased conversions by 25%.</p>
            </div>
            <div class="project">
                <h3>Project 3</h3>
                <p>A portfolio website showcasing modern design techniques.</p>
            </div>
        </div>
    </section>

<!-- Section 4: Contact -->
<section class="section contact">
    <h2>Contact Me</h2>
    <form action="#" method="post">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Your Email" required>
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
    </form>
</section>
	
</main>

  <!-- Main Content 
  <main>
    <section id="about">
      <h1>About Me</h1>
      <p>Hello! I’m Crissy, a passionate web developer and marketing expert.</p>
    </section>

    <section id="cv">
      <h1>My CV</h1>
      <p>Here is my professional experience and qualifications.</p>
    </section>
  </main> -->
	
	
<script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>

<?php get_footer(); ?>
</body>
</html>
