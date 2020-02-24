---
title: How to Use the position Property in CSS
author: "Miroslav Pillar"
date: "2020-02-24"
description: A basic principle of CSS layout demonstrated in simple examples with boxes.
imageBanner: "../images/position_property.jpg"
imageBannerAuthor: "Aleks Dorohovich"
imageBannerAuthorLink: "https://unsplash.com/@aleksdorohovich"
imageBannerSource: "Unsplash"
imageBannerSourceLink: "https://unsplash.com/"
tags:
- Guide
- CSS
---

In general, CSS isn’t popular among most developers and knowledge of CSS tends to be underestimated. That’s why there is a lot of frustration when styling elements.

It can be particularly tricky to style elements that have an ambiguous relation to other components in the DOM. In order to understand how CSS positioning works, you should get to know the basic principles.

The appropriate position of an element is case-dependent. You might want to move only a particular element with its children from the default position. In that case, it’s a good idea to use the `position` property.

---

# The position Property

This property helps to manipulate the location of the selected element. There are five different position values:

- `static`
- `relative`
- `fixed`
- `absolute`
- `sticky`

Now you should keep in mind that elements are then positioned using the `top`, `bottom`, `left`, and `right` properties. However, these properties will not work unless the `position` property is set first. How they behave also depends on position value, which is the most confusing part for developers.

Let’s master these values with simple examples.

---

# position: static

This value is set for all HTML elements by default. It means they are positioned according to the normal flow of the page.

Also, keep in mind that elements with the static position are not affected by the `top`, `bottom`, `left`, and `right` properties.

Now, let’s look at a simple example with one container and three boxes inside:

`gist:Dromediansk/eb75ab2385b7139e8315775c8d51e4a5#index.html`

And here is our CSS:

`gist:Dromediansk/0af9d3306ff5916cb3405ea6aba53fcc#style.css`

As stated above, `position: static` is set as a default value of each element. For this reason, it’s not necessary to add it to the CSS file. Boxes are stacked according to the normal flow.

![position: static](https://cdn-images-1.medium.com/max/2420/1*kT0mO_mRHq24rK4RZHdXQg.png)

---

# position: relative

An element with `position: relative` is positioned relative to its normal position.

Now, let’s try to position our yellow box next to the green boxes. It should look like this:

![position: relative](https://cdn-images-1.medium.com/max/2360/1*0uKH3H8vCNjG1aleZSf0yw.png)

Because we want to move the yellow box from its normal position, we have to adjust CSS in the following way:

```
.yellowBox {
  background: yellow;
  width: 300px;
  height: 150px;
  position: relative;
  top: 157px;
  left: 60px;
}
```

Try to play around with boxes and check out their behavior.

---

# position: fixed

An element with `position: fixed` is positioned relative to the viewport. This means it always stays in the same place even if the page is scrolled.

An important aspect to keep in mind is that the element is removed from the flow of the document, so it does not leave a gap on the page where it would normally have been located.

Let’s give a fixed position to our yellow box:

```
.yellowBox {
  background: yellow;
  width: 300px;
  height: 150px;
  position: fixed;
  right: 10px;
}
```

And here is the result:

![position: fixed](https://cdn-images-1.medium.com/max/2406/1*dz7w7UwUw0Hz9JN5O31g0g.png)

Now, if you scroll the page, the yellow box will stay in the viewport. As an example, this is how a website’s navbar should be used. Also, green boxes are stacked to the top because of the aspect mentioned earlier.

---

# position: absolute

An element with `position: absolute` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like `fixed`).

An element with`position: absolute` is removed from the flow of the document and other elements will behave as if it’s not even there while all the other positional properties will work on it.

Note: If an absolute-positioned element has no positioned ancestors, it uses the document body and moves along with page scrolling.

Now, let’s modify our example by moving one green box inside the yellow box.

`gist:Dromediansk/acf70e070be7f82a8f7488d8faacba7f#index.html`

And let’s assume the yellow box has `position: fixed` and `right: 10px`(same as in the example above).

What if we wanted to move the inner green box below the yellow box? At the same time, we’d like to not modify the HTML file.

We can do it with by giving `position: absolute` to the green box:

```
.greenBox {
  background: green;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: -70px;
  right: 0px;
}
```

If you scroll the page, both boxes will stay in the viewport.

---

# position: sticky

This value is rather experimental because it’s not supported in all browsers yet. An element with `position: sticky` is positioned based on the user's scroll position.

A sticky element toggles between `relative` and `fixed`, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport. Then it "sticks" in place (like `position: fixed`).

```
.greenBox {
  background: green;
  width: 50px;
  height: 50px;
  top: 5px;
  position: sticky;
}
```

---

# Space for Practice

Getting to know CSS can sometimes be very tricky and frustrating. The only way how to master the principles is by practicing. Write a lot of code, create simple projects, style elements as you wish.

If you’d like to sharpen your positioning skills, feel free to [play with the boxes](https://codepen.io/Dromedian_sk/pen/OJVbYVY).

Thanks for reading!
