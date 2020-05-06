---
title: Boost Performance of Your React App With Memoization
author: "Miroslav Pillar"
date: "2020-01-28"
description: "A comprehensive explanation of when React.memo() and useMemo() Hooks are useful."
imageBanner: "../images/memoization.jpg"
imageBannerAuthor: "Kushagra Kevat"
imageBannerAuthorLink: "https://unsplash.com/@kushagrakevat"
imageBannerSource: "Unsplash"
imageBannerSourceLink: "https://unsplash.com/"
tags:
    - React
    - Performance
---

> “The BBC found they lost an additional 10% of users for every additional second their site took to load.” — [Google Developers](https://developers.google.com/web/fundamentals/performance/why-performance-matters)

I don’t like slow websites either, because it’s wasting my time. And of course, there’s no doubt the performance of a website has an impact on the popularity and revenue.

If you start digging into the performance optimization of your website, it’s only a matter of time before you come across a technique called _memoization_.

Before we get to examples, let me explain what memoization really is and when you should consider using it.

---

# What Is Memoization

It’s a specific form of caching, in which repetitive functions with the same values are executed much faster because the values are stored in the cache memory.

That means if we input the same value into the memoized function, it returns the value from the cache memory instead of running the function again.

It significantly boosts performance, especially when using functions with heavy calculations or with a lot of UI elements.

#### What does it mean in the React-way?

In React v16.8 and higher versions, it’s recommended to use functional components with Hooks. It means that every component is a function, which can be _memoized_.

Using memoization, it will cause better performance of your React app because memoized components are re-rendered only if given props will change.

In functional components, we can use the higher-order component `React.memo()` or the Hook `useMemo()`.

In class-based components there are two options for using memoization:

-   Use of the lifecycle Hook [shouldComponentUpdate()](https://reactjs.org/docs/react-component.html#shouldcomponentupdate).

-   Using a [PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent).

However, we will focus on memoizing functional components, because they are preferred by the React creators.

---

# When to Use It

Memoization can boost the performance of your app, but it has to be used with caution. There might be cases when the implementation of this technique would be useless or might have an opposite effect — negatively affect the operation of the app.

Here are a few examples where you might put it to use:

-   Pure functional component — Given the same props, it always renders the same output without causing side-effects.

-   The component renders often and with the same props.

-   Big or heavy-computational function — It contains a decent amount of UI elements or has to do heavy calculations.

If you’re not sure whether it would give you the desired benefits, you can test your application using _[Profiling Components with the Chrome Performance Tab](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab)_.

---

# React.memo()

Suppose we have a simple functional component called `Employee`, which has props `name` and `position`. We will wrap this component into `React.memo()` so it will look like this:

`gist:Dromediansk/83817c0f854ccc3059261c0e612a2e12#Employee.js`

`React.memo(Employee)` returns a new memoized component `MemoizedEmployee`. It will output the same content as the original `Employee` component, but with one difference.

The `MemoizedEmployee` render output is memoized. The memoized content is reused as long as `name` or `position` props are the same on the next renderings.

Note: You can also import `memo` from React to improve readability.

#### Custom checking equality of props

By default, `React.memo()` checks if all props during the next re-rendering equal, using shallow comparison. We can use the second argument to customize which props should be checked:

```
React.memo(Component, [areEqual(prevProps, nextProps)]);
```

The `areEqual(prevProps, nextProps)` function must return `true` if `prevProps` and `nextProps` are equal.

For example, let’s have a function that checks if `name` of the employee equals:

```
const employeePropsNameEqual = (prevEmployee, nextEmployee) => {
  return prevEmployee.name === nextEmployee.name
}

const MemoizedEmployee2 = React.memo(Employee, employeePropsNameEqual);
```

The `employeePropsNameEqual()` function returns `true` if `name` on the previous render equals the `name` on the next render. This means that the component will be re-rendered only if the `name` prop changes.

---

# useMemo Hook

This Hook is equivalent to the previous technique. It memoizes and returns the same value for the expensive calculations if dependencies remain the same. The method has the following structure:

```
`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
```

-   The first argument is always a function (or component), where heavy computation is executed.

-   The second argument is an array of dependencies. When one of the dependencies changes, `useMemo()` recomputes the value. If it doesn’t, it returns the last memoized value.

If we implement this knowledge into our `Employee` component it will look like this:

`gist:Dromediansk/b8d53241ff1f5eee24288cf73d16f6fb#Employee.js`

Note: This Hook is very similar to [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback). The difference is that `useCallback` returns a memoized callback and `useMemo` returns a memoized value, the result of that function call.

`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.

---

# Wrapping Up

Memoization is a great technique to boost performance. When applied correctly, it prevents the component from uselessly rendering when the next props equal the previous. You can use the `React.memo()` or `useMemo()` Hooks for that.

However, you should take precautions and implement this technique wisely. It might happen that rendering of the component has an impact on child components.

Or it can cause worse readability and understanding of the code for your colleagues, which might also have a negative impact on the development.

Therefore, a good developer should, first of all, think about such implementation and have good arguments for the developer team why it’s worth it.

---

# Where to Go Next

Memoization is only one of the many techniques with which you can boost performance.

If you have many routes in your app, you should also consider implementing another technique called code-splitting. Feel free to read a story about [_Routing and Code Splitting in React_](https://www.miroslavpillar.com/routing-code-splitting/).

Thanks for reading!
