"use client";
import { CloseIcon } from "@/components/icons/svgIcons";

import Button from "../button";

type TProps = {
  title?: string;
  width?: string;
  confirmBtnText?: string;
  cancelBtnText?: string;
  onClose: () => void;
  onCancel: () => void;
  onSubmit: () => void;
  isLoading: boolean;
  content: React.ReactNode;
};

const Popup = ({
  title,
  width,
  confirmBtnText,
  cancelBtnText,
  onClose,
  onCancel,
  onSubmit,
  isLoading,
  content,
}: TProps) => {
  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 cursor-pointer bg-[rgba(0,0,0,0.2)] backdrop-blur-[2px]" onClick={onClose} />
      <div
        className={
          "w-[700px] max-h-[95vh] flex flex-col px-6 py-4 rounded-xl bg-white z-[10] text-gray-700 drop-shadow-sm origin-top animate-poppingUp ease-bitex-easeOut"
        }
        style={width ? { width: width } : {}}
      >
        {title && (
          <div className="flex justify-between items-center pb-3 text-gray-700 border-b border-gray-300">
            {title}
            <Button onClick={onClose} className="size-8 p-0 border border-white transition-colors duration-400">
              <CloseIcon width={12} />
            </Button>
          </div>
        )}
        {content}
        <div className="flex pt-4 border-t text-sm border-gray-300 justify-center items-center gap-6">
          <Button className="w-[140px] py-1.5" onClick={onCancel}>
            {cancelBtnText || "Cancel"}
          </Button>
          <Button className="w-[140px] py-1.5" disabled={isLoading} onClick={onSubmit}>
            {confirmBtnText || "OK"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
