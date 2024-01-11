/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const fuckAround = {
  fuckUpAuthor: "Bob Saget",
  numberOfFucks: 12,
  fuckType: "major fuckup",
};

const fuckAroundAndFindOut = (fuckAround) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
      <h1>${fuckAround.fuckUpAuthor} has been fucking around</h1>
      <ul>
        <li>Number of fucks: ${fuckAround.numberOfFucks}</li>
        <li>Fuck Type: ${fuckAround.fuckType}</li>
      </ul>
      <h2>Found out:</h2>
      <p> fucking around like this leads to finding out with a force of <strong>${
        fuckAround.numberOfFucks * 23
      }</strong> !
    `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(fuckAroundAndFindOut(fuckAround));
