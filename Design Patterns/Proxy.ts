// https://www.patterns.dev/posts/proxy-pattern/

/* 
Proxy object allow more control of the interactions with certain objects. A project object can determine the behaviour whenever we're interacting with the object, for example when we're getting or setting a value.

Proxy - instead of interacting with the target object directly, we'll interact with the Proxy object.
*/

const person = {
  name: "John Doe",
  age: 20,
  nationality: "British",
};

// Instead of interacting with this object directly, we want to interact with a proxy object.
// In JavaScript we can create a new proxy by creating a new instance of Proxy

// The second argument of Proxy is an object that represents the handler
// In the handler object, we can define specific behaviour based on the type of interaction
// Two common methods are get (Invoked when trying to access a property) and set (Invoked when trying to modify a property)
const personProxy = new Proxy(person, {
  get: (obj, prop: any) => {
    if (!obj[prop]) {
      console.log(
        `Hmm.. this property doesn't seem to exist on the target object`
      );
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
  },
  set: (obj, prop: any, value): any => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      obj[prop] = value;
    }
  },
});

// The proxy made sure that we cannot modify the person object with faulty values

/* 
Proxies are a powerful way to add control over the behavior of an object. A proxy can have various use-cases: it can help with validation, formatting, notifications, or debugging.
Overusing the Proxy object or performing heavy operations on each handler method invocation can easily affect the performance of your application negatively. It's best to not use proxies for performance-critical code.
*/
