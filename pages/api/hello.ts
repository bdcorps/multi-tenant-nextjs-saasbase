// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Data, Site } from '../../types';

const sites: Site[] = [
  {
    name: "sukh",
    description: "sukh's website",
    posts: [
      { name: "people are cool", description: "coolio", image: "https://google.com" },
      { name: "people even are cool", description: "coolio", image: "https://google.com" }
    ]
  }
  , {
    name: "ashi",
    description: "ashi's website",
    posts: [
      { name: "ashi are cool", description: "coolio", image: "https://google.com" },
      { name: "people ashi are cool", description: "coolio", image: "https://google.com" }
    ]
  }, {
    name: "bhanu",
    description: "bhanu's website",
    posts: [
      { name: "ashi are cool", description: "coolio", image: "https://google.com" },
      { name: "people bhanu are cool", description: "coolio", image: "https://google.com" }
    ]
  }
]

export async function getSite(name: string) {
  const site = sites.find((site: Site) => site.name === name) || null

  return site;
}



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
