import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';

import getUrlParam from './lib/url-params';
import adminUsers from './config/admins';

import debugLog from './services/debug-logger';

// import * as strings from 'HideClassicExperienceLinkApplicationCustomizerStrings';

const LOG_SOURCE: string = 'HideClassicExperienceLinkApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHideClassicExperienceLinkApplicationCustomizerProperties {
  // This is an example; replace with your own property
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HideClassicExperienceLinkApplicationCustomizer
  // extends BaseApplicationCustomizer<IHideClassicExperienceLinkApplicationCustomizerProperties> {
    extends BaseApplicationCustomizer<IHideClassicExperienceLinkApplicationCustomizerProperties> {

  private checkUserForAdmin(): Boolean {
    let isAdmin = false;
    let user = this.context.pageContext.user.email.toLowerCase();

    debugLog(user);
    adminUsers.forEach((admin) => {
      debugLog(admin);
      if (admin.toLowerCase() === user) {
        isAdmin = true;
      }
    });

    debugLog("checkUserForAdmin - isAdmin: ", isAdmin);
    
    if (isAdmin) {
      return true;
    } else {
      return false;
    }
  }

  private addStylesheetRules() {
    var styleEl = document.createElement('style');

    // Append <style> element to <head>
    document.head.appendChild(styleEl);

    // Grab style element's sheet
    var styleSheet = styleEl.sheet;


    // Insert CSS Rule
    styleSheet["insertRule"]('.LeftNav-subLinks > .LeftNav-notificationLink { display: none }', 0);

  }

  @override
  public initExtension(): void {
    alert("ITS IN!");
    Log.info(LOG_SOURCE, `Initialized: HideClassicExp`);

    let debugParam = getUrlParam('wcm-debug');

    debugLog('wcm-debug param: ', debugParam);
    if (debugParam === "true") {
      if (!this.checkUserForAdmin()) {
        debugLog("Debug mode and user is in whitelist, showing 'classic experience' link.");
        this.addStylesheetRules();
      }
    } else {
      debugLog("Not in debug mode, adding stylesheet");
      this.addStylesheetRules();
    }
  }
}
