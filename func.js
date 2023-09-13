import axios from "axios";
import { response } from "express";

axios.get('http://localhost:3001/read', {
    responseType: "json",
  }).then((response) => {
    return response
}).then((response) => {
    console.log(response.data)
})