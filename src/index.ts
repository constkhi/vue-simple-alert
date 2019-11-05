import _Vue from "vue";
import Swal, {
  SweetAlertOptions,
  SweetAlertResult,
  SweetAlertType
} from "sweetalert2";

export class VueSimpleAlert {
  public static globalOptions: SweetAlertOptions;

  public static alert(
    message?: string,
    title?: string,
    type?: SweetAlertType,
    options?: SweetAlertOptions
  ): Promise<boolean> {
    return new Promise(resolve => {
      const mixedOptions: SweetAlertOptions = {
        ...VueSimpleAlert.globalOptions,
        ...options
      };
      mixedOptions.title = title || mixedOptions.title;
      mixedOptions.text = message || mixedOptions.text;
      mixedOptions.type = type || mixedOptions.type;

      Swal.fire(mixedOptions)
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          resolve(true);
        });
    });
  }

  public static confirm(
    message?: string,
    title?: string,
    type?: SweetAlertType,
    options?: SweetAlertOptions
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const mixedOptions: SweetAlertOptions = {
        ...VueSimpleAlert.globalOptions,
        ...options
      };
      mixedOptions.title = title || mixedOptions.title;
      mixedOptions.text = message || mixedOptions.text;
      mixedOptions.type = type || mixedOptions.type;
      mixedOptions.showCancelButton = true;

      Swal.fire(mixedOptions)
        .then((r: SweetAlertResult) => {
          if (r.value === true) {
            // Closed by OK button
            resolve(true);
          } else reject();
        })
        .catch(() => reject());
    });
  }

  public static prompt(
    message: string,
    defaultText?: string,
    title?: string,
    type?: SweetAlertType,
    options?: SweetAlertOptions
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const mixedOptions: SweetAlertOptions = {
        ...VueSimpleAlert.globalOptions,
        ...options
      };
      mixedOptions.title = title || mixedOptions.title;
      mixedOptions.inputValue = defaultText;
      mixedOptions.text = message || mixedOptions.text;
      mixedOptions.type = type || mixedOptions.type;
      mixedOptions.showCancelButton = true;
      mixedOptions.input = mixedOptions.input || "text";

      Swal.fire(mixedOptions)
        .then(r => {
          if (r.value) {
            // Closed by OK button
            resolve(r.value);
          } else reject();
        })
        .catch(() => {
          return reject();
        });
    });
  }

  public static fire(options: SweetAlertOptions): Promise<SweetAlertResult> {
    return Swal.fire(options);
  }

  static install(Vue: typeof _Vue, options: SweetAlertOptions): void {
    VueSimpleAlert.globalOptions = options;

    // Global properties
    Vue.alert = VueSimpleAlert.alert;
    Vue.confirm = VueSimpleAlert.confirm;
    Vue.prompt = VueSimpleAlert.prompt;
    Vue.fire = VueSimpleAlert.fire;

    // Instance properties
    if (!Vue.prototype.hasOwnProperty("$alert")) {
      Vue.prototype.$alert = VueSimpleAlert.alert;
    }
    if (!Vue.prototype.hasOwnProperty("$confirm")) {
      Vue.prototype.$confirm = VueSimpleAlert.confirm;
    }
    if (!Vue.prototype.hasOwnProperty("$prompt")) {
      Vue.prototype.$prompt = VueSimpleAlert.prompt;
    }
    if (!Vue.prototype.hasOwnProperty("$fire")) {
      Vue.prototype.$fire = VueSimpleAlert.fire;
    }
  }
}

declare module "vue/types/vue" {
  interface Vue {
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

export default VueSimpleAlert;
