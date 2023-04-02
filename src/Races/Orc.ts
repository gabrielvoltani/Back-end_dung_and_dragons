import Race from './Race';

const LIFE_POINTS = 74;

class Orc extends Race {
  private _maxLifePoints: number;
  private static raceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Orc.raceInstance += 1;

    this._maxLifePoints = LIFE_POINTS;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.raceInstance;
  }
} 

export default Orc;