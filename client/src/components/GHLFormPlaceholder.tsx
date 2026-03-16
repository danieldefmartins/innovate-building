import { useEffect } from "react";

const FORM_ID = "6JKsh0GcgTduSUtFJIaz";
const SCRIPT_URL = "https://links.360forbusiness.com/js/form_embed.js";

interface GHLFormPlaceholderProps {
  service?: string;
  variant?: "default" | "compact";
}

export default function GHLFormPlaceholder({ variant = "default" }: GHLFormPlaceholderProps) {
  useEffect(() => {
    if (!document.querySelector(`script[src="${SCRIPT_URL}"]`)) {
      const script = document.createElement("script");
      script.src = SCRIPT_URL;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const iframeHeight = variant === "compact" ? "500px" : "658px";

  return (
    <div className="w-full">
      <iframe
        src={`https://links.360forbusiness.com/widget/form/${FORM_ID}`}
        style={{
          width: "100%",
          height: iframeHeight,
          border: "none",
          borderRadius: "3px",
        }}
        id={`inline-${FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Innovate Full"
        data-height="658"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        title="Innovate Building - Contact Form"
      />
    </div>
  );
}
