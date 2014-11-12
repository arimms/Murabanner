/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['alfa-slab-one, serif']='<script src=\"http://use.edgefonts.net/alfa-slab-one:n4:all.js\"></script>';
    fonts['ubuntu-condensed, sans-serif']='<script src=\"http://use.edgefonts.net/ubuntu-condensed:n4:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Bannerbok',
                type: 'image',
                rect: ['30px', '30px','250px','340px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Bannerbok.jpg",'0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','310px','400px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['0px', '19px','310px','358px','auto', 'auto'],
                text: "Ný skáldsaga eftir einn vinsælasta og virtasta höfund samtímans, <br><br>Haruki Murakami. ",
                align: "center",
                font: ['ubuntu-condensed, sans-serif', 35, "rgba(79,79,79,1.00)", "100", "none", ""]
            },
            {
                id: 'Untitled-2',
                type: 'image',
                rect: ['80px', '238px','150px','150px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"Untitled-2.jpg",'0px','0px']
            },
            {
                id: 'bjartur-300x122',
                type: 'image',
                rect: ['5px', '116px','300px','122px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"bjartur-300x122.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_bjartur-300x122}": [
                ["style", "top", '116px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(79,79,79,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '310px'],
                ["style", "top", '19px'],
                ["style", "text-align", 'center'],
                ["style", "height", '358px'],
                ["style", "font-family", 'ubuntu-condensed, sans-serif'],
                ["style", "font-weight", '100'],
                ["style", "font-size", '35px']
            ],
            "${_Bannerbok}": [
                ["style", "top", '37px'],
                ["style", "left", '30px'],
                ["transform", "skewX", '0deg']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '310px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(192,192,192,1)'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
                ["style", "opacity", '1']
            ],
            "${_Untitled-2}": [
                ["style", "top", '238px'],
                ["style", "opacity", '0'],
                ["style", "left", '80px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11500,
            autoPlay: true,
            timeline: [
                { id: "eid67", tween: [ "style", "${_bjartur-300x122}", "opacity", '1', { fromValue: '0'}], position: 8560, duration: 1440 },
                { id: "eid75", tween: [ "style", "${_bjartur-300x122}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 500 },
                { id: "eid6", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(192,192,192,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 0, duration: 2000 },
                { id: "eid70", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(192,192,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1.00)'}], position: 10500, duration: 0 },
                { id: "eid71", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(192,192,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1.00)'}], position: 11400, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Bannerbok}", "left", '30px', { fromValue: '30px'}], position: 2000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Bannerbok}", "left", '393px', { fromValue: '30px'}], position: 4285, duration: 250 },
                { id: "eid39", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 4535, duration: 200 },
                { id: "eid40", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 7915, duration: 300 },
                { id: "eid51", tween: [ "style", "${_Untitled-2}", "opacity", '1', { fromValue: '0'}], position: 4735, duration: 415 },
                { id: "eid64", tween: [ "style", "${_Untitled-2}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 415 },
                { id: "eid15", tween: [ "style", "${_Bannerbok}", "top", '37px', { fromValue: '37px'}], position: 2000, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 1000 },
                { id: "eid84", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 10500, duration: 900 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2538840699");
