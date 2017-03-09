xlsxj = require("xlsx-to-json");
  var err="Error.";
  var result="Done."

  console.log("start xlsx conversion to json.");
  xlsxj({
    input: "./saamittari.xlsx", 
    output: "./saamittari.json"
  }, function(err, result) {
       if(err) {
         console.error(err);
       }else {
         console.log(result);
       }
     });

  console.log("Done.");
