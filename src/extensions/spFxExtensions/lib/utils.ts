export function getBrowser() : string {
    if (navigator.userAgent.indexOf('Linux') != -1 && navigator.userAgent.indexOf('wv') != -1) {
        console.log("SharePoint APP - Android");
        return "app";
    } else if (navigator.userAgent.indexOf('iPhone') != -1 && navigator.userAgent.indexOf('Safari') == -1) {
        console.log("SharePoint APP - iOS iphone");
        return "app";

    } else if (navigator.userAgent.indexOf('iPad') != -1 && navigator.userAgent.indexOf('Safari') == -1) {
        console.log("SharePoint APP - iOS iPad");
        return "app";

    } else if (navigator.userAgent.indexOf('iPhone') != -1 && navigator.userAgent.indexOf('Safari') == -1) {
        console.log("SharePoint APP - iOS Iphone");
        return "app";

    } else if (navigator.userAgent.indexOf('Teams') != -1 && navigator.userAgent.indexOf('Electron') != -1) {
        console.log("Microsoft Teams - Desktop APP");
        return "app";
    } else {
        console.log("Browser");
        return "browser";
    }
}

export default {
    getBrowser
};