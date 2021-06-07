import { Expression } from "./expression"

export class Money {
  protected amount: number
  protected currency: string

  constructor(amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }

  times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.currency)
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD')
  }
}