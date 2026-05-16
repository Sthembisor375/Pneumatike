export type ArticleCategory =
  | "Mentorship"
  | "Teaching"
  | "Family"
  | "Discernment"
  | "Reflection";

export type LibraryArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: ArticleCategory;
  readTime: string;
  publishedAt: string;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
};

export const blogArticles: LibraryArticle[] = [
  {
    id: "unhurried-listening",
    slug: "unhurried-listening",
    title: "The gift of unhurried listening",
    excerpt:
      "Why pastoral care begins with pace—not fixing—and how households benefit when someone makes room for the whole story before offering wisdom.",
    body: [
      "Much of what people call “counselling” is really the hunger to be known without being hurried. In pastoral mentorship, listening is not a prelude to advice; it is itself a form of care.",
      "When we slow down, we make space for the Spirit to sort what is urgent from what is merely loud. Families often discover that the first gift they needed was not a plan but a patient witness.",
      "This does not mean passivity. Unhurried listening is disciplined—it asks gentle questions, names what is heard, and refuses to collapse complexity into a single slogan.",
      "If you are carrying more than you can articulate, you are not failing. You may simply need a conversation that does not rush you toward resolution before you have been fully heard.",
    ],
    category: "Mentorship",
    readTime: "6 min read",
    publishedAt: "2026-03-10",
    imageSrc: "/iwaria-inc-Q6KzWe-lq9Y-unsplash.jpg",
    imageAlt: "Warm outdoor gathering suggesting community and conversation.",
    featured: true,
  },
  {
    id: "discernment-rhythms",
    slug: "discernment-rhythms",
    title: "Rhythms for weeks when discernment feels noisy",
    excerpt:
      "Practical patterns for prayer, counsel, and Sabbath when decisions press in from every direction and clarity seems far away.",
    body: [
      "Discernment is rarely a single moment of insight. More often it is a season of faithfulness in small things: sleep, Scripture, honest conversation, and the courage to name fear without letting it dictate.",
      "A simple rhythm might include a fixed time to pray with one psalm, one conversation with a trusted believer, and one act of obedience you can take this week—even if the larger decision remains open.",
      "Noise increases when we treat every option as equally ultimate. Pastoral guidance helps sort what is permanent from what is provisional.",
    ],
    category: "Discernment",
    readTime: "5 min read",
    publishedAt: "2026-02-22",
    imageSrc: "/guidance-compass-green.png",
    imageAlt: "Contemplative scene suggesting reflection and direction.",
  },
  {
    id: "family-sabbath-edges",
    slug: "family-sabbath-edges",
    title: "Protecting the edges of family Sabbath",
    excerpt:
      "Households do not need perfect schedules—they need protected edges where rest, worship, and connection can breathe.",
    body: [
      "Sabbath is not only a day; it is a boundary. For many families, the challenge is not theology but logistics: sports, shifts, travel, and the subtle guilt of saying no.",
      "Start with one edge: a meal without devices, a walk without agenda, or ten minutes of prayer everyone can join—even imperfectly.",
      "Pastoral accompaniment can help couples align on what rest means in their season without imposing someone else’s template.",
    ],
    category: "Family",
    readTime: "4 min read",
    publishedAt: "2026-02-08",
    imageSrc: "/young-black-family-green-nature.png",
    imageAlt: "Family outdoors, suggesting connection and rest.",
  },
  {
    id: "teaching-that-lands",
    slug: "teaching-that-lands",
    title: "When teaching needs to land, not impress",
    excerpt:
      "Formation over information: how shorter, embodied teaching serves individuals and small groups better than exhaustive coverage.",
    body: [
      "The goal of Christian teaching is love that shows up on Tuesday—not applause on Sunday. That shift changes what we prepare and how long we speak.",
      "One faithful question after a session often accomplishes more than three extra points in the manuscript: What will you practice before we meet again?",
      "Groups thrive when teaching leaves room for response, prayer, and accountability rather than consuming every available minute.",
    ],
    category: "Teaching",
    readTime: "5 min read",
    publishedAt: "2026-01-28",
    imageSrc: "/sincerely-media-dGxOgeXAXm8-unsplash.jpg",
    imageAlt: "Group study with books, suggesting learning together.",
  },
  {
    id: "distance-still-present",
    slug: "distance-still-present",
    title: "Presence across distance",
    excerpt:
      "Video sessions and follow-up notes can carry real pastoral presence when geography stretches the relationship.",
    body: [
      "Distance changes texture, not necessarily depth. Clear agreements about session length, confidentiality, and follow-up help trust grow across time zones.",
      "Short messages between meetings—“I prayed for you today,” or a verse that surfaced—often sustain people more than an extra half hour of talk.",
      "Technology serves relationship; it does not replace the human pace of care.",
    ],
    category: "Mentorship",
    readTime: "4 min read",
    publishedAt: "2026-01-12",
    imageSrc: "/dylan-ferreira-HJmxky8Fvmo-unsplash.jpg",
    imageAlt: "Person on a video call at home, suggesting remote connection.",
  },
  {
    id: "marriage-hope-naming",
    slug: "marriage-hope-naming",
    title: "Naming hope when marriage feels thin",
    excerpt:
      "Pastoral language for seasons of strain that honours truth without closing the door on renewal.",
    body: [
      "Couples sometimes arrive exhausted by conflict and ashamed to admit it. The first work is safety: each person heard without immediate problem-solving.",
      "Hope is not denial. It is the conviction that Christ can meet us in the present facts while we take wise steps—sometimes with referrals when specialised care is needed.",
      "Renewal often begins with small repairs: apologies without qualifiers, rhythms of appreciation, and shared prayer even when feelings lag.",
    ],
    category: "Family",
    readTime: "6 min read",
    publishedAt: "2025-12-18",
    imageSrc: "/pexels-pavel-danilyuk-8205092.jpg",
    imageAlt: "Couple in quiet conversation, suggesting partnership.",
  },
  {
    id: "ministry-sustainability",
    slug: "ministry-sustainability",
    title: "Sustainable ministry without heroic burnout",
    excerpt:
      "Leaders need permission to rest, delegate, and receive care—not only give it.",
    body: [
      "Burnout often masquerades as dedication. Pastoral mentors can help leaders name limits as stewardship rather than failure.",
      "Sustainability includes friendships outside one’s role, sleep, and the humility to ask for help before cynicism hardens.",
      "The church needs leaders who finish well, not only leaders who start intensely.",
    ],
    category: "Mentorship",
    readTime: "5 min read",
    publishedAt: "2025-12-01",
    imageSrc: "/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg",
    imageAlt: "Desk with notebook and coffee, suggesting focused work.",
  },
  {
    id: "truth-and-tenderness",
    slug: "truth-and-tenderness",
    title: "Truth and tenderness in the same sentence",
    excerpt:
      "Biblical fidelity and pastoral warmth are not rivals—they correct and complete one another.",
    body: [
      "People have been wounded by truth without love and by love without truth. Christ holds both without contradiction.",
      "Pastoral speech learns to name sin and suffering plainly while refusing contempt. The goal is repentance that leads to life, not shame that paralyses.",
      "This posture shapes how we teach, correct, and walk with families in complex seasons.",
    ],
    category: "Teaching",
    readTime: "5 min read",
    publishedAt: "2025-11-14",
    imageSrc: "/pexels-leonardodourado-13011294.jpg",
    imageAlt: "Person studying with notes, suggesting reflection.",
  },
  {
    id: "ordinary-wonder",
    slug: "ordinary-wonder",
    title: "Recovering wonder in ordinary weeks",
    excerpt:
      "Reflection on gratitude, attention, and the small evidences of grace easy to miss when life feels managerial.",
    body: [
      "Wonder is not escapism. It is noticing—bread, friendship, Scripture, the fact that you are still being carried.",
      "A journal of three gratitudes, a weekly walk without headphones, or reading one gospel scene slowly can reopen eyes dulled by urgency.",
      "Pastoral care sometimes invites people to catalogue grace before asking them to strategise change.",
    ],
    category: "Reflection",
    readTime: "4 min read",
    publishedAt: "2025-10-30",
    imageSrc: "/lawrence-crayton-cVb7BGt9FiQ-unsplash.jpg",
    imageAlt: "Soft natural light through foliage, suggesting stillness.",
  },
];

export function getArticleBySlug(slug: string): LibraryArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}
