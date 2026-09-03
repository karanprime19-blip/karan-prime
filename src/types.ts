export type CategoryTab = 'ui-ux' | 'graphic-design' | 'video-editing';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: CategoryTab;
  categoryLabel: string;
  subtitle: string;
  coverImage: string;
  additionalImages?: string[];
  tags: string[];
  client: string;
  year: string;
  role: string;
  summary: string;
  challenge: string;
  solution: string;
  tools: string[];
  metrics?: ProjectMetric[];
  behanceUrl?: string;
  videoUrl?: string; // For video editing projects
  videoDuration?: string;
  aspectRatio?: '16:9' | '9:16' | '4:3' | '1:1';
  deliverables: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: 'Layout' | 'Palette' | 'Film';
  accentColor: 'blue' | 'green' | 'cyan';
  offerings: string[];
  deliverables: string[];
  typicalTimeline: string;
  tools: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget?: string;
  message: string;
}
