export class User {
  constructor(
    private _id: number,
    private _lastName: string,
    private _firstName: string
  ) {}

  get id() {
    return this._id;
  }

  get fullName() {
    return `${this._lastName} ${this._firstName}`;
  }
}
