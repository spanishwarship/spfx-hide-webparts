function mutationObserver(callback) {
    var bodyObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        
        if (mutation && mutation.addedNodes.length > 0 && mutation.addedNodes[0]["className"] && mutation.addedNodes[0]["className"].indexOf && mutation.addedNodes[0]["className"].indexOf('ms-Layer') !== -1) {
          callback();
        }
      });
    });

    bodyObserver.observe(document.querySelector('body'), {
      attributes: false,
      characterData: false,
      childList: true,
      subtree: false,
      attributeOldValue: false,
      characterDataOldValue: false
    });

    var mutationObs = new MutationObserver((mutations) => {

      mutations.forEach((mutation) => {
        document["divList"] = document["divList"] || [];
        if (mutation.type === "childList") {

          
          if (mutation && mutation.addedNodes.length > 0 && mutation.addedNodes[0] && mutation.addedNodes[0]["className"] && mutation.addedNodes[0]["className"].indexOf && mutation.addedNodes[0]["className"].indexOf('container_') !== -1) {
            callback();
          }
        }
      });
    });

    let canvas = document.querySelector('.SPCanvas');

    if (canvas && document.location.href.toLowerCase().indexOf('/_layouts/15/sharepoint.aspx') === -1) {
      mutationObs.observe(document.querySelector('.SPCanvas'), {
        attributes: false,
        characterData: false,
        childList: true,
        subtree: true,
        attributeOldValue: false,
        characterDataOldValue: false
      });
    }
  }

  export default mutationObserver;