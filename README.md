<div align="center">
  <img src="https://github.com/oslabs-beta/HiFiber/blob/7b35c901a508087d0e40a45e82ecf3b3076818a0/assets/images/hifiber-logo-resized-new.png">
</div>

<h1 align="center">React Fiber Tree Visualizer & Performance Metric Tool</h3>
<hr/>
<h4 align="center">HiFiber is a React Fiber tree visualization tool that provides a dynamic representation of the Fiber tree as it loads and updates on your browser’s page. Working with pages built in React 16+, it maps out the application structure and will also measure performance metrics – including Fiber node start time, duration, rerender time/count, and various other useful Fiber properties.</h4><br/>

<div align="center">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/oslabs-beta/HiFiber">
  <img alt="GitHub" src="https://img.shields.io/github/license/oslabs-beta/HiFiber">
  <img alt="GitHub manifest version (path)" src="https://img.shields.io/github/manifest-json/v/oslabs-beta/HiFiber/dev">
  <img alt="GitHub all releases" src="https://img.shields.io/github/downloads/oslabs-beta/HiFiber/total">
</div>
<br/><br/>

![](/assets/images/fiberTreeAnimation.gif)<br/>

<p align="center">
  <a href=#installation>Installation</a>
  •
  <a href=#how-to-use>How to Use</a>
  •
  <a href=#stretch-features>Stretch Features</a>
  •
  <a href=#meet-the-team>Meet the Team</a>
  •
  <a href=#license>License</a>
  • 
  <a href=#how-to-contribute>How to Contribute</a>
</p>



## About
<b>HiFiber</b> is a versatile Chrome devtool that allows for easy frontend debugging and visualization. In our team's work, our aim is twofold; HiFiber is designed not only for the onboarding frontend engineer surveying the lay of the land of their company’s codebase – but is also developed with the more experienced frontend engineer in mind. HiFiber will offer robust frontend Fiber tree debugging, including allowing developers to quickly identify Fiber nodes that unnecessarily rerender, or hog valuable render time. It will also offer various visualization options, by default providing a clean and simple visual representation of the DOM after React has worked its magic through its reconciliation algorithm.

## Installation
Our project will soon be published and hosted on the Chrome Web Store! For now, you can install HiFiber by downloading our codebase and manually storing its root directory where your other Chrome extensions are stored. Depending on the Operating System you use, this path will vary:

<b>Mac Users</b><br/>
Chrome extensions are stored in: <b>/Users/username/Library/Application Support/Google/Chrome/Default/Extensions</b>

You can navigate through Finder to access this path directly.

<b>Windows Users</b><br/>
Chrome extensions are stored in: <b>C:\Users\User_Name\AppData\Local\Google\Chrome\User Data\Default\Extensions</b>

You can manually type this path into Explorer’s navbar, or you can access it through Explorer physically by enabling the view of hidden files, folder and drives. To do this, press <b>Windows key + E</b> on your keyboard to open Explorer. Go to <b>View > Options</b> and check the box next to <b>Show hidden files, folders or drives</b>, and uncheck the box next to <b>Hide protected operating system files</b>. Click <b>OK</b>. You can now manually navigate to the above path.

<b>Linux Users</b><br/>
Chrome extensions are stored in the <b>filesystem</b>, in the <b>extensions folder</b>, which is found in Chrome’s <b>user data directory</b>.

After you’ve placed the extension in the appropriate directory, now it’s time to install it to your browser. Open Chrome and click the puzzle piece icon on the upper right corner of your browser. This is the tab for your Extensions. At the bottom of the tab, click <b>Manage Extensions</b> then click <b>Load Unpacked</b>. Navigate to the directory that you’ve installed HiFiber in and click <b>Select Folder</b>. You’ve now installed HiFiber in your browser! The Extension will read the `manifest.json` to interface the extension with your browser.

## How to Use
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

## Stretch Features
<b>Containerization</b><br/>
We get it: Everyone’s dev environment looks different. Whether you’re a Linux user on an older version of Chrome, a Mac OS user with Chrome’s latest release, or anything in between, we feel it’s important our users have easy access to HiFiber in their Chrome dev environment. That’s why we’re currently working to switch from our current monolithic application architecture to one that’s containerized – so all of its dependencies are packaged up in a standalone environment. Now, all of HiFiber’s tools will be readily available for you in a lightweight and standardized deployment.


<b>Data Visualization with D3.js</b><br/>
While we’re proud of the elegant styling our DOM traversal algorithm yields to the frontend visualization, we also want our performance metrics to be represented equally as beautifully. That’s why we plan on utilizing D3.js, a popular JavaScript library suitable for manipulating/visualizing documents based on data. Using HTML, SVG and CSS, D3.js will allow our team to deliver clean and elegant visual representations of performance data each Fiber node yields upon render or rerender. Moreover, we’ll be able to visualize other Fiber node properties, making debugging your frontend fast, simple and fun!

<b>NoSQL Database Utilization</b><br/>
Want to save performance metrics and compare them after subsequent builds of your app? We sure do! That’s why we’re planning on adding NoSQL database functionality, allowing users to effortlessly store performance metrics over time. Even further, we want our users to be able to compare performance reports across builds.

## Meet the Team
- Lauren Acrich: [LinkedIn](https://www.linkedin.com/in/laurenacrich/) | [GitHub](https://github.com/lauren-acrich)
- Matthew Birnholtz: [LinkedIn](https://www.linkedin.com/in/matthew-birnholtz-1b607a85/) | [GitHub](https://github.com/mattbirn93)
- Michael Filoramo: [LinkedIn](https://www.linkedin.com/in/michael-filoramo/) | [GitHub](https://github.com/mfiloramo)
- Mikel Giffin: [LinkedIn](https://www.linkedin.com/in/mikel-giffin-69480678/) | [GitHub](https://github.com/giffinmike)
- Adrian Karnani: [LinkedIn](https://www.linkedin.com/in/adriankarnani/) | [GitHub](https://github.com/adriangk228)

## License
```
MIT License

Copyright © 2022 OSLabs Beta

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## How to Contribute
Feel free to fork our repo, add or fix features, and send pull requests! Our application is growing each day, and we always have an open mind to others’ input on bug fixes and additions. If you have ideas for stretch features, or wish to contribute to the already planned ones, we’d love your input. After all, open source is love!