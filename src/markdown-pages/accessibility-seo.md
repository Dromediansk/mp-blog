---
title: "Get More Website Traffic: Guide to Increasing Your SEO Ranking"
author: "Miroslav Pillar"
date: "2019-12-05"
description: Handy guide how to enhance rating in Google and stand out from the crowd.
imageBanner: "../images/accessibility_SEO.jpg"
imageBannerAuthor: "Benjamin Dada"
imageBannerAuthorLink: "https://unsplash.com/@dadaben_"
imageBannerSource: "Unsplash"
imageBannerSourceLink: "https://unsplash.com/"
tags:
- SEO
- Accessibility
---

You’ve deployed a promising website, but Google doesn’t show it in search results at all. I know how you feel.

And if you don’t have many visitors, it’s like treasure lost in the desert.

The possible reason why search engines ignore your web is because of poor _web accessibility_ and _SEO_. These two aspects should not be underestimated when building a website in 2019, because the more elaborate they are, the more people are able to find and use your website.

Let me explain more in detail what you should know about accessibility and SEO when developing a modern website.

### Why does accessibility matter?

Web accessibility basically refers to **_making website usable for all people, regardless of their ability, education or technology._** Elements of the website are adjusted to be accessible for not just computers as it was in the past, but also for phones, tablets or assistive devices.

Keep in mind, that people with disabilities navigate and operate the web in different ways, depending on their individual preferences and needs. They could use **_assistive devices_** such as screen readers, screen enlargement applications, voice recognition programs, etc. How these devices operate on a website is explained later in this story.

If you are a web developer, I am sure you already heard about term **_web responsive design_**. With the proper use of HTML and CSS, it makes your website accessible for every screen size — phone, tablet, high-resolution retina displays, etc.

In 2019 it should be pretty natural to keep these aspects in mind during the project development.

#### What are the impacts?

The main impact is that **_your website is usable for a wider community, therefore you can reach higher traffic and obviously earn more money_**. Another side-effect is that by improving accessibility you also improve SEO, which we will discuss later in this article.

Such implementation costs more time and money of course. If you are saving costs, you probably don’t take accessibility and SEO as a priority, but in the long-term, it will pay off. Besides the impacts mentioned above, you also fulfill most of the requirements in **_digital marketing_**.

> “Best way to sell something: don’t sell anything. Earn the awareness, respect, and trust of those who might buy.”
> — Rand Fishkin

### How can I improve accessibility?

You can do it by implementing specific attributes to HTML tags. By using these attributes you mark tags, so devices mentioned earlier could recognize them and handle navigation on the website.

The desired attributes are `tabindex`, `aria-label`&nbsp;and `alt`.

#### Tabindex

This attribute improves **_keyboard accessibility_**.

Put simply: for a website to be accessible, it must work without the use of a mouse. This is because many assistive devices rely on keyboard-only navigation. As such, it must be possible to use all of your site’s major features via a keyboard and nothing else. This includes accessing all pages, links, content, and so on.

Who depends on this feature:

*   People with physical disabilities who cannot use the mouse
*   People who are blind, and cannot see the mouse pointer on the screen
*   People with chronic conditions, such as repetitive stress injuries (RSI), who should limit or avoid the use of a mouse.

Let me demonstrate an example, how to implement such a feature:

`gist:Dromediansk/bbba24f63e0b0369360daebeb78ea9dd#index.html`

If you test this using _Tab_ key on your keyboard, `<input>`&nbsp;tag is naturally tabbable, because of HTML standards. However, `<span>`&nbsp;and `<button>`&nbsp;are tabbable only because of `tabindex="0"`&nbsp;and `<div>`&nbsp;is not tabbable at all.

Avoid using `tabindex`&nbsp;with _positive_ values. Doing so makes it difficult for people who rely on assistive devices to navigate and operate page content. Instead, write the document with the elements in a logical sequence.

On the other hand, using _negative_ values usually means that element is not accessible via sequential keyboard navigation, but could be focused with Javascript or visually. It’s mostly useful to create accessible widgets with JavaScript.

#### ARIA

As [Google Developers](https://developers.google.com/web/fundamentals/accessibility/semantics-aria) says, Web Accessibility Initiative’s Accessible Rich Internet Applications specification (let’s stick just with ARIA) ‘_is good for bridging areas with accessibility issues that can’t be managed with native HTML. It works by allowing you to specify attributes that modify the way an element is translated into the accessibility tree._’

I know it sounds complicated. But trust me — it’s easier to understand than it looks like:

![Source: [Google developers](https://developers.google.com/web/fundamentals/accessibility/semantics-aria)](https://cdn-images-1.medium.com/max/800/1*hrSfg1bjjFAWA2cD1SRuHw.png)
Source: [Google developers](https://developers.google.com/web/fundamentals/accessibility/semantics-aria)

Using ARIA attributes, you can give the element the missing information so the screen reader can properly interpret it. So ARIA simply modifies existing element semantics or add semantics to elements where no native semantics exist (e.g. by screen readers).

Let me demonstrate it on a simple example using `aria-label`:

`<button aria-label="Close" onClick={handleClose()}>X</button>`

There are many [types of ARIA attributes](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships) you can explore, but the purpose is still the same — to help navigate assistive devices on the website.

#### **Alt**

This attribute is used in `<img />`&nbsp;tag as a backup, if a website is viewed on a device or mode, which does not support images, e.g. voice assistant when reading.

Example: `<img src="link-to-puppy-dog" alt="white puppy" />`

The second reason is that not everyone has a blazing-fast internet speed connection so in the meantime before loading image, alt text is displayed and the user immediately knows what is the image about.

### What should I know about SEO?

SEO refers to search engine optimization, which is used by search engines such as Google, Bing, etc. It includes techniques and methods to increase the visibility of your website in search results. It is also an important part of digital marketing  these days.

If you’re wondering how SEO works, here is a quick breakdown:

Search engines scan your website, looking at design and content elements to help them determine what type of topics your website discusses and how user-friendly the site is. This process is called _crawling_. It helps the search engine deliver more relevant and useful search results to its users.

As discussed earlier SEO is affected also by the state of accessibility. I would say, they overlap each other in many cases. However, the main benefit of good SEO is that your website receives a better Search Engine Results Page (SERP) ranking in search engines. It simply means **your** **site gets higher in search results if a user inputs phrases or keywords regarding the content of your website.**

> “The best place to hide a dead body is the second page of Google search.”
> — anonymous

#### **How can I actually improve SEO?**

Besides working on accessibility it can be improved by putting `<meta>`&nbsp;tags into the `<head>`&nbsp;section. They provide metadata about the HTML document. Metadata will not be displayed on the page but will be machine parsable.

Meta elements are typically used to specify page description, keywords, author of the document, last modified, and other metadata. They are used by browsers (how to display content), search engines (keywords), or other web services.

Here is the example of page description specification:
`gist:Dromediansk/96316b9dd9824a13fbedcb10698a7f87#index.html`

The description is displayed below the title of the search result and it’s instantly clear to the user, what is the page about:

![Description meta tag](https://cdn-images-1.medium.com/max/800/1*sv3hCVOJuMBjqyVpHtLBQg.png)

#### **The Open Graph meta tags**

Open Graph (OG) meta tags are a special type of metadata. Implementation of OG meta tags basically means that you can edit your link preview when you want to share your website on social media such as facebook, linkedIn, etc. This is great for marketing purposes as you certainly don’t want to share links with a blank image or poor description.

There are a couple of specific OG meta tags you can use:

`gist:Dromediansk/cb1866b4c8ea7eb0ec9d5b904bcf3286#index.html`

Let me break it down into smaller pieces:

*   `og-title`: The title of your shared link
*   `og-type`: The type of your object, e.g. video.movie, article, etc.
*   `og-url`: The canonical URL of your link
*   `og-image`: The URL of the image in the shared link
*   `og-image:secure_url`: An alternate URL to use if the webpage requires HTTPS

If you want to look at preview how would your sharing link look like you can try [Sharing Debugger](https://developers.facebook.com/tools/debug/sharing/) from Facebook. Just paste your link there and it will show you what is still missing. For LinkedIn, you can use [Post Inspector](https://www.linkedin.com/post-inspector/inspect/).

### **How do I know, when is it good enough?**

To test accessibility & SEO I highly recommend using [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) plugin, in which you see ratings in categories such as Performance, SEO, Accessibility and Best practices. It also gives you suggestions about what to improve. The only requirement is that the website must be deployed. Also, use it in the incognito mode of a web browser to not receive distorted results.

![Lighthouse report overview](https://cdn-images-1.medium.com/max/800/1*pyRXkGMnxuARpctCrIw0sQ.png)
Lighthouse report overview

However, today it is required to work efficiently, especially in web development. You can spend hours and days by improving accessibility, but everything costs time, effort and money. Also because the web development industry is dynamically evolving and accessibility standards are changing regularly, it is required to invest some time into maintenance.

Therefore **it is necessary to be able to decide, how much costs you are willing to spend on this topic.** That depends truly on you and your business.

_Thank you for reading and stay sharp!_

_Miroslav_