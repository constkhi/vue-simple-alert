# Vue Simple Alert

![downloads](https://img.shields.io/npm/dw/vue-simple-alert)
![version](https://img.shields.io/npm/v/vue-simple-alert)
![license](https://img.shields.io/npm/l/vue-simple-alert)

Simple but cool _**alert()**_, _**confirm()**_, _**prompt()**_ for Vue.js.

## Demo

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">

Check out live
<a href="https://constkhi.github.io/vue-simple-alert/" target="_blank">demo <i class="fas fa-external-link-alt"></i></a>

## Features

- Provides simple _alert()_, _confirm()_, _prompt()_ like DOM Window methods.
- Based on sweetalert2.
- Installed as a Vue.js plugin.
- Promise based API.
- Support typescript.

## Install

```bash
npm i vue-simple-alert
```

## Basic Usage

### install plugin

```javascript
// main.js
import Vue from "vue"
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);
```

### Alert

```javascript
// in any component

this.$alert("Hello Vue Simple Alert.");
```

### Confirm

```javascript
// in any component

this.$confirm("Are you sure?").then(() => {
  //do something...
});
```

### Prompt

```javascript
// in any component

this.$prompt("Input your name").then((text) => {
  // do somthing with text
});
```

## Advanced Usage

You can use sweetalert2's _**fire()**_ method through _**$fire()**_.
For detailed usage, refer to [sweetalert2](https://sweetalert2.github.io) documentation.

```javascript
// in any component

this.$fire({
  title: "Title",
  text: "text",
  type: "success",
  timer: 3000
}).then(r => {
 console.log(r.value);
});
```

## API

### alert(message?, title?, type?)

The _alert()_ method displays an alert box with a specified message and an OK button.

- message: string

> Optional. Specifies the text to display in the alert box

- title: string

> Optional. Specifies title of the alert box

- type: 'success' | 'error' | 'warning' | 'info' | 'question'

> Optional. Specifies icon type.

- returns: Promise\<boolean\>

> Will be resolved when OK button clicked. If alert box closed by any other reason, this promise will be rejected.

### confirm(message?, title?, type?, reverseButton?)

The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.

- message: string

> Optional. Specifies the text to display in the confirm box

- title: string

> Optional. Specifies title of the confirm box

- type: 'success' | 'error' | 'warning' | 'info' | 'question'

> Optional. Specifies icon type.

- reverseButton: boolean

> Optional. Set to true if you want to invert default buttons positions.

- returns: Promise\<boolean\>

> Will be resolved when OK button clicked. If confirm box closed by any other reason, this promise will be rejected.

### prompt(message, defaultText?, title?, type?, reverseButton?)

The prompt() method displays a dialog box that prompts the user for input.

- message: string

> Required. Specifies the text to display in the dialog box

- defaultText: string

> Optional. The default input text

- title: string

> Optional. Specifies title of the confirm box

- type: 'success' | 'error' | 'warning' | 'info' | 'question'

> Optional. Specifies icon type.

- reverseButton: boolean

> Optional. Set to true if you want to invert default buttons positions.

- returns: Promise\<string\>

> Will be resolved with input text when OK button clicked. If the user clicks OK without entering any text, promise will be resolved with an empty string. If dialog box closed by any other reason, this promise will be rejected.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/constkhi/vue-simple-alert/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
