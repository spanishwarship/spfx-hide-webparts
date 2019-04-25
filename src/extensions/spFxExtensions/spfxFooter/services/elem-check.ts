import Selectors from '../config/selectors';

function checkForElementsExistance() {
    if (!document.querySelector(Selectors.bottomPlaceholder)) {
        console.warn("spfx-footer: Elem Check - Bottom Placeholder Not Found");
    }
    if (!document.querySelector(Selectors.editableRegion)) {
        console.warn("spfx-footer: Elem Check - Editable Region Not Found");
    }
    if (!document.querySelector(Selectors.pageRegion)) {
        console.warn("spfx-footer: Elem Check - Page Region Not Found");
    }
    if (!document.querySelector(Selectors.topBar)) {
        console.warn("spfx-footer: Elem Check - Top Bar Not Found");
    }
}

export default checkForElementsExistance;