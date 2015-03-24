__This package is deprecated.__ Coinbase has released an official node library: 

https://www.npmjs.com/package/coinbase

It supports both API keys and Oauth. Include it using `meteorhacks:npm`, and use `Meteor.wrapAsync`. See https://atmospherejs.com/idrism/accounts-coinbase for Oauth integration.



[![Build Status](https://travis-ci.org/parlaywithme/coinbase.svg)](https://travis-ci.org/parlaywithme/coinbase)

Meteor wrapper for `coinbase-api` npm package.

[coinbase-api npm package](http://emiliote.github.io/node-coinbase-api/)

[Coinbase API](https://www.coinbase.com/docs/api/overview)


It was the most actively-maintained package when I searched in Jan 2015. There were no packages other than `passport-coinbase` that supported OAuth, and afaict no one has successfully integrated `passport` with Meteor. So if you need OAuth, I recommend using the `oauth` Meteor package, with the `twitter` package as a guide.

`meteor add parlay:coinbase`

Add to your `.bashrc`:

```bash
export COINBASE_KEY="[your key goes here]"
export COINBASE_SECRET="[secret here]"
```

```js
coinbase = Coinbase({ api: process.env.COINBASE_KEY, secret: process.env.COINBASE_SECRET });


coinbase.addresses(function(error, data) {
    if (error) return console.log(error);

    console.log(data);
});
```

