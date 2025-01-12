const fs = require("fs");

const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
const packageLockJson = JSON.parse(fs.readFileSync("package-lock.json", "utf8"));

const lockDependencies = packageLockJson.packages[""].dependencies || {};
const lockDevDependencies = packageLockJson.packages[""].devDependencies || {};

packageJson.dependencies = {
  ...packageJson.dependencies,
  ...lockDependencies,
};

packageJson.devDependencies = {
  ...packageJson.devDependencies,
  ...lockDevDependencies,
};

fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
console.log("Updated package.json with dependencies from package-lock.json");
