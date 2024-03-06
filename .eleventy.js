module.exports = function (config) {
    config.addPassthroughCopy("./src/css/"); // copy everything in the src/css folder and get it on our site
    config.addPassthroughCopy("./src/img/");
    config.addPassthroughCopy("./src/js/");
  
    return {
      dir: {
        input: "src",
        output: "_site", //underscore always means this isn't the folder for processing
      },
    };
  };