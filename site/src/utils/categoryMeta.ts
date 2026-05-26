// Inline SVG icons (paths only) for each category — kept here so we don't add icons to data.json
export const CATEGORY_ICONS: Record<string, string> = {
  'ships-gear':
    '<path d="M12 2 L4 14 L8 14 L8 22 L16 22 L16 14 L20 14 Z" stroke-linejoin="round" />',
  'trade-logistics':
    '<path d="M3 7 L12 3 L21 7 L12 11 Z" /><path d="M3 7 V17 L12 21 V11 Z" /><path d="M21 7 V17 L12 21" />',
  'databases':
    '<ellipse cx="12" cy="5" rx="8" ry="2.5" /><path d="M4 5 V12 C4 13.4 7.6 14.5 12 14.5 S20 13.4 20 12 V5" /><path d="M4 12 V19 C4 20.4 7.6 21.5 12 21.5 S20 20.4 20 19 V12" />',
  'wikis-lore':
    '<path d="M4 4 H10 C11.1 4 12 4.9 12 6 V20 C12 18.9 11.1 18 10 18 H4 Z" /><path d="M20 4 H14 C12.9 4 12 4.9 12 6 V20 C12 18.9 12.9 18 14 18 H20 Z" />',
  'maps-navigation':
    '<path d="M3 6 L9 4 L15 6 L21 4 V18 L15 20 L9 18 L3 20 Z" /><path d="M9 4 V18" /><path d="M15 6 V20" />',
  'org-fleet':
    '<circle cx="12" cy="12" r="3" /><path d="M12 5 V2" /><path d="M12 22 V19" /><path d="M5 12 H2" /><path d="M22 12 H19" /><path d="M17 7 L19 5" /><path d="M5 19 L7 17" /><path d="M17 17 L19 19" /><path d="M5 5 L7 7" />',
  'community-news':
    '<path d="M21 12 C21 16.4 16.97 20 12 20 C10.5 20 9.1 19.7 7.9 19.1 L3 20 L4 15.4 C3.4 14.4 3 13.2 3 12 C3 7.6 7.03 4 12 4 S21 7.6 21 12 Z" />',
};
