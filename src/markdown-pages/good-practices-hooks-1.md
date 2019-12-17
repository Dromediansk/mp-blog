---
title: Some Best Practices for Building a React App With Hooks
author: "Miroslav Pillar"
date: "2019-12-17"
description: "A few handy tips to keep in mind when building an app from scratch."
imageBanner: "../images/good-practices1.jpg"
imageBannerAuthor: "Helloquence"
imageBannerAuthorLink: "https://unsplash.com/@helloquence"
imageBannerSource: "Unsplash"
imageBannerSourceLink: "https://unsplash.com/"
---

There’s nothing easier for developers out there than building a simple React application using create-react-app. So why should you devote your precious time to this piece?

Well, because many times it’s not about *what *to build but *how *to build it the right way. You can have a groundbreaking idea that’d attract crowds, but if you mess up the foundations of the project, it’ll be pretty difficult to rescue it.

---

# Best Practices

I want to show you several good practices you should observe when building an app in 2020 using React version 16.8 and higher. This version is famous mainly because of hooks, which are a real gamechanger in web development and widely discussed in the community.

In this piece, we’re going to build a simple app showing the characteristics of each country in the world. We will use the [REST Countries API](https://restcountries.eu/) to demonstrate good practices, including:

- Proper folder structure

- Asynchronous code with async/await

- Basic error handling with try/catch blocks

- Usage of React hooks

**Note**: I’m not going to focus on styling because, in our case, it’s not important. But feel free to design and explore CSS on your own.

Here’s an entire [GitHub repo](https://github.com/Dromediansk/countries-app-blog) you can take a look at or fork right away.

OK, enough talking. Let’s get down into business.

---

# Initial Setup

I’m going to name our project `react-tips`. So firstly, open your terminal. and install the starter pack using create-react-app and the following command:

```
npx create-react-app react-tips
```

Notice I’m using `npx` instead of `npm`. The difference between those two commands is that `npx` will install the latest available package. In order to install it properly, you should uninstall your previous version of create-react-app (if you have any) with `npm uninstall -g create-react-app`.

#### The decision about folder structure

You should always think about this topic at the beginning of every project. Trust me — moving, renaming, and general refactoring of folder structure during the advanced phase of the project is a nightmare — especially if you work in a team that contributes to other parts of the project.

Firstly, create two new folders in `src`, and name them `components` and `calls`. We need to separate files into proper folders in order to retain the logical structure and keep one of the main principles — _separation of concerns_. This principle basically refers to separating the app into distinct sections such that each section addresses a particular set of information that has an effect on the code.

Another reason to dedicate more time to folder structure is the project might expand, or new team members might join in the future. Nevertheless, the project will be much easier to manage.

In the `components` folder, we’ll save all of the React components we’re going to create. Whereas, the `calls` folder serves for all our asynchronous requests to the API.

This is how our structure looks like:

```
> /public
> /src
  -> /calls
  -> /components
  -> App.js
  -> App.css
  -> index.js
> package.json
> package-lock.json
```

You could also create another folder called `stylesheets` in order to save CSS files for styling each component separately.

My preferred way, though, is to store CSS files in the same folder as relevant components. This decision depends only on you or your development team.

---

# Coding Time

Firstly, we’re going to create a request to API. Create a new file in the `calls` folder, and name it `countries.js`.

In this file, let’s make a function that’ll fetch the necessary data about all of the countries:

`gist:Dromediansk/73fc083d2461a6f13114a2711b5b924c#countries.js`

Here are some highlights you should notice:

- Instead of the traditional method using promises, we’ve implemented [async/await,](https://javascript.info/async-await) introduced in ES 2017 (ES8), which I consider to be a more readable approach. Just keep in mind this method is also based on Promises.

- We’re using [try/catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) blocks for better error handling. This means if an exception is thrown within the `try`\* _block, the remaining code is skipped, and control is immediately shifted to the `catch`_ _block. On the other hand, if the `try`_ _block is executed without any exception, the `catch`_ \*block is skipped.

- I decided to use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for requesting the data, although there are a few other alternatives you could also consider ([AJAX](https://www.w3schools.com/js/js_ajax_http_send.asp)_, _[axios,](https://github.com/axios/axios) etc.).

---

# React Components

Since we have a call to the API, we can now start to work on React components. It’s pretty usual to prepare our `App.js`, which is on the top of the component tree (also called the _main parent component_).

This is how it looks like in our app:

`gist:Dromediansk/bb56e60ce13ab82d347488c89e567337#App.js`

As you can see in the picture above, it wraps only one component so far — `<CountriesContainer />`. Theoretically, if we’d like to implement [React Router](https://reacttraining.com/react-router/web/guides/quick-start), which is widely used, all routes would be passed here in this component and our folder structure would be adapted accordingly.

Now, let’s create our `CountriesContainer` in the `components` folder.

#### CountriesContainer component

`gist:Dromediansk/eb22e19abd56b75c743de54ce252b50b#CountriesContainer.js`

There are a few things you should notice:

- For state management in the functional component, we’re using the `useState` hook. This hook is a substitution to the `setState` in the class-based component. Feel free to read the [documentation about State Hooks](https://reactjs.org/docs/hooks-state.html).

- We are returning a list of countries from the state using `Array.map()`

- Each item (country) is passed to the `<CountryCard />` (which we haven’t created yet) as a prop

- Each item has a key prop, which must be unique. [It’s not recommended to use an index as a key.](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)

- For proper positioning of the cards, I’m using flexbox (check out [CountriesContainer.css](https://github.com/Dromediansk/countries-app-blog/blob/master/src/components/CountriesContainer.css))

#### UseEffect hook

The only thing we’re still missing in this component is the request to the API and the passing of the data to `countries`. Fetching data is recommended to execute the [useEffect](https://reactjs.org/docs/hooks-effect.html) hook correctly:

`gist:Dromediansk/33e0e2a58e1ec3e799212a8e64df4102#CountriesContainer.js`

- Here we’re calling the function we created earlier

- After that, we’re getting a response with data, which we’ll then pass into the `countries` state using `setCountries`

- `useEffect` has a specific syntax you should be aware of. Notice line 7, where we have an empty array as the second argument — it means this `useEffect` will be executed only once after rendering the component. It’s equivalent to `componentDidMount` in class-based components.

#### CountryCard component

Now when we have our wrapper component, we’re going to build also our children in `<CountryCard />`.

This component is only a dummy component, which only shows the content — that’s its only purpose. Keep in mind all logical operations are done in the wrapper component.

`gist:Dromediansk/fa45bf1b4f2b799bce99c3bdfd2b401e#CountryCard.js`

- This component shows the name, capital, region, and flag of the country.

- Feel free to copy the [styling in CountryCard.css](https://github.com/Dromediansk/countries-app-blog/blob/master/src/components/CountryCard.css).

---

# Final Result

And there you have it! We’ve finished our app with perspective foundations using good practices I’m sure you might encounter in your daily practice.

Here’s an overview of how our app looks:

![](https://cdn-images-1.medium.com/max/4454/1*6Z5AYxJhdvY-h_rNC5ocfA.png)

And here’s an entire [GitHub repo](https://github.com/Dromediansk/countries-app-blog) you can download.

The best thing is this app has many ways to extend it (e.g., filters, lazy loading, color themes, etc.), and it can serve as a nice training ground.

Thanks for reading!
