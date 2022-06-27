export interface Site {
  name: string,
  description: string,
  posts: Post[]
}

export interface Post {
  name: string,
  description: string,
  image: string
}

export interface Data {
  name: string
}