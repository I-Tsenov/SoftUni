function requestValidator (httpObj) {

    let uriPattern = /^[A-Za-z0-9.]+$/g
    let mssgPattern = /^[^<>\\'"&]+$/g;

    if (!['CONNECT', 'GET', 'POST', 'DELETE'].includes(httpObj.method)) {
        throw new Error (`Invalid request header: Invalid Method`);
    }

    if (!uriPattern.test(httpObj.uri) && httpObj.uri !== '*' || httpObj.uri === undefined) {
        throw new Error (`Invalid request header: Invalid URI`);
    }

    if (!['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(httpObj.version)){
        throw new Error (`Invalid request header: Invalid Version`);
    }

    if (!mssgPattern.test(httpObj.message) && httpObj.message !== '' || httpObj.message === undefined) {
        throw new Error (`Invalid request header: Invalid Message`);
    }

    return httpObj
}




console.log(requestValidator({
    method: 'GET',
    uri: 'svn.publi.catalog',
    version: 'HTTP/1.1',
    message: ''
  }))