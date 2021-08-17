let pronoun = ["the", "our", ""];
let adj = ["coolest", "awesome", "beautiful"];
let noun = ["cook", "painter", "artist", "photographer"];
let extention = [".com", ".net", ".io", ".com.ve"];
let arr = [];

for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
      for (let d = 0; d < extention.length; d++) {
        console.log(pronoun[a] + adj[b] + noun[c] + extention[d]);
      }
    }
  }
}