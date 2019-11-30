---
title: "Improve accessibility & SEO in your website to reach bigger crowds"
author: "Miroslav Pillar"
date: "2019-11-24"
description: "Handy tips how to enhance rating in Google and stand out in search results."
imageBanner: "../images/google-search.jpg"
imageBannerAuthor: "Benjamin Dada"
imageBannerAuthorLink: "https://unsplash.com/@dadaben_"
imageBannerSource: "Unsplash"
imageBannerSourceLink: "https://unsplash.com/"
---
&NewLine;

Topics about accessibility and SEO should not be underestimated when building website in 2019, because the more elaborated they are, the more people are able to find and use your website. Let's discuss it more in detail what you should know when developing a modern website.

### Why does accessibility matter?

Accessibility basically refers to _making website usable for all people, regardless of their ability, education or technology_. Content of the website is adjusted to be accessible for not just computers as it was in the past, but also for phones, tablets or various _assistive devices_. Let me explain it more deeply.

If you are learning web development, I am sure you already heard about term **_web responsive design_**. With right use of HTML and CSS, it makes your website accessible for every screen size - phone, tablet, high-resolution retina displays etc. In 2019 it should be natural to count with it during development of a project.

Assistive devices help people with disabilities to use a website. It could be screen readers, screen enlargement applications, voice recognition programs, etc.

Such implementation costs more time (and money) during development. I know that if you are short on time, you don't take accessibility as priority, but in the long-term it will pay off and your marketing department will be also grateful to you. 

However, the main impact is, that _**your website is usable for more groups of people, therefore you can reach higher traffic**_.

Another side-effect is that by improving accessibility you also improve SEO, which we will discuss later in this article.

> “Website without visitors is like a ship lost in the horizon.”
> – Dr. Christopher Dayagdag

### How to improve website accessibility?

You can do it by implementing some particular HTML attributes to tags. By using these attributes you mark or describe tags for web browser, therefore e.g. devices mentioned earlier know, what these tags really mean.

The desired attributes are `tabindex`, `aria-label` and `alt`.

#### Tabindex

This attribute improves _keyboard accessibility_. Put simply: for a website to be accessible, it must work without the use of a mouse. This is because many assistive technologies rely on keyboard-only navigation. As such, it must be possible to use all of your site’s major features via a keyboard and nothing else. This includes accessing all pages, links, content, and so on.

_**How do I actually test keyboard accessibility?**_ <br>
Simply use your webpage without a mouse. If you find that you can’t access certain elements or that navigating is difficult, you can pinpoint those issues and address them. To help you out with this, WebAIM provides a handy [guide for keyboard accessibility design](https://webaim.org/techniques/keyboard/).

#### Aria-label

This attribute is mostly used by assistive devices to attach a label to an otherwise anonymous HTML element.

Example: 
`<button aria-label="Close" onclick="myDialog.close()">X</button>`

Feel free to [explore more options of ARIA](https://developers.google.com/web/fundamentals/accessibility/semantics-aria).

#### Alt

This attribute is used in `<img />` tag as a backup, if a webpage is viewed on a device or mode, which does not support images, e.g. voice assisstant when reading. 

The second reason is that not everyone has blazing-fast internet speed connection so in the meantime before loading image, alt text is displayed, so user immediatly knows, what is the image about.

***

### SEO

SEO refers to search engine optimization, which is used by search engines like Google, Bing, etc. It includes techniques and methods to increase visibility of your website in the search results. 

If you’re wondering how it works, here is a quick breakdown: 

Search engines scan your website, looking at design and content elements to help them determine what type of topics your website discusses and how user-friendly the site is. This process is called _crawling_. It helps the search engine deliver more relevant and useful search results to its users.



_**How can I actually improve SEO in my page?**_<br>
It can be improved by putting _meta-tags_ into `<head></head>` section of the code. This section is the first element loaded even before rendering a whole content. 

Example of using _description_ meta-tag in my website:
```
<head>
    <meta
            name="Description"
            content="Portfolio website about projects, interests and skills. Author: Miroslav Pillar."
        />
</head>
```
Description is displayed below the title of the search result and it's instantly clear to user, what is the page about.

You can explore meta-tags more in [this](https://moz.com/blog/the-ultimate-guide-to-seo-meta-tags) great article. 

_**How do I know, when is it good enough?**_<br>
For that I highly recommend using [Lighthouse as Google Chrome plugin](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk), in which you see ratings in categories Performance, SEO, Accessibility and Best practices. It also gives you suggestions what to improve. The only requirement is that website must be deployed. Also use it in incognito mode of web browser to not receive distorted results.

If you prefer web-based accessibility evaluation tool you can try [achecker](https://achecker.ca/checker/index.php).

Feel free to visit my website [miroslavpillar.com](https://miroslavpillar.com) or jump right now into my previous article [how to learn web development without science degree](https://medium.com/@pillinho/guide-to-web-development-or-how-to-approach-learning-without-computer-science-degree-923cb51bf943).

Thank you for reading and stay sharp!

Miroslav



