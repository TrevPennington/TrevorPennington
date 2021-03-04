---
path: "/blog/react-native-bottom-menu"
date: "2020-06-24"
title: "React Native iOS bottom drawer menu guide (vanilla + Hooks)"
type: "blog"
tags:
    - React Native
    - Hooks
---

##Intro
This is a guide for building bottom drawer menus with React Native as vanilla as possible. The goal is to make the menu look and behave like Instagram’s (and many other's) bottom drawer as shown below. We will be using out of the box React Native components, mainly [Modal](https://reactnative.dev/docs/modal). For the menu’s open and close state, we will use React Hooks. Styling will be with plain stylesheets although I normally use Styled Components. Feel free to check out the repo on GitHub!


![react native bottom drawer menu](/bottomdrawer.gif)


When user touches anywhere outside of the menu or on the cancel button, the menu will close.

##Start with a functional component

Start by setting up a React Native project if you do not have one. This menu can be added to any screen. I’ll be putting it into a fake article screen for this tutorial.

We'll start by adding any kind of button for opening the menu. I am using the `<VertDots />` svg from Google’s material icons. 
```jsx
<TouchableOpacity
  onPress={() => this.openMenu()}
>
  <VertDots style={{fill: `#333`}} />
</TouchableOpacity>
```
##Add the menu
To keep the functional component's return statement clean, I put the menu into a constant above the return statement. The whole menu is wrapped in `<Modal />` so import that from React Native at the top of your file. 

```jsx
let menu = (
  <Modal
  visible={visible}
  animationType="slide"
  transparent='true'
  onDismiss={() => this.closeMenu()}
  >
    <TouchableOpacity
        style={styles.menuClose}
        onPress={() => this.closeMenu()}
    >
    </TouchableOpacity>
      <View style={styles.menu}>
        <View style={styles.innerMenu}> 
            <TouchableOpacity 
                style={styles.menuOption}
                onPress={() => {
                  this.closeMenu();
                  // ***YOUR FUNCTION HERE
                  }}>
                <Text style={styles.menuOptionTitle}>Settings</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <TouchableOpacity 
                style={styles.menuOption}
                onPress={() => {
                  this.closeMenu();
                  // ***YOUR FUNCTION HERE
                  }}>
                <Text style={styles.menuOptionTitle}>Suggest an edit</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <TouchableOpacity 
                style={styles.menuOption}
                onPress={() => {
                  this.closeMenu();
                  // ***YOUR FUNCTION HERE
                  }}>
                <Text style={[styles.menuOptionTitle, styles.red]}>Sign Out</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cancelMenu}>
            <TouchableOpacity 
                style={styles.menuOption}
                onPress={() => {this.closeMenu();
                }}>
                <Text style={styles.menuOptionTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
)
```
###the Modal options: 
`visible` expects a `bool`. `true` is visible, `false`, not visible. You tie it to the this component's state by setting it to `{visible}`, which you will add to state in the next section.  
`animationType` I set to `"slide"`. Make this whatever you'd like, all the options are [here](https://reactnative.dev/docs/modal).


Inside the `<Modal />` consists of `<TouchableOpacity>` options that perform your menu option's functions. For this example I've added a <b>Settings</b> option, a <b>Suggest an edit</b> option, a <b>Sign Out</b> option, and finally a <b>Cancel</b> option that just closes the menu and will be styled differently than the others. You will normally want all the options to `closeMenu()` before performing the action so I added that function in all of them!

##Handling the menu's state with React Hooks

Now it is time to actually make the functions for opening and closing the menu. So import `UseState` from React at the top of your file. Then set the state variables and default state. 

```jsx
function BottomMenu() {
  const [visible, setVisible] = useState(false)
  
  openMenu = () => setVisible(!visible);
  closeMenu = () => setVisible(false);
```
There you go. The default visibility of the menu is `false`.
Calling `openMenu()` sets it to true, and `closeMenu()` sets the visibility back to false.