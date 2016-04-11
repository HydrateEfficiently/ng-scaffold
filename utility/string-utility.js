(() => {
'use strict';

    module.exports.dashedToCamelCase = function (str) {
        return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    };

    module.exports.camelCaseToDashed = function (str) {
        return str.replace(/(?:^|\.?)([A-Z])/g, (x, y) => `-${y.toLowerCase()}`).replace(/^_/, "");
    };

    module.exports.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

} ());