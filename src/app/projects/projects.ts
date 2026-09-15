import { Component, signal, computed } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

export type Category = 'all' | 'cloud' | 'ai' | 'fullstack' | 'ecommerce';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: Category;
  categoryLabel: string;
  status: string;
  highlights: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [
    MatCardModule,
    ButtonModule,
    ChipModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  selectedCategory = signal<Category>('all');

  categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'cloud', label: 'Cloud & Infrastructure' },
    { key: 'ai', label: 'AI & Web Apps' },
    { key: 'fullstack', label: 'Full-Stack Apps' },
    { key: 'ecommerce', label: 'E-Commerce' },
  ];

  projects: Project[] = [
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      subtitle: 'roddaniels.com',
      category: 'cloud',
      categoryLabel: 'Cloud & Infrastructure',
      status: 'Live • AWS Hosted',
      description:
        'A high-performance, fully serverless personal portfolio hosted on AWS and engineered for reliability, security, and global delivery.',
      highlights: [
        'Serverless static web hosting via AWS S3 and CloudFront CDN for ultra-low latency',
        'Custom domain DNS routing via Route 53 with automated SSL via AWS Certificate Manager',
        'Automated CI/CD deployment pipeline powered by GitHub Actions',
        'Built with Angular 21 & modern component architecture',
      ],
      technologies: [
        'Angular 21',
        'TypeScript',
        'AWS S3',
        'CloudFront',
        'Route 53',
        'GitHub Actions',
      ],
      liveUrl: 'https://roddaniels.com',
      githubUrl: 'https://github.com/roddan-hue/portfolio',
    },
    {
      id: 'bossrod-reviews',
      title: 'BOSSROD HUB',
      subtitle: 'bossrod.com',
      category: 'ai',
      categoryLabel: 'AI & Web Apps',
      status: 'Live • Active Dev',
      description:
        'An AI-powered product review and comparison platform aggregating consumer data to generate intelligent summaries, score ratings, and buyer insights.',
      highlights: [
        'Automated review aggregation & product comparison algorithms',
        'AI summarization engine extracting real buyer insights and key product pros/cons',
        'Scalable cloud-hosted infrastructure engineered for high availability',
        'Responsive UI designed for rapid product discovery and decision making',
      ],
      technologies: [
        'Angular',
        'Node.js',
        'AI Engine',
        'AWS Hosting',
        'REST API',
      ],
      liveUrl: 'https://bossrod.com',
    },
    {
      id: 'movies',
      title: 'Movie Catalog',
      subtitle: 'movies.bossrod.com',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Apps',
      status: 'Live • AWS Hosted',
      description:
        'A fast, minimalist movie discovery platform enabling users to browse thousands of films with real-time search and instant filtering.',
      highlights: [
        'Instant real-time search with client-side caching across extensive movie catalog',
        'Integrated Appwrite Backend-as-a-Service for data management and metrics',
        'Clean poster layout with ratings, release dates, and language tags',
        'Deployed globally on AWS cloud infrastructure',
      ],
      technologies: [
        'React',
        'Tailwind CSS',
        'TMDB API',
        'AWS Cloud',
        'JavaScript',
      ],
      liveUrl: 'https://movies.bossrod.com',
    },
    {
      id: 'shop',
      title: 'BOSSROD SHOP',
      subtitle: 'shop.bossrod.com',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      status: 'Live • AWS Hosted',
      description:
        'A modern e-commerce storefront showcasing curated product offerings with responsive navigation and optimized catalog rendering.',
      highlights: [
        'Sleek product catalog showcase with responsive grid layouts',
        'Fast client-side routing and optimized asset delivery',
        'Cloud-hosted setup ensuring continuous availability and reliability',
        'Modular component architecture designed for scalable product additions',
      ],
      technologies: [
        'Web Platform',
        'AWS Cloud',
        'TypeScript',
        'Tailwind / SCSS',
        'REST Services',
      ],
      liveUrl: 'https://shop.bossrod.com',
    },
    {
      id: 'quizme',
      title: 'QuizMe App',
      subtitle: 'quizme.bossrod.com',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Apps',
      status: 'Live • AWS Hosted',
      description:
        'An AI assisted interactive quiz and self-assessment web app delivering dynamic question sets, real-time scoring, and progress feedback.',
      highlights: [
        'Dynamic question rendering and instant score feedback engine',
        'User-friendly interactive UI optimized for mobile and desktop devices',
        'Hosted on AWS infrastructure for reliable uptime and low latency',
        'Designed with reusable component architecture for modular quiz sets',
      ],
      technologies: [
        'Full-Stack',
        'AWS Cloud',
        'JavaScript / TypeScript',
        'Interactive UI',
        'State Management',
      ],
      liveUrl: 'https://quizme.bossrod.com',
    },
  ];

  filteredProjects = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'all') {
      return this.projects;
    }
    return this.projects.filter((p) => p.category === cat);
  });

  setCategory(category: Category) {
    this.selectedCategory.set(category);
  }
}