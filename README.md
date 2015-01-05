Meteor wrapper for `coinbase-api` node package.

It was the most actively-maintained npm package when I searched in Jan 2015. There were no packages other than `passport-coinbase` that supported OAuth, and AFAICT no one has successfully integrated `passport` with Meteor. If you need OAuth, use the `oauth` Meteor package, using the `twitter` package as a guide.

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

[coinbase-api node package docs](http://emiliote.github.io/node-coinbase-api/)

[Coinbase API docs](https://www.coinbase.com/docs/api/overview)
