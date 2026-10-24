import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./assets/global.css";

import { AppLayout } from "@/layouts/appLayout/AppLayout";
import { Content } from "@/components/content/Content";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppLayout>
      <Content />
    </AppLayout>
  </StrictMode>,
);
