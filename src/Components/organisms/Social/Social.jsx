import React from 'react'
import './social.css'

const Social = () => {
  return (
    <div className='social'>
        <a href='https://github.com/paosu95' className='home__social-icon' rel='noopener noreferrer' target='_blank'>
            <i class='uil uil-github-alt'></i>
        </a>

        <a href='https://www.linkedin.com/in/gina-suarez/' className='home__social-icon' rel='noopener noreferrer' target='_blank'>
            <i class='uil uil-linkedin-alt'></i>
        </a>
    </div>
  )
}

export default Social