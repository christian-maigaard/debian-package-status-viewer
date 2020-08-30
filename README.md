# Debian Package Status Viewer
A web interface for displaying packages and their dependencies in /var/lib/dpkg/status on Debian and Ubuntu systems. The web application is written in in React and Node.js. 

# Demo 

Live demo : https://debian-package-viewer.herokuapp.com/

![alt text](https://github.com/christian-maigaard/debian-package-status-viewer/blob/master/images/debian-package-viewer-demo.gif?raw=true)


# Installation

### Start server

Navigate to the server folder and Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

```bash
npm start
```

This will start up a node server that serves a built version of the React application, which will suffice for simply running the application locally. 

### Start React application

For development purposes, having a React application running is necessary.

To start up the React application, navigate to the client folder and use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

```bash
yarn start
```

# API Reference

### Get all packages

```http
GET /api/packages
```
returns a list of packages
```javascript
[
  {
    Package: string,
    Status: string,
    Priority: string,
    Section: string,
    Installed-Size: string,
    Maintainer: string,
    Architecture: string,
    Version: string,
    Depends: string,
    Suggests: string,
    Conffiles: string,
    Description: string,
    DesciptionSummary: string,
    Homepage:string,
    Original-Maintainer: string
  }
...
]
```

### Get package by package name

```http
GET /api/packages/:package
```

Returns the specificied package or a 404 Not Found, if the package is not listed.

PackageDependencies is a list of packages that the specified package is dependent on. It cotains all the packages listed in the Depends property along with isListed which signifies if the package is include the package list.

ReverseDependencies is a list of the reverse dependencies that is structured in a simmilar was as the PackageDependencies. 

```javascript
{
  Package: string,
  Status: string,
  Priority: string,
  Section: string,
  Installed-Size: string,
  Maintainer: string,
  Architecture: string,
  Version: string,
  Depends: string,
  Suggests: string,
  Conffiles: string,
  Description: string,
  DesciptionSummary: string,
  Homepage:string,
  Original-Maintainer: string,
  Dependencies: {
  PackageDependencies: [
    {
      Dependency: string,
      isListed: boolean
    },
    ...
    ],
    ReverseDependencies: [    
      {
        Dependency: string,
        isListed: boolean
      },
    ... 
    ],
  }
}



