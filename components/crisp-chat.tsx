"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("accfdbef-cc47-4800-a6c9-6130c95a4ed3");
  }, []);

  return null;  
};
