---
path: "/blog/swift-side-panel-menu"
date: "2020-10-10"
title: "Swift UIKit animated side panel menu"
type: "blog"
tags:
    - Swift
    - UIKit
    - Core Animation
---

##Intro

This is a guide for building an animated side panel menu in UIKit programmatically. The panel appears from the right side when the menu button is tapped and returns out of sight when a close button is tapped. All animated smoothly. Note that the menu will appear to overlay the screen, not push it out of the way. [Full GitHub repo](https://github.com/TrevPennington/swift-side-panel-menu)
<br></br>
![swift side panel menu](/sidepanel.gif)

The basic logic is: the menu starts in an off-screen position and a menu button controls the position of the menu via a bool. You then use Core Animation’s animate to make the transitions smooth. 

##vars/consts

First, add some `variables` to the top of your class. One of type `bool` that will decide whether the menu should be on screen or not. Another of type `NSLayoutConstraint()` and another of type `CGFloat()` that will both control the leading constraint (position) of the menu.

Then add 2 view `constants`. One for the actual menu, and one for the non-menu part of the screen when the menu is open, to recognize taps outside of the menu.

```swift
var menuHidden = true
var leadingConstraint = NSLayoutConstraint()
var menuLeadingAnchorPosition = CGFloat(0.0)

let menuView = UIView()
let tapToCloseArea = UIView()
```
##Render the menu button

Now, make a button for the menu. I used SFIcon’s `line.horizontal.3` as an icon for the button. Hook up a function to the button's `.touchUpInside` property called `toggleMenuView` that will toggle the bool. You initialized it to `true` above meaning the menu is off-screen.

```swift
func renderMenuButton() {
    view.addSubview(menuButton)
    menuButton.setImage(menuButtonImage, for: .normal)
    menuButton.tintColor = .black
    
    menuButton.translatesAutoresizingMaskIntoConstraints = false
    NSLayoutConstraint.activate([
        menuButton.topAnchor.constraint(equalTo: view.topAnchor, constant: 40),
        menuButton.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -30)
    ])
    
    menuButton.addTarget(self, action: #selector(toggleMenuView), for: .touchUpInside)
}
```


##Render the menu
Add a function to render the menu. I have added a shadow to separate it visually from the rest of the screen, appearing to overlap the screen.

```swift
func renderMenuView() {
    view.addSubview(menuView)
    menuView.addSubview(menuTableView) //add menu options (mine is a table view, defined later in this guide)
    
    menuView.backgroundColor = .white
    menuView.layer.shadowColor = UIColor.black.cgColor
    menuView.layer.shadowOpacity = 0.1
    menuView.layer.shadowOffset = .zero
    menuView.layer.shadowRadius = 15
    
    leadingConstraint = menuView.leadingAnchor.constraint(equalTo: view.trailingAnchor, constant: menuLeadingAnchorPosition)
    
    menuTableView.translatesAutoresizingMaskIntoConstraints = false
    menuView.translatesAutoresizingMaskIntoConstraints = false
    NSLayoutConstraint.activate([
        menuView.heightAnchor.constraint(equalTo: view.heightAnchor),
        menuView.widthAnchor.constraint(equalTo: view.widthAnchor, multiplier: 0.5),
        leadingConstraint,

        menuTableView.heightAnchor.constraint(equalTo: menuView.heightAnchor),
        menuTableView.widthAnchor.constraint(equalTo: menuView.widthAnchor),
        menuTableView.leadingAnchor.constraint(equalTo: menuView.leadingAnchor),
        menuTableView.topAnchor.constraint(equalTo: menuView.topAnchor, constant: 70)
    ])
}
```

<br></br>
*Make sure to call `renderMenuButton()` and `renderMenuView()` within `viewDidLoad()`

##Tap outside the menu to close
To allow users to tap outside the menu to close it, add 2 functions. One to render the tap area when menu is open and one to remove it when menu is closed.

```swift
func renderTapToCloseArea() {
    view.addSubview(tapToCloseArea)
    
    tapToCloseArea.translatesAutoresizingMaskIntoConstraints = false
    NSLayoutConstraint.activate([
        tapToCloseArea.heightAnchor.constraint(equalTo: view.heightAnchor),
        tapToCloseArea.widthAnchor.constraint(equalTo: view.widthAnchor, multiplier: 0.5),
        tapToCloseArea.leadingAnchor.constraint(equalTo: view.leadingAnchor)
    ])
}

func removeTapToCloseArea() {
    tapToCloseArea.removeFromSuperview()
}
```
##Toggle the menu
Now add a function to toggle the menu. This will be called whenever the button is tapped or the area outside of the menu is tapped when it is opened. 

Changes are made to the UI, letting Swift know to update them next time layout is refreshed. So tell Swift to update the UI by calling `animate`, with duration of .2 to smooth it out. 

```swift
@objc func toggleMenuView() {
    if menuHidden {
        leadingConstraint.constant = UIScreen.main.bounds.size.width / 2 * -1
        menuButton.setImage(menuCloseButtonImage, for: .normal)
        renderTapToCloseArea()
        let tap = UITapGestureRecognizer(target: self, action: #selector(self.toggleMenuView))
        self.tapToCloseArea.addGestureRecognizer(tap)
    } else {
        removeTapToCloseArea()
        leadingConstraint.constant = 0.0
        menuButton.setImage(menuButtonImage, for: .normal)
    }
    
    UIView.animate(withDuration: 0.2) {
        self.view.layoutIfNeeded()
    }
    menuHidden.toggle()
}
```
##Menu options
All that is left is to add menu options. I’ve implemented a table view and added it as a subview of the menu. Make sure to set the data source, delegate, and register a reuse cell in viewDidLoad. And conform your class to UITableViewDataSource and UITableViewDelegate.
```swift
func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    return menuOptions.count
}

func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCell(withIdentifier: "menuOptionCell", for: indexPath as IndexPath)
    let cellText = menuOptions[indexPath.row]
    
    cell.textLabel!.text = "\(cellText)"
    
    return cell
}
```
