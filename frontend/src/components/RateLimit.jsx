import { ZapOffIcon } from "lucide-react";

const RateLimit = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-warning/10 border border-warning/30 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex-shrink-0 bg-warning/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
            <ZapOffIcon className="size-10 text-warning" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>
            <p className="text-base-content mb-1">
              You've made too many requests. Please wait a moment before trying again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimit;