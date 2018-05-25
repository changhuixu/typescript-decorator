import {  App } from './app/app.component';

function main() {
    const app = new App();
    app.onInit();
    app.afterViewInit();
}

main();