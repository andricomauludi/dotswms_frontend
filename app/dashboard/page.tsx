import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-center">
        <div className="max-w max-h rounded overflow-hidden shadow-lg bg-[#111633] " style={{backgroundColor:"#111633"}}>
          {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
          <div className="px-6 py-4">
            <h1>HOME</h1>
            
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default DashboardPage;
