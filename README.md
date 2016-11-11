# Gun starter app
*[Gun](https://github.com/amark/gun) application boilerplate*

This boilerplate is a good starting point for gun applications, or just for understanding how all the pieces fit together.

## Cloning
```sh
# Download the code
$ git clone https://github.com/gundb/gun-starter-app.git

# Install the dependencies
$ cd gun-starter-app
$ npm install
```

Once the code has been downloaded, you can easily start the server:

```sh
$ npm start
```

> Under the hood, this is just running `node server.js`

## Trying it
In two browser windows, open `localhost:8080/index.html`.

> Make sure your server is running!

There's a global gun reference you can access in the developer console called `data`. Change the value on `message` and it'll update in real-time on the other browser.

```js
// Updates on the other browser window.
data.put({
	message: 'updated value',
})
```

## Applying it
The code provided here is just the bare basics. It's intentionally framework agnostic to keep the example simple and reusable.

Now that you've got real-time data sync and a way to listen for changes, you can plug those change events into a UI tool/framework (like jQuery, React, Angular, etc.)

For reference, here are gun apps written with...

- [React](https://github.com/PsychoLlama/connect-four)
- [jQuery](https://github.com/alvaro911/chat)
- [Polymer](https://github.com/Stefdv/Gun-Server-CMS-App)

## Questions
Have more questions? Send 'em our way on the [gitter channel](http://gitter.im/amark/gun/).
