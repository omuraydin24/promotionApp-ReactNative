# Daha Daha - Promosyon App

### This is a [React Native](https://www.google.com) application that backed by [DahaDaha](https://www.google.com) which lists the active promotions on DahaDaha. Providing broad information about promotions and how to participate them.

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm/yarn install`

Install all the dependencies listed within package.json in the local node_modules folder.

### `yarn run / npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

## Used Technologies

- [React Native Navigation](https://reactnavigation.org/) (Stack, Bottom Tabs, Gesture Handler)
- [Axios](https://www.npmjs.com/package/react-native-axios)
- [HtmlView](https://github.com/jsdf/react-native-htmlview)
- [Snap Carousel](https://github.com/meliorence/react-native-snap-carousel)
- [Svg](https://github.com/react-native-svg/react-native-svg)

## Known Issuses

- Pagination dots creates themselves according to promotion count but don't change respective with carousel changes.

- On promotion detail page, "Hemen Katıl" button doesn't stick at the bottom of the page.

## Screenshots


|                                               Keşfet Screen                                               |                                               Detail Screen                                               |
| :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
| ![Keşfet Screen](https://raw.githubusercontent.com/Omuraydin24/promotionApp-ReactNative/main/SS/SS-1.png) | ![Detail Screen](https://raw.githubusercontent.com/Omuraydin24/promotionApp-ReactNative/main/SS/SS-2.png) |
