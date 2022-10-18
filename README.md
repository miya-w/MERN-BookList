# MERN-BookList (RESTful API)
### About this project
- Build a CRUD(Create, Read, Update, and Delete) app using web framework with MERN(MongoDB, ExpressJS, React, and NodeJS) stack.
- Connect Front-end application(React) with Backend application(Express, MongoDB, NodeJS).

![](https://github.com/miya-w/MERN-BookList/blob/main/img/Screen%20Shot%202022-10-05%20at%204.53.51%20pm.png)
### What is API
 > An application programming interface (API) [AWS](https://aws.amazon.com/what-is/restful-api/)

API is applications programming interface. it's a way for two computers to talk to each other.
for example, It's just like using a website in your browser to explicitly request data from a server.

### Restful API

> Representational State Transfer (REST）
RESTful API is an interface that two computer systems use to exchange information securely over the internet. Most business applications have to communicate with other internal and third-party applications to perform various tasks. [What is RESTful API? AWS](https://aws.amazon.com/what-is/restful-api/)

RESTful means they follow a set of rules or constraints known as a representational state transfer, which has been the de facto standard for API development since the early 2000s.

These are resources into a bunch of unique [URI or uniform resource]() identifiers that differentiate different types of data resources on a server and a client can get by the data by making a request to that endpoint over [HTTP requests](https://www.geeksforgeeks.org/different-kinds-of-http-requests/).

## Dependencies
- Node.js Official Guides for [https://nodejs.org/en/docs/][PlDb]
- Express framework
    - Example of an Express server
    - Routing for Express
- Node.js packages:
    - cors
    - body-parser
    - nodemon
    - mongoose

 1. Getting Start - SERVER
```
1. npm init -y
    -> this creates package.json file
    
2. npm install express mongoose cors nodemon body-parser
    -> this installs these packages
3. Create app.js file, this will contain all connection information

4. Create book.js in models folder this will create or fetch user

5. Start server -> node app.js

```

```
- nodemon
/ package.json -> restart the server whenever we change the code
 "scripts": {
   "test": "echo \"Error: no test specified\" && exit 1"
    "start": "nodemon index.js"
  },
```
2. Getting Start - CLIENT
```
//- React install
    1. npx create-react-app .
        Just like regular react project use this to create default react files
    node index.js
//- Start your new React app
    2. npm start

```
### JSON
- JSON stands for **JavaScript Object Notation**.
```javascript
response.json()
```
- To get JSON from the server using the Fetch API, you can use the **response.json() method**.
- The **response.json()** method reads the data returned by the server and returns **a promise that resolves with a JSON object**.
- [How do I fetch JSON from the server using Fetch API?](https://reqbin.com/code/javascript/wc3qbk0b/javascript-fetch-json-example)
- [Example-100JSprojects-QuoteGenerator](https://github.com/miya-w/100JsProjects/blob/main/01-L3-QuoteGenerator/script.js)
### Middle Ware
- body-parser[Body Parser In Express JS](https://www.simplilearn.com/tutorials/nodejs-tutorial/body-parser-in-express-js)
    - Express body-parser is an npm module used to process data sent in an HTTP request body.
    - Specifically in the context of a POST, PATCH, or PUT HTTP request where the information you want is contained in the body.
    - Using body-parser allows you to access **req.body** from within routes and use that data.
- CORS 
    - Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that  allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
    - CORS allows you to configure the web API's security. It has to do with allowing other domains to make requests against your web API. For example, if you had your web API on one server and your web app on another you could configure CORS in your Web API to allow your web app to make calls to your web API. [What does cors middleware do?](https://stackoverflow.com/questions/44379135/what-does-cors-middleware-do)


### Mongoose

- set up schema
- get post delete patch -> set up

```
\router\books
const router = express.Router();
```


## client side





---
### Resources
- [Medium- Restful API Design](https://medium.com/@rachna3singhal/restful-api-design-95b4a8630c26)
- [Red Hat - What is a REST API?](https://www.redhat.com/en/topics/api/what-is-a-rest-api)
- [wiki- 表現層狀態轉換](https://zh.wikipedia.org/zh-tw/%E8%A1%A8%E7%8E%B0%E5%B1%82%E7%8A%B6%E6%80%81%E8%BD%AC%E6%8D%A2)
- [今晚我想來點 Express 佐 MVC 分層架構](https://ithelp.ithome.com.tw/articles/10241083)
- [How not to use body-parser](https://medium.com/tds-note/how-not-to-use-body-parser-b93241ba2d6a)
- [IT邦 - node.js - express #4](https://ithelp.ithome.com.tw/articles/10189578)
- [Express ( Nodejs ) 取得 GET 、 POST 與 Routing 值](https://ithelp.ithome.com.tw/articles/10090909)
- [CodeAcademy - What is Node?](https://www.codecademy.com/article/what-is-node)
- [JavaScript fetch API - Why does response.json() return a promise object (instead of JSON)? [duplicate]](https://stackoverflow.com/questions/39435842/javascript-fetch-api-why-does-response-json-return-a-promise-object-instead)
- [How do I send requests using JavaScript Fetch API?](https://reqbin.com/code/javascript/ricgaie0/javascript-fetch-api-example)
- [How do I parse JSON in Javascript?](https://reqbin.com/code/javascript/vzx3pfwf/javascript-json-parse-example)
MongoDB
mernBookList
hsBWMo33z5IqtdQa

mongodb+srv://mernBookList:hsBWMo33z5IqtdQa@cluster0.1wy3joh.mongodb.net/?retryWrites=true&w=majority

Test 
{
    "title": "Harry Potter",
    "description": "Good Novel"
}
{
    "title": "Where the Crawdads Sing",
    "description": "Absolutely Devine"
}










