import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CaseStudyNavProps {
  prevStudy?: { slug: string; title: string };
  nextStudy?: { slug: string; title: string };
}

const CaseStudyNav = ({ prevStudy, nextStudy }: CaseStudyNavProps) => {
  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {prevStudy ? (
            <Link
              to={`/case-study/${prevStudy.slug}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">{prevStudy.title}</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/case-study"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Explore All Case Studies
          </Link>

          {nextStudy ? (
            <Link
              to={`/case-study/${nextStudy.slug}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-sm">{nextStudy.title}</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyNav;
