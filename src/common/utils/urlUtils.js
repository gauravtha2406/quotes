export function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;
    // eslint-disable-next-line
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

export function sortFeatureDisabled() {
    var query = getQueryParams(document.location.search);
    let sortValue = query.sort ? query.sort.toLowerCase() : null;
    if (sortValue === "false" || sortValue)
        return true
    else return false
}

export function audioFeatureKey() {
    var query = getQueryParams(document.location.search);
    let audioValue = query.audio ? query.audio.toLowerCase() : null;
    if (audioValue === "true" || audioValue)
        return true
    else return false
}

export function adminFeatureKey() {
    var query = getQueryParams(document.location.search);
    let admin = query.admin ? query.admin.toLowerCase() : null;
    if (admin === "true" || admin)
        return true
    else return false
}

export function newSelectFeatureKey() {
    var query = getQueryParams(document.location.search);
    let newSelect = query.newSelect ? query.newSelect.toLowerCase() : null;
    if (newSelect === "true" || newSelect)
        return true
    else return false
}

export function quoteImageFeatureKey() {
    var query = getQueryParams(document.location.search);
    let quoteImage = query.quoteImage ? query.quoteImage.toLowerCase() : null;
    if (quoteImage === "true" || quoteImage)
        return true
    else return false
}