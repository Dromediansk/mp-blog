---
title: Best Practices for Handling a Form With Multiple Inputs Using React Hooks
author: "Miroslav Pillar"
date: "2019-12-20"
description: "Building an advanced filter with an elegant solution."
imageBanner: "../images/good-practices2.jpg"
imageBannerAuthor: "Kelly Sikkema"
imageBannerAuthorLink: "https://unsplash.com/@kellysikkema"
imageBannerSource: "Unsplash"
imageBannerSourceLink: "https://unsplash.com/"
tags:
- React
- Guide
---

Forms are used all over the place. Web developers can’t survive without at least a decent knowledge of forms. They are in every web app that has some kind of interaction with a user.

The question is if there is an elegant solution to handling form with multiple inputs using React Hooks.

The answer is that in web development, everything has a solution. But equally important is how to do it properly. I will show you an elegant code including:

- handling controlled forms (storing values of inputs in a state)

- controlling multiple inputs with the help of `useReducer` hook

- filtering data using `Array.filter()` method

This is a subsequent sequel to [Some Best Practices for Building a React App With Hooks](https://medium.com/better-programming/some-best-practices-for-building-a-react-app-with-hooks-d6157494f5c1), where we built foundations of a simple app regarding characteristics of all countries in the world.

You can begin by reading the first part or directly clone the [repo from Github](https://github.com/Dromediansk/countries-app-blog).

---

# Definition of Done

It is important to set up a clear goal in every task (or story) of app development. If the goal isn’t clarified sufficiently, it might happen that you and your team will fail because some of the conditions will not be met. In agile development, there is one apt term for achieving the goal: [Definition of Done](https://www.leadingagile.com/2017/02/definition-of-done/) (DoD).

#### Setting up our DoD

In our app, we want to build a filter showing only countries that match the criteria we input. It should meet the following conditions:

- Filtering countries by name, capital, and population data

- Dynamic filter — it will change results immediately when user types

- Filtering with multiple layers (e.g., searching countries starting with letters “am” and with a population greater than or equal to three million)

In technical jargon, we will filter an array of objects, which will re-render every time the input is changed. This task is a quite common example from practice and React is excellent in handling such situations.

Now, let’s do the real stuff.

---

# Coding time

So we have set the requirements.

For creating a proper filter, we need to implement a form with three inputs: name, capital, and population. However, before anything else, the values of these inputs have to be stored in a state.

If you’d have only one input, it’s pretty usual to store the value in a state using `useState` hook. But, imagine you’d have 15 inputs. You’d create 15 separated states and 15 functions for handling the change of values accordingly, and that is not in compliance with one of the most important principles: Don’t Repeat Yourself (DRY).

Here comes `useReducer` to the rescue.

#### UseReducer hook

The [UseReducer hook](https://reactjs.org/docs/hooks-reference.html#usereducer) is tailored for this purpose. We want to store multiple values of the form in a state. Let’s do it in the `CountriesContainer.js`:

`gist:Dromediansk/4420c496fa9756e438222f3b7bfc3c57#CountriesContainer.js`

Here are a few concise notes, how `useReducer` works:

- `useReducer` takes a function (called reducer) that determines how React will update your state given the new state that was passed into this function

- This reducer accepts a `newState` and spreads the values ([object spreading](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) introduced in ES9) defined onto our original `state` object, which returns `state` with the properties properly updated

- The properties we have defined on our `filterInput` are `name`, `capital`, and `population` which are initialized in the second argument of `useReducer`

#### handleFilterCountries function

To change values stored in the state we need to write also a function for handling the changes. To observe the DRY principle, it should be a general function, which handles all inputs.

In `CountriesContainer.js`, let’s declare a new function and name it `handleFilterCountries`:

```
const handleFilterCountries = event => {
    const name = event.target.name;
    const newValue = event.target.value;
    setFilterInput({ [name]: newValue });
};
```

In this function, we declare two variables, `name` and `newValue`, which are assigned to the corresponding name and value of the arrival event. Then we are storing them in the state accordingly.

We can even simplify the function using [object destructuring](https://wesbos.com/destructuring-objects/) (introduced in ES6):

```
const handleFilterCountries = event => {
    const { name, value } = event.target;
    setFilterInput({ [name]: value });
};
```

---

# React Components

#### CountryCard component

In `CountryCard.js`, we need to implement an additional list item, which includes data about the population:

```
<li className="country-info-item">
    <h4>Population:</h4>
    <p>{country.population}</p>
</li>
```

Here is the [styling for the CountryCard component](https://github.com/Dromediansk/countries-app-blog/blob/part2/src/components/CountryCard.css). Feel free to adjust it as you wish.

#### AdvancedFilter component

We still miss a component, where we could implement form with desired inputs. So let’s add a new file to `components` folder and name it `AdvancedFilter.js`:

`gist:Dromediansk/8bc20621bbf8cd160b004ffcfb8ebbdb#AdvancedFilter.js`

There are a few highlights to notice:

- The component has two props — `searchValue` and `handleChangeValue` (line 4)

- We expect that `searchValue` is an object created in `filterInput` state

- Inside this component there is `<form>` with three `<input>` tags — for a _name_, _capital_, and *population *values

- In each `<input>`, we must add the attribute `name` with values that match the properties in the reducer object (in `<CountriesContainer />` we’ve implemented earlier).

- An attribute `value` has appropriate properties of object `searchValue`

- An attribute `onChange` in each input is calling `handleChangeValue` with the event as an argument.

- Here is my [version of styling](https://github.com/Dromediansk/countries-app-blog/blob/part2/src/components/AdvancedFilter.css)

---

# The Logic of the Almighty Filter

We are almost there. This part provides a solution to filtering our array of objects (countries). It’s rather an easy-to-understand function, although it looks complicated at first sight.

Let’s add it to our `CountriesContainer.js`:

`gist:Dromediansk/d79832a544b07a0521458779c7c0e015#CountriesContainer.js`

Let me explain what is happening here step by step:

- We are using `Array.filter()` method, which returns countries matching all of the criteria

- Name and capital data are converted to lowercase (to include all items regardless of lower- or uppercase)

- These data are checked if they are included in the inputs of the filter. If they are, the result is `true`

- Data of the population is checked if it’s equal or bigger than the value in the filter input

In conclusion, this function returns only countries that match the filter inputs of name and capital and population (using logical operators `&&`). The filter is not case sensitive.

Finally, we’re storing the result in a variable `CountriesList`(line 19).

---

# **Updating JSX of the CountriesContainer.js**

In order to show our result we’ve coded (including filter), we need to update `return` statement of the `<CountriesContainer />`:

`gist:Dromediansk/8ce990ab2b125fa7ae8514661e02a1aa#CountriesContainer.js`

- We are wrapping components with `<>`, which is equivalent to the `<Fragment>`, but I consider it as a cleaner approach

- In this component, we need to pass `<AdvancedFilter>` with required props, which we made earlier

- On line 8 we’re mapping the array `countriesList` and displaying each item in the `<CountryCard />` with consideration of filter inputs, of course

---

# Honest Goal Assessment

Yeah, we’re finally there! Here is our result in a glimpse:

![](https://cdn-images-1.medium.com/max/3176/1*U1AljPoijhnWKvLEfcyWGw.png)

And you can check out the [full repo in GitHub](https://github.com/Dromediansk/countries-app-blog/tree/part2).

It looks like we’ve fulfilled the requirements of DoD. But there is one drawback to our solution I must remark:

- During typing in the inputs, you might notice a minor lagging when showing the matching countries. This is caused by continual re-rendering while you type. In our app, it’s not a big issue, because we don’t have so many countries.

- Nevertheless, if you’d have an immense amount of data, you should consider other tweaks (using lazy loading) or another solution of filtering (e.g. filtering data with requests to backend).

However, if someone assigns you a similar task in the future, you now have an overview of how it could be done. And you’ve also learned a few handy principles, which I’m sure will be appraised in your development team.

Thank you for reading!
