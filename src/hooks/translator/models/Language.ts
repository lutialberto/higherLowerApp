export type LanguageKey = 'es';

export interface Language {
  components: {
    buttons: {
      back: string;
      next: string;
      validate: string;
      finish: string;
      confirm: string;
      cancel: string;
      edit: string;
      save: string;
      share: string;
      send: string;
      resend: string;
    };
    inputs: {
      selector: string;
      checkBox: {
        yes: string;
        no: string;
      };
      search: string;
    };
    errors: {
      apiCallErrorMessage: string;
    };
  };
}
