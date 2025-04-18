function change() {
  document.getElementById("div").style.fontFamily = "tahoma";
}

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.2,
  rootMargin: "50px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      if (entry.target.classList.contains("progress-bar")) {
        entry.target.querySelector(".progress").style.width = entry.target
          .querySelector(".progress")
          .getAttribute("data-width");
      }
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener("DOMContentLoaded", () => {
  // Scroll to top on page load
  window.scrollTo(0, 0);

  // If there's a hash in the URL, remove it
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }

  // Observe skill cards
  document.querySelectorAll(".skill-card").forEach((card) => {
    observer.observe(card);
  });

  // Observe progress bars
  document.querySelectorAll(".progress-bar").forEach((bar) => {
    observer.observe(bar);
  });

  // Observe contact section elements
  document.querySelectorAll(".contact-animate").forEach((element) => {
    observer.observe(element);
  });

  // Observe elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  // Typing effect for dynamic text
  const phrases = [
    "Modern Websites",
    "User Experiences",
    "Creative Solutions",
    "Digital Products",
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeText() {
    const currentPhrase = phrases[phraseIndex];
    const dynamicText = document.getElementById("dynamic-text");

    if (!dynamicText) return;

    if (isDeleting) {
      dynamicText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      dynamicText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 50;
      setTimeout(typeText, 1500);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 100;
    }

    setTimeout(typeText, typingSpeed);
  }

  // Start typing effect
  typeText();

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Close mobile menu if open
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          hamburger.classList.remove("active");
        }
      }
    });
  });

  // Contact Form Handling
  document
    .getElementById("contact-form")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Here you would typically send this data to a server
      console.log("Form submitted:", { name, email, message });

      // Show success message (you can customize this)
      alert("Thank you for your message! I will get back to you soon.");

      // Reset form
      this.reset();
    });

  // Add custom project filtering (if you add this feature)
  const filterProjects = (category) => {
    const projects = document.querySelectorAll(".project-card");
    projects.forEach((project) => {
      const projectCategory = project.dataset.category;
      if (category === "all" || projectCategory === category) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  };
});
