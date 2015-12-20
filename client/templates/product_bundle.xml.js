var Template = function(station_id) {

  var station = stations[station_id];
  console.log('station', station_id, station)
  var image = 'http://player.pinguinradio.com/' + station.logo;
  var stream_url = (station.streams["Default Quality"] || station.streams["High Quality (320kbs)"])["mp3"];

  return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <productBundleTemplate>
      <background>
        <audio>
          <asset id="stream" src="${stream_url}"/>
        </audio>
      </background>
      <banner>
        <stack>
          <title>${station.name}</title>
          <text><strong>Now Playing:</strong></text>
          <text>Artist: <strong><span id="artist">...</span></strong></text>
          <text>Title: <strong><span id="title">...</span></strong></text>
        </stack>
        <heroImg id="heroImg" src="${image ? image : resourceLoader.BASEURL + 'images/static.gif'}"/>
      </banner>
    </productBundleTemplate>
  </document>`;
}
