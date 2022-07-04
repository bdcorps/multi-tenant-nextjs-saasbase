// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Site } from '../../types';

const sites: Site[] = [
  {
    subdomain: "sukh",
    name: "Sukhpal Saini",
    description: "Full Stack Dev at XYZ",
    posts: [
      { title: "Building a Subscription System using Stripe, Node.js, and MongoDB - Part 1: Recurring Payments", description: "We will create a subscription system that will let our users pay for a monthly plan using Stripe Checkout.", image: "https://google.com", link: "https://www.saasbase.dev/subscription-payments-1-adding-basic-and-pro-subscription-plans-using-stripe/" },
      { title: "Authentication System using Passport.js, Node.js, and MongoDB - Part 1: Google Login", description: "We will create an authentication system that will let our users log in using Google Sign-In.", image: "https://google.com", link: "https://www.saasbase.dev/building-an-authentication-system-using-passport-js-node-js-and-mongodb-part-1-google-login/" }
    ]
  }
  , {
    subdomain: "hello",
    name: "ashi",
    description: "ashi's website",
    posts: [
      { title: "ashi are cool", description: "coolio", image: "https://google.com", link: "" },
      { title: "people ashi are cool", description: "coolio", image: "https://google.com", link: "" }
    ]
  }
]

export async function getSite(subdomain: string) {
  const site = sites.find((site: Site) => site.subdomain === subdomain) || null

  return site;
}