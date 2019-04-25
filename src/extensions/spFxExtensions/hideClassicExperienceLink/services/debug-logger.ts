import getUrlParam from '../lib/url-params';

function debugLog(...data): void {
    if (getUrlParam('debugLog') === "true") {
        console.log(...data);
    }
}

export default debugLog;