import format from "string-template";

// Import all the languages that your application can be translated to.
import enus from "./languages/enus";
import ptbr from "./languages/ptbr";

import { Language } from "./ELanguage";
import EKey from "./EKey";
import Dictionary from "./dict";
import { useState, useEffect } from "react";

// Insert all the languages in this constant.
const translations: { [l in Language]: Dictionary } = {
  enus,
  ptbr
};

export class Translator {
  language: Language;

  constructor(language: Language) {
    this.language = language;
  }

  get(key: EKey, opt?: object): string {
    if (opt) {
      return format(translations[this.language][key], opt);
    } else {
      return translations[this.language][key];
    }
  }

  getByObj(obj: { [l in Language]: string }, opt?: object) {
    if (obj[this.language]) {
      if (opt) {
        return format(obj[this.language], opt);
      } else {
        return obj[this.language];
      }
    } else {
      return "***MISSING TRANSLATION***";
    }
  }
}

export function useTranslator(language: Language) {
  const [translator, setTranslator] = useState(new Translator(language));

  useEffect(() => {
    setTranslator(new Translator(language));
  }, [language]);

  return translator;
}
