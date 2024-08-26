import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // To add state in component, do the 3 steps
  /*
    1. Add a state variable
    2. Use the code in a JSX
    3. Update the piece of state in some handler
  */
  const [step, setStep] = useState(1); // useState called **HOOKS** in React. useState can only be used at the **TOP LEVEL** of the component. Not inside the functions, if-else statements.
  // ONLY update the state **using "setter function (i.e. setStep)"**
  // const [test, setTest] = useState({ name: "Jonas" });

  const [isOpen, setIsOpen] = useState(true);

  // Function inside the component
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1); //safe for later updates
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1); //safe for later updates
      //setStep((s) => s + 1);
    }
    // BAD PRACTICE - mutating objects
    // test.name = "Fred";

    // setTest({ name: "Fred" });
  }

  return (
    // use <div></div> to start JSX
    // <> "React Fragment" when you want to use more than one element
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/*
NOTES:
  -From JS, we use addEventListener - it is an Imperative way by accessing the DOM tree.
  - In REACT, we will use the "declarative way", we will use HTML inline event listener. We will listen directly in the element where it will happen.

STATE
  - the **most** important concept in React

  1. WHAT is sate and why we need it?
    STATE
      👉 Data that a component **can hold over time,** necessary for information that it needs to **remember** throughout the app's lifecycle
      👉 **COMPONENTS MEMORY** 🧠
      - Exampeles : Notifications, text content of input field, or active tab, content of the shopping cart
      - most common is that they are affected by the activity of the users
      👉 **State variable" / "pieace of state": A single variable in a component (component state)
      👉 Updating **component state** triggers React to **re-render the component**
        - Component View - is a component rendered in the UI

    ALLOWS DEVELOPERS TO:
    1. Update the component's view (by re-rendering it)
    2. Persist local variables between renders

    👋 State is a **tool**. Mastering state will unlock the power of React development.
    - Always treat state immutable.

    THE MECHANICS OF STATE IN REACT
      - We don't do direct DOM manipulations
        - How is a component view updated then?
          - In React, a view is updated by re-rendering the component
            - A component is re-rendered when its state is updated (Event Handler -> Update State -> Re-render 🔁)
              - So to update a view, we update state
    
    💡 REACT **reacts** to state changes by re-rendering the UI
  
  2. How to use state in **practice**?
    👉 useState
    👉 useReducer
    👉 Context API

  3. **Thinking** about state
    👉 When to use state
    👉 Where to place state
    👉 Types of state

UPDATING STATE BASED ON CURRENT STATE
  Ex: (this will not work by repeating twice)
    ❌
    function handleNext() {
    if (step < 3) {
      setStep(step + 1);
      //setStep(step + 1);
    }
    
    ✅ - safe for later updates
    - We should use "callback function"
    function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1); //callback function
      //setStep((s) => s + 1);
    }

MORE THOUGHTS ABOUT STATE + STATE GUIDELINES

  ONE COMPONENT, ONE **STATE**
    👋 Each component has and manages **its own state**, no matter how many times we render the same component
  
  UI AS A **FUNCTION** OF STATE
    Declarative, Revisited
    👉 With state, we view UI as a **reflection of data changing over time**
    👉 We **describe that reflection** of data using sate, event handlers, and JSX

  🎯 IN **PRACTICAL** TERMS...
    PRACTICAL GUIDELINES ABOUT STATE
      👉 Use a state variable for any data that the component should keep track of ("remember") over time. **This is data that will change at some point.** In Vanilla JS, that's a let variable, or an [] or {}

      👉 Whenever you want something in the component to be **dynamic**, create a piece of state related to that "thing", and update the state when the "thing" should change (aka "be dynamic")

        👉 Ex: A modal window can be open or closed. So we create a state variable isOpen that tracks whether the modal is open or not. On isOpen = true we display the window, on isOpen = false we hide it.

      👉 If you want to change the way a component looks, or the data it displays, **update its state.** This usually happens in an **event handler** function.

      👉 When building a component, imagine its view as a **reflection of state changing over time**

      👉 For data that shouldnot trigger component re-renders, **don't use state.** Use a regular variable instead. This is a common **beginner mistake**.
*/
