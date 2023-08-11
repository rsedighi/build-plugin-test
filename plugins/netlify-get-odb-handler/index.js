module.exports = {
    async onPostBuild() {
      console.log("onPostBuild: I run  onPostBuild 🎉");

      const fs = require("fs")
      const path = require('path')

      const filenames = fs.readdirSync(path.join(__dirname, '..', '..', '.netlify', 'functions'));
  
      console.log("\nCurrent directory filenames:");
      filenames.forEach(file => {
        console.log(file);
        if(file === '___netlify-odb-handler.zip') {
          const buffer = fs.readFileSync(path.join(__dirname, '..', '..', '.netlify', 'functions', file));
          console.log(buffer);
        }
      });
    },
  };