---
title: Learn Gatsby by Building Your Own Blog Website
author: "Miroslav Pillar"
date: "2020-02-10"
description: "Introduction to the static rendering approach."
imageBanner: "../images/build-blog.jpg"
imageBannerAuthor: "Nick Morrison"
imageBannerAuthorLink: "https://unsplash.com/@nickmorrison"
imageBannerSource: "Unsplash"
imageBannerSourceLink: "https://unsplash.com/"
tags:
- React
- Gatsby
- Guide
---

_When should I use Gatsby for my website? What are the benefits of using Gatsby over Create React App? Where to start if I want to build my own blog website?_ You will find answers to those questions in the next few minutes.

Gatsby is a great framework based on React and GraphQL that helps us build blazing-fast websites. I’m going to demonstrate how you can build a basic blog website and teach the framework’s principles.

The project will be created with a reference to mine — [miroslavpillar.com](http://miroslavpillar.com). Trust me, you can do that, too!

**Note:** _In order to follow this story and not get lost, you should have at least a basic knowledge of Javascript and React._

---

#  Introduction to static rendering

Websites based on Gatsby are known for their speed because Gatsby uses static rendering. It’s a way of rendering that involves generating HTML for each of your site’s URLs at build time.

Static rendering has the advantage of being able to serve requests fast because no requests need to be generated on the fly.

Generally, it means producing a separate HTML file for each URL ahead of time so you can store the files all over the world on a CDN, which gives your site ridiculously fast response times.

However, static rendering, as well as Gatsby, can also have its disadvantages.

# Consider static rendering in your project

For the reasons mentioned above, Gatsby is a great choice when building non-dynamical (static) websites, in which a view 
isn’t changed so often and you can predict all possible requests. That could be a blog website, documentation, news, etc.
Great examples of using Gatsby are from familiar companies such as: 

- [The Official React Website](https://reactjs.org/), 
- [Braun eCommerce](https://ca.braun.com/en-ca) or 
- [Airbnb Engineering & Data Science](https://airbnb.io/).

#### Other alternatives to the static rendering

If you have a lot of user-generated content or you can’t predict all possible requests or the response changes on every request you should consider other frameworks that use _server-side rendering (SSR)_ such as [Next.js](https://nextjs.org/).

The main difference between SSR and static rendering is that SSR happens on-demand, as the user requests each file.      

However, static rendering and SSR are great options if you need to serve specific HTML for each page for SEO purposes. Great examples are building a social network or an eCommerce website.

On the other hand, if you’re building something where SEO is irrelevant and the website should be dynamic, the best option is the most familiar _client-side rendering (CSR)_ used by e.g.  [Create React App](https://create-react-app.dev/).    

---

# Establishing Gatsby starter package

Now, when you know how Gatsby works, we can dive into the real stuff. For using Gatsby's commands in the terminal, we first need to install the Gatsby CLI:

```
npm install -g gatsby-cli
```

And for generating new Gatsby starter we can write following command:

```
gatsby new gatsby-blog
```

After installing all the files, you can go to the directory with `cd gatsby-blog`and start exploring the whole package. Unlike Create React App, Gatsby uses several specific commands and files, which you should be familiar with.

For example, to run the project locally on the developer server you can use `gatsby develop` which will run on port 8000 
by default.

**Note:** _Keep in mind, there might occur differences when code is functional in the development environment but throws 
an exception during building such as “_[_window is not defined_](https://www.gatsbyjs.org/docs/debugging-html-builds/)_.” Therefore the best prevention is to build the code before deploying to production._

You can build and simulate the production environment by the following command:

```
gatsby build && gatsby serve
```

Gatsby starts a local HTML server on the port 9000 for testing your built site.

#### Gatsby with GraphQL

Gatsby is using GraphQL for managing the data. It’s a query language that serves as an alternative to the REST API. The main difference is that with GraphQL you have all the data available and you can pick what you need using queries. I’ll not dive deeper into the further explanation, but you can [read about how GraphQL works on their website](https://graphql.org/learn/).

In Gatsby, you can access GraphQL and generate queries by visiting the following address:

```
http://localhost:8000/__graphql
```

# Exploring the package

Let’s focus a little bit more on particular files included in the package. During development, you’ll probably touch only the content inside `src` folder:

-   `components` folder is for storing individual React components. The `layout.js` is the most upper component in the tree structure. `seo.js` is for setting up SEO configuration in your project.
-   You can save all the images in `images` folder so they’ll be statically served.
-   In `pages` are saved all webpage templates. `index.js` is the first page that is shown if a user visits your website. 
-   `gatsby-browser.js`, `gatsby-config.js`, `gatsby-node.js` and `gatsby-ssr.js` have specific purposes in Gatsby, so let’s describe them one by one.

#### gatsby-browser.js

This file lets you respond to actions within the browser, and wrap your site in additional components. The [Gatsby Browser API](https://www.gatsbyjs.org/docs/browser-apis) gives you many options for interacting with the client-side of Gatsby.
For example, if you use a service worker for caching data, you can implement `onServiceWorkerUpdateReady` function to recognize a new version is out and update the content.

#### gatsby-config.js

This file defines your site’s metadata, plugins, and other general configuration. There are many [site configuration options](https://www.gatsbyjs.org/docs/gatsby-config) you can customize. In most cases, you will open this file if you install a new Gatsby plugin into your project. It’s always required to place all plugins in the `plugins` array.

One of the most important plugins is `gatsby-source-filesystem`, which gives us access to all queries inside the graphQL 
queries of our website. But more about that later in this story.

#### gatsby-node.js

The code in this file is run once in the process of building your site. You can use it to create pages dynamically, add nodes in GraphQL, or respond to events during the build lifecycle.

#### gatsby-ssr.js

The file `gatsby-ssr.js` lets you alter the content of static HTML files as they are being Server-Side Rendered (SSR) by 
Gatsby and Node.js.

---

# Initial configuration

Firstly, we need to update our folder structure. In `src`, let’s create 2 new folders:

-   `markdown-posts`, in which we will store all our future posts written in [Markdown language](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
-   `templates`, where we can store our template for each post because you definitely don’t want to create each time a new React component.

For testing purposes, we also need to create some posts. In my case, I created 2 new files in the `markdown-posts` folder. You can generate testing templates with [this generator](https://jaspervdj.be/lorem-markdownum/).

In these files, I also added frontmatter data `title`, `date` and `description`, which are similar to the metadata of each post. We will need them later.

Now, for generating webpages of each post, we need to convert those Markdown files into HTML. For that, we can install plugin `gatsby-transformer-remark`:

```
npm install gatsby-transformer-remark
```

As I said earlier, every plugin you install needs also to be added to `gatsby-config.js`. You can do that this way:      

<pre>
// gatsby-config.js
...
{
    resolve: \`gatsby-source-filesystem\`,
    options: {
        name: \`images\`,
        path: \`${\_\_dirname}/src/images\`,
    },
},
<b>`gatsby-transformer-remark`,</b>
`gatsby-transformer-sharp`,
...
</pre>

Now we’re ready to convert Markdown files into HTML, but we don’t have access to posts data in GraphQL yet. So in our `gatsby-config.js` we need to add these lines:

<pre>
<b>{
    resolve: \`gatsby-source-filesystem\`,
    options: {
        name: \`markdowns\`,
        path: \`${\_\_dirname}/src/markdown-posts\`,
    },
},</b>
`gatsby-transformer-remark`,
...
</pre>

---

# Index.js

This component is the first page, that will show when a user visits the website. In our case, here we want to show a list of all our posts and after clicking on the particular post, it will redirect to the full content.

You can wipe out the whole content of the default `index.js` and replace it with the following code:

`gist:Dromediansk/2e49aa1b468510f2de3e76d9926d0cb1#index.js`

Here are a few highlights you should notice:

-   Because Gatsby is using GraphQL, we’re pulling the required posts (nodes) data with the specific syntax (lines 27– 43). Nodes are accessible in `allMarkdownRemark.edges` and from each node we’re fetching all required data. Afterward, we have access to those data using props `data`.
-   You can generate the proper structure in `http://localhost:8000/__graphql`
-   The variable `posts` is an array of our nodes, which we’re mapping and showing in the view.
-   Each post is wrapped in `Link`, which we import from gatsby. It has prop `to={node.fields.slug}`, which is basically 
the URL of our node. We will get back to this later.

Now, the only thing we’re still missing are pages for each of our nodes.

# Creating URLs

Firstly, we need to be able to generate a URL of each node. In Gatsby, it is called a slug. We can create a slug for each node by writing a function in `gatsby-node.js`.

`gist:Dromediansk/6f1fe6e2a1d495f5050e8182b3922efc#gatsby-node.js`

If a new node is created, it will check if `MarkdownRemark` file is present in order to create a new URL. This URL is stored in GraphQL library as `slug` under `fields` property, so we can access it. You can read about this function in the [Node APIs documentation of Gatsby](https://www.gatsbyjs.org/docs/node-apis/#onCreateNode).

# Generating pages

Since we’re generating URLs, we should also generate individual HTML pages. In `gatsby-node.js`, let’s have a function `createPages` for this purpose:

`gist:Dromediansk/95ac92d16a80a95bedc6ebad378abd56#gatsby-node.js`

Here’s a brief description of what’s going on:

-   `createPages` is another [function in Node APIs](https://www.gatsbyjs.org/docs/node-apis/#createPages), which creates pages as soon as a generation of nodes and creation of the GraphQL schema are complete.
-   In variable `blogPostTemplate` we are storing the absolute path to the blog template `blog-post.js`, which we haven’t created yet.
-   In `posts` we are defining an array of objects with one property — slug. We will obtain it asynchronously from GraphQL.
-   We’re mapping through `posts` and calling action`createPage()`, which has parameters `path`, `component` and `context`. You can read the [full documentation of `createPage()`](https://www.gatsbyjs.org/docs/actions/#createPage).

# Creating a template for each node

I promise — this is the last step to have a functional blog website.

We need to have a template for our posts, which has the same structure and styling and it will differ only in the content. So let’s create a new React component `blog-post.js` in the `templates` folder.

`gist:Dromediansk/4a231d5fd22c46efaa0739639aa0af43#blog-post.js`

-   In this component, we’re fetching nodes with `markdownRemark` including `fields` with slug.
-   Also, we need a full HTML content, which is available in `html` query.
-   This component has 2 props: `data` from GraphQL and `pageContext`, from which we have access to slug.
-   The component returns the usual JSX content — you can code the structure as you like.
-   The whole content of each post is implemented here:

```
<div dangerouslySetInnerHTML={{ __html: post.html }} />
```

Although in React, it’s not recommended to use this technique, it’s safe in Gatsby because the content is statically served.

Our template is not pretty, but that is not a topic of this story. In Gatsby, you can install all familiar styling libraries such as styled-components, material UI, Bootstrap, etc. Feel free to customize it as you like. The options are unlimited.

You can check [the full GitHub repo here](https://github.com/Dromediansk/gatsby-blog-tutorial).

---

# Summary

And that’s it!

You have a fully functional blog website that generates URLs and pages on each new node. Of course, you can improve it in many ways.

But now you know how Gatsby really works. This framework is a great option in non-dynamic websites, in which a view isn’t changed so often and you can predict all possible requests. [React official documentation](https://reactjs.org/docs/getting-started.html) is an apt example.

Just keep in mind that static rendering is not the only option when setting up the project. It all depends on the project's purpose, goal, scale, and development team.

---

Thanks for reading!