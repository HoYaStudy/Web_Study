type CoffeeCup = {
  shots: number;
  hasMilk?: boolean;
  hasSugar?: boolean;
};

interface ICoffeeMaker {
  makeCoffee(shots: number): CoffeeCup;
}

interface MilkFrother {
  addMilk(cup: CoffeeCup): CoffeeCup;
}

interface SugarProvider {
  addSugar(cup: CoffeeCup): CoffeeCup;
}

class CoffeeMachine implements ICoffeeMaker {
  private static BEANS_PER_SHOT: number = 7;
  private coffeeBeans: number;

  constructor(
    coffeeBeans: number = 0,
    private milk: MilkFrother,
    private sugar: SugarProvider
  ) {
    this.coffeeBeans = coffeeBeans;
  }

  fillCoffeeBeans(beans: number) {
    if (beans < 0) {
      throw new Error("Value for beans should be greater than 0");
    }
    this.coffeeBeans += beans;
  }

  makeCoffee(shots: number): CoffeeCup {
    this.grindBeans(shots);
    this.preheat();
    const coffee = this.extract(shots);
    const coffeeWithSugar = this.sugar.addSugar(coffee);
    return this.milk.addMilk(coffeeWithSugar);
  }

  clean() {
    console.log("🧼 Cleaning the machine");
  }

  private grindBeans(shots: number) {
    console.log(`Grinding beans for ${shots}`);
    if (this.coffeeBeans < shots * CoffeeMachine.BEANS_PER_SHOT) {
      throw new Error("Not enough coffee beans");
    }
    this.coffeeBeans -= shots * CoffeeMachine.BEANS_PER_SHOT;
  }

  private preheat(): void {
    console.log("🔥 Heating up");
  }

  private extract(shots: number): CoffeeCup {
    console.log(`☕️ Pulling ${shots} shots`);
    return {
      shots,
      hasMilk: false,
    };
  }
}

class NoMilk implements MilkFrother {
  addMilk(cup: CoffeeCup): CoffeeCup {
    return cup;
  }
}

class CheapMilkSteamer implements MilkFrother {
  private getSteamMilk(): boolean {
    console.log("🥛 Steaming some milk");
    return true;
  }

  addMilk(cup: CoffeeCup): CoffeeCup {
    const milk = this.getSteamMilk();
    return {
      ...cup,
      hasMilk: milk,
    };
  }
}

class FancyMilkSteamer implements MilkFrother {
  private getSteamMilk(): boolean {
    console.log("🥛 Steaming some fancy milk");
    return true;
  }

  addMilk(cup: CoffeeCup): CoffeeCup {
    const milk = this.getSteamMilk();
    return {
      ...cup,
      hasMilk: milk,
    };
  }
}

class ColdMilkSteamer implements MilkFrother {
  private getSteamMilk(): boolean {
    console.log("🥛 Steaming some cold milk");
    return true;
  }

  addMilk(cup: CoffeeCup): CoffeeCup {
    const milk = this.getSteamMilk();
    return {
      ...cup,
      hasMilk: milk,
    };
  }
}

class NoSugar implements SugarProvider {
  addSugar(cup: CoffeeCup): CoffeeCup {
    return cup;
  }
}

class CandySugarMixer implements SugarProvider {
  private getSugar(): boolean {
    console.log(`🍬 Getting some sugar from candy`);
    return true;
  }

  addSugar(cup: CoffeeCup): CoffeeCup {
    const sugar = this.getSugar();
    return {
      ...cup,
      hasSugar: sugar,
    };
  }
}

class SugarMixer implements SugarProvider {
  private getSugar(): boolean {
    console.log(`🍬 Getting some sugar`);
    return true;
  }

  addSugar(cup: CoffeeCup): CoffeeCup {
    const sugar = this.getSugar();
    return {
      ...cup,
      hasSugar: sugar,
    };
  }
}

const noMilkMaker = new NoMilk();
const cheapMilkMaker = new CheapMilkSteamer();
const fancyMilkMaker = new FancyMilkSteamer();
const noSugar = new NoSugar();
const coldMilkMaker = new ColdMilkSteamer();
const candySugar = new CandySugarMixer();
const sugar = new SugarMixer();

const sweetCandyMachine = new CoffeeMachine(12, noMilkMaker, candySugar);
const sweetMachine = new CoffeeMachine(12, noMilkMaker, sugar);
const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
const sweetLatteMachine = new CoffeeMachine(12, fancyMilkMaker, candySugar);

sweetCandyMachine.makeCoffee(1);
console.log("----------");
sweetMachine.makeCoffee(1);
console.log("----------");
latteMachine.makeCoffee(1);
console.log("----------");
coldLatteMachine.makeCoffee(1);
console.log("----------");
sweetLatteMachine.makeCoffee(1);
