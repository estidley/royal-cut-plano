const menuBtn = document.querySelector('.menu-btn')
const mobileNav = document.querySelector('#mobile-nav')

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') === 'true'
    menuBtn.setAttribute('aria-expanded', String(!open))
    mobileNav.hidden = open
  })

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuBtn.setAttribute('aria-expanded', 'false')
      mobileNav.hidden = true
    })
  })
}

const origin = window.location.origin
if (origin && !origin.includes('localhost')) {
  const ld = document.querySelector('script[type="application/ld+json"]')
  if (ld) {
    try {
      const data = JSON.parse(ld.textContent || '{}')
      data.url = origin
      ld.textContent = JSON.stringify(data)
    } catch {
      /* ignore */
    }
  }
}
