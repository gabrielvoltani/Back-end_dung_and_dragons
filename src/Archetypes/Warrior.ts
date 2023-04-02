import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _mana: EnergyType;
  private static raceInstance = 0;

  constructor(name: string) {
    super(name);
    this._mana = 'stamina';

    Warrior.raceInstance += 1;
  }

  get energyType(): EnergyType {
    return this._mana;
  }

  static createdArchetypeInstances(): number {
    return this.raceInstance;
  }
}

export default Warrior;