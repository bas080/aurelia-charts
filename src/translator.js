/***
 * This class is a fake tranlation class. It has the tr method yet does not
 * perform translation. Instead the tr method returns the same string it was
 * given.
 *
 * When configuring aurelia charts one is able to overwrite this "Translator"
 * with I18N's class or another translation library
 */
export class Translator {

  tr(str) {
    return str;
  }

}
