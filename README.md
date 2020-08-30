# Debian Package Status Viewer
A web interface for displaying packages and their dependencies in /var/lib/dpkg/status on Debian and Ubuntu systems

Live demo : https://debian-package-viewer.herokuapp.com/

# Installation

Navigate to the server folder and Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

```bash
npm start
```

This will start up a node server that serves a built version of the React application, which will suffice for running the application locally. 

For development purposes, having a React application running is necessary.

To start up the React application, navigate to the client folder and use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

```bash
yarn start
```

# Tech/framework used 
React and Node.js with Express

# API Reference

Get all packages

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
}
```


```http
GET /api/packages/:package
```


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
      isListed: true
    },
    ...
    ],
    ReverseDependencies: [    
      {
        Dependency: string,
        isListed: true
      },
    ... 
    ],
    UnlistedDependencies: [ 
     {
      Dependency: string,
      isListed: true
    },
    ...
    ]
  }
}
´´´



