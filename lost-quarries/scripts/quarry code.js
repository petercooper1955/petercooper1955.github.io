var UnknownQuarry          = L.icon({ iconUrl: 'images/quarry00.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var QuaternaryQuarry       = L.icon({ iconUrl: 'images/quarry11.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var TertiaryQuarry         = L.icon({ iconUrl: 'images/quarry16.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var ChalkQuarry            = L.icon({ iconUrl: 'images/quarry18.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var GaultGreensandQuarry   = L.icon({ iconUrl: 'images/quarry21.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var PurbeckQuarry          = L.icon({ iconUrl: 'images/quarry06.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var PortlandQuarry         = L.icon({ iconUrl: 'images/quarry13.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var CorallianQuarry        = L.icon({ iconUrl: 'images/quarry04.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var KellawaysQuarry        = L.icon({ iconUrl: 'images/quarry15.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var CornbrashQuarry        = L.icon({ iconUrl: 'images/quarry20.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var ForestMarbleQuarry     = L.icon({ iconUrl: 'images/quarry14.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var GreatOoliteQuarry      = L.icon({ iconUrl: 'images/quarry05.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var FullersEarthQuarry     = L.icon({ iconUrl: 'images/quarry09.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var InferiorOoliteQuarry   = L.icon({ iconUrl: 'images/quarry02.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var BridportSandQuarry     = L.icon({ iconUrl: 'images/quarry01.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var BeaconLimestoneQuarry  = L.icon({ iconUrl: 'images/quarry12.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var MiddleLiasQuarry       = L.icon({ iconUrl: 'images/quarry17.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var BlueLiasQuarry         = L.icon({ iconUrl: 'images/quarry23.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var WhiteLiasQuarry        = L.icon({ iconUrl: 'images/quarry13.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var TriassicQuarry         = L.icon({ iconUrl: 'images/quarry03.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var PermoTriassicQuarry    = L.icon({ iconUrl: 'images/quarry08.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var CarboniferousQuarry    = L.icon({ iconUrl: 'images/quarry24.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });
var DevonianQuarry         = L.icon({ iconUrl: 'images/quarry25.png', iconSize: [30,20], iconAnchor: [15,10], popupAnchor: [0,0] });

function pointToLayer (feature, latlng){
    var popupContent = "";
    popupContent = popupContent + '<p class="Qtitle">' + feature.properties.name + '</p>';
    if (feature.properties.gridref) { popupContent += '<p>' + feature.properties.gridref + '</p>'; };
    popupContent = popupContent + '<p class="Qgeology">' + feature.properties.geology + '</p>';
    popupContent = popupContent + '<p>' + feature.properties.history + '</p>';
    if (feature.properties.linkText) {
        var string = feature.properties.linkText;
        string = string.replace(/!/g,'" target="_blank"><p>');
        string = string.replace(/;/g,'</p></a><a href="');
        popupContent = popupContent + '<a href="' + string + '</p></a>';
    };
    switch(feature.properties.geologyLayer) {
        case "Unknown":         var siteIcon = UnknownQuarry;          break;
        case "Quaternary":      var siteIcon = QuaternaryQuarry;       break;
        case "Tertiary":        var siteIcon = TertiaryQuarry;         break;
        case "Chalk":           var siteIcon = ChalkQuarry;            break;
        case "Gault-Greensand": var siteIcon = GaultGreensandQuarry;   break;
        case "Purbeck":         var siteIcon = PurbeckQuarry;          break;
        case "Portland":        var siteIcon = PortlandQuarry;         break;
        case "Corallian":       var siteIcon = CorallianQuarry;        break;
        case "Kellaways":       var siteIcon = KellawaysQuarry;        break;
        case "Cornbrash":       var siteIcon = CornbrashQuarry;        break;
        case "Forest Marble":   var siteIcon = ForestMarbleQuarry;     break;
        case "Great Oolite":    var siteIcon = GreatOoliteQuarry;      break;
        case "Fullers Earth":   var siteIcon = FullersEarthQuarry;     break;
        case "Inferior Oolite": var siteIcon = InferiorOoliteQuarry;   break;
        case "Bridport Sand":   var siteIcon = BridportSandQuarry;     break;
        case "Beacon Limestone":var siteIcon = BeaconLimestoneQuarry;  break;
        case "Middle Lias":     var siteIcon = MiddleLiasQuarry;       break;
        case "Blue Lias":       var siteIcon = BlueLiasQuarry;         break;
        case "White Lias":      var siteIcon = WhiteLiasQuarry;        break;
        case "Triassic":        var siteIcon = TriassicQuarry;         break;
        case "Permo-Triassic":  var siteIcon = PermoTriassicQuarry;    break;
        case "Carboniferous":   var siteIcon = CarboniferousQuarry;    break;
        case "Devonian":        var siteIcon = DevonianQuarry;         break;
    }
    var myMarker = L.marker(latlng,{icon: siteIcon});
    myMarker.bindPopup(popupContent);
    myMarker.bindTooltip(feature.properties.name);
    return myMarker
}

function onEachFeature(feature,layer) {
    switch(feature.properties.geologyLayer) {
        case "Unknown":          UnknownGroup.addLayer(layer);          break;
        case "Quaternary":       QuaternaryGroup.addLayer(layer);       break;
        case "Tertiary":         TertiaryGroup.addLayer(layer);         break;
        case "Chalk":            ChalkGroup.addLayer(layer);            break;
        case "Gault-Greensand":  GaultGreensandGroup.addLayer(layer);   break;
        case "Purbeck":          PurbeckGroup.addLayer(layer);          break;
        case "Portland":         PortlandGroup.addLayer(layer);         break;
        case "Corallian":        CorallianGroup.addLayer(layer);        break;
        case "Kellaways":        KellawaysGroup.addLayer(layer);        break;
        case "Cornbrash":        CornbrashGroup.addLayer(layer);        break;
        case "Forest Marble":    ForestMarbleGroup.addLayer(layer);     break;
        case "Great Oolite":     GreatOoliteGroup.addLayer(layer);      break;
        case "Fullers Earth":    FullersEarthGroup.addLayer(layer);     break;
        case "Inferior Oolite":  InferiorOoliteGroup.addLayer(layer);   break;
        case "Bridport Sand":    BridportSandGroup.addLayer(layer);     break;
        case "Beacon Limestone": BeaconLimestoneGroup.addLayer(layer);  break;
        case "Middle Lias":      MiddleLiasGroup.addLayer(layer);       break;
        case "Blue Lias":        BlueLiasGroup.addLayer(layer);         break;
        case "White Lias":       WhiteLiasGroup.addLayer(layer);        break;
        case "Triassic":         TriassicGroup.addLayer(layer);         break;
        case "Permo-Triassic":   PermoTriassicGroup.addLayer(layer);    break;
        case "Carboniferous":    CarboniferousGroup.addLayer(layer);    break;
        case "Devonian":         DevonianGroup.addLayer(layer);         break;
    }
}

var UnknownGroup = new L.LayerGroup();
var QuaternaryGroup = new L.LayerGroup();
var TertiaryGroup = new L.LayerGroup();
var ChalkGroup = new L.LayerGroup();
var GaultGreensandGroup = new L.LayerGroup();
var PurbeckGroup = new L.LayerGroup();
var PortlandGroup = new L.LayerGroup();
var CorallianGroup = new L.LayerGroup();
var KellawaysGroup = new L.LayerGroup();
var CornbrashGroup = new L.LayerGroup();
var ForestMarbleGroup = new L.LayerGroup();
var GreatOoliteGroup = new L.LayerGroup();
var FullersEarthGroup = new L.LayerGroup();
var InferiorOoliteGroup = new L.LayerGroup();
var BridportSandGroup = new L.LayerGroup();
var BeaconLimestoneGroup = new L.LayerGroup();
var MiddleLiasGroup = new L.LayerGroup();
var BlueLiasGroup = new L.LayerGroup();
var WhiteLiasGroup = new L.LayerGroup();
var TriassicGroup = new L.LayerGroup();
var PermoTriassicGroup = new L.LayerGroup();
var CarboniferousGroup = new L.LayerGroup();
var DevonianGroup = new L.LayerGroup();

var overlayMaps = {
    "Unknown": UnknownGroup,
    "Quaternary": QuaternaryGroup,
    "Tertiary": TertiaryGroup,
    "Chalk": ChalkGroup,
    "Gault-Greensand": GaultGreensandGroup,
    "Purbeck": PurbeckGroup,
    "Portland": PortlandGroup,
    "Corallian": CorallianGroup,
    "Kellaways": KellawaysGroup,
    "Cornbrash": CornbrashGroup,
    "Forest Marble": ForestMarbleGroup,
    "Great Oolite": GreatOoliteGroup,
    "Fullers Earth": FullersEarthGroup,
    "Inferior Oolite": InferiorOoliteGroup,
    "Bridport Sand": BridportSandGroup,
    "Beacon Limestone": BeaconLimestoneGroup,
    "Middle Lias": MiddleLiasGroup,
    "Blue Lias": BlueLiasGroup,
    "White Lias": WhiteLiasGroup,
    "Triassic": TriassicGroup,
    "Permo-Triassic": PermoTriassicGroup,
    "Carboniferous": CarboniferousGroup,
    "Devonian": DevonianGroup
};
