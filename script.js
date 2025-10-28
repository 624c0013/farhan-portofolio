// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Update active nav link based on current page
function updateActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
}

updateActiveNavLink()

// Contact Form Handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Create mailto link
    const mailtoLink = `mailto:624C0013@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`)}`

    window.location.href = mailtoLink

    // Reset form
    contactForm.reset()
  })
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})
