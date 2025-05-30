
import axios from 'axios';

const AutoscalingDemoApp = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg space-y-6">
      <h2 className="text-2xl font-bold">Kubernetes Autoscaling Advanced Demo</h2>

      {/* Video Section */}
      <div className="bg-gray-800 p-4 rounded-md">
        <video controls className="w-full rounded-md">
          <source src="/src/assets/autamated.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AutoscalingDemoApp;
