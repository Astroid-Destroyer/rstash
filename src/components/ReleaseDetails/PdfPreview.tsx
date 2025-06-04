import React from 'react';
import { GitHubAsset } from '../../types/github';
import { X, Download, ExternalLink } from 'lucide-react';

interface PdfPreviewProps {
    asset: GitHubAsset;
    onClose: () => void;
}

export const PdfPreview: React.FC<PdfPreviewProps> = ({ asset, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{asset.name}</h3>
                        <p className="text-sm text-gray-600">PDF Preview</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <a
                            href={asset.browser_download_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Download
                        </a>
                        <a
                            href={asset.browser_download_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Open in New Tab
                        </a>
                        <button
                            onClick={onClose}
                            className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="flex-1 p-4">
                    <object data={asset.browser_download_url} type="application/pdf" className="w-full h-full border border-gray-300 rounded-md" title={`Preview of ${asset.name}`}>
                        <p>Unable to display PDF File.</p>
                    </object>
                </div>
            </div>
        </div>
    );
};