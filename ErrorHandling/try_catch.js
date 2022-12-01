setTimeout(function () {
  try {
    //console.log("hello");
    noSuchVariable;
    
  } catch (err) {
    console.log(err.message);
  }
}, 1000);
