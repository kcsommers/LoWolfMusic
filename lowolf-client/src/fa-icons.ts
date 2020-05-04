import {
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faFacebookF,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faCopyright
} from '@fortawesome/free-regular-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

export class FaIcons {
  constructor() { }
  public static init(library: FaIconLibrary) {
    library.addIcons(
      faFacebook,
      faCopyright,
      faInstagram,
      faFacebookF,
      faTwitter,
      faAngleRight,
      faAngleLeft
    );
  }
}
