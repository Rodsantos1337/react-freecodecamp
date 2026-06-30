1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?

Inside #root div

2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
"An object" note that this would be javascript inside the .jsx file so it logs a object, else gives an  error on raw terminal/browser console

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
We are missing a parent element, react needs a single parent element to render the component either a react fragment (<></>) or perhaps the "<StrictMode></StrictMode>" element, or even a div/main elements, 

4. What does it mean for something to be "declarative" instead of "imperative"?
It means we are declaring what we want to happen, then the underlying code handles the how, while imperative requires every single step laid out in code


5. What does it mean for something to be "composable"?

It means we can break it into multiple pieces and re-use them as we want, for instance break my implementation from exercise 12 down into seperate component files, exporting them and importing them into the main file instead of declaring the components in the file and also using them within the same file, this is great for mantainability so we can update the component once in a singular file and the change ripples across all component usage