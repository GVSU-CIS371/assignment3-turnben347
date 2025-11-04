import { defineStore } from "pinia";
import temps from "../data/temperatures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

// Beverage type
type Beverage = {
  name: string;
  temp: string;
  base: any;
  creamer: any;
  syrup: any;
};

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: temps,
    bases: bases,
    creamers: creamers,
    syrups: syrups,
    currentTemp: temps[1],         // Default "Cold"
    currentBase: bases[2],         // Default "Coffee"
    currentCreamer: creamers[0],   // Default "No Cream"
    currentSyrup: syrups[0],       // Default "No Syrup"
    currentBeverageName: "",
    savedBeverages: [] as Beverage[],
  }),
  actions: {
    // Create a new beverage and save it
    makeBeverage() {
      if (!this.currentBeverageName.trim()) return;

      const newBeverage: Beverage = {
        name: this.currentBeverageName,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };

      this.savedBeverages.push(newBeverage);
      this.currentBeverageName = "";
    },

    // Load a saved beverage into current selections
    showBeverage(beverage: Beverage) {
      this.currentBeverageName = beverage.name;
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentCreamer = beverage.creamer;
      this.currentSyrup = beverage.syrup;
    },
  },
  persist: true,
});
