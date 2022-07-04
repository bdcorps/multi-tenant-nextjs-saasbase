// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sites } from '../../data';
import { Site } from '../../types';

export async function getSite(subdomain: string) {
  const site = sites.find((site: Site) => site.subdomain === subdomain) || null

  return site;
}
