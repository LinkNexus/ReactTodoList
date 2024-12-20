# ReactTodoList

A Todo list app for individuals amd teams with powerful functionalities for team work and organization.
This web-application uses Symfony, a popular PHP Framework for its base and core functionalities on the server side.
For the client side, it uses principally ReactJs and Tailwind, with the wonderful components from ShadCN UI.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Symfony Web Application** - Uses Symfony for dynamic rendering of the html content.
- **React Components** - Uses React for the easy DOM manipulation and fast rendering
- **Responsive Design** - Adapts to different screen sizes (desktop, tablet, mobile).
- **Minimalist Styling** - CSS-in-JS for a simple and clean look.

## Demo

Check out the live demo here: [Live Demo URL](#) (replace `#` with your live demo link if hosted).

---

## Getting Started

These instructions will guide you on how to set up and run the project locally.

### Prerequisites

- **Node.js** (version 16.x or above)
- **npm** (Node Package Manager)
- **Composer** (PHP Package Manager)
- **Maker Bundle** (For easy deployment)
- **Symfony CLI** (Optional)

### Installation

1. Clone the repository:
    ```bash
       git clone https://github.com/LinkNexus/ReactTodoList.git
    cd ReactTodoList
    ```
   
2. Create the .env.local file using the .env file as model
   ```bash
   cp .env .env.local
    ```
   
3. In the .env.local file, override necessary environment variables. In case you have no mailing services, you can use [mailpit](https://mailpit.axllent.org/docs/install/) which is very simple to use.
   ```bash
   MAILER_DSN=your mailer configuration
    ```
   - Using MySQL
   ```bash
   DATABASE_URL="mysql://{your username}:{your password}@127.0.0.1:3306/{your database name}?serverVersion=8.0.32&charset=utf8mb4"
    ```
   - Using MariaDB
   ```bash
   DATABASE_URL="mysql://{your username}:{your password}@127.0.0.1:3306/{your database name}?serverVersion=10.11.2-MariaDB&charset=utf8mb4"
    ```
   - Using PostgreSQL 
   ```bash
   DATABASE_URL="postgresql://{your username}:{your password}@127.0.0.1:5432/{your database name}?serverVersion=16&charset=utf8"
    ```

4. Create the database, migrations and modify the database
   - Using PHP
   ```bash
   mkdir migrations
   php bin/console make:migration
   php bin/console doctrine:migration:migrate
    ```
   - Using Symfony CLI
   ```bash
   mkdir migrations
   symfony console make:migration
   symfony console doctrine:migration:migrate
   ```
   
5. Install the dependencies:
    ```bash
    npm install
   composer install
    ```

6. Start the development server:
    ```bash
   php -S localhost:8000 -t public/
   npm run dev
    ```

7. Open your browser and visit [http://localhost:8000](http://localhost:8000) to see the blog.

---

## Usage

- **Styling**: The styling is made by tailwind. Many of the elements are made from ShadCN UI, hence just the modifying
the global css variables may help to change the styling to your wants.
- **Build for Production**: Run `npm run build` to create an optimized production build in the `build/` directory.

---
