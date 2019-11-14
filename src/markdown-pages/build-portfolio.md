---
title: "Engage employers by building your own professional webpage with these 4 principles"
author: "Miroslav Pillar"
date: "2019-10-11"
description: "You know some code or you have demanded skills, but still you don't have a clue how to connect with right steakholders? You are on the right place."
imageBanner: "../images/portfolio1.jpg"
---

&NewLine;

Creating personal portfolio page has never been easier than it is today. You will only need to have knowledge of HTML, CSS and primarily - _right sources_. The truth is these kind of pages have to give positive first impression about you, nothing else. If you have experience with some of the Javascript frameworks (React, Angular, etc..), it's certainly beneficial, but not required. 

If you look at the purpose of such project, it is mostly targeted on junior developers, who seek new job opportunities or who want to put online their résumé and make new social connections. **Though the biggest side-effect is that you will also practice coding skills, deployment process and lastly get basic knowledge in design and marketing.**

_I'd like to notify that following content is based on my own experience, which I obtained during creation of my personal portfolio page [miroslavpillar.com](https://www.miroslavpillar.com)._  Altough it's not perfect, I was trying to make it simple, responsive and at the same time - learn a bunch of new stuff. It was built with React, [Sass](https://sass-lang.com/) and [React Bootstrap](https://react-bootstrap.github.io/), which I highly recommend to use for this case. If you think you still don't have enough experience to build whole page, you can read my guide about [how to approach learning web development without science degree](https://blog.miroslavpillar.com/web-development-guide/).

### 1.principle - Purpose

Now you are thinking: _'Isn't the purpose already obvious?'_ Well, if you want to demonstrate yourself with modern website, you have to look into it more deeper. So try to ask yourself these questions:

- Whom is page adressed? Potential employers? Or another customers?
- What will be the main content? Your best projects? Your products or services? Or your life journey?

Feel free to take your time and clarify answers on these questions. Don't hesitate to take a note and write it down. It is crucial to demonstrate visitors, what is the page about.

### 2.principle - Theme design

As I mentioned above, the one of the requirements for high-quality page is to have right sources - to obtain inspiration, design ideas and assets. Let me break it to smaller pieces.

- It is necessary to have appropriate _**color theme**_. You can explore them [in this color palette from Adobe](https://color.adobe.com/explore).
- If you don't have artistic photos in your storage, you could use _**illustrations**_ from [Freellustrations](https://freellustrations.com/), [Iconscout](https://iconscout.com/paper-illustrations) or [Delesign](https://delesign.com/free-designs/graphics/).
- _**Animations**_. Trust me, people glad to visit fluid and nice-looking pages. They shouldn't be excessive or too many, so if you are beginner in this field, make them simple and lightweight. The less is sometimes more. You can code them in CSS or use one of the animation libraries - e.g. [Animate.css](https://daneden.github.io/animate.css/).
- You don't have to reinvent the wheel, therefore there is one more - and much simplier option using _**templates**_, which help to create website in just few hours. You can use [Startbootstrap](https://startbootstrap.com/themes/) or [Creative Tim](https://www.creative-tim.com/), but on the other hand it has its downside - you woun't experience mysterious behaviours of CSS.

### 3.principle - Technology and code structure

By choosing the most suitable technologies in the beginning, you can facilitate development and maintainability in the future. There isn't only one right programming language or library to choose tough. It also depends on your own knowledge and desire to learn.

Besides choosing right Javascript library or framework (React, Angular, Vue, etc.) you should also consider styling library. My most favourite are [Styled components](https://www.styled-components.com/), [Material UI for React](https://material-ui.com/) and [React-Bootstrap](https://react-bootstrap.github.io/).

In terms of CSS you can try preprocessor like Sass, which is far better and powerful than traditional CSS. For learning basic principles you can watch [this crash course about SASS](https://www.youtube.com/watch?v=roywYSEPSvc&t=1577s). Good knowledge of CSS and preprocessors like Sass or [Less](http://lesscss.org/) are also one of the most demanding skills of frontend developer.

### 4.principle - SEO

This is the last piece of puzzle and you should not underestimate it, because the more elaborated SEO will be, the more people will reach your website. But firstly, what is SEO indeed and why should you even care?

_**SEO**_ (search engine optimization) is used by search engines (Google, Bing, Yahoo) and includes techniques and methods to increase visibility of a website to users. Briefly said, search engines are using sophisticated algorithms, which go through database of documents (web pages) and search an entered word or phrase. _By using SEO you can get higher in search results and therefore more users will find your page._

#### Alright, but how can I improve SEO in my page?

It could be improved by putting _meta-tags_ into `<head></head>` section of the code. This section is the first element loaded even before rendering a whole content. You can explore meta-tags in [this](https://moz.com/blog/the-ultimate-guide-to-seo-meta-tags) great article. 

Example of using _description_ meta-tag:
```
<head>
    <meta
            name="Description"
            content="Portfolio website about projects, interests and skills. Author: Miroslav Pillar."
        />
</head>
```

Description is displayed below the title of the search result:
![miroslavpillar.com](./images/description_google_search.png)

