export default function TabNavigation({ activeTab, onTabChange }) {
  return (
    <div className="flex border-b border-gray-200 mb-8">
      <button
        onClick={() => onTabChange("sda")}
        className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors cursor-pointer ${
          activeTab === "sda"
            ? "border-amber-900 text-amber-900"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
      >
        SDA (Sumber Daya Alam)
      </button>
      <button
        onClick={() => onTabChange("warga")}
        className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors cursor-pointer ${
          activeTab === "warga"
            ? "border-amber-900 text-amber-900"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
      >
        Warga
      </button>
    </div>
  );
}
