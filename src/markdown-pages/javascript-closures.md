---
title: "Understand How Javascript Closures Work with Simple Examples"
author: "Miroslav Pillar"
date: "2019-12-13"
description: "Obtain an advantage by learning one of the main principles of Javascript."
imageBanner: "../images/closures.jpg"
imageBannerAuthor: "Caspar Camille Rubin"
imageBannerAuthorLink: "https://unsplash.com/@casparrubin"
imageBannerSource: "Unsplash"
imageBannerSourceLink: "https://unsplash.com/"
tags:
- Javascript
---

When I was starting to learn Javascript, this language caused me a headache many times. Javascript is easy to learn, but hard to master and it can cause you joy and pain on the same day.

If you want to master your skills in this language and gain an advantage over others out there, you should understand the main principles. One of them is closures*.*

I guarantee that learning how closures work will ease your life and save nerves when solving daily problems. If you truly grasp the point, you can implement it in your project as a good practice and I’m sure other team members will appreciate your hard work.

Also, you won’t be vulnerable to misunderstandings when reading the code of someone else.

In my case, before learning closures I didn’t even know I am using them. I’m quite sure there are many developers out there who also lack this knowledge.

I will explain to you how closures work by providing simple examples and giving you two real cases when they are useful. Big thanks belong to [Andrei Neagoie](https://medium.com/u/942670ffec21), who gave me huge inspiration writing this article.

_The requirements are familiarity with functions and Javascript runtime environment._

---

If you want to grasp the main point of why closures are useful, the prerequisite is good knowledge of _functions_ and _lexical scoping_ (or _lexical environment_). A combination of these two aspects is the core of closures.

So let’s take it over one by one.

# Functions

I am pretty sure that you have at least a basic knowledge of functions if you code in Javascript. Otherwise, it would be like baking a cake without cooking tools.

However, you should also know the term which is closely bound with closures and that is _higher-order functions_.

#### Higher-order function (HOC)

It’s a type of function that either takes a function as an argument, returns a function as its return value, or both.

Here is a basic example from daily praxis:

If you work with arrays, I suppose you came across array methods such as `Array.map()`, `Array.filter()`&nbsp;or `Array.reduce()`. All of them take a function as an argument. All of them are higher-order functions.

Let’s write another example:

`gist:Dromediansk/63f5d1f37656ab4bc59897134edbc837#index.js`

The `handleFamily`&nbsp;function is using a _fat arrow_ function expression, which was introduced in ECMAScript 2015 (ES6). Inside this function, we have declared a variable `myGrandpa`&nbsp;and returns another function `sayHello`, so it is a Higher Order function.

If we call (invoke) `handleFamily`, this is what we get:

```
==> [Function: sayHello]
```

That is pretty logical — we get another function. So in order to get the desired output, we have to call it like this:

```
handleFamily()();

==> 'Hello there!'
```

These two brackets one after another basically mean that whatever we return from `handleFamily`, we call again. We could also assign the called `handleFamily`&nbsp;to a variable so it would be like this:

```
const holdFamily = handleFamily();

holdFamily();
```

We tend to use HOC all the time. If you’re a JavaScript programmer or if you’ve ever done any JavaScript, you’ve probably used them all over the place.

#### Execution scope

It’s also required to know what really happens if a function is called. In Javascript, every function creates its _local execution scope_ (or also so-called _local execution context_). What does it mean?

- It means, that every variable, which is declared in this scope is also local to this scope.

- The outer scope of the function — in our case, _global scope_ — has no access to these variables.

- On the other hand, the local scope is able to access variables from its outer scope. The reason is _because of closures_, which I explain later in this story.

- It is a good practice to write variables, where they are needed. Therefore you might avoid side-effects and memory overloading of the Javascript engine.

In our example, the local execution scope of `handleFamily`&nbsp;is where the first opening curly bracket (line 1) is and ends with the last closing bracket (line 7). Its local variables are `myGrandpa`&nbsp;and `sayHello`.

The `sayHello`&nbsp;function has of course also its local execution scope, where `myFather`&nbsp;is declared. This means if you want to access this variable from `handleFamily`&nbsp;(the outer scope) you get an error because Javascript won’t see it.

# Lexical scope

It is a quite fancy name, but yet easy to understand. The best way how would I explain to you this term is by dividing these words:

- _lexical_ — means **where** is a code written,

- _scope_ — what **variables** we have access to.

What do I mean by that?

In the first phase, even before executing the code, the Javascript engine will save all variables to temporary memory of the Javascript engine (also called _memory heap)_ for future usage. At the same time, the engine will recognize which function has access to which variables. This is done by determining function execution scopes and chaining them properly (often so-called _scope chaining_).

Eventually, in terms of scoping it matters, where a function is written, not where is called.

---

# **The coherence**

Now, since we are familiar with functions and lexical scoping, let’s combine them. I will modify our `handleFamily`&nbsp;function in the following manner:

`gist:Dromediansk/3c0cc12281a31d8441a49c2170f150fd#index.js`

What do you expect the result would be?

```
==> 'Hello grandpa and father!'
```

If you work with Javascript I assume you are familiar with such behavior, but I think it’s quite important to understand why this happens. So let’s dismantle the whole process.

#### Dismantling the execution

When I had assigned `handleFamily`&nbsp;to a variable `hold`&nbsp;(line 9), its execution context was executed and popped off the _call stack_. When this happens, it usually means that the variable environment is destroyed as well. However, every function creates a closure, which has reserved space in the memory heap. If some variable is being referenced in one of the inner functions, the variable is saved in the closure memory waiting for use.

By calling `hold()`&nbsp;on line 11 we execute `sayHello`&nbsp;function. The `myFather`&nbsp;variable is declared in the same scope and immediately used. On the other hand, `myGrandpa`&nbsp;is declared in the outer scope. That means the Javascript engine will go up to the outer scope and search for the `myGrandpa`&nbsp;in the closure memory. In our case, the variable is present there.

_Theoretically, if `myGrandpa`&nbsp;wouldn’t be declared in the outer scope, it would go up to another level (in our case in the global scope) and search for the variable there. If it would be still absent, it would return an error._

This is quite a unique behavior compared to other languages. Javascript engine will always make sure that functions have access to all of the variables outside the function using closures.

Finally, after calling `sayHello`, it’s popped off the call stack and variables that are not referenced anywhere are cleaned up from memory by cleaning mechanism of the Javascript engine called _garbage collection_.

---

# **Why so much enthusiasm**

Now you might be thinking that closures are just big hype. But I will show you two cases when they could improve your code in terms of performance and security. I am talking about _memory efficiency_ and _data encapsulation_.

#### Memory efficiency

Consider the following function called `produceCandy`:

```
const produceCandy = (index) => {
    const candyFactory = new Array(7000).fill('sweet candy');

    console.log('the candy factory was established');
    return candyFactory[index];
}
```

Let’s briefly describe what is happening here:

- The variable `candyFactory`&nbsp;creates an array, which has 7000 items.

- It logs the text in the console every time when the function is called

- And returns an item with the desired index.

Now, what is the main PROBLEM with this function?

Consider we need to return many items from `candyFactory`. In practice, it could be some data we need to get from a database and do something with them:

```
candyFactory(34);
candyFactory(4574);
candyFactory(875);

// returns ==>
the candy factory was established
the candy factory was established
the candy factory was established
sweet candy
```

It means, `candyFactory`&nbsp;is created in the memory heap before execution and destroyed after execution _every time it is called_. In our case, it’s not a big issue, but imagine you would call it ten thousand times. It would create the variable and destroy it ten thousand times, which is **memory inefficient **and might cause performance issues.

**So what could be a SOLUTION?**

You’re guessing right — using closures.

I would modify our function like this:

`gist:Dromediansk/9bead6cd39edf7fa477ea373b1f16b85#index.js`

And after calling `getProduceCandyEfficiently`&nbsp;3 times this is the output:

```
==>
the candy factory was established
sweet candy
```

So `candyFactory`&nbsp;is created only once no matter how many times you call `getProduceCandyEfficiently`. After the last call, this function is eventually removed from the memory. In tasks such as processing an immense amount of data, it can significantly improve performance. Cool, right?

#### Data encapsulation

This is another case when closures might be useful.

Suppose we have another candy factory, which monitors the duration time of its production since the function `monitorProductivityTime`&nbsp;has been called. We will store this amount of time in the variable `timeWithoutReset`. The value is incremented every second in `setInterval`.

Along with that, we’d like to also have a function, which would reset this duration time if needed. Let’s call it `reset`.

This is how would it look like (try to test it in the browser console to receive proper results):

`gist:Dromediansk/4e33b74c58b3e0da04d2d2a924f8d8a9#index.js`

When we call `holdTime.totalProductivityTime()`&nbsp;on the last line, we are measuring duration time from this moment. If you’d like to reset this time, just call `holdTime.reset()`.

Because `reset`&nbsp;function is inside `monitorProductivityTime`, it uses closure for accessing variable `timeWithoutReset`. Pretty logical.

However, the main problem in this function is that _everybody_ can access `reset()`. It could be your new team member, who is not acquainted with the project yet and could mess some things up. Or any third party from outside of your company. This can cause many troubles and security issues in practice, therefore some data or functions should not be directly exposed.

For this reason, you should always keep in mind the _principle of least privilege_, which is one of the security principles you should observe. It means that data can be accessed only by competent individuals.

The solution to this example might be to return `reset`, only if it’s appropriate, e.g. user has a competent role to access this function.

---

# **Summary**

There’s no question, closures are one of the core principles in Javascript. It brings developers huge benefits if they’re used in the right way, but many times they’re used in code unknowingly.

Therefore, you should catch the following points about closures:

- Every function has reserved space in memory heap for closures.

- Javascript engine will always make sure that functions have access to all of the variables outside the function.

- When you’re processing an immense amount of data you can optimize memory usage.

- When you’re working with sensitive data you can observe the principle of least privilege using encapsulation.

- Closures can significantly improve the performance and security of your code.

---

_Thank you for reading._

_Miroslav_
