// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrollProgress = (scrollTop / scrollHeight) * 100
  document.getElementById("progress-bar").style.width = scrollProgress + "%"
})

// Smooth Scrolling Function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

// Add click event listeners to navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    scrollToSection(targetId)
  })
})

// Carousel Functionality
let currentSlide = 0
const slides = document.querySelectorAll(".carousel-slide")
const indicators = document.querySelectorAll(".indicator")
const totalSlides = slides.length

function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => slide.classList.remove("active"))
  indicators.forEach((indicator) => indicator.classList.remove("active"))

  // Show current slide
  slides[index].classList.add("active")
  indicators[index].classList.add("active")
}

function goToSlide(index) {
  currentSlide = index
  showSlide(currentSlide)
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides
  showSlide(currentSlide)
}

// Auto-rotate carousel every 4 seconds
setInterval(nextSlide, 4000)

// Contact Form Handling
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Here you would integrate with EmailJS or your preferred email service
  // For now, we'll show a simple alert

  try {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`)
    contactForm.reset()
  } catch (error) {
    alert("Sorry, there was an error sending your message. Please try again.")
  }
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".skill-category, .project-card, .keyword-card").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Add active class to navigation links based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active")
    }
  })
})

// Add hover effects to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)"
  })
})

// Add click handlers for project buttons
document.querySelectorAll(".project-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Here you would open the actual project links
    alert("This would open the project repository or live demo!")
  })
})

// Add click handlers for certificate buttons
document.querySelectorAll(".btn-success").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Here you would open the actual certificate links
    alert("This would open the certificate!")
  })
})

// Typing effect for hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const subtitle = document.querySelector(".hero-subtitle")
  if (subtitle) {
    const originalText = subtitle.textContent
    typeWriter(subtitle, originalText, 100)
  }
})

// Add smooth reveal animation for sections
const revealElements = document.querySelectorAll(".section-header, .about-content, .contact-content")

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed")
      }
    })
  },
  { threshold: 0.15 },
)

revealElements.forEach((el) => {
  revealObserver.observe(el)
})

// Add CSS for reveal animation
const style = document.createElement("style")
style.textContent = `
    .section-header, .about-content, .contact-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .section-header.revealed, .about-content.revealed, .contact-content.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-link.active {
        color: #3b82f6;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`
document.head.appendChild(style)
