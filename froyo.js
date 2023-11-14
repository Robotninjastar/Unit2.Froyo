//TODO
const froyo = { 
    Choclate: 0,
    Vanilla: 0,
    Strawberry: 0,
    Coffee: 0,
  };

const userFlavorstring = prompt(
  "Please enter Froyo Flavors separate them with commas. Choices are Choclate,Strawberry,Vanilla and Coffee.",
  "Choclate,Vanilla,Strawberry"
);

const stringArray = userFlavorstring.split(",");

const flavors = [];

for (let i = 0; i < stringArray.length; i++) {

  const flav = stringArray[i];

  console.log(i,flav,froyo[flav])
  froyo[flav]++

  console.log(froyo)
}






