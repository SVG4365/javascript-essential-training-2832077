/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const laptop = {
  make: "Lenovo",
  ram: 64,
  cpu: "intel i7",
  boot: function () {
    console.log("Booting up your laptop.");
  },
  shutdown: function () {
    console.log("Shutting down your laptop.");
  },
};

console.log("Here is your new laptop:", laptop);

const ToCLink = {
  title: "The First Heading",
  headerWeight: "H2",
  headerTarget: "http://www.google.com",
  style: {
    color: "green",
    textdecoration: "uppercase",
  },
  setHeaderWeight: function (newHeaderWeight) {
    this.headerWeight = newHeaderWeight;
  },
  setHeaderTarget: function (newHeaderTarget) {
    this.headerWeight = newHeaderTarget;
  },
};

console.log("Here is a headerlink with 'style' as a child object", ToCLink);
