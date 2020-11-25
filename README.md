# NextJS-Analytics
In this repo, we have implemented an integration with [Next.JS](https://nextjs.org/) and [Quickmetrics](http://quickmetrics.io/). This is to do analytics using the Metrics created by `Next.js` Web Vitals.

# How to Run
Clone and create `.env.local` file with the following content,

```shell
NEXT_PUBLIC_NAME=<YOUR_NAME>
NEXT_PUBLIC_FAKE_BLOG_NAME=<YOUR_FAKE_BLOG_NAME>
NEXT_PUBLIC_FAKE_ORIGINAL_BLOG_NAME=<YOUR_FAKE_ORIGINAL_BLOG_NAME>
NEXT_PUBLIC_FAKE_ORIGINAL_BLOG_LINK=<YOUR_FAKE_ORIGINAL_BLOG_LINK>
NEXT_PUBLIC_TWITTER_LINK=<YOUR_TWITTER_LINK>
NEXT_PUBLIC_QUICK_METRICS_API_KEY=<YOUR_QUICK_METRICS_API_KEY>
NEXT_PUBLIC_SEND_ANALYTICS=true
```

> Please Not: Only last two enironment variables are mandatory!

Run this command,

```shell
yarn install # Or npm install
```

Then,

```shell
yarn dev # Or npm run dev
```

# 🌟 Want to Motivate?

Who doesn't need motivations? Want to motivate? Give this repo a Star (🌟).


