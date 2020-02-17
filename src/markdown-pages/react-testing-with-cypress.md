---
title: 'React Testing: Get Started With Cypress.io'
author: "Miroslav Pillar"
date: "2020-02-17"
description: "Write meaningful end-to-end tests with minimal effort."
imageBanner: "../images/testing.jpg"
imageBannerAuthor: "Vishnu R Nair"
imageBannerAuthorLink: "https://unsplash.com/@vishnurnair"
imageBannerSource: "Unsplash"
imageBannerSourceLink: "https://unsplash.com/"
tags:
- React
- Guide
---

Developers hate writing tests because it takes time and, in the end, it doesn’t provide additional value to the customer. Furthermore, it tends to be boring.

With Cypress, I’ve discovered a brand new perspective on testing. It’s easier to understand, more effective, and much more entertaining.

I’ll show you an implementation of Cypress in a React app, which you can clone from [this Github repo](https://github.com/Dromediansk/countries-app-blog/tree/react-router-implementation). Our goal is to test the main functionality of the app — that means writing tests for navigation links, a request to the API, and filter functionality.

Note: If you’re interested in building the whole app from scratch, you can start with the story [Some Best Practices for Building a React App With Hooks](https://medium.com/better-programming/some-best-practices-for-building-a-react-app-with-hooks-d6157494f5c1).

---

# What You Should Know About Cypress

It’s an E2E testing tool, which simplifies the process of writing tests. The purpose of those tests is to exercise a complete production-like scenario. This means we’re able to simulate user behavior and cover all required functionalities.

Cypress has a nice GUI where you can see individual tests as well as how it looks like in your app.

![Cypress test runner example](https://cdn-images-1.medium.com/max/4504/1*ZQGS9eJdVU-2ncY1MfYGzA.png)

These are the highlights when using Cypress:

- Tests are easy to read and write (similar to plain English).

- The test runner uses a web browser, so you can see what functionality is tested in real time.

- You can simultaneously develop your app while tests are running.

- Readable error messages help you to debug quickly.

- [Well-worked-out documentation](https://www.cypress.io/).

---

# Installing Cypress

Now, let’s focus on the practical part. You can clone [the Github repo](https://github.com/Dromediansk/countries-app-blog/tree/react-router-implementation) and install Cypress with this command:

```
npm install cypress --save-dev
```

After a while, it will add a new `cypress.json` file and `cypress` folder into the root directory. We will store all our tests in `cypress/integration/examples`.

You can open Cypress with this:

```
./node_modules/.bin/cypress open
```

I know, this is an awful way to launch Cypress every time. I would forget the command immediately. Fortunately, you can simplify it by adding the following npm script into `package.json`:

```
"scripts": {
    "cypress": "cypress open"
}
```

And then you can open Cypress with just `npm run cypress`.

---

# Telling Cypress to Visit the Website

Before we write tests, we need to command Cypress to visit our website. So firstly, let’s define `baseUrl` in the `cypress.json`:

```
{
    "baseUrl": "http://localhost:3000"
}
```

`baseUrl` is the URL used as a prefix for the [`cy.visit()`](https://docs.cypress.io/api/commands/visit.html) or [`cy.request()`](https://docs.cypress.io/api/commands/request.html) command’s URL. It’s a good practice to store our base URL so it’s accessible in all our tests.

And now, we can tell Cypress to visit the website. In `/cypress/integration/examples`, we can create a new spec file, call it `routeNavigation.spec.js`, and write the following command:

```
cy.visit("/");
```

All of Cypress’ functionality is available under the global `cy` object. Try to run this test to see the result.

---

# Testing Navigation Links

If a user wants to use our app, the navigation links are one of the core functionalities that must work. It’s also appropriate to write simple tests in the beginning and get to know the syntax.

So let’s write the test in `routeNavigation.spec.js`:

`gist:Dromediansk/105420cf0bb693b8614228b258ff2be8#routeNavigation.spec.js`

- In `before()` on line 2, we can implement code that is executed before any tests run — in our case visiting the default route of the website.

- [`cy.get()`](https://docs.cypress.io/api/commands/get.html#Syntax) is used for selecting the proper element. We’re searching for the `a` element, which is a child of the class `nav-list-item` class.

- `eq(1)` stands for selecting the second element. Counting starts at zero.

- We’re simulating the click event on the selected element.

- Finally, with [`cy.location`](https://docs.cypress.io/api/commands/location.html#Syntax), we’re checking if `pathname` includes `/data` in the address bar.

- `timeout` is an optional setting with which you can pass the amount of time to wait for resolve. I’m pretty sure that 99% of users will leave the website after one minute of waiting.

In a similar way, you can write tests for every other route. Feel free to try it out on your own and play around.

---

# Testing Request to the API

Our goal is to check whether we get a response with status 200 and also receive the response with countries’ data.

In general, testing requests can be executed with the [`cy.request()`](https://docs.cypress.io/api/commands/request.html#Syntax) method.

`gist:Dromediansk/b8f57b2f9df6dd4d206c5ddb221686dc#routeNavigation.spec.js`

---

# Testing Focus of the Input

The goal of this test is to check if the input for searching by country is focused when a user visits the page.

Firstly, make sure the input with the placeholder `country` has set the prop `autofocus` in `AdvancedFilter.js`:

`gist:Dromediansk/dad4309d2a41e0817265248b4dc571ba#AdvancedFilter.js`

Now we can write a test to check if it’s working. Because we’re testing another functionality, let’s create a new file for that and name it `filtering.spec.js`.

`gist:Dromediansk/dd489da58e4679a045ecfd4b016f7909#filtering.spec.js`

- Similarly to the previous test file, we tell Cypress to visit the required route in the first place.

- In the test, we select the input by `name` prop and check if it’s in focus.

---

# Testing Filter Functionality

I’d consider filtering a crucial part of our app. If it weren’t functional, the app's purpose would be lost. Hence we should first test if searching by country is working.

`gist:Dromediansk/e96c19cbf9fc5b4e1d1e0f6953185804#filtering.spec.js`

The goal of this test is to check if the value changes when a user inputs some text (e.g. “us”). After that, we also expect that the filtered countries will match the value (8).

Of course, there are many options on how to enhance this test, so feel free to play around. Also, you can write tests for other inputs on your own.

Here’s the [final version of the GitHub repo](https://github.com/Dromediansk/countries-app-blog/tree/testing).

![Final version](https://cdn-images-1.medium.com/max/5120/1*bzvsCpkKn8qJDUby46oSdg.png)

---

# Final Words

I hope you are at least as amazed by Cypress as I am. It’s a great E2E testing tool suitable for all kinds of technologies — not only for React. It’s fast, tests are easy to read, and it has [great documentation](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell).

However, a good developer should learn *how *and *what *to test in the app. It’s simply a waste of time if you write meaningless tests that increase code coverage but don’t test the true functionality.

Besides, if you want to do proper tests, you have to learn the corresponding syntax, matchers, etc., which of course takes more time. Therefore, it’s wise to take into consideration the overall scope of testing before you start spending your time on writing tests.

---

Thanks for reading!
