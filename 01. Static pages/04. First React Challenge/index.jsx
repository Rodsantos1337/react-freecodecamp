/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */

import createRoot from "react"
import './index.css'

createRoot(document.getElementById('root')).render(
    <ul>
        <li>
          Component-based architecture promotes maintainable code
        </li>
        <li>
          Declarative rendering simplifies building dynamic user interfaces
        </li>
        <li>
          React's ecosystem gives me tools to build real-world applications
        </li>
    </ul>
)