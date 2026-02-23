
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById select only one element by id. getElementsByClassName select many elements by class name and return HTML collection. querySelector select first matching element using CSS selector. querySelectorAll select all matching elements and returns Nodelist.

### 2. How do you create and insert a new element into the DOM?
Answer: To create new element we use document.createElement(). Then we insert it into DOM using appendChild() or apend() just like I did in this Assignment.

### 3. What is Event Bubbling? And how does it work?
Answer: Event bubbling means event starts from child element and then go up to parent, body, and document step by step. 

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event delegationmeans we put event listener on parent instread of many child elements. 

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() stop the default browser action like form submit of link open. stopPropagation() stop the event from going up to parent elements.

