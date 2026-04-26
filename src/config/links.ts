/**
 * Centralized link constants.
 *
 * Every component and page that references an external proof point reads
 * from this file, so a single edit propagates site-wide.
 */

export const SITE = {
  name: 'AI in Politics',
  url: 'https://aiinpolitics.ai',
  description:
    'Practical AI strategy for Democratic campaigns and progressive organizations.',
  author: 'Jonathan Barnes',
} as const;

// Personal & social
export const LINKEDIN_URL = 'https://www.linkedin.com/in/jbarnes1/';
export const SUBSTACK_URL = 'https://substack.com/@aiinpolitics';

// Companies & products
export const AUTHENTIC_URL = 'https://authentic.org/';
export const QUILLER_URL = 'https://quiller.ai/';

// Awards & recognition
export const C_AND_E_AI_LEADER_AWARD_URL =
  'https://campaignsandelections.com/awards/campaigntech-awards/2025-campaigntech-award-winners/';
export const C_AND_E_AI_PIONEER_AWARD_URL =
  'https://campaignsandelections.com/awards/reed-awards/2026-reed-award-winners/';

// Featured media coverage (lead citation, used on home + About)
export const FEATURED_MEDIA = {
  title: 'Jonathan Barnes Named CEO of Authentic',
  publication: 'Campaigns & Elections',
  url: 'https://campaignsandelections.com/industry-news/jonathan-barnes-named-ceo-of-authentic/',
} as const;

// All media coverage. Keep ordered most-recent-first; the Speaking &
// Awards page renders this array as-is.
export const MEDIA_HITS: ReadonlyArray<{
  title: string;
  publication: string;
  url: string;
  year?: string;
}> = [
  {
    title: 'How Money, Tech, and Culture Are Shaping the Future of Politics',
    publication: 'Campaigns & Elections',
    year: '2025',
    url: 'https://campaignsandelections.com/industry-news/how-money-tech-and-culture-are-shaping-the-future-of-politics/',
  },
  {
    title: 'Pros Weigh In on Getting Started With AI',
    publication: 'Campaigns & Elections',
    year: '2025',
    url: 'https://campaignsandelections.com/industry-news/pros-weigh-in-on-getting-started-with-ai/',
  },
  {
    title: 'Is the Politics Business Ready for the AI Age?',
    publication: 'Campaigns & Elections',
    year: '2025',
    url: 'https://campaignsandelections.com/industry-news/is-the-politics-business-ready-for-the-ai-age/',
  },
  {
    title: 'Jonathan Barnes Named CEO of Authentic',
    publication: 'Campaigns & Elections',
    year: '2025',
    url: 'https://campaignsandelections.com/industry-news/jonathan-barnes-named-ceo-of-authentic/',
  },
  {
    title: 'Google Policy Change Has Political Advertisers Looking Elsewhere',
    publication: 'CNBC',
    year: '2019',
    url: 'https://www.cnbc.com/2019/12/08/google-policy-change-has-political-advertisers-looking-elsewhere.html',
  },
  {
    title: 'Digital Advertising Techniques and Lessons for British Campaigners',
    publication: 'Campaigns & Elections (video)',
    year: '2016',
    url: 'https://campaignsandelections.com/videos/digital-advertising-techniques-and-lessons-for-british-campaigners/',
  },
];

// Case studies & prior campaign work
export const BIDEN_2020_CASE_STUDY_URL =
  'https://authentic.org/case-studies/biden-for-president/';
