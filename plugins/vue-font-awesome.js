import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faVirus,
  faNewspaper,
  faViruses,
  faHeadSideCough,
  faSkullCrossbones,
  faHeartbeat
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faVirus,
  faNewspaper,
  faViruses,
  faHeadSideCough,
  faSkullCrossbones,
  faHeartbeat
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
