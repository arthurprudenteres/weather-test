import axios from "axios";

async function getData(estation = "est1") {
  try {
    const result = await axios.get("http://192.168.0.167/" + estation, {
      responseType: "json"
    });
    return result.data
  } catch (error) {
    return "error"
  }
}


export {getData}