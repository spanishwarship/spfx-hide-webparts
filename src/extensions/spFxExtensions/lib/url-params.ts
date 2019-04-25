function getUrlParams(param): string {
    let urlParam = new URLSearchParams(document.location.search).get(param);

    return urlParam;
}

export default getUrlParams;