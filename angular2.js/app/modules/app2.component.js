/// <reference path="home.tmpl.html" />
(function (app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'TS-Link',
      templateUrl: 'app/home.tmpl.html'
    })
    .Class({
      constructor: function () { }
    });
})(window.app || (window.app = {}));
