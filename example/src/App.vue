<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>
      vue-simple-alert examples
      <small>({{ v }})</small>
    </h1>
    <br />
    <h2>Alert examples</h2>
    <div id="examples">
      <div id="alert-example">
        <button @click="alertExample0" type="button">Normal Alert</button>
        <button @click="alertExample1" type="button" class="swal2-confirm swal2-styled">Simple</button>
        <button @click="alertExample2" type="button" class="swal2-confirm swal2-styled">With title</button>
        <button @click="alertExample3" type="button" class="swal2-confirm swal2-styled">Success icon</button>
        <button @click="alertExample4" type="button" class="swal2-confirm swal2-styled">Warning icon</button>
      </div>

      <br />
      <h2>Confirm examples</h2>
      <div id="confirm-example">
        <button @click="confirmExample0" type="button">Normal Confirm</button>
        <button @click="confirmExample1" type="button" class="swal2-confirm swal2-styled">Simple</button>
        <button
          @click="confirmExample2"
          type="button"
          class="swal2-confirm swal2-styled"
        >Question icon</button>
        <button @click="confirmExample3" type="button" class="swal2-confirm swal2-styled">Error icon</button>
        <button
          @click="confirmExample4"
          type="button"
          class="swal2-confirm swal2-styled"
        >Reverse buttons</button>
      </div>

      <br />
      <h2>Prompt examples</h2>
      <div id="prompt-example">
        <button @click="promptExample0" type="button">Normal Prompt</button>
        <button
          @click="promptExample1"
          type="button"
          class="swal2-confirm swal2-styled"
        >Simple Prompt</button>
        <button
          @click="promptExample2"
          type="button"
          class="swal2-confirm swal2-styled"
        >Question icon</button>
        <button
          @click="promptExample3"
          type="button"
          class="swal2-confirm swal2-styled"
        >Reverse buttons</button>
      </div>

      <br />
      <h2>Advanced examples</h2>
      <div id="advanced-example">
        <button
          @click="advancedExample"
          type="button"
          class="swal2-confirm swal2-styled"
        >Advanced Example</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { SweetAlertOptions } from "sweetalert2";
import { version } from "vue-simple-alert/package.json";

@Component
export default class App extends Vue {
  readonly v: string = version;

  alertExample0() {
    window.alert("This is normal alert.");
  }
  alertExample1() {
    this.$alert("This is simple but cool alert.")
      .then(() => console.log("Closed by OK"))
      .catch(() => console.log("dismissed"));
  }
  alertExample2() {
    this.$alert("This is simple but cool alert with title.", "Example")
      .then(() => console.log("Closed by OK"))
      .catch(() => console.log("dismissed"));
  }
  alertExample3() {
    this.$alert(
      "This is simple but cool alert with icon.",
      "Success",
      "success"
    )
      .then(() => console.log("Closed by OK"))
      .catch(() => console.log("dismissed"));
  }
  alertExample4() {
    this.$alert(
      "This is simple but cool alert with icon.",
      "Warning",
      "warning"
    )
      .then(() => console.log("Closed by OK"))
      .catch(() => console.log("dismissed"));
  }

  confirmExample0() {
    window.confirm("This is normal confirm.");
  }
  confirmExample1() {
    this.$confirm("This is cool confirm.", "Confirm");
  }
  confirmExample2() {
    this.$confirm(
      "This is cool confirm with question icon.",
      "Question",
      "question"
    )
      .then(r => {
        console.log(r);
      })
      .catch(() => {
        console.log("OK not selected.");
      });
  }
  confirmExample3() {
    this.$confirm("This is cool confirm with error icon.", "Error", "error")
      .then(r => {
        console.log(r);
        this.$alert("OK selected.");
      })
      .catch(() => {
        console.log("OK not selected.");
      });
  }
  confirmExample4() {
    this.$confirm(
      "This is dialog has reversed buttons.",
      "Error",
      "error",
      true
    )
      .then(r => {
        console.log(r);
        this.$alert("OK selected.");
      })
      .catch(() => {
        console.log("OK not selected.");
      });
  }

  promptExample0() {
    window.alert(window.prompt("Input your name", "John Doe"));
  }
  promptExample1() {
    this.$prompt("Input your name", "John Doe")
      .then(r => {
        if (r) this.$alert(r, "Your name is:", "success");
      })
      .catch(() => console.log("closed"));
  }
  promptExample2() {
    this.$prompt("Input your name", "John Doe", "Example", "question").then(
      r => {
        if (r) this.$alert(r, "Your name is:", "success");
      }
    );
  }
  promptExample3() {
    this.$prompt(
      "Input your name",
      "John Doe",
      "Example",
      "question",
      true
    ).then(r => {
      if (r) this.$alert(r, "Your name is:", "success");
    });
  }

  advancedExample() {
    const options: SweetAlertOptions = {
      title: "<strong>Advanced</strong> &nbsp; example",
      text: "This dialog will be closed after 3 seconds.",
      footer: "<a href=''>Check out sweetalert2 documentation.</a>",
      type: "success",
      showCancelButton: true,
      confirmButtonText: "<i class='fa fa-thumbs-up'></i> Great!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      timer: 3000,
      width: 500,
      animation: false,
      customClass: {
        popup: "animated tada"
      },
      padding: "3em",
      background: "#fff",
      backdrop: `
        rgba(0,0,123,0.4)
        center left
        no-repeat
      `
    };

    this.$fire(options).then(r => {
      if (r.value) this.$alert(r.value, "Result");
    });
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
