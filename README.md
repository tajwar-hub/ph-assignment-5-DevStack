# 🚀 [THE DevStack]

> [ A simple React + TypeScript (ES6) + Tailwind project with moderately (Not Fully) responsive UI design and some little functionalities. ]

## 🛠️ Technologies Used

- **React.js** - For building the user interface
- **Tailwind.css** - For a responsive and beautiful modern UI look
- **TypeScript.ts** - For handling types during development
- **Daisy UI** - For readymade UI components and design
- **React-Toaster & React-Icons** - Additional features 

## ✨ Key Features

1. **Items Add:** Adding the technology stack required
2. **Items Remove:** Removing a technology if not needed
3. **All Items Remove:** Removing All if wants to re-arrange the stack

---

## 🧠 React Concepts Explored

As part of building this project, here are some core React concepts I applied:

**What is JSX, and why is it used in React?**
JSX stands for JavaScript XML. It is a syntax extension that allows us to write HTML elements directly with JavaScript code. It makes more sense while development by combining UI structure with programming logic.

**What is the difference between props and state?**
`props` (properties) are like variables passed down from a parent component to a child component. Similar to a function parameter, we can say it but not the same thing. `state` is like a function inside a component that can change according to the users interaction and triggers the component to re-render the UI.

**What does the `useState` hook do and where did you use it in this project?**
`useState` allows functional components to store and update local data between renders. It consists of or returns a setter function and a start state or value which is given as its parameter 
*In this project, I used it to Add, Remove technologies in the handler functions of the parent component Technologies.tsx file which were passed to its child components TechnologyCard.tsx and SideBarCard.tsx as props. Then they used it to manage their individual functionalities*

**What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` handles "side effects"—operations that reach outside the component, like fetching data or setting timers. I didn't use any `useEffect` hook in my project.

**Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to keep track of exactly which items in a list have changed, been added or been removed. Without unique keys, React would have to re-render the entire list from scratch during an update, which is slow and risky for a large project.

**What is conditional rendering? Show one place you used it.**
Conditional rendering means displaying different UI elements based on a specific condition similar to a standard `if/else` statement. 
*In this project, I used it to show different look of the techstack card in the SideBarCard.tsx based on if any technology is added or not. I also used it to show different text at the buttons of the technology cards in the TechnologyCard.tsx file based on if the button is clicked or not. In other words, the technology is selected or not.*

**How do you pass data from a parent component to a child component and how does a child send something back to the parent?**
- **Parent to Child:** Data is passed down through `props`.
- **Child to Parent:** As per my knowledge, react is a uni-directional system where a child cannot actually send something to a parent. It can pass arguements in the funtion or props sent by a parent to call or use them. Which we can indirectly say passing that arguement data to the parent class as it is written or initiated in it.
