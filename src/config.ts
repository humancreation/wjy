export interface SiteConfig {
  SITE_TITLE: string;
  AUTHOR_NAME: string;
  AUTHOR_INITIAL: string;
  SITE_DESCRIPTION: string;
  path: string;
}

export const configs: Record<string, SiteConfig> = {
  wjy: {
    SITE_TITLE: "王菊英",
    AUTHOR_NAME: "王菊英",
    AUTHOR_INITIAL: "WJY",
    SITE_DESCRIPTION: "王菊英的个人网站",
    path: "/wangjuying",
  },
  lmx: {
    SITE_TITLE: "林鸣霄",
    AUTHOR_NAME: "林鸣霄",
    AUTHOR_INITIAL: "LMX",
    SITE_DESCRIPTION: "林鸣霄的个人网站",
    path: "/lmx",
  },
  yyd: {
    SITE_TITLE: "叶玉灯",
    AUTHOR_NAME: "叶玉灯",
    AUTHOR_INITIAL: "YYD",
    SITE_DESCRIPTION: "叶玉灯的个人网站",
    path: "/yyd",
  },
  lsy: {
    SITE_TITLE: "林诗雁",
    AUTHOR_NAME: "林诗雁",
    AUTHOR_INITIAL: "LSY",
    SITE_DESCRIPTION: "林诗雁的个人网站",
    path: "/lsy",
  },
};

export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export const url = (path: string) => {
  const clean = path.replace(/^\//, "");
  return clean ? BASE_PATH + clean : BASE_PATH;
};
export const siteUrl = (site: string, path: string = "") => {
  if (!site) return BASE_PATH;
  const sitePrefix = configs[site].path.replace(/^\//, "");
  return BASE_PATH + sitePrefix + path;
};
export { BASE_PATH };
