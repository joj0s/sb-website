import DefaultLayout from "~/layouts/Default.vue";

import VueScrollactive from "vue-scrollactive";
import VueScrollTo from "vue-scrollto";
import Particles from "particles.vue";
import VueTypedJs from "vue-typed-js";

import {
  VBScrollspyPlugin,
  NavPlugin,
  AlertPlugin,
  CardPlugin,
  LayoutPlugin,
  ButtonPlugin,
  CarouselPlugin,
  NavbarPlugin,
  ModalPlugin,
  SpinnerPlugin,
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faLeanpub,
  faGithub,
  faGitlab,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFileCode,
  faGraduationCap,
  faUserFriends,
  faChevronUp,
  faChevronDown,
  faTimes,
  faFilePowerpoint,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Cloudinary from "cloudinary-vue";

config.autoAddCss = false;

library.add(
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
  faGitlab,
  faYoutube,
  faLeanpub,
  faFileCode,
  faChevronUp,
  faChevronDown,
  faGraduationCap,
  faUserFriends,
  faTimes,
  faFilePowerpoint,
  faEnvelope
);

export default function(Vue, { router, head, isClient }) {
  // Preload requests to Google Fonts API
  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  });
  head.link.push({
    rel: "preload",
    as: "style",
    href:
      "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&family=Roboto:wght@300&display=swap",
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&family=Roboto:wght@300&display=swap",
    media: "print",
    onload: "this.media='all'",
  });

  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);

  // A global mixin to extract Cloudinary public ids from image paths
  Vue.mixin({
    methods: {
      getImageCloudinaryId(imagePath) {
        return imagePath
          .split("/")
          .slice(7)
          .join("/");
      },
    },
  });
  Vue.use(Cloudinary, {
    configuration: { cloudName: "dk5dlrnv1" },
  });
  Vue.use(VBScrollspyPlugin);
  Vue.use(NavPlugin);
  Vue.use(AlertPlugin);
  Vue.use(CardPlugin);
  Vue.use(LayoutPlugin);
  Vue.use(CarouselPlugin);
  Vue.use(ButtonPlugin);
  Vue.use(NavbarPlugin);
  Vue.use(ModalPlugin);
  Vue.use(VueScrollactive);
  Vue.use(VueScrollTo);
  Vue.use(VueTypedJs);

  Vue.use(Particles);
  Vue.use(SpinnerPlugin);
  if (process.isClient) {
    const Carousel = require("vue-owl-carousel");
    Vue.component("carousel", Carousel);
  }
}
