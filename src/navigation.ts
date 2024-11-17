import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'All Blogs',
          href: getBlogPermalink(),
        },
        {
          text: 'How QA365 Works',
          href: getPermalink('how-does-qa365-work', 'post'),
        },
        {
          text: 'Saving Money With QA',
          href: getPermalink('how-to-save-money-with-qa', 'post'),
        },
        {
          text: 'How We Leveraged Our Frontend Testing',
          href: getPermalink('how-to-save-money-with-qa', 'post'),
        }
      ],
    },
    {
      text: 'Demo',
      href: getPermalink('how-does-qa365-work', 'post'),
    },
  ],
  actions: [{ text: 'Book A Demo', href: 'https://calendly.com/qa365/unlock-qa365-first-look', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Demo', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Security', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact Us', href: '#' },
        { text: 'Schedule a Demo', href: '#' },
       
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Data Privacy', href: getPermalink('/privacy') },
      ],
    },
  ],
 
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
