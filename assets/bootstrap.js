// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

import { startStimulusApp, registerControllers } from "vite-plugin-symfony/stimulus/helpers"
import { registerReactControllerComponents } from "vite-plugin-symfony/stimulus/helpers/react"

registerReactControllerComponents(import.meta.glob('./react/controllers/**/*.js(x)\?'));

const app = startStimulusApp();
registerControllers(
    app,
    import.meta.glob(
        "./controllers/*_controller.js",
        {
            query: "?stimulus",
            eager: true,
        },
    ),
);