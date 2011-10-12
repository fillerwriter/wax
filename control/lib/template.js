// Templating
// ---------
wax.template = function(x) {
    var template = {};

    function urlX(url) {
        if (/^https?:\/\//.test(url)) {
            return url;
        }
    }

    function idX(id) {
        return id;
    }

    // Wrap the given formatter function in order to
    // catch exceptions that it may throw.
    template.format = function(options, data) {
        var view = {};
        view[options.format] = data;
        return html_sanitize(Mustache.to_html(x, view), urlX, idX);
    };

    return template;
};
