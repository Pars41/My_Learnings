<div align=center>
	<h1>Portfolio Project</h1>
</div>

<div align="center">
	<a href="https://portfolio-project-ehkarabas.netlify.app/">
		<img src="https://img.shields.io/badge/live-%23.svg?&style=for-the-badge&logo=www&logoColor=white%22&color=black">
	</a>
	<br>
	<img src="./public/images/portfolio-project-presentation.gif"/>
</div>

## Description

Simple React app hosting four paged portfolio website design with SASS and React Router.

## Goals

Practicing on components, props, bootstrap, SASS, external styling, React Router.

## Installation

To run this app on your local, run commands below on the terminal:

1. Clone main repo on your local.
    ```shell
    $ git clone https://github.com/ehkarabas/react-exercises.git
    ```

2. Install node modules to this sub-repo.
    ```shell
    $ yarn install
    
    or

    $ npm install
    ```

3. Run the app on your browser.
    ```shell
    $ yarn start
    
    or

    $ npm start
    ```

## Resource Structure 

```
portfolio-project(folder)
|
|-- README.md
|-- package.json
|-- public
|   |-- images
|   |   |-- portfolio-project-presentation.gif
|   |-- index.html
|-- src
|   |-- App.js
|   |-- app.scss
|   |-- assets
|   |   |-- img
|   |       |-- model-1.png
|   |       |-- project-1.png
|   |       |-- project-2.png
|   |       |-- project-3.png
|   |       |-- project-4.png
|   |       |-- project-5.png
|   |       |-- project-6.png
|   |-- components
|   |   |-- Error
|   |   |   |-- NotFound.jsx
|   |   |   |-- notFound.scss
|   |   |-- Footer
|   |   |   |-- Footer.jsx
|   |   |   |-- footer.scss
|   |   |-- Navbar
|   |   |   |-- Navbar.jsx
|   |   |   |-- navbar.scss
|   |   |-- ProjectCards.jsx
|   |-- helper
|   |   |-- imageData.js
|   |-- index.css
|   |-- index.js
|   |-- pages
|   |   |-- about
|   |   |   |-- About.jsx
|   |   |   |-- about.scss
|   |   |-- contact
|   |   |   |-- Contact.jsx
|   |   |   |-- contact.scss
|   |   |-- home
|   |   |   |-- Home.jsx
|   |   |   |-- home.scss
|   |   |-- projects
|   |       |-- Projects.jsx
|   |       |-- projects.scss
|   |-- router
|   |   |-- Router.js
|   |-- scss
|       |-- _mixins.scss
|       |-- _reset.scss
|       |-- _variables.scss
|-- yarn.lock
```


