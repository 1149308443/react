/* eslint-disable max-classes-per-file */
class Animal {
    name: string;

    constructor(theName: string) { this.name = theName; }

    move(distanceInMeters = 0): void {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
//   constructor(name: string) { super(name); }

  move(distanceInMeters = 5): void {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
//   constructor(name: string) { super(name); }

  move(distanceInMeters = 45): void {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}

const sam = new Snake('Sammy the Python');

export const tom: Animal = new Horse('Tommy the Palomino');

sam.move();
tom.move(34);

export default sam;

// export const xxx = tom;
