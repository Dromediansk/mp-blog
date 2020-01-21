---
title: Routing and Code Splitting in React
author: "Miroslav Pillar"
date: "2020-01-21"
description: Proper implementation of React Router with React.lazy() and Suspense.
imageBanner: "../images/routes.jpg"
imageBannerAuthor: "Nicholas Jeffway"
imageBannerAuthorLink: "https://unsplash.com/@nich0lasvictor"
imageBannerSource: "Unsplash"
imageBannerSourceLink: "https://unsplash.com/"
---

If you want multiple routes in your React app, you should have knowledge of implementing React Router. It’s not that difficult.

However, if your app’s likely to expand and have more routes added, you may have issues with performance. Some routes may be not even visited by a user, but they would be still imported. This would increase the required data volume for the app.

Also, you can’t forget about handling routes that _don’t_ exist in your app. A good developer should count on such issues occurring.

In this piece, I’ll demonstrate how to use React Router and at the same time take into account performance optimization using route-based code splitting.

To start, you can clone [the GitHub repo](https://github.com/Dromediansk/countries-app-blog/tree/pwa). If you’re interested in building the whole app from scratch, feel free to read my piece on [Best Practices for Building a React App With Hooks](https://miroslavpillar.com/best-practices-hooks-1/).

Now, let’s get down to business.

---

# Setting Up

First, we need to install React Router with the following command:

```
npm install --save react-router-dom
```

This allows us to create routes and links between them.

In our app, we need to update our folder structure. Since you might not be sure how many routes there will be in the future, it’s a good idea to separate routes into individual folders.

Let’s create this folder in `src` directory and call it `routes`. This is where we’re going to create and manage all the routes, where every route is a separate component.

---

# Building the Routes as Examples

To start, we’re going to have three routes: `Home`, `Favourites`, and `CountriesContainer`:

- Let’s start with the default route, which is on path `/`. It should be the first page, which will be shown if a user visits your website. In our case it’s `Home.js`.

- We’re also creating route `[Favourites.js](https://github.com/Dromediansk/countries-app-blog/blob/react-router-implementation/src/routes/Favourites.js)`, which shows several countries with images. This route will be a nice example of demonstrating the code splitting of routes later in this piece. The path to this route will be `/favourites`.

- We’re moving `CountriesContainer.js` to `routes` folder, in the `/data` path. This component has been already built in the previous article.

- Feel free to add as many routes as you want.

---

# 404 Page

Every solid website should take care of the unexpected behavior of users. If you want to be a good developer, your responsibility is to handle these situations. So let’s solve the following question:

_What should be shown if a user enters a route that doesn’t exist on your website?_

It should tell the user that such a page doesn’t exist, which is also more user-friendly. Here are a few nice [examples of 404 pages](https://www.kapwing.com/404-illustrations) you can take inspiration from.

---

# Creating a Navigation Bar

Of course, you need to be able to navigate between routes, so let’s build our navbar in the `components` folder:

`gist:Dromediansk/c6a49ef104fa4c7573aa99e47c8f7901#Navbar.js`

- Routes are created in a list of items.

- Each item (route) is using `NavLink` component from react-router-dom, which we’ve installed earlier.

- `NavLink` has a required prop `to`, which redirects to the route when clicked.

---

# **Routes Implementation**

Now, let’s finish this setup with the most important part. All routes will be implemented in the `App.js`, which is on the top of the component tree structure.

Firstly, we need to import a few components from `react-router-dom`:

```
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
```

If we add routes to the App component, it will look something like this:

`gist:Dromediansk/e67e7520ea47f1fd35477843737a2353#App.js`

Keep in mind the following principles during the implementation of React Router:

- The most upper tag is `Router` and all routes are wrapped in the `Switch`.

- Each `Route` has props `path` and `component`.

- The order of the routes matters, because React Router goes through every route and picks the one with the correct path.

- As the last route, you should add a 404 page without a `path` prop. This means the router will show this page if none of the above equals the demanded path.

---

# Code Splitting

Now, as your project grows, you need to take care of the bundling size of your website.

Here’s an exact definition of bundling from the [React documentation](https://reactjs.org/docs/code-splitting.html):

> Bundling is simply the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once.

You need to keep an eye on the code you’re including in your bundle — don’t accidentally make it so large that your website takes a long time to load.

This applies also to routing. If you add 15 routes, they will be all bundled in a single file and loaded as soon as a user visits the website. That’s not efficient since some routes might be not even visited by the user or they’re not even accessible (e.g. admin page).

Hence, a proper solution is to use code splitting. This is a feature that allows you to split your code into various bundles, which can then be loaded on-demand or in parallel.

Let’s demonstrate it on our website.

#### Code splitting with lazy() and Suspense

React has released features proper for these situations in version 16.8: `React.lazy()` and `Suspense`.

So let’s update our `App.js`:

`gist:Dromediansk/a63394774e10cce8aa0de6c09e85c326#App.js`

Here are some highlights to keep in mind:

- Routes are dynamically imported if needed, using `React.lazy()`

- `<Suspense>` is added as a wrapper of the whole content. It has a required prop `fallback`, which shows a component during loading the content inside of `<Suspense>`. Usually, it should be some kind of loading spinner.

`React.lazy()` and `<Suspense>` could be also used for the dynamic import of components, not only routes. It’s good practice to use it at least in large-sized content such as images and videos. They’re imported only when demanded by a user.

---

# Testing Our Results

How can you actually know how much data you’re saving by using the technique above?

Let’s analyze our website. In Chrome, open DevTools and click on the network tab.

**Note:** For proper results clean the memory cache and reload the page with _shift _+ *F5 *on your keyboard.

![Home page](https://cdn-images-1.medium.com/max/5120/1*Rg6u7GmGvFKBzFjDjX4_KA.png)

As you can see below, the total size of resources is 2.1 MB.

Now, let’s redirect to the favorites route, where we are dynamically importing several images:

![Favorites route](https://cdn-images-1.medium.com/max/5116/1*zzuLjaelgWIzjLjZz-8hFQ.png)

The total size of the requested data on this page is 2.4MB. If we had not implemented code-splitting, all the images would be downloaded as soon as a user visits the first page. That would be wasting resources and loading time!

---

You can check, clone, or fork [the final version of GitHub repo](https://github.com/Dromediansk/countries-app-blog/tree/react-router-implementation).

Thanks for reading!
