# BITEX E-Commerce

## Full Stack E-Commerce Website (+ Dashboard) with Next.js 16: React, Typescript, Tailwindcss, Prisma, MongoDB, NextAuth, Redux

![Fullstack E-Commerce Website](https://res.cloudinary.com/drokemaoa/image/upload/v1709638892/bitexPoster.png)

## Overview

Bitex is a full-stack E-Commerce project developed with Next.js 16, featuring a range of technologies including React, Typescript, Tailwindcss, Prisma, MongoDB, NextAuth, and Redux.

⚠️ `Note:` This project is a personal endeavor created for portfolio purposes and is not associated with any real business or project.

---

## 🔗 Live Version

[https://bitex.namvar.dev](https://bitex.namvar.dev) ⤴️

---

### 🖥️ Admin Dashboard Features

#### 🔐 Authentication

- Credential authentication for Dashboard using NextAuth.

#### 📁 Category Management

- Advanced category management, including combining categories.
- Add, update, and delete categories and subcategories.
- Dedicated **specifications** for every category.

#### 🏭 Brands and Products

- Add and delete products with category-specific specifications.
- Add, update, and delete brands.

#### 📋 Traffic Report

- Reports on user page visits.

---

### 🛍️ E-Commerce Store Features

#### 🎨 UI Features

- Full responsiveness
- CSS animations and effects
- Skeleton loadings (without using external library )to have seamless page navigation experience.
- Custom made UI Components (no external library):

  - Price range slider
  - CheckBox
  - DropDownList
  - Popups
  - Button

- Interactive Homepage Slider

  - Crafted from scratch without using any Library
  - Supports both Mouse Drag and `TouchInput`

- Shopping cart management with **Redux**.
- Product gallery to showcase items attractively.
- Dynamically Loading Categories (List) from Database

#### 🔍 Filter and Sort

- Advanced filters products by Price, Brand, and Availability.
- Sorting options in product list page (sort by name and price).

#### ⚙️ Backend

- Interaction with MongoDB database using Prisma ORM.
- Database integration using MongoDB hosted on MongoDB Atlas.
- Server-side form data validation using ZOD.

## 🚀 Getting Started

### 💾 Cloning the repository

```shell
git clone https://github.com/HosseinNamvar/bitex.git
```

### 📥 Install packages

```shell
npm i
```

### 🛠️ Setup .env file

```js
DATABASE_URL=
NEXTAUTH_SECRET=
CLOUDINARY_URL= //Hosting address for products images
```

#### ⬆️ Setup Prisma

```shell
npx prisma db push

```

#### 🚀 Start the app

```shell
npm run dev
```
