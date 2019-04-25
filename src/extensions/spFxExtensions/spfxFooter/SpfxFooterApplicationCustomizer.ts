import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';

import styles from './SpfxFooter.module.scss';

import addStyleSheetRules from './lib/styles-sheet';
import checkForElemExistance from './services/elem-check';

import handlePrint from './services/print-handler';

const LOG_SOURCE: string = 'SpfxFooterApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpfxFooterApplicationCustomizerProperties {}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpfxFooterApplicationCustomizer
  extends BaseApplicationCustomizer<ISpfxFooterApplicationCustomizerProperties> {
  
  private _bottomPlaceholder: PlaceholderContent | undefined;

  private _footerText: string = `<footer id="spfx-footer" class="${styles.app}">
                                    <div class="${styles.bottom}">
                                        <div class="${styles.bold}">INTERNAL USE ONLY - DO NOT SHOW OR DISTRIBUTE TO THE PUBLIC.</div>
                                        <div>This material does NOT meet the requirements for use in printed or media form.</div>
                                        <div>© 2019 Edward D. Jones & Co., L.P. All rights reserved.</div>
                                    </div>
                                </footer>`;

  private _renderPlaceHolders(): void {
    // Handling the bottom placeholder
    if (!this._bottomPlaceholder) {
      this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Bottom,
        { onDispose: this._onDispose }
      );

      // The extension should not assume that the expected placeholder is available.
      if (!this._bottomPlaceholder) {
        console.error("The expected placeholder (Bottom) was not found.");
        return;
      }

      if (this.properties) {
        if (this._bottomPlaceholder.domElement) {
          this._bottomPlaceholder.domElement.innerHTML = this._footerText;
        }
      } else {
        console.warn("No props for footer found. Will not render footer.");
      }
    }
  }

  private _onDispose(): void {
    console.log('[SpfxFooterApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
  }

  private _defineRemove(): void {
    // Create Element.remove() function if not exist
    if (!('remove' in Element.prototype)) {
      /* eslint ignore next */
      Element.prototype.remove = function () {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }
  }

  public initExtension(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized SPFx Footer`);
    addStyleSheetRules();
    checkForElemExistance();
    handlePrint();
    
    this._defineRemove();

    // Wait for the placeholders to be created (or handle them being changed) and then
    // render.
    this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);

    return Promise.resolve<void>();
  }
}
