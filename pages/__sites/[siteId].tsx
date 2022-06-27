import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { Post, Site } from "../../types";
import { getSite } from "../api/hello";

interface SiteProps {
  site: Site; //TODO: add type
}

const Site: FunctionComponent<SiteProps> = ({ site }: SiteProps) => {
  return (
    <>
      {site ? (
        <div>
          <p>{site.name}</p>
          <p>{site.description}</p>
          {site.posts.map((post: Post, i: number) => (
            <div key={`post_${i}`}>
              <p>Post {post.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>not a vlaid site, create one on the home paeg</p>
      )}
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { siteId } = context.query;
  const site = await getSite(siteId);

  return {
    props: { site },
  };
}

export default Site;
