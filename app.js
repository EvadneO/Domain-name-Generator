  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
    const one = pronoun[i];
    for (let j = 0; j < adj.length; j++) {
      const two = adj[j];
      for (let k = 0; k < noun.length; k++) {
        const three = noun[k];
        console.log(one + two + three + ".net");
      }
    }
  }

  console.log("Hello World");

