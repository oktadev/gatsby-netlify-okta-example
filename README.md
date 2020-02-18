# Blogging with JAM: Gatsby, Netlify, and Okta
 
This example app shows how to build a blog app with the #JAMstack, including Gatsby, Netlify CMS, and Okta. 

Please read [Build a Secure Blog with React, Gatsby, and Netlify](https://developer.okta.com/blog/2020/02/18/gatsby-react-netlify) to see how this app was created.

**Prerequisites:** 

* [Node 12+](https://nodejs.org/en/) installed
* A [GitHub Account](https://github.com/join)
* A [Netlify Account](https://app.netlify.com/signup)
* An [Okta Developer Account](https://developer.okta.com/signup)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/gatsby-netlify-okta-example.git gatsby-blog
cd gatsby-blog
```

Create a new project on GitHub and push this project to it, or fork this project.

Modify `static/admin/config.yml` to use your GitHub repo:

```yaml
backend:
  name: github
  repo: your-username/your-repo-name
```

Push, watch your Netlify CI process, and enjoy the fruits of your labor when you're in production! 

The only sad part is you'll be using my account for auth. Fix this by [creating your own Okta developer account](https://developer.okta.com/signup).

Then, register your Gatsby app on Okta:

1. Log in to your developer account, navigate to **Applications**, and click on **Add Application**
2. Choose **Single-Page App** and **Next**
3. Enter a name like `Gatsby Account`
4. Specify the following Login redirect URIs:
    * `http://localhost:8000/account`
    * `http://localhost:9000/account`
    * `https://<your-site>.netlify.com/account`
5. Specify the following Logout redirect URIs:
    * `http://localhost:8000`
    * `http://localhost:9000`
    * `https://<your-site>.netlify.com`
6. Click **Done**

### Add Trusted Origins for Your Gatsby Sites

Gatsby can run on two different ports (8000 and 9000) locally. One is for development and one is for production (invoked with `gatsby build` and `gatsby serve`). You also have your production Netlify site. Add all of these as Trusted Origins in **API** > **Trusted Origins**. 

Click **Add Origin**, select **CORS** and **Redirect** for Type, and add each of the following:

* `http://localhost:8000`
* `http://localhost:9000`
* `https://<your-site>.netlify.com`

### Configure your Okta Settings

Copy your org URL and client ID into `src/components/Login.js`:

```js
const config = {
 baseUrl: '<okta-org-url>',
 clientId: '<okta-client-id>',
 ...
};
```

Start everything with `npm start` and enjoy your JAMmin blog app!

## Links

This example uses the following open source libraries:

* [Gatsby.js](https://www.gatsbyjs.org/)
* [Netlify CMS](https://www.netlifycms.org/)
* [Okta Sign-In Widget](https://developer.okta.com/code/javascript/okta_sign-in_widget/)

## Help

Please post any questions as [comments on the blog post](https://developer.okta.com/blog/2020/02/18/gatsby-react-netlify), as issues in this repository, or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/oktadeveloper/gatsby-netlify-okta-example)
