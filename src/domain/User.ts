export class User {
  constructor(private _lastName: string, private _firstName: string) {}

  get fullName() {
    return `${this._lastName} ${this._firstName}`;
  }
}
