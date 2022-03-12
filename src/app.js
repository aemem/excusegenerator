window.onload = function() {
  document.getElementById("myExcuse").innerHTML = excuseGenerator();
};

const excuseGenerator = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let i = Math.floor(Math.random() * who.length);
  let j = Math.floor(Math.random() * action.length);
  let k = Math.floor(Math.random() * what.length);
  let l = Math.floor(Math.random() * when.length);

  let excuse = who[i] + " " + action[j] + " " + what[k] + " " + when[l];

  return excuse;
};
