![](/assets/images/hifiber-logo.png)
<h1 align="center">React Fiber Tree Visualizer & Performance Metric Tool</h3>
<hr/>
<h3 align="center">HiFiber is a React Fiber tree visualization tool that provides a dynamic representation of the Fiber tree as it loads and updates on your browser’s page. Working with pages built in React 16+, it maps out the application structure and will also measure performance metrics – including Fiber node start time, duration, rerender time/count, and various other useful Fiber properties.</h3>

[add badges here]<br/>
![](/assets/images/fiberTreeAnimation.gif)<br/>
[add hyperlinks to readme sections here, centered]<br/>

## About
<hr/>
<b>HiFiber</b> is a versatile Chrome devtool that allows for easy frontend debugging and visualization. In our team's work, our aim is twofold; HiFiber is designed not only for the onboarding frontend engineer surveying the lay of the land of their company’s codebase – but is also developed with the more experienced frontend engineer in mind. HiFiber will offer robust frontend Fiber tree debugging, including allowing developers to quickly identify Fiber nodes that unnecessarily rerender, or hog valuable render time. It will also offer various visualization options, by default providing a clean and simple visual representation of the DOM after React has worked its magic through its reconciliation algorithm.

## Installation
<hr/>
Our project will soon be published and hosted on the Chrome Web Store! For now, you can install HiFiber by downloading our codebase and manually storing its root directory where your other Chrome extensions are stored. Depending on the Operating System you use, this path will vary:

<b>Mac Users</b>
Chrome extensions are stored in: <b>/Users/username/Library/Application Support/Google/Chrome/Default/Extensions</b>

You can navigate through Finder to access this path directly.

<b>Windows Users</b>
Chrome extensions are stored in: <b>C:\Users\User_Name\AppData\Local\Google\Chrome\User Data\Default\Extensions</b>

You can manually type this path into Explorer’s navbar, or you can access it through Explorer physically by enabling the view of hidden files, folder and drives. To do this, press <b>Windows key + E</b> on your keyboard to open Explorer. Go to <b>View > Options</b> and check the box next to <b>Show hidden files, folders or drives</b>, and uncheck the box next to <b>Hide protected operating system files</b>. Click <b>OK</b>. You can now manually navigate to the above path.

<b>Linux Users</b>
Chrome extensions are stored in the <b>filesystem</b>, in the <b>extensions folder</b>, which is found in Chrome’s <b>user data directory</b>.

After you’ve placed the extension in the appropriate directory, now it’s time to install it to your browser. Open Chrome and click the puzzle piece icon on the upper right corner of your browser. This is the tab for your Extensions. At the bottom of the tab, click <b>Manage Extensions</b> then click <b>Load Unpacked</b>. Navigate to the directory that you’ve installed HiFiber in and click <b>Select Folder</b>. You’ve now installed HiFiber in your browser! The Extension will read the `manifest.json` to interface the extension with your browser.

## How to Use
<hr/>
Once you’ve installed and enabled HiFiber, the front end world is your oyster! Simply navigate to a page built in React 16+ and click the <b>Manage Extensions</b> button again. Click the icon for HiFiber and voila – a devtool panel will automatically appear with the frontend visualization of the app’s Fiber tree.

Once you are in the app, an animation will show your tree being created. You will have the option to view a <b>Simple</b> or <b>Full tree</b>.

<b>Simple</b>: Shows the nodes that represent HTML, Class, or Functional components. High level nodes most likely what a debugger is working with. Also simpler for basic onboarding.

<b>Full</b>: Shows the entirety of every node on the fiber tree. This is better for educational purposes, and occasional deep dive debugging. Many of the nodes are excessive and not useful to the average coder.

Next you will be able to interact with your tree. You can click on any node to reveal additional information for it.

- Type of node
- Render time
- State and previous state values
- Active or Idle
- React Tag
- Line number
- Key

<b>Error Handling</b>: When something breaks in your code, The tree will highlight and blink on the breaking component. This will allow the user to locate the line that the breaking logic is happening on.
