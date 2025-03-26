import CourseDetailClient from '@/components/courses/CourseDetailClient';

// Define course slugs for static generation
export function generateStaticParams() {
  return [
    { slug: 'Job Ready AI Powered Cohort: Web + DSA + Aptitude' },
    { slug: 'Three.js Domination' },
    { slug: 'Java & DSA Domination' },
    { slug: 'Aptitude & Reasoning for Campus Placements' },
    { slug: 'Back-End Domination: Create Efficient Back-End' },
    { slug: 'Front-End Domination: Create Anything with Code' }
  ];
}

// Server component
export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  return <CourseDetailClient slug={params.slug} />;
}
