export class Message {
  constructor(public content: string,
              public type: string,
              public expirationDate: string,
              public messageId?: string
              ) {
  }
}
