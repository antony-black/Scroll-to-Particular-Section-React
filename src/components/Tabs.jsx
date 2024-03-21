import Tab from "./Tab";
import { SectionData } from "../constanst/SectionData";

export default function Tabs({ activeTab, handleTabClick }) {
  const createTabs = () => {
    const tabs = SectionData.map((item, index) => (
      <Tab
        key={index}
        onClick={() => handleTabClick(index)}
        backgroundColor={
          activeTab === index ? SectionData[index].style.background : "gray"
        }
      >
        {item.label}
      </Tab>
    ));

    return tabs;
  };

  return createTabs();
}
