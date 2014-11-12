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
                fill: ["rgba(0,0,0,0)",im+"Untitled-2.jpg",'0px','0px']
            },
            {
                id: 'bjartur-300x122',
                type: 'image',
                rect: ['5px', '116px','300px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bjartur-300x122.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["color", "color", 'rgba(79,79,79,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '310px'],
                ["style", "top", '19px'],
                ["style", "text-align", 'center'],
                ["style", "height", '358px'],
                ["style", "font-family", 'ubuntu-condensed, sans-serif'],
                ["style", "font-size", '35px'],
                ["style", "font-weight", '100']
            ],
            "${_Bannerbok}": [
                ["style", "top", '37px'],
                ["style", "left", '30px'],
                ["transform", "skewX", '0deg']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '310px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(192,192,192,1)'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
                ["style", "opacity", '1']
            ],
            "${_bjartur-300x122}": [
                ["style", "top", '116px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px']
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
            duration: 14000,
            autoPlay: true,
            timeline: [
                { id: "eid15", tween: [ "style", "${_Bannerbok}", "top", '37px', { fromValue: '37px'}], position: 2000, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 12100, duration: 1000 },
                { id: "eid84", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 13100, duration: 900 },
                { id: "eid51", tween: [ "style", "${_Untitled-2}", "opacity", '1', { fromValue: '0'}], position: 6130, duration: 415 },
                { id: "eid64", tween: [ "style", "${_Untitled-2}", "opacity", '0', { fromValue: '1'}], position: 10100, duration: 415 },
                { id: "eid67", tween: [ "style", "${_bjartur-300x122}", "opacity", '1', { fromValue: '0'}], position: 11160, duration: 1440 },
                { id: "eid75", tween: [ "style", "${_bjartur-300x122}", "opacity", '0', { fromValue: '1'}], position: 12600, duration: 500 },
                { id: "eid39", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 5930, duration: 200 },
                { id: "eid40", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 10515, duration: 300 },
                { id: "eid6", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(192,192,192,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1)'}], position: 0, duration: 2000 },
                { id: "eid70", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(192,192,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1.00)'}], position: 13100, duration: 0 },
                { id: "eid71", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(192,192,192,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(192,192,192,1.00)'}], position: 14000, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Bannerbok}", "left", '30px', { fromValue: '30px'}], position: 2000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Bannerbok}", "left", '393px', { fromValue: '30px'}], position: 5680, duration: 250 }            ]
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
