import StockViewWidget from '../components/Stockview';
import ForexViewWidget from '../components/Forexview';
import IndicesAndBondsViewWidget from '../components/Indicesandbondsview';
const Dashboard = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-400 p-6 rounded-lg transform transition-all hover:scale-105">
          <h3 className="text-xl font-bold mb-2">Stocks and Futures</h3>
      <StockViewWidget />
        </div>
        <div className="bg-gray-400 p-6 rounded-lg transform transition-all hover:scale-105">
          <h3 className="text-xl font-bold mb-2">Forex</h3>
          <ForexViewWidget />
        </div>
        <div className="bg-gray-400 p-6 rounded-lg transform transition-all hover:scale-105">
          <h3 className="text-xl font-bold mb-2">Indices and Bonds</h3>
          <IndicesAndBondsViewWidget />
         </div>
        <div className="bg-gray-400 p-6 rounded-lg transform transition-all hover:scale-105">
          <h3 className="text-xl font-bold mb-2">Live News Feed</h3>
           
        </div>
        <div className="bg-gray-400 p-6 rounded-lg transform transition-all hover:scale-105">
          <h3 className="text-xl font-bold mb-2">Live Market Data</h3> 
          
          </div>
        <div className="bg-gray-400 p-6 rounded-lg transform transition-all hover:scale-105">
          <h3 className="text-xl font-bold mb-2">Assets</h3>
          
         
        
        </div>
      </div>
    </div>

  );
 };
 

export default Dashboard;
