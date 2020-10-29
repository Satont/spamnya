import { Message } from 'discord.js'

declare namespace Spamnya {
  function log(message: Message, maxLog: number): void
  export function tooQuick(amount: number, interval: number): boolean
  export function sameMessages(amount: number, interval: number): boolean
}

export = Spamnya
