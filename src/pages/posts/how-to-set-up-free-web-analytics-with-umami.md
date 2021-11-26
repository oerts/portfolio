---
layout: ../../layouts/PostLayout.astro
title: How to set up free web analytics with Umami
publishDate: 2021-11-18T14:20:16.007Z
---
If you want to stay clear of Google but don't want to break the bank, [Umami](https://umami.is) makes web analytics simple and free. It is a self-hosted web analytics solution that you can deploy to Heroku.

Umami is privacy-focused and only collects the metrics you care about. You can view the [live demo](https://app.umami.is/share/ISgW2qz8/flightphp.com) to see it in action.

To get started, set up a free account with [Heroku](https://www.heroku.com/home).

Umami provides great [documentation](https://umami.is/docs/running-on-heroku) on how to complete the manual installation. But there is also a Heroku Button that we can use that requires zero effort.

Go ahead and click the Button below, give your app a name and click **Deploy app**. Heroku will take care of the rest of the set up.

[![Deploy to Heroku](https://heroku.com/deploy?template=https://github.com/mikecao/umami)](https://www.herokucdn.com/deploy/button.svg)

Once the build succeeds, click **Open app** in your Heroku dashboard to get to your Umami instance.

A default administrator account is already set up as **admin** with the password **umami**.

![login page](https://umami.is/login.png)

After you log in and change your password, go to **Settings**, **Websites** and click on the **Add website** button.

![add website page](https://umami.is/add-website.png)

Once you fill out the form and click **Save**, click on the **Get tracking code** button on the **Websites** page.

![get tracking code button](https://umami.is/get-tracking-code.png)

Copy the code and insert it into the `head` section of your website. It looks like the one below:

```html
<script async defer data-website-id="d8402665-41eb-4cda-b520-09dcc62972ce" src="https://your-umami-app.herokuapp.com/umami.js"></script>
```

Go ahead and give your website a visit to see the data immediately appear in your Umami dashboard.

Congratulations! Your website now uses free and open source web analytics.

*(You should note that the Postgres database that stores your data has a limit of 10000 rows for the free tier. Depending on your site traffic, you may need to consider upgrading to a paid tier on Heroku.)*