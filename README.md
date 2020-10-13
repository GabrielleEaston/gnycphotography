<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

## 🎓 Gatsby

Gatsby is a blazing-fast static site generator for React. So you can get server side rendering automatically because of Gatsby.
A Gatsby site is also highly performant because it gives you client side code splitting and lazy loading of assets. This means that Gatsby gives the browser a complete page as a single file. Gatsby also performs prefetching. After a page is loaded, it fetches data for all the other pages that are linked on the loaded page. This makes user navigation extremely fast

GraphQL
Gatsby maintains an internal GraphQL data store. This internal data store is query-able via graphQL. During build Gatsby fetches data for each page and then bundles them up as individual pages.

Contentful CMS
Is content infrastructure. The platform lets you create, manage and distribute content to any platform. Unlike a CMS, we give you total freedom to create your own content model so you can decide which content you want to manage.

<!-- AUTO-GENERATED-CONTENT:END -->

# Personal Website for a local NYC Photographer <!-- omit in toc -->

- [Overview](#Overview)
  - [Core Features](#Core-Features)
  - [Team](#Team)
  - [Permissions](#Permissions)
- [MVP](#MVP)
  - [Front End](#Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
    - [Data Heirarchy](#Data-Heirarchy-1)
  - [Dependencies](#Dependencies)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

_**Personal Website to showcase collection of artwork** Developed with Gatsby, GraphQl and Contentful CMS._

### Core Features

_Being able to easily update the content once the development is completed._

- _Simple elegant design and modern user inteface to showcase photography collections._
- _Responsive._
- _Easy content updates._
- _Image optimization (reason for choosing Gatsby)._

### Team

Created, designed, and developed by [Gabrielle Easton](https://github.com/GabrielleEaston)

### Permissions

Digital assets used with full licensing and permission from [Personal Collection](), and [Unsplash]() for showcase purposes.

<br>

## MVP

_The **Gonzalo Cisterna's Photography** Developed with Gatsby, GraphQl and Contentful CMS._

### Front End is completed with Gatsby

#### Wireframes

![Dummy Link](https://i.imgur.com/cwzxIdq.png)

- Desktop Landing

![Dummy Link](https://i.imgur.com/hmitBQ6.png)

- Desktop Carousel

![Dummy Link](https://i.imgur.com/wkKFLzh.png)

- About page

![Dummy Link](https://i.imgur.com/EZ8IAzM.png)

- Contact

![Dummy Link](https://i.imgur.com/VHuJCiV.png)

- Success page after the form submission

![Dummy Link](https://i.imgur.com/2XXqE2F.png)

- Mobile Menu

![Dummy Link](https://i.imgur.com/v3LQxCj.png)

- Mobile View

#### Component Hierarchy

> Data architecture of the app.

```structure

src
|__ components/
      |__ Categories
      |__ Header
      |__ layout
      |__ Mobile-menu
      |__ seo
      |__ Sidebar
      |__ SingleImage
      |__ Thumbnail
      |__ Thumbnails
|__ images/
      |__ Gatsby-icon.svg
|__ pages/
      |__404
      |__about
      |__contact
      |__index
      |__success
|__templates/
      |__category-template
      |__photo-template

      gatsby-node created dynamically pages using templates

```

#### Component Breakdown

### Server (Back End) Contentful CMS

#### ERD Model

![Dummy Link](https://i.imgur.com/OMtPlYY.png)

#### Data Flow in an app

> Where the data gets fetched and how it flows

<br>

### Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|         Dependencies          | Description                                                  |
| :---------------------------: | :----------------------------------------------------------- |
|  gatsby-plugin-react-helmet   | _Meta data, SEO._                                            |
|   gatsby-transformer-sharp    | _Resizing, cropping, and creating responsive images._        |
|      gatsby-plugin-sharp      | _Helper plugin._                                             |
| gatsby-plugin-transition-link | _Provides a simple api expressive transitions between pages_ |
|    gatsby-plugin-manifest     | _The web app manifest._                                      |
|   gatsby-source-contentful    | _Contentful Space._                                          |
|          react-icons          | _Icons library._                                             |
|       react-masonry-css       | _Responsive Masonry._                                        |

<br>

---

## Post-MVP

-_Print Shop_

-_CSS Modules_

-_Cross Browser Testing_

-_Logo_

---

## Code Showcase

> Dynamically created pages in gatsby-node.js.

```
const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      categories: allContentfulGalleries {
        distinct(field: category)
      }

      images: allContentfulGalleries {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.categories.distinct.forEach(category => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
      },
    })
  })
  result.data.images.nodes.forEach(image => {
    createPage({
      path: `/${image.slug}`,
      component: path.resolve(`src/templates/photo-template.js`),
      context: {
        slug: image.slug,
      },
    })
  })
}
```

## Code Issues & Resolutions

> warning Nested block is redundant no-lone-blocks.

```
let links = []
  let currentIndex
  let prev
  let next
  {
    props.links
      .filter(link => link.category === props.photo.category)
      .map((filtered, index) => {
        return links.push(filtered.slug)
      })
  }
  currentIndex = links.indexOf(`${props.photo.slug}`)
  prev = links[currentIndex - 1]
  next = links[currentIndex + 1]
  let length = links.length
  if (currentIndex === length - 1) {
    next = links[0]
  } else if (currentIndex === 0) {
    prev = links[length - 1]
  }

```
