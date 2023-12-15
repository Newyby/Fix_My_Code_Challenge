/**
 * Custom example that imports jQuery and adds a click handler.
 * @namespace
 */
var Sample = (function () {
    // Function to import a script dynamically
    var importScript = (function (oHead) {
        function loadError(oError) {
            throw new URIError("The script " + oError.target.src + " is not accessible.");
        }

        return function (sSrc, fOnload) {
            var oScript = document.createElement("script");
            oScript.type = "text/javascript";
            oScript.onerror = loadError;

            if (fOnload) {
                oScript.onload = fOnload;
            }

            oHead.appendChild(oScript);
            oScript.src = sSrc;
        };
    })(document.head || document.getElementsByTagName("head")[0]);

    // Function to add a click handler
    var addClickHandler = function () {
        $(document).on('click', '.sample-button', function () {
            alert('You clicked the button');
        });
    };

    // Check if jQuery is defined, if not, import it dynamically
    if (typeof $ === 'undefined') {
        importScript('https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js', function () {
            addClickHandler();
        });
    } else {
        addClickHandler();
    }
})();

