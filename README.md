![](/assets/images/hifiber-logo.png)
<h1 align="center">React Fiber Tree Visualizer & Performance Metric Tool</h3>
<hr/>
<h3 align="center">HiFiber is a React Fiber tree visualization tool that provides a dynamic representation of the Fiber tree as it loads and updates on your browser’s page. Working with pages built in React 16+, it maps out the application structure and will also measure performance metrics – including Fiber node start time, duration, rerender time/count, and various other useful Fiber properties.</h3>

[add badges here]<br/>
[add demo gif here]<br/>
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

Windows Users
Chrome extensions are stored in: C:\Users\User_Name\AppData\Local\Google\Chrome\User Data\Default\Extensions

You can manually type this path into Explorer’s navbar, or you can access it through Explorer physically by enabling the view of hidden files, folder and drives. To do this, press Windows key + E on your keyboard to open Explorer. Go to View > Options and check the box next to Show hidden files, folders or drives, and uncheck the box next to Hide protected operating system files. Click OK. You can now manually navigate to the above path.

Linux Users
Chrome extensions are stored in the filesystem, in the extensions folder, which is found in Chrome’s user data directory.

After you’ve placed the extension in the appropriate directory, now it’s time to install it to your browser. Open Chrome and click the puzzle piece icon on the upper right corner of your browser. This is the tab for your Extensions. At the bottom of the tab, click Manage Extensions then click Load Unpacked. Navigate to the directory that you’ve installed HiFiber in and click Select Folder. You’ve now installed HiFiber in your browser! The Extension will read the manifest.json to interface the extension with your browser.
