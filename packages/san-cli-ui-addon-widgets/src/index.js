/**
 * @file addon-widgets registry
 * @author zttonly
*/

import Welcome from './components/welcome/welcome';
import KillPort from './components/kill-port/kill-port';
import News from './components/news/news';
import RunTask from './components/run-task/run-task';
import GenQrcode from './components/gen-qrcode/gen-qrcode';
// import PluginUpdates from './components/plugin-updates.js';
// import DependencyUpdates from './components/dependency-updates.js';
// import RunTask from './components/run-task.js';

if (window.ClientAddonApi) {
    let ClientAddonApi = window.ClientAddonApi;
    // registry components
    ClientAddonApi.component('san.widgets.components.welcome', Welcome);
    ClientAddonApi.component('san.widgets.components.kill-port', KillPort);
    ClientAddonApi.component('san.widgets.components.news', News);
    ClientAddonApi.component('san.widgets.components.run-task', RunTask);
    ClientAddonApi.component('san.widgets.components.gen-qrcode', GenQrcode);
    // ClientAddonApi.component('san.widgets.components.plugin-updates', PluginUpdates);
    // ClientAddonApi.component('san.widgets.components.dependency-updates', DependencyUpdates);
}

