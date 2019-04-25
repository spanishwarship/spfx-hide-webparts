import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';

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
    Log.info(LOG_SOURCE, `Initialized: HideClassicExp`);

    this.addStylesheetRules();
  }
}
