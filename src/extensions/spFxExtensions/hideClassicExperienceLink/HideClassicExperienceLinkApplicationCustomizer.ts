import { Log } from '@microsoft/sp-core-library';

const LOG_SOURCE: string = 'HideClassicExperienceLinkApplicationCustomizer';

export default class HideClassicExperienceLinkApplicationCustomizer {

  private static addStylesheetRules() {
    var styleEl = document.createElement('style');

    // Append <style> element to <head>
    document.head.appendChild(styleEl);

    // Grab style element's sheet
    var styleSheet = styleEl.sheet;

    // Insert CSS Rule
    styleSheet["insertRule"]('.LeftNav-subLinks > .LeftNav-notificationLink { display: none }', 0);
  }
  
  public static initExtension(): void {
    Log.info(LOG_SOURCE, `Initialized: HideClassicExp`);

    this.addStylesheetRules();
  }
}
