"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./Components/homeComponent/home.component');
var dashboard_1 = require('./Components/dashboard/dashboard');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'dashboardComponent', component: dashboard_1.dashboardComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map