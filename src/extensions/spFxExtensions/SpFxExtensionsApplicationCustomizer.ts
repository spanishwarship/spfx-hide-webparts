import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

const LOG_SOURCE: string = 'SpFxExtensionsApplicationCustomizer';

import HideClassicExp from './hideClassicExperienceLink/HideClassicExperienceLinkApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpFxExtensionsApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpFxExtensionsApplicationCustomizer
  extends BaseApplicationCustomizer<ISpFxExtensionsApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized "SPFx Extensions"`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    Dialog.alert(`Hello from "SPFx Extensions":\n\n${message}`);

    HideClassicExp.initExtension();

    return Promise.resolve();
  }
}
