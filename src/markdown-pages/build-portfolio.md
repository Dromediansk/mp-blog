---
title: "Engage visitors by building professional-looking webpage with these 4 principles"
author: "Miroslav Pillar"
date: "2019-11-16"
description: "Handy tips how to build professional webpage and not blend with the crowd."
imageBanner: "../images/portfolio1.jpg"
---
<span style="color:grey; font-size: 15px; display: block; text-align: center;">Photo by [Lauren Mancke](https://unsplash.com/@laurenmancke) on [Unsplash](https://unsplash.com/)</span>
&NewLine;

Truth is that building a website has never been easier than it is today. You need to know basics of HTML and CSS and that's it. The bigger challenge though, is to create modern professional-looking site, which attract attention on glimpse, has high-quality content and is accessible for search engines or any mobile device. If you want that to accomplish, you're on the right place. 

_First things first - who am I?_<br>
I`d like to shortly introduce myself so you have basic overview about me as an author of this article:

I am full-time Javascript software developer in a German consulting company, which brings modern solutions (mostly in banking sector) in terms of software development. Altough I don't have a computer science degree I am self-taught developer willing to always learn. Feel free to visit my website [miroslavpillar.com](https://miroslavpillar.com/) to read about my motivation and recent projects. You can also jump into [article, how to learn web development without science degree](https://blog.miroslavpillar.com/web-development-guide/), which is based on true story.

I would divide quality of the page into 4 main principles you should observe: _meaningful content, design, technology_ and _accessibility_.

### 1.principle - Meaningful content

If you want to demonstrate your _product_ with modern good-looking website, you must dive into it more deeper. By term product I mean simply anything you are trying to show or promote in your webpage - it could be your services, goods, personal portfolio, life journey etc.

When making content try to ask yourself these questions:

- _Who are your [stakeholders](https://www.investopedia.com/terms/s/stakeholder.asp)?_ 
- _Who are your potential visitors? Head hunters? Clients? Or general public?_
- _What are you trying to sell? Your best projects? Your products or services? Or your life journey?_

Feel free to take your time and clarify answers on these questions. Don't hesitate to take a note and write it down. It is crucial to clearly demonstrate visitors, what is the page about.

### 2.principle - Design

The one of the requirements for building high-quality site is to have right sources - to obtain assets, design ideas and inspiration. Let me break it to smaller pieces.

- It is necessary to have appropriate _**color theme**_. You can explore and choose one [in this color palette from Adobe](https://color.adobe.com/explore). Be aware of sufficient contrast between background and texts to keep principles of accessibility. But more about that later in this article.
- If you don't have artistic _**images**_ in your storage, you could use illustrations from [Freellustrations](https://freellustrations.com/), [Iconscout](https://iconscout.com/paper-illustrations) or [Delesign](https://delesign.com/free-designs/graphics/). If you want to use high-resolution photos I recommend searching in [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/) or [Pixabay](https://thenextscoop.com/websites-download-free-quality-images/), which are free of use.
- _**Animations**_. Trust me, people glad to visit fluid and nice-looking pages (with good content, of course). They shouldn't be excessive or too many, so if you are beginner in this field, make them simple and lightweight. The less is sometimes more. You can code them in pure CSS or use one of the animation libraries - e.g. [Animate.css](https://daneden.github.io/animate.css/).
- You don't have to reinvent the wheel, therefore there is one more - and much simplier option using _**templates**_, which help to create website in just few hours. You can use [Startbootstrap](https://startbootstrap.com/themes/) or [Creative Tim](https://www.creative-tim.com/), but on the other hand it has its downside - you will not experience mysterious behaviours of CSS.

### 3.principle - Technology & tools

By choosing the most suitable technologies in the beginning, you can facilitate development and maintainability in the future. There isn't only one right programming language or library to choose tough. It also depends on your own knowledge and desire to learn.

Besides choosing right Javascript library or framework (React, Angular, Vue, etc.) you should also consider styling library. My most favourite are [Styled components](https://www.styled-components.com/), [Material UI for React](https://material-ui.com/) and [React-Bootstrap](https://react-bootstrap.github.io/).

In terms of using CSS you can try preprocessors like Sass or Less, which are far better and powerful than traditional CSS. For learning basic principles you can watch [this crash course about SASS](https://www.youtube.com/watch?v=roywYSEPSvc&t=1577s). Good knowledge of CSS and preprocessors are also one of the most demanding skills of frontend developer.

### 4.principle - Accessibility

This is the last piece of puzzle and you should not underestimate it, because the more elaborated accessibility of the page will be, the more people will reach your website. 

But firstly, what does accessibility consist of and how you could improve it? I would divide accesibility into 2 main parts: _SEO_ and _content captions_.

_**SEO**_ (search engine optimization) is used by search engines (Google, Bing, Yahoo, etc.) and includes techniques and methods to increase visibility of a website to users. Technically said, search engines are using sophisticated algorithms, which go through database of documents (web pages) and search an entered word or phrase. _By using SEO you can gain better rating, get higher in search results and therefore more users will find your page._

_**Alright, but how can I improve SEO in my page?**_<br>
It can be improved by putting _meta-tags_ into `<head></head>` section of the code. This section is the first element loaded even before rendering a whole content. You can explore meta-tags in [this](https://moz.com/blog/the-ultimate-guide-to-seo-meta-tags) great article. 

Example of using _description_ meta-tag:
```
<head>
    <meta
            name="Description"
            content="Portfolio website about projects, interests and skills. Author: Miroslav Pillar."
        />
</head>
```
Description is displayed below the title of the search result and it's instantly clear to user, what is the page about.

I call second part _**content captions**_, because it includes  few attributes, which mark particular HTML tags and therefore improve accessibility of the whole page. The most used attributes are `aria-label`, `alt` and `tabindex`.

_**Aria-label**_ is an attribute designed to help [assistive technology](https://en.wikipedia.org/wiki/Assistive_technology) (e.g. screen readers) attach a label to an otherwise anonymous HTML element.

Example: `<button aria-label="Close" onclick="myDialog.close()">X</button>`<br>

Feel free to [explore more options of ARIA](https://developers.google.com/web/fundamentals/accessibility/semantics-aria).

_**Alt**_ attribute is used in `<img />` tag as a backup, if webpage is viewed on a device or mode, which does not support images (e.g. voice assisstant in reading). Also not everyone has blazing-fast internet speed connection so in the meantime before loading image, text in alt attribute is displayed.

_**Tabindex**_ improves _keyboard accessibility_. Put simply: for a website to be accessible, it must work without the use of a mouse. This is because many assistive technologies rely on keyboard-only navigation. As such, it must be possible to use all of your site’s major features via a keyboard and nothing else. This includes accessing all pages, links, content, and so on.

_**How to actually test keyboard accessibility?**_ <br>
Simply use your webpage without a mouse. If you find that you can’t access certain elements or that navigating is difficult, you can pinpoint those issues and address them. To help you out with this, WebAIM provides a handy [guide for keyboard accessibility design](https://webaim.org/techniques/keyboard/).

I believe these 4 principles are key to have better more-accessible website, which would be easy to maintain and also would bring you greater success in your journey.

Thank you for reading and stay sharp!

Miroslav



