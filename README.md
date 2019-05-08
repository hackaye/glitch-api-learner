API Learner
===========

Hello! :wave: Welcome to the API Learner app. :school_satchel: By following the instructions below, you'll learn a little about how APIs work and make an open source project contribution at the same time! :boom:

> _You can read this tutorial on either Glitch or GitHub._

---

___Hang On - What is an API?___

We use APIs to access data from applications, for example where data is stored in a database and we want to use it in a mobile or web app. 

Imagine you had a shop :convenience_store: and wanted to access your database of product information from both a website :globe_with_meridians: and a mobile app :iphone: - you could create an API that would provide access to the product info and that you could call from both the site and the app. That way the API could handle the detail of how the data should be accessed and so on.

APIs provide __endpoints__ to fetch and update data. In this app we're only using `GET` endpoints - these allow you to fetch data to display or use in your client app, but a real API will often have additional types of endpoint to add new data or to update existing data. In the shop example, you might have an endpoint that would return the current list of available products.

---

___Hang On  - What's this Open Source thing?___

In an open source software project, you can access and repurpose the source code. This means that open source projects can be worked on by communities of people, and can be remixed in all sorts of creative ways. They also make great learning resources if you're trying to get into coding, for example, [you can see a ton of source code for software projects managed by organisations like Mozilla on GitHub](https://github.com/mozilla/).

Even if you become a developer and end up working on software that isn't open source, you'll likely be collaborating as part of a team, so you'll find a lot of the same skills and processes apply.

---

## Learn by Contributing

__OK let's get stuck in and learn about APIs by adding an endpoint and remixing an open source project.__

The project we're working on is hosted on Glitch at [api-learner.glitch.me](https://api-learner.glitch.me) but we're going to manage contributions on GitHub. In GitHub you'll make a copy of the project, work on your additions in your copy, test it out on Glitch, and then get it merged back into the original one back on GitHub. This means that future learners using the project will see your contribution, and the live version on Glitch will be updated to include your contribution too.

You'll see the existing endpoints in the API listed in the project [homepage](https://api-learner.glitch.me).

![Live App](https://user-images.githubusercontent.com/6666370/57318093-7098c480-70f1-11e9-864f-dd4216266874.png)

Click the first one on the list to see the result (ok so it isn't very exciting, it just returns some text but it's a real Node.js / Express API that uses server-side JavaScript, honest :nerd_face:). You're going to add one of your own that will also run on the server and return some data to display in the page.

### 1. Fork the Repo

First off we need to copy the project from GitHub. Go to the [Glitch API Learner](https://github.com/SueSmith/glitch-api-learner) repo and click __Fork__ (sign up for GitHub if you don't have an account yet).

![Fork Button](https://user-images.githubusercontent.com/6666370/57094447-76189800-6d08-11e9-9feb-d61b6ae564e0.png)

GitHub will create a copy of the repository in your own account - you can do whatever you like with this copy of the app and it won't affect the original, but later you'll submit your additions to be added to the original.


### 2. Import to Glitch

With your fork of the repo open in GitHub, click __Clone or download__, and copy the URL (it should end with `.git`) - you'll paste it into Glitch next.

![Fork URL](https://user-images.githubusercontent.com/6666370/57094448-76b12e80-6d08-11e9-8b42-dcc18d27e347.png)

In [Glitch](https://glitch.com), click __New Project__ and choose __Clone from Git Repo__.

![Glitch New Project](https://user-images.githubusercontent.com/6666370/57094775-3e5e2000-6d09-11e9-9b88-480bf10044e3.png)

Enter the URL you copied from your GitHub fork and click __OK__. Glitch will create a new project, importing the content from GitHub.

### 3. Add your Endpoint

Now you can play around with the API in Glitch and see the changes reflected in realtime (this is extremely cool btw :sunglasses: normally you would have to deal with a convoluted testing and deployment process to see this type of functionality running live).

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

The `callback` parameter is what should execute when that path (and method - in this case `GET`) is called. In the example the parameter is specified as this function which receives `request` and `response` as parameters:

```
function(request, response) {
  response.send('writes code and words');
}
```

Inside the callback function the app uses the `response` parameter to send something to the _client_ - the _client_ is whatever application is calling the endpoint, in the case of this Glitch app it's typically just going to be the web browser, so if you visit [api-learner.glitch.me/benormal](https://api-learner.glitch.me/benormal), you'll see the text inside the function written out.

___Notes:___ 

* You can also call the endpoint from other clients, these could be applications in which you call the endpoint from your code - you can try it in a terminal using this command: `curl https://api-learner.glitch.me/benormal`). 
* You could use the `request` object to retrieve info about the request if necessary, for example if you wanted to pass info from clients in the request parameters (such as a search query), or in the body if you were e.g. updating or inserting new data into a database.

As you can see, all the endpoint does is return some text - in a real API the code would probably be querying a database but let's keep things simple for now. :innocent:

#### Your Endpoint

Right, let's get your endpoint added - in the `server.js` file, copy an existing `app.get` function and paste it under the rest (you'll see the place marked with a comment). Change two things:

* The endpoint name, `benormal` in the example - make it something that's likely to be unique to you so that we don't end up with duplicates, e.g. part of a domain you own (let's avoid punctuation symbols and just use letters).
* The text in the `send` call - change it to some interesting fact about you or whatever else you want to send back from the server.

Your addition should look something like this:

```
app.get('/youridentifier', function(request, response) {
  response.send('an interesting fact');
});
```

![Endpoint Code](https://user-images.githubusercontent.com/6666370/57317938-231c5780-70f1-11e9-8603-e678a2f4ca31.png)

#### Add a Link

Add a link to your new endpoint in the app homepage - open `public/index.html`. You'll see the list of endpoints in there - add a new list item to link to yours. Include the endpoint name as the anchor element `href` and include whatever text you want to appear as the link inside the anchor body. It should look something like this:

```
<li>
  <a href="/youridentifier">name</a>
</li>
```

![Link Code](https://user-images.githubusercontent.com/6666370/57317937-2283c100-70f1-11e9-9459-951e25248870.png)

Check that your endpoint works by viewing the live Glitch app (click __Show Live__) and clicking your newly added link. If all goes according to plan you should see the text you wrote with the response object..! :grin:

_If your endpoint doesn't behave as expected and you need help, [create an issue in the original project GitHub repo](https://github.com/SueSmith/glitch-api-learner/issues) and I'll do my best to help troubleshoot._

### 4. Export to GitHub

OK so you've got a lovely new endpoint added to the API - don't keep it to yourself! By exporting it back to GitHub, you can get your addition merged into the original app.

In your Glitch project, select __Tools__ and choose __Git, Import, and Export__.

![Glitch Export](https://user-images.githubusercontent.com/6666370/57104302-e252c600-6d1f-11e9-9a2f-79d71f1a1ab4.png)

Click the __Grant Access__ link to grant Glitch access to your GitHub repo.

![GitHub Access](https://user-images.githubusercontent.com/6666370/57238438-52639380-7021-11e9-96ed-36132f695665.png)

Follow the prompts inside GitHub to allow Glitch / FogCreek to access your account.

![Authorize Glitch](https://user-images.githubusercontent.com/6666370/57238713-f77e6c00-7021-11e9-9f34-cd50943085d1.png)

Once authorised and back in your Glitch project, open the Git menu again and select __Export to GitHub__ and enter ___your GitHub username___, followed by a slash, then the repo name.

![Export Options](https://user-images.githubusercontent.com/6666370/57104259-c7805180-6d1f-11e9-89e2-882df290ea45.png)
![Repo Details](https://user-images.githubusercontent.com/6666370/57104260-c7805180-6d1f-11e9-9655-585e31551660.png)

If the export is successful, your changes should be added to a new branch in your repository named `glitch`. Refreshing your forked project page in GitHub should show the new branch, otherwise you can select it in the branch dropdown (which shows `master` by default).

![Glitch Branch](https://user-images.githubusercontent.com/6666370/57239085-d407f100-7022-11e9-9619-4a4ec0928ae9.png)

Click __Compare and pull request__ for the Glitch branch - you're going to merge the changes from Glitch into the master branch for your forked project. Make sure you have selected your fork with the `master` branch as __base__, and your fork with the `glitch` branch as __head__ - later you'll be opening a request to merge your changes into the original repo but not quite yet.

Use the __Base repository__ dropdown to select your fork of the original project.

![Select Fork](https://user-images.githubusercontent.com/6666370/57240077-95276a80-7025-11e9-8820-472539731be6.png)

The page will update to show you are going to merge one branch into another in the same project.

![Branches](https://user-images.githubusercontent.com/6666370/57240110-a2dcf000-7025-11e9-9e6f-32e59d580ad1.png)

_If you scroll down the page you'll see your added code highlighted in green._

![Comparing Code](https://user-images.githubusercontent.com/6666370/57240394-3f06f700-7026-11e9-800c-b7ae7042b6fe.png)

Click __Create pull request__.

![Pull Request](https://user-images.githubusercontent.com/6666370/57240709-1a5f4f00-7027-11e9-8ff5-d6cfc3813c76.png)

Your changes shouldn't present any conflicts so click __Merge pull request__ (then __Confirm merge__).

![Merge PR](https://user-images.githubusercontent.com/6666370/57240800-5abecd00-7027-11e9-9732-c644275d8c2a.png)

Hopefully your merge is a success - feel free to delete the `glitch` branch.

![Merged](https://user-images.githubusercontent.com/6666370/57240998-e9334e80-7027-11e9-9f56-9b98d9711aa5.png)

Now your forked project master branch is up to date with the changes you made in Glitch.

### 5. Open a Pull Request

You can now request that your new endpoint be added to the original repo so that the list in there keeps growing. You'll do this by opening a pull request to merge the changes in your fork into `SueSmith/glitch-api-learner`.

In your forked project in GitHub, click __Pull Request__.

![Pull Request](https://user-images.githubusercontent.com/6666370/57314624-ed27a500-70e9-11e9-98e3-264b2c2a2aa7.png)

With the original repo selected as base and your fork selected as head (master branch on both), click __Create pull request__.

![Fork PR](https://user-images.githubusercontent.com/6666370/57314774-31b34080-70ea-11e9-8c24-78ad6de054a8.png)

Add a optional message and click __Create pull request__.

![Pull Request](https://user-images.githubusercontent.com/6666370/57240503-88efdd00-7026-11e9-8a56-2cf04fabf269.png)

Your pull request will be opened!

![Open PR](https://user-images.githubusercontent.com/6666370/57314995-95d60480-70ea-11e9-9e52-62aac7ec61b9.png)

Once the reviewer has had a chance to check it out you'll hear back - hopefully letting you know it's been merged and is going to be deployed onto the original Glitch project..!!! :flags: :tada:

![Merged PR](https://user-images.githubusercontent.com/6666370/57315374-578d1500-70eb-11e9-83a7-d5ce0bb6b487.png)

Thanks for submitting your endpoint to the project! :trophy: 

## Next Steps

By working through this tutorial, you've learned about how APIs work at a high level and worked through the basic contribution process for a collaborative software project (open source or otherwise). :muscle: :computer: :fireworks:

These are some of the key skills in being part of a developer team. :rocket: Next why not build on what you've learned by exploring APIs and open source a little further: :mortar_board:

* [API intro article that goes into more detail than the examples we covered here](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)
* [More comprehensive guide to building a REST API that uses a database](https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09)
* [The Express guidance if you need a reference](https://expressjs.com/en/guide/routing.html)
* [If you need to brush up on your JavaScript, the MDN docs are a great place to work from](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
* [Open Source contribution guidance from Github](https://opensource.guide/how-to-contribute/)
* [There are tons of API projects on Glitch that you can learn from and remix](https://glitch.com/search?q=rest%20api&activeFilter=project)

___Please feel free to use this project in any way you find helpful - let me know about any cool things you do with it or report any problems you come across in the [GitHub project issues](https://github.com/SueSmith/glitch-api-learner/issues)!___