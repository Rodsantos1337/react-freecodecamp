1. What do props help us accomplish?
Mine: Props help us flow data into a component and use it inside the component, turning a component from having hard coded content to be a dynamic shell that accepts and uses props on their slots

Course: Make the component more reuseable. 

2. How do you pass a prop into a component?
Mine: To pass a prop into a component we define the props in the component then pass it down, props is like a HTML attribute that we can use as a javascript variable within the component that got the prop passed to them

Course: In the same way you pass attributes to a HTML element like an img's src, we can pass props to a component

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   
Mine: Html allows us to use these random attributes, but they result in nothing, unless we hook them up with javascript they will be in the HTML but not change anything about the render

Course: No, because the JSX we use to describe native DOM elements will be turned into REAL DOM elements by React. And real DOM elements only have the properties/attributes specified in HTML specification.

4. How do I receive props in a component?
function Navbar(props) {
    return (
        <header>
            props.receivedProps
        </header>
    )
}



5. What data type is `props` when the component receives it?

Mine: It is a Javascript object, each property of this object maps to a existing prop we passed down,

