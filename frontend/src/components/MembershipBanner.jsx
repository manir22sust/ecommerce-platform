const MembershipBanner = () => {
  return (
    <div className="bg-otto-red text-white rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="font-bold text-lg">
              Sichere dir GRATIS Versand und sammle Punkte!
            </h3>
            <p>Jetzt kostenlos Mitglied werden</p>
          </div>
        </div>
        <button className="bg-white text-otto-red px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
          Jetzt anmelden
        </button>
      </div>
    </div>
  );
};

export default MembershipBanner;
