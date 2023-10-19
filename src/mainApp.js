/**
 *@author ooganesyan
 *
 */
//
//Libs
import 'requirejs';
//
import 'backbone';
import _, { map } from 'underscore';
import {Collection, Model, View, Router, Events, VERSION} from 'backbone';
//import {LocalStorage} from 'backbone';
import 'jquery';
import 'three';
// import fs from "fs";
// import { View } from 'backbone';
// import { Module } from 'backbone';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
Splitting();
//
import 'jspdf';
//import '/src/utils/pdfUtil/pdf.js';
//
//import 'mini-css-extract-plugin';
//import  'image-minimizer-webpack-plugin';
//
//CSS
import '/src/css/main.css';
import '/src/css/vendor.css';
import '/src/css/base.css';
import '/src/css/mainPanels.css';
import '/src/partials/colorBar/css/colorBar.css';
import '/src/partials/leftButton/css/leftButton.css';
import '/src/partials/topSubPanel/css/basicTopPanel.css';
import '/src/partials/topSubPanel/css/basicTopPanelButton.css';
import '/src/partials/centralPanel/css/centralPanelsStyles.css'
//
//JS
import '/src/js/basicFiles/main.js';
//
import '/src/js/basicFiles/please.js';
//
import '/src/partials/colorBar/js/initColor.js';
//
import '/src/utils/GUID/generateGUID.js';
//
import '/src/js/websockets/initWebSocket.js';
import '/src/js/webworkers/initWebWorker';
//
import '/src/js/handlingPdf/textToPdf.js';
//
import '/src/partials/leftButton/models/leftButtonModel.js';
import '/src/partials/leftButton/views/leftButtonView.js';
import '/src/partials/leftButton/js/toggleButton.js';


//
//Fonts
import '/src/fonts/AlanisHand.ttf';
import '/src/fonts/rusty-cellair.ttf';
import '/src/fonts/Sacramento-Regular.ttf';
//
//pdf
import "/src/data/pdfFiles/BenAlmanTheres_no_such_thing_as_a_JSON.pdf"
//
//imgs
import '../src/img/merlin_118_80.png';


console.log("mainApp.js has started!");