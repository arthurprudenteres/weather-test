import axios from "axios";

async function getData(estation = "est1") {
  try {
    const result = await axios.get("http://172.30.133.244/" + estation)
    console.log("pequeno teste " + result)
    return result.data
  } catch (error) {
    return "error"
  }
}


export {getData}