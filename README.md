API Learner
===========

Hello! :wave: Welcome to the API Learner app. :school_satchel: By following the instructions below, you'll learn a little about how REST APIs work and make an open source project contribution at the same time! :boom:

* _We'll be using HTML and JavaScript in this tutorial but you don't need to know any syntax at all, you can just copy and paste, with a few edits to plain text._
* _We will depend on a few high level coding terms like "method", "function", "parameter" as well as some Git / GitHub terms but don't worry too much if you don't know these yet, you should hopefully still be able to follow the tutorial to the end - if not please let me know._ :slightly_smiling_face:

---

___Hang On - What is an API?___

You'll see the term ___API___ used to refer to different types of resource, such as code libraries - in this tutorial we're dealing with REST APIs, which we use to manage access to data.

Imagine you had a shop :convenience_store: and wanted to access your database of product information from both a website :globe_with_meridians: and a mobile app :iphone: - you could create an API that would provide access to the product info and that you could call from both the site and the app. That way the API could handle the detail of how the data should be accessed and so on.

APIs provide __endpoints__ to fetch and update data. In this app we're only using `GET` endpoints - these allow you to fetch data to display or use in your client app, _but a real API will often have additional types of endpoint to add new data or to update existing data_. In the shop example, you might have an endpoint that would return the current list of available products.

* Lots of existing REST APIs are available for using in your apps - [check out the GitHub documentation for an example](https://developer.github.com/). The GitHub API is an example of a __third party API__, where you access the data from another organisation or service (e.g. GitHub). In this tutorial we're going to focus on building our own API, but playing around with existing APIs is another great way to get acquainted with how they work. 

---

___Hang On  - What's this Open Source thing?___

In an open source software project, you can access and repurpose the source code. This means that open source projects can be worked on by communities of people, and be remixed in all sorts of creative ways. They also make great learning resources if you're trying to get into coding, for example, [you can see a ton of source code for software projects managed by organisations like Mozilla on GitHub](https://github.com/mozilla/).

Even if you become a developer and end up working on software that isn't open source, you'll likely be collaborating as part of a team, so you'll find a lot of the same skills and processes are involved.

---

## Learn by Contributing

__OK let's get stuck in and learn about APIs by adding an endpoint and remixing an open source project.__

The project we're working on is hosted on Glitch at [api-learner.glitch.me](https://api-learner.glitch.me) but we're going to manage contributions on GitHub. In GitHub you'll make a copy of the project, work on your additions in your copy, test it out on Glitch, and then get it merged back into the original project back on GitHub. This means that future learners using the project will see your contribution, and the live version on Glitch will be updated to include your contribution too. :eyes: :confetti_ball:

You'll see the existing endpoints in the API listed in the project [homepage](https://api-learner.glitch.me).

![Live App](https://user-images.githubusercontent.com/6666370/57489814-20fff780-72af-11e9-8b63-319f46271259.png)

Click the first one on the list to see the result (ok so it isn't very exciting, it just returns some text but it's a real Node.js / Express API that uses server-side JavaScript, honest :nerd_face:). You're going to add one of your own that will also run on the server and return some data to display in the page.

### 1. Fork the Repo

First we need to copy the project from GitHub. Go to the [Glitch API Learner](https://github.com/hackaye/glitch-api-learner) repo and click __Fork__ (sign up for GitHub if you don't have an account yet).

![Fork Button](https://user-images.githubusercontent.com/6666370/57521622-b1265700-7318-11e9-92bb-73652b37be50.png)

GitHub will create a copy of the repository in your own account - you can do whatever you like with this copy of the app and it won't affect the original, but later you'll submit your additions to be added to the original so that, for anyone using the project in future, it'll include your contribution.


### 2. Import to Glitch

With your fork of the repo open in GitHub, click __Clone or download__, and copy the URL (it should end with `.git`) - you'll paste it into Glitch next.

![Fork URL](https://user-images.githubusercontent.com/6666370/57487842-776a3780-72a9-11e9-897c-1bd9e3fe976f.png)

In [Glitch](https://glitch.com), click __New Project__ and choose __Clone from Git Repo__.

![Glitch Project from Git](https://user-images.githubusercontent.com/6666370/57488100-00816e80-72aa-11e9-844d-8ec2b9d9b384.png)

Enter the URL you copied from your GitHub fork and click __OK__. Glitch will create a new project, importing the content from GitHub.

### 3. Add your Endpoint

Now you can play around with the API on Glitch and see the changes reflected in realtime (this is extremely cool btw :sunglasses: normally you would have to deal with a convoluted testing and deployment process to see this type of functionality running live).

With the editor for your new Glitch project open, select the `server.js` file. This is the Node.js / Express code that makes up the API. You'll see the existing endpoints in there, each one looks a bit like this:

```
app.get('/benormal', function(request, response) {
  response.send('writes code and words');
});
```

You'll be adding one of these to the app - let's take a look at the detail. The overall structure here is like this:

```
app.get(path, callback);
```

The `path` parameter is the name of the endpoint, so in the above example, this code will run when someone calls `https://api-learner.glitch.me/benormal`.

The `callback` parameter is what should execute when that path (and method - in this case `GET`) is called. In the example, the parameter is specified as this function, which in turn receives `request` and `response` as parameters:

```
function(request, response) {
  response.send('writes code and words');
}
```

Inside the callback function, the app uses the `response` parameter to send something to the _client_. The _client_ is whatever application is calling the endpoint - in the case of this Glitch app it's typically just going to be the web browser, so if you visit [api-learner.glitch.me/benormal](https://api-learner.glitch.me/benormal), you'll see the text inside the function written out.

___Notes:___ 

* You can also call the endpoint from other clients, these could be applications in which you call the endpoint from your code - you can try it in a terminal using this command: `curl https://api-learner.glitch.me/benormal`. 
* You could use the `request` object to retrieve info about the request if necessary, for example if you wanted to pass data from the client in the request parameters (such as a search query), or in the body if you were e.g. updating or inserting new data into a database.

As you can see, all the endpoint does is return some text - in a real API the code would probably be querying a database but let's not bother with that for now. :innocent:

#### Your Endpoint

Right, let's get your endpoint added - in the `server.js` file, copy an existing `app.get` function (all the way to the closing `});`) and paste it under the rest (you'll see the place marked with a comment). Change two things:

* The endpoint name, `benormal` in the example - make it something that's likely to be unique to you so that we don't end up with duplicates, e.g. part of a domain you own (let's avoid punctuation symbols and just use letters).
* The text between quotes in the `send` call - change it to some interesting fact about you or whatever else you want to send back from the server.

Your addition should look something like this:

```
app.get('/youridentifier', function(request, response) {
  response.send('an interesting fact');
});
```

![Endpoint Code](https://user-images.githubusercontent.com/6666370/57489873-4ab91e80-72af-11e9-8388-c9d4e98992cf.png)

_Note that the example endpoints we're using return plain text, but often the data returned from an endpoint will be structured, with JSON and XML common formats you'll encounter when using APIs._

#### Add a Link

Add a link to your new endpoint in the app homepage - open `public/index.html`. You'll see the list of endpoints in there - add a new list item to link to yours. Include the endpoint name as the anchor (`a`) element `href` and include whatever text you want to appear as the link inside the anchor body. It should look something like this:

```
<li>
  <a href="/youridentifier">name</a>
</li>
```

![Link Code](https://user-images.githubusercontent.com/6666370/57489952-94096e00-72af-11e9-8f66-2f2a4b72cd0d.png)

Check that your endpoint works by viewing the live Glitch app (click __Show__) and clicking your newly added link. If all goes according to plan you should see the text you returned in the JavaScript code..! :grin:

_If your endpoint doesn't behave as expected and you need help, [create an issue in the original project GitHub repo](https://github.com/hackaye/glitch-api-learner/issues) and I'll do my best to help troubleshoot._

### 4. Export to GitHub

OK so you've got a lovely new endpoint added to the API - don't keep it to yourself! By exporting it back to GitHub, you can get your addition merged into the original app.

In your Glitch project, select __Tools__ and choose __Git, Import, and Export__.

![Glitch Tools](https://user-images.githubusercontent.com/6666370/57488202-581fda00-72aa-11e9-9110-fd0f4cbd627e.png)

Click the __Grant Access__ link to grant Glitch access to your GitHub repo. Follow the prompts inside GitHub to allow Glitch / FogCreek to access your account.

![Authorize Glitch](https://user-images.githubusercontent.com/6666370/57488785-05472200-72ac-11e9-9159-5e7fa24ef1c1.png)

Once authorised and back in your Glitch project, open the Git menu again and select __Export to GitHub__ and enter ___your GitHub username___, followed by a slash, then the repo name.

![Export Options](https://user-images.githubusercontent.com/6666370/57488380-ce244100-72aa-11e9-8275-f3be6282b847.png)

![Repo Details](https://user-images.githubusercontent.com/6666370/57488500-31ae6e80-72ab-11e9-9f79-14b06423af4e.png) 

If the export is successful, your changes should be added to a new branch in your repository named `glitch`. Refreshing your forked project page in GitHub should show the new branch, otherwise you can select it in the branch dropdown (which shows `master` by default).

![Glitch Branch](https://user-images.githubusercontent.com/6666370/57488922-6a9b1300-72ac-11e9-8c31-7d6330e4488b.png)

Click __Compare and pull request__ for your Glitch branch - you're going to merge the changes from Glitch into the master branch for your forked project (the changes from Glitch are not pushed directly to the master branch so that you, or other members of your team, can review before merging). 

Make sure you have selected _your fork_ (it'll begin with your Github username) with the `master` branch as __base__, and your fork with the `glitch` branch as __head__ - later you'll be opening a request to merge your changes into the original repo but not quite yet.

Use the __Base repository__ dropdown to select your fork of the original project.

![Select Fork](https://user-images.githubusercontent.com/6666370/57489046-d4b3b800-72ac-11e9-97f7-f57eb02445ef.png)

The page will update to show you are going to merge one branch into another in the same project.

![Branches](https://user-images.githubusercontent.com/6666370/57489137-104e8200-72ad-11e9-8352-e19b3d23ad50.png)

_If you scroll down the page you'll see your added code highlighted in green._

![Comparing Code](https://user-images.githubusercontent.com/6666370/57489305-80f59e80-72ad-11e9-8a94-a5f2317d7393.png)

Click __Create pull request__.

![Pull Request](https://user-images.githubusercontent.com/6666370/57489497-1ee96900-72ae-11e9-87b9-957ab827a868.png)

Your changes shouldn't present any conflicts so click __Merge pull request__ (then __Confirm merge__).

![Merge PR](https://user-images.githubusercontent.com/6666370/57489585-61ab4100-72ae-11e9-92ce-e9316dbdb04e.png)

Hopefully your merge is a success - feel free to delete the `glitch` branch.

![Delete Branch](https://user-images.githubusercontent.com/6666370/57489657-9ae3b100-72ae-11e9-9804-3b07660624ac.png)

Now your forked project master branch is up to date with the changes you made on Glitch.

### 5. Open a Pull Request

You can now request that your new endpoint be added to the original repo so that the list in there keeps growing and other people see your work. You'll do this by opening a pull request to merge the changes in your fork into `hackaye/glitch-api-learner`.

![Comparing Changes](https://user-images.githubusercontent.com/6666370/57490048-dfbc1780-72af-11e9-851c-e86d7d7d105d.png)

In your forked project in GitHub, click __Pull request / Create pull request__.

With the original (`hackaye`) repo selected as base and your fork selected as head (master branch on both), click __Create pull request__.

Add a optional message and click __Create pull request__.

![Pull Request Message](https://user-images.githubusercontent.com/6666370/57489393-c4e8a380-72ad-11e9-9aed-bdb01d4f6a1c.png)

Your pull request will be opened! Once the reviewer has had a chance to check it out you'll hear back - hopefully letting you know it's been merged and is going to be deployed onto the original Glitch project..!!! :flags: :tada:

![Merged PR](https://user-images.githubusercontent.com/6666370/57490284-a637dc00-72b0-11e9-98d7-2751c0e713ff.png)

Thanks for submitting your endpoint to the project! :trophy: 

## Next Steps

By working through this tutorial, you've learned a bit about how REST APIs work at a high level and worked through the basic contribution process for a collaborative software project (open source or otherwise) including Branching, Forking, and Pull Requests! :muscle: :computer: :fireworks:

These are some of the key skills in being part of a developer team. :rocket: Next, why not build on what you've learned by exploring APIs and open source a little further: :mortar_board:

* [API intro article that goes into more detail than the examples we covered here](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)
* [More comprehensive guide to building a REST API that uses a database](https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09)
* [The Express guidance for a handy reference](https://expressjs.com/en/guide/routing.html)
* [If you want to brush up on your JavaScript, the MDN docs are a great place to work from](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
* Tools like the [Swagger Editor](https://editor.swagger.io/) and [Postman](https://www.getpostman.com/) if you want to play around with existing APIs or document / test your own
* [Open Source contribution guidance from Github](https://opensource.guide/how-to-contribute/)
* [Tons of API projects on Glitch that you can learn from and remix](https://glitch.com/search?q=rest%20api&activeFilter=project)

___Please feel free to use this project in any way you find helpful - I'd love it if you'd let me know about any cool things you do with it or report any problems you come across in the [GitHub project issues](https://github.com/hackaye/glitch-api-learner/issues)!___

_testing with new info_
