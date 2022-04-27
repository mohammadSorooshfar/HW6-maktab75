user = {
  id: 6,
  name: "Hossein",
  lastName: "Zenderoh",
  roles: ["student", "admin"],
  age: 19,
  scores: { english: 10, math: 19.5, physics: 14 },
};
function addScore(...score) {
  let newUser = JSON.parse(JSON.stringify(user));
  for (let i = 0; i < score.length; i += 2) {
    newUser.scores[`${score[i]}`] = score[i + 1];
  }
  return newUser;
}
function addVeryYoung(user) {
  user.roles.push("teacher");
  if (user.age < 18) {
    user["status"] = "veryyoung";
  }
  return user;
}
function convert(user) {
  let array = Object.entries(user);
  array.push(["fatherName", "ali"]);
  user = Object.fromEntries(array);
  return user;
}
console.log(addScore("shimi", 19, "arabic", 16));
console.log(addVeryYoung(user));
console.log(convert(user));
