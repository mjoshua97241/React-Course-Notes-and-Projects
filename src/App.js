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

  // Function inside the component
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
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
*/
