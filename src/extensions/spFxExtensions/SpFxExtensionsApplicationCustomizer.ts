import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';

const LOG_SOURCE: string = 'SpFxExtensionsApplicationCustomizer';

import HideClassicExp from './hideClassicExperienceLink/HideClassicExperienceLinkApplicationCustomizer';
import HideWebparts from './hideWebpartsExtension/HideWebpartsExtensionApplicationCustomizer';
import Footer from './spfxFooter/SpfxFooterApplicationCustomizer';


import { getBrowser } from './lib/utils';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpFxExtensionsApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
  browser: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpFxExtensionsApplicationCustomizer
  extends BaseApplicationCustomizer<ISpFxExtensionsApplicationCustomizerProperties> {
    constructor(props) {
      super();

      this.properties.browser = getBrowser();
    }

    private _footer = null;

    public _onNavigate(): void {
      if (this.context && this.context.placeholderProvider) {
        for (let placeHolder of this.context.placeholderProvider["_placeholderContents"]) {
          
          if (getBrowser() === "app") {
            placeHolder.dispose();
          }          
        }
      }
      
        // if (this._footer) {
        //   // this._footer.dispose();
        // }
        
        this._footer.initExtension();
  
    }

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized "SPFx Extensions"`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    HideClassicExp.initExtension();
    HideWebparts.initExtension();

    this._footer = new Footer({context: this.context});

    this.context.application.navigatedEvent.add(this, () => {this._onNavigate();});

    return Promise.resolve();
  }
}
