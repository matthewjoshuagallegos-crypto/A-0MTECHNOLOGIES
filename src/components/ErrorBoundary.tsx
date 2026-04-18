import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-4xl font-black text-white mb-4 italic uppercase">Sovereign Kernel Panic</h1>
          <p className="text-accent font-mono text-sm mb-8 uppercase tracking-widest">A critical error has occurred in the A#0M authority segment.</p>
          <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10 max-w-2xl text-left font-mono text-xs text-red-500 overflow-auto">
            {this.state.error?.message}
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-8 px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-accent transition-all"
          >
            Re-Initialize Kernel
          </button>
        </div>
      );
    }

    return this.children;
  }
}

export default ErrorBoundary;
