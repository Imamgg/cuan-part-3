import { useState } from "react";
import { TabNavigation } from "./components/tab-navigation";
import { SDASection } from "./components/sda-section";
import { CitizensSection } from "./components/citizens-section";

export default function PotensiPage() {
  const [activeTab, setActiveTab] = useState("sda");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          {activeTab === "sda" ? <SDASection /> : <CitizensSection />}
        </div>
      </div>
    </div>
  );
}
