import React from 'react'

function HowTo() {
  return (
    <div className='howto'>
        Instructions    
        <ul>
          <li>First select an astronaut then,</li>
            <li>Use W key to move the astronaut up.</li>
            <li>Use S key to move the astronaut  down.</li>
            <li>Use A key to move the astronaut left.</li>
            <li>Use D key to move the astronaut right.</li>
        </ul>
        Made by <a style={{textDecoration:'none',color:'inherit'}} href="https://www.linkedin.com/in/nagendralamoria/">@nagendra</a>
    </div>
  )
}

export default HowTo