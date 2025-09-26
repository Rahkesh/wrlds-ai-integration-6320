
import PageLayout from '@/components/PageLayout';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import Experience from '@/components/portfolio/Experience';
import Skills from '@/components/portfolio/Skills';
import Certifications from '@/components/portfolio/Certifications';
import ProjectsPortfolio from '@/components/portfolio/ProjectsPortfolio';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Srivarsan T - QA/QC Inspector & Mechatronics Engineer" 
        description="Professional portfolio of Srivarsan T - QA/QC Inspector, Welding Inspector, and Mechatronics Engineer specializing in process optimization and automation."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['QA QC Inspector', 'Welding Inspector', 'Mechatronics Engineer', 'Process Optimization', 'Six Sigma', 'CSWIP', 'NDT', 'Automation']}
      />
      <PortfolioHero />
      <Experience />
      <Skills />
      <Certifications />
      <ProjectsPortfolio />
    </PageLayout>
  );
};

export default Index;
