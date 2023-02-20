import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import FontAwesomeIcon from '@/components/common/fontAwesome/FontAwesomeIcon.vue';
import {
	FontAwesomeIcon,
	FontAwesomeLayers,
	FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';
// import {
//   FontAwesomeLayers,
//   FontAwesomeLayersText,
// } from '@fortawesome/vue-fontawesome';

library.add(fas, faTwitter, faInstagram);

export { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText };
