import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ReactNode, useEffect, useState } from "react";
import LeftSidebar from "./Sidebar";
import PlaybackController from "./PlaybackController";
import Header from "./Header";
import FooterNav from "./FooterNav";
import SmallHeader from "./SmallHeader";
import AudioFooter from "./AudioFooter";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Header */}
      {!isMobile ? <Header /> : <SmallHeader />}

      {/* Main content wrapper */}
      <div className="flex-1 mt-16 overflow-y-auto">
        {isMobile ? (
          // Non-resizable view for small screens
          <div className="h-full">{children}</div>
        ) : (
          <ResizablePanelGroup
            direction="horizontal"
            className="h-[calc(100%-8px)] overflow-hidden p-2" // Adjust height to account for padding
          >
            {/* Left Sidebar */}
            <ResizablePanel defaultSize={20} minSize={10} maxSize={30}>
              <div className="h-full">
                <LeftSidebar />
              </div>
            </ResizablePanel>

            <ResizableHandle className="w-1 bg-black rounded-lg transition-colors" />

            {/* Main content */}
            <ResizablePanel defaultSize={60}>
              <div className="h-full overflow-y-auto">{children}</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900">
        {isMobile && (
          <div >
            <AudioFooter />
          </div>
        )} {/* Add margin-bottom to separate AudioFooter from FooterNav */}
        {isMobile ? <FooterNav /> : <PlaybackController />}
      </div>
    </div>
  );
};

export default MainLayout;
