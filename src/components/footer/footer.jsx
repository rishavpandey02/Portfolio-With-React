import React from 'react'
import './footer.css'
import footerIcon from '../../assets/githubIcon.png'

export const footer = () => {
  return (
    <footer class="footer">
        Thank you for viewing my portfolio. For more information on my work, please view my github page via the logo:
        <a href="https://github.com/rishavpandey02">
        <img src={footerIcon} alt="footer icon" class="footerImg" />
        </a>
    </footer>
  )
}

export default footer