---
title: How to Build a Custom React Hook for Fetching Data
author: "Miroslav Pillar"
date: "2020-05-08"
description: An elegant and reusable solution, suitable for using fetchAPI and Axios.
imageBanner: "../images/custom_hook.jpg"
imageBannerAuthor: "Twixes"
imageBannerAuthorLink: "https://unsplash.com/@twixes"
imageBannerSource: "Unsplash"
imageBannerSourceLink: "https://unsplash.com/"
tags:
    - React
    - Guide

---

I’m sure you’ve heard the hype around React Hooks. There’s no need to give you the basics — the internet is full of this. Also, if you’re interested in building custom Hooks, you probably already know a bit about them.

So let’s get right to the code.

---

# Sample Code for Getting Data

Most web apps use some sort of API for getting data. First, we’re going to create a sample code.

Let’s use the component `UserList.js`, where we want to fetch users after the page is mounted to the view. For demonstration purposes, I’ll use the fake API [JSONplaceholder](https://jsonplaceholder.typicode.com/).

The component’s basics will look like this:

`gist:Dromediansk/e113762ff55f235d5ba8e2c6e3264305#UserList.js`

We’re going to save data in state `users` which is handled by `useState` Hook. During fetching, we’ll show a loading message to give a better user experience.

---

# Data Fetching

In React 16.8 and higher, this is done with the `useEffect` Hook:

`gist:Dromediansk/a66e196bd9368c008f47071d781d98d5#UserList.js`

- First, we set loading to `true`.

- The whole code block for getting the data is called as soon as it’s defined (lines 6 and 18). This quirk is called an “[Immediately Invoked Function Expression](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)” (or IIFE).

- I’m using `async-await` instead of a traditional `Promise` based approach. For proper handling of errors, I’ve implemented try-catch-finally\* \*blocks.

- In this case, Fetch API is used, but you can use [Axios](https://github.com/axios/axios) as well.

---

# Performance Optimization

You should always keep the performance aspects of your code in mind.

To prevent from fetching data on unmounted component, we can use another Hook, `useRef`. The purpose is that it should run code within `useEffect` only if the component is mounted to the view. Otherwise, you might get this familiar (to React developers) warning:

> Warning: Can’t perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

Here’s the final version of `useEffect`:

`gist:Dromediansk/4b6df4c200d2f576459af7eab18d3e64#UserList.js`

On line four we first check whether the component is mounted. If yes, we try to fetch the data. It’s also important to set the current reference to `false`in the cleanup function (lines 26–28).

---

# Creating a Reusable Custom Hook

Our `useEffect` has grown into a lot of codes, which could pollute the component’s environment. If you fetch data in several components inside the project, you’re also breaking the DRY (Don’t Repeat Yourself) principle .

#### Implementing built-in hooks from React

Let’s create a new file `useFetch.js` with the following code:

`gist:Dromediansk/4e42aaad7d09daa7802256f8c8f025a0#useFetch.js`

- `useFetch` is just a special type of function, which will include built-in hooks from React.

- It accepts parameters — URL, reference and initial value for the state.

- This hook will store data, error, and loading in states accordingly (lines 4–6).

Now the only thing we’re still missing is data fetching itself. We can do that in `useEffect`, as above:

`gist:Dromediansk/a308da027d4e0daedb032df98b89a7bc#useFetch.js`

This custom Hook must return states we defined. We can do it by using object destructuring on line 26.

#### Back to our component

Now we’re ready to use the custom Hook inside the component. Remove unnecessary code and store results of the Hook in variables:

`gist:Dromediansk/4c15bd2bdbc21c5e33ba1bcba144fee8#UserList.js`

In `useFetch()`, we’re passing URL for fetching users, `isComponentMounted` as a reference, and empty array as the initial value for data.

Now our users will be stored in `data` and the component will re-render as soon as data is fetched or an error occurs. You can handle errors within the component according to your needs.

---

That’s it! You just created a reusable custom Hook, which you can use across all React projects.

Thanks for reading!
