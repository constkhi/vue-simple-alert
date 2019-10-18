# Vue Simple Alert

A simplest but beautiful *alert()*, *confirm()*, *prompt()* for Vue.js, using sweetalert2.

## Demo

[https://constkhi.github.io/vue-simple-alert/](https://constkhi.github.io/vue-simple-alert/)

## Features

- Provides simple *alert()*, *confirm()*, *prompt()* like DOM Window methods.
- Installed as a Vue plugin.
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

You can use sweetalert2's *fire()* method through *$fire()*.
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

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/constkhi/vue-simple-alert/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
