import { useEffect, useState } from "react";
import useInkeepSettings from "../utils/useInkeepSettings";

export default function InkeepSearchBar() {
  const [SearchBar, setSearchBar] = useState<any>(null);

  const { baseSettings, aiChatSettings, searchSettings, modalSettings } =
    useInkeepSettings();

  // load the library asynchronous
  useEffect(() => {
    const loadChatButton = async () => {
      try {
        const { InkeepSearchBar } = await import("@inkeep/widgets");
        setSearchBar(() => InkeepSearchBar);
      } catch (error) {
        console.error("Failed to load SearchBar:", error);
      }
    };

    loadChatButton();
  }, []);

  const searchBarProps = {
    // stylesheets,  --> optional
    chatButtonType: "ICON_TEXT", // the "Pill" version of the chat button
    baseSettings,
    aiChatSettings,
    searchSettings,
    modalSettings,
  };

  return SearchBar && <SearchBar {...searchBarProps} />;
}
