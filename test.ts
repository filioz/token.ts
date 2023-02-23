import {TokenBuilder, TokenParser} from "./index.ts"

const token = new TokenBuilder([{type: "str", value: "Alataq"}, {type: "str", value: "this is a test"}]).getToken()

console.log("Token is: " + token)

const data = new TokenParser(token).elements

console.log(data[0].value + ", " + data[1].value + ".")