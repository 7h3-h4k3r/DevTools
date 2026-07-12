# DevTools - Learning Grunt

This repository contains my notes and practice project while learning **Grunt.js**, a JavaScript task runner used to automate repetitive development tasks.

## What I'm Learning

* Concatenating JavaScript and CSS files
* Minifying CSS
* Minifying JavaScript using Uglify
* Copying project dependencies
* JavaScript obfuscation
* Watching files for automatic builds
* Automating the frontend development workflow

## Technologies

* Node.js
* npm
* Grunt
* Bower
* JavaScript
* CSS

## Installation

Initialize a Node.js project:

```bash
npm init
```

Install Grunt:

```bash
npm install grunt --save-dev
```

Install Grunt plugins:

```bash
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-copy --save-dev
npm install grunt-contrib-obfuscator-4 --save-dev
npm install javascript-obfuscator --save-dev
```

Install Bower:

```bash
npm install -g bower
```

Install jQuery:

```bash
bower install jquery
```

## Running the Project

Run all configured Grunt tasks:

```bash
grunt
```

Or run specific tasks:

```bash
grunt concat
grunt cssmin
grunt uglify
grunt copy
grunt obfuscator
grunt watch
```

## Goals

This repository is part of my journey to learn build automation tools and improve my frontend development workflow. As I continue learning, I'll add more Grunt plugins, optimization techniques, and best practices.

Contributions, suggestions, and feedback are always welcome.
