// Create a new task as an object, new will be created as incomplete
const newTask = function (title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
    markComplete: function () {
      this.complete = true;
    },
  };
  return task;
};

// DRIVER CODE

const task1 = newTask("Clean garage", "Take all the garbage out of the garage");
const task2 = newTask("Do Laundry", "so many dirty underwears");
const tasks = [task1, task2];

task1.logState();
task1.markComplete();
task1.logState();

console.log(tasks);
