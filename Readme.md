1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 
a. getElementById - It selects the element from DOM by its unique id.It returns single element and  gives "null" if not found the id.

b. getElementsByClassName - It selects the all element with same class. It returns HTML Collection .

c. querySelector - It selects the first element of CSS Selector(class,id). It returns also a single element and null value.

d. querySelectorAll - It selects the all element of specific CSS Selector(class,id). It returns a nodelist.

2.How do you create and insert a new element into the DOM?
Answer: 

First, we create element (document.createElement('ul'))
second, we add attributes(ul.innerText)
third, we append the child into parentnode (document.getElementById().appendChild())

3.What is Event Bubbling and how does it work?
Answer: 
Event Bubling is a process in the DOM where an event occurs in the child element first, then its parent and then its grandparent and so on.
When we click on a target element, the element runs first then moves upward to its parent element and triggers any matching element. It goes on unless we stop it with event.stopPropagation()

 
4.What is Event Delegation in JavaScript? Why is it useful?
Answer: 
Event Delegation is a process where we add an event listener to parent element and use it to catch and handle events from the children.
It is useful because it takes less time and provides better performance.It also works when one more element being inputed.

5.What is the difference between preventDefault() and stopPropagation() methods?
Answer: 
PreventDefault() stops the default behaviour of a feature and PreventDefault() does not stop bubbling event (for example- form tag submit button reload stoppage). The stopPropagation() stops the bubbling up of the DOM Tree.