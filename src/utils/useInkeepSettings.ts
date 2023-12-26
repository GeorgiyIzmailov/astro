import type {
    InkeepAIChatSettings,
    InkeepSearchSettings,
    InkeepWidgetBaseSettings,
    InkeepModalSettings,
  } from "@inkeep/widgets";
  
  type InkeepSharedSettings = {
    baseSettings: InkeepWidgetBaseSettings;
    aiChatSettings: InkeepAIChatSettings;
    searchSettings: InkeepSearchSettings;
    modalSettings: InkeepModalSettings;
  };
  
  const useInkeepSettings = (): InkeepSharedSettings => {
  
    const baseSettings: InkeepWidgetBaseSettings = {
      apiKey: "5d4a6b41b3fd37addc437cef1b55920d53579e1baeb403a2",
      integrationId: "clpl0n9b4000is601xqgesyvo",
      organizationId: "inkeep",
      primaryBrandColor: "#22103e", // your brand color, widget color scheme is derived from this
      organizationDisplayName: "Astro",
      // ...optional settings
    };
  
    const modalSettings: InkeepModalSettings = {
      // optional settings
    };
  
    const searchSettings: InkeepSearchSettings = {
      // optional settings
    };
  
    const aiChatSettings: InkeepAIChatSettings = {
      // optional settings
      botAvatarSrcUrl: "favicon.svg", // use your own bot avatar
      quickQuestions: [
        "Example question 1?",
        "Example question 2?",
        "Example question 3?",
      ],
    };
  
    return { baseSettings, aiChatSettings, searchSettings, modalSettings };
  };
  
  export default useInkeepSettings;