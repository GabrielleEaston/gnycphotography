<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

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
    - [Component Estimates](#Component-Estimates)
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

_**Personal Website to showcase collection of art work** Developed with Gatsby, GraphQl and Contentful CMS._

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

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

### Front End is completed with Gatsby

#### Wireframes

![Dummy Link](https://i.imgur.com/cwzxIdq.png)

- Desktop Landing

![Dummy Link](https://i.imgur.com/hmitBQ6.png)

- Desktop Hero

![Dummy Link](https://i.imgur.com/wkKFLzh.png)

- Resource Index

![Dummy Link](https://i.imgur.com/EZ8IAzM.png)

- Resource Show

![Dummy Link](https://i.imgur.com/VHuJCiV.png)

- Tablet Resource Index

![Dummy Link](https://i.imgur.com/58cP8rG.png)

- Mobile Resource Index

![Dummy Link](https://i.imgur.com/pegUtgw.png)

- Mobile Resource Index

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

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
      |__
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

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model.

#### Data Hierarchy

> Use this section to display the database, table, and attribute heirarchy.

```structure

database_db
|__ users/
|__ resources/
|__ posts/

```

#### Data Hierarchy

> Use this section to display the expected endpoints from your API.

<br>

### Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

---

> This section is not necessary for your pitch!

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
