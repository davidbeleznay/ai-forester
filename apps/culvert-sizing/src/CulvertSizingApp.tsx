import React, { useState } from 'react';
import { ArrowLeft, Droplets, Save, FileText, ToggleRight, Calculator, Info, ChevronDown, Plus, Minus } from 'lucide-react';

const CulvertSizingApp = () => {
  const [currentScreen, setCurrentScreen] = useState('input');
  const [climateLayerExpanded, setClimateLayerExpanded] = useState(false);
  const [transportabilityExpanded, setTransportabilityExpanded] = useState(false);
  const [widthCount, setWidthCount] = useState(1);
  const [depthCount, setDepthCount] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showError, setShowError] = useState(false);
  
  const addWidth = () => setWidthCount(prev => Math.min(prev + 1, 5));
  const removeWidth = () => setWidthCount(prev => Math.max(prev - 1, 1));
  const addDepth = () => setDepthCount(prev => Math.min(prev + 1, 5));
  const removeDepth = () => setDepthCount(prev => Math.max(prev - 1, 1));
  
  const handleCalculate = () => {
    // Simulate form validation - checking if width inputs have values
    if (document.querySelector('input[placeholder="0.0"]').value === '') {
      setShowError(true);
      return;
    }
    
    setShowError(false);
    setIsCalculating(true);
    
    // Simulate 1-second calculation time
    setTimeout(() => {
      setIsCalculating(false);
      setCurrentScreen('results');
    }, 1000);
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans">
      {currentScreen === 'input' && (
        <>
          {/* Header */}
          <header className="bg-green-700 text-white p-4 flex items-center shadow-md">
            <button className="mr-2">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold">Culvert Sizing Tool</h1>
          </header>
          
          {/* Main Form */}
          <div className="flex-1 overflow-auto p-4">
            {/* Basic Parameters Section */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <h2 className="text-lg font-semibold mb-4">Basic Parameters</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Drainage Area</label>
                <div className="flex">
                  <input 
                    type="text" 
                    className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-green-500 focus:border-green-500" 
                    placeholder="0.0"
                  />
                  <span className="inline-flex items-center px-3 bg-gray-200 text-gray-700 border border-l-0 border-gray-300 rounded-r-md">
                    hectares
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Stream Gradient</label>
                <div className="flex">
                  <input 
                    type="text" 
                    className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-green-500 focus:border-green-500" 
                    placeholder="0.0"
                  />
                  <span className="inline-flex items-center px-3 bg-gray-200 text-gray-700 border border-l-0 border-gray-300 rounded-r-md">
                    %
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
                <div className="relative">
                  <select className="block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 appearance-none">
                    <option>Coastal BC - Vancouver Island</option>
                    <option>Interior BC</option>
                    <option>Northern BC</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Culvert Material</label>
                <div className="relative">
                  <select className="block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 appearance-none">
                    <option>CSP (Corrugated Steel Pipe)</option>
                    <option>HDPE (Plastic)</option>
                    <option>Concrete</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stream Geometry Section */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <h2 className="text-lg font-semibold mb-4">Stream Geometry (End Area Method)</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Stream Name (optional)</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
                  placeholder="Enter stream name"
                />
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Top Width (W1)</label>
                  <div className="flex space-x-2">
                    <button 
                      className="bg-green-100 text-green-700 p-1 rounded-md"
                      onClick={addWidth}
                    >
                      <Plus size={16} />
                    </button>
                    <button 
                      className="bg-red-100 text-red-700 p-1 rounded-md"
                      onClick={removeWidth}
                    >
                      <Minus size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {Array.from({ length: widthCount }).map((_, i) => (
                    <div key={`width-${i}`} className="flex">
                      <input 
                        type="text" 
                        className={`flex-1 p-2 border ${showError ? 'border-red-500' : 'border-gray-300'} rounded-l-md focus:ring-green-500 focus:border-green-500`} 
                        placeholder="0.0"
                      />
                      <span className="inline-flex items-center px-3 bg-gray-200 text-gray-700 border border-l-0 border-gray-300 rounded-r-md">
                        m
                      </span>
                    </div>
                  ))}
                </div>
                
                {showError && (
                  <div className="mt-1 text-xs text-red-600 font-medium">
                    Please enter at least one stream width (W1) value.
                  </div>
                )}
                
                <div className="mt-2 text-xs text-gray-500 italic">
                  Average W1: 2.5 m
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Bottom Width (W2)</label>
                <div className="flex">
                  <input 
                    type="text" 
                    className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-green-500 focus:border-green-500" 
                    placeholder="0.0"
                  />
                  <span className="inline-flex items-center px-3 bg-gray-200 text-gray-700 border border-l-0 border-gray-300 rounded-r-md">
                    m
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Depth (D)</label>
                  <div className="flex space-x-2">
                    <button 
                      className="bg-green-100 text-green-700 p-1 rounded-md"
                      onClick={addDepth}
                    >
                      <Plus size={16} />
                    </button>
                    <button 
                      className="bg-red-100 text-red-700 p-1 rounded-md"
                      onClick={removeDepth}
                    >
                      <Minus size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {Array.from({ length: depthCount }).map((_, i) => (
                    <div key={`depth-${i}`} className="flex">
                      <input 
                        type="text" 
                        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-green-500 focus:border-green-500" 
                        placeholder="0.0"
                      />
                      <span className="inline-flex items-center px-3 bg-gray-200 text-gray-700 border border-l-0 border-gray-300 rounded-r-md">
                        m
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-2 text-xs text-gray-500 italic">
                  Average Depth: 0.75 m
                </div>
              </div>
              
              <div className="p-3 bg-blue-50 rounded-md border border-blue-200 mb-4">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-blue-800">Cross-sectional Area:</div>
                  <div className="text-blue-800 font-bold">2.44 m²</div>
                </div>
                <div className="text-xs text-blue-600 mt-1">
                  (Average W1 + W2) / 2 × Average Depth
                </div>
              </div>
            </div>
            
            {/* Climate Layer Toggle */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <button 
                className="flex items-center justify-between w-full text-left"
                onClick={() => setClimateLayerExpanded(!climateLayerExpanded)}
              >
                <div className="flex items-center">
                  <ToggleRight className="text-green-600 mr-2" size={20} />
                  <span className="font-medium">Add Climate Layer</span>
                </div>
                <ChevronDown className={`h-5 w-5 text-gray-400 transform ${climateLayerExpanded ? 'rotate-180' : ''}`} />
              </button>
              
              {climateLayerExpanded && (
                <div className="mt-3 border-t border-gray-200 pt-3">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Projected Rainfall Intensity (2050)</label>
                    <div className="flex">
                      <input 
                        type="text" 
                        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-green-500 focus:border-green-500" 
                        placeholder="0.0"
                      />
                      <span className="inline-flex items-center px-3 bg-gray-200 text-gray-700 border border-l-0 border-gray-300 rounded-r-md">
                        mm/hr
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Currently using current climate data</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Transportability Matrix Toggle */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <button 
                className="flex items-center justify-between w-full text-left"
                onClick={() => setTransportabilityExpanded(!transportabilityExpanded)}
              >
                <div className="flex items-center">
                  <ToggleRight className="text-green-600 mr-2" size={20} />
                  <span className="font-medium">Use Stream Transportability Matrix</span>
                </div>
                <ChevronDown className={`h-5 w-5 text-gray-400 transform ${transportabilityExpanded ? 'rotate-180' : ''}`} />
              </button>
              
              {transportabilityExpanded && (
                <div className="mt-3 border-t border-gray-200 pt-3">
                  <div className="p-3 bg-blue-50 rounded-md border border-blue-200 mb-3">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium text-blue-800">Width-to-Depth Ratio:</div>
                      <div className="text-blue-800 font-bold">3.33</div>
                    </div>
                    <div className="text-xs text-blue-600 mt-1">
                      Average W1 / Average Depth
                    </div>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 rounded-md border border-yellow-200 mb-3">
                    <div className="text-sm text-yellow-800">
                      <span className="font-medium">Note:</span> The transportability matrix will be used to determine minimum culvert size. If the Q100 method yields a larger size, that will be used instead.
                    </div>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                    <div className="text-sm text-gray-800 font-medium mb-1">Matrix Selection Criteria:</div>
                    <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
                      <li>Width/Depth &lt; 3: Small culvert size</li>
                      <li>Width/Depth 3-6: Medium culvert size</li>
                      <li>Width/Depth &gt; 6: Large culvert size</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-4 bg-white border-t border-gray-200">
            <button 
              className="w-full bg-green-700 text-white p-3 rounded-md font-medium flex items-center justify-center"
              onClick={handleCalculate}
            >
              <Calculator className="mr-2" size={20} />
              Calculate
            </button>
          </div>
          
          {/* Calculating Overlay */}
          {isCalculating && (
            <div className="fixed inset-0 bg-gray-100 bg-opacity-90 flex flex-col items-center justify-center z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700 mb-4"></div>
              <div className="text-gray-700 font-medium">Calculating culvert size...</div>
            </div>
          )}
        </>
      )}
      
      {currentScreen === 'results' && (
        <>
          {/* Header */}
          <header className="bg-green-700 text-white p-4 flex items-center shadow-md">
            <button className="mr-2" onClick={() => setCurrentScreen('input')}>
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold">Sizing Results</h1>
          </header>
          
          {/* Results */}
          <div className="flex-1 overflow-auto p-4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4 text-center">
              <h2 className="text-lg font-semibold mb-2">Recommended Culvert Size</h2>
              <div className="text-4xl font-bold text-green-700 mb-2">900 mm</div>
              <p className="text-sm text-gray-600 mb-1">Based on California Method</p>
              <div className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                Larger than Transportability Matrix (800 mm)
              </div>
              
              <div className="mt-6 mb-6 relative">
                <div className="w-full h-28 bg-gray-100 rounded-lg relative overflow-hidden">
                  {/* Bridge silhouette */}
                  <div className="absolute top-0 left-0 right-0 border-t-2 border-gray-400"></div>
                  <div className="absolute bottom-0 left-0 right-0 border-t-2 border-gray-400"></div>
                  
                  {/* Concentric circles */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-blue-300 rounded-full opacity-30"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-blue-400 rounded-full opacity-40"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-blue-500 rounded-full opacity-60"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-blue-500 w-12 h-12 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Visual representation (not to scale)</div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-left text-gray-600">Method Used</div>
                  <div className="text-right font-medium">California Method</div>
                  <div className="text-left text-gray-600">Cross-sectional Area</div>
                  <div className="text-right font-medium">2.44 m²</div>
                  <div className="text-left text-gray-600">Transportability Factor</div>
                  <div className="text-right font-medium">Medium (W/D = 3.33)</div>
                  <div className="text-left text-gray-600">Safety Factor</div>
                  <div className="text-right font-medium">1.2</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <h3 className="font-medium mb-3">Input Parameters</h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div className="text-gray-600">Drainage Area</div>
                <div className="text-right">12.5 hectares</div>
                <div className="text-gray-600">Stream Gradient</div>
                <div className="text-right">3.2%</div>
                <div className="text-gray-600">Region</div>
                <div className="text-right">Coastal BC</div>
                <div className="text-gray-600">Culvert Material</div>
                <div className="text-right">CSP</div>
                <div className="text-gray-600">Stream Geometry</div>
                <div className="text-right">W1: 2.5m, W2: 1.5m, D: 0.75m</div>
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="p-4 bg-white border-t border-gray-200 grid grid-cols-2 gap-3">
            <button className="bg-green-700 text-white p-3 rounded-md font-medium flex items-center justify-center">
              <Save className="mr-2" size={18} />
              Save Field Card
            </button>
            <button className="bg-blue-600 text-white p-3 rounded-md font-medium flex items-center justify-center">
              <FileText className="mr-2" size={18} />
              Export PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CulvertSizingApp;