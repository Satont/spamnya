# Spamnya

A spam detector for discord.js bots

---

# Installation

```bash
npm i @satont/spamnya
```

# Usage

CommonJs

```javascript
  const { Client } = require('discord.js')
  const spamnya = require('@satont/spamnya')
  const client = new Client()

  client.on('message', (message) => {
    //initiate the detector and log the chats with max 50 logged chats
    spamnya.log(message, 50)

    if (spamnya.tooQuick(3, 1000)) {
      // when someone send 3 chats in less than a second
    }

    if (spamnya.sameMessages(3, 60000)){
      // when someone send 3 identical chats within a minute
    }
  })
```

ES6 modules:

```javascript
import spamnya from '@satont/spamnya'
import { Client } from 'discord.js'
const client = new Client()

client.on('message', (message) => {
  //initiate the detector and log the chats with max 50 logged chats
  spamnya.log(message, 50)

  if(spamnya.tooQuick(3, 1000)) {
    // when someone send 3 chats in less than a second
  }

  if(spamnya.sameMessages(3, 60000)) {
    // when someone send 3 identical chats within a minute
  }
})
```

# Credits
Original author is rainqubit. Repo: https://github.com/rainqubit/spamnya
