export class Game {
  public players: string[] = [];
  public cardStack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    for (let i = 1; i < 14; i++) {
      this.cardStack.push('spade_' + i);
      this.cardStack.push('hearts_' + i);
      this.cardStack.push('diamonds_' + i);
      this.cardStack.push('clubs_' + i);
    }
    shuffle(this.cardStack);
  }
}

function shuffle(array: string[]): void {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
