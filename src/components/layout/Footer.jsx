import React from 'react'


const Footer = () => {
    const footerDate = new Date().getFullYear()
  return (
    <footer className='footer bg-gray-700 p-10 text-primary-content footer-center'>
        <p>Copyrights are reserved for Brad Traversy &copy; {footerDate}</p>
    </footer>
  )
}

export default Footer
