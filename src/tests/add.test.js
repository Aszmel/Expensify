const add = (a, b) => a + b;

const generateGreeting = (name = "anonymous") => `Hello ${name}`;

test("should add two numbers", () => {
  const result = add(4, 4);
  expect(result).toBe(8);
});

test("should display Hello and given name", () => {
  expect(generateGreeting("Arek")).toBe("Hello Arek");
});

test("should generate greeting for no name", () => {
  expect(generateGreeting()).toBe("Hello anonymous");
});
