function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AAIzaSyDkY1q6yp-ilLRcGVIVxkhTL0Dcbi32Xe8');
}
var responseString;
function search() {
    var query = document.getElementById('txtSource').value;
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:query
    });
    request.execute(onSearchResponse);
}

function onSearchResponse(response) {

    var responseString = JSON.stringify(response,'',2);
    document.getElementById("response").innerHTML += responseString;
}