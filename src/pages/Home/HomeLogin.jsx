import React, { useEffect } from "react";

function HomeLogin() {
  useEffect(() => {
    // Check if the OTPLESS SDK is available
    if (window?.otpless) {
      // Trigger the sign-in process
      window?.otpless.signIn();
    } else {
      // If OTPLESS SDK is not available, log an error or handle it gracefully
      console.error("OTPLESS SDK is not available.");
    }

    // Set up a listener to capture the user's information upon successful authentication
    const handleOTPlessUser = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
    };

    window.otplessCallback = handleOTPlessUser;

    // Clean up function to remove the listener when component unmounts
    return () => {
      window.otplessCallback = null;
    };
  }, []);

  return <div>HomeLogin</div>;
}

export default HomeLogin;
