import { SectionData } from "../constanst/SectionData";
import { useEffect } from "react";

export default function Sections({ activeSection, sectionRefs }) {
  const createSections = () => {
    const sections = SectionData.map((item, index) => (
      <div
        key={index}
        ref={(ref) => (sectionRefs.current[index] = ref)}
        className="color-block"
        style={item.style}
      >
        <h2 className="title">{item.label}</h2>
      </div>
    ));

    return sections;
  };

  useEffect(() => {
    if (sectionRefs.current[activeSection]) {
      const position =
        sectionRefs.current[activeSection].getBoundingClientRect().top +
        window.scrollY;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  return createSections();
}
