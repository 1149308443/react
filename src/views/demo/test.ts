interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): number;
    currentTime: number;
}

function createClock(Ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new Ctor(hour, minute);
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {
    console.log(h, m);
  }

    currentTime = 1;

    tick(): number {
      const n = this.currentTime;
      console.log('tick tock');
      return n;
    }
}

const analog = createClock(AnalogClock, 7, 32);


export default analog;
