# ImageShare
ImageShare discord bot's sourcecode

[![Discord](https://discordapp.com/api/guilds/580700722211848192/widget.png)](https://discord.gg/wGbNwKc)

### How to setup:

1. Go to [is-inside.me](https://is-inside.me)

2. Create a account

[![Screenshot](https://caterpy.is-inside.me/7UNSUC5F.jpg)](http://caterpy.tk)

3. Copy your "key" and paste to a file called `config.json` 

4. Copy the `RequestURL` link and paste to `config.json` as `host`

[![Screenshot](https://caterpy.is-inside.me/PZbkvk8X.jpg)](http://caterpy.tk)

5. Go to [the discord developer portal](https://discordapp.com/developers/applications/) and copy your bot token, save it as token

6. Finally, choose the prefix you want for your bot

### Your `config.json` should look like this:

```
{
    "prefix": "#",
    "token": "someextremelysecrettokengeneratedfromthediscorddeveloperporta",
    "key": "thekeyyougotonis-inside.me",
    "host": "https://caterpy.is-inside.me/upload"
}
```

Now you just need to execute the main process uso
ing node:

```node image.js```

### You're done! now you can use your discord bot as you please
