# SpaceX React Native Example App


## Installation
To install this project, clone this GitHub repository and make sure you have the latest version of node, yarn, watchman, Xcode, and Android Studio installed.

Next, run the following two commands consecutively in your terminal (I use zsh) of choice to download the proper dependencies. 

```
  yarn
```

```
  npx pod-install
```

To run the project after installing the dependencies, start by running the following command in your terminal.

```
  yarn start
```

Next you can run the app in the iOS Simulator by using this command.

```
  npx react-native run-ios
```

Or on Android using the following.

```
  adb reverse tcp:8081 tcp:8081
```

```
  npx react-native run-android
```



## Usage

The app consists of two main screens, the Launch List and the About Me section.

### Launch List

The Launch List section contains a list of all upcoming launches, as well as a search bar that can filter and query upcoming launches by either rocket name or launch site name. If you tap a specifc launch in the list, it with open a Launch Details screen with further information about the selected launch.

### About Me

The About Me section includes name as well as my personal email address and phone number.
