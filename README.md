# token.ts

Simple token system for typescript

Install token.ts
```bat
npm i token.ts
```

Creating a token
```js
const mytoken = new TokenBuilder([{type: "username", value: "Alataq"}, {type: "password", value: "notmypassword"}])

const token = mytoken.getToken() // Get the token
```

Parse a token
```js
const data = new TokenParser(token)

const elements = data.elements

console.log(elements)
```
