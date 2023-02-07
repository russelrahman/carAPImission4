"use strict";

class CarController {
  async carView({ request, response }) {
    try {
      // console.log(request.all());
      const { model, year } = request.input("carValue");
      // Remove space and numerical characters
      const carModel = model.replace(/[^a-zA-Z ]/g, "");
      const carData = carModel.replace(/ +/g, "");
      // Convert lower case
      const modelName = carData.toLowerCase();
      // Get string length
      const len = modelName.length;
      var count = 0;
      for (var i = 0; i < len; i++) {
        if (modelName[i] == "a") {
          count = count + 1;
        } else if (modelName[i] == "b") {
          count = count + 2;
        } else if (modelName[i] == "c") {
          count = count + 3;
        } else if (modelName[i] == "d") {
          count = count + 4;
        } else if (modelName[i] == "e") {
          count = count + 5;
        } else if (modelName[i] == "f") {
          count = count + 6;
        } else if (modelName[i] == "g") {
          count = count + 7;
        } else if (modelName[i] == "h") {
          count = count + 8;
        } else if (modelName[i] == "i") {
          count = count + 9;
        } else if (modelName[i] == "j") {
          count = count + 10;
        } else if (modelName[i] == "k") {
          count = count + 11;
        } else if (modelName[i] == "l") {
          count = count + 12;
        } else if (modelName[i] == "m") {
          count = count + 13;
        } else if (modelName[i] == "n") {
          count = count + 14;
        } else if (modelName[i] == "o") {
          count = count + 15;
        } else if (modelName[i] == "p") {
          count = count + 16;
        } else if (modelName[i] == "q") {
          count = count + 17;
        } else if (modelName[i] == "r") {
          count = count + 18;
        } else if (modelName[i] == "s") {
          count = count + 19;
        } else if (modelName[i] == "t") {
          count = count + 20;
        } else if (modelName[i] == "u") {
          count = count + 21;
        } else if (modelName[i] == "v") {
          count = count + 22;
        } else if (modelName[i] == "w") {
          count = count + 23;
        } else if (modelName[i] == "x") {
          count = count + 24;
        } else if (modelName[i] == "y") {
          count = count + 25;
        } else if (modelName[i] == "z") {
          count = count + 26;
        }
      }
      const value = count * 100 + year;
      // return response
      return {
        car_value: value,
      };
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CarController;
