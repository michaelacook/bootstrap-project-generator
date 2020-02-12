# Bootstrap Project Generator 
A simple commandline tool to generate a basic html bootstrap project with some basic boilerplate. It is perfect for small projects where you want to demo an idea, build a simple prototype, etc. Comes complete with a basic header navbar and sticky footer.

## Project contents 
Directory structure:

```
.
├── css
│   └── custom.css
├── index.html
└── js
    └── app.js
```

Bootstrap Project Generator sets up the bare basic HTML, CSS and JavaScript files and folders and writes basic boilerplate to get you up and running with a header navbar and sticky footer. `index.html` contains the Bootstrap CDN links, links to other generated files. 

## Installing 
To install, run:

```
$ npm install bootstrap-project-generator -g
```

or clone the repo to your preferred location: 

```$ git clone https://github.com/michaelacook/bootstrap-project-generator.git```

Next change into the root directory of the repo. Then run:

```$ npm install -g```

## Setting up a project 
To set up a project, create the root directory for your project and inside your project folder run

```$ 
$ bootstrap-project-generator
```

...and you're done! 

## License
This project is licensed under the MIT license. Do whatever you feel like with it :).