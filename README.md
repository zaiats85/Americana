React Redux Saga + React Connected Router basic Template.
Ready for development out of the box

1) Packages used
 - "autoprefixer": "7.1.6"
    PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Taobao.
    
 - "babel-core": "6.26.0",
    Babel compiler core.
    
 - "babel-eslint": "7.2.3",
    babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint.
    
 - "babel-jest": "20.0.3",
    Testing 
    
 - "babel-loader": "7.1.2",
    This package allows transpiling JavaScript files using Babel and webpack.
    
 - "babel-preset-react-app": "^3.1.1",
    This package includes the Babel preset used by Create React App.

 - "babel-runtime": "6.26.0",
    @babel/runtime is a library that contain's Babel modular runtime helpers and a version of regenerator-runtime.
     
 - "case-sensitive-paths-webpack-plugin": "2.1.1",
    This Webpack plugin enforces the entire path of all required modules match the exact case of the actual path on disk. 
    Using this plugin helps alleviate cases where developers working on OSX, which does not follow strict path case sensitivity, 
    will cause conflicts with other developers or build boxes running other operating systems which require correctly cased paths. 
 
 - "chalk": "1.1.3",
    Terminal string styling done right (colors)
    
 - "connected-react-router": "^4.4.1",
    A Redux binding for React Router v4
    
 - "css-loader": "0.28.7",
    The css-loader interprets @import and url() like import/require() and will resolve them.
 
 - "dotenv": "4.0.0",
    Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. 
    Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
 
 - "dotenv-expand": "4.2.0",
 
    **************** EXAMPLES ******************
    NODE_ENV=test
    BASIC=basic
    BASIC_EXPAND=$BASIC
    MACHINE=machine_env
    MACHINE_EXPAND=$MACHINE
    UNDEFINED_EXPAND=$UNDEFINED_ENV_KEY
    ESCAPED_EXPAND=\$ESCAPED
    MONGOLAB_DATABASE=heroku_db
    MONGOLAB_USER=username
    MONGOLAB_PASSWORD=password
    MONGOLAB_DOMAIN=abcd1234.mongolab.com
    MONGOLAB_PORT=12345
    MONGOLAB_URI=mongodb://${MONGOLAB_USER}:${MONGOLAB_PASSWORD}@${MONGOLAB_DOMAIN}:${MONGOLAB_PORT}/${MONGOLAB_DATABASE}
    
    MONGOLAB_USER_RECURSIVELY=${MONGOLAB_USER}:${MONGOLAB_PASSWORD}
    MONGOLAB_URI_RECURSIVELY=mongodb://${MONGOLAB_USER_RECURSIVELY}@${MONGOLAB_DOMAIN}:${MONGOLAB_PORT}/${MONGOLAB_DATABASE}
    
    WITHOUT_CURLY_BRACES_URI=mongodb://$MONGOLAB_USER:$MONGOLAB_PASSWORD@$MONGOLAB_DOMAIN:$MONGOLAB_PORT/$MONGOLAB_DATABASE
    WITHOUT_CURLY_BRACES_USER_RECURSIVELY=$MONGOLAB_USER:$MONGOLAB_PASSWORD
    WITHOUT_CURLY_BRACES_URI_RECURSIVELY=mongodb://$MONGOLAB_USER_RECURSIVELY@$MONGOLAB_DOMAIN:$MONGOLAB_PORT/$MONGOLAB_DATABASE
 
 - "eslint": "4.10.0",
    ESLint is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable 
    linting utility for JavaScript.
    
 - "eslint-config-react-app": "^2.1.0",
    This package includes the shareable ESLint configuration used by Create React App.

 - "eslint-loader": "1.9.0",
    eslint loader for webpack
    
 - "eslint-plugin-flowtype": "2.39.1",
    Flow type linting rules for ESLint.
 
 - "eslint-plugin-import": "2.8.0",
    This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file 
    paths and import names. All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor.
 
 - "eslint-plugin-jsx-a11y": "5.1.1",
    Static AST checker for accessibility rules on JSX elements.
 
 - "eslint-plugin-react": "7.4.0",
    React specific linting rules for ESLint
     
 - "extract-text-webpack-plugin": "3.0.2",
    Extract text from a bundle, or bundles, into a separate file.

 - "file-loader": "1.1.5",
    A file loader module for webpack
 
 - "fs-extra": "3.0.1",
    fs-extra adds file system methods that aren't included in the native fs module and adds promise support to the fs methods. 
    It also uses graceful-fs to prevent EMFILE errors. It should be a drop in replacement for fs.
 
 - "history": "^4.7.2",
    history is a JavaScript library that lets you easily manage session history anywhere JavaScript runs. history abstracts away the 
    differences in various environments and provides a minimal API that lets you manage the history stack, navigate, confirm navigation, 
    and persist state between sessions.
 
 - "html-webpack-plugin": "2.29.0",
    This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack 
    bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, 
    supply your own template using lodash templates or use your own loader.    
 
 - "jest": "20.0.4",
    Zero configuration testing platform
 
 - "object-assign": "4.1.1",
    ES2015 Object.assign PONYfill
 
 - "postcss-flexbugs-fixes": "3.2.0",
    PostCSS plugin This project tries to fix all of flexbug's issues.
 
 - "postcss-loader": "2.0.8",
    Loader for webpack to process CSS with PostCSS
     
 - "promise": "8.0.1",
    This is a simple implementation of Promises. It is a super set of ES6 Promises designed to have readable, 
    performant code and to provide just the extensions that are absolutely necessary for using promises today.
 
 - "raf": "3.4.0",
    requestAnimationFrame polyfill for node and the browser.
    
 - "react": "^16.4.2",
    React is a JavaScript library for creating user interfaces. CORE
    
 - "react-dev-utils": "^5.0.1",
    These utilities come by default with Create React App, which includes it by default. You don’t need to 
    install it separately in Create React App projects.
    
 - "react-dom": "^16.4.2",
    This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired 
    with the generic React package, which is shipped as react to npm.   
 
 - "react-redux": "^5.0.7",
    This assumes that you’re using npm package manager with a module bundler like Webpack or Browserify to consume CommonJS modules.
    If you don’t yet use npm or a modern module bundler, and would rather prefer a single-file UMD build that makes ReactRedux available 
    as a global object, you can grab a pre-built version from cdnjs. We don’t recommend this approach for any serious application, as most 
    of the libraries complementary to Redux are only available on npm.
 
 - "react-router": "^4.3.1",
    Declarative routing for React.
 
 - "redux": "^4.0.0",
    Redux is a predictable state container for JavaScript apps.
    (Not to be confused with a WordPress framework – Redux Framework.)
    It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
    You can use Redux together with React, or with any other view library.
    It is tiny (2kB, including dependencies). 
     
 - "redux-persist": "^5.10.0",
    Persist and rehydrate a redux store.
 
 - "redux-saga": "^0.16.0",
    redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, simple to test, and better at handling failures.
    The mental model is that a saga is like a separate thread in your application that's solely responsible for side effects. redux-saga is a redux middleware, which means this thread can be started, paused and cancelled from the main application with normal redux actions, it has access to the full redux application state and it can dispatch redux actions as well.
    It uses an ES6 feature called Generators to make those asynchronous flows easy to read, write and test. (if you're not familiar with them here are some introductory links) By doing so, these asynchronous flows look like your standard synchronous JavaScript code. (kind of like async/await, but generators have a few more awesome features we need)
    You might've used redux-thunk before to handle your data fetching. Contrary to redux thunk, you don't end up in callback hell, you can test your asynchronous flows easily and your actions stay pure.
    
 - "resolve": "1.6.0",
    implements the node require.resolve() algorithm such that you can require.resolve() on behalf of a file asynchronously and synchronously
 
 - "style-loader": "0.19.0",
   Adds CSS to the DOM by injecting a <style> tag
  
 - "sw-precache-webpack-plugin": "0.11.4",
   SWPrecacheWebpackPlugin is a webpack plugin for using service workers to cache your external project dependencies.
   It will generate a service worker file using sw-precache and add it to your build directory.
    
 - "url-loader": "0.6.2",
    A loader for webpack which transforms files into base64 URIs.
 
 - "webpack": "3.8.1",
    webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, 
    bundling, or packaging just about any resource or asset
    
 - "webpack-dev-server": "2.9.4",
    Use webpack with a development server that provides live reloading. This should be used for development on ly.
    It uses webpack-dev-middleware under the hood, which provides fast in-memory access to the webpack assets.
    
 - "webpack-manifest-plugin": "1.3.2",
    Webpack plugin for generating an asset manifest.
    In your webpack.config.js
    
    var ManifestPlugin = require('webpack-manifest-plugin');
    
    module.exports = {
        // ...
        plugins: [
          new ManifestPlugin()
        ]
    };
    This will generate a manifest.json file in your root output directory with a mapping of all source file names to their corresponding output file, for example:
    
    {
      "mods/alpha.js": "mods/alpha.1234567890.js",
      "mods/omega.js": "mods/omega.0987654321.js"
    }
 
 - "whatwg-fetch": "2.0.3"
    The fetch() function is a Promise-based mechanism for programmatically making web requests in the browser. 
    This project is a polyfill that implements a subset of the standard Fetch specification, enough to make fetch a 
    viable replacement for most uses of XMLHttpRequest in traditional web applications.