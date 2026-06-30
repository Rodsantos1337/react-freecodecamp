/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import {StrictMode} from "react"
import {createRoot} from "react-dom/client"

const reactLogo = './react-logo.png'

function Header (){
  return(
    <nav className="nav">
      <img className="nav_logo" src={reactLogo} alt="" />
      <p>ReactFacts</p>
    </nav>
  )
}

function List (){
  return(
    <div className="list_wrap">
      
      <h1>Fun facts about React</h1>
      <ul>
        <li>
          Was first released in 2013
        </li>
        <li>
          Was originally created by Jordan Walke
        </li>
        <li>
          Has well over 100k stars on GitHub
        </li>
        <li>
          Is mantained by Meta
        </li>
        <li>
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
      <img className="bg_logo" src={reactLogo} alt="React Logo" />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <main>
    <Header/>
    <List/>
  </main>
  </StrictMode>
)

