## What is it?

This is a example app that should be used as base to create Web and Electron apps using React.

### Developing a web app:

If you want to build a web app, use `yarn dev-web` for hot-reload development and `yarn build` to create a production app.

Also, you don't have to worry about deleting any part of this example app that is related to Electron. Your production app will be exactly like a Create React App in size and performance, only with the cool features we implemented out of the box.

### Developing an Electron app:

If you want to build an Electron app, use `yarn dev-electron` for hot-reload development and `yarn package` to create a production app.

### Developing for both web and Electron:

If you want to build a hybrid app, use `yarn dev-both` for hot-reload development, `yarn build` to create a production web app and `yarn package` to create a production Electron app.

By checking if `window.ipcRenderer` exists, you can know if the user is accessing through Web or Electron, so it is possible to create functionality that only applies for Web or only for Electron.

## Example app deploys with:

### Smart/dumb design pattern:

A dumb component is a component that just receives props and styles and returns the rendered UI. It does not know where or how the props were assigned. Smart components handle logic and return a dumb component with the expected props for that part of the app. This design pattern allows for easier testing and reusability of similar UI components. Please consider maintaining this design pattern following the example app.

### Integration with Redux

Control the state of the app in a upper level. Pass it to the smart components by using the hook useSelector and dispatch to it by using the hook useDispatch as the example app, and find more about it on react-redux docs.

### Routing feature

The example app lands with react-router-dom to handle multiple pages on this Single-Page Application. If you are building for react only, it integrates automatically with all browsers by updating the address bar and saving the history so the user can use back and forward buttons just like a traditional website.

If you are creating a electron app and want the user to be able to go back and forward in the pages of your app, you should create buttons that mimic the History API:

`<button type="button" onClick={window.history.back}>Go Back</button>`
`<button type="button" onClick={window.history.forward}>Go Forward</button>`

### Translation feature

Follow the example to create an app that can change languages without having to restart. Use the hook useTranslator following the example app. This implementation is internal (not really a fan of the libraries out there, too complicated) so you won't find docs about it, but take a look in src/utils/translations and follow the hint comments on the files.

### Styling and theming features

Follow the example to create an app that can change themes without having to restart. This implementation uses the @material-ui/styles library to create styling all in JS, not using CSS. You can pass the theme as an argument on the styling JS and set CSS variables according to the theme that the user chose. Use the hook useStyles to get a specific style ruleset and apply it to the component.
