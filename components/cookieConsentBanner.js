"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const CookieConsent = dynamic(() => import("react-cookie-consent"), {
  ssr: false,
});

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      cookieName="brdLawCookieConsent"
      expires={365}
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      style={{
        background: "#2B373B",
        color: "#FFF",
        padding: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
      buttonWrapperClasses="flex gap-4 mt-3 md:mt-0"
      buttonStyle={{
        backgroundColor: "#2B642C",
        color: "#FFF",
        fontSize: "14px",
        padding: "8px 16px",
        borderRadius: "6px",
      }}
      declineButtonStyle={{
        backgroundColor: "#95161C",
        color: "#FFF",
        fontSize: "14px",
        padding: "8px 16px",
        borderRadius: "6px",
      }}
      onAccept={() => {
        console.log("The user has accepted the cookies");
      }}
      onDecline={() => {
        console.log("The user has declined the cookies");
      }}
    >
      <p className="text-sm md:text-base">
        We use cookies to improve our services.{" "}
        <Link href="/privacy-policy" className="underline">
          Learn more
        </Link>
        .
      </p>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
