import { useState } from "react";
import SDASection from "./SDASection";
import WargaSection from "./WargaSection";
// import { SDASection } from "./components/sda-section";
// import { CitizensSection } from "./components/citizens-section";
// import TabNavigation from "./TabNavigation";

export default function PotensiPage() {
  const [activeTab, setActiveTab] = useState("sda");

  return (
    <section id="potensi" className="min-h-screen bg-gray-50 mt-20 px-20">
      <h1 className="text-5xl font-bold text-center mb-20">Potensi</h1>
      <SDASection />
      <WargaSection />
      {/* <div className="max-w-7xl mx-auto px-4 py-8"> */}
        {/* Tab Navigation */}
        {/* <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} /> */}
        {/* Content */}
        {/* <div className="bg-white rounded-lg shadow-sm p-8"> */}
          {/* {activeTab === "sda" ? <SDASection /> : <CitizensSection />} */}
        {/* </div> */}
      {/* </div> */}
    </section>
  );
}
