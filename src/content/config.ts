import { z, defineCollection } from "astro:content";
const siteField = { site: z.enum(["wjy", "lmx", "yyd", "lsy"]) };

const blogSchema = z.object({
  ...siteField,
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "tags must be unique",
    })
    .optional(),
});

const notesSchema = z.object({
  ...siteField,
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "tags must be unique",
    })
    .optional(),
});
const projectsSchema = z.object({
  ...siteField,
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  github: z.string().optional(),
  liveUrl: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "tags must be unique",
    })
    .optional(),
});

const homeSchema = z.object({
  ...siteField,
  greeting: z.string(),
  intro: z.string(),
  intro2: z.string(),
  fontSample: z.boolean().default(true),
  en: z.string().default("The quick brown fox jumps over the lazy dog. 0123456789"),
  traditional: z.string().default("人生若只如初見，何事秋風悲畫扇。"),
  jp: z.string().default("いろはにほへと ちりぬるを — 吾輩は猫である。名前はまだ無い。"),
  kr: z.string().default("다람쥐 헌 쳇바퀴에 타고파. 동해 물과 백두산이."),
  note: z.string().default("2026 年 4 月，用 Astro v4.0 搭配 HarmonyOS Sans SC 与 Nunito Variable，实现 CJK + Latin 无缝 fallback —— 只要 @font-face 不用 local()。"),
  codeNote: z.string().default("# 代码块字体使用 maple-mono-cn"),
});

const cvSchema = z.object({
  ...siteField,
  section: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  url: z.string().optional(),
  order: z.number().default(0),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type NotesSchema = z.infer<typeof blogSchema>;
export type ProjectsSchema = z.infer<typeof projectsSchema>;
export type HomeSchema = z.infer<typeof homeSchema>;
export type CVSchema = z.infer<typeof cvSchema>;
// export type StoreSchema = z.infer<typeof storeSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const notesCollection = defineCollection({ schema: notesSchema });
const projectsCollection = defineCollection({ schema: projectsSchema });
const homeCollection = defineCollection({ schema: homeSchema });
const cvCollection = defineCollection({ schema: cvSchema });

export const collections = {
  blog: blogCollection,
  notes: notesCollection,
  projects: projectsCollection,
  home: homeCollection,
  cv: cvCollection,
};
