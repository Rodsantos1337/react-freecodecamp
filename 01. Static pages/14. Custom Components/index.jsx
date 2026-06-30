import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

function Page(){
    return(
        <ol>
            <li>
                React is a popular library, so I will be able to fit in any team
            </li>
            <li>
                I'm more likely to get a job as a Frontend developer
            </li>
        </ol>
    )
}


root.render(
    <Page/>
)

