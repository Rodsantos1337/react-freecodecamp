1. What is a React component?
A React component is a function that returns JSX elements, it can be exported/imported and re-used, it allows composability, reusability and declarative UI, it can accept props as arguments

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
The component's function name is starting with a lower case, not respecting the CamelCase convention, which will lead React to treat "myComponent" as string when passing it to "React.createElement" which then returns null instead of the component content and renders nothing

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
We are trying to render "Header()" as a function, but in React we need to render it as a jsx element such as "<Header/>" instead of as a function like shown