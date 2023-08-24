import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faArrowRightFromBracket, faUserGroup, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(faBars, faArrowRightFromBracket, faUserGroup, faRightToBracket)

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.component('font-awesome-icon', FontAwesomeIcon)
})