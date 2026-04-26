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

// Featured media coverage
export const FEATURED_MEDIA = {
  title: 'Jonathan Barnes Named CEO of Authentic',
  publication: 'Campaigns & Elections',
  url: 'https://campaignsandelections.com/industry-news/jonathan-barnes-named-ceo-of-authentic/',
} as const;

// Case studies & prior campaign work
export const BIDEN_2020_CASE_STUDY_URL =
  'https://authentic.org/case-studies/biden-for-president/';
