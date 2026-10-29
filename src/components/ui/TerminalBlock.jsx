import React, { useState } from 'react';

export default function TerminalBlock({
  title = 'terminal',
  commands = [],
  className = ''
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = commands
      .map((c) => (c.type === 'comment' ? `# ${c.text}` : c.text))
      .join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-xl bg-surface-container-low overflow-hidden shadow-sm flex flex-col justify-between border border-outline-variant/30 ${className}`}>
      <div className="px-4 py-2.5 bg-surface-container flex items-center justify-between border-b border-outline-variant/20">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-error/50" />
          <span className="w-3 h-3 rounded-full bg-secondary/50" />
          <span className="w-3 h-3 rounded-full bg-primary/50" />
          <span className="ml-2 font-mono-sm text-mono-sm text-on-surface font-medium">
            {title}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer flex items-center gap-1 font-mono-sm text-xs"
          title="Copy to clipboard"
        >
          <span className="material-symbols-outlined text-[16px]">
            {copied ? 'check' : 'content_copy'}
          </span>
          <span className="text-[11px]">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <div className="p-5 font-mono-sm text-mono-sm text-on-surface space-y-2 overflow-x-auto">
        {commands.map((cmd, idx) => {
          if (cmd.type === 'comment') {
            return (
              <div key={idx} className="text-on-surface-variant">
                # {cmd.text}
              </div>
            );
          }
          if (cmd.type === 'success') {
            return (
              <div key={idx} className="text-secondary font-medium">
                ✔ {cmd.text}
              </div>
            );
          }
          return (
            <div key={idx} className="text-primary">
              <span className="text-outline mr-1.5">$</span>
              {cmd.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
