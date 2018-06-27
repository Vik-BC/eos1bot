#### Many know me as the author of dozens bots for steemit/golosio, and after launch EOS Mainnet I began to miss my favorite instruments for the next graphene chain, so I decided to create a bot for myself and share it with you!

## [t.me/eos1bot](https://t.me/eos1bot) Telegram
![eos1bot](https://cdn.steemitimages.com/DQmQzmi1ue8BkjLNpApsQ4YztFQHZ9qmd2s84RGuLyfmF7e/eos1bot.jpg)

***

## So, what can a bot do?

***


#### 1. Killer feature - event tracking with RegExp patterns! 
Its a powerful tool with which you can receive instant notifications about selected activity in the blockchain.
From tracking payments to finding bugs in smart contracts

**As soon as event appears in eosio blockchain - you instantly receive a notification with the transaction file**

This doesn't require any authorization, you just need to select  /keywords and send your tracking pattern 
In a RegEx format, as if inside `/`YOUR_PATTERN`/g`  without  `/ /g` 

**More examples below + video**
***
**Single word:**
Just send `myname` or `"myname"` for tracking only one word

**Miltiple words. Where "|" means "or":**
`accountname1|accountname2|airdrop|bounty|jackpot`
    
**Miltiple events. Just put variable inside "":**
`"transfer"|"newaccount"|"bidname"`

**If action should contain all specified words:**
`^(?=.*"myname")(?=.*"transfer").*`

**If transaction should contain transfer EOS, but NOT to bitfinexdep1:**
`^(?=.*"transfer")(?=.*EOS)(?!.*"to": "bitfinexdep1").*`

**Only Url detect:**
`^(https?:\/\/)?([\da-z.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$`
    
**Only Email detect:**
`^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$`

#### Bee free to design your own patterns
https://regex101.com



https://youtu.be/g-V6FVnoSG4

# Simple and useful functions

#### Accounts info
Send eos username via @ and get extended information about the user
![1.png](https://cdn.steemitimages.com/DQmYLYYcMXz65PQMcRfYAq42kEaAiXz4FeL5HfNuvUuhfmr/1.png)

#### Account actions history
Click "actions history" and get RAW file with actions
![2.png](https://cdn.steemitimages.com/DQmZUMCKTUEk29GwQGot8V5QirW84VKB8RUUnCRczsMJdFj/2.png)

#### Want to find all accounts with the same pub key? 
Just send this key **(send only PUBLIC keys and never private!!!)**

![3.png](https://cdn.steemitimages.com/DQmecbm5LBV32m1cd5kxL6tDHt2VwRY5Nh7ndWRtwhwNcXj/3.png)


# 🤟 To be continued, new features coming soon!
