import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
	return <textarea className={cn("-mb-2 flex h-44 w-full rounded-lg border border-gray-300 bg-transparent p-3 text-sm shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-black", className)} ref={ref} {...props} />;
});
Textarea.displayName = "Textarea";

export { Textarea };
