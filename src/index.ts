import Vue from "vue";
import Swal, {
  SweetAlertOptions,
  SweetAlertResult,
  SweetAlertType
} from "sweetalert2";

declare module "vue/types/vue" {
  interface Vue {
    readonly prototype: typeof Vue;
    $alert: typeof VueSimpleAlert.alert;
    $confirm: typeof VueSimpleAlert.confirm;
    $prompt: typeof VueSimpleAlert.prompt;
    $fire: typeof VueSimpleAlert.fire;
  }

  interface VueConstructor {
    alert: typeof VueSimpleAlert.alert;
    confirm: typeof VueSimpleAlert.confirm;
    prompt: typeof VueSimpleAlert.prompt;
    fire: typeof VueSimpleAlert.fire;
  }
}

export class VueSimpleAlert {
  static alert(message?: string, title?: string, type?: SweetAlertType): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const options: SweetAlertOptions = {
        title: title,
        text: message,
        type: type
      };

      Swal.fire(options)
        .then((r: SweetAlertResult) => {
          if (r.value === true) {
            // Closed by OK button
            resolve(true);
          } else reject();
        })
        .catch(() => {
          // Closed by other than OK button (ESC, Backdrop...)
          reject()
        });
    });

  }

  static confirm(
    message?: string,
    title?: string,
    type?: SweetAlertType,
    reverseButtons?: boolean
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const options: SweetAlertOptions = {
        title,
        text: message,
        type,
        reverseButtons,
        showCancelButton: true,
        allowOutsideClick: false,
        keydownListenerCapture: true
      };

      Swal.fire(options)
        .then((r: SweetAlertResult) => {
          if (r.value === true) {
            // Closed by OK button
            resolve(true);
          } else reject();
        })
        .catch(() => reject());
    });
  }

  static prompt(
    message: string,
    defaultText?: string,
    title?: string,
    type?: SweetAlertType,
    reverseButtons?: boolean
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const options: SweetAlertOptions = {
        text: message,
        inputValue: defaultText,
        title,
        type,
        reverseButtons,
        input: "text",
        showCancelButton: true,
        allowOutsideClick: false,
        keydownListenerCapture: true
      };

      Swal.fire(options)
        .then(r => {
          return resolve(r.value);
        })
        .catch(() => {
          return reject();
        });
    });
  }

  static fire(options: SweetAlertOptions): Promise<SweetAlertResult> {
    return Swal.fire(options);
  }

  static install(vue: typeof Vue): void {
    vue["alert"] = VueSimpleAlert.alert;
    vue["confirm"] = VueSimpleAlert.confirm;
    vue["prompt"] = VueSimpleAlert.prompt;
    vue["fire"] = VueSimpleAlert.fire;

    if (!vue.prototype.hasOwnProperty("$alert")) {
      vue.prototype.$alert = VueSimpleAlert.alert;
    }
    if (!vue.prototype.hasOwnProperty("$confirm")) {
      vue.prototype.$confirm = VueSimpleAlert.confirm;
    }
    if (!vue.prototype.hasOwnProperty("$prompt")) {
      vue.prototype.$prompt = VueSimpleAlert.prompt;
    }
    if (!vue.prototype.hasOwnProperty("$fire")) {
      vue.prototype.$fire = VueSimpleAlert.fire;
    }
  }
}

export default VueSimpleAlert;
