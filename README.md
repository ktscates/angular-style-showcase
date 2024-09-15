# Angular Style Showcase

## Project Description

This project is a simple Angular application designed to demonstrate proficiency with the Angular CLI, component-based architecture, and advanced SCSS preprocessing techniques. The application includes a responsive layout, theme switching between light and dark modes, and various SCSS features such as variables, mixins, and functions. It also showcases lazy loading for optimized module loading and routing.

## Getting Started

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ktscates/angular-style-showcase.git
   cd angular-style-showcase
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

### Running the App

    ```bash
    ng serve
    ```
    Open your browser and navigate to `http://localhost:4200/`.

## SCSS Architecture and Features

### Variables

SCSS variables are used to manage colors, fonts, and spacing for consistency throughout the application. They are stored in a variables.scss partial.

### Nesting

SCSS nesting is used to organize component-specific styles, providing better readability and structure. For example, styles for buttons or navigation elements are nested within their parent selectors.

### Mixins

Custom SCSS mixins are created for reusable style patterns such as flexbox layouts and button styles. This allows for the DRY principle (Don't Repeat Yourself) and ensures consistency across components.

### Functions

A custom SCSS function is used to calculate responsive sizes, such as converting px to rem values dynamically for fluid typography and layout.

## Theming System

The application features a light and dark theme system implemented using SCSS. Users can toggle between themes, and the styles are dynamically applied using SCSS variables and theme-based mixins.

## Lazy Loading

The project implements lazy loading for one of the modules to optimize loading times and improve performance. This feature ensures that only necessary code is loaded on demand, reducing the initial load size.

## Responsive Design

The application is fully responsive, with a layout that adapts to different screen sizes, ensuring a smooth user experience on both desktop and mobile devices.

## Live Link

You can access the deployed application at [Angular Style Showcase](https://ktscates-angular-style-showcase.netlify.app/).
