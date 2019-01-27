### **INTRODUCTION**

####  **The test.**

This front-end test was developed applying the following technologies and methodologies:

+ Javascript (ECMAScript2016)
+ ReactJS
+ React Router 
+ CSS
+ Sass
+ BEM
+ Mocha/Chai

![alt text](https://davidmles.com/wp-content/uploads/2017/02/html-css-js-768x427.png "technologies")

---

### **INSTRUCTIONS**

#### **RUN THE API**

For run, move to the test-api folder:

> $ cd test-api

Install the necessary dependencies:

> $ npm install

Finally, run the api:

> $ npm start

#### **RUN THE APP**

For run, move to the test-app folder:

> $ cd test-app

Install the necessary dependencies:

> $ npm install

Finally, run the api:

> $ npm start

#### **RUN THE TEST**

On the next folders (on app):

+ logic/index.js

You must switch the comment lines to unncoment, and the oposite.

Example on folder test-app/src/logic:
```javascript
//For run the app, uncomment this:
// export default logic

//For run the test, uncomment this:
module.exports = logic
```

Finally, run the test:

> $ npm test

---

### **TECHNICAL DESCRIPTION**

The application was built using ReactJS with create-react-app, and tested with mocha/chai. 

Styles was made using SASS and BEM.

### **AUTHOR**
Daniel Villegas Ortiz
