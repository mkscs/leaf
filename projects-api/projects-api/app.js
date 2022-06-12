const express = require("express");
const app = express();
const settings = require("./settings");
const fetch = require('node-fetch');

app.get("/project/1", async (req, res) => {
  const docs_host = settings.docs_host || "http://localhost:5001"
  const uri = `${docs_host}/project/1/docs`
  console.log("getting request for projects, asking docs api on ", uri);
  try {
    const response = await fetch(uri, {
      headers: {
        'Accept': 'application/json'
      }
    })
    if (!response.ok) {
      console.log('Something went wrong. Status:', response.status)
    }
    const docs = await response.json()
    if (!docs) {
      throw "no docs returned from docs api";
    }
    let project = {
      user_id: "random_user_id",
      project_name: "my test project",
      docs: docs,
    };
    res.send(project);
  } catch(e) {
    console.error(e)
    return res.status(500).send('error')
  }
});

app.listen(settings.port, () =>
  console.log("Example app listening on port " + settings.port)
);
