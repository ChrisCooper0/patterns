// https://www.patterns.dev/posts/singleton-pattern/

/* 
Singletons are classes which can be instantiated one, and can be accessed globally. This single instance can be shared throughout the application, which makes Singletons great for managing global state in an application.

Below is an example of an ES2015 (ES6) class that has :
- a getInstance method that returns the value of the instance
- a getCount method that returns the current value of the counter variable
- an increment method that increments the value of counter by one
- a decrement method that decrements the value of counter by one

Object.freeze method makes sure that consuming code cannot modify the Singleton

*/

let instance;
let counter: number = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance of this class");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return counter++;
  }
  decrement() {
    return counter--;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;

/*
If we now import Counter in two or more files and invoke the increment method in either file, the value of counter updates in both files.
It doesn't matter what file the method is invoked, the same value is shared among all instances.
*/

/*
(Dis)advantages:
The above is actually overkill and considered an anti-pattern in JavaScript.
We could simply use a regular object to achieve the same result as shown below.
*/

let count2 = 0;

const counter2 = {
  increment() {
    return count2++;
  },
  decrement() {
    return count2++;
  },
};

Object.freeze(counter2);
export { counter2 };

/*
In React, we have global state management through tools such as Redux or React Context instead of using Singletons. Although their behaviour may seem similar to that of a Singleton, these tools provide a read-only state rather than the mutable state of the Singleton. When using Redux, only pure function reducers can update the sate, after a component has sent an action through a dispatcher.
Although the downsides to having a global state don't dissapear by using these tools, we can at least make sure that the global state is mutated the way we intend it, since components cannot update the state directly.
*/
