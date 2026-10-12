import axios from "axios";
//const axios = require('axios'); // legacy way

// Optionally the request above could also be done as
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
