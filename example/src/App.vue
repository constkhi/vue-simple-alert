<template>
  <div id="app">
    <GithubRibbon url="https://github.com/constkhi/vue-simple-alert" />

    <header id="header">
      <div id="logo">
        <img id="logo-image" alt="Vue logo" src="./assets/logo.png" />
      </div>
      <div id="title">
        <h1>
          vue-simple-alert examples
          <small>({{ v }})</small>
          <h3>({{ des }})</h3>
        </h1>
      </div>
    </header>
    <h2>Alert examples</h2>
    <div id="examples">
      <div id="alert-example">
        <button type="button" @click="alertExample0">Normal Alert</button>
        <button
          type="button"
          class="swal2-confirm swal2-styled"
          @click="alertExample1"
        >
          Simple
        </button>
        <button
          type="button"
          class="swal2-confirm swal2-styled"
          @click="alertExample2"
        >
          With title
        </button>
        <button
          type="button"
          class="swal2-confirm swal2-styled"
          @click="alertExample3"
        >
          Success icon
        </button>
        <button
          type="button"
          class="swal2-confirm swal2-styled"
          @click="alertExample4"
        >
          Warning icon
        </button>
      </div>

      <br />
      <h2>Confirm examples</h2>
      <div id="confirm-example">
        <button type="button" @click="confirmExample0">Normal Confirm</button>
        <button
          type="button"
          class="swal2-confirm swal2-styled"
          @click="confirmExample1"
        >
          Simple
        </button>
        <button
          type="button"
          class="swal2-confirm swal2-styled"
          @click="confirmExample2"
        >
          Question icon
        </button>
        <button
          type="button"
          class="swal2-confirm swal2-styled"
          @click="confirmExample3"
        >
          Error icon
        </button>
      </div>

      <br />
      <h2>Prompt examples</h2>
      <div id="prompt-example">
        <button type="button" @click="promptExample0">Normal Prompt</button>
        <button
          type="button"
          class="swal2-confirm swal2-styled"
          @click="promptExample1"
        >
          Simple Prompt
        </button>
        <button
          type="button"
          class="swal2-confirm swal2-styled"
          @click="promptExample2"
        >
          Question icon
        </button>
        <button
          type="button"
          class="swal2-confirm swal2-styled"
          @click="promptExample3"
        >
          Prompt email
        </button>
      </div>

      <br />
      <h2>Advanced examples</h2>
      <div id="advanced-example">
        <button
          type="button"
          class="swal2-confirm swal2-styled"
          @click="advancedExample1"
        >
          Animation
        </button>
        <button
          type="button"
          class="swal2-confirm swal2-styled"
          @click="advancedExample2"
        >
          Custom button text
        </button>
        <button
          type="button"
          class="swal2-confirm swal2-styled"
          @click="advancedExample3"
        >
          Reverse buttons
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { SweetAlertOptions, SweetAlertResult } from "sweetalert2";
import { version, description } from "vue-simple-alert/package.json";
import GithubRibbon from "@/components/GithubRibbon.vue";

@Component({
  components: { GithubRibbon }
})
export default class App extends Vue {
  readonly v: string = version;
  readonly des: string = description;

  alertExample0() {
    window.alert("This is normal alert.");
  }
  alertExample1() {
    this.$alert("This is simple but cool alert.").then(() =>
      console.log("Closed")
    );
  }
  alertExample2() {
    this.$alert("This is simple but cool alert with title.", "Example").then(
      () => console.log("Closed")
    );
  }
  alertExample3() {
    this.$alert(
      "This is simple but cool alert with icon.",
      "Success",
      "success"
    ).then(() => console.log("Closed"));
  }
  alertExample4() {
    this.$alert(
      "This is simple but cool alert with icon.",
      "Warning",
      "warning"
    ).then(() => console.log("Closed"));
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
      .then((r: boolean) => {
        console.log(r);
      })
      .catch(() => {
        console.log("OK not selected.");
      });
  }
  confirmExample3() {
    this.$confirm("This is cool confirm with error icon.", "Error", "error")
      .then((r: boolean) => {
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
    this.$prompt("Input your name", "John Doe").then((r: string) => {
      if (r) this.$alert(r, "Your name is:", "success");
    });
  }
  promptExample2() {
    this.$prompt("Input your name", "John Doe", "Example", "question")
      .then((r: string) => {
        this.$alert(r, "Your name is:", "success");
      })
      .catch(() => console.log("canceled"));
  }
  promptExample3() {
    this.$prompt(
      "Input your email",
      "someone@example.com",
      "Example",
      "question",
      { input: "email" }
    )
      .then((r: string) => {
        this.$alert(r, "Your email is:", "success");
      })
      .catch(() => console.log("canceled"));
  }

  advancedExample1() {
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

    this.$fire(options).then((r: SweetAlertResult) => {
      if (r.value) this.$alert(r.value, "Result");
    });
  }
  advancedExample2() {
    this.$alert(
      "This is advanced alert with custom button text",
      "Example",
      "success",
      {
        confirmButtonText: "Got it!"
      }
    );
  }
  advancedExample3() {
    this.$confirm("This is dialog has reversed buttons.", "Error", "error", {
      reverseButtons: true
    })
      .then((r: boolean) => {
        console.log(r);
      })
      .catch(() => {
        console.log("OK not selected.");
      });
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  background-image: linear-gradient(
    to left bottom,
    rgb(179, 215, 255) 0%,
    rgb(179, 255, 236) 100%
  );
  background-position: initial initial;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#app {
  font-family: "Dosis", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
}

#header {
  display: flex;
  text-align: center;
  justify-content: center;
}

#logo {
  height: 100px;
}

h1 {
  font-weight: 500;
  font-size: 3rem;
}
h1 small {
  font-size: 1.25rem;
}

h2 {
  font-weight: 500;
  font-size: 2rem;
  margin: 0 0 10px;
}

h3 {
  font-weight: 200;
  font-size: 1.5rem;
  text-align: left;
}
</style>
