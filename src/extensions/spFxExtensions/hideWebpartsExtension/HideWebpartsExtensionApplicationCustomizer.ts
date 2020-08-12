import { Log } from '@microsoft/sp-core-library';

import addStylesheetRules from './lib/styles-sheet';

import {
  handleSearch,
  handleBackButton,
  handleCategoryChange,
  handleCategoryLinkClick,
  handleSearchClear,
  handleSeeAllClick
} from './services/webpart-list-handlers';

import mutationObserver from './services/mutation-obs';

import whiteList from './config/white-list';

const LOG_SOURCE = 'HideWebpartsExtensionApplicationCustomizer';


/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HideWebpartsExtensionApplicationCustomizer {
  // extends BaseApplicationCustomizer<{}> {


  private static showWhitelistedItems() {
    
    setTimeout(() => {
      handleSearch(() => {this.showWhitelistedItems();});
      handleCategoryLinkClick(() => {this.showWhitelistedItems();});
      handleCategoryChange(() => {this.showWhitelistedItems();});
      handleSeeAllClick(() => {this.showWhitelistedItems();});
      handleBackButton(() => {this.showWhitelistedItems();});
      handleSearchClear(() => {this.showWhitelistedItems();});
      
      let buttons = document.querySelectorAll('div.ms-Callout:not([class*="sectionCallout_"]) button.ms-Button');
      // window["buttonsBlackList"] = [];
      for (let i = 0; i < buttons.length; i++) {
        // for (let item of buttons) {
        let item = buttons[i];
        let title = item.getAttribute('aria-label');
        console.log(" title is "+title);
          if (whiteList.indexOf(title) !== -1) {
            item["style"].display = "inline-block";
          } else {
            // window["buttonsBlackList"].push(title);
          }
      }


      let buttonsFromExpandedPanel = document.querySelectorAll('div.ms-Dialog-main div[data-automation-id="spPageCanvasLargeToolboxBody"] button');

      // window["expandedBlacklist"] = [];
      for (let i = 0; i < buttonsFromExpandedPanel.length; i++) {
        // for (let item of buttonsFromExpandedPanel) {
        let item = buttonsFromExpandedPanel[i];
        let title = item['ariaLabel'];
        
          if (whiteList.indexOf(title) !== -1) {
            item["style"].display = "inline-block";
          } else {
            // window["buttonsBlackList"].push(title);
          }
      }
    }, 500);

  }

  public static initExtension() {
    Log.info(LOG_SOURCE, `Initialized "Hide Webparts Extensions"`);

    if (document.location.href.toLowerCase().indexOf('/_layouts/15/sharepoint.aspx') === -1) {
      mutationObserver(() => {
        this.showWhitelistedItems();
      });
      addStylesheetRules();
    }
  }
}
