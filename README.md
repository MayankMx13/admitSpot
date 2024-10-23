# AdmitSpot Project

This is the AdmitSpot project built using **Next.js**, **TypeScript**, and **SCSS**. Below is an overview of how I approached the development of the project, including key decisions and steps taken.

## Approach

### 1. Identifying the Structure

- I began by identifying the structure of the webpage and its `div` layout.
- The goal was to create a design that worked well on both **desktop** and **mobile** devices, ensuring a smooth, responsive experience for all users.

### 2. Setting up Next.js

- I set up a **Next.js** project, leveraging its powerful framework for building React applications with server-side rendering and easy page routing.
- This setup provided a strong foundation for building dynamic and SEO-friendly pages.

### 3. Using Sass for Styling

- I chose **Sass** as the CSS preprocessor to help manage the styles efficiently.
- I employed a **mobile-first approach** to styling, ensuring that the website looked good on smaller screens and progressively enhanced for larger screens.
- A dedicated **responsive.scss** file was created to manage the media queries for various breakpoints, making sure the design adapts across different screen sizes.

### 4. Creating the Contact Module

- I built a contact module where users can tap on a specific div, triggering an overlay to cover the screen.
- The overlay displays the content of the contact module in a modal-like fashion, improving user engagement and interaction.

### 5. Implementing Form Validation

- A separate `validation.ts` file was created to handle form validation.
- This function ensures that user inputs (e.g., email, name, phone) are validated properly before submission, providing feedback to the user if any required fields are missing or incorrectly formatted.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: Typed JavaScript for improved developer experience and fewer runtime errors.
- **SCSS (Sass)**: A CSS preprocessor for managing styles and responsiveness efficiently.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/admitSpot.git
   ```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
