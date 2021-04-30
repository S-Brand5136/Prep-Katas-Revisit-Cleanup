const organizeInstructors = function(instructors) {
  const result = {};

  for (const key in instructors) {
    if (!result[instructors[key].course]) {
      result[instructors[key].course] = [instructors[key].name];
    } else {
      result[instructors[key].course].push(instructors[key].name);
    }
  }

  return result;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
