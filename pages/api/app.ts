import { NextApiRequest, NextApiResponse } from "next";
import { sites } from "../../data";
import { Site } from "../../types";

export async function getSiteByEmail(email: string) {
  const site = sites.find((site: Site) => site.email === email) || null

  return site;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const { email } = req.body;
  const site = await getSiteByEmail(email);
  console.log({ site }, { email })
  res.status(200).send({ site })
}