Number.parseFloat('12.4px'); // --> 12.4
Number.parseInt('12.4px'); // --> 12
Number.parseInt('font-size: 12.4px'); // --> NaN

Number('4'); // --> 4
+'4'; // --> 4
'4' * 1; // --> 4

13.8143.toFixed(2); // --> '13.81'
13.8143.toFixed(2) * 1; // --> 13.81
parseFloat(13.8143.toFixed(2)); // --> 13.81