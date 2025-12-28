export const caseStudyList = [
  {
    slug: "insurance-company",
    number: "01",
    title: "Leading Insurance Company",
    shortTitle: "Leading Insurance Company",
  },
  {
    slug: "saas-ux-solutions",
    number: "02",
    title: "SaaS UX Solutions",
    shortTitle: "SaaS UX Solutions",
  },
  {
    slug: "healthcare-reports",
    number: "03",
    title: "Leading Health care Reports",
    shortTitle: "Leading Healthcare Reports",
  },
  {
    slug: "employee-self-service",
    number: "04",
    title: "Employee Self Services",
    shortTitle: "Employee Self Services",
  },
  {
    slug: "kid-acts",
    number: "05",
    title: "Kid Acts",
    shortTitle: "KidActs",
  },
];

export const getAdjacentStudies = (currentSlug: string) => {
  const currentIndex = caseStudyList.findIndex((s) => s.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? caseStudyList[currentIndex - 1] : undefined,
    next: currentIndex < caseStudyList.length - 1 ? caseStudyList[currentIndex + 1] : undefined,
  };
};
