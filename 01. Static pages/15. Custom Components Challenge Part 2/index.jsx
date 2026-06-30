import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

function Header (){
    return(
    <header className="header-wrap">
        <img className="logo" src="./react-logo.png" alt="" />
        <nav>
            <ul className="nav-list">
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

function Page() {
    return (
        <ol>
            <li>React is a popular library, so I will be able to
            fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer
            if I know React</li>
        </ol>
    )
}

function Footer (){
    return(
        <footer>
            <small>© 2026 Rodrigo development. All rights reserved.</small>
        </footer>
    )
}

root.render(
    <>
    <Header/>
    <Page />
    </>
)
