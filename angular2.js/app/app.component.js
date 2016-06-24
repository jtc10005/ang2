//= require directives/dashboard-component
//= require directives/heroes-component
//= require directives/hero-detail-component
//= require services/heroes-service

(function (app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'TS-Link',
      //directives: [ng.router.ROUTER_DIRECTIVES],
      //providers: [ng.router.ROUTER_PROVIDERS, ng.http.HTTP_PROVIDERS], // ng.http.HTTP_PROVIDERS enables to use http and get the list from the server
      template: "<h1>{{title}}</h1>" 
    }).Class({
      constructor: function () {
      //  router.config([
      //      { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
      //      { path: '/heroes-list', name: 'Heroes', component: HeroesComponent },
      //      { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent }
      //  ]);

        this.title = 'TEst';
      }
    });
    //  selector: 'TS-Link',
    //  directives: [ng.router.ROUTER_DIRECTIVES],
    //  providers: [ng.router.ROUTER_PROVIDERS, ng.http.HTTP_PROVIDERS],
    //  templateUrl: 'app/home.tmpl.html'
    //})
    //.Class({
    //  constructor: function () { }
    //});
})(window.app || (window.app = {}));
