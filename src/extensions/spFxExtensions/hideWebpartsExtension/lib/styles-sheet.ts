function addStylesheetRules() {
  var styleEl = document.createElement('style');

  // Append <style> element to <head>
  document.head.appendChild(styleEl);

  styleEl.id = "spfx-hide-webparts";
  // Grab style element's sheet
  var styleSheet = styleEl.sheet;

    // console.log(styleSheet.insertRule)
  // Insert CSS Rule
  styleSheet["insertRule"]('@media print{div[class^="belowHeader_"] {margin-bottom:30px}}', 0)
  
  // Insert CSS Rule
  styleSheet["insertRule"]('div[id^="toolbox-callout"]:not([class*="sectionCallout_"]) button.ms-Button { display: none }', 0)
  styleSheet["insertRule"]('div[id^="toolbox-callout"]:not([class*="sectionCallout_"]) button.ms-Button[class*="farButton_"] { display: inline-block }', 0)

  styleSheet["insertRule"]('div.ms-Dialog-main div[class^="grid_"] { display: none }', 0)
  // styleSheet["insertRule"]('div.ms-Dialog-main div[class^="grid_" button.ms-Button { display: none }', 0)
  styleSheet["insertRule"]('div.ms-Dialog-main button.ms-Button[class*="farButton_"] { display: inline-block }', 0)
}

export default addStylesheetRules