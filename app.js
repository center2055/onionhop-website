(() => {
  const REPO = { owner: "center2055", repo: "OnionHop" };
  const RELEASES_URL = `https://github.com/${REPO.owner}/${REPO.repo}/releases`;
  const RAW_BASE = `https://raw.githubusercontent.com/${REPO.owner}/${REPO.repo}/master`;
  const cacheKey = "onionhop.github.cache.v3";

  const I18N = {
    en: {
      skip_to_content: "Skip to content",
      nav_features: "Features",
      nav_downloads: "Downloads",
      hero_eyebrow: "Privacy-first connectivity",
      hero_title: "Hop into Tor with a clean, modern cross-platform client.",
      hero_copy:
        "Proxy mode for simplicity, TUN/VPN mode for system-wide routing, Smart Connect for easier setup, and a CLI for automation workflows.",
      download_latest: "Download latest",
      see_downloads: "See downloads",
      stat_stars: "Stars",
      stat_downloads: "Downloads",
      stat_release: "Latest",
      chip_proxy: "Proxy",
      chip_tun: "TUN/VPN",
      chip_bridges: "Bridges",
      chip_split: "Split tunneling",
      preview_gui: "GUI",
      preview_cli: "CLI",
      preview_alt_gui: "OnionHop GUI screenshot",
      preview_alt_cli: "OnionHop CLI screenshot",
      preview_note_gui: "GUI screenshot",
      preview_note_cli: "CLI screenshot",
      preview_open_label: "Open screenshot preview",
      preview_dialog_title: "Screenshot preview",
      preview_close: "Close",
      preview_close_label: "Close screenshot preview",
      badge_kofi: "Ko-Fi",
      badge_latest_release: "Latest release on GitHub",
      badge_fmhy: "Featured on FMHY",
      discord: "Discord",
      features_title: "Core capabilities for restrictive networks",
      features_lead:
        "OnionHop focuses on practical controls: explicit modes, explicit routing, and explicit diagnostics.",
      showcase_title: "Video showcase",
      showcase_copy: "Watch a quick walkthrough of OnionHop in action.",
      f_proxy_title: "Proxy mode",
      f_proxy_text:
        "Route proxy-aware apps through a local SOCKS endpoint without requiring administrator rights.",
      f_tun_title: "TUN/VPN mode (admin)",
      f_tun_text: "Use system-wide routing with sing-box and Wintun for apps that ignore proxy settings.",
      f_split_title: "Split tunneling",
      f_split_text: "Choose which applications use Tor and which stay direct in Hybrid mode.",
      f_smart_title: "Smart Connect",
      f_smart_text: "Automatically selects the most reliable connection strategy for the current network.",
      f_cli_title: "CLI companion",
      f_cli_text: "Scriptable command-line workflow for automation, headless systems, and advanced users.",
      f_bridges_title: "Bridge transports",
      f_bridges_text: "Use snowflake, obfs4, meek-azure, webtunnel, or custom bridge lines.",
      f_killswitch_title: "Kill switch controls",
      f_killswitch_text: "Optional firewall protection helps prevent leaks in strict TUN configuration.",
      f_logs_title: "Logs and diagnostics",
      f_logs_text: "Review app and network logs to identify bridge and connectivity issues quickly.",
      f_dns_title: "DNS controls",
      f_dns_text:
        "Pick DNS providers for routed traffic and optionally enable the .onion DNS proxy listener.",
      downloads_title: "Downloads",
      downloads_lead:
        "Release data is loaded from the GitHub API. Filter by file type (GUI/CLI) and platform (Windows/macOS/Linux) to find the right build quickly.",
      download_primary: "Download",
      download_all: "All releases",
      loading_data: "Loading release data...",
      loading_button: "Loading...",
      dl_hint_gui: "GUI setup for normal desktop usage.",
      dl_hint_cli: "CLI setup for terminal and automation workflows.",
      dl_hint_portable: "Portable ZIP builds if you do not want installation.",
      dl_hint_mac: "Use the macOS tab to find Apple Silicon and Intel builds quickly.",
      faq_title: "Operational notes",
      faq_legal_q: "Is Tor legal?",
      faq_legal_a:
        "Yes in many places, but no or restricted in some jurisdictions. You are responsible for following local laws.",
      faq_onion_q: "Do .onion sites work?",
      faq_onion_a:
        "Yes. OnionHop has native options for this: use System proxy (SOCKS browser/.onion) and/or enable .onion DNS proxy in Settings (requires Administrator).",
      faq_admin_q: "Why does TUN/VPN need admin rights?",
      faq_admin_a:
        "TUN mode creates a system-level tunnel (Wintun on Windows, kernel TUN on Linux, utun on macOS) and can apply firewall rules for strict kill switch behavior.",
      footer_text: "Privacy-first routing client for Windows, Linux & macOS.",
      license_text: "Licensed under GPL-3.0.",
      asset_downloads: "downloads",
      latest_release_label: "Latest release",
      updated_label: "Updated",
      failed_hint: "GitHub data could not be loaded right now. Links still point to releases.",
      get_asset: "Get file",
      coming_soon: "Coming Soon",
      coming_soon_detail: "This package is not published yet.",
      no_assets: "No assets listed for this release.",
      no_assets_category: "No files in this category for this release.",
      no_assets_filtered: "No files match this category/platform filter for this release.",
      asset_tab_gui: "GUI",
      asset_tab_cli: "CLI",
      asset_platform_all: "All",
      asset_platform_windows: "Windows",
      asset_platform_mac: "macOS",
      asset_platform_linux: "Linux",
    },
    de: {
      skip_to_content: "Zum Inhalt springen",
      nav_features: "Funktionen",
      nav_downloads: "Downloads",
      hero_eyebrow: "Privacy-first connectivity",
      hero_title: "Starte mit einem modernen plattformübergreifenden Client in Tor.",
      hero_copy:
        "Proxy-Modus für Einfachheit, TUN/VPN-Modus für systemweites Routing, Smart Connect für einfaches Setup und eine CLI für Automatisierung.",
      download_latest: "Neueste Version laden",
      see_downloads: "Downloads ansehen",
      stat_stars: "Sterne",
      stat_downloads: "Downloads",
      stat_release: "Neueste",
      chip_proxy: "Proxy",
      chip_tun: "TUN/VPN",
      chip_bridges: "Bridges",
      chip_split: "Split-Tunneling",
      preview_gui: "GUI",
      preview_cli: "CLI",
      preview_alt_gui: "OnionHop GUI-Screenshot",
      preview_alt_cli: "OnionHop CLI-Screenshot",
      preview_note_gui: "GUI-Screenshot",
      preview_note_cli: "CLI-Screenshot",
      preview_open_label: "Screenshot vergroessern",
      preview_dialog_title: "Screenshot-Vorschau",
      preview_close: "Schliessen",
      preview_close_label: "Screenshot-Vorschau schliessen",
      badge_kofi: "Ko-Fi",
      badge_latest_release: "Neueste Version auf GitHub",
      badge_fmhy: "Auf FMHY gelistet",
      discord: "Discord",
      features_title: "Kernfunktionen für restriktive Netzwerke",
      features_lead:
        "OnionHop setzt auf praktische Kontrollen: klare Modi, klare Routen und klare Diagnose.",
      showcase_title: "Video-Showcase",
      showcase_copy: "Kurzer Überblick über OnionHop in Aktion.",
      f_proxy_title: "Proxy-Modus",
      f_proxy_text:
        "Leite proxyfähige Apps über einen lokalen SOCKS-Endpunkt, ohne Administratorrechte zu benötigen.",
      f_tun_title: "TUN/VPN-Modus (Admin)",
      f_tun_text: "Nutze systemweites Routing mit sing-box und Wintun für Apps ohne Proxy-Unterstützung.",
      f_split_title: "Split-Tunneling",
      f_split_text: "Lege fest, welche Anwendungen Tor nutzen und welche direkt bleiben.",
      f_smart_title: "Smart Connect",
      f_smart_text: "Wählt automatisch die stabilste Verbindungsstrategie für das aktuelle Netzwerk.",
      f_cli_title: "CLI-Begleiter",
      f_cli_text: "Scriptbarer Kommandozeilen-Workflow für Automatisierung, Headless-Systeme und Power-User.",
      f_bridges_title: "Bridge-Transports",
      f_bridges_text: "Nutze snowflake, obfs4, meek-azure, webtunnel oder eigene Bridge-Zeilen.",
      f_killswitch_title: "Kill-Switch-Kontrollen",
      f_killswitch_text: "Optionale Firewall-Regeln helfen, Leaks im strikten TUN-Modus zu vermeiden.",
      f_logs_title: "Logs und Diagnose",
      f_logs_text: "Prüfe App- und Netzwerk-Logs, um Bridge- und Verbindungsprobleme schneller zu finden.",
      f_dns_title: "DNS-Kontrollen",
      f_dns_text:
        "Wähle DNS-Provider für gerouteten Verkehr und aktiviere optional den .onion-DNS-Proxy-Listener.",
      downloads_title: "Downloads",
      downloads_lead:
        "Release-Daten werden über die GitHub API geladen. Filtere nach Dateityp (GUI/CLI) und Plattform (Windows/macOS/Linux), um den passenden Build schneller zu finden.",
      download_primary: "Download",
      download_all: "Alle Releases",
      loading_data: "Release-Daten werden geladen...",
      loading_button: "Lädt...",
      dl_hint_gui: "GUI-Setup für normale Desktop-Nutzung.",
      dl_hint_cli: "CLI-Setup für Terminal- und Automatisierungs-Workflows.",
      dl_hint_portable: "Portable ZIP-Builds, falls keine Installation gewünscht ist.",
      dl_hint_mac: "Nutze den macOS-Tab, um Apple-Silicon- und Intel-Builds schneller zu finden.",
      faq_title: "Betriebshinweise",
      faq_legal_q: "Ist Tor legal?",
      faq_legal_a:
        "Ja, in vielen Ländern. Nein oder eingeschränkt in manchen Regionen. Du bist für die Einhaltung lokaler Gesetze verantwortlich.",
      faq_onion_q: "Funktionieren .onion-Seiten?",
      faq_onion_a:
        "Ja. OnionHop hat dafür native Optionen: Nutze System-Proxy (SOCKS Browser/.onion) und/oder aktiviere in den Einstellungen den .onion-DNS-Proxy (benötigt Administratorrechte).",
      faq_admin_q: "Warum braucht TUN/VPN Adminrechte?",
      faq_admin_a:
        "Der TUN-Modus erstellt einen systemweiten Tunnel (Wintun unter Windows, Kernel-TUN unter Linux, utun unter macOS) und kann Firewall-Regeln für den strikten Kill Switch setzen.",
      footer_text: "Privacy-first Routing-Client für Windows, Linux & macOS.",
      license_text: "Lizenziert unter GPL-3.0.",
      asset_downloads: "Downloads",
      latest_release_label: "Neueste Version",
      updated_label: "Aktualisiert",
      failed_hint: "GitHub-Daten konnten gerade nicht geladen werden. Links zeigen weiter auf Releases.",
      get_asset: "Datei laden",
      coming_soon: "Coming Soon",
      coming_soon_detail: "Dieses Paket ist noch nicht veroeffentlicht.",
      no_assets: "Keine Dateien für diese Version gelistet.",
      no_assets_category: "Keine Dateien dieser Kategorie für diese Version.",
      no_assets_filtered: "Keine Dateien passen zu diesem Kategorie-/Plattform-Filter.",
      asset_tab_gui: "GUI",
      asset_tab_cli: "CLI",
      asset_platform_all: "Alle",
      asset_platform_windows: "Windows",
      asset_platform_mac: "macOS",
      asset_platform_linux: "Linux",
    },
  };

  const elements = {
    langToggle: document.getElementById("langToggle"),
    langLabel: document.getElementById("langLabel"),
    starsValue: document.getElementById("starsValue"),
    downloadsValue: document.getElementById("downloadsValue"),
    latestValue: document.getElementById("latestValue"),
    releaseHint: document.getElementById("releaseHint"),
    heroShot: document.getElementById("heroShot"),
    previewNote: document.getElementById("previewNote"),
    previewGui: document.getElementById("previewGui"),
    previewCli: document.getElementById("previewCli"),
    previewZoom: document.getElementById("previewZoom"),
    previewLightbox: document.getElementById("previewLightbox"),
    previewLightboxImage: document.getElementById("previewLightboxImage"),
    previewLightboxTitle: document.getElementById("previewLightboxTitle"),
    previewLightboxClose: document.getElementById("previewLightboxClose"),
    downloadLatest: document.getElementById("downloadLatest"),
    downloadMeta: document.getElementById("downloadMeta"),
    dlHeadline: document.getElementById("dlHeadline"),
    dlMeta: document.getElementById("dlMeta"),
    dlPrimary: document.getElementById("dlPrimary"),
    dlSecondary: document.getElementById("dlSecondary"),
    assetList: document.getElementById("assetList"),
    assetTabGui: document.getElementById("assetTabGui"),
    assetTabCli: document.getElementById("assetTabCli"),
    assetTabPlatformAll: document.getElementById("assetTabPlatformAll"),
    assetTabPlatformWindows: document.getElementById("assetTabPlatformWindows"),
    assetTabPlatformMac: document.getElementById("assetTabPlatformMac"),
    assetTabPlatformLinux: document.getElementById("assetTabPlatformLinux"),
    dataStatus: document.getElementById("dataStatus"),
  };

  let activeLang = getInitialLang();
  let latestRelease = null;
  let activePreview = localStorage.getItem("onionhop.preview") === "cli" ? "cli" : "gui";
  let activeAssetCategory = localStorage.getItem("onionhop.assets.category") === "cli" ? "cli" : "gui";
  let lastFocusedElement = null;
  const detectedPlatform = platformHint();
  let activeAssetPlatform = sanitizeAssetPlatform(
    localStorage.getItem("onionhop.assets.platform"),
    detectedPlatform === "windows" || detectedPlatform === "mac" || detectedPlatform === "linux" ? detectedPlatform : "all"
  );
  const previewSets = {
    gui: {
      src: "assets/GUI.png",
      fallback: `${RAW_BASE}/assets/GUI.png`,
      altKey: "preview_alt_gui",
      noteKey: "preview_note_gui",
    },
    cli: {
      src: "assets/CLI.png",
      fallback: `${RAW_BASE}/assets/CLI.png`,
      altKey: "preview_alt_cli",
      noteKey: "preview_note_cli",
    },
  };

  function t(key) {
    return I18N[activeLang]?.[key] ?? I18N.en[key] ?? key;
  }

  function getInitialLang() {
    const queryLang = new URL(window.location.href).searchParams.get("lang");
    if (queryLang === "en" || queryLang === "de") return queryLang;
    const savedLang = localStorage.getItem("onionhop.lang");
    if (savedLang === "en" || savedLang === "de") return savedLang;
    return (navigator.language || "").toLowerCase().startsWith("de") ? "de" : "en";
  }

  function sanitizeAssetPlatform(value, fallback = "all") {
    const normalized = String(value || "").toLowerCase();
    if (normalized === "windows" || normalized === "mac" || normalized === "linux" || normalized === "all") {
      return normalized;
    }
    return String(fallback || "all").toLowerCase();
  }

  function applyI18n() {
    document.documentElement.lang = activeLang;
    if (elements.langLabel) elements.langLabel.textContent = activeLang.toUpperCase();
    for (const node of document.querySelectorAll("[data-i18n]")) {
      const key = node.getAttribute("data-i18n");
      if (key) node.textContent = t(key);
    }
    if (elements.previewZoom) elements.previewZoom.setAttribute("aria-label", t("preview_open_label"));
    if (elements.previewLightbox) elements.previewLightbox.setAttribute("aria-label", t("preview_dialog_title"));
    if (elements.previewLightboxTitle) elements.previewLightboxTitle.textContent = t("preview_dialog_title");
    if (elements.previewLightboxClose) {
      elements.previewLightboxClose.textContent = t("preview_close");
      elements.previewLightboxClose.setAttribute("aria-label", t("preview_close_label"));
    }
    setPreview(activePreview, false);
    syncAssetTabs(latestRelease?.assets || []);
  }

  function setupLanguageToggle() {
    if (!elements.langToggle) return;
    elements.langToggle.addEventListener("click", () => {
      activeLang = activeLang === "en" ? "de" : "en";
      localStorage.setItem("onionhop.lang", activeLang);
      applyI18n();
      renderAssets(latestRelease?.assets || [], false);
      updateReleaseLabels(latestRelease);
    });
  }

  function applyPreviewImage(item, shouldLoad = true) {
    if (!item) return;
    if (elements.previewNote) elements.previewNote.textContent = t(item.noteKey);
    if (elements.heroShot) elements.heroShot.alt = t(item.altKey);
    if (elements.previewLightboxImage) elements.previewLightboxImage.alt = t(item.altKey);
    if (!elements.heroShot) return;
    if (!shouldLoad) return;

    if (!item.src) {
      elements.heroShot.src = "";
      if (elements.previewLightboxImage) elements.previewLightboxImage.src = "";
      return;
    }

    const image = new Image();
    image.onload = () => {
      if (elements.heroShot) elements.heroShot.src = item.src;
      if (elements.previewLightboxImage) elements.previewLightboxImage.src = item.src;
    };
    image.onerror = () => {
      if (elements.heroShot) elements.heroShot.src = item.fallback || "";
      if (elements.previewLightboxImage) elements.previewLightboxImage.src = item.fallback || "";
    };
    image.src = item.src;
  }

  function setPreview(mode, shouldLoad = true) {
    const nextMode = mode === "cli" ? "cli" : "gui";
    activePreview = nextMode;
    localStorage.setItem("onionhop.preview", nextMode);

    if (elements.previewGui) {
      const isGui = nextMode === "gui";
      elements.previewGui.classList.toggle("is-active", isGui);
      elements.previewGui.setAttribute("aria-pressed", isGui ? "true" : "false");
    }

    if (elements.previewCli) {
      const isCli = nextMode === "cli";
      elements.previewCli.classList.toggle("is-active", isCli);
      elements.previewCli.setAttribute("aria-pressed", isCli ? "true" : "false");
    }

    applyPreviewImage(previewSets[nextMode] || previewSets.gui, shouldLoad);
  }

  function setupPreviewToggle() {
    if (elements.previewGui) {
      elements.previewGui.addEventListener("click", () => setPreview("gui"));
    }
    if (elements.previewCli) {
      elements.previewCli.addEventListener("click", () => setPreview("cli"));
    }
    setPreview(activePreview);
  }

  function openPreviewLightbox() {
    if (!elements.previewLightbox || !elements.heroShot || !elements.heroShot.getAttribute("src")) return;
    lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    elements.previewLightbox.hidden = false;
    elements.previewLightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-lightbox-open");
    if (elements.previewLightboxClose) {
      elements.previewLightboxClose.focus();
    }
  }

  function closePreviewLightbox({ restoreFocus = true } = {}) {
    if (!elements.previewLightbox) return;
    elements.previewLightbox.hidden = true;
    elements.previewLightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-lightbox-open");
    if (restoreFocus && lastFocusedElement?.focus) {
      lastFocusedElement.focus();
    }
    lastFocusedElement = null;
  }

  function setupPreviewLightbox() {
    if (elements.previewZoom) {
      elements.previewZoom.addEventListener("click", openPreviewLightbox);
    }
    if (elements.previewLightboxClose) {
      elements.previewLightboxClose.addEventListener("click", () => closePreviewLightbox());
    }
    if (elements.previewLightbox) {
      elements.previewLightbox.addEventListener("click", (event) => {
        if (event.target === elements.previewLightbox) {
          closePreviewLightbox();
        }
      });
    }
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !elements.previewLightbox?.hidden) {
        closePreviewLightbox();
      }
    });
  }

  function compactNumber(value) {
    if (typeof value !== "number" || Number.isNaN(value)) return "-";
    return new Intl.NumberFormat(undefined, { notation: "compact", maximumFractionDigits: 1 }).format(value);
  }

  function fullNumber(value) {
    if (typeof value !== "number" || Number.isNaN(value)) return "-";
    return new Intl.NumberFormat(undefined).format(value);
  }

  function formatBytes(bytes) {
    if (typeof bytes !== "number" || bytes <= 0) return "";
    const units = ["B", "KB", "MB", "GB"];
    let size = bytes;
    let unit = 0;
    while (size >= 1024 && unit < units.length - 1) {
      size /= 1024;
      unit += 1;
    }
    return `${size.toFixed(unit === 0 ? 0 : 1)} ${units[unit]}`;
  }

  function renderLoadingAssets() {
    if (!elements.assetList) return;
    elements.assetList.innerHTML = "";
    for (let i = 0; i < 3; i += 1) {
      const block = document.createElement("div");
      block.className = "loading-block";
      elements.assetList.appendChild(block);
    }
  }

  function setStatus(message, isError = false) {
    if (!elements.dataStatus) return;
    const text = typeof message === "string" ? message.trim() : "";
    elements.dataStatus.textContent = text;
    elements.dataStatus.hidden = text.length === 0;
    elements.dataStatus.classList.toggle("error", text.length > 0 && isError);
  }

  function setLoadingState(loading) {
    if (elements.dlPrimary) {
      const label = elements.dlPrimary.querySelector("span");
      if (loading) {
        elements.dlPrimary.setAttribute("aria-disabled", "true");
        elements.dlPrimary.style.pointerEvents = "none";
        elements.dlPrimary.style.opacity = "0.68";
        if (label) label.textContent = t("loading_button");
      } else {
        elements.dlPrimary.removeAttribute("aria-disabled");
        elements.dlPrimary.style.pointerEvents = "";
        elements.dlPrimary.style.opacity = "";
        if (label) label.textContent = t("download_primary");
      }
    }
    if (elements.downloadLatest) {
      elements.downloadLatest.style.pointerEvents = loading ? "none" : "";
      elements.downloadLatest.style.opacity = loading ? "0.68" : "";
    }
  }

  function platformHint() {
    const platform = `${navigator.platform || ""} ${navigator.userAgent || ""}`.toLowerCase();
    if (platform.includes("win")) return "windows";
    if (platform.includes("mac")) return "mac";
    if (platform.includes("linux")) return "linux";
    return "other";
  }

  function assetScore(name, platform) {
    const file = String(name || "").toLowerCase();
    let score = 0;

    if (platform === "windows") {
      if (file.endsWith(".exe")) score += 100;
      if (file.endsWith(".msi")) score += 90;
      if (file.endsWith(".zip")) score += 40;
    } else if (platform === "mac") {
      if (file.endsWith(".dmg")) score += 100;
      if (file.endsWith(".pkg")) score += 90;
      if (file.endsWith(".zip")) score += 40;
    } else if (platform === "linux") {
      if (file.endsWith(".appimage")) score += 100;
      if (file.endsWith(".deb") || file.endsWith(".rpm")) score += 80;
      if (file.endsWith(".tar.gz") || file.endsWith(".tgz")) score += 70;
      if (file.endsWith(".zip")) score += 30;
    }

    if (file.includes("setup") || file.includes("installer")) score += 14;
    if (file.includes("cli")) score -= 12;
    if (file.includes("onionhop-setup") || file.includes("v2")) score += 8;
    if (file.includes("portable")) score += 8;
    if (file.includes("debug") || file.includes("symbols") || file.includes("pdb")) score -= 50;
    return score;
  }

  function bestAsset(assets) {
    const platform = platformHint();
    let winner = null;
    let winnerScore = -Infinity;
    for (const asset of assets || []) {
      const score = assetScore(asset?.name, platform);
      if (score > winnerScore) {
        winner = asset;
        winnerScore = score;
      }
    }
    return winner;
  }

  function assetFamily(name) {
    const file = String(name || "").toLowerCase();
    return file.includes("cli") ? "cli" : "gui";
  }

  function assetPlatform(name) {
    const file = String(name || "").toLowerCase();

    if (
      file.includes("macos") ||
      file.includes("darwin") ||
      file.includes("osx") ||
      file.includes("apple-silicon") ||
      /(^|[^a-z])mac([^a-z]|$)/.test(file)
    ) {
      return "mac";
    }

    if (
      file.includes("linux") ||
      file.endsWith(".appimage") ||
      file.endsWith(".deb") ||
      file.endsWith(".rpm") ||
      /(^|[^a-z])ubuntu([^a-z]|$)/.test(file)
    ) {
      return "linux";
    }

    if (
      file.includes("windows") ||
      /(^|[^a-z])win(32|64|x64|arm64)?([^a-z]|$)/.test(file) ||
      file.endsWith(".exe") ||
      file.endsWith(".msi")
    ) {
      return "windows";
    }

    return "other";
  }

  function assetMatchesPlatform(name, platform) {
    const target = sanitizeAssetPlatform(platform, "all");
    if (target === "all") {
      return true;
    }

    return assetPlatform(name) === target;
  }

  function assetTypeOrder(name) {
    const file = String(name || "").toLowerCase();
    const isSetup =
      file.includes("setup") || file.includes("installer") || file.endsWith(".exe") || file.endsWith(".msi");
    const isPortable = file.includes("portable") || file.endsWith(".zip");
    if (isSetup) return 0;
    if (isPortable) return 1;
    return 2;
  }

  function syncAssetTabs(assets = []) {
    const allAssets = assets || [];
    const platformFiltered = allAssets.filter((asset) => assetMatchesPlatform(asset?.name, activeAssetPlatform));
    const categoryFiltered = allAssets.filter((asset) => assetFamily(asset?.name) === activeAssetCategory);

    const guiCount = platformFiltered.filter((asset) => assetFamily(asset?.name) === "gui").length;
    const cliCount = platformFiltered.filter((asset) => assetFamily(asset?.name) === "cli").length;
    const allCount = categoryFiltered.length;
    const windowsCount = categoryFiltered.filter((asset) => assetPlatform(asset?.name) === "windows").length;
    const macCount = categoryFiltered.filter((asset) => assetPlatform(asset?.name) === "mac").length;
    const linuxCount = categoryFiltered.filter((asset) => assetPlatform(asset?.name) === "linux").length;

    if (elements.assetTabGui) {
      const isGui = activeAssetCategory === "gui";
      elements.assetTabGui.classList.toggle("is-active", isGui);
      elements.assetTabGui.setAttribute("aria-pressed", isGui ? "true" : "false");
      elements.assetTabGui.textContent = `${t("asset_tab_gui")} (${guiCount})`;
    }

    if (elements.assetTabCli) {
      const isCli = activeAssetCategory === "cli";
      elements.assetTabCli.classList.toggle("is-active", isCli);
      elements.assetTabCli.setAttribute("aria-pressed", isCli ? "true" : "false");
      elements.assetTabCli.textContent = `${t("asset_tab_cli")} (${cliCount})`;
    }

    if (elements.assetTabPlatformAll) {
      const active = activeAssetPlatform === "all";
      elements.assetTabPlatformAll.classList.toggle("is-active", active);
      elements.assetTabPlatformAll.setAttribute("aria-pressed", active ? "true" : "false");
      elements.assetTabPlatformAll.textContent = `${t("asset_platform_all")} (${allCount})`;
    }

    if (elements.assetTabPlatformWindows) {
      const active = activeAssetPlatform === "windows";
      elements.assetTabPlatformWindows.classList.toggle("is-active", active);
      elements.assetTabPlatformWindows.setAttribute("aria-pressed", active ? "true" : "false");
      elements.assetTabPlatformWindows.textContent = `${t("asset_platform_windows")} (${windowsCount})`;
    }

    if (elements.assetTabPlatformMac) {
      const active = activeAssetPlatform === "mac";
      elements.assetTabPlatformMac.classList.toggle("is-active", active);
      elements.assetTabPlatformMac.setAttribute("aria-pressed", active ? "true" : "false");
      elements.assetTabPlatformMac.textContent = `${t("asset_platform_mac")} (${macCount})`;
    }

    if (elements.assetTabPlatformLinux) {
      const active = activeAssetPlatform === "linux";
      elements.assetTabPlatformLinux.classList.toggle("is-active", active);
      elements.assetTabPlatformLinux.setAttribute("aria-pressed", active ? "true" : "false");
      elements.assetTabPlatformLinux.textContent = `${t("asset_platform_linux")} (${linuxCount})`;
    }
  }

  function setAssetCategory(category) {
    activeAssetCategory = category === "cli" ? "cli" : "gui";
    localStorage.setItem("onionhop.assets.category", activeAssetCategory);
    syncAssetTabs(latestRelease?.assets || []);
    renderAssets(latestRelease?.assets || [], false);
  }

  function setAssetPlatform(platform) {
    activeAssetPlatform = sanitizeAssetPlatform(platform, "all");
    localStorage.setItem("onionhop.assets.platform", activeAssetPlatform);
    syncAssetTabs(latestRelease?.assets || []);
    renderAssets(latestRelease?.assets || [], false);
  }

  function setupAssetTabs() {
    if (elements.assetTabGui) {
      elements.assetTabGui.addEventListener("click", () => setAssetCategory("gui"));
    }
    if (elements.assetTabCli) {
      elements.assetTabCli.addEventListener("click", () => setAssetCategory("cli"));
    }
    if (elements.assetTabPlatformAll) {
      elements.assetTabPlatformAll.addEventListener("click", () => setAssetPlatform("all"));
    }
    if (elements.assetTabPlatformWindows) {
      elements.assetTabPlatformWindows.addEventListener("click", () => setAssetPlatform("windows"));
    }
    if (elements.assetTabPlatformMac) {
      elements.assetTabPlatformMac.addEventListener("click", () => setAssetPlatform("mac"));
    }
    if (elements.assetTabPlatformLinux) {
      elements.assetTabPlatformLinux.addEventListener("click", () => setAssetPlatform("linux"));
    }
    syncAssetTabs([]);
  }

  function missingPlatformPlaceholders(assets = []) {
    const categoryAssets = (assets || []).filter((asset) => assetFamily(asset?.name) === activeAssetCategory);
    const requestedPlatforms =
      activeAssetPlatform === "all" ? ["windows", "mac", "linux"] : [activeAssetPlatform];

    return requestedPlatforms
      .filter((platform) => platform === "windows" || platform === "mac" || platform === "linux")
      .filter((platform) => !categoryAssets.some((asset) => assetPlatform(asset?.name) === platform))
      .map((platform) => ({
        isPlaceholder: true,
        platform,
        name: `${t(`asset_platform_${platform}`)} ${activeAssetCategory === "cli" ? t("asset_tab_cli") : t("asset_tab_gui")}`,
        detail: t("coming_soon_detail"),
      }));
  }

  function renderAssets(assets, loading) {
    if (!elements.assetList) return;
    syncAssetTabs(assets || []);

    if (loading) {
      renderLoadingAssets();
      return;
    }

    elements.assetList.innerHTML = "";

    if (!assets || assets.length === 0) {
      const row = document.createElement("div");
      row.className = "asset-row";
      row.innerHTML = `<div class="asset-meta"><div class="asset-name">${t("no_assets")}</div></div>`;
      elements.assetList.appendChild(row);
      return;
    }

    const filtered = [...assets]
      .filter((asset) => assetFamily(asset?.name) === activeAssetCategory)
      .filter((asset) => assetMatchesPlatform(asset?.name, activeAssetPlatform))
      .sort((left, right) => {
        const byType = assetTypeOrder(left?.name) - assetTypeOrder(right?.name);
        if (byType !== 0) return byType;
        return String(left?.name || "").localeCompare(String(right?.name || ""));
      });

    const placeholderRows = missingPlatformPlaceholders(assets || []);

    if (filtered.length === 0 && placeholderRows.length === 0) {
      const row = document.createElement("div");
      row.className = "asset-row";
      row.innerHTML = `<div class="asset-meta"><div class="asset-name">${t("no_assets_filtered")}</div></div>`;
      elements.assetList.appendChild(row);
      return;
    }

    for (const asset of [...filtered, ...placeholderRows]) {
      const row = document.createElement("div");
      row.className = "asset-row";

      const meta = document.createElement("div");
      meta.className = "asset-meta";

      const name = document.createElement("div");
      name.className = "asset-name";
      name.textContent = asset.name || "asset";

      const detail = document.createElement("div");
      detail.className = "asset-detail";
      if (asset.isPlaceholder) {
        detail.textContent = asset.detail || t("coming_soon_detail");
      } else {
        const size = formatBytes(asset.size);
        const count = typeof asset.download_count === "number" ? fullNumber(asset.download_count) : "-";
        detail.textContent = `${size || "-"} | ${count} ${t("asset_downloads")}`;
      }

      meta.appendChild(name);
      meta.appendChild(detail);

      const action = document.createElement(asset.isPlaceholder ? "span" : "a");
      action.className = `asset-action${asset.isPlaceholder ? " is-disabled" : ""}`;
      if (asset.isPlaceholder) {
        row.classList.add("is-placeholder");
        action.textContent = t("coming_soon");
      } else {
        action.href = asset.browser_download_url || RELEASES_URL;
        action.target = "_blank";
        action.rel = "noreferrer noopener";
        action.textContent = t("get_asset");
      }

      row.appendChild(meta);
      row.appendChild(action);
      elements.assetList.appendChild(row);
    }
  }

  function updateReleaseLabels(release) {
    if (!release) return;
    const tag = release.tag_name || release.name || "-";
    const date = release.published_at ? new Date(release.published_at) : null;
    const formatted = date
      ? date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" })
      : "";

    if (elements.latestValue) elements.latestValue.textContent = tag;
    if (elements.releaseHint) {
      elements.releaseHint.textContent = formatted
        ? `${t("latest_release_label")}: ${tag} | ${t("updated_label")}: ${formatted}`
        : `${t("latest_release_label")}: ${tag}`;
    }
    if (elements.dlHeadline) elements.dlHeadline.textContent = `OnionHop ${tag}`;
  }

  function setPrimaryDownload(asset, release) {
    const url = asset?.browser_download_url || RELEASES_URL;
    const tag = release?.tag_name || release?.name || "";
    const name = asset?.name || "";
    const size = asset?.size ? formatBytes(asset.size) : "";

    if (elements.downloadLatest) {
      elements.downloadLatest.href = url;
      elements.downloadLatest.target = "_blank";
      elements.downloadLatest.rel = "noreferrer noopener";
    }
    if (elements.downloadMeta) {
      elements.downloadMeta.textContent = tag ? `(${tag})` : "";
    }
    if (elements.dlPrimary) {
      elements.dlPrimary.href = url;
      elements.dlPrimary.target = "_blank";
      elements.dlPrimary.rel = "noreferrer noopener";
    }
    if (elements.dlSecondary) {
      elements.dlSecondary.href = RELEASES_URL;
      elements.dlSecondary.target = "_blank";
      elements.dlSecondary.rel = "noreferrer noopener";
    }
    if (elements.dlMeta) {
      const parts = [];
      if (name) parts.push(name);
      if (size) parts.push(size);
      elements.dlMeta.textContent = parts.length > 0 ? parts.join(" | ") : "-";
    }
  }

  function setupShaderBackground() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.className = "shader-background-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.prepend(canvas);

    const gl = canvas.getContext("webgl", { alpha: true, antialias: false, preserveDrawingBuffer: false });
    if (!gl) {
      canvas.remove();
      return;
    }

    const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `;

    const fsSource = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;

      const float overallSpeed = 0.2;
      const float gridSmoothWidth = 0.015;
      const float axisWidth = 0.05;
      const float majorLineWidth = 0.025;
      const float minorLineWidth = 0.0125;
      const float majorLineFrequency = 5.0;
      const float minorLineFrequency = 1.0;
      const float scale = 5.0;
      const vec4 lineColor = vec4(0.4, 0.2, 0.8, 1.0);
      const float minLineWidth = 0.01;
      const float maxLineWidth = 0.2;
      const float lineSpeed = 1.0 * overallSpeed;
      const float lineAmplitude = 1.0;
      const float lineFrequency = 0.2;
      const float warpSpeed = 0.2 * overallSpeed;
      const float warpFrequency = 0.5;
      const float warpAmplitude = 1.0;
      const float offsetFrequency = 0.5;
      const float offsetSpeed = 1.33 * overallSpeed;
      const float minOffsetSpread = 0.6;
      const float maxOffsetSpread = 2.0;
      const int linesPerGroup = 16;

      #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
      #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
      #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))
      #define drawPeriodicLine(freq, width, t) drawCrispLine(freq / 2.0, width, abs(mod(t, freq) - (freq) / 2.0))

      float random(float t) {
        return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
      }

      float getPlasmaY(float x, float horizontalFade, float offset) {
        return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
      }

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        vec4 fragColor;
        vec2 uv = fragCoord.xy / iResolution.xy;
        vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;

        float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
        float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);

        space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
        space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;

        vec4 lines = vec4(0.0);
        vec4 bgColor1 = vec4(0.1, 0.1, 0.3, 1.0);
        vec4 bgColor2 = vec4(0.3, 0.1, 0.5, 1.0);

        for(int l = 0; l < linesPerGroup; l++) {
          float normalizedLineIndex = float(l) / float(linesPerGroup);
          float offsetTime = iTime * offsetSpeed;
          float offsetPosition = float(l) + space.x * offsetFrequency;
          float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
          float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
          float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
          float linePosition = getPlasmaY(space.x, horizontalFade, offset);
          float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.y);

          float circleX = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
          vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));
          float circle = drawCircle(circlePosition, 0.01, space) * 4.0;

          line = line + circle;
          lines += line * lineColor * rand;
        }

        fragColor = mix(bgColor1, bgColor2, uv.x);
        fragColor *= verticalFade;
        fragColor.a = 1.0;
        fragColor += lines;

        gl_FragColor = fragColor;
      }
    `;

    const loadShader = (type, source) => {
      const shader = gl.createShader(type);
      if (!shader) {
        return null;
      }

      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn("Shader compile error:", gl.getShaderInfoLog(shader) || "unknown");
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    };

    const initShaderProgram = () => {
      const vertexShader = loadShader(gl.VERTEX_SHADER, vsSource);
      const fragmentShader = loadShader(gl.FRAGMENT_SHADER, fsSource);
      if (!vertexShader || !fragmentShader) {
        return null;
      }

      const shaderProgram = gl.createProgram();
      if (!shaderProgram) {
        return null;
      }

      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);

      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.warn("Shader link error:", gl.getProgramInfoLog(shaderProgram) || "unknown");
        gl.deleteProgram(shaderProgram);
        return null;
      }

      return shaderProgram;
    };

    const shaderProgram = initShaderProgram();
    if (!shaderProgram) {
      canvas.remove();
      return;
    }

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
         1.0,  1.0,
      ]),
      gl.STATIC_DRAW
    );

    const vertexPosition = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    const resolution = gl.getUniformLocation(shaderProgram, "iResolution");
    const time = gl.getUniformLocation(shaderProgram, "iTime");

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.floor(window.innerWidth * dpr);
      const height = Math.floor(window.innerHeight * dpr);
      if (canvas.width === width && canvas.height === height) {
        return;
      }

      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const startTime = performance.now();
    let rafId = 0;

    const render = () => {
      const currentTime = (performance.now() - startTime) / 1000;

      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(shaderProgram);
      if (resolution) {
        gl.uniform2f(resolution, canvas.width, canvas.height);
      }
      if (time) {
        gl.uniform1f(time, currentTime);
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(vertexPosition);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      rafId = requestAnimationFrame(render);
    };

    const cleanup = () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
    };

    window.addEventListener("pagehide", cleanup, { once: true });
    rafId = requestAnimationFrame(render);
  }

  async function fetchJson(url, timeoutMs = 9000) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: { Accept: "application/vnd.github+json" },
      });
      if (!response.ok) {
        const body = await response.text().catch(() => "");
        throw new Error(`HTTP ${response.status}: ${body.slice(0, 120)}`);
      }
      return await response.json();
    } finally {
      clearTimeout(timeout);
    }
  }

  async function fetchTotalDownloads(pageLimit = 3) {
    let total = 0;
    for (let page = 1; page <= pageLimit; page += 1) {
      const url = `https://api.github.com/repos/${REPO.owner}/${REPO.repo}/releases?per_page=100&page=${page}`;
      const releases = await fetchJson(url);
      if (!Array.isArray(releases) || releases.length === 0) break;

      for (const release of releases) {
        for (const asset of release.assets || []) {
          if (typeof asset.download_count === "number") total += asset.download_count;
        }
      }
      if (releases.length < 100) break;
    }
    return total;
  }

  function readCache() {
    try {
      const raw = localStorage.getItem(cacheKey);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function writeCache(payload) {
    try {
      localStorage.setItem(cacheKey, JSON.stringify(payload));
    } catch {
      // ignore
    }
  }

  function applyCachedMetrics(cache) {
    if (!cache) return;
    if (typeof cache.stars === "number" && elements.starsValue) {
      elements.starsValue.textContent = compactNumber(cache.stars);
    }
    if (typeof cache.downloads === "number" && elements.downloadsValue) {
      elements.downloadsValue.textContent = compactNumber(cache.downloads);
    }
    if (cache.latestTag && elements.latestValue) {
      elements.latestValue.textContent = cache.latestTag;
    }
  }

  async function loadGitHubData() {
    setLoadingState(true);
    setStatus(t("loading_data"), false);
    renderAssets([], true);

    const cache = readCache();
    applyCachedMetrics(cache);

    try {
      const [repo, latest] = await Promise.all([
        fetchJson(`https://api.github.com/repos/${REPO.owner}/${REPO.repo}`),
        fetchJson(`https://api.github.com/repos/${REPO.owner}/${REPO.repo}/releases/latest`),
      ]);

      latestRelease = latest;

      const stars = typeof repo.stargazers_count === "number" ? repo.stargazers_count : undefined;
      let downloads;
      try {
        downloads = await fetchTotalDownloads(3);
      } catch {
        downloads = (latest.assets || []).reduce((sum, asset) => {
          return sum + (typeof asset.download_count === "number" ? asset.download_count : 0);
        }, 0);
      }

      if (typeof stars === "number" && elements.starsValue) {
        elements.starsValue.textContent = compactNumber(stars);
      }
      if (typeof downloads === "number" && elements.downloadsValue) {
        elements.downloadsValue.textContent = compactNumber(downloads);
      }

      updateReleaseLabels(latest);
      renderAssets(latest.assets || [], false);
      setPrimaryDownload(bestAsset(latest.assets || []), latest);
      setStatus("", false);

      writeCache({
        ts: Date.now(),
        stars: stars ?? null,
        downloads: typeof downloads === "number" ? downloads : null,
        latestTag: latest.tag_name || latest.name || null,
      });
    } catch (error) {
      console.warn(error);
      renderAssets([], false);
      setPrimaryDownload(null, null);
      setStatus(t("failed_hint"), true);
    } finally {
      setLoadingState(false);
    }
  }

  function init() {
    setupShaderBackground();
    applyI18n();
    setupLanguageToggle();
    setupPreviewToggle();
    setupPreviewLightbox();
    setupAssetTabs();
    renderAssets([], true);
    loadGitHubData();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
