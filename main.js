! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7d1c195c-9322-482a-bcc7-646daef13a57", e._sentryDebugIdIdentifier = "sentry-dbid-7d1c195c-9322-482a-bcc7-646daef13a57")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = { id: "3.3.44" }, (() => {
    var e, n = {
            387: (e, n, r) => {
                "use strict";
                r.d(n, { y: () => s });
                var t = r(8779),
                    a = r.n(t);

                function o(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function i(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? o(Object(r), !0).forEach((function(n) { a()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                var s = i(i(i({}, { browserIconsSizes: [128], iconsPaddingBase: 12.5 }), { borderRadiusBase: 23 }), { textMaxWidthBase: 77.25, textFontSizeBase: 43.5, lineHeightRatio: .87356 })
            },
            8908: (e, n, r) => {
                "use strict";
                r.d(n, { V: () => s });
                var t = r(8779),
                    a = r.n(t);

                function o(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function i(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? o(Object(r), !0).forEach((function(n) { a()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                var s = i(i(i({}, { browserIconsSizes: [32], iconsPaddingBase: 0 }), { borderRadiusBase: 2.67 }), { textMaxWidthBase: 24, textFontSizeBase: 13.34, lineHeightRatio: .825 })
            },
            5251: (e, n, r) => {
                "use strict";
                r.d(n, { M: () => s });
                var t = r(8779),
                    a = r.n(t);

                function o(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function i(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? o(Object(r), !0).forEach((function(n) { a()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                var s = i(i(i({}, { browserIconsSizes: [32], iconsPaddingBase: 0 }), { borderRadiusBase: 2.67 }), { textMaxWidthBase: 24, textFontSizeBase: 13.34, lineHeightRatio: .825 })
            },
            8057: (e, n, r) => {
                "use strict";
                r.d(n, { R: () => d });
                var t = r(8779),
                    a = r.n(t),
                    o = r(387),
                    i = r(8908),
                    s = r(5251);

                function l(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function c(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? l(Object(r), !0).forEach((function(n) { a()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                var u = { textColor: "#FFFFFF", rectFillColor: "#222222" },
                    d = function(e) {
                        var n;
                        switch (e) {
                            case "win10":
                                n = i.V;
                                break;
                            case "win11":
                                n = s.M;
                                break;
                            default:
                                n = o.y
                        }
                        return c(c({}, u), n)
                    }
            },
            9435: (e, n, r) => {
                "use strict";
                var t;
                r.d(n, { M: () => t }),
                    function(e) { e.visited = "visited open profile via link", e.startedHandling = "started handling open profile via link", e.startedRedirecting = "started redirecting open profile via link", e.startedOpening = "started opening profile via link", e.opened = "opened profile via link", e.startedFocusing = "started focusing profile via link", e.focused = "focused profile via link" }(t || (t = {}))
            },
            8149: (e, n, r) => {
                "use strict";
                r.d(n, { B7: () => o, CT: () => s, Qx: () => i });
                var t, a = "@gologin:",
                    o = "".concat(a, "2fa_token"),
                    i = ("".concat(a, "affiliate"), "".concat(a, "searchHistory"), "".concat(a, "profile-shared")),
                    s = ("".concat(a, "forceOldPricing"), "".concat(a, "newPricingWorkspaceId"), "".concat(a, "isCheckoutApp"), "".concat(a, "selected_language"), "https://api.gologin.com");
                process.env.GOLOGIN_OLD_PRICING_PAGE_URL;
                ! function(e) { e.desktop = "desktop" }(t || (t = {}))
            },
            6745: (e, n, r) => {
                "use strict";
                r.d(n, { E9: () => v, E_: () => L, Ey: () => s, Hf: () => j, Hk: () => R, Iy: () => S, Wm: () => P, XS: () => E, XZ: () => g, YX: () => h, YZ: () => D, Zq: () => T, _g: () => u, _y: () => x, a4: () => b, aW: () => O, bk: () => d, fy: () => m, gZ: () => k, hH: () => I, he: () => w, l2: () => c, mN: () => M, qU: () => f, rI: () => F, s1: () => p, sc: () => A, up: () => B, vd: () => y, x8: () => _, xD: () => C, xM: () => N, xd: () => G });
                var t = r(387),
                    a = r(8908),
                    o = r(5251),
                    i = r(6069),
                    s = "latest-version.txt",
                    l = "latest-version{{orbita-version}}.txt",
                    c = "https://orbita-browser-mac.gologin.com/".concat(l),
                    u = "https://orbita-browser-mac-arm.gologin.com/".concat(l),
                    d = "https://orbita-browser-linux.gologin.com/".concat(l),
                    m = "https://orbita-browser-windows.gologin.com/".concat(l),
                    f = ("https://releases-win-test-orbita.s3.eu-central-1.amazonaws.com/".concat("foldersize.txt"), "orbita-browser-latest{{orbita-version}}.".concat("win32" === i.Yu ? "zip" : "tar.gz")),
                    p = "https://orbita-browser-mac.gologin.com/".concat(f),
                    v = "https://orbita-browser-mac-arm.gologin.com/".concat(f),
                    g = "https://orbita-browser-linux.gologin.com/".concat(f),
                    h = "https://orbita-browser-windows.gologin.com/".concat(f),
                    y = "https://releases-mac-orbita-multicore.s3.eu-central-1.amazonaws.com/".concat(f),
                    b = "https://releases-mac-arm-orbita-multicore.s3.eu-central-1.amazonaws.com/".concat(f),
                    w = "https://releases-deb-orbita-multicore.s3.eu-central-1.amazonaws.com/".concat(f),
                    S = "https://releases-win-orbita-multicore.s3.eu-central-1.amazonaws.com/".concat(f),
                    k = "hashfile{{orbita-version}}.mtree",
                    _ = "hashfile{{orbita-version}}.mtree",
                    P = "hashfile{{orbita-version}}.txt",
                    T = P,
                    E = "https://orbita-browser-mac.gologin.com/".concat(k),
                    C = "https://orbita-browser-mac-arm.gologin.com/".concat(k),
                    M = "https://orbita-browser-linux.gologin.com/".concat(P),
                    O = "https://orbita-browser-windows.gologin.com/".concat(T),
                    x = "hash_sum_not_matched",
                    N = "extracted-browser",
                    I = "https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D{ext_id}%26uc&prodversion=97.0.4692.71",
                    B = "ghlmiigebgipgagnhlanjmmniefbfihl",
                    j = "https://geo.myip.link",
                    D = t.y.browserIconsSizes,
                    R = a.V.browserIconsSizes,
                    A = o.M.browserIconsSizes,
                    L = "@gologin",
                    F = "https://files-gateway.gologin.com",
                    G = ["af", "am", "ar", "as", "az", "be", "bg", "bn", "bs", "ca", "cs", "cy", "da", "de", "el", "en-GB", "es-419", "fr", "fr-CA", "gl", "gu", "he", "hi", "hr", "hu", "hy", "id", "is", "it", "ja", "ka", "kk", "km", "kn", "ko", "ky", "lo", "lt", "lv", "ml", "mn", "mr", "ms", "my", "nb", "ne", "nl", "or", "pa", "pl", "pt-BR", "pt-PT", "ro", "ru", "si", "sk", "sl", "sq", "sr", "sr-Latn", "sv", "sw", "ta", "te", "th", "tr", "uk", "ur", "uz", "vi", "zh-CN", "zh-HK", "zh-TW", "zu", "es", "en-US", "mk"]
            },
            1104: (e, n, r) => {
                "use strict";
                r.d(n, { H: () => t });
                var t = { NewTabPage: { PrevNavigationTime: "13302807227669318" }, account_id_migration_state: 2, account_tracker_service_last_update: "13302807097942551", ack_existing_ntp_extensions: !0, alternate_error_pages: { backup: !0 }, apps: {}, autocomplete: { retention_policy_last_version: 103 }, autofill: { orphan_rows_removed: !0 }, bookmark_bar: { show_on_all_tabs: !1 }, browser: { has_seen_welcome_page: !1, window_placement: { bottom: 875, left: 22, maximized: !1, right: 1222, top: 60, work_area_bottom: 897, work_area_left: 0, work_area_right: 1512, work_area_top: 38 } }, countryid_at_install: 21077, custom_links: { initialized: !0, list: [{ isMostVisited: !1, title: "Facebook", url: "https://www.facebook.com/" }, { isMostVisited: !1, title: "Google Ads", url: "https://ads.google.com/" }, { isMostVisited: !1, title: "TikTok", url: "https://www.tiktok.com/" }, { isMostVisited: !1, title: "Amazon", url: "https://www.amazon.com/" }, { isMostVisited: !1, title: "eBay", url: "https://ebay.com/" }, { isMostVisited: !1, title: "YouTube", url: "https://www.youtube.com/" }, { isMostVisited: !1, title: "Coinlist", url: "https://coinlist.co/" }, { isMostVisited: !1, title: "Huobi", url: "https://www.huobi.com/" }, { isMostVisited: !1, title: "bet365", url: "https://www.bet365.com/" }, { isMostVisited: !1, title: "PayPal", url: "https://paypal.com/" }] }, default_apps_install_state: 3, domain_diversity: { last_reporting_timestamp: "13302807099119819" }, extensions: { alerts: { initialized: !0 }, chrome_url_overrides: {}, last_chrome_version: "103.0.5060.53", settings: {} }, gaia_cookie: { changed_time: 1658333661.108506, hash: "2jmj7l5rSw0yVb/vlWAYkK/YBwk=", last_list_accounts_data: '["gaia.l.a.r",[]]' }, gcm: { product_category_for_subtypes: "com.orbita.macosx" }, google: { services: { signin_scoped_device_id: "e8046704-b3cb-4533-8099-e2261bc1be67" } }, intl: { selected_languages: "en-US,en" }, invalidation: { per_sender_topics_to_handler: { 1013309121859: {}, 8181035976: {} } }, media: { device_id_salt: "", engagement: { schema_version: 5 } }, media_router: { receiver_id_hash_token: "" }, ntp: { num_personal_suggestions: 1 }, optimization_guide: { previously_registered_optimization_types: { ABOUT_THIS_SITE: !0, HISTORY_CLUSTERS: !0 }, store_file_paths_to_delete: {} }, plugins: { plugins_list: [] }, privacy_sandbox: { preferences_reconciled: !0 }, profile: { avatar_bubble_tutorial_shown: 2, avatar_index: 26, content_settings: { enable_quiet_permission_ui_enabling_method: { notifications: 1 }, exceptions: { accessibility_events: {}, app_banner: {}, ar: {}, auto_select_certificate: {}, automatic_downloads: {}, autoplay: {}, background_sync: {}, bluetooth_chooser_data: {}, bluetooth_guard: {}, bluetooth_scanning: {}, camera_pan_tilt_zoom: {}, client_hints: {}, clipboard: {}, cookies: {}, durable_storage: {}, fedcm_active_session: {}, fedcm_share: {}, file_system_access_chooser_data: {}, file_system_last_picked_directory: {}, file_system_read_guard: {}, file_system_write_guard: {}, formfill_metadata: {}, geolocation: {}, get_display_media_set_select_all_screens: {}, hid_chooser_data: {}, hid_guard: {}, http_allowed: {}, idle_detection: {}, images: {}, important_site_info: {}, insecure_private_network: {}, installed_web_app_metadata: {}, intent_picker_auto_display: {}, javascript: {}, javascript_jit: {}, legacy_cookie_access: {}, local_fonts: {}, media_engagement: {}, media_stream_camera: {}, media_stream_mic: {}, midi_sysex: {}, mixed_script: {}, nfc_devices: {}, notifications: {}, password_protection: {}, payment_handler: {}, permission_autoblocking_data: {}, permission_autorevocation_data: {}, popups: {}, ppapi_broker: {}, protocol_handler: {}, safe_browsing_url_check_data: {}, sensors: {}, serial_chooser_data: {}, serial_guard: {}, site_engagement: {}, sound: {}, ssl_cert_decisions: {}, storage_access: {}, subresource_filter: {}, subresource_filter_data: {}, usb_chooser_data: {}, usb_guard: {}, vr: {}, webid_api: {}, window_placement: {} }, pref_version: 1 }, created_by_version: "103.0.5060.53", creation_time: "13302807096310804", exit_type: "Normal", last_engagement_time: "13302807261018135", last_time_password_store_metrics_reported: 1658333657.573382, managed_user_id: "", name: "Person 1", password_account_storage_settings: {} }, safebrowsing: { event_timestamps: {}, metrics_last_log_time: "13302807096" }, signin: { allowed: !1 }, sync: { requested: !1 }, translate_site_blacklist: [], translate_site_blacklist_with_time: {}, unified_consent: { migration_state: 10 }, web_apps: { system_web_app_failure_count: 0, system_web_app_last_attempted_language: "en-US", system_web_app_last_attempted_update: "103.0.5060.53", system_web_app_last_installed_language: "en-US", system_web_app_last_update: "103.0.5060.53" }, webauthn: { touchid: { metadata_secret: "FAs08eDqvux1A4NYorVc4ZHDwnhqyLknX9ef3JS4DLg=" } } }
            },
            5472: (e, n, r) => {
                "use strict";
                r.d(n, { C: () => u, Ju: () => d, Ng: () => f, d2: () => m });
                var t = r(1017),
                    a = r.n(t),
                    o = r(5346),
                    i = r(5664),
                    s = r(8393),
                    l = r(7703),
                    c = r(8911),
                    u = function(e) {
                        return (0, c.Z)({ fn: () => (0, o.U)({ url: e, method: "HEAD", retryLimit: 1 }), retryDelay: 300 }).catch((function(e) {
                            var n = e instanceof Error ? e.message : e;
                            "string" == typeof n && n.includes("404") || (0, i.zd)({
                                message: n,
                                transactionName: "update-extension-get-last-version",
                                tags: [
                                    ["scenario", "update-extensions"],
                                    ["name", "update-extension-get-last-version"]
                                ]
                            })
                        }))
                    },
                    d = function(e) { var [n = ""] = e.split("/").reverse(), [r = ""] = n.split("."), t = r.split("_"); return t.shift(), t.join("_") },
                    m = function(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.$c; return e.map((function(e) { var [r = ""] = e.split(a().sep).reverse(), [t] = r.split("."); return s.C.extractExtension(e, a().join(n, t)).then((function() { return s.C.deleteExtensionArchive(e) })) })) },
                    f = { startChild: function() { return { finish: function() {}, setStatus: function() {} } }, setStatus: function() {}, setTag: function() {}, finish: function() {} }
            },
            8050: (e, n, r) => {
                "use strict";
                r.r(n), r.d(n, { BrowserReleasesManager: () => D });
                var t = r(9591),
                    a = r.n(t),
                    o = r(8779),
                    i = r.n(o),
                    s = r(8640),
                    l = r.n(s),
                    c = r(6116),
                    u = r.n(c),
                    d = r(2037),
                    m = r(1017),
                    f = r.n(m),
                    p = r(3405),
                    v = r(5346),
                    g = r(7703),
                    h = r(5664),
                    y = r(135),
                    b = r(6745),
                    w = r(6069),
                    S = r(8911);

                function k(e, n, r) { _(e, n), n.set(e, r) }

                function _(e, n) { if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object") }

                function P(e, n, r) { if (!n.has(e)) throw new TypeError("attempted to get private field on non-instance"); return r }
                var { readdir: T, rm: E, readFile: C, mkdir: M } = r(7147).promises, O = "0.0.0", x = new WeakMap, N = new WeakMap, I = new WeakMap, B = new WeakMap, j = new WeakSet;
                class D {
                    constructor() { var e, n; return _(e = this, n = j), n.add(e), k(this, x, { writable: !0, value: (0, g.IT)() }), k(this, N, { writable: !0, value: {} }), k(this, I, { writable: !0, value: "" }), k(this, B, { writable: !0, value: [] }), i()(this, "window", null), D.instance || (D.instance = this), D.instance }
                    getLocalOrbitaReleasesList() {
                        var e = this;
                        return a()((function*() {
                            var n = new RegExp("^(".concat(g.ko, "|").concat(g.ko, "-\\d{2,3})$"));
                            l()(e, N, (yield T(g.wk).catch((function() { return [] }))).filter((function(e) { return e.includes(g.fv) || n.test(e) })).reduce((function(e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                    r = n.match(/-(\d+$)/) || [],
                                    [t, a = "0"] = r;
                                return e[a] = n, e
                            }), {})), e.updateReleasesListInLocalStorage()
                        }))()
                    }
                    get localOrbitaReleasesList() { return u()(this, N) }
                    getSupportedOrbitaVersions() {
                        var e = arguments,
                            n = this;
                        return a()((function*() { var r = e.length > 0 && void 0 !== e[0] ? e[0] : ""; return u()(n, B).length || !r ? u()(n, B) : (0, v.$)({ url: "".concat(r, "/gologin-global-settings/supported_orbita_versions"), method: "GET", timeout: 3e4 }).then((function(e) { return l()(n, B, e.supportedOrbitaVersions || []), u()(n, B) })).catch((function() { return [] })) }))()
                    }
                    checkLocalOrbitaReleases() {
                        var e = this;
                        return a()((function*() {
                            yield e.getLocalOrbitaReleasesList();
                            var n = "darwin" === g.iw ? g.fv : g.ko;
                            if (u()(e, N)[0]) {
                                var r = (yield(0, p.AD)()) || "",
                                    t = (0, p.mC)(r),
                                    a = (0, p.bc)(t),
                                    o = f().join(g.wk, n);
                                return "darwin" === g.iw && (o = g.wk, yield M(f().join(o, a)).catch((function() { return null }))), (0, S.Z)({ fn: () => "darwin" === g.iw ? T(o).then((function(e) { return Promise.all(e.map((function(e) { return e.includes("dylib") || e.includes("version") || e.includes(g.fv) ? (0, y.MZ)(f().join(o, e), f().join(o, a, e)) : null }))) })).then((function() { return T(o) })).then((function(e) { return Promise.all(e.map((function(e) { return e.includes(g.ko) ? null : (0, y.kA)(f().join(o, e)) }))) })) : (0, y.MZ)(o, f().join(g.wk, a)) }).then((function() { return "darwin" === g.iw ? null : E(f().join(g.wk, g.ko), { recursive: !0, maxRetries: 5, retryDelay: 300 }) })).then((function() { return e.getLocalOrbitaReleasesList() })).catch((function(e) {
                                    var n = e instanceof Error ? e.message : e;
                                    (0, h.zd)({
                                        message: n,
                                        transactionName: "check-downloaded-orbita-versions",
                                        tags: [
                                            ["scenario", "check-multicore"],
                                            ["name", "check-downloaded-orbita-versions"]
                                        ]
                                    })
                                }))
                            }
                        }))()
                    }
                    getLocalOrbitaVersionByPath() {
                        var e = arguments,
                            n = this;
                        return a()((function*() {
                            var r = e.length > 0 && void 0 !== e[0] ? e[0] : "";
                            if (e.length > 1 && void 0 !== e[1] && e[1] && u()(n, I)) return u()(n, I);
                            if (!Object.keys(u()(n, N)).length) return O;
                            var t = r;
                            if (!t) {
                                var [a] = P(n, j, R).call(n), o = u()(n, N)[a];
                                t = f().join(u()(n, x).BROWSER_BASE_PATH, o)
                            }
                            var i = f().join(t, "version");
                            return "darwin" === g.iw && (i = f().join(t, "version", b.Ey)), C(i, { encoding: "utf-8" }).then((function(e) { return l()(n, I, e), e })).catch((function() { return O }))
                        }))()
                    }
                    getOrbitaPathToStart() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        if (!P(this, j, R).call(this).length) throw new Error("No installed Orbita");
                        var n = e,
                            r = u()(this, N)[n];
                        return r || ([n] = P(this, j, R).call(this), r = u()(this, N)[n]), { pathToLaunch: f().join(u()(this, x).BROWSER_BASE_PATH, r, ...u()(this, x).BROWSER_EXEC_FILE_NAME), browserWorkingDir: f().join(u()(this, x).BROWSER_BASE_PATH, r), pickedMajorVer: n }
                    }
                    getMajorVersionByUA() { var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").match(/[\s\S\w]+Chrome\/(\d+)/) || []; if (!e) return ""; var [n, r = ""] = e; return "100" === r ? "10" : "103" === r ? "13" : r }
                    getOrbitaVersionToDownload(e) { var { key: n, value: r } = e, t = "userAgent" === n ? this.getMajorVersionByUA(r) : r, a = this.checkOrbitaWinCompatible({ key: n, value: r }), o = u()(this, N)[t], i = u()(this, B).includes(t); return a && t && i && !o ? ("10" === t && (t = "100"), "13" === t && (t = "103"), t.toString()) : "" }
                    checkOrbitaWinCompatible(e) {
                        var { key: n, value: r, ProfileStatusManagerInst: t } = e;
                        if ("win32" !== d.platform()) return !0;
                        var a = r || "latest";
                        if ("userAgent" === n) {
                            var o = this.getMajorVersionByUA(r),
                                { pathToLaunch: i } = this.getOrbitaPathToStart(o);
                            a = (i.match(/orbita-browser-(\d+)/) || [])[1] || "110"
                        }
                        return + +a < 110 || (!(+(0, w.lZ)() < 10) || (t && t.addStatus({ status: "error", statusMessage: "profileStatusMessages.windowsVersionNotSupported" }), !1))
                    }
                    checkOrbitasAvailable(e) {
                        var n = e,
                            r = Object.keys(u()(this, N)).map(Number);
                        return n = n.filter((function(e) { return r.includes(e) })), "win32" !== d.platform() ? n : +(0, w.lZ)() < 10 ? n.filter((function(e) { return e <= 109 })) : n
                    }
                    updateVersionFullInLocalStorage(e, n) {
                        var r = this;
                        return a()((function*() {
                            var t = r.localOrbitaReleasesList,
                                a = n.filter((function(e) { return Number(e) >= 119 })).map((function(e) {
                                    var n = t[e],
                                        a = f().join(g.wk, n);
                                    return r.getLocalOrbitaVersionByPath(a)
                                })),
                                o = (yield Promise.allSettled(a)).map((function(e) { return "rejected" === e.status ? null : e.value })).filter(Boolean).join(",");
                            return e.webContents.executeJavaScript("\n      localStorage.setItem('".concat(b.E_, ":browsersVersionsFull', '").concat(o, "');\n    ")).catch(console.error)
                        }))()
                    }
                    updateReleasesListInLocalStorage(e) {
                        var n = this;
                        return a()((function*() {
                            var r = P(n, j, R).call(n),
                                t = n.window;
                            if (e && (t = e, n.window = e), t) {
                                var a = t.webContents.executeJavaScript("\n      localStorage.setItem('".concat(b.E_, ":browsersLocal', '").concat(r.join(","), "');\n    ")).catch(console.error),
                                    o = n.updateVersionFullInLocalStorage(t, r);
                                yield Promise.allSettled([a, o])
                            }
                        }))()
                    }
                }

                function R() { return Object.keys(u()(this, N)).map((function(e) { return Number(e) })).sort((function(e, n) { return e - n })).reverse().map((function(e) { return e.toString() })) }
                i()(D, "instance", void 0)
            },
            1583: (e, n, r) => {
                "use strict";
                r.d(n, { o: () => x });
                var t = r(9591),
                    a = r.n(t),
                    o = r(8779),
                    i = r.n(o),
                    s = r(6116),
                    l = r.n(s),
                    c = r(6113),
                    u = r.n(c),
                    d = r(3292),
                    m = r(1017),
                    f = r.n(m),
                    p = r(4040);
                const v = [{ name: "AIGDT", value: "AIGDT", fileNames: ["aigdt.ttf"], os: ["win", "lin"] }, { name: "AMGDT", value: "AMGDT", fileNames: ["amgdt.ttf"], os: ["win", "lin"] }, { name: "Abadi MT Condensed Light", value: "Abadi MT Condensed Light" }, { name: "Abyssinica Sil Regular", value: "Abyssinica Sil Regular", fileNames: ["abyssinica_sil.ttf"], os: ["lin"] }, { name: "Academy Engraved LET", value: "Academy Engraved LET" }, { name: "AcadEref", value: "AcadEref", fileNames: ["acaderef.ttf"] }, { name: "Adobe Arabic", value: "Adobe Arabic" }, { name: "Adobe Caslon Pro", value: "Adobe Caslon Pro" }, { name: "Adobe Caslon Pro Bold", value: "Adobe Caslon Pro Bold" }, { name: "Adobe Devanagari", value: "Adobe Devanagari" }, { name: "Adobe Fan Heiti Std B", value: "Adobe Fan Heiti Std B" }, { name: "Adobe Fangsong Std R", value: "Adobe Fangsong Std R" }, { name: "Adobe Garamond Pro", value: "Adobe Garamond Pro" }, { name: "Adobe Garamond Pro Bold", value: "Adobe Garamond Pro Bold" }, { name: "Adobe Gothic Std B", value: "Adobe Gothic Std B" }, { name: "Adobe Hebrew", value: "Adobe Hebrew" }, { name: "Adobe Heiti Std R", value: "Adobe Heiti Std R" }, { name: "Adobe Kaiti Std R", value: "Adobe Kaiti Std R" }, { name: "Adobe Ming Std L", value: "Adobe Ming Std L" }, { name: "Adobe Myungjo Std M", value: "Adobe Myungjo Std M" }, { name: "Adobe Naskh Medium", value: "Adobe Naskh Medium" }, { name: "Adobe Song Std L", value: "Adobe Song Std L" }, { name: "Agency FB", value: "Agency FB" }, { name: "Aharoni", value: "Aharoni" }, { name: "Albertus Medium", value: "Albertus Medium" }, { name: "Alef", value: "Alef", fileNames: ["alef_regular.ttf", "alef_bold.ttf"], os: ["lin"] }, { name: "Alexandra Script", value: "Alexandra Script", fileNames: ["alexandra_script.ttf"] }, { name: "Algerian", value: "Algerian" }, { name: "Amadeus", value: "Amadeus", fileNames: ["amadeus_regular.ttf"] }, { name: "Amazone BT", value: "Amazone BT" }, { name: "AmdtSymbols", value: "AmdtSymbols", fileNames: ["amdtsymbols_regular.ttf"] }, { name: "AmerType Md BT", value: "AmerType Md BT" }, { name: "American Typewriter", value: "American Typewriter", os: ["mac"] }, { name: "Amiri", value: "Amiri", os: ["mac"] }, { name: "AnastasiaScript", value: "AnastasiaScript" }, { name: "Andale Mono", value: "Andale Mono", os: ["mac"] }, { name: "Andalus", value: "Andalus" }, { name: "Angsana New", value: "Angsana New" }, { name: "AngsanaUPC", value: "AngsanaUPC" }, { name: "Ani", value: "Ani", os: ["lin"] }, { name: "AnjaliOldLipi", value: "AnjaliOldLipi", fileNames: ["anjalioldlipi.ttf"], os: ["lin"] }, { name: "Annabelle", value: "Annabelle", fileNames: ["annabelle.ttf"] }, { name: "Antique Olive", value: "Antique Olive" }, { name: "Aparajita", value: "Aparajita" }, { name: "Apple Braille", value: "Apple Braille", os: ["mac"] }, { name: "Apple Chancery", value: "Apple Chancery", os: ["mac"] }, { name: "Apple Color Emoji", value: "Apple Color Emoji", os: ["mac"] }, { name: "Apple SD Gothic Neo", value: "Apple SD Gothic Neo", os: ["mac"] }, { name: "Apple Symbols", value: "Apple Symbols", os: ["mac"] }, { name: "AppleGothic", value: "AppleGothic", os: ["mac"] }, { name: "AppleMyungjo", value: "AppleMyungjo", os: ["mac"] }, { name: "Arabic Transparent", value: "Arabic Transparent" }, { name: "Arabic Typesetting", value: "Arabic Typesetting" }, { name: "Arial", value: "Arial", os: ["win", "mac"] }, { name: "Arial Baltic", value: "Arial Baltic", os: ["win", "mac"] }, { name: "Arial Black", value: "Arial Black", os: ["win", "mac"] }, { name: "Arial CE", value: "Arial CE", os: ["win", "mac"] }, { name: "Arial Cyr", value: "Arial Cyr", os: ["win", "mac"] }, { name: "Arial Greek", value: "Arial Greek", os: ["win", "mac"] }, { name: "Arial Hebrew", value: "Arial Hebrew", os: ["win", "mac"] }, { name: "Arial MT", value: "Arial MT", os: ["win", "mac"] }, { name: "Arial Narrow", value: "Arial Narrow", os: ["win", "mac"] }, { name: "Arial Rounded MT Bold", value: "Arial Rounded MT Bold", os: ["win", "mac"] }, { name: "Arial TUR", value: "Arial TUR", os: ["win", "mac"] }, { name: "Arial Unicode MS", value: "Arial Unicode MS", os: ["win", "mac"] }, { name: "Ariston", value: "Ariston", fileNames: ["ariston.ttf"] }, { name: "Arno Pro", value: "Arno Pro" }, { name: "Arno Pro Caption", value: "Arno Pro Caption" }, { name: "Arno Pro Display", value: "Arno Pro Display" }, { name: "Arno Pro Light Display", value: "Arno Pro Light Display" }, { name: "Arno Pro SmText", value: "Arno Pro SmText" }, { name: "Arno Pro Smbd", value: "Arno Pro Smbd" }, { name: "Arno Pro Smbd Caption", value: "Arno Pro Smbd Caption" }, { name: "Arno Pro Smbd Display", value: "Arno Pro Smbd Display" }, { name: "Arno Pro Smbd SmText", value: "Arno Pro Smbd SmText" }, { name: "Arno Pro Smbd Subhead", value: "Arno Pro Smbd Subhead" }, { name: "Arno Pro Subhead", value: "Arno Pro Subhead" }, { name: "Arrus BT", value: "Arrus BT" }, { name: "Athelas", value: "Athelas", os: ["mac"] }, { name: "Aurora Cn BT", value: "Aurora Cn BT" }, { name: "AvantGarde Bk BT", value: "AvantGarde Bk BT" }, { name: "AvantGarde Md BT", value: "AvantGarde Md BT" }, { name: "Avenir", value: "Avenir", os: ["mac"] }, { name: "Avenir Next", value: "Avenir Next", os: ["mac"] }, { name: "Avenir Next Condensed", value: "Avenir Next Condensed", os: ["mac"] }, { name: "Ayuthaya", value: "Ayuthaya", os: ["mac"] }, { name: "Baghdad", value: "Baghdad", os: ["mac"] }, { name: "Bangla MN", value: "Bangla MN", os: ["mac"] }, { name: "Bangla Sangam MN", value: "Bangla Sangam MN", os: ["mac"] }, { name: "Bank Gothic", value: "Bank Gothic" }, { name: "BankGothic Lt BT", value: "BankGothic Lt BT" }, { name: "BankGothic Md BT", value: "BankGothic Md BT" }, { name: "Baskerville", value: "Baskerville", os: ["mac"] }, { name: "Baskerville Old Face", value: "Baskerville Old Face", os: ["mac"] }, { name: "Batang", value: "Batang" }, { name: "BatangChe", value: "BatangChe" }, { name: "Bauhaus 93", value: "Bauhaus 93" }, { name: "Bazooka", value: "Bazooka" }, { name: "Beirut", value: "Beirut", os: ["mac"] }, { name: "Bell Gothic Std Black", value: "Bell Gothic Std Black", fileNames: ["bell_gothic_std_black.otf"] }, { name: "Bell Gothic Std Light", value: "Bell Gothic Std Light", fileNames: ["bell_gothic_std_light.otf"] }, { name: "Bell MT", value: "Bell MT" }, { name: "Benguiat Bk BT", value: "Benguiat Bk BT" }, { name: "Berlin Sans FB", value: "Berlin Sans FB" }, { name: "Berlin Sans FB Demi", value: "Berlin Sans FB Demi" }, { name: "Bernard MT Condensed", value: "Bernard MT Condensed" }, { name: "BernhardFashion BT", value: "BernhardFashion BT" }, { name: "BernhardMod BT", value: "BernhardMod BT" }, { name: "Bickham Script One", value: "Bickham Script One", fileNames: ["bickham_script_one.ttf"] }, { name: "Bickham Script Pro Regular", value: "Bickham Script Pro Regular" }, { name: "Bickham Script Pro Semibold", value: "Bickham Script Pro Semibold" }, { name: "Bickham Script Two", value: "Bickham Script Two" }, { name: "Big Caslon", value: "Big Caslon", os: ["mac"] }, { name: "Birch Std", value: "Birch Std" }, { name: "BinnerD", value: "BinnerD" }, { name: "Bitstream Vera Sans Mono", value: "Bitstream Vera Sans Mono" }, { name: "Blackadder ITC", value: "Blackadder ITC" }, { name: "Blackoak Std", value: "Blackoak Std" }, { name: "BlairMdITC TT", value: "BlairMdITC TT" }, { name: "Bodoni 72", value: "Bodoni 72", os: ["mac"] }, { name: "Bodoni 72 Oldstyle", value: "Bodoni 72 Oldstyle", os: ["mac"] }, { name: "Bodoni 72 Smallcaps", value: "Bodoni 72 Smallcaps", os: ["mac"] }, { name: "Bodoni MT", value: "Bodoni MT", os: ["mac"] }, { name: "Bodoni MT Black", value: "Bodoni MT Black", os: ["mac"] }, { name: "Bodoni MT Condensed", value: "Bodoni MT Condensed", os: ["mac"] }, { name: "Bodoni MT Poster Compressed", value: "Bodoni MT Poster Compressed", os: ["mac"] }, { name: "Book Antiqua", value: "Book Antiqua" }, { name: "Bookman Old Style", value: "Bookman Old Style" }, { name: "Bookshelf Symbol 7", value: "Bookshelf Symbol 7" }, { name: "Boulder", value: "Boulder" }, { name: "Bradley Hand", value: "Bradley Hand" }, { name: "Bradley Hand ITC", value: "Bradley Hand ITC" }, { name: "Bremen Bd BT", value: "Bremen Bd BT" }, { name: "Britannic Bold", value: "Britannic Bold" }, { name: "Broadway", value: "Broadway" }, { name: "Browallia New", value: "Browallia New" }, { name: "BrowalliaUPC", value: "BrowalliaUPC" }, { name: "Brush Script MT", value: "Brush Script MT" }, { name: "Brush Script Std", value: "Brush Script Std" }, { name: "CG Omega", value: "CG Omega" }, { name: "CG Times", value: "CG Times" }, { name: "Caladea", value: "Caladea", fileNames: ["caladea_bold.ttf", "caladea_bold_italic.ttf", "caladea-italic.ttf", "caladea_regular.ttf"], os: ["lin"] }, { name: "Calibri", value: "Calibri", os: ["win"] }, { name: "Calibri Light", value: "Calibri Light", os: ["win"] }, { name: "Californian FB", value: "Californian FB" }, { name: "Calisto MT", value: "Calisto MT" }, { name: "Calligraph", value: "Calligraph" }, { name: "Calligrapher", value: "Calligrapher" }, { name: "Cambria", value: "Cambria", os: ["win"] }, { name: "Cambria Math", value: "Cambria Math", os: ["win"] }, { name: "Candara", value: "Candara", os: ["win"] }, { name: "Carrois Gothic SC", value: "Carrois Gothic SC", os: ["mac"] }, { name: "Carolina", value: "Carolina" }, { name: "CaslonOpnface BT", value: "CaslonOpnface BT" }, { name: "Castellar", value: "Castellar" }, { name: "Centaur", value: "Centaur" }, { name: "Century", value: "Century" }, { name: "Century Gothic", value: "Century Gothic" }, { name: "Century Schoolbook", value: "Century Schoolbook" }, { name: "Ceremonious Two", value: "Ceremonious Two", fileNames: ["ceremonious_two.ttf"] }, { name: "Cezanne", value: "Cezanne" }, { name: "Chalkboard", value: "Chalkboard", os: ["mac"] }, { name: "Chalkboard SE", value: "Chalkboard SE", os: ["mac"] }, { name: "Chalkduster", value: "Chalkduster", os: ["mac"] }, { name: "Chandas", value: "Chandas", os: ["lin"] }, { name: "Chaparral Pro", value: "Chaparral Pro" }, { name: "Chaparral Pro Light", value: "Chaparral Pro Light" }, { name: "Charlemagne Std", value: "Charlemagne Std" }, { name: "Charlesworth", value: "Charlesworth" }, { name: "Charter", value: "Charter", os: ["mac"] }, { name: "Charter BT", value: "Charter BT", os: ["mac"] }, { name: "Charter Bd BT", value: "Charter Bd BT", os: ["mac"] }, { name: "Chaucer", value: "Chaucer" }, { name: "ChelthmITC Bk BT", value: "ChelthmITC Bk BT" }, { name: "Chilanka", value: "Chilanka", fileNames: ["chilanka_regular.ttf"], os: ["lin"] }, { name: "Chiller", value: "Chiller" }, { name: "CityBlueprint", value: "CityBlueprint" }, { name: "Clarendon", value: "Clarendon" }, { name: "Clarendon BT", value: "Clarendon BT" }, { name: "Clarendon Blk BT", value: "Clarendon Blk BT" }, { name: "Clarendon Condensed", value: "Clarendon Condensed" }, { name: "Clarendon Lt BT", value: "Clarendon Lt BT" }, { name: "CloisterBlack BT", value: "CloisterBlack BT" }, { name: "Cochin", value: "Cochin", os: ["mac"] }, { name: "Collapse", value: "Collapse", os: ["mac"] }, { name: "Colonna MT", value: "Colonna MT" }, { name: "Comic Sans MS", value: "Comic Sans MS", os: ["win", "mac"] }, { name: "CommercialPi BT", value: "CommercialPi BT" }, { name: "CommercialScript BT", value: "CommercialScript BT" }, { name: "Complex", value: "Complex" }, { name: "Consolas", value: "Consolas", os: ["win"] }, { name: "Constantia", value: "Constantia", os: ["win"] }, { name: "Cooper Black", value: "Cooper Black" }, { name: "Cooper Std Black", value: "Cooper Std Black" }, { name: "Copperplate", value: "Copperplate", os: ["mac"] }, { name: "Copperplate Gothic", value: "Copperplate Gothic", os: ["mac"] }, { name: "Copperplate Gothic Bold", value: "Copperplate Gothic Bold", os: ["mac"] }, { name: "Copperplate Gothic Light", value: "Copperplate Gothic Light", os: ["mac"] }, { name: "Copyist", value: "Copyist" }, { name: "Corbel", value: "Corbel", os: ["win"] }, { name: "Cordia New", value: "Cordia New" }, { name: "CordiaUPC", value: "CordiaUPC" }, { name: "Coronet", value: "Coronet" }, { name: "CountryBlueprint", value: "CountryBlueprint" }, { name: "Corsiva Hebrew", value: "Corsiva Hebrew", os: ["mac"] }, { name: "Courier", value: "Courier", os: ["win", "mac"] }, { name: "Courier New", value: "Courier New", os: ["win", "mac"] }, { name: "Courier New Baltic", value: "Courier New Baltic", os: ["win", "mac"] }, { name: "Courier New CE", value: "Courier New CE", os: ["win", "mac"] }, { name: "Courier New Cyr", value: "Courier New Cyr", os: ["win", "mac"] }, { name: "Courier New Greek", value: "Courier New Greek", os: ["win", "mac"] }, { name: "Courier New TUR", value: "Courier New TUR", os: ["win", "mac"] }, { name: "Curlz MT", value: "Curlz MT" }, { name: "DFKai-SB", value: "DFKai-SB" }, { name: "DIN Alternate", value: "DIN Alternate", os: ["mac"] }, { name: "DIN Condensed", value: "DIN Condensed", os: ["mac"] }, { name: "Damascus", value: "Damascus", os: ["mac"] }, { name: "Dancing Script", value: "Dancing Script", fileNames: ["dancing_script_bold.ttf", "dancing_script_medium.ttf", "dancing_script_regular.ttf", "dancing_script_semibold.ttf"], os: ["lin", "mac"] }, { name: "DaunPenh", value: "DaunPenh" }, { name: "Dauphin", value: "Dauphin" }, { name: "David", value: "David", os: ["win", "lin"] }, { name: "David CLM", value: "David", os: ["mac"] }, { name: "David Libre", value: "David Libre", fileNames: ["david_libre_bold.ttf", "david_libre_medium.ttf", "david_libre_regular.ttf"], os: ["win", "lin"] }, { name: "Decor", value: "Decor" }, { name: "DejaVu Sans", value: "DejaVu Sans", os: ["win", "lin", "mac"] }, { name: "DejaVu Sans Condensed", value: "DejaVu Sans Condensed", os: ["win", "lin", "mac"] }, { name: "DejaVu Sans Light", value: "DejaVu Sans Light", os: ["win", "lin", "mac"] }, { name: "DejaVu Sans Mono", value: "DejaVu Sans Mono", os: ["win", "lin", "mac"] }, { name: "DejaVu Serif", value: "DejaVu Serif", os: ["win", "lin", "mac"] }, { name: "DejaVu Serif Condensed", value: "DejaVu Serif Condensed", os: ["win", "lin", "mac"] }, { name: "Devanagari MT", value: "Devanagari MT", os: ["mac"] }, { name: "Devanagari Sangam MN", value: "Devanagari Sangam MN", os: ["mac"] }, { name: "Didot", value: "Didot", os: ["mac"] }, { name: "DilleniaUPC", value: "DilleniaUPC" }, { name: "Diwan Kufi", value: "Diwan Kufi", os: ["mac"] }, { name: "Diwan Thuluth", value: "Diwan Thuluth", os: ["mac"] }, { name: "DokChampa", value: "DokChampa" }, { name: "Dotum", value: "Dotum" }, { name: "DotumChe", value: "DotumChe" }, { name: "Droid Sans", value: "Droid Sans", os: ["lin", "mac"] }, { name: "Droid Sans Mono", value: "Droid Sans Mono", os: ["lin", "mac"] }, { name: "Dutch801 Rm BT", value: "Dutch801 Rm BT" }, { name: "Dutch801 XBd BT", value: "Dutch801 XBd BT" }, { name: "Dyuthi", value: "Dyuthi", fileNames: ["dyuthi.ttf"], os: ["lin"] }, { name: "Ebrima", value: "Ebrima", os: ["win"] }, { name: "Eccentric Std", value: "Eccentric Std" }, { name: "Edwardian Script ITC", value: "Edwardian Script ITC" }, { name: "Elephant", value: "Elephant" }, { name: "Engravers MT", value: "Engravers MT" }, { name: "EngraversGothic BT", value: "EngraversGothic BT" }, { name: "Eras Bold ITC", value: "Eras Bold ITC" }, { name: "Eras Demi ITC", value: "Eras Demi ITC" }, { name: "Eras Light ITC", value: "Eras Light ITC" }, { name: "Eras Medium ITC", value: "Eras Medium ITC" }, { name: "Estrangelo Edessa", value: "Estrangelo Edessa" }, { name: "EucrosiaUPC", value: "EucrosiaUPC" }, { name: "Euphemia", value: "Euphemia", os: ["mac"] }, { name: "Euphemia UCAS", value: "Euphemia UCAS", os: ["mac"] }, { name: "EuroRoman", value: "EuroRoman" }, { name: "Eurostile", value: "Eurostile" }, { name: "Exotc350 Bd BT", value: "Exotc350 Bd BT" }, { name: "FangSong", value: "FangSong" }, { name: "Farah", value: "Farah", os: ["mac"] }, { name: "Farisi", value: "Farisi", os: ["mac"] }, { name: "Felix Titling", value: "Felix Titling" }, { name: "Fixedsys", value: "Fixedsys", fileNames: ["fixedsys.ttf"] }, { name: "Footlight MT Light", value: "Footlight MT Light" }, { name: "Forte", value: "Forte" }, { name: "Frank Ruehl", value: "Frank Ruehl", os: ["win", "lin"] }, { name: "Frank Ruehl Libre Black", value: "Frank Ruehl Libre Black", fileNames: ["frank_ruhl_libre_black.ttf"], os: ["win", "lin"] }, { name: "Frank Ruehl Libre", value: "Frank Ruehl Libre", fileNames: ["frank_ruhl_libre_regular.ttf", "frank_ruhl_libre_bold.ttf", "frank_ruhl_libre_medium.ttf"], os: ["win", "lin"] }, { name: "Frank Ruehl Libre Light", value: "Frank Ruehl Libre Light", fileNames: ["frank_ruhl_libre_light.ttf"], os: ["win", "lin"] }, { name: "Franklin Gothic Book", value: "Franklin Gothic Book", os: ["win"] }, { name: "Franklin Gothic Demi", value: "Franklin Gothic Demi", os: ["win"] }, { name: "Franklin Gothic Demi Cond", value: "Franklin Gothic Demi Cond", os: ["win"] }, { name: "Franklin Gothic Heavy", value: "Franklin Gothic Heavy", os: ["win"] }, { name: "Franklin Gothic Medium", value: "Franklin Gothic Medium", os: ["win"] }, { name: "Franklin Gothic Medium Cond", value: "Franklin Gothic Medium Cond", os: ["win"] }, { name: "Freefrm721 Blk BT", value: "Freefrm721 Blk BT" }, { name: "Freehand521 BT", value: "Freehand521 BT" }, { name: "FreeMono", value: "FreeMono", fileNames: ["freemono.ttf", "freemono_bold.ttf", "freemono_bold_oblique.ttf", "freemono_oblique.ttf"], os: ["lin"] }, { name: "FreeSans", value: "FreeSans", fileNames: ["freesans.ttf", "freesans_bold.ttf", "freesans_bold_oblique.ttf", "freesans_oblique.ttf"], os: ["lin"] }, { name: "FreeSerif", value: "FreeSerif", fileNames: ["freeserif.ttf", "freeserif_bold.ttf", "freeserif_bold_italic.ttf", "freeserif_italic.ttf"], os: ["lin"] }, { name: "FreesiaUPC", value: "FreesiaUPC" }, { name: "Freestyle Script", value: "Freestyle Script" }, { name: "French Script MT", value: "French Script MT" }, { name: "FrnkGothITC Bk BT", value: "FrnkGothITC Bk BT" }, { name: "Frutiger", value: "Frutiger" }, { name: "Futura", value: "Futura", os: ["mac"] }, { name: "Futura Bk BT", value: "Futura Bk BT", os: ["mac"] }, { name: "Futura Lt BT", value: "Futura Lt BT", os: ["mac"] }, { name: "Futura Md BT", value: "Futura Md BT", os: ["mac"] }, { name: "FuturaBlack BT", value: "FuturaBlack BT", os: ["mac"] }, { name: "GDT", value: "GDT" }, { name: "GENISO", value: "GENISO" }, { name: "Gabriola", value: "Gabriola", os: ["win"] }, { name: "Gadugi", value: "Gadugi", os: ["win"] }, { name: "Galliard BT", value: "Galliard BT" }, { name: "Garamond", value: "Garamond" }, { name: "Garamond Premr Pro", value: "Garamond Premr Pro" }, { name: "Garamond Premr Pro Smbd", value: "Garamond Premr Pro Smbd" }, { name: "Gargi", value: "Gargi", fileNames: ["gargi.ttf"], os: ["lin"] }, { name: "Garuda", value: "Garuda", os: ["lin"] }, { name: "Gautami", value: "Gautami" }, { name: "Geeza Pro", value: "Geeza Pro", os: ["mac"] }, { name: "Geneva", value: "Geneva", os: ["mac"] }, { name: "Gentium Basic", value: "Gentium Basic", fileNames: ["gentium_basic.ttf", "gentium_basic_bold.ttf", "gentium_basic_bold_italic.ttf", "gentium_basic_italic.ttf"] }, { name: "Gentium Book Basic", value: "Gentium Book Basic", fileNames: ["gentium_book_basic.ttf", "gentium_book_basic_bold.ttf", "gentium_book_basic_bold_italic.ttf", "gentium_book_basic_italic.ttf"] }, { name: "Geometr231 BT", value: "Geometr231 BT" }, { name: "Geometr231 Hv BT", value: "Geometr231 Hv BT" }, { name: "Geometr231 Lt BT", value: "Geometr231 Lt BT" }, { name: "Georgia", value: "Georgia", os: ["win", "mac"] }, { name: "Giddyup Std", value: "Giddyup Std" }, { name: "Gigi", value: "Gigi" }, { name: "Gill Sans", value: "Gill Sans", os: ["mac", "win"] }, { name: "Gill Sans MT", value: "Gill Sans MT", os: ["mac", "win"] }, { name: "Gill Sans MT Condensed", value: "Gill Sans MT Condensed", os: ["mac", "win"] }, { name: "Gill Sans MT Ext Condensed Bold", value: "Gill Sans MT Ext Condensed Bold", os: ["mac"] }, { name: "Gill Sans Ultra Bold", value: "Gill Sans Ultra Bold", os: ["mac", "win"] }, { name: "Gill Sans Ultra Bold Condensed", value: "Gill Sans Ultra Bold Condensed", os: ["mac", "win"] }, { name: "Gisha", value: "Gisha" }, { name: "Gloucester MT Extra Condensed", value: "Gloucester MT Extra Condensed" }, { name: "Gotham", value: "Gotham" }, { name: "Gotham Bold", value: "Gotham Bold" }, { name: "GothicE", value: "GothicE" }, { name: "GothicG", value: "GothicG" }, { name: "GothicI", value: "GothicI" }, { name: "Goudy Old Style", value: "Goudy Old Style" }, { name: "Goudy Stout", value: "Goudy Stout" }, { name: "GoudyHandtooled BT", value: "GoudyHandtooled BT" }, { name: "GreekC", value: "GreekC", fileNames: ["greekc.ttf"] }, { name: "GreekS", value: "GreekS", fileNames: ["greeks.ttf"] }, { name: "Gubbi", value: "Gubbi", fileNames: ["gubbi.ttf"], os: ["lin"] }, { name: "Gujarati MT", value: "Gujarati MT", os: ["mac"] }, { name: "Gujarati Sangam MN", value: "Gujarati Sangam MN", os: ["mac"] }, { name: "Gulim", value: "Gulim" }, { name: "GulimChe", value: "GulimChe" }, { name: "Gungsuh", value: "Gungsuh" }, { name: "GungsuhChe", value: "GungsuhChe" }, { name: "Gurmukhi MN", value: "Gurmukhi MN", os: ["mac"] }, { name: "Gurmukhi MT", value: "Gurmukhi MT", os: ["mac"] }, { name: "Gurmukhi Sangam MN", value: "Gurmukhi Sangam MN", os: ["mac"] }, { name: "Haettenschweiler", value: "Haettenschweiler" }, { name: "Harlow Solid Italic", value: "Harlow Solid Italic" }, { name: "Harrington", value: "Harrington" }, { name: "Heather", value: "Heather" }, { name: "Heather Script One", value: "Heather Script One" }, { name: "Heiti SC", value: "Heiti SC", os: ["mac"] }, { name: "Heiti TC", value: "Heiti TC", os: ["mac"] }, { name: "Helvetica", value: "Helvetica", os: ["mac"] }, { name: "Helvetica Neue", value: "Helvetica Neue", os: ["mac"] }, { name: "Herculanum", value: "Herculanum", os: ["mac"] }, { name: "High Tower Text", value: "High Tower Text" }, { name: "Hiragino Kaku Gothic Pro", value: "Hiragino Kaku Gothic Pro", os: ["mac"] }, { name: "Hiragino Kaku Gothic ProN", value: "Hiragino Kaku Gothic ProN", os: ["mac"] }, { name: "Hiragino Kaku Gothic Std", value: "Hiragino Kaku Gothic StdN", os: ["mac"] }, { name: "Hiragino Kaku Gothic ProN", value: "Hiragino Kaku Gothic ProN", os: ["mac"] }, { name: "Hiragino Maru Pro", value: "Hiragino Maru Pro", os: ["mac"] }, { name: "Hiragino Maru ProN", value: "Hiragino Maru ProN", os: ["mac"] }, { name: "Hiragino Mincho Pro", value: "Hiragino Mincho Pro", os: ["mac"] }, { name: "Hiragino Mincho ProN", value: "Hiragino Mincho ProN", os: ["mac"] }, { name: "Hiragino Sans", value: "Hiragino Sans", os: ["mac"] }, { name: "Hiragino Sans GB", value: "Hiragino Sans GB", os: ["mac"] }, { name: "Hobo Std", value: "Hobo Std" }, { name: "Hoefler Text", value: "Hoefler Text", os: ["mac"] }, { name: "Humanst521 BT", value: "Humanst521 BT" }, { name: "Humanst521 Lt BT", value: "Humanst521 Lt BT" }, { name: "ISOCP", value: "ISOCP" }, { name: "ISOCP2", value: "ISOCP2" }, { name: "ISOCP3", value: "ISOCP3" }, { name: "ISOCPEUR", value: "ISOCPEUR" }, { name: "ISOCT", value: "ISOCT" }, { name: "ISOCT2", value: "ISOCT2" }, { name: "ISOCT3", value: "ISOCT3" }, { name: "ISOCTEUR", value: "ISOCTEUR" }, { name: "ITF Devanagari", value: "ITF Devanagari", os: ["mac"] }, { name: "ITF Devanagari Marathi", value: "ITF Devanagari, Marathi", os: ["mac"] }, { name: "Impact", value: "Impact", os: ["win", "mac"] }, { name: "Imprint MT Shadow", value: "Imprint MT Shadow" }, { name: "InaiMathi", value: "InaiMathi", os: ["mac"] }, { name: "Incised901 BT", value: "Incised901 BT" }, { name: "Incised901 Bd BT", value: "Incised901 Bd BT" }, { name: "Incised901 Lt BT", value: "Incised901 Lt BT" }, { name: "Inconsolata", value: "Inconsolata", fileNames: ["inconsolata.otf"] }, { name: "Informal Roman", value: "Informal Roman" }, { name: "Informal011 BT", value: "Informal011 BT" }, { name: "Interstate", value: "Interstate" }, { name: "Iowan Old Style", value: "Iowan Old Style", os: ["mac"] }, { name: "IrisUPC", value: "IrisUPC" }, { name: "Iskoola Pota", value: "Iskoola Pota" }, { name: "Italic", value: "Italic" }, { name: "ItalicC", value: "ItalicC" }, { name: "ItalicT", value: "ItalicT" }, { name: "Jamrul", value: "Jamrul", fileNames: ["jamrul.ttf"], os: ["lin"] }, { name: "JasmineUPC", value: "JasmineUPC" }, { name: "Jazz LET", value: "Jazz LET" }, { name: "Jester", value: "Jester" }, { name: "Jokerman", value: "Jokerman" }, { name: "Juice ITC", value: "Juice ITC" }, { name: "Kabel Bk BT", value: "Kabel Bk BT" }, { name: "Kabel Ult BT", value: "Kabel Ult BT" }, { name: "KacstBook", value: "KacstBook", fileNames: ["kacstbook.ttf"], os: ["win", "lin"] }, { name: "KacstLetter", value: "KacstLetter", fileNames: ["kacstletter.ttf"], os: ["win", "lin"] }, { name: "KacstOffice", value: "KacstOffice", fileNames: ["kacstoffice.ttf"], os: ["win", "lin"] }, { name: "KacstNaskh", value: "KacstNaskh", fileNames: ["kacstnaskh.ttf"], os: ["win", "lin"] }, { name: "KacstTitlel", value: "KacstTitlel", fileNames: ["kacsttitlel.ttf"], os: ["win", "lin"] }, { name: "KaiTi", value: "KaiTi" }, { name: "Kailasa", value: "Kailasa", os: ["mac"] }, { name: "Kalapi", value: "Kalapi", os: ["lin"] }, { name: "Kalinga", value: "Kalinga" }, { name: "Kalimati", value: "Kalimati", os: ["lin"] }, { name: "Kannada MN", value: "Kannada MN", os: ["mac"] }, { name: "Kannada Sangam MN", value: "Kannada Sangam MN", os: ["mac"] }, { name: "Kartika", value: "Kartika" }, { name: "Karumbi", value: "Karumbi", os: ["lin"] }, { name: "Kaufmann BT", value: "Kaufmann BT" }, { name: "Kaufmann Bd BT", value: "Kaufmann Bd BT" }, { name: "Kefa", value: "Kefa", os: ["mac"] }, { name: "Khmer MN", value: "Khmer MN", os: ["mac"] }, { name: "Khmer OS", value: "Khmer OS", os: ["lin"] }, { name: "Khmer Sangam MN", value: "Khmer Sangam MN", os: ["mac"] }, { name: "Khmer UI", value: "Khmer UI", os: ["lin"] }, { name: "Kinnari", value: "Kinnari", os: ["lin"] }, { name: "KodchiangUPC", value: "KodchiangUPC" }, { name: "Kohinoor Bangla", value: "Kohinoor Bangla", os: ["mac"] }, { name: "Kohinoor Devanagari", value: "Kohinoor Devanagari", os: ["mac"] }, { name: "Kohinoor Telugu", value: "Kohinoor Telugu", os: ["mac"] }, { name: "Kokila", value: "Kokila" }, { name: "Kokonor", value: "Kokonor", os: ["mac"] }, { name: "Korinna BT", value: "Korinna BT" }, { name: "Kozuka Gothic Pr6N B", value: "Kozuka Gothic Pr6N B" }, { name: "Kozuka Gothic Pr6N EL", value: "Kozuka Gothic Pr6N EL" }, { name: "Kozuka Gothic Pr6N H", value: "Kozuka Gothic Pr6N H" }, { name: "Kozuka Gothic Pr6N L", value: "Kozuka Gothic Pr6N L" }, { name: "Kozuka Gothic Pr6N M", value: "Kozuka Gothic Pr6N M" }, { name: "Kozuka Gothic Pr6N R", value: "Kozuka Gothic Pr6N R" }, { name: "Kozuka Gothic Pro B", value: "Kozuka Gothic Pro B" }, { name: "Kozuka Gothic Pro EL", value: "Kozuka Gothic Pro EL" }, { name: "Kozuka Gothic Pro H", value: "Kozuka Gothic Pro H" }, { name: "Kozuka Gothic Pro L", value: "Kozuka Gothic Pro L" }, { name: "Kozuka Gothic Pro M", value: "Kozuka Gothic Pro M" }, { name: "Kozuka Gothic Pro R", value: "Kozuka Gothic Pro R" }, { name: "Kozuka Mincho Pr6N B", value: "Kozuka Mincho Pr6N B" }, { name: "Kozuka Mincho Pr6N EL", value: "Kozuka Mincho Pr6N EL" }, { name: "Kozuka Mincho Pr6N H", value: "Kozuka Mincho Pr6N H" }, { name: "Kozuka Mincho Pr6N L", value: "Kozuka Mincho Pr6N L" }, { name: "Kozuka Mincho Pr6N M", value: "Kozuka Mincho Pr6N M" }, { name: "Kozuka Mincho Pr6N R", value: "Kozuka Mincho Pr6N R" }, { name: "Kozuka Mincho Pro B", value: "Kozuka Mincho Pro B" }, { name: "Kozuka Mincho Pro EL", value: "Kozuka Mincho Pro EL" }, { name: "Kozuka Mincho Pro H", value: "Kozuka Mincho Pro H" }, { name: "Kozuka Mincho Pro L", value: "Kozuka Mincho Pro L" }, { name: "Kozuka Mincho Pro M", value: "Kozuka Mincho Pro M" }, { name: "Kozuka Mincho Pro R", value: "Kozuka Mincho Pro R" }, { name: "Kristen ITC", value: "Kristen ITC" }, { name: "Krungthep", value: "Krungthep", os: ["mac"] }, { name: "KufiStandartGK", value: "KufiStandartGK", os: ["mac"] }, { name: "Kunstler Script", value: "Kunstler Script" }, { name: "Laksaman", value: "Laksaman", os: ["lin"] }, { name: "Lao MN", value: "Lao MN", os: ["mac"] }, { name: "Lao Sangam MN", value: "Lao Sangam MN", os: ["mac"] }, { name: "Lao UI", value: "Lao UI", os: ["mac"] }, { name: "Latha", value: "Latha" }, { name: "Laveric", value: "Laveric", fileNames: ["laverick_bold.ttf", "laverick.ttf"] }, { name: "Leelawadee", value: "Leelawadee", os: ["win"] }, { name: "Letter Gothic Std", value: "Letter Gothic Std" }, { name: "Levenim MT", value: "Levenim MT" }, { name: "Liberation Mono", value: "Liberation Mono", fileNames: ["liberation_mono_bold.ttf", "liberation_mono_bold_italic.ttf", "liberation_mono_italic.ttf", "liberation-mono_regular.ttf"], os: ["win", "lin", "mac"] }, { name: "Liberation Sans Narrow", value: "Liberation Sans Narrow", fileNames: ["liberation_sans_narrow.ttf", "liberation_sans_narrow_bold.ttf", "liberation_sans_narrow_bold_italic.ttf", "liberation_sans_narrow_italic.ttf"], os: ["win", "lin", "mac"] }, { name: "Liberation Sans", value: "Liberation Sans", fileNames: ["liberation_sans.otf", "liberation_sans_bold.otf", "liberation_sans_bold_italic.otf", "liberation_sans_italic.otf"], os: ["win", "lin", "mac"] }, { name: "Liberation Serif", value: "Liberation Serif", fileNames: ["liberation_serif_bold.ttf", "liberation_serif_bold_italic.ttf", "liberation_serif_italic.ttf", "liberation_serif_regular.ttf"], os: ["win", "lin", "mac"] }, { name: "LilyUPC", value: "LilyUPC" }, { name: "Lithograph", value: "Lithograph" }, { name: "Lithograph Light", value: "Lithograph Light" }, { name: "Lithos Pro Regular", value: "Lithos Pro Regular" }, { name: "Lohit Devanagari", value: "Lohit Devanagari", fileNames: ["lohit_devanagari.ttf"], os: ["lin"] }, { name: "Lohit Telugu", value: "Lohit Telugu", fileNames: ["lohit_telugu.ttf"], os: ["lin"] }, { name: "Loma", value: "Loma", os: ["lin"] }, { name: "Lucida Bright", value: "Lucida Bright", os: ["win"] }, { name: "Lucida Calligraphy", value: "Lucida Calligraphy", os: ["win"] }, { name: "Lucida Console", value: "Lucida Console", os: ["win"] }, { name: "Lucida Fax", value: "Lucida Fax" }, { name: "Lucida Grande", value: "Lucida Grande", os: ["mac"] }, { name: "Lucida Handwriting", value: "Lucida Handwriting" }, { name: "Lucida Sans", value: "Lucida Sans" }, { name: "Lucida Sans Typewriter", value: "Lucida Sans Typewriter" }, { name: "Lucida Sans Unicode", value: "Lucida Sans Unicode", os: ["win"] }, { name: "Luminari", value: "Luminari", os: ["mac"] }, { name: "Lydian BT", value: "Lydian BT" }, { name: "MONO", value: "MONO" }, { name: "MS Gothic", value: "MS Gothic", os: ["win"] }, { name: "MS LineDraw", value: "MS LineDraw", os: ["win"] }, { name: "MS Mincho", value: "MS Mincho", os: ["win"] }, { name: "MS Outlook", value: "MS Outlook", os: ["win"] }, { name: "MS PGothic", value: "MS PGothic", os: ["win"] }, { name: "MS PMincho", value: "MS PMincho", os: ["win"] }, { name: "MS Reference Sans Serif", value: "MS Reference Sans Serif", os: ["win"] }, { name: "MS Reference Specialty", value: "MS Reference Specialty", os: ["win"] }, { name: "MS Sans Serif", value: "MS Sans Serif", os: ["win"] }, { name: "MS Serif", value: "MS Serif", os: ["win"] }, { name: "MS UI Gothic", value: "MS UI Gothic", os: ["win"] }, { name: "MT Extra", value: "MT Extra" }, { name: "MV Boli", value: "MV Boli", os: ["win"] }, { name: "Magneto", value: "Magneto" }, { name: "Maiandra GD", value: "Maiandra GD" }, { name: "Malayalam MN", value: "Malayalam MN", os: ["mac"] }, { name: "Malayalam Sangam MN", value: "Malayalam Sangam MN", os: ["mac"] }, { name: "Malgun Gothic", value: "Malgun Gothic", os: ["win"] }, { name: "Mangal", value: "Mangal" }, { name: "Manjari", value: "Manjari", fileNames: ["manjari_bold.ttf", "manjari_regular.ttf"], os: ["lin"] }, { name: "Marigold", value: "Marigold" }, { name: "Marion", value: "Marion", os: ["mac"] }, { name: "Marker Felt", value: "Marker Felt", fileNames: ["marker_felt.ttf"], os: ["mac"] }, { name: "Marlett", value: "Marlett", os: ["win"] }, { name: "Matisse ITC", value: "Matisse ITC" }, { name: "Matura MT Script Capitals", value: "Matura MT Script Capitals" }, { name: "Meera", value: "Meera", os: ["lin"] }, { name: "Meera Inimai", value: "Meera Inimai", fileNames: ["meera_inimai_regular.ttf"], os: ["lin"] }, { name: "Meiryo", value: "Meiryo" }, { name: "Meiryo UI", value: "Meiryo UI" }, { name: "Menlo", value: "Menlo", os: ["mac"] }, { name: "Mesquite Std", value: "Mesquite Std" }, { name: "Microsoft Himalaya", value: "Microsoft Himalaya", os: ["win"] }, { name: "Microsoft JhengHei", value: "Microsoft JhengHei", os: ["win"] }, { name: "Microsoft JhengHei UI", value: "Microsoft JhengHei UI", os: ["win"] }, { name: "Microsoft New Tai Lue", value: "Microsoft New Tai Lue", os: ["win"] }, { name: "Microsoft PhagsPa", value: "Microsoft PhagsPa", os: ["win"] }, { name: "Microsoft Sans Serif", value: "Microsoft Sans Serif", os: ["win", "mac"] }, { name: "Microsoft Tai Le", value: "Microsoft Tai Le", os: ["win"] }, { name: "Microsoft Uighur", value: "Microsoft Uighur", os: ["win"] }, { name: "Microsoft YaHei", value: "Microsoft YaHei", os: ["win"] }, { name: "Microsoft YaHei UI", value: "Microsoft YaHei UI", os: ["win"] }, { name: "Microsoft Yi Baiti", value: "Microsoft Yi Baiti", os: ["win"] }, { name: "MingLiU", value: "MingLiU", os: ["win"] }, { name: "MingLiU-ExtB", value: "MingLiU-ExtB", os: ["win"] }, { name: "MingLiU_HKSCS", value: "MingLiU_HKSCS", os: ["win"] }, { name: "MingLiU_HKSCS-ExtB", value: "MingLiU_HKSCS-ExtB", os: ["win"] }, { name: "Minion", value: "Minion" }, { name: "Minion Pro", value: "Minion Pro" }, { name: "Minion Pro Cond", value: "Minion Pro Cond" }, { name: "Minion Pro Med", value: "Minion Pro Med" }, { name: "Minion Pro SmBd", value: "Minion Pro SmBd" }, { name: "Miriam", value: "Miriam", os: ["win", "lin"] }, { name: "Miriam Fixed", value: "Miriam Fixed", os: ["win", "lin"] }, { name: "Miriam Libre", value: "Miriam Libre", fileNames: ["miriam_libre_bold.ttf", "miriam_libre_regular.ttf"], os: ["win", "lin"] }, { name: "Mishafi", value: "Mishafi", os: ["mac"] }, { name: "Mishafi Gold", value: "Mishafi Gold", os: ["mac"] }, { name: "Mistral", value: "Mistral" }, { name: "Mitra Mono", value: "Mitra Mono", os: ["lin"] }, { name: "Modern", value: "Modern" }, { name: "Modern No. 20", value: "Modern No. 20" }, { name: "Mona Lisa Solid ITC TT", value: "Mona Lisa Solid ITC TT" }, { name: "Monaco", value: "Monaco", os: ["mac"] }, { name: "Mongolian Baiti", value: "Mongolian Baiti", os: ["win"] }, { name: "Monospac821 BT", value: "Monospac821 BT" }, { name: "Monotxt", value: "Monotxt" }, { name: "Monotype Corsiva", value: "Monotype Corsiva" }, { name: "MoolBoran", value: "MoolBoran" }, { name: "Mshtakan", value: "Mshtakan", os: ["mac"] }, { name: "Mukti Narrow", value: "Mukti Narrow", fileNames: ["mukti_narrow.ttf", "mukti_narrow_bold.ttf"], os: ["lin"] }, { name: "Muna", value: "Muna", os: ["mac"] }, { name: "Muanmar MN", value: "Muanmar MN", os: ["mac"] }, { name: "Muanmar Sangam MN", value: "Muanmar Sangam MN", os: ["mac"] }, { name: "Myriad Arabic", value: "Myriad Arabic" }, { name: "Myriad Hebrew", value: "Myriad Hebrew" }, { name: "Myriad Pro", value: "Myriad Pro" }, { name: "Myriad Pro Cond", value: "Myriad Pro Cond" }, { name: "Myriad Pro Light", value: "Myriad Pro Light" }, { name: "Myriad Web Pro", value: "Myriad Web Pro" }, { name: "NSimSun", value: "NSimSun", os: ["win"] }, { name: "Nadeem", value: "Nadeem", os: ["mac"] }, { name: "Nakula", value: "Nakula", fileNames: ["nakula_regular.ttf"], os: ["lin"] }, { name: "Narkisim", value: "Narkisim" }, { name: "Navuli", value: "Navuli", os: ["lin"] }, { name: "News Gothic", value: "News Gothic" }, { name: "NewsGoth BT", value: "NewsGoth BT" }, { name: "New Peninim MT", value: "New Peninim MT", os: ["mac"] }, { name: "Niagara Engraved", value: "Niagara Engraved" }, { name: "Niagara Solid", value: "Niagara Solid" }, { name: "Nimbus Roman", value: "Nimbus Roman", os: ["lin"] }, { name: "Nimbus Sans", value: "Nimbus Sans", os: ["lin"] }, { name: "Nimbus Sans Narrow", value: "Nimbus Sans Narrow", os: ["lin"] }, { name: "Nirmala UI", value: "Nirmala UI", os: ["win"] }, { name: "Norasi", value: "Norasi", fileNames: ["norasi.ttf", "norasi_bold.ttf", "norasi_bold_italic.ttf", "norasi_italic.ttf"], os: ["lin"] }, { name: "Noteworthy", value: "Noteworthy", os: ["mac"] }, { name: "Noto Kufi Arabic", value: "Noto Kufi Arabic", os: ["mac"] }, { name: "Noto Mono", value: "Noto Mono", fileNames: ["noto_mono_regular.ttf"], os: ["win", "lin"] }, { name: "Noto Nastaliq Urdu", value: "Noto Nastaliq Urdu", os: ["mac"] }, { name: "Noto Sans", value: "Noto Sans", fileNames: ["noto_sans_bold.ttf", "noto_sans_bold_italic.ttf", "noto_sans_italic.ttf", "noto_sans_regular.ttf"], os: ["win", "lin"] }, { name: "Noto Sans Arabic UI", value: "Noto Sans Arabic UI", os: ["win", "lin"] }, { name: "Noto Sans CJK HK", value: "Noto Sans CJK HK", os: ["win", "lin"] }, { name: "Noto Sans CJK JP", value: "Noto Sans CJK JP", os: ["win", "lin"] }, { name: "Noto Sans CJK KR", value: "Noto Sans CJK KR", os: ["win", "lin"] }, { name: "Noto Sans CJK SC", value: "Noto Sans CJK SC", fileNames: ["noto_sans_cjk_sc_black.otf", "noto_sans_cjk_sc_bold.otf", "noto_sans_cjk_sc_demilight.otf", "noto_sans_cjk_sc_light.otf", "noto_sans_cjk_sc_medium.otf", "noto_sans_cjk_sc_regular.otf", "noto_sans_cjk_sc_thin.otf"], os: ["win", "lin"] }, { name: "Noto Sans CJK TC", value: "Noto Sans CJK TC", os: ["win", "lin"] }, { name: "Noto Sans Lisu", value: "Noto Sans Lisu", os: ["win", "lin"] }, { name: "Noto Sans Mono CJK HK", value: "Noto Sans Mono CJK HK", os: ["win", "lin"] }, { name: "Noto Sans Mono CJK JP", value: "Noto Sans Mono CJK JP", os: ["win", "lin"] }, { name: "Noto Sans Mono CJK KR", value: "Noto Sans Mono CJK KR", os: ["win", "lin"] }, { name: "Noto Sans Mono CJK SC", value: "Noto Sans Mono CJK SC", os: ["win", "lin"] }, { name: "Noto Sans Mono CJK TC", value: "Noto Sans Mono CJK TC", os: ["win", "lin"] }, { name: "Noto Serif", value: "Noto Serif", fileNames: ["noto_serif_regular.ttf", "noto_serif_italic.ttf", "noto_serif_bold_italic.ttf", "noto_serif_bold.ttf"], os: ["win", "lin"] }, { name: "Noto Serif CJK JP", value: "Noto Serif CJK JP", os: ["win", "lin"] }, { name: "Noto Serif CJK KR", value: "Noto Serif CJK KR", os: ["win", "lin"] }, { name: "Noto Serif CJK SC", value: "Noto Serif CJK SC", os: ["win", "lin"] }, { name: "Noto Serif CJK TC", value: "Noto Serif CJK TC", os: ["win", "lin"] }, { name: "Noto Serif Georgian", value: "Noto Serif Georgian", os: ["win", "lin"] }, { name: "Noto Serif Hebrew", value: "Noto Serif Hebrew", os: ["win", "lin"] }, { name: "Noto Serif Italic", value: "Noto Serif Italic", os: ["win", "lin"] }, { name: "Noto Serif Lao", value: "Noto Serif Lao", os: ["win", "lin"] }, { name: "Nueva Std", value: "Nueva Std" }, { name: "Nueva Std Cond", value: "Nueva Std Cond" }, { name: "Nyala", value: "Nyala" }, { name: "OCR A Extended", value: "OCR A Extended" }, { name: "OCR A Std", value: "OCR A Std" }, { name: "OCR-A BT", value: "OCR-A BT" }, { name: "OCR-B 10 BT", value: "OCR-B 10 BT" }, { name: "Old English Text MT", value: "Old English Text MT" }, { name: "Onyx", value: "Onyx" }, { name: "Onyx BT", value: "Onyx BT" }, { name: "OpenSymbol", value: "OpenSymbol", fileNames: ["opensymbol.ttf"], os: ["win", "lin"] }, { name: "Optima", value: "Optima", os: ["mac"] }, { name: "Orator Std", value: "Orator Std" }, { name: "Oriya MN", value: "Oriya MN", os: ["mac"] }, { name: "Oriya Sangam MN", value: "Oriya Sangam MN", os: ["mac"] }, { name: "Osaka", value: "Osaka", fileNames: ["osaka.ttf"] }, { name: "Oswald", value: "Oswald", fileNames: ["oswald_bold.ttf", "oswald_extralight.ttf", "oswald_light.ttf", "oswald_medium.ttf", "oswald_regular.ttf", "oswald_semibold.ttf"], os: ["win", "lin"] }, { name: "Ouverture script", value: "Ouverture script", fileNames: ["ouverture_script.ttf"] }, { name: "OzHandicraft BT", value: "OzHandicraft BT" }, { name: "PMingLiU", value: "PMingLiU", os: ["win"] }, { name: "PMingLiU-ExtB", value: "PMingLiU-ExtB", os: ["win"] }, { name: "PT Mono", value: "PT Mono", os: ["mac"] }, { name: "PT Sans", value: "PT Sans", os: ["mac"] }, { name: "PT Sans Caption", value: "PT Mono Caption", os: ["mac"] }, { name: "PT Sans Narrow", value: "PT Sans Narrow", os: ["mac"] }, { name: "PT Serif", value: "PT Serif", os: ["mac"] }, { name: "PT Serif Caption", value: "PT Serif Caption", os: ["mac"] }, { name: "Padauk", value: "Padauk", fileNames: ["padauk_bold.ttf", "padauk_regular.ttf"], os: ["lin"] }, { name: "Padauk Book", value: "Padauk Book", fileNames: ["padauk_book_bold.ttf", "padauk_book.ttf"], os: ["lin"] }, { name: "Palace Script MT", value: "Palace Script MT" }, { name: "Pagul", value: "Pagul", os: ["lin"] }, { name: "Palatino", value: "Palatino", os: ["win", "mac"] }, { name: "Palatino Linotype", value: "Palatino Linotype", os: ["win", "mac"] }, { name: "PanRoman", value: "PanRoman" }, { name: "Papyrus", value: "Papyrus", os: ["mac"] }, { name: "Parchment", value: "Parchment" }, { name: "Party LET", value: "Party LET" }, { name: "Perpetua", value: "Perpetua" }, { name: "Perpetua Titling MT", value: "Perpetua Titling MT" }, { name: "Phetsarath OT", value: "Phetsarath OT", fileNames: ["phetsarath_ot.ttf"], os: ["lin"] }, { name: "Phosphate", value: "Phosphate", os: ["mac"] }, { name: "PingFang HK", value: "PingFang HK", os: ["mac"] }, { name: "PingFang SC", value: "PingFang SC", os: ["mac"] }, { name: "PingFang TC", value: "PingFang TC", os: ["mac"] }, { name: "Plantagenet Cherokee", value: "Plantagenet Cherokee", os: ["mac"] }, { name: "Playbill", value: "Playbill" }, { name: "Poor Richard", value: "Poor Richard" }, { name: "Poplar Std", value: "Poplar Std" }, { name: "PosterBodoni BT", value: "PosterBodoni BT" }, { name: "Pothana2000", value: "Pothana2000", os: ["lin"] }, { name: "Prestige Elite Std", value: "Prestige Elite Std" }, { name: "Princetown Let", value: "Princetown Let" }, { name: "Pristina", value: "Pristina" }, { name: "Proxy 1", value: "Proxy 1", fileNames: ["proxy_1.ttf"] }, { name: "Proxy 2", value: "Proxy 2", fileNames: ["proxy_2.ttf"] }, { name: "Proxy 3", value: "Proxy 3", fileNames: ["proxy_3.ttf"] }, { name: "Proxy 4", value: "Proxy 4", fileNames: ["proxy_4.ttf"] }, { name: "Proxy 5", value: "Proxy 5", fileNames: ["proxy_5.ttf"] }, { name: "Proxy 6", value: "Proxy 6", fileNames: ["proxy_6.ttf"] }, { name: "Proxy 7", value: "Proxy 7", fileNames: ["proxy_7.ttf"] }, { name: "Proxy 8", value: "Proxy 8", fileNames: ["proxy_8.ttf"] }, { name: "Proxy 9", value: "Proxy 9", fileNames: ["proxy_9.ttf"] }, { name: "PTBarnum BT", value: "PTBarnum BT" }, { name: "Purisa", value: "Purisa", fileNames: ["purisa.ttf", "purisa_bold.ttf", "purisa_boldoblique.ttf", "purisa_oblique.ttf"], os: ["lin"] }, { name: "Raanana", value: "Raanana", os: ["mac"] }, { name: "Raavi", value: "Raavi" }, { name: "Rachana", value: "Rachana", os: ["lin"] }, { name: "Rage Italic", value: "Rage Italic" }, { name: "Ravie", value: "Ravie" }, { name: "Rekha", value: "Rekha", fileNames: ["rekha.ttf"], os: ["lin"] }, { name: "Roboto", value: "Roboto", fileNames: ["roboto_bold.ttf", "roboto_bold_italic.ttf", "roboto_italic.ttf", "roboto_regular.ttf"], os: ["win", "lin", "mac"] }, { name: "Roboto Black", value: "Roboto Black", fileNames: ["roboto_black.ttf", "roboto_black_italic.ttf"], os: ["win", "lin", "mac"] }, { name: "Roboto Light", value: "Roboto Light", fileNames: ["roboto_light.ttf", "roboto_light_italic.ttf"], os: ["win", "lin", "mac"] }, { name: "Roboto Medium", value: "Roboto Medium", fileNames: ["roboto_medium.ttf", "roboto_medium_italic.ttf"], os: ["win", "lin", "mac"] }, { name: "Roboto Thin", value: "Roboto Thin", fileNames: ["roboto_thin.ttf", "roboto_thin_italic.ttf"], os: ["win", "lin", "mac"] }, { name: "Rockwell", value: "Rockwell", os: ["mac"] }, { name: "Rockwell Condensed", value: "Rockwell Condensed" }, { name: "Rockwell Extra Bold", value: "Rockwell Extra Bold" }, { name: "Rod", value: "Rod" }, { name: "Roman", value: "Roman" }, { name: "RomanC", value: "RomanC", fileNames: ["romanc.ttf"] }, { name: "RomanD", value: "RomanD", fileNames: ["romand.ttf"] }, { name: "RomanS", value: "RomanS", fileNames: ["romans.ttf"] }, { name: "RomanT", value: "RomanT", fileNames: ["romant.ttf"] }, { name: "Romantic", value: "Romantic" }, { name: "Rosewood Std Regular", value: "Rosewood Std Regular" }, { name: "Rubik", value: "Rubik", fileNames: ["rubik_bold.ttf", "rubik_bold_italic.ttf", "rubik_italic.ttf", "rubik_regular.ttf", "rubik_extrabold.ttf", "rubik_extrabold_italic.ttf", "rubik_semibold.ttf", "rubik_semibold_italic.ttf"], os: ["lin"] }, { name: "Rubik Black", value: "Rubik Black", fileNames: ["rubik_black.ttf", "rubik_black_italic.ttf"], os: ["lin"] }, { name: "Rubik Light", value: "Rubik Light", fileNames: ["rubik_light.ttf", "rubik_light_italic.ttf"], os: ["lin"] }, { name: "Rubik Medium", value: "Rubik Medium", fileNames: ["rubik_medium.ttf", "rubik_medium_italic.ttf"], os: ["lin"] }, { name: "Russo One", value: "Russo One", fileNames: ["russo_one_regular.ttf"], os: ["lin"] }, { name: "STIXGeneral", value: "STIXGeneral", os: ["mac"] }, { name: "STIXIntegralsD", value: "STIXIntegralsD", os: ["mac"] }, { name: "STIXIntegralsSm", value: "STIXIntegralsSm", os: ["mac"] }, { name: "STIXIntegralsUp", value: "STIXIntegralsUp", os: ["mac"] }, { name: "STIXIntegralsUpD", value: "STIXIntegralsUpD", os: ["mac"] }, { name: "STIXIntegralsUpSm", value: "STIXIntegralsUpSm", os: ["mac"] }, { name: "STIXNoneUnicode", value: "STIXNoneUnicode", os: ["mac"] }, { name: "STIXSizeFiveSym", value: "STIXSizeFiveSym", os: ["mac"] }, { name: "STIXSizeFourSym", value: "STIXSizeFourSym", os: ["mac"] }, { name: "STIXSizeOneSym", value: "STIXSizeOneSym", os: ["mac"] }, { name: "STIXSizeThreeSym", value: "STIXSizeThreeSym", os: ["mac"] }, { name: "STIXSizeTwoSym", value: "STIXSizeTwoSym", os: ["mac"] }, { name: "STIXVariants", value: "STIXVariants", os: ["mac"] }, { name: "STSong", value: "STSong", os: ["mac"] }, { name: "Saab", value: "Saab", fileNames: ["saab.otf"], os: ["lin"] }, { name: "Sahadeva", value: "Sahadeva", os: ["lin"] }, { name: "Sakkal Majalla", value: "Sakkal Majalla" }, { name: "Samanata", value: "Samanata", os: ["lin"] }, { name: "Samyak Devanagari", value: "Samyak Devanagari", os: ["lin"] }, { name: "Samyak Gujarati", value: "Samyak Gujarati", os: ["lin"] }, { name: "Samyak Malayalam", value: "Samyak Malayalam", os: ["lin"] }, { name: "Samyak Tamil", value: "Samyak Tamil", os: ["lin"] }, { name: "Sana", value: "Sana", os: ["mac"] }, { name: "SansSerif", value: "SansSerif" }, { name: "Santa Fe LET", value: "Santa Fe LET" }, { name: "Sarai", value: "Sarai", os: ["lin"] }, { name: "Sathu", value: "Sathu", os: ["mac"] }, { name: "Savoye LET", value: "Savoye LET", os: ["mac"] }, { name: "Sawasdee", value: "Sawasdee" }, { name: "Script", value: "Script" }, { name: "Scriptina", value: "Scriptina", fileNames: ["scriptina.ttf"] }, { name: "Script MT Bold", value: "Script MT Bold" }, { name: "ScriptC", value: "ScriptC" }, { name: "ScriptS", value: "ScriptS" }, { name: "Segoe Print", value: "Segoe Print", os: ["win"] }, { name: "Segoe Script", value: "Segoe Script", os: ["win"] }, { name: "Segoe UI", value: "Segoe UI", os: ["win"] }, { name: "Segoe UI Light", value: "Segoe UI Light", os: ["win"] }, { name: "Segoe UI Semibold", value: "Segoe UI Semibold", os: ["win"] }, { name: "Segoe UI Semilight", value: "Segoe UI Semilight", os: ["win"] }, { name: "Segoe UI Symbol", value: "Segoe UI Symbol", os: ["win"] }, { name: "Seravek", value: "Seravek", os: ["mac"] }, { name: "Serifa", value: "Serifa" }, { name: "Serifa BT", value: "Serifa BT" }, { name: "Serifa Th BT", value: "Serifa Th BT" }, { name: "ShelleyVolante BT", value: "ShelleyVolante BT" }, { name: "Shree Devanagari 714", value: "Shree Devanagari 714", os: ["mac"] }, { name: "Sherwood", value: "Sherwood" }, { name: "Shonar Bangla", value: "Shonar Bangla" }, { name: "Showcard Gothic", value: "Showcard Gothic" }, { name: "Shruti", value: "Shruti" }, { name: "SignPainter", value: "SignPainter", os: ["mac"] }, { name: "Silom", value: "Silom", os: ["mac"] }, { name: "SimHei", value: "SimHei" }, { name: "SimSun", value: "SimSun", os: ["win"] }, { name: "SimSun-ExtB", value: "SimSun-ExtB", os: ["win"] }, { name: "Simplex", value: "Simplex" }, { name: "Simplified Arabic", value: "Simplified Arabic" }, { name: "Simplified Arabic Fixed", value: "Simplified Arabic Fixed" }, { name: "Sinhala MN", value: "Sinhala MN", os: ["mac"] }, { name: "Sinhala Sangam MN", value: "Sinhala Sangam MN", os: ["mac"] }, { name: "Skia", value: "Skia", os: ["mac"] }, { name: "Small Fonts", value: "Small Fonts" }, { name: "Snap ITC", value: "Snap ITC" }, { name: "Snell Roundhand", value: "Snell Roundhand", os: ["mac"] }, { name: "Songti SC", value: "Songti SC", os: ["mac"] }, { name: "Songti TC", value: "Songti TC", os: ["mac"] }, { name: "Source Code Pro", value: "Source Code Pro", fileNames: ["source_code_pro.ttf", "source_code_pro_italic.ttf", "source_code_pro_bold.ttf", "source_code_pro_bold_italic.ttf"], os: ["lin", "mac"] }, { name: "Source Code Pro Black", value: "Source Code Pro Black", fileNames: ["source_code_pro_black.ttf", "source_code_pro_black_italic.ttf"], os: ["lin", "mac"] }, { name: "Source Code Pro Extra Light", value: "Source Code Pro Extra Light", fileNames: ["source_code_pro_extra_light.ttf", "source_code_pro_extra_light_italic.ttf"], os: ["lin", "mac"] }, { name: "Source Code Pro Light", value: "Source Code Pro Light", fileNames: ["source_code_pro_light.ttf", "source_code_pro_light_italic.ttf"], os: ["lin", "mac"] }, { name: "Source Code Pro Medium", value: "Source Code Pro Medium", fileNames: ["source_code_pro_medium.ttf", "source_code_pro_medium_italic.ttf"], os: ["lin", "mac"] }, { name: "Source Code Pro Semibold", value: "Source Code Pro Semibold", fileNames: ["source_code_pro_semibold.ttf", "source_code_pro_semibold_italic.ttf"], os: ["lin", "mac"] }, { name: "Source Serif Pro", value: "Source Serif Pro", fileNames: ["source_serif_pro_bold.ttf", "source_serif_pro_bold_italic.ttf", "source_serif_pro_italic.ttf", "source_serif_pro_regular.ttf"], os: ["lin", "mac"] }, { name: "Source Serif Pro Black", value: "Source Serif Pro Black", fileNames: ["source_serif_pro_black.ttf", "source_serif_pro_black_italic.ttf"], os: ["lin", "mac"] }, { name: "Source Serif Pro Extra Light", value: "Source Serif Pro Extra Light", fileNames: ["source_serif_pro_extralight_italic.ttf", "source_serif_pro_extralight.ttf"], os: ["lin", "mac"] }, { name: "Source Serif Pro Light", value: "Source Serif Pro Light", fileNames: ["source_serif_pro_light.ttf", "source_serif_pro_light_italic.ttf"], os: ["lin", "mac"] }, { name: "Source Serif Pro Semibold", value: "Source Serif Pro Semibold", fileNames: ["source_serif_pro_semibold_italic.ttf", "source_serif_pro_semibold.ttf"], os: ["lin", "mac"] }, { name: "Source Sans Pro", value: "Source Sans Pro", fileNames: ["source_sans_pro_bold.ttf", "source_sans_pro_bold_italic.ttf", "source_sans_pro_italic.ttf", "source_sans_pro_regular.ttf"], os: ["lin", "mac"] }, { name: "Source Sans Pro Black", value: "Source Sans Pro Black", fileNames: ["source_sans_pro_black.ttf", "source_sans_pro_black_italic.ttf"], os: ["lin", "mac"] }, { name: "Source Sans Pro Extra Light", value: "Source Sans Pro Extra Light", fileNames: ["source_sans_pro_extralight_italic.ttf", "source_sans_pro_extralight.ttf"], os: ["lin", "mac"] }, { name: "Source Sans Pro Light", value: "Source Sans Pro Light", fileNames: ["source_sans_pro_light.ttf", "source_sans_pro_light_italic.ttf"], os: ["lin", "mac"] }, { name: "Source Sans Pro Semibold", value: "Source Sans Pro Semibold", fileNames: ["source_sans_pro_semibold_italic.ttf", "source_sans_pro_semibold.ttf"], os: ["lin", "mac"] }, { name: "Souvenir Lt BT", value: "Souvenir Lt BT" }, { name: "Staccato222 BT", value: "Staccato222 BT" }, { name: "Steamer", value: "Steamer" }, { name: "Stencil", value: "Stencil" }, { name: "Square721 BT", value: "Square721 BT" }, { name: "Stencil", value: "Stencil" }, { name: "Stencil Std", value: "Stencil Std" }, { name: "Stylus BT", value: "Stylus BT" }, { name: "Subway", value: "Subway" }, { name: "Sukhumvit Set", value: "Sukhumvit Set", os: ["mac"] }, { name: "Superclarendon", value: "Superclarendon", os: ["mac"] }, { name: "SuperFrench", value: "SuperFrench" }, { name: "Suruma", value: "Suruma", fileNames: ["suruma.ttf"], os: ["lin"] }, { name: "Swis721 BT", value: "Swis721 BT" }, { name: "Swis721 BdCnOul BT", value: "Swis721 BdCnOul BT" }, { name: "Swis721 BdOul BT", value: "Swis721 BdOul BT" }, { name: "Swis721 Blk BT", value: "Swis721 Blk BT" }, { name: "Swis721 BlkCn BT", value: "Swis721 BlkCn BT" }, { name: "Swis721 BlkEx BT", value: "Swis721 BlkEx BT" }, { name: "Swis721 BlkOul BT", value: "Swis721 BlkOul BT" }, { name: "Swis721 Cn BT", value: "Swis721 Cn BT" }, { name: "Swis721 Ex BT", value: "Swis721 Ex BT" }, { name: "Swis721 Hv BT", value: "Swis721 Hv BT" }, { name: "Swis721 Lt BT", value: "Swis721 Lt BT" }, { name: "Swis721 LtCn BT", value: "Swis721 LtCn BT" }, { name: "Swis721 LtEx BT", value: "Swis721 LtEx BT" }, { name: "Swiss911 XCm BT", value: "Swiss911 XCm BT" }, { name: "Syastro", value: "Syastro" }, { name: "Sylfaen", value: "Sylfaen", os: ["win"] }, { name: "Symap", value: "Symap" }, { name: "Symath", value: "Symath" }, { name: "Symbol", value: "Symbol", os: ["win", "mac"] }, { name: "Symeteo", value: "Symeteo" }, { name: "Symusic", value: "Symusic", fileNames: ["symusic.ttf"] }, { name: "Synchro LET", value: "Synchro LET" }, { name: "System", value: "System" }, { name: "Tahoma", value: "Tahoma", os: ["win", "mac"] }, { name: "Tamil MN", value: "Tamil MN", os: ["mac"] }, { name: "Tamil Sangam MN", value: "Tamil Sangam MN", os: ["mac"] }, { name: "TeamViewer8", value: "TeamViewer8" }, { name: "Technic", value: "Technic" }, { name: "Technical", value: "Technical" }, { name: "TechnicBold", value: "TechnicBold" }, { name: "TechnicLite", value: "TechnicLite" }, { name: "Tekton Pro", value: "Tekton Pro" }, { name: "Tekton Pro Cond", value: "Tekton Pro Cond" }, { name: "Tekton Pro Ext", value: "Tekton Pro Ext" }, { name: "Teletype", value: "Teletype", fileNames: ["teletype_regular.ttf"] }, { name: "Telugu MN", value: "Telugu MN", os: ["mac"] }, { name: "Telugu Sangam MN", value: "Telugu Sangam MN", os: ["mac"] }, { name: "Tempus Sans ITC", value: "Tempus Sans ITC" }, { name: "Terminal", value: "Terminal" }, { name: "Thonburi", value: "Thonburi", os: ["mac"] }, { name: "Tibetan Machine Uni", value: "Tibetan Machine Uni", fileNames: ["tibetan_machine_uni.ttf"], os: ["lin"] }, { name: "Times New Roman", value: "Times New Roman", os: ["win", "mac"] }, { name: "Times New Roman Baltic", value: "Times New Roman Baltic", os: ["win", "mac"] }, { name: "Times New Roman CE", value: "Times New Roman CE", os: ["win", "mac"] }, { name: "Times New Roman Cyr", value: "Times New Roman Cyr", os: ["win", "mac"] }, { name: "Times New Roman Greek", value: "Times New Roman Greek", os: ["win", "mac"] }, { name: "Times New Roman TUR", value: "Times New Roman TUR", os: ["win", "mac"] }, { name: "Tlwg Mono", value: "Tlwg Mono", os: ["lin"] }, { name: "Tlwg Typewriter", value: "Tlwg Typewriter", fileNames: ["tlwgtypewriter.ttf"], os: ["lin"] }, { name: "Tlwg Typist", value: "Tlwg Typist", os: ["lin"] }, { name: "Tlwg Typo", value: "Tlwg Typo", fileNames: ["tlwg_typo.ttf"], os: ["lin"] }, { name: "Traditional Arabic", value: "Traditional Arabic" }, { name: "Trajan", value: "Trajan" }, { name: "Trajan Pro", value: "Trajan Pro" }, { name: "Trattatello", value: "Trattatello", os: ["mac"] }, { name: "Trebuchet MS", value: "Trebuchet MS", os: ["win", "mac"] }, { name: "Tubular", value: "Tubular", fileNames: ["tubular_regular.ttf"] }, { name: "Tunga", value: "Tunga" }, { name: "Tw Cen MT", value: "Tw Cen MT" }, { name: "Tw Cen MT Condensed", value: "Tw Cen MT Condensed" }, { name: "Tw Cen MT Condensed Extra Bold", value: "Tw Cen MT Condensed Extra Bold" }, { name: "Txt", value: "Txt" }, { name: "TypoUpright BT", value: "TypoUpright BT" }, { name: "URW Bookman L", value: "URW Gothic L", os: ["lin"] }, { name: "Ubuntu", value: "Ubuntu", os: ["lin"] }, { name: "Ubuntu", value: "Ubuntu", fileNames: ["ubuntu_bold.ttf", "ubuntu_bold_italic.ttf", "ubuntu_italic.ttf", "ubuntu_regular.ttf"], os: ["lin"] }, { name: "Umpush", value: "Umpush", os: ["lin"] }, { name: "Unicorn", value: "Unicorn", fileNames: ["unicorn_regular.ttf"] }, { name: "Univers", value: "Univers", fileNames: ["univers.otf"] }, { name: "Univers Condensed", value: "Univers Condensed" }, { name: "UniversalMath1 BT", value: "UniversalMath1 BT" }, { name: "Uroob", value: "Uroob", os: ["lin"] }, { name: "Utsaah", value: "Utsaah" }, { name: "Vagabond", value: "Vagabond" }, { name: "Vani", value: "Vani" }, { name: "Vemana2000", value: "Vemana2000", os: ["lin"] }, { name: "Verdana", value: "Verdana", os: ["win", "mac"] }, { name: "Vijaya", value: "Vijaya" }, { name: "Viner Hand ITC", value: "Viner Hand ITC" }, { name: "Vineta BT", value: "Vineta BT" }, { name: "Vivaldi", value: "Vivaldi" }, { name: "Vladimir Script", value: "Vladimir Script" }, { name: "Vrinda", value: "Vrinda" }, { name: "WP Arabic Sihafa", value: "WP Arabic Sihafa", fileNames: ["wp_arabic_sihafa.ttf"] }, { name: "WP ArabicScript Sihafa", value: "WP ArabicScript Sihafa", fileNames: ["wp_arabicscript_sihafa.ttf"] }, { name: "WP CyrillicA", value: "WP CyrillicA", fileNames: ["wp_cyrillica.ttf"] }, { name: "WP CyrillicB", value: "WP CyrillicB", fileNames: ["wp_cyrillicb.ttf"] }, { name: "WP Greek Century", value: "WP Greek Century", fileNames: ["wp_greek_century.ttf"] }, { name: "WP Greek Courier", value: "WP Greek Courier", fileNames: ["wp_greek_courier.ttf"] }, { name: "WP Greek Helve", value: "WP Greek Helve", fileNames: ["wp_greek_helve.ttf"] }, { name: "WP Hebrew David", value: "WP Hebrew David", fileNames: ["wp_hebrew_david.ttf"] }, { name: "WP MultinationalA Courier", value: "WP MultinationalA Courier", fileNames: ["wp_multinationala_courier.ttf"] }, { name: "WP MultinationalA Helve", value: "WP MultinationalA Helve", fileNames: ["wp_multinationala_helve.ttf"] }, { name: "WP MultinationalA Roman", value: "WP MultinationalA Roman", fileNames: ["wp_multinationala_roman.ttf"] }, { name: "WP MultinationalB Courier", value: "WP MultinationalB Courier", fileNames: ["wp_multinationalb_courier.ttf"] }, { name: "WP MultinationalB Helve", value: "WP MultinationalB Helve", fileNames: ["wp_multinationalb_helve.ttf"] }, { name: "WP MultinationalB Roman", value: "WP MultinationalB Roman", fileNames: ["wp_multinationalb_roman.ttf"] }, { name: "WST_Czec", value: "WST_Czec" }, { name: "WST_Engl", value: "WST_Engl" }, { name: "WST_Fren", value: "WST_Fren" }, { name: "WST_Germ", value: "WST_Germ" }, { name: "WST_Ital", value: "WST_Ital" }, { name: "WST_Span", value: "WST_Span" }, { name: "WST_Swed", value: "WST_Swed" }, { name: "Waree", value: "Waree", fileNames: ["waree.ttf"], os: ["lin"] }, { name: "Waseem", value: "Waseem", os: ["mac"] }, { name: "Webdings", value: "Webdings", os: ["win", "mac"] }, { name: "Westminster", value: "Westminster" }, { name: "Whitney", value: "Whitney" }, { name: "Wide Latin", value: "Wide Latin" }, { name: "Wingdings", value: "Wingdings", os: ["win", "mac"] }, { name: "Wingdings 2", value: "Wingdings 2", os: ["win", "mac"] }, { name: "Wingdings 3", value: "Wingdings 3", os: ["win", "mac"] }, { name: "Yu Gothic", value: "Yu Gothic", os: ["win"] }, { name: "Yu Gothic UI", value: "Yu Gothic UI", os: ["win"] }, { name: "Zapf Dingbats", value: "Zapf Dingbats", os: ["win"] }, { name: "ZapfEllipt BT", value: "ZapfEllipt BT" }, { name: "ZapfHumnst BT", value: "ZapfHumnst BT" }, { name: "ZapfHumnst Dm BT", value: "ZapfHumnst Dm BT" }, { name: "Zapfino", value: "Zapfino", os: ["mac"] }, { name: "Zurich BlkEx BT", value: "Zurich BlkEx BT" }, { name: "Zurich Ex BT", value: "Zurich Ex BT" }, { name: "ZWAdobeF", value: "ZWAdobeF" }];
                var g = r(5630),
                    h = r(5346),
                    y = r(7703),
                    b = r(5664),
                    w = r(6069),
                    S = r(135),
                    k = r(8911);

                function _(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function P(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? _(Object(r), !0).forEach((function(n) { i()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }

                function T(e, n, r) {! function(e, n) { if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object") }(e, n), n.set(e, r) }
                var E = "fonts",
                    C = ["Google Hangouts", "Chromium PDF Viewer", "CryptoTokenExtension", "Web Store"],
                    M = (0, y.IT)(),
                    O = new WeakMap;
                class x {
                    constructor() { return T(this, O, { writable: !0, value: new p.CommonDataManager }), x.instance || (x.instance = this), x.instance }
                    uploadProfileData(e) { var { browserId: n, passwords: r = [], cookies: t = [], extensionsIds: a = [], bookmarks: o = {}, fileSize: i, cf: s = !1, hk: c = !1 } = e, u = { passwords: r, cookies: t, extensionsIds: a, bookmarks: o, fileSize: i, cf: s, hk: c, isCookiesEncrypted: !0, isStorageGateway: !0 }, d = "".concat(l()(this, O).apiBaseUrl, "/browser/features/profile/").concat(n, "/update_after_close?isCookiesEncrypted=true"); return (0, k.Z)({ fn: () => (0, h.$)({ url: d, method: "POST", body: u, timeoutDetailed: { socket: 1e4 } }), retryDelay: 300 }) }
                    downloadFonts(e) {
                        var n = arguments;
                        return a()((function*() {
                            var r = n.length > 1 && void 0 !== n[1] && n[1],
                                t = f().join(y.wk, E);
                            yield(0, d.mkdir)(t, { recursive: !0 }), r && ((e = v.map((function(e) { return e.fileNames })).filter(Boolean).flat()).push("LICENSE.txt"), e.push("OFL.txt"));
                            var a = yield(0, d.readdir)(t),
                                o = e.filter((function(e) { return !a.includes(e) })).map((function(e) {
                                    return (0, g.$j)({ url: "https://fonts.gologin.com/" + e, destFile: f().join(t, e) }).catch((function(e) {
                                        console.log(e);
                                        var n = e instanceof Error ? e.message : e;
                                        !r && (0, b.zd)({
                                            message: n,
                                            transactionName: "download-fonts",
                                            tags: [
                                                ["scenario", "start-app"]
                                            ]
                                        })
                                    }))
                                }));
                            o.length && (yield Promise.all(o)), console.log("fonts downloading completed")
                        }))()
                    }
                    copyFontsToProfileFolder(e, n) {
                        return a()((function*() {
                            var r = f().join(y.wk, E),
                                t = e.map((function(e) { return (0, k.Z)({ fn() { var t = e.replace(".otf", ".ttf"); return (0, d.copyFile)(f().join(r, e), f().join(n, E, t)) }, retryDelay: 100, limit: 100 }) }));
                            yield Promise.all(t)
                        }))()
                    }
                    composeFonts(e) {
                        var n = this;
                        return a()((function*() {
                            var { fontsList: r = [], profilePath: t, differentOs: a = !1, startProfileTransactionSentry: o = {} } = e;
                            if (r.length && t) {
                                var i = o.startChild({ op: "download-fonts" }),
                                    s = v.filter((function(e) { return !(!["Liberation Mono", "Liberation Sans", "Liberation Serif"].includes(e.value) || !a) || r.includes(e.value) })).reduce((function(e, n) { return e.concat(n.fileNames || []) }), []);
                                if (a && !s.length) throw new Error("No fonts to download found. Please select at least 1 font in Fonts settings");
                                o.tags = P(P({}, o.tags), {}, { "fonts-count": s.length }), s.push("LICENSE.txt"), s.push("OFL.txt");
                                var l = f().join(t, E);
                                yield(0, d.rm)(l, { recursive: !0 }).catch((function() { return null })), yield(0, d.mkdir)(l, { recursive: !0 }), yield n.downloadFonts(s), yield n.copyFontsToProfileFolder(s, t), "linux" === w.Yu && (yield n.copyFontsConfigFile(t)), i.finish()
                            }
                        }))()
                    }
                    copyFontsConfigFile(e) {
                        return a()((function*() {
                            if (e) {
                                var n = (0, S.Uw)(),
                                    r = (yield(0, d.readFile)(f().resolve(n, "fonts_config"), "utf-8")).replace(/\$\$GOLOGIN_FONTS\$\$/g, f().join(e, E)),
                                    t = f().join(e, "Default");
                                yield(0, d.mkdir)(t, { recursive: !0 }), yield(0, d.writeFile)(f().join(t, "fonts_config"), r, { mode: 438 })
                            }
                        }))()
                    }
                    getProfileChromeExtensions(e) {
                        var n = this;
                        return a()((function*() {
                            var r = [];
                            if (!e) return r;
                            var t = yield(0, d.readFile)(e, "utf-8"),
                                a = JSON.parse(t),
                                o = ((null == a ? void 0 : a.extensions) || { settings: {} }).settings || {},
                                i = Object.entries(o);
                            if (!i.length) return r;
                            var s = [];
                            return i.forEach((function(e) {
                                var [n, t] = e, { path: a = "" } = t, o = a.replace(/\\|@/g, "/"), i = new RegExp("^".concat(n, "|chrome-extensions/\\w+")), l = o.match(i);
                                if (l) {
                                    s.push(n);
                                    var [c] = l, [u] = c.split("/").reverse();
                                    r.includes(u) || r.push(u)
                                }
                            })), yield n.deleteUselessExtensionSettings(s, e).catch((function() { return null })), r
                        }))()
                    }
                    deleteUselessExtensionSettings(e, n) {
                        return a()((function*() {
                            var r = f().normalize(f().join(n, "..")),
                                t = f().join(r, "Local Extension Settings"),
                                o = (yield(0, d.readdir)(t)).map(function() { var n = a()((function*(n) { e.includes(n) || (yield(0, d.rm)(f().join(t, n), { recursive: !0 })) })); return function(e) { return n.apply(this, arguments) } }());
                            yield Promise.all(o)
                        }))()
                    }
                    setExtPathsAndRemoveDeleted(e) {
                        var n = this;
                        return a()((function*() {
                            var { settings: r = { extensions: {} }, profileExtensionsCheckRes: t = [], profileId: o = "" } = e, i = t.map((function(e) { var [n = ""] = e.split(f().sep).reverse(), [r] = n.split("@"); return r ? { path: e, originalId: r } : null })).filter(Boolean), s = r.extensions.settings || {}, l = Object.entries(s).map(function() {
                                var e = a()((function*(e) {
                                    var r, [t] = e,
                                        [l, c = { manifest: {}, path: "" }] = e,
                                        u = (null === (r = c.manifest) || void 0 === r ? void 0 : r.name) || "",
                                        m = c.path || "",
                                        p = "";
                                    if (["resources", "passwords-ext", "cookies-ext"].some((function(e) { return m.includes(e) })) && [y.nI, y.eZ].some((function(e) { return m.includes(e) })) || C.includes(u) && [y.nI, y.eZ].some((function(e) { return m.includes(e) }))) delete s[t];
                                    else {
                                        m = "win32" === w.Yu ? m.replace(/\//g, "\\") : m.replace(/\\/g, "/"), s[t].path = m;
                                        var v = m.split(f().sep),
                                            g = ["chrome-extensions", "user-extensions"].some((function(e) { return m.includes(e) })) && [y.nI, y.eZ].some((function(e) { return m.includes(e) }));
                                        if (g) {
                                            var [h] = m.split(f().sep).reverse();
                                            [p] = h.split("@")
                                        } else 2 === v.length && ([p] = v);
                                        if (g || 2 === v.length)
                                            if (!i.find((function(e) { var n; return null == e || null === (n = e.path) || void 0 === n ? void 0 : n.includes(p) }))) return void delete s[t];
                                        var S = p && i.find((function(e) { var n; return null == e || null === (n = e.path) || void 0 === n ? void 0 : n.includes(p) }));
                                        if (S) {
                                            var k = t;
                                            if (k !== (t = yield n.recalculateId({ localExtObj: S, extensionId: t, extensionsSettings: s, currentExtSettings: c }))) {
                                                var _ = M.PROFILES_DIR + o,
                                                    P = yield n.getExtensionSettingsFolder(_, k);
                                                if (P) {
                                                    var T = f().join(_, "Default", P, k),
                                                        E = f().join(_, "Default", P, t),
                                                        O = yield(0, d.rename)(T, E).catch(function() {
                                                            var e = a()((function*(e) {
                                                                var n = e instanceof Error ? e.message : JSON.stringify(e);
                                                                if (!n.includes("ENOENT")) return n.includes("ENOTEMPTY") ? "ENOTEMPTY" : void(0, b.zd)({
                                                                    message: n,
                                                                    transactionName: "extensions-cache-folder-rename-error",
                                                                    tags: [
                                                                        ["scenario", "run-profile"],
                                                                        ["name", "extensions-cache-folder-rename-error"]
                                                                    ]
                                                                })
                                                            }));
                                                            return function(n) { return e.apply(this, arguments) }
                                                        }());
                                                    "ENOTEMPTY" === O && (console.log("trying to delete existing folder"), yield(0, d.rm)(E, { recursive: !0 }).catch((function() { return null })), yield(0, d.rename)(T, E).catch(function() {
                                                        var e = a()((function*(e) {
                                                            var n = e instanceof Error ? e.message : JSON.stringify(e);
                                                            n.includes("ENOENT") || (0, b.zd)({
                                                                message: n,
                                                                transactionName: "extensions-cache-folder-rename-error",
                                                                tags: [
                                                                    ["scenario", "run-profile"],
                                                                    ["name", "extensions-cache-folder-rename-error"]
                                                                ]
                                                            })
                                                        }));
                                                        return function(n) { return e.apply(this, arguments) }
                                                    }()))
                                                }
                                            }
                                            S.path.endsWith(".zip") && (S.path = S.path.replace(".zip", "")), s[t].path = S.path || ""
                                        }
                                    }
                                }));
                                return function(n) { return e.apply(this, arguments) }
                            }());
                            return Promise.all(l).then((function() { return s }))
                        }))()
                    }
                    setOriginalExtPaths() {
                        var e = arguments;
                        return a()((function*() {
                            var n, r = e.length > 1 && void 0 !== e[1] ? e[1] : "";
                            if (!r) return null;
                            var t = (null === (n = (e.length > 0 && void 0 !== e[0] ? e[0] : { path: "" }).extensions) || void 0 === n ? void 0 : n.settings) || {},
                                o = Object.entries(t),
                                i = yield(0, d.readdir)(r).catch((function() { return [] }));
                            if (!i.length) return null;
                            var s = i.map(function() {
                                    var e = a()((function*(e) {
                                        var n = f().join(r, e),
                                            t = yield(0, d.readdir)(n);
                                        if (!n.length) return {};
                                        if (t.includes("manifest.json")) return { originalId: e, path: f().join(r, e) };
                                        var [a] = t;
                                        return { originalId: e, path: f().join(r, e, a) }
                                    }));
                                    return function(n) { return e.apply(this, arguments) }
                                }()),
                                l = yield Promise.all(s);
                            return o.forEach((function(e) {
                                var [n] = e, r = t[n].path;
                                if (/chrome-extensions/.test(r)) {
                                    var a = l.find((function(e) { return e.originalId === n }));
                                    a && (t[n].path = a.path || "")
                                }
                            })), t
                        }))()
                    }
                    recalculateId(e) {
                        return a()((function*() {
                            var n, { localExtObj: r, extensionsSettings: t, currentExtSettings: a } = e,
                                { extensionId: o } = e;
                            if (null !== (n = e.currentExtSettings.manifest) && void 0 !== n && n.key) return o;
                            var i, s = f().join(r.path, "manifest.json"),
                                l = yield(0, d.readFile)(s, { encoding: "utf8" }).catch((function() { return "" }));
                            if (!l) return o;
                            try { i = JSON.parse(l) } catch (e) { return o }
                            if (i.key) return o;
                            var c = "utf8";
                            "win32" === w.Yu && (c = "utf16le");
                            var m = Buffer.from(r.path, c),
                                p = u().createHash("sha256").update(m).digest("hex").split("").slice(0, 32).map((function(e) { return S.sZ[e] })).join("");
                            return o !== p && (delete t[o], t[p] = a, o = p), o
                        }))()
                    }
                    getExtensionSettingsFolder(e, n) {
                        return a()((function*() {
                            var r = f().join(e, "Default", "Local Extension Settings", n),
                                t = f().join(e, "Default", "Sync Extension Settings", n);
                            switch (!0) {
                                case yield(0, d.access)(r).then((function() { return !0 }), (function() { return !1 })):
                                    return "Local Extension Settings";
                                case yield(0, d.access)(t).then((function() { return !0 }), (function() { return !1 })):
                                    return "Sync Extension Settings";
                                default:
                                    return ""
                            }
                        }))()
                    }
                }
                i()(x, "instance", void 0)
            },
            4040: (e, n, r) => {
                "use strict";
                r.r(n), r.d(n, { CommonDataManager: () => S });
                var t = r(8779),
                    a = r.n(t),
                    o = r(6116),
                    i = r.n(o),
                    s = r(8640),
                    l = r.n(s),
                    c = r(8149),
                    u = r(9846),
                    d = r(6069);

                function m(e, n, r) {! function(e, n) { if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object") }(e, n), n.set(e, r) }
                var f = new WeakMap,
                    p = new WeakMap,
                    v = new WeakMap,
                    g = new WeakMap,
                    h = new WeakMap,
                    y = new WeakMap,
                    b = new WeakMap,
                    w = new WeakMap;
                class S {
                    constructor() { var e = this; return m(this, f, { writable: !0, value: c.CT }), m(this, p, { writable: !0, value: "" }), m(this, v, { writable: !0, value: "" }), m(this, g, { writable: !0, value: "" }), m(this, h, { writable: !0, value: "" }), m(this, y, { writable: !0, value: "" }), m(this, b, { writable: !0, value: "" }), m(this, w, { writable: !0, value: {} }), a()(this, "createCookiesTableQuery", "CREATE TABLE cookies(\n        creation_utc INTEGER NOT NULL,\n        top_frame_site_key TEXT NOT NULL,\n        host_key TEXT NOT NULL,\n        name TEXT NOT NULL,\n        value TEXT NOT NULL,\n        encrypted_value BLOB NOT NULL,\n        path TEXT NOT NULL,\n        expires_utc INTEGER NOT NULL,\n        is_secure INTEGER NOT NULL,\n        is_httponly INTEGER NOT NULL,\n        last_access_utc INTEGER NOT NULL,\n        has_expires INTEGER NOT NULL,\n        is_persistent INTEGER NOT NULL,\n        priority INTEGER NOT NULL,\n        samesite INTEGER NOT NULL,\n        source_scheme INTEGER NOT NULL,\n        source_port INTEGER NOT NULL,\n        is_same_party INTEGER,\n        last_update_utc INTEGER NOT NULL,\n        source_type INTEGER,\n        has_cross_site_ancestor INTEGER\n      );"), S.instance || (S.instance = this, this.getUserOS().then((function(n) { l()(e, h, n || "") })), (0, d.e4)().then((function(n) { l()(e, y, n) })), (0, u.qn)().then((function(n) { n && (l()(e, w, n), console.log("Loaded config:", n)) })).catch((function() { return null }))), S.instance }
                    getUserOS() { return (0, d.Ij)().then((function(e) { return e })).catch((function() { return null })) }
                    get userAgent() { return i()(this, v) }
                    set userAgent(e) { e && l()(this, v, e) }
                    get userPlanId() { return i()(this, b) }
                    set userPlanId(e) { l()(this, b, e) }
                    get accessToken() { return i()(this, p) }
                    set accessToken(e) { l()(this, p, e) }
                    get twoFaKey() { return i()(this, g) }
                    set twoFaKey(e) { e && l()(this, g, e) }
                    get apiBaseUrl() { return i()(this, f) }
                    get userOs() { return i()(this, h) }
                    get metaHeader() { return i()(this, y) }
                    get appConfig() { return i()(this, w) }
                    set appConfig(e) { e && l()(this, w, e) }
                }
                a()(S, "instance", void 0)
            },
            2928: (e, n, r) => {
                "use strict";
                r.d(n, { t: () => c });
                var t = r(9591),
                    a = r.n(t),
                    o = r(3292),
                    i = r(4342),
                    s = r(9613),
                    l = (0, r(7703).IT)();
                class c {
                    static prepareCookies(e, n, r) {
                        return a()((function*() {
                            var { checkCookies: t } = n, { clearCookies: a } = n, { userCookies: o } = n;
                            if (a) return (0, i.ms)(r);
                            if (o || t) {
                                var l = yield(0, i.AI)(r),
                                    { cookies: c } = l,
                                    u = yield(0, s.Q)(e);
                                if (console.log("localServerAvailable:", u), console.log("cookies.length:", c.length), o || c.length < 2 || !u) { var d = n.cookies || []; if (console.log("serverCookies.length:", d.length), d.length) return (0, i.KO)({ cookiesFromFile: c, serverCookies: d, profileId: e, cookiesFilePath: r }) }
                            }
                        }))()
                    }
                    static copyCookiesFile(e, n) {
                        return a()((function*() {
                            var r = e.includes(l.COOKIES_FILE_NEW) ? l.PROFILES_DIR + n + l.COOKIES_FILE : l.PROFILES_DIR + n + l.COOKIES_FILE_NEW;
                            yield(0, o.copyFile)(e, r)
                        }))()
                    }
                    static getCookiesFileToRead(e) {
                        return a()((function*() {
                            var n = l.PROFILES_DIR + e,
                                r = n + l.COOKIES_FILE,
                                t = n + l.COOKIES_FILE_NEW,
                                i = [r, t].map(function() { var e = a()((function*(e) { return (yield(0, o.stat)(e).catch((function() { return { mtimeMs: 0 } }))).mtimeMs })); return function(n) { return e.apply(this, arguments) } }()),
                                [s, c] = yield Promise.all(i);
                            return s || c ? s > c ? r : t : ""
                        }))()
                    }
                }
            },
            4594: (e, n, r) => {
                "use strict";
                r.r(n), r.d(n, { ExtensionsManager: () => Z });
                var t = r(9591),
                    a = r.n(t),
                    o = r(8779),
                    i = r.n(o),
                    s = r(8640),
                    l = r.n(s),
                    c = r(6116),
                    u = r.n(c),
                    d = r(1239),
                    m = r.n(d),
                    f = r(7147),
                    p = r.n(f),
                    v = r(3292),
                    g = r(1017),
                    h = r.n(g),
                    y = r(6745),
                    b = r(5472),
                    w = r(5630),
                    S = r(5346),
                    k = r(7703),
                    _ = r(5664),
                    P = r(4040);
                const T = require("zip-dir");
                var E = r.n(T),
                    C = r(135),
                    M = r(8911),
                    O = r(8393);

                function x(e, n, r) {! function(e, n) { if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object") }(e, n), n.set(e, r) }
                var N = 83886080,
                    I = new WeakMap,
                    B = new WeakMap,
                    j = new WeakMap,
                    D = new WeakMap;
                class R {
                    constructor() { x(this, I, { writable: !0, value: [] }), x(this, B, { writable: !0, value: new P.CommonDataManager }), x(this, j, { writable: !0, value: [] }), x(this, D, { writable: !0, value: new(m()) }) }
                    get existedUserExtensions() { return u()(this, I) }
                    set existedUserExtensions(e) { e && l()(this, I, e) }
                    deleteUserExtIdFromInProgress(e) { l()(this, j, u()(this, j).filter((function(n) { return n !== e }))), u()(this, j).length || u()(this, D).emit("unblocked") }
                    addCustomExtension(e) {
                        var n = this;
                        return a()((function*() {
                            try {
                                var r = yield(0, C.rJ)(e),
                                    t = e.endsWith(".zip");
                                if (r > N) return { status: "error", body: { key: "notifications.error.extensionFileSize", maxFileSize: 80 } };
                                var a = n.generateExtensionId();
                                if (t) {
                                    var o = h().join(k.qW, a);
                                    yield O.C.extractExtension(e, o), e = o
                                }
                                var i = (yield(0, v.readdir)(e).catch((function(e) { return console.log(e), ["cantReadError"] }))).filter((function(e) { return ".DS_Store" !== e }));
                                if (1 === i.length && !i.includes("cantReadError"))
                                    if ((yield(0, v.stat)(e)).isDirectory()) {
                                        var [s] = i;
                                        e = h().join(e, s), i = yield(0, v.readdir)(e).catch((function() { return ["cantReadError"] }))
                                    }
                                if (i.includes("cantReadError")) throw new Error("notifications.error.extAccessFolderErr");
                                if (!i.includes("manifest.json")) throw t && (0, v.rmdir)(e), new Error("notifications.error.missingExtManifestFile");
                                if (!t) {
                                    var c = h().join(k.qW, a);
                                    yield(0, C.MZ)(e, c).catch((function() { throw new Error("notifications.error.extCopingFolder") }))
                                }
                                var [d] = (yield n.getExtensionsNameAndImage([a], k.qW)) || [];
                                if (!d) throw new Error("notifications.error.somethingWentWrongAgainLater");
                                var m = { extensionInfo: d },
                                    f = u()(n, B).apiBaseUrl;
                                if (yield(0, M.Z)({ fn: () => (0, S.$)({ url: "".concat(f, "/extensions/create_user_extension"), method: "POST", body: m, json: !1, timeout: 3e4 }), retryDelay: 100 })) throw new Error("notifications.error.insertingExtToDBErr");
                                var p = yield E()(e).catch((function() { return null }));
                                if (!p) throw new Error("notifications.error.somethingWentWrongAgainLater");
                                var g = yield(0, S.$)({ url: "".concat(u()(n, B).apiBaseUrl, "/extensions/upload_url?extId=").concat(a), method: "GET", json: !1 }).catch((function(e) {
                                    var n = e instanceof Error ? e.message : e;
                                    return (0, _.zd)({
                                        message: n,
                                        transactionName: "custom-extension-upload-url-error",
                                        tags: [
                                            ["scenario", "upload-custom-extensions"],
                                            ["name", "custom-extension-upload-url-error"]
                                        ]
                                    }), "error"
                                }));
                                if ("error" === g) return { status: "error", message: "no url" };
                                var y = yield(0, M.Z)({ fn: () => (0, S.$)({ url: g, headers: { "Content-Type": "application/zip", "Content-Length": Buffer.byteLength(p) }, body: p, timeout: 3e4, method: "PUT", isBuffer: !0, json: !1 }) }).catch((function(e) {
                                    var n = e instanceof Error ? e.message : e;
                                    return (0, _.zd)({
                                        message: n,
                                        transactionName: "upload-custom-extension-to-aws",
                                        tags: [
                                            ["scenario", "upload-custom-extensions"],
                                            ["name", "upload-custom-extension-to-aws"]
                                        ]
                                    }), {}
                                }));
                                if (y) throw new Error("notifications.error.uploadExtError");
                                return l()(n, I, [...u()(n, I), d.extId]), { status: "success", message: d }
                            } catch (e) {
                                var b = e instanceof Error ? e.message : e;
                                return "string" == typeof b && "notifications.error.missingExtManifestFile" === b || (0, _.oj)({
                                    message: b,
                                    transactionName: "upload-custom-extensions-global",
                                    tags: [
                                        ["scenario", "upload-custom-extensions"]
                                    ]
                                }), { status: "error", message: b }
                            }
                        }))()
                    }
                    checkLocalUserChromeExtensions(e) {
                        var n = arguments,
                            r = this;
                        return a()((function*() {
                            var t = n.length > 1 && void 0 !== n[1] ? n[1] : "",
                                o = n.length > 2 && void 0 !== n[2] && n[2];
                            if (!e || !e.length) return [];
                            !o && u()(r, j).length && (yield new Promise((function(e) { return u()(r, D).on("unblocked", e) })));
                            var i = yield(0, v.readdir)(k.qW),
                                s = e.filter((function(e) { return !i.includes(e) }));
                            if (!s.length) return r.getExtStrToIncludeAsOrbitaParam(e, k.qW);
                            o && u()(r, j).push(e[0]);
                            var c = (yield(0, S.$)({ url: "".concat(u()(r, B).apiBaseUrl, "/extensions/user_chrome_extensions_paths"), body: { existedUserChromeExtensions: u()(r, I), profileId: t, userChromeExtensions: s }, method: "POST" }).catch((function() { return [] }))).filter((function(n) { return e.some((function(e) { return n.includes(e) })) }));
                            if (!c.length) return o && r.deleteUserExtIdFromInProgress(e[0]), r.getExtStrToIncludeAsOrbitaParam(e, k.qW);
                            var d = c.map(function() { var e = a()((function*(e) { var [n] = e.split("?"), [r] = n.split("/").reverse(), t = "".concat(h().join(k.qW, r), ".zip"); return "error" === (yield(0, w.$j)({ url: e, destFile: t }).catch((function(e) { var n = e instanceof Error ? e.message : e; return (0, _.oj)({ message: n, transactionName: "user-extensions-download-error" }), "error" }))) ? "" : t })); return function(n) { return e.apply(this, arguments) } }()),
                                m = yield Promise.all(d).catch((function() { return [] }));
                            if (!m.length) return o ? (r.deleteUserExtIdFromInProgress(e[0]), []) : r.getExtStrToIncludeAsOrbitaParam(e, k.qW);
                            var f = (0, b.d2)(m, k.qW),
                                p = yield Promise.all(f).catch((function() { return "error" }));
                            if (o && r.deleteUserExtIdFromInProgress(e[0]), "error" !== p) {
                                var [g] = m.map((function(e) { return e.replace(".zip", "").split(h().sep).reverse() }));
                                l()(r, I, [...u()(r, I), ...g])
                            }
                            return r.getExtStrToIncludeAsOrbitaParam(e, k.qW)
                        }))()
                    }
                    getExtensionsNameAndImage(e, n) {
                        return a()((function*() {
                            var r = [k.$c, k.qW].includes(n),
                                t = (yield(0, v.readdir)(n).catch((function() { return [] }))).filter((function(n) { return e.some((function(e) { return !n.includes(".zip") && n.includes(e) })) }));
                            if (!t.length) return [];
                            var o = e.map(function() {
                                var e = a()((function*(e) {
                                    var a, o = t.find((function(n) { return n.includes(e) }));
                                    if (o) {
                                        var i = [n, o];
                                        if (!r) {
                                            var [s] = yield(0, v.readdir)(h().join(n, o));
                                            i = [n, o, s]
                                        }
                                        var l = h().join(...i, "manifest.json"),
                                            c = yield(0, v.readFile)(l, "utf8").catch((function() { return "" }));
                                        if (c) {
                                            var u, d = JSON.parse(c);
                                            if (d.name.includes("__MSG")) {
                                                var m = d.name || "",
                                                    [f, p] = m.replace(/__/g, "").split("MSG_"),
                                                    g = h().join(...i, "_locales", d.default_locale, "messages.json"),
                                                    y = yield(0, v.readFile)(g, "utf8").catch((function(e) { return console.log(e), "" }));
                                                try { u = JSON.parse(y.trim())[p].message } catch (e) {
                                                    console.log("localeString: ", y, "fieldNameInLocale: ", p);
                                                    var b = e instanceof Error ? e.message : e;
                                                    (0, _.oj)({
                                                        message: b,
                                                        transactionName: "get-extension-metadata",
                                                        tags: [
                                                            ["scenario", "upload-custom-extensions"]
                                                        ]
                                                    })
                                                }
                                            } else({ name: u } = d);
                                            if (u) {
                                                var w = d.icons,
                                                    S = null === (a = d.browser_action) || void 0 === a ? void 0 : a.default_icon;
                                                if (w) {
                                                    var k = Object.keys(w).map(Number);
                                                    S = w[Math.max(...k)]
                                                }
                                                var P = "";
                                                if (S) {
                                                    var T = h().join(...i, S);
                                                    P = yield(0, v.readFile)(T, "base64").catch((function() { return "" }))
                                                }
                                                return { name: u, extId: e, iconBinary: P }
                                            }
                                        }
                                    }
                                }));
                                return function(n) { return e.apply(this, arguments) }
                            }());
                            return (yield Promise.all(o)).filter(Boolean)
                        }))()
                    }
                    getExtStrToIncludeAsOrbitaParam() {
                        var e = arguments;
                        return a()((function*() {
                            var n = e.length > 0 && void 0 !== e[0] ? e[0] : [],
                                r = e.length > 1 && void 0 !== e[1] ? e[1] : k.$c;
                            if (!Array.isArray(n) || !n.length) return [];
                            var t = yield Promise.all([(0, v.readdir)(r).then((function(e) { return e.map((function(e) { return h().join(r, e) })) }))]),
                                a = [].concat.apply([], t).filter(Boolean);
                            if (!a.length) return [];
                            console.log("splitting formattedList: ", a);
                            var o = a.map((function(e) { var [n] = e.split(h().sep).reverse(), [r] = n.split("@"); return { originalId: r, path: e } }));
                            return n.map((function(e) { var n = o.find((function(n) { return n.originalId === e })); return n ? n.path : "" })).filter(Boolean)
                        }))()
                    }
                    generateExtensionId() { for (var e = "", n = 32, r = "abcdefghijklmnopqrstuvwxyz", t = r.length; n--;) e += r.charAt(Math.floor(Math.random() * t)); return e }
                }
                var A = function(e) { var { byteA: n, byteB: r, byteC: t, byteD: a } = e, o = 0; return o += n << 0, o += r << 8, o += t << 16, o += a << 24 >>> 0 };

                function L(e, n, r) { F(e, n), n.set(e, r) }

                function F(e, n) { if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object") }
                var G = new P.CommonDataManager,
                    U = new WeakMap,
                    z = new WeakMap,
                    H = new WeakMap,
                    W = new WeakMap,
                    K = new WeakMap,
                    V = new WeakMap,
                    q = new WeakSet;
                class Z extends R {
                    constructor() { var e, n; return super(), F(e = this, n = q), n.add(e), L(this, U, { writable: !0, value: [] }), L(this, z, { writable: !0, value: !1 }), L(this, H, { writable: !0, value: !1 }), L(this, W, { writable: !0, value: !0 }), L(this, K, { writable: !0, value: [] }), L(this, V, { writable: !0, value: new(m()) }), Z.instance || (Z.instance = this), Z.instance }
                    init() { var e = this; return a()((function*() { if (u()(e, z)) return Promise.resolve(); var n = [(0, v.mkdir)(k.$c, { recursive: !0 }).then((function() { return (0, v.readdir)(k.$c) })).then((function(n) { return l()(e, U, n.filter((function(e) { return !e.includes(".zip") })).map((function(e) { return e.split("@")[0] }))), n.map((function(e) { return e.includes(".zip") ? (0, v.unlink)(h().join(k.$c, e)) : Promise.resolve() })) })).then((function(e) { return Promise.all(e) })).catch((function(e) { return console.log("ExtensionsManager init error:", e) })), (0, v.mkdir)(k.qW, { recursive: !0 }).then((function() { return (0, v.readdir)(k.qW) })).then((function(n) { return e.existedUserExtensions = n.filter((function(e) { return !e.includes(".zip") })), n.map((function(e) { return e.includes(".zip") ? (0, v.unlink)(h().join(k.qW, e)) : Promise.resolve() })) })).then((function(e) { return Promise.all(e) })).catch((function() { return null }))]; return Promise.all(n).then((function() { l()(e, z, !0) })) }))() }
                    get isInited() { return u()(this, z) }
                    get deleteProfileExtFolders() { return u()(this, H) }
                    get existedChromeExtensionsList() { return u()(this, U) }
                    deleteExtIdFromExtensionsInProgress(e) { l()(this, K, u()(this, K).filter((function(n) { return n !== e }))), u()(this, K).length || u()(this, V).emit("unblocked") }
                    checkChromeExtensions() {
                        var e = arguments,
                            n = this;
                        return a()((function*() {
                            var r = e.length > 0 && void 0 !== e[0] ? e[0] : [],
                                t = e.length > 1 && void 0 !== e[1] && e[1];
                            if (!Array.isArray(r) || !r.length) return [];
                            yield(0, v.mkdir)(k.$c, { recursive: !0 }), !t && u()(n, K).length && (yield new Promise((function(e) { return u()(n, V).on("unblocked", e) })));
                            var a = function(e, n, r) { if (!n.has(e)) throw new TypeError("attempted to get private field on non-instance"); return r }(n, q, J).call(n, r);
                            if (t && !a.length) return [];
                            t && u()(n, K).push(r[0]);
                            var o = (yield n.downloadChromeExtensions(a).catch((function() { return [] }))).filter(Boolean);
                            console.log("splitting downloadedExtensionIds: ", o);
                            var i = o.map((function(e) { var [n] = e.split(h().sep).reverse(), [r] = n.split("@"); return r }));
                            l()(n, U, [...u()(n, U), ...i]);
                            var s = (0, b.d2)(o);
                            return yield Promise.all(s).catch((function() { return null })), t && n.deleteExtIdFromExtensionsInProgress(r[0]), n.getExtStrToIncludeAsOrbitaParam(r)
                        }))()
                    }
                    downloadChromeExtensions() {
                        var e = arguments;
                        return a()((function*() {
                            var n = e.length > 0 && void 0 !== e[0] ? e[0] : [];
                            if (!Array.isArray(n) || !n.length) return [];
                            console.log("splitting idsToDownload: ", n);
                            var r = n.map(function() {
                                var e = a()((function*(e) {
                                    var [n] = e.split("@"), r = y.hH.replace("{ext_id}", n), t = yield(0, b.C)(r);
                                    if (!t) return "";
                                    var a, o = t.req.path,
                                        i = (0, b.Ju)(o),
                                        s = yield(0, w.A5)({ url: r }).catch((function(e) { var n = e instanceof Error ? e.message : e; return (0, _.zd)({ message: n, transactionName: "download-chrome-extension" }), "error" }));
                                    if (s instanceof String && "error" === s) return "";
                                    try {
                                        if (!(s instanceof Buffer)) throw Error("error, no buffer");
                                        a = function(e) {
                                            if (80 === e[0] && 75 === e[1] && 3 === e[2] && 4 === e[3]) return e;
                                            if (67 !== e[0] && 114 !== e[1] && 50 !== e[2] && 52 !== e[3]) throw new Error("Invalid header: Does not start with Cr24");
                                            var n = 3 === e[4],
                                                r = 2 === e[4];
                                            if (!r && !n || e[5] || e[6] || e[7]) throw new Error("Unexpected crx format version number.");
                                            if (r) { var t = 16 + A({ byteA: e[8], byteB: e[9], byteC: e[10], byteD: e[11] }) + A({ byteA: e[12], byteB: e[13], byteC: e[14], byteD: e[15] }); return e.slice(t, e.length) }
                                            var a = 12 + A({ byteA: e[8], byteB: e[9], byteC: e[10], byteD: e[11] });
                                            return e.slice(a, e.length)
                                        }(s)
                                    } catch (e) {
                                        var l = e instanceof Error ? e.message : "unknown";
                                        return "error, no buffer" === l ? "" : ("unknown" === l && console.log(e), l.includes("Does not start with Cr24") || (0, _.oj)({
                                            message: l,
                                            transactionName: "decompress-google-chrome-extension",
                                            level: "warning",
                                            tags: [
                                                ["scenario", "download-extensions"]
                                            ]
                                        }), "")
                                    }
                                    var c = h().join(k.$c, n + "@" + i + ".zip"),
                                        u = p().createWriteStream(c, { mode: 438 });
                                    return u.write(a), u.close(), new Promise((function(e) { u.on("close", (function() { return e(c) })), u.on("error", (function() { return e("") })) }))
                                }));
                                return function(n) { return e.apply(this, arguments) }
                            }());
                            return Promise.all(r)
                        }))()
                    }
                    updateExtensions() {
                        var e = this;
                        return a()((function*() {
                            var n = yield(0, v.readdir)(k.$c).catch((function() { return [] }));
                            if (n.length) {
                                var r = [],
                                    t = n.map(function() {
                                        var e = a()((function*(e) {
                                            if (!e.includes("@") || e.includes(".zip")) return "";
                                            var [n, t] = e.split("@"), a = y.hH.replace("{ext_id}", n), o = yield(0, b.C)(a);
                                            if (!o) return "";
                                            var i = o.req.path,
                                                s = (0, b.Ju)(i);
                                            return o && t !== s ? (r.push(h().join(k.$c, e)), n) : ""
                                        }));
                                        return function(n) { return e.apply(this, arguments) }
                                    }()),
                                    o = (yield Promise.all(t)).filter(Boolean),
                                    i = (yield e.downloadChromeExtensions(o)).filter(Boolean),
                                    s = (0, b.d2)(i);
                                yield Promise.all(s);
                                var c = r.map((function(e) { return (0, v.rmdir)(e, { recursive: !0, maxRetries: 3 }).catch((function() {})) }));
                                yield Promise.all(c).then((function() { l()(e, W, !1) }))
                            }
                        }))()
                    }
                    insertExtensionsToDb(e) {
                        var n = arguments,
                            r = this;
                        return a()((function*() {
                            var t = n.length > 1 && void 0 !== n[1] ? n[1] : k.$c;
                            if (null != e && e.length) {
                                var a = yield(0, S.$)({ url: "".concat(G.apiBaseUrl, "/extensions/check"), method: "POST", body: { extensionsIds: e } }),
                                    { extensionsToAdd: o = [] } = a;
                                if (o.length) { var i = yield r.getExtensionsNameAndImage(o, t); return (0, S.$)({ url: "".concat(G.apiBaseUrl, "/extensions/create"), method: "POST", body: { extensionsInfo: i } }) }
                            }
                        }))()
                    }
                    getExtensionsToInstall(e, n) {
                        if (!e) return [];
                        var r = Object.entries(e),
                            t = (null == r ? void 0 : r.map((function(e) { var [n, r] = e, [t] = r.path.split(h().sep).reverse(), [a] = t.split("@"); return a }))) || [];
                        return n.reduce((function(e, n) { var [r] = n.split(h().sep).reverse(), [a] = r.split("@"); return t.includes(a) || e.push(n), e }), [])
                    }
                }

                function J(e) { var n = [...u()(this, U), ...this.existedUserExtensions]; return e.reduce((function(r, t) { console.log("splitting extrensions name: ", e); var [a] = t.split("@"); return n.includes(a) || r.push(t), r }), []) }
                i()(Z, "instance", void 0)
            },
            7451: (e, n, r) => {
                "use strict";
                r.r(n), r.d(n, { ProfileCachingManager: () => m });
                var t = r(9591),
                    a = r.n(t),
                    o = r(3292),
                    i = r(1017),
                    s = r.n(i),
                    l = r(2245),
                    c = r.n(l),
                    u = r(135),
                    d = r(7703);
                class m {
                    init() { return a()((function*() { return (0, o.mkdir)(d.Me, { recursive: !0 }).catch((function() { return null })) }))() }
                    copyClosedProfileToCacheDirectory(e, n, r) {
                        return a()((function*() {
                            var t = "".concat(s().join(d.Me, n, r), ".zip");
                            yield(0, o.rmdir)(s().join(d.Me, n), { recursive: !0 }).catch((function() { return null })), yield(0, o.mkdir)(s().join(d.Me, n), { recursive: !0 }), yield(0, o.writeFile)(t, e, { mode: 438 })
                        }))()
                    }
                    checkCachedStorageSize() { return (0, u.rJ)(d.Me) }
                    clearCachedStorage() { return a()((function*() { var e = (yield(0, o.readdir)(d.Me).catch((function() { return [] }))).map(function() { var e = a()((function*(e) { var n = s().join(d.Me, e); return (yield(0, o.stat)(n)).isDirectory() ? (0, o.rmdir)(n, { recursive: !0 }) : (0, o.unlink)(n) })); return function(n) { return e.apply(this, arguments) } }()); return Promise.all(e) }))() }
                    clearProfileCache(e) { return a()((function*() { var n = s().join(d.Me, e); return (0, o.rmdir)(n, { recursive: !0 }).catch((function() { return null })) }))() }
                    getCachedProfile(e, n) {
                        return a()((function*() {
                            var r = s().join(d.Me, n),
                                [t] = yield(0, o.readdir)(r).catch((function() { return [] }));
                            if (!t || null == t || !t.endsWith(".zip")) return { status: !1 };
                            var [a] = t.split("."), i = s().join(r, t);
                            if (a === e.uid || t && e.isNewProfile) return { status: !0, cachedArchivePath: i };
                            var l = yield(0, o.stat)(i).catch((function() { return "error" }));
                            if ("error" === l) return { status: !1 };
                            var u = l.birthtime,
                                m = c()(e.lastDate).utc();
                            return c()(m).isAfter(u) ? { status: !1 } : { status: !0, cachedArchivePath: i }
                        }))()
                    }
                    renameCachedProfile(e, n, r) {
                        return a()((function*() {
                            var t = s().join(d.Me, e, n + ".zip"),
                                a = s().join(d.Me, e, r + ".zip");
                            return (0, o.rename)(t, a).catch((function(e) { throw console.log(e), Error("renaming zip error") }))
                        }))()
                    }
                }
            },
            9276: (e, n, r) => {
                "use strict";
                r.d(n, { l1: () => z, DQ: () => U, g0: () => W, Ke: () => V });
                var t = r(8779),
                    a = r.n(t),
                    o = r(9591),
                    i = r.n(o),
                    s = r(3292),
                    l = r(1017),
                    c = r.n(l),
                    u = r(1789),
                    d = r(2245),
                    m = r.n(d),
                    f = r(5828),
                    p = r(4293),
                    v = r(4342),
                    g = r(9613),
                    h = r(5664),
                    y = function() {
                        var e = i()((function*(e) {
                            var n = [],
                                r = yield(0, g.V)(e);
                            try {
                                var t = yield r.all("select * from logins");
                                for (var a of t) {
                                    var { origin_url: o, action_url: i, username_element: s, username_value: l, password_element: c, password_value: u, submit_element: d } = a;
                                    n.push({ origin_url: o, action_url: i, username_element: s, username_value: l, password_element: c, password_value: u, submit_element: d })
                                }
                            } catch (e) {
                                var m = e instanceof Error ? e.message : e;
                                if ("string" == typeof m && m.includes("no such table")) return { passwords: n };
                                (0, h.oj)({
                                    message: m,
                                    transactionName: "load-passwords-from-file",
                                    level: "error",
                                    tags: [
                                        ["scenario", "close-profile"]
                                    ]
                                })
                            } finally { yield r.close() }
                            return { passwords: n }
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    b = r(5346),
                    w = r(6745),
                    S = r(5472),
                    k = r(7703),
                    _ = r(7774),
                    P = r(135),
                    T = r(8911),
                    E = r(2370),
                    C = r(1583),
                    M = r(4040),
                    O = r(2928),
                    x = r(4594),
                    N = r(7451),
                    I = r(4740);

                function B(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function j(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? B(Object(r), !0).forEach((function(n) { a()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : B(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                var D = (0, k.IT)(),
                    R = new C.o,
                    A = new x.ExtensionsManager,
                    L = new M.CommonDataManager,
                    F = new I.H,
                    G = new N.ProfileCachingManager,
                    U = "prepared_to_upload",
                    z = function() {
                        var e = i()((function*(e) {
                            var { profileId: n, currentMs: r, localStorageEnabled: t, indexedDbEnabled: a, debugMode: o = !1, channel: i, os: s, ProfileStatusManagerInst: l, ProfileStatusManagerInstances: c, automation: d, apiTokenForClose: m, twoFaKeyForClose: f, vaultToken: v } = e, g = u.startTransaction({ name: "stop-profile" }) || S.Ng;
                            p.syncingProfiles.push(n), yield Z({ profileId: n, currentMs: r, debugMode: o, localStorageEnabled: t, indexedDbEnabled: a, stopProfileTransactionSentry: g }), yield Promise.all([q({ profileId: n, localStorageEnabled: t, indexedDbEnabled: a, stopProfileTransactionSentry: g }), F.removeUselessFolders(n, s)]).catch((function() { return null }));
                            var { s3SignedUrl: h = { url: "" }, profileArchiveBuffer: y } = yield W({ profileId: n, channel: i, ProfileStatusManagerInst: l, automation: d, apiTokenForClose: m, twoFaKeyForClose: f, vaultToken: v }).catch((function(e) { var r = e instanceof Error ? e.message : e; return g.setStatus("aborted"), g.finish(), (0, P.sj)(p.syncingProfiles, n), { s3SignedUrl: { url: r } } }));
                            if ("error" === h.url) throw new Error("The profile has been deleted");
                            if ("error-429" === h.url) throw new Error("Too many requests");
                            if (!y) throw console.log("error, no buffer"), (0, P.sj)(p.syncingProfiles, n), g.setStatus("aborted"), g.finish(), new Error("profile archive is not found");
                            yield V({ profileId: n, s3SignedUrl: h, profileArchiveBuffer: y, ProfileStatusManagerInst: l, ProfileStatusManagerInstances: c, stopProfileTransactionSentry: g, apiTokenForClose: m, twoFaKeyForClose: f })
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    H = function() {
                        var e = i()((function*(e) {
                            var { profileId: n, channel: r, pathToExtensions: t, pathToPreferences: a, pathToBookmarks: o, ProfileStatusManagerInst: i, stopProfileTransactionSentry: s, automation: l, apiTokenForClose: c, twoFaKeyForClose: u, vaultToken: d } = e, m = s.startChild({ op: "upload-cookies" }), f = s.startChild({ op: "upload-passwords" }), v = s.startChild({ op: "updating-extensions" }), g = [X(n, m).catch((function(e) {
                                var r = e instanceof Error ? e.message : e;
                                (0, h.oj)({
                                    message: r,
                                    transactionName: "get-cookies-file-error",
                                    tags: [
                                        ["scenario", "close-profile"],
                                        ["profileId", n]
                                    ]
                                }), m.setStatus("aborted"), m.finish();
                                return { cookies: [{ domain: "error" }] }
                            })), d ? Y(n, f) : Promise.resolve([{ domain: "error" }]), Q(a, v, n), ee(o, n)], y = (yield Promise.allSettled(g)).map((function(e) { return "fulfilled" !== e.status ? (console.log(e.reason), { value: "" }) : e })), [{ value: S = { cookies: [] } }, { value: k }, { value: _ }, { value: T }] = y, E = _;
                            (null == l ? void 0 : l.workflowId) && !(null != l && l.isAutomationExtensionSavedInDb) && (E = E.filter((function(e) { return e !== w.up })));
                            var C = s.startChild({ op: "zipping-profile" }),
                                M = yield $(n, C).catch(console.log);
                            if (!M) throw s.finish(), (0, P.sj)(p.syncingProfiles, n), (0, b.$)({ method: "POST", url: "".concat(L.apiBaseUrl, "/analytics/add_action_analytics"), body: { action: "synced unsuccessfully" } }).catch((function() { return null })), i.addStatus({ status: "error", statusMessage: { errorType: "archiving", errorMessage: "notifications.error.archivingProfileError", prefix: "resync" } }), i.removeStatus({ status: "archiving" }), Error("archiving profile error");
                            console.log("upload cookies.length:", S.cookies.length), S.cookies.length || console.log("Got empty cookies. profile ".concat(n));
                            try { r.sender.send("update-extensions-on-close", { extensionsIds: E, profileId: n }) } catch (e) { console.log(e) }
                            var O = s.startChild({ op: "caching-profile-before-upload" });
                            yield G.copyClosedProfileToCacheDirectory(M, n, U).catch((function(e) {
                                var r = "cache-profile-after-close";
                                (0, h.zd)({
                                    message: e.message,
                                    transactionName: r,
                                    tags: [
                                        ["scenario", "close-profile"],
                                        ["profileId", n],
                                        ["name", r]
                                    ]
                                })
                            })).finally((function() { return O.finish() }));
                            var x = Buffer.byteLength(M);
                            return { s3: yield ne({ profileId: n, passwords: k, cookies: S, extensionsIds: E, bookmarks: T, fileSize: x, pathToExtensions: t, stopProfileTransactionSentry: s, apiTokenForClose: c, twoFaKeyForClose: u }), buffer: M }
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    W = function() {
                        var e = i()((function*(e) {
                            var { profileId: n, channel: r, onlyUpload: t = !1, ProfileStatusManagerInst: a, automation: o, vaultToken: i } = e, s = u.startTransaction({ name: "stop-profile" }) || S.Ng;
                            s.tags = j(j({}, s.tags), {}, { profileId: n });
                            var l = "".concat(k.xL.replace("{profileId}", n), "Preferences"),
                                c = "".concat(k.xL.replace("{profileId}", n), "Extensions"),
                                d = "".concat(k.xL.replace("{profileId}", n), "Bookmarks"),
                                m = { url: "", isCf: !1 },
                                f = null;
                            return t ? f = yield(0, _.M_)(n, U).catch((function(e) { return console.log(e), null })) : yield H({ profileId: n, channel: r, pathToPreferences: l, pathToExtensions: c, pathToBookmarks: d, ProfileStatusManagerInst: a, stopProfileTransactionSentry: s, automation: o, vaultToken: i }).then((function(e) {
                                var { s3: n = { url: "", isCf: !1 }, buffer: r } = e;
                                m.url = n.url, m.isCf = n.isCf || !1, f = r
                            })), { s3SignedUrl: m, profileArchiveBuffer: f, stopProfileTransactionSentry: s }
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    K = function() {
                        var e = i()((function*(e) {
                            var { fileBuff: n, profileId: r, hk: t = !1, preloadedS3SignedUrl: a = { url: "", isCf: !1 }, stopProfileTransactionSentry: o } = e;
                            console.log("***********************************"), console.log("Getting signed URL for S3 for ".concat(t ? "Hong Kong" : "Frankfurt"));
                            var s, l = o.startChild({ op: "upload-profile" }),
                                c = a,
                                u = Buffer.byteLength(n);
                            try {
                                console.log("Uploading profile by signed URL to S3");
                                var d = { Authorization: "Bearer ".concat(L.accessToken), "x-two-factor-token": L.twoFaKey || "", browserId: r, "Content-Type": "application/zip" };
                                c.isCf && (d["x-amz-acl"] = "bucket-owner-full-control"), c.url && delete d.Authorization;
                                var m = yield(0, T.Z)({ fn: () => (0, b.U)({ url: c.url || "".concat(w.rI, "/upload"), headers: d, body: n, timeout: 5e5, method: "PUT", isBuffer: !0, retryLimit: 1 }), retryDelay: 300, limit: 1 }).catch(function() {
                                    var e = i()((function*(e) {
                                        var n;
                                        console.log(null === (n = e.response) || void 0 === n ? void 0 : n.body);
                                        var a = e instanceof Error ? e.message : e;
                                        throw (0, h.zd)({
                                            message: a,
                                            transactionName: "upload-profile-to-aws-".concat(t ? "hong-kong" : "frankfurt"),
                                            tags: [
                                                ["scenario", "close-profile"],
                                                ["profileId", r],
                                                ["name", "upload-profile-to-aws-".concat(t ? "hong-kong" : "frankfurt")]
                                            ]
                                        }), e
                                    }));
                                    return function(n) { return e.apply(this, arguments) }
                                }());
                                ({ uid: s } = m.headers), o.tags = j(j({}, o.tags), {}, { "zip-size-MB": u / 1048576 }), console.log("Profile has been uploaded to S3 successfully")
                            } catch (e) { if (e instanceof Error && console.log(e.message), e instanceof Error && "profile deleted" === e.message) throw new Error("do not send to sentry"); if (t) throw l.setStatus("aborted"), l.finish(), o.setStatus("aborted"), o.finish(), (0, b.$)({ method: "POST", url: "".concat(L.apiBaseUrl, "/analytics/add_action_analytics"), body: { action: "synced unsuccessfully", profile: r } }).catch((function() { return null })), new Error("do not send to sentry") }
                            return (0, b.$)({ method: "POST", url: "".concat(L.apiBaseUrl, "/analytics/add_action_analytics"), body: { action: "synced successfully", actionInfo: "".concat(u), profile: r } }).catch((function() { return null })), l.finish(), s
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    V = function() {
                        var e = i()((function*(e) {
                            var { profileId: n, s3SignedUrl: r, profileArchiveBuffer: t, ProfileStatusManagerInst: a, ProfileStatusManagerInstances: o, stopProfileTransactionSentry: i = S.Ng, apiTokenForClose: l, twoFaKeyForClose: c } = e;
                            console.log("Sending analytics before upload to s3");
                            var { userOs: u } = L, d = m()().toDate().valueOf(), v = (0, f.v4)();
                            console.log("Uploading zip file"), a.addStatus({ status: "cloud_uploading" }), a.removeStatus({ status: "archiving" });
                            var g = yield K({ fileBuff: t, profileId: n, preloadedS3SignedUrl: r, stopProfileTransactionSentry: i, apiTokenForClose: l, twoFaKeyForClose: c }).catch((function(e) {
                                (0, P.sj)(p.syncingProfiles, n);
                                var r = "notifications.error.uploadingProfileError",
                                    t = !0,
                                    o = e instanceof Error ? e.message : e,
                                    i = "string" == typeof o;
                                i && "profile deleted" === o && (r = "notifications.error.profileAlreadyDeleted", t = !1), i && "do not send to sentry" === o && (t = !1), i && "no url" === o && (t = !1), i && "Too many requests" === o && (r = "profiles.profileStatusMessages.errorTooManyRequests"), t && (0, h.zd)({
                                    message: o,
                                    transactionName: "upload-profile-global",
                                    tags: [
                                        ["scenario", "close-profile"],
                                        ["profileId", n],
                                        ["name", "upload-profile-global"]
                                    ]
                                }), a.addStatus({ status: "error", statusMessage: r })
                            }));
                            if (!g) return (0, P.sj)(p.syncingProfiles, n), a.addStatus({ status: "error", statusMessage: "notifications.error.uploadingProfileError" }), void a.removeStatus({ status: "cloud_uploading" });
                            yield G.renameCachedProfile(n, U, g).catch((function(e) {
                                console.log(e);
                                var r = i.startChild({ op: "caching-profile" });
                                return G.copyClosedProfileToCacheDirectory(t, n, g).catch((function(e) {
                                    var r = e instanceof Error ? e.message : e,
                                        t = "cache-profile-after-close";
                                    "string" == typeof r && r.includes("ENOSPC") && (t = "no-disc-space"), (0, h.oj)({
                                        message: r,
                                        transactionName: t,
                                        tags: [
                                            ["scenario", "close-profile"],
                                            ["profileId", n]
                                        ]
                                    })
                                })).finally((function() { return r.finish() }))
                            })), console.log("Sending analytics after upload to s3");
                            var y = m()().toDate().valueOf() - d,
                                w = { type: "profile-s3-upload", status: "success", profile: n, time: y, os: u, deduplicationKey: v };
                            (0, b.$)({ url: "".concat(L.apiBaseUrl, "/analytics"), method: "POST", body: w }).catch((function() { return null }));
                            var k = i.startChild({ op: "remove-files" });
                            (0, P.sj)(p.syncingProfiles, n), (0, s.access)(D.PROFILES_DIR + n).then((function() { return (0, s.rm)(D.PROFILES_DIR + n, { recursive: !0 }) })).catch((function() { k.setStatus("aborted") })), k.finish(), i.finish(), a.removeStatus({ status: "cloud_uploading" }), delete o[n]
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    q = function(e) { var { profileId: n, localStorageEnabled: r, indexedDbEnabled: t, stopProfileTransactionSentry: a } = e, o = "".concat(D.ROUTE_SLASH, "Default").concat(D.ROUTE_SLASH, "Local Storage"), i = "".concat(D.ROUTE_SLASH, "Default").concat(D.ROUTE_SLASH, "IndexedDB"), s = []; return r || (a && a.setTag("local-storage-disabled", !0), s.push((0, P.kA)(D.PROFILES_DIR + n + o))), t || (a && a.setTag("indexed-db-disabled", !0), s.push((0, P.kA)(D.PROFILES_DIR + n + i))), Promise.all(s) },
                    Z = function() {
                        var e = i()((function*(e) {
                            var { profileId: n, currentMs: r, localStorageEnabled: t, indexedDbEnabled: a, stopProfileTransactionSentry: o } = e, i = o.startChild({ op: "waiting-orbita-finish" });
                            delete E.pidList[n], yield new Promise((function(e) { return setTimeout(e, 1e3) })), i.finish();
                            var l = o.startChild({ op: "removing-folders" }),
                                c = [];
                            c.push(q({ profileId: n, localStorageEnabled: t, indexedDbEnabled: a })), c.push((0, s.rm)("".concat(D.PROFILES_DIR).concat(n, "_").concat(r, ".zip")).catch((function() {}))), c.push((0, s.rm)("".concat(D.PROFILES_DIR).concat(n, "_").concat(r, "_sync.zip")).catch((function() {}))), yield Promise.allSettled(c), l.finish()
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    J = function() { var e = i()((function*(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k.$c; if (e.length) { var r = yield A.getExtensionsNameAndImage(e, n); return (0, b.$)({ url: "".concat(L.apiBaseUrl, "/extensions/create"), method: "POST", body: { extensionsInfo: r } }) } })); return function(n) { return e.apply(this, arguments) } }(),
                    $ = function(e, n) {
                        return (0, _.Dr)(D.PROFILES_DIR + e, e).catch((function(r) {
                            console.log("archiving error", r);
                            var t = c().join(k.Me, e);
                            (0, s.rm)(t, { recursive: !0, force: !0 }).catch(console.log);
                            var a = r instanceof Error ? r.message : r,
                                o = p.deletedProfiles.includes(e);
                            if ("string" == typeof a && a.includes("Invalid profile folder path") || o) return null;
                            n.setStatus("aborted"), (0, h.zd)({
                                message: a,
                                transactionName: "archive-profile-after-close",
                                tags: [
                                    ["scenario", "close-profile"],
                                    ["profileId", e]
                                ]
                            })
                        })).finally((function() { return n.finish() }))
                    },
                    X = function() {
                        var e = i()((function*(e, n) {
                            var r = yield O.t.getCookiesFileToRead(e);
                            if (r) return (0, v.AI)(r).catch((function(r) {
                                var t = r instanceof Error ? r.message : r;
                                if (!p.deletedProfiles.includes(e)) {
                                    (0, h.oj)({
                                        message: t,
                                        transactionName: "load-cookies-from-file",
                                        tags: [
                                            ["scenario", "close-profile"],
                                            ["profileId", e]
                                        ]
                                    }), n.setStatus("aborted");
                                    return { cookies: [{ domain: "error" }] }
                                }
                            })).finally((function() { return n.finish() }))
                        }));
                        return function(n, r) { return e.apply(this, arguments) }
                    }(),
                    Y = function() {
                        var e = i()((function*(e, n) {
                            var r = D.PROFILES_DIR + e + D.PASSWORDS_FILE,
                                { passwords: t } = yield(0, T.Z)({ fn: () => y(r), retryDelay: 300 }).catch(function() {
                                    var r = i()((function*(r) {
                                        var t = r instanceof Error ? r.message : r,
                                            a = { origin_url: "error", username_value: "error", password_value: "error" };
                                        return p.deletedProfiles.includes(e) ? ((0, h.oj)({
                                            message: t,
                                            transactionName: "load-passwords-from-file",
                                            tags: [
                                                ["scenario", "close-profile"],
                                                ["profileId", e]
                                            ]
                                        }), n.setStatus("aborted"), { passwords: [a] }) : { passwords: [a] }
                                    }));
                                    return function(e) { return r.apply(this, arguments) }
                                }()).finally((function() { return n.finish() }));
                            return t.map((function(e) { return { domain: e.origin_url, username: e.username_value, password: e.password_value } })).filter((function(e) { return e.username && e.password && e.domain }))
                        }));
                        return function(n, r) { return e.apply(this, arguments) }
                    }(),
                    Q = function() {
                        var e = i()((function*(e, n, r) {
                            return R.getProfileChromeExtensions(e).catch((function(e) {
                                var t = e instanceof Error ? e.message : e;
                                return p.deletedProfiles.includes(r) || "string" == typeof t && t.includes("ENOENT") || ((0, h.oj)({
                                    message: t,
                                    transactionName: "read-chrome-extensions-from-pref-after-close",
                                    tags: [
                                        ["scenario", "close-profile"]
                                    ]
                                }), n.setStatus("aborted")), []
                            })).finally((function() { return n.finish() }))
                        }));
                        return function(n, r, t) { return e.apply(this, arguments) }
                    }(),
                    ee = function() {
                        var e = i()((function*(e, n) {
                            var r = yield(0, s.readFile)(e, "utf-8").catch((function(e) {
                                    var r = e instanceof Error ? e.message : e;
                                    return "string" == typeof r && r.includes("ENOENT") || (0, h.oj)({
                                        message: r,
                                        transactionName: "read-bookmarks-after-profile-close",
                                        tags: [
                                            ["scenario", "read-bookmarks"],
                                            ["profileId", n]
                                        ]
                                    }), ""
                                })),
                                t = { roots: {} };
                            if (!r) return t.roots;
                            try { t = JSON.parse(r) } catch (e) {
                                var a = e instanceof Error ? e.message : e;
                                (0, h.oj)({
                                    message: a,
                                    transactionName: "parse-bookmarks-after-profile-close",
                                    tags: [
                                        ["scenario", "parse-bookmarks"],
                                        ["profileId", n]
                                    ]
                                })
                            }
                            return t.roots
                        }));
                        return function(n, r) { return e.apply(this, arguments) }
                    }(),
                    ne = function() {
                        var e = i()((function*(e) {
                            var n, { profileId: r, passwords: t, cookies: a, extensionsIds: o, bookmarks: i, fileSize: s, pathToExtensions: l, stopProfileTransactionSentry: c } = e,
                                u = c.startChild({ op: "upload-profile-data" });
                            if (p.deletedProfiles.includes(r)) return { url: "error", isCf: !1 };
                            var d = yield R.uploadProfileData({ browserId: r, passwords: t, cookies: a.cookies, extensionsIds: o, bookmarks: i, fileSize: s, cf: !1, hk: !1 }).catch((function(e) {
                                var n, t;
                                return null !== (n = e.response) && void 0 !== n && null !== (t = n.body) && void 0 !== t && t.includes("Profile has been deleted") ? { s3: { url: "error", isCf: !1 }, extensionsToAdd: [] } : e.message.includes("429") || e.message.includes("Too many requests") ? { s3: { url: "error-429", isCf: !1 }, extensionsToAdd: [] } : ((0, h.zd)({
                                    message: e.message,
                                    transactionName: "update-profile-and-get-s3-url-after-close",
                                    tags: [
                                        ["name", "update-profile-and-get-s3-url-after-close"],
                                        ["profileId", r]
                                    ]
                                }), u.setStatus("aborted"), u.finish(), (0, P.sj)(p.syncingProfiles, r), { url: "", isCf: !1 })
                            }));
                            u.finish();
                            var { s3: m = { url: "", isCf: !1 }, extensionsToAdd: f = [] } = d;
                            return null !== (n = m.url) && void 0 !== n && n.includes("error") || J(f, l).catch((function(e) {
                                var n = e instanceof Error ? e.message : e;
                                (0, h.oj)({
                                    message: n,
                                    transactionName: "insert-extensions-to-db-error",
                                    tags: [
                                        ["scenario", "close-profile"],
                                        ["profileId", r]
                                    ]
                                }), console.log(e)
                            })), m
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }()
            },
            4293: (e, n, r) => {
                "use strict";
                r.r(n), r.d(n, { BRAVE_PROCESSES: () => qe, checkAutoLang: () => wn, checkProfiles: () => pn, closeAllProfiles: () => fn, deletedProfiles: () => on, killProfile: () => mn, loadProfile: () => ln, loadingProfiles: () => Ze, openLink: () => gn, startProf: () => vn, syncProfile: () => hn, syncingProfiles: () => Je, updateDeletedProfiles: () => sn, updateToken: () => dn, updateUseragent: () => un });
                var t = r(8779),
                    a = r.n(t),
                    o = r(9591),
                    i = r.n(o),
                    s = r(2081),
                    l = r(1239),
                    c = r.n(l),
                    u = r(3292),
                    d = r(1017),
                    m = r.n(d),
                    f = r(1789),
                    p = r(9496),
                    v = r(2245),
                    g = r.n(v);
                const h = require("open");
                var y = r.n(h),
                    b = r(1041),
                    w = r.n(b),
                    S = r(9276),
                    k = r(4147),
                    _ = r(9435),
                    P = r(5346),
                    T = r(5664),
                    E = r(5472),
                    C = r(8050),
                    M = r(2311),
                    O = function() {
                        var e = i()((function*(e) {
                            var n, { orbitaConsoleContainer: r, message: t, profileData: a, processDurationMs: o, code: i, signal: s, ProfileStatusManagerInst: l, channel: c } = e,
                                d = (null === (n = a.gologin) || void 0 === n ? void 0 : n.userAgent) || "",
                                m = (new C.BrowserReleasesManager).getMajorVersionByUA(d),
                                { browserWorkingDir: f } = (new C.BrowserReleasesManager).getOrbitaPathToStart(m),
                                p = yield(0, u.readdir)(f).catch((function() { return console.log("error reading browser dir") }));
                            console.log(r), console.log("orbita logs: "), console.log(p), console.log("browser dir content: ");
                            var v = "crash-orbita",
                                g = [
                                    ["scenario", "close-profile"]
                                ];
                            switch (o < 3e3 && (v = "open-orbita"), !0) {
                                case 7 === i:
                                    g.push(["reason", "no-dll"]), (0, M.downloadBrowser)(c, { orbitaVersion: m }), l.addStatus({ status: "error", statusMessage: "profilesTable.profileStatusTooltip.reDownloadOrbita" });
                                    break;
                                case "SIGABRT" === s:
                                    l.addStatus({ status: "error", statusMessage: "profilesTable.profileStatusTooltip.oldMacOs" }), v = "not-supported-os";
                                    break;
                                case 2147483651 === i:
                                    l.addStatus({ status: "error", statusMessage: "profilesTable.profileStatusTooltip.gpuCrash" }), g.push(["reason", "gpu"]);
                                    break;
                                case r.some((function(e) { return e.includes("Opening in existing browser session") })):
                                    g.push(["reason", "existing-session"]);
                                    break;
                                case 126 === i:
                                    g.push(["reason", "mac-processor"]), l.addStatus({ status: "error", statusMessage: "profilesTable.profileStatusTooltip.macNotSupport" });
                                    break;
                                case r.some((function(e) { return e.includes("chrome.exe") })):
                                    g.push(["reason", "no-exe"]), (0, M.downloadBrowser)(c, { orbitaVersion: m }), l.addStatus({ status: "error", statusMessage: "profilesTable.profileStatusTooltip.reDownloadOrbita" });
                                    break;
                                case 3221225785 === i:
                                    g.push(["reason", "3221225785"]);
                                    break;
                                case 21 === i:
                                    g.push(["reason", "cant-create-singleton"]);
                                    break;
                                case 3221225506 === i:
                                    l.addStatus({ status: "error", statusMessage: "profilesTable.profileStatusTooltip.antivirus" }), g.push(["reason", "access"]);
                                    break;
                                case 127 === i:
                                    g.push(["reason", "no-files-mac"]), (0, M.downloadBrowser)(c, { orbitaVersion: m }), l.addStatus({ status: "error", statusMessage: "profilesTable.profileStatusTooltip.reDownloadOrbita" });
                                    break;
                                case 3765269347 === i:
                                    g.push(["reason", "3765269347"]);
                                    break;
                                case 4294967295 === i:
                                    g.push(["reason", "4294967295"]);
                                    break;
                                case 3221225477 === i:
                                    g.push(["reason", "3221225477"]);
                                    break;
                                case 3221225501 === i:
                                    g.push(["reason", "3221225501"]);
                                    break;
                                case 0 === i:
                                    return;
                                default:
                                    g.push(["reason", "unknown"])
                            }(0, T.oj)({ message: t, transactionName: v, level: "fatal", tags: g })
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    x = r(9408);

                function N(e, n) {
                    var r = !!qe[e];
                    void 0 !== n.running && ({ running: r } = n), (0, x.N)({ endpoint: "/browser/".concat(e, "/run-sync"), method: "PATCH", body: { running: r } }).catch((function() { return null }))
                }
                var I = r(7703),
                    B = r(6683),
                    j = r(135),
                    D = r(2370),
                    R = r(4040),
                    A = r(4740),
                    L = (0, I.IT)(),
                    F = new A.H,
                    G = new R.CommonDataManager,
                    U = function() {
                        var e = i()((function*(e) {
                            var n, r, t, { timezoneCheckResult: a, startProfileTimestamp: o, profileOptions: s, remoteCb: l, profileData: c, automation: u, args: d, channel: m, passwordsTemporaryToken: f, currentMs: p, ProfileReadyEventEmitterInst: v, profilePreparingRes: h, timings: y, startProfileTransactionSentry: b = E.Ng, ProfileStatusManagerInst: w, ProfileStatusManagerInstances: x, deepLinkProtocol: I } = e,
                                { profileId: R } = c,
                                { timezone: A, ll: L = ["0", "0"], accuracy: U = 100, ip: K, country: V } = a;
                            if (!K || !A) {
                                var q = "Timezone request error.";
                                return console.log(a), (0, T.oj)({
                                    message: "Timezone request error - ".concat(a),
                                    transactionName: "timezone-request-error",
                                    level: "fatal",
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["profileId", R]
                                    ]
                                }), w.addStatus({ status: "error", statusMessage: q, startProfileTimestamp: o, profileOptions: s }), l && l(null, { status: 403, message: q }), "error"
                            }
                            s.proxyCountry = V;
                            try {
                                var { profileExtensionPathRes: Z, profileUserExtensionPathRes: J } = h.reduce((function(e, n) { return "profileExtensionsCheckRes" in n && (e.profileExtensionPathRes = n), "profileUserExtensionsCheckRes" in n && (e.profileUserExtensionPathRes = n), e }), { profileExtensionPathRes: {}, profileUserExtensionPathRes: {} }), [$, X] = L;
                                console.log("Getting timezone:", A);
                                var Y = c.fillProxyByIp ? A : c.timezoneValue,
                                    Q = c.gologin.geoLocation,
                                    ee = { latitude: $, longitude: X, accuracy: U };
                                c.gologin.geoLocation = z(Q, ee), c.gologin.timezone = { id: Y };
                                var ne = ((null == Z ? void 0 : Z.profileExtensionsCheckRes) || []).concat((null == J ? void 0 : J.profileUserExtensionsCheckRes) || []);
                                console.log("checkRes", ne);
                                var re = b.startChild({ op: "write-preferences" });
                                yield F.updatingBrowserSettings({ profileData: c, publicUserIp: K, profileExtensionsCheckRes: ne, args: d, timezoneCheckResult: a }), re.finish()
                            } catch (e) {
                                var te = e instanceof Error ? e.message : e,
                                    ae = "profileStatusMessages.defectiveProfileError",
                                    oe = "update-preferences-file";
                                return "string" == typeof te && te.includes("ENOSPC") && (oe = "no-disk-space", ae = "profileStatusMessages.discSpaceError"), (0, T.oj)({
                                    message: te,
                                    transactionName: oe,
                                    level: "fatal",
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["profileId", R]
                                    ]
                                }), b.setStatus("aborted"), b.finish(), w.addStatus({ status: "error", startProfileTimestamp: o, statusMessage: ae, profileOptions: s }), l && l(null, { status: 403, message: ae }), "error"
                            }
                            v.removeListener("profile-ready", (function() { console.log("listener removed") })), qe[R] || (qe[R] = {}), yield W(R).catch((function(e) {
                                var n = e instanceof Error ? e.message : e;
                                (0, T.oj)({
                                    message: n,
                                    transactionName: "remove-lock-files-error",
                                    level: "fatal",
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["profileId", R]
                                    ]
                                })
                            }));
                            var [ie] = d;
                            d[0] = d[d.length - 1], d[d.length - 1] = ie, console.log("args", d), console.log("Spawning browser process");
                            var se = b.startChild({ op: "spawn-browser" }),
                                le = "";
                            try { var ce, ue, de = (null === (ce = c.gologin) || void 0 === ce ? void 0 : ce.userAgent) || ""; if (le = (new C.BrowserReleasesManager).getMajorVersionByUA(de), t = yield H(d, de), se.finish(), b.finish(), I)(0, B.e)(_.M.opened, { mode: I, profile: R, actionInfo: (null === (ue = c.gologin) || void 0 === ue ? void 0 : ue.name) || "" }) } catch (e) {
                                var me = e instanceof Error ? e.message : e,
                                    fe = "launchBrowser error ".concat(R, ". ").concat(me);
                                return (0, T.zd)({
                                    message: me,
                                    transactionName: "spawn-orbita-process",
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["profileId", R],
                                        ["name", "spawn-orbita-process"]
                                    ]
                                }), (0, M.downloadBrowser)(m, { orbitaVersion: le }), b.setStatus("aborted"), b.finish(), w.addStatus({ status: "error", statusMessage: "profilesTable.profileStatusTooltip.noInstalledOrbita", startProfileTimestamp: o, profileOptions: s }), l && l(null, { status: 403, message: fe }), "error"
                            }
                            var pe = [];
                            (0, j.sj)(Ze, R), D.pidList[R] = null === (n = t) || void 0 === n ? void 0 : n.pid, console.log("profile ".concat(R, " orbita pid:"), null === (r = t) || void 0 === r ? void 0 : r.pid);
                            try { qe[R].startProfileTimestamp = g().now(), y.overallTime = g().now() - o, s.proxyMode = c.proxy.mode, qe[R].startMode = s.startMode, qe[R].orbitaProc = t, c.lockEnabled && (N(R, { running: !0 }), qe[R].bigTimer = setInterval((function() { return N(R, {}) }), 18e4)) } catch (e) { console.log("error assigning startProfileTimestamp") }
                            w.addStatus({ status: "running", startProfileTimestamp: o, profileOptions: s, timings: y }), w.removeStatus({ status: "preparing_profile" });
                            var ve = function(e) { try { pe.unshift(e.toString().replace(/\n/g, "").replace(/\s\s+/g, " ")), pe.length > 50 && (pe.length = 50) } catch (e) { console.log(e) } };
                            try {
                                t && t.stdout.on("data", (function(e) { ve(e) })), t && t.stderr.on("data", (function(e) { ve(e) })), t && t.on("error", function() {
                                    var e = i()((function*(e) {
                                        var n, r = e instanceof Error ? e.message : e;
                                        console.log(e), (0, M.downloadBrowser)(m, { orbitaVersion: le }), w.addStatus({ status: "error", statusMessage: "profilesTable.profileStatusTooltip.noInstalledOrbita" }), (0, T.oj)({
                                            message: r,
                                            transactionName: "no-installed-orbita",
                                            level: "fatal",
                                            tags: [
                                                ["scenario", "close-profile"],
                                                ["profileId", R]
                                            ]
                                        }), (null === (n = qe[R]) || void 0 === n ? void 0 : n.bigTimer) && clearInterval(qe[R].bigTimer), delete qe[R]
                                    }));
                                    return function(n) { return e.apply(this, arguments) }
                                }())
                            } catch (e) { console.log(e) }
                            return t && t.on("exit", function() {
                                var e = i()((function*(e, n) {
                                    var r, t;
                                    console.log("closing profile", R), c.lockEnabled && N(R, { running: !1 });
                                    var a = g().now() - (null === (r = qe[R]) || void 0 === r ? void 0 : r.startProfileTimestamp);
                                    if ((null === (t = qe[R]) || void 0 === t ? void 0 : t.bigTimer) && clearInterval(qe[R].bigTimer), delete qe[R], !(on.includes(R) || Ze.includes(R) || Je.includes(R))) {
                                        var i = "child process exited with code ".concat(e, " and signal ").concat(n);
                                        w.addStatus({ status: "archiving" }), w.removeStatus({ status: "running" }), console.log(i), (![0, null].includes(e) || "SIGABRT" === n || a < 3e3) && O({ orbitaConsoleContainer: pe, message: i, profileData: c, processDurationMs: a, code: e, signal: n, ProfileStatusManagerInst: w, channel: m }).catch((function() { return null }));
                                        var s = yield(new C.BrowserReleasesManager).getLocalOrbitaVersionByPath().catch((function(e) { return console.log("Error in reading browser version", e), "" }));
                                        console.log("braveProc browserVersion:", s);
                                        var { userOs: l } = G, d = { type: "browser-close", status: 0 === e || null === e ? "success" : "error", profile: R, time: Date.now() - o, message: "".concat(e), os: l, browserVersion: s, appVersion: k.version, proxyMode: c.proxy.mode };
                                        (0, P.$)({ url: "".concat(G.apiBaseUrl, "/analytics"), method: "POST", body: d }).catch((function(e) { return console.log(e) })), (0, P.$)({ url: "".concat(G.apiBaseUrl, "/profiles-passwords/temporary-token"), method: "DELETE", headers: { Authorization: "Bearer ".concat(f), "user-agent": G.userAgent, "x-two-factor-token": G.twoFaKey || "" } }).catch((function(e) { return console.log(e) }));
                                        var v = G.accessToken,
                                            h = G.twoFaKey;
                                        yield(0, S.l1)({ profileId: R, currentMs: p, debugMode: c.debugMode, localStorageEnabled: c.localStorageEnabled, indexedDbEnabled: c.indexedDbEnabled, channel: m, os: c.os, ProfileStatusManagerInst: w, ProfileStatusManagerInstances: x, automation: u, apiTokenForClose: v, twoFaKeyForClose: h, vaultToken: c.vaultToken }).catch((function(e) {
                                            (0, j.sj)(Je, R);
                                            var n = e instanceof Error ? e.message : e,
                                                r = "profile close error ".concat(R, ". ").concat(n),
                                                t = !0;
                                            "The profile has been deleted" === n && (r = "notifications.error.profileAlreadyDeleted", t = !1), "profile archive is not found" === n && (t = !1), "Too many requests" === n && (r = "profiles.profileStatusMessages.errorTooManyRequests"), w.addStatus({ status: "error", statusMessage: r }), t && (0, T.zd)({
                                                message: n,
                                                transactionName: "close-profile-global",
                                                tags: [
                                                    ["scenario", "close-profile"],
                                                    ["profileId", R],
                                                    ["name", "close-profile-global"]
                                                ]
                                            })
                                        })), w.removeStatus({ status: "syncing" })
                                    }
                                }));
                                return function(n, r) { return e.apply(this, arguments) }
                            }()), l && l(null, null), "success"
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    z = function(e, n) { return e.fillBasedOnIp ? { mode: e.mode, latitude: Number(n.latitude), longitude: Number(n.longitude), accuracy: Number(n.accuracy) } : { mode: e.mode, latitude: e.latitude, longitude: e.longitude, accuracy: e.accuracy } },
                    H = function() {
                        var e = i()((function*(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                r = (new C.BrowserReleasesManager).getMajorVersionByUA(n),
                                { pathToLaunch: t, browserWorkingDir: a } = (new C.BrowserReleasesManager).getOrbitaPathToStart(r);
                            console.log("majorChromeVersion:", r), console.log("pathToLaunch:", t), console.log("browserWorkingDir:", a);
                            var o = { shell: !0, cwd: a, detached: !0, stdio: "pipe" },
                                i = (0, s.spawn)('"'.concat(t, '"'), e, o);
                            return i.unref(), i
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    W = function(e) { var n = ["SingletonLock", "SingletonSocket", "SingletonCookie", "RunningChromeVersion"].map(function() { var n = i()((function*(n) { var r = m().resolve(L.PROFILES_DIR, e, n); return console.log(r), (0, u.rm)(r, { force: !0 }) })); return function(e) { return n.apply(this, arguments) } }()); return Promise.all(n) };
                r(8057);
                require("@babel/runtime/helpers/objectWithoutProperties");
                require("@sentry/react");
                const K = JSON.parse('{"name":"GoLess","description":"GoLess no-code browser automation and Robotic Process Automation (RPA) tool","version":"1.2.0","manifest_version":2,"key":"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqqaZ0LrhJrdC9apVWeL5B60tXzfrJl2HaCb9fDQrv29yyHbS2MDaSORjkSjA8IMFQAX+1eGf/p8x6EQR91nkwdJY3tfxiPyyKLPsbWIDp0wEjBIE/qjPimGGnLisMevG08XNal+rW+P7WtRW/4gJzs5/E6iuXV8jtK8BqaSBTP9btYHxhusUFdXSH8B3aR/CqrCQoJypzaBiAU8EBP1yJVWYid7cmBUR0A4xGe3o8/n4t/XwxGD1Msi2XmA52NqQGn7y801ZefIvVUBch1MrDBkPBoj9mcTVPZju1zhqPw295DkSCvMDmdLL2kmRt63cp0Jw05SHHtBN28xKiMEHHwIDAQAB","browser_action":{"default_popup":"popup.html","default_icon":"logoGA.png"},"background":{"scripts":["background.bundle.js"]},"icons":{"128":"logoGA.png"},"commands":{"open-dashboard":{"suggested_key":{"default":"Alt+A","mac":"Alt+A"},"description":"Open the GoLess dashboard"},"element-picker":{"suggested_key":{"default":"Alt+P","mac":"Alt+P"},"description":"Open element picker"}},"content_scripts":[{"matches":["<all_urls>"],"js":["contentScript.bundle.js"],"run_at":"document_start","match_about_blank":true,"all_frames":true},{"matches":["http://localhost/*","*://*.goless.com/*","*://goless.com/*"],"js":["webService.bundle.js"],"run_at":"document_start","all_frames":false}],"optional_permissions":["clipboardRead","contextMenus","downloads","notifications"],"permissions":["alarms","cookies","debugger","proxy","scripting","storage","tabs","unlimitedStorage","webNavigation","<all_urls>"],"web_accessible_resources":["*"],"externally_connectable":{"matches":["http://localhost:3004/*","*://localhost/*","*://goless.com/*"]},"sandbox":{"pages":["/sandbox.html"]},"content_security_policy":"script-src \'self\' https://apis.google.com/ https://accounts.google.com/ https://www.googleapis.com https://ajax.googleapis.com; object-src \'self\'"}');
                var V = r(6745),
                    q = { checksum: "f2a8ce0f0fddfeee2229d72f0f30e713", roots: { bookmark_bar: { children: [{ children: [{ name: "Facebook", type: "url", url: "https://www.facebook.com/" }, { name: "Notifications", type: "url", url: "https://www.facebook.com/settings?tab=notifications" }, { name: "Account Quality", type: "url", url: "https://www.facebook.com/accountquality" }, { name: "Ads Manager", type: "url", url: "https://www.facebook.com/adsmanager/manage/campaigns" }, { name: "Billing", type: "url", url: "https://www.facebook.com/ads/manager/account_settings/account_billing" }, { name: "Business Manager", type: "url", url: "https://business.facebook.com/select" }], name: "Facebook", type: "folder" }, { children: [{ name: "Amazon", type: "url", url: "https://www.amazon.com/" }, { name: "eBay", type: "url", url: "https://ebay.com/" }, { name: "Walmart", type: "url", url: "https://walmart.com/" }, { name: "Shopify", type: "url", url: "https://www.shopify.com/" }, { name: "Avito", type: "url", url: "https://avito.ru/" }, { name: "Taobao", type: "url", url: "https://taobao.com/" }, { name: "Wildberries", type: "url", url: "https://wildberries.ru/" }, { name: "Aliexpress", type: "url", url: "https://aliexpress.com/" }, { name: "PayPal", type: "url", url: "https://paypal.com/" }, { name: "Payoneer", type: "url", url: "https://payoneer.com/" }], name: "Dropshipphing", type: "folder" }, { children: [{ name: "Coinlist", type: "url", url: "https://coinlist.co/" }, { name: "Huobi", type: "url", url: "https://www.huobi.com/" }, { name: "Discord", type: "url", url: "https://discord.com/" }, { name: "Premint", type: "url", url: "https://www.premint.xyz/" }], name: "Crypto", type: "folder" }, { children: [{ name: "bet365", type: "url", url: "https://www.bet365.com/" }, { name: "Fonbet", type: "url", url: "https://www.fon.bet/" }, { name: "1xbet", type: "url", url: "https://1xbet.com/" }, { name: "Parimatch", type: "url", url: "https://parimatch.com/" }, { name: "Melbet", type: "url", url: "https://melbet.com/" }, { name: "1xstavka", type: "url", url: "https://1xstavka.ru/" }], name: "Betting", type: "folder" }, { name: "Facebook", type: "url", url: "https://www.facebook.com/" }, { name: "Amazon", type: "url", url: "https://www.amazon.com/" }, { name: "TikTok", type: "url", url: "https://www.tiktok.com/" }, { name: "Google Ads", type: "url", url: "https://ads.google.com/" }, { name: "Browser check", type: "url", url: "https://iphey.com/" }], name: "Bookmarks bar", type: "folder" }, other: { children: [], name: "Other bookmarks", type: "folder" }, synced: { children: [], name: "Mobile bookmarks", type: "folder" } }, version: 1 },
                    Z = r(1104),
                    J = r(5879),
                    $ = function() {
                        var e = i()((function*() {
                            var { CommonDataManager: e } = yield Promise.resolve().then(r.bind(r, 4040)), n = new e, t = yield(0, P.$)({ url: "".concat(n.apiBaseUrl, "/gologin-global-settings/changable-app-config") });
                            t.cookies.createCookiesTableQuery && (n.createCookiesTableQuery = t.cookies.createCookiesTableQuery)
                        }));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    X = r(7451),
                    Y = r(4342),
                    Q = r(5630),
                    ee = r(7774),
                    ne = r(8911);

                function re(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function te(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? re(Object(r), !0).forEach((function(n) { a()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : re(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                var ae = (0, I.IT)(),
                    oe = 1048576,
                    ie = new X.ProfileCachingManager;
                ie.init().catch((function() { return null }));
                var se = function() {
                        var e = i()((function*(e) {
                            var { timings: n, remoteCb: r, profilePath: t, getProfileArchiveOptions: a } = e, { storageInfo: o, profileOptions: i, startProfileTimestamp: s, startProfileTransactionSentry: l, ProfileStatusManagerInst: c } = a, d = g().utc().valueOf(), m = yield ce(a);
                            if (l.tags = te(te({}, l.tags), {}, { "profile-mode": i.startMode }), "error" === m) return "error";
                            if ("no need to decompress" === m) return c.addStatus({ status: "preparing_profile" }), void c.removeStatus({ status: "downloading_profile_init" });
                            var f = 0;
                            (0, j.rJ)(m).then((function(e) { f = e, l.tags = te(te({}, l.tags), {}, { "zip-size-MB": e / oe }) })).catch((function() { return null })), n.awsRequest = g().utc().valueOf() - d, yield(0, j.kA)(t).catch(console.log);
                            var p = g().utc().valueOf(),
                                v = l.startChild({ op: "decompress-profile" }),
                                h = yield le(m, t);
                            if ("error" === h.status) {
                                var y = "profileStatusMessages.errorDefectiveProfile",
                                    b = !0;
                                if (h.error.message.includes("ENOSPC")) y = "profileStatusMessages.errorDiscSpace";
                                else if (!o.isNewProfile) { a.onlyAws = !0, console.log("try to download from aws"); var w = yield ce(a); "error" !== (yield le(w, t)).status && (b = !1) }
                                if (b) return (0, T.zd)({
                                    message: h.error.message,
                                    transactionName: "extract-profile",
                                    level: "fatal",
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["name", "extract-profile"]
                                    ]
                                }), c.addStatus({ status: "error", startProfileTimestamp: s, errorMessage: "profileStatusMessages.archiveDecompressError", profileOptions: i }), r && r(null, { status: 403, message: y }), "error"
                            }
                            console.log("Extracting profile zip-archive completed"), c.addStatus({ status: "preparing_profile" }), c.removeStatus({ status: "downloading_profile_init" }), m.includes("gologin-cached-profiles") || m.includes("zero_profile") || (console.log("Removing profile zip-archive"), (0, u.unlink)(m).catch((function(e) {
                                var n = e instanceof Error ? e.message : e;
                                console.error("Error in removing zip and folders:", n || "no error")
                            }))), l.tags = te(te({}, l.tags), {}, { "internet-speed-mbs": n.awsRequest / 1e3 / (f / oe) * 8 }), n.decompress = g().utc().valueOf() - p, v.finish()
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    le = function() {
                        var e = i()((function*() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            console.log("zipPath: ".concat(e, ", profilePath: ").concat(n));
                            var r = (yield(0, ne.Z)({ fn: () => (0, ee.kO)(e, n).then((function() { return { status: "success" } })), retryDelay: 300, limit: 2 }).catch(function() { var e = i()((function*(e) { return (0, u.readdir)(d.join(n, "Default")).then(console.log).catch(console.log), (0, T.zd)({ message: e.message, transactionName: "decompress-profile" }), { status: "error", error: e } })); return function(n) { return e.apply(this, arguments) } }())) || {};
                            return r
                        }));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    ce = function() {
                        var e = i()((function*(e) {
                            var { zipPath: n, profileId: r, startProfileTimestamp: t, startProfileTransactionSentry: a, storageInfo: o, profileOptions: i, ProfileStatusManagerInst: s, onlyAws: l = !1 } = e, c = yield ie.getCachedProfile(o, r);
                            if (c.status && !l) return i.startMode = "cached", c.cachedArchivePath || "";
                            if (o.isNewProfile) return i.startMode = "zero profile", ue({ profileId: r }).catch((function(e) {
                                console.log(e);
                                var n = e instanceof Error ? e.message : e,
                                    r = "create-zero-profile";
                                return "string" == typeof n && n.includes("table cookies already exists") ? "no need to decompress" : ("string" == typeof n && (n.includes("ENOENT") || n.includes("SQLITE_FULL")) && s.addStatus({ status: "error", statusMessage: "profileStatusMessages.discSpaceError", startProfileTimestamp: t }), (0, T.zd)({
                                    message: n,
                                    transactionName: r,
                                    level: "fatal",
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["name", r]
                                    ]
                                }), "error")
                            }));
                            var u = a.startChild({ op: "download-profile-from-aws" }),
                                d = yield(0, Q.$j)({ url: o.storageLink || "".concat(V.rI, "/download"), destFile: n, profileId: r }).catch((function(e) {
                                    var n = e instanceof Error ? e.message : e,
                                        r = "download-profile-from-aws",
                                        a = "profileStatusMessages.errorProfileLoading";
                                    return "string" == typeof n && n.includes("ENOSPC") && (a = "profileStatusMessages.discSpaceError"), "string" == typeof n && n.includes("404") && (a = "profileStatusMessages.profileDeleted"), (0, T.zd)({
                                        message: n,
                                        transactionName: r,
                                        tags: [
                                            ["name", r]
                                        ]
                                    }), s.addStatus({ status: "error", statusMessage: a, startProfileTimestamp: t }), "error"
                                }));
                            if (u.finish(), "error" === d) { return s.addStatus({ status: "error", statusMessage: "profileStatusMessages.errorProfileLoading", startProfileTimestamp: t, errorMessage: "Error downloading profile. Check your internet connection." }), "error" }
                            return console.log("Profile zip-archive writing completed"), n
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    ue = function() {
                        var e = i()((function*(e) {
                            var { profileId: n } = e, r = ae.PROFILES_DIR + n, t = d.resolve(r, "Default", "Preferences"), a = d.resolve(r, "Default", "Bookmarks"), o = d.resolve(r, "Default", "Network"), i = d.resolve(r, "Default", "Network", "Cookies"), s = d.resolve(r, "Default", "Cookies");
                            yield(0, u.mkdir)(o, { recursive: !0 });
                            var l = [(0, u.writeFile)(t, JSON.stringify(Z.H), { mode: 438 }), (0, u.writeFile)(a, JSON.stringify(q), { mode: 438 }), (0, Y.WB)(i, s)];
                            return yield Promise.all(l), "no need to decompress"
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    de = r(6116),
                    me = r.n(de),
                    fe = r(8640),
                    pe = r.n(fe);

                function ve(e, n, r) {! function(e, n) { if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object") }(e, n), n.set(e, r) }
                var ge = new WeakMap,
                    he = new WeakMap,
                    ye = new WeakMap,
                    be = new WeakMap;
                class we {
                    constructor(e) { ve(this, ge, { writable: !0, value: !1 }), ve(this, he, { writable: !0, value: {} }), ve(this, ye, { writable: !0, value: !1 }), ve(this, be, { writable: !0, value: void 0 }), pe()(this, be, e) }
                    set isProxyReady(e) { pe()(this, ge, !0), pe()(this, he, e), this.sendReadyEvent() }
                    get eventEmitter() { return me()(this, be) }
                    set isProfilePrepared(e) { pe()(this, ye, e), this.sendReadyEvent() }
                    sendReadyEvent() { me()(this, ye) && me()(this, ge) && me()(this, be).emit("profile-ready", me()(this, he)) }
                }
                var Se = r(6069),
                    ke = r(1583),
                    _e = r(4594);

                function Pe(e, n, r) {! function(e, n) { if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object") }(e, n), n.set(e, r) }
                var Te = new WeakMap,
                    Ee = new WeakMap,
                    Ce = new WeakMap,
                    Me = new WeakMap,
                    Oe = new WeakMap,
                    xe = new WeakMap;
                class Ne {
                    constructor(e, n) { Pe(this, Te, { writable: !0, value: void 0 }), Pe(this, Ee, { writable: !0, value: void 0 }), Pe(this, Ce, { writable: !0, value: void 0 }), Pe(this, Me, { writable: !0, value: !1 }), Pe(this, Oe, { writable: !0, value: this.getDefaultStatusData() }), Pe(this, xe, { writable: !0, value: new R.CommonDataManager }), pe()(this, Te, e), pe()(this, Ee, n), pe()(this, Ce, [me()(this, Oe)]) }
                    unblock() { pe()(this, Me, !1) }
                    cleanStack() {
                        pe()(this, Ce, []);
                        var e = this.getCurrentStatus();
                        this.sendStatus({ status: e.key })
                    }
                    refreshStatus() {
                        var e = this.getCurrentStatus();
                        this.sendStatus({ status: e.key, statusMessage: e.info })
                    }
                    getCurrentStatus() { return me()(this, Ce).length ? me()(this, Ce)[0] : me()(this, Oe) }
                    addStatus(e) {
                        if (!me()(this, Me)) {
                            "error" === e.status && (0, j.sj)(Ze, me()(this, Ee));
                            var n = this.getStatusData(e.status);
                            if ("unexpected" !== n.info) {
                                var r = { key: e.status, priority: n.priority, info: n.info },
                                    t = me()(this, Ce).findIndex((function(e) { return e.key === r.key }));
                                if (t < 0) return me()(this, Ce).push(r), me()(this, Ce).sort((function(e, n) { return e.priority - n.priority })), void this.sendStatus(e);
                                me()(this, Ce)[t] = r, me()(this, Ce).sort((function(e, n) { return e.priority - n.priority })), this.sendStatus(e)
                            } else console.log("error adding status, unexpected status")
                        }
                    }
                    removeStatus(e) {
                        var n = me()(this, Ce).find((function(n) { return n.key === e.status }));
                        n && (pe()(this, Ce, me()(this, Ce).filter((function(e) { return e.key !== n.key })).sort((function(e, n) { return e.priority - n.priority }))), this.sendStatus({ status: "" }))
                    }
                    sendStatus(e) {
                        if (!me()(this, Me)) {
                            "error" === e.status && pe()(this, Me, !0);
                            var n = this.getCurrentStatus();
                            if (e.startProfileTimestamp && ["running", "error"].includes(e.status)) {
                                var r, t, a, o, i = g().utc().valueOf() - e.startProfileTimestamp;
                                console.log(i, "time");
                                var s, l = "error" === e.status ? "error" : "success",
                                    c = null === (r = e.errorMessage) || void 0 === r ? void 0 : r.replace(",", ""),
                                    u = { type: "profile-loading", status: l, profile: me()(this, Ee), time: i, os: me()(this, xe).userOs, message: c || e.statusMessage, mode: null === (t = e.profileOptions) || void 0 === t ? void 0 : t.startMode, timings: e.timings, proxyMode: null === (a = e.profileOptions) || void 0 === a ? void 0 : a.proxyMode, appVersion: k.version };
                                if (null !== (o = e.profileOptions) && void 0 !== o && o.proxyCountry) u.proxyCountry = null === (s = e.profileOptions) || void 0 === s ? void 0 : s.proxyCountry;
                                (0, P.$)({ method: "POST", url: "".concat(me()(this, xe).apiBaseUrl, "/analytics"), body: u }).catch((function() { console.log("error sending profile-loading analytics") }))
                            }
                            var d = { status: n.info, message: e.statusMessage || e.errorMessage || n.info, profileId: me()(this, Ee) };
                            try { me()(this, Te).sender.send("update-profile-status", d) } catch (e) { console.log("channel send error:", e) }
                        }
                    }
                    getDefaultStatusData() { var e = this.getStatusData("ready"); if ("unexpected" === e.info) throw new Error("Unexpected status used as default"); return e }
                    getStatusData(e) {
                        var n = { error: { info: "profileStatuses.error" }, cloud_uploading: { info: "profileStatuses.cloudUploading" }, archiving: { info: "profileStatuses.archiving" }, syncing: { info: "profileStatuses.syncing" }, running: { info: "profileStatuses.running" }, checking_proxy: { info: "profileStatuses.checkingProxy" }, downloading_profile_init: { info: "profileStatuses.downloadingProfile" }, downloading_profile_chrome_ext: { info: "profileStatuses.downloadingChromeExtension" }, downloading_profile_user_ext: { info: "profileStatuses.downloadingUserExtensions" }, downloading_profile_fonts: { info: "profileStatuses.downloadingFonts" }, preparing_profile: { info: "profileStatuses.preparingProfile" }, ready: { info: "profileStatuses.ready" } },
                            r = Object.keys(n).indexOf(e);
                        if (r < 0) return { key: e, priority: 1e4, info: "unexpected" };
                        var { info: t } = n[e];
                        return { key: e, priority: r, info: t }
                    }
                }
                var Ie = r(5753),
                    Be = r(5499),
                    je = r(2964);

                function De(e, n, r) {! function(e, n) { if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object") }(e, n), n.set(e, r) }
                var Re = new WeakMap,
                    Ae = new WeakMap,
                    Le = new WeakMap;
                class Fe {
                    constructor(e) { De(this, Re, { writable: !0, value: void 0 }), De(this, Ae, { writable: !0, value: !1 }), De(this, Le, { writable: !0, value: void 0 }), pe()(this, Re, e.proxyInfo), pe()(this, Ae, e.proxyEnabled), pe()(this, Le, e.ProfileReadyCheckerInst) }
                    set proxyInfo(e) { pe()(this, Re, e) }
                    set proxyEnabled(e) { pe()(this, Ae, e) }
                    getTimeZone(e, n) {
                        var r = this;
                        return i()((function*() {
                            var t = g().utc(),
                                { mode: a, host: o, port: i, username: s, password: l } = me()(r, Re),
                                c = { status: "error", body: "something went wrong", type: "proxy" };
                            if (me()(r, Ae) || (yield(0, P.$)({ url: V.Hf, method: "GET" }).then((function(e) { c.status = "success", c.body = e, n.timeZoneCheck = g().utc().diff(t), me()(r, Le).isProxyReady = c })).catch((function(e) { console.log(e), c.status = "error", c.body = "notifications.error.timezoneRequestError", c.type = "timezone", n.timeZoneCheck = g().utc().diff(t), me()(r, Le).isProxyReady = c }))), ["gologin", "tor"].includes(a) && (yield Ge({ mode: a, profileData: e, result: c, timings: n, startTime: t, profileReadyChecker: me()(r, Le) }).catch((function(e) { ze({ error: e, result: c, timings: n, startTime: t, profileReadyChecker: me()(r, Le) }) }))), ["socks4", "socks5", "possh", "http", "geolocation"].includes(a)) {
                                var u = yield Be.ProxyService.getPing(me()(r, Re));
                                if (!u && 0 !== u || "Check timeout exceeded" === u) return { status: "error", type: "proxy", body: "profilesTable.profileStatusTooltip.proxy.pingFail" };
                                var d = ["http", "geolocation"].includes(a);
                                yield(0, je.i)({ mode: a, type: d ? "http" : a, host: d ? o.replace(/(http:\/\/|https:\/\/)/g, "") : o, port: i, username: s, password: l }).then((function(e) {
                                    var { response: o, protocol: i } = e;
                                    if ("string" == typeof o && o.includes("402") && "geolocation" === a) return c.status = "error", c.body = "notifications.error.proxyTrafficIsOver", c.type = "proxy", n.timeZoneCheck = g().utc().diff(t), void(me()(r, Le).isProxyReady = c);
                                    Ue({ timeZoneResult: o, result: c, timings: n, startTime: t, protocol: i, profileReadyChecker: me()(r, Le) })
                                })).catch((function(e) { ze({ error: e, result: c, timings: n, startTime: t, profileReadyChecker: me()(r, Le) }) }))
                            }
                            return c
                        }))()
                    }
                }
                a()(Fe, "updateProxyStatus", function() {
                    var e = i()((function*(e, n) {
                        if (e)
                            if ("string" != typeof n.body) {
                                var { body: r } = n, t = { _id: e, status: "success" === n.status, country: r.country, city: r.city, error: "success" !== n.status ? n.status : null, checkDate: g()().unix(), languages: r.languages, timezone: r.timezone, lastIp: r.ip || "" };
                                (0, Ie.T)([t])
                            } else {
                                var a = { _id: e, status: !1, error: n.body, checkDate: g()().unix() };
                                (0, Ie.T)([a])
                            }
                    }));
                    return function(n, r) { return e.apply(this, arguments) }
                }());
                var Ge = function() {
                        var e = i()((function*(e) {
                            var { profileData: n = { autoProxyServer: "" } } = e, r = n.autoProxyServer.split("://"), [t = "http"] = r, [a, o] = r[1].split(":"), i = { mode: e.mode, type: t, host: a, port: Number(o), username: e.profileData.autoProxyUsername, password: e.profileData.autoProxyPassword }, s = yield Be.ProxyService.getPing(i);
                            if (!s && 0 !== s || "Check timeout exceeded" === s) throw new Error("profilesTable.profileStatusTooltip.proxy.pingFail");
                            yield(0, je.i)(i).then((function(n) {
                                var { response: r, protocol: t } = n;
                                if ("string" == typeof r) throw new Error(r);
                                e.profileData.gologin.proxy.username = e.profileData.autoProxyUsername, e.profileData.gologin.proxy.password = e.profileData.autoProxyPassword, e.result.status = "success", e.result.protocol = t, e.result.body = r, e.timings.timeZoneCheck = g().utc().diff(e.startTime), e.profileReadyChecker.isProxyReady = e.result
                            })).catch((function(n) { ze({ error: n, result: e.result, timings: e.timings, startTime: e.startTime, profileReadyChecker: e.profileReadyChecker }) }))
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    Ue = function(e) {
                        if ("string" == typeof e.timeZoneResult) throw new Error(e.timeZoneResult);
                        e.result.status = "success", e.result.protocol = e.protocol, e.result.body = e.timeZoneResult, e.timings.timeZoneCheck = g().utc().diff(e.startTime), e.profileReadyChecker.isProxyReady = e.result
                    },
                    ze = function(e) { console.log(e.error), e.result.status = "error", e.result.body = e.error instanceof Error ? e.error.message : "notifications.error.somethingWentWrong", e.result.type = "proxy", e.timings.timeZoneCheck = g().utc().diff(e.startTime), e.profileReadyChecker.isProxyReady = e.result },
                    He = r(2111),
                    We = function() {
                        var e = i()((function*(e, n, r) {
                            if (n.bookmark_bar) return n;
                            var t = yield(0, u.readFile)(r, "utf8").catch((function(n) {
                                var r = n instanceof Error ? n.message : n;
                                return "string" == typeof r && r.includes("ENOENT") || (0, T.oj)({
                                    message: r,
                                    transactionName: "read-bookmarks-before-profile-start",
                                    tags: [
                                        ["scenario", "read-bookmarks"],
                                        ["profileId", e]
                                    ]
                                }), ""
                            }));
                            if (!t) return q.roots;
                            try { n = JSON.parse(t).roots } catch (r) {
                                n = q.roots;
                                var a = r instanceof Error ? r.message : r;
                                (0, T.oj)({
                                    message: a,
                                    transactionName: "parse-bookmarks-before-profile-start",
                                    tags: [
                                        ["scenario", "parse-bookmarks"],
                                        ["profileId", e]
                                    ]
                                })
                            }
                            return n
                        }));
                        return function(n, r, t) { return e.apply(this, arguments) }
                    }();

                function Ke(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function Ve(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? Ke(Object(r), !0).forEach((function(n) { a()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ke(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                var qe = {},
                    Ze = [],
                    Je = [],
                    $e = {},
                    Xe = (0, I.IT)(),
                    Ye = process.platform,
                    Qe = new ke.o,
                    en = new _e.ExtensionsManager,
                    nn = new R.CommonDataManager,
                    rn = new X.ProfileCachingManager,
                    tn = new A.H,
                    an = {};
                tn.init(Xe, nn.apiBaseUrl), en.init().catch((function() { return null })), rn.init().catch((function() { return null }));
                var on = [],
                    sn = function(e) { on = on.filter((function(n) { return !e.includes(n) })) },
                    ln = function() {
                        var e = i()((function*(e) {
                            var { profileId: n, channel: r, remoteApiOptions: t, proxyInfo: a = {}, proxyEnabled: o = !1, automation: i = { workflowId: "" }, launchViaRestApi: s = !1, icons: l = { pngs: [], design: null }, traceId: c, deepLinkProtocol: u } = e;
                            console.log("load profile start", n);
                            var d = Object.prototype.hasOwnProperty.call(qe, n);
                            if (u) {
                                var m = d ? _.M.startedFocusing : _.M.startedOpening;
                                (0, B.e)(m, { mode: u, profile: n })
                            }
                            if (d) return (0, D.focusOrbitaWindow)(n, u).catch((function() { return null }));
                            var f = new Ne(r, n);
                            return cn({ profileId: n, channel: r, remoteApiOptions: t, proxyInfo: a, proxyEnabled: o, ProfileStatusManagerInst: f, automation: i, launchViaRestApi: s, icons: l, traceId: c, deepLinkProtocol: u }).catch((function(e) {
                                console.log(e);
                                var r = e instanceof Error ? e.message : e;
                                (0, T.zd)({
                                    message: r,
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["profileId", n]
                                    ],
                                    transactionName: "profile-prepare-error",
                                    level: "fatal"
                                }), f.addStatus({ status: "error", errorMessage: "profileStatusMessages.prepareProfileError" })
                            }))
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    cn = function() {
                        var e = i()((function*(e) {
                            var { profileId: n, channel: r, remoteApiOptions: t, proxyInfo: a = {}, proxyEnabled: o = !1, ProfileStatusManagerInst: i, automation: s, launchViaRestApi: l, icons: d = { pngs: [], design: null }, traceId: m, deepLinkProtocol: p } = e, { cb: v, sync: h } = t || {};
                            if (24 !== n.length) return v && v(null, { status: 400, message: "invalid profile id" }), "error";
                            var y = g().utc().valueOf(),
                                b = new(c()),
                                w = new we(b),
                                S = new Fe({ proxyInfo: a, proxyEnabled: o, ProfileReadyCheckerInst: w });
                            if (an[n] = i, Ze.includes(n) || Je.includes(n)) return i.addStatus({ status: "error", statusMessage: "Profile is still syncing" }), "error";
                            Ze.push(n);
                            var k = f.startTransaction({ name: "run-profile", traceId: m }) || E.Ng,
                                _ = k.startChild({ op: "request-profile-from-db" }),
                                P = k.startChild({ op: "check-proxy" }),
                                M = {},
                                O = g().utc(),
                                x = process.arch;
                            if (["x32", "ia32"].includes(x)) return (0, T.oj)({
                                message: "32-bit operating system",
                                tags: [
                                    ["scenario", "run-profile"],
                                    ["is-32-bit", !0]
                                ],
                                transactionName: "open-orbita-32-bit-system",
                                level: "warning"
                            }), i.addStatus({ status: "error", statusMessage: "profileStatusMessages.32bitError" }), "error";
                            i.addStatus({ status: "downloading_profile_init" }), o && i.addStatus({ status: "checking_proxy" });
                            var N = ["gologin", "tor"].includes(a.mode || "");
                            if (k.tags = Ve(Ve({}, k.tags), {}, { "proxy-mode": a.mode, profileId: n }), N || l || S.getTimeZone({}, M).then((function(e) { "error" === e.status && yn(e, i, y) })).finally((function() { P.finish(), i.removeStatus({ status: "checking_proxy" }) })), $e[n]) return delete $e[n], v && v(null, { status: 403, message: "Profiles is not stopped yet" }), null;
                            var I = yield(0, Ie.Wr)(n).catch((function(e) {
                                var r, t, a = "backend@error::",
                                    o = e instanceof Error ? e.message : e,
                                    s = "profileStatusMessages.profileRequestError",
                                    l = !0;
                                console.log(null == e || null === (r = e.response) || void 0 === r ? void 0 : r.body), "string" == typeof o && o.includes("429") && (s = "profileStatusMessages.tooManyRequestsError"), "string" == typeof o && o.includes("404") && (s = "profileStatusMessages.profileDeleted", l = !1), "string" == typeof o && o.includes("402") && (s = "profileStatusMessages.paymentRequired"), "string" == typeof o && o.includes("403") && (s = "profileStatusMessages.noRights", l = !1), l && (0, T.zd)({
                                    message: o,
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["profileId", n],
                                        ["name", "request-profile-from-db"]
                                    ],
                                    transactionName: "request-profile-from-db"
                                });
                                var c = (null === (t = e.response) || void 0 === t ? void 0 : t.body) || "";
                                c.includes(a) && (s = c.replace(a, "").slice(1, -1));
                                return i.addStatus({ status: "error", statusMessage: s }), v && v(null, { status: 403, message: "Error in getting profile info" }), k.setStatus("aborted"), k.finish(), "error"
                            }));
                            if ("string" == typeof I) return k.setStatus("aborted"), k.finish(), "error";
                            var { canBeRunning: B = !1 } = I;
                            if (!B) return v && v(null, { status: 403, message: "Profile is already running" }), i.addStatus({ status: "error", statusMessage: "notifications.error.runByAnotherUser" }), "cantBeRunning";
                            if (!(new C.BrowserReleasesManager).checkOrbitaWinCompatible({ key: "userAgent", value: I.navigator.userAgent, ProfileStatusManagerInst: i })) return (0, T.oj)({
                                message: "windows version is not supported",
                                tags: [
                                    ["scenario", "run-profile"]
                                ],
                                transactionName: "orbita-compatibility-with-windows-error"
                            }), "error";
                            _.finish(), M.profileRequest = g().utc().diff(O);
                            var j = I.chromeExtensions && I.chromeExtensions.includes(V.up);
                            if (s.workflowId) {
                                var D = (0, He.ir)(),
                                    R = (0, He.yj)(D);
                                s.publicKey = D, s.extensionId = R
                            }
                            var A = yield tn.prepareProfileToLaunch({ profileFingerprint: I, profileId: n, automation: s });
                            if (l) {
                                var L = ["gologin", "tor"].includes(A.proxy.mode || ""),
                                    F = ["gologin", "tor", "socks4", "socks5", "possh", "http", "geolocation"].includes(A.proxy.mode || "");
                                F && i.addStatus({ status: "checking_proxy" }), S.proxyInfo = A.proxy, S.proxyEnabled = F, S.getTimeZone(L ? A : {}, M).then((function(e) { "error" === e.status && yn(e, i, y) })).finally((function() { P.finish(), i.removeStatus({ status: "checking_proxy" }) }))
                            }
                            var G = k.startChild({ op: "check-proxy" });
                            N && !l && S.getTimeZone(A, M).then((function(e) { "error" === e.status && yn(e, i, y) })).finally((function() { G.finish(), i.removeStatus({ status: "checking_proxy" }) }));
                            var U = [Xe.PROFILES_DIR, Xe.START_DIR_PATH, Xe.STARTED_DIR_PATH].map((function(e) { return (0, u.access)(e).then(Promise.resolve).catch((function() { return (0, u.mkdir)(e, { recursive: !0 }) })) }));
                            return yield Promise.all(U).catch((function(e) {
                                var r = e instanceof Error ? e.message : e;
                                console.log("Error in working folder init:", r || "no error"), (0, T.oj)({
                                    message: r,
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["profileId", n]
                                    ],
                                    transactionName: "profile-folder-init-error",
                                    level: "warning"
                                })
                            })), !h && v && v(null, null), vn({ profileData: A, channel: r, startProfileTimestamp: y, remoteApiOptions: t, ProfileReadyCheckerInst: w, timings: M, startProfileTransactionSentry: k, ProfileStatusManagerInst: i, automation: Ve(Ve({}, s), {}, { isAutomationExtensionSavedInDb: j }), icons: d, deepLinkProtocol: p })
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }();

                function un(e) { nn.userAgent = e, console.log("Useragent has been updated successfully:", e) }

                function dn(e, n) { nn.accessToken || $().catch(console.log), nn.accessToken = e, nn.twoFaKey = n }

                function mn(e) {
                    $e[e] = !0;
                    try {
                        var n, r;
                        if (e in qe)
                            if ("win32" === Ye)(0, D.getWinOrbitaRealPid)(null === (r = qe[e].orbitaProc) || void 0 === r ? void 0 : r.pid).then((function(e) { e && (0, s.exec)("taskkill /pid ".concat(e)) })).catch((function(n) {
                                var r = n instanceof Error ? n.message : n;
                                console.log(1, e, qe), (0, T.zd)({
                                    message: r,
                                    tags: [
                                        ["scenario", "close-profile"],
                                        ["profileId", e],
                                        ["name", "kill-orbita-process-error"]
                                    ],
                                    transactionName: "kill-orbita-process-error"
                                })
                            }));
                            else if (null !== (n = qe[e].orbitaProc) && void 0 !== n && n.pid) {
                            var t;
                            w()(null === (t = qe[e].orbitaProc) || void 0 === t ? void 0 : t.pid, "SIGTERM")
                        }
                    } catch (n) {
                        var a = n instanceof Error ? n.message : n;
                        console.log(1, e, qe), (0, T.zd)({
                            message: a,
                            tags: [
                                ["scenario", "close-profile"],
                                ["profileId", e],
                                ["name", "kill-orbita-process-error"]
                            ],
                            transactionName: "kill-orbita-process-error"
                        })
                    }
                    delete $e[e]
                }
                var fn = function() {
                        var e = i()((function*() {
                            var e = [];
                            for (var n in qe) {
                                var r;
                                e.push(n), qe[n] && w()(null === (r = qe[n].orbitaProc) || void 0 === r ? void 0 : r.pid, "SIGTERM"), console.log("process", n, "has been stopped")
                            }
                            var t = e.map((function(e) { return (0, P.$)({ url: "".concat(nn.apiBaseUrl, "/browser/").concat(e, "/run-sync"), method: "PATCH", body: { running: !1 } }).catch((function() { return null })) }));
                            yield Promise.all(t).catch((function() { return null }))
                        }));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    pn = function() {
                        var e = Object.keys(an);
                        for (var n of e) {
                            var r = an[n];
                            r && r.refreshStatus()
                        }
                    },
                    vn = function() {
                        var e = i()((function*(e) {
                            var n, { profileData: r, channel: t, startProfileTimestamp: a, remoteApiOptions: o, ProfileReadyCheckerInst: s, timings: l, startProfileTransactionSentry: c = E.Ng, ProfileStatusManagerInst: m, automation: f, icons: v = { pngs: [], design: null }, deepLinkProtocol: h } = e,
                                { profileId: y, storageInfo: b, owner: w, fonts: S, os: k, useCookiesExt: _, vaultToken: P } = r,
                                { cb: C, debuggingPort: M = null } = o || {},
                                O = (null === (n = r.gologin) || void 0 === n ? void 0 : n.name) || "",
                                x = (new Date).getMilliseconds(),
                                N = Xe.PROFILES_DIR + y,
                                B = ["linux", "win32", "darwin"].includes(Ye),
                                j = (nn.userAgent || "").includes("Windows NT 6.1"),
                                D = S.families || [],
                                R = B && S.enableMasking && !j;
                            if (R && !D.length) {
                                (0, T.oj)({
                                    message: "No fonts list provided. Please select at least 1",
                                    transactionName: "prepare-fonts-not-provided",
                                    level: "fatal",
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["profileId", y]
                                    ]
                                });
                                var A = "profileStatusMessages.noFontsProvided";
                                return m.addStatus({ status: "error", statusMessage: A, startProfileTimestamp: a }), c.setStatus("aborted"), c.finish(), C && C(null, { status: 403, message: A }), "error"
                            }
                            var L = {},
                                F = "".concat(Xe.PROFILES_DIR).concat(y, "_").concat(x, ".zip"),
                                G = { profileId: y, currentMs: x, storageInfo: b, startProfileTimestamp: a, zipPath: F, profileOptions: L, ProfileStatusManagerInst: m, startProfileTransactionSentry: c };
                            if ("error" === (yield se({ timings: l, remoteCb: C, profilePath: N, getProfileArchiveOptions: G }))) return c.setStatus("aborted"), c.finish(), "error";
                            var z = [tn.checkTempFiles(y, c).catch((function() {})), tn.removeUselessFolders(y, k, c).catch((function() {}))],
                                H = r.cookies || { checkCookies: r.checkCookies };
                            z.push(tn.prepareCookies(y, H, c).catch((function(e) {
                                var n = e instanceof Error ? e.message : e;
                                (0, T.oj)({
                                    message: n,
                                    transactionName: "cookies-global-error",
                                    level: "error",
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["profileId", y]
                                    ]
                                })
                            })));
                            var W = ['--user-data-dir="'.concat(N, '"'), "--disable-encryption", "--donut-pie=".concat(r.gologin.hashValues), "--webrtc-ip-handling-policy=default_public_interface_only"];
                            M && W.push("--remote-debugging-port=".concat(M));
                            var $ = "--font-masking-mode=1";
                            if (R) {
                                var X = "android" !== k && ("win32" === Ye && "win" !== k || "darwin" === Ye && "mac" !== k || "linux" === Ye && "lin" !== k);
                                $ = "--font-masking-mode=2", X && ($ = "--font-masking-mode=3"), m.addStatus({ status: "downloading_profile_fonts" }), z.push(Qe.composeFonts({ fontsList: D, profilePath: N, differentOs: X, startProfileTransactionSentry: c }).catch((function(e) {
                                    var n = e instanceof Error ? e.message : e,
                                        r = "profileStatusMessages.fontsError",
                                        t = "fatal",
                                        a = "prepare-fonts";
                                    return "string" == typeof n && n.includes("ENOSPC") && (r = "profileStatusMessages.discSpaceError", t = "warning", a = "no-disc-space"), (0, T.oj)({
                                        message: n,
                                        transactionName: a,
                                        level: t,
                                        tags: [
                                            ["scenario", "run-profile"],
                                            ["profileId", y]
                                        ]
                                    }), { isError: !0, type: "fonts-error", error: e, errorTxt: r }
                                })).finally((function() { return m.removeStatus({ status: "downloading_profile_fonts" }) })))
                            }
                            W.push($), z.push(tn.prepareGologinExts({ name: O, profileId: y, owner: w, useCookiesExt: _, vaultToken: P, startProfileTransactionSentry: c }));
                            var Y = r.chromeExtensions || [],
                                Q = r.userChromeExtensions || [];
                            c.tags = Ve(Ve({}, c.tags), {}, { "extensions-count": Y.length + Q.length });
                            var ee = c.startChild({ op: "download-chrome-extensions" });
                            Y.length && (m.addStatus({ status: "downloading_profile_chrome_ext" }), z.push(en.checkChromeExtensions(Y).then(function() {
                                var e = i()((function*(e) {
                                    var n = e.find((function(e) { return e.includes(V.up) }));
                                    if (n) {
                                        var r, t = c.startChild({ op: "modify-automation-chrome-extension" }),
                                            a = d.join(n, "manifest.json");
                                        f.publicKey && (K.key = f.publicKey);
                                        try { r = JSON.stringify(K) } catch (e) { console.error("Automation error: replacing manifest.json", e), t.setStatus("aborted") }
                                        r && (yield(0, u.writeFile)(a, r, { mode: 438 }).catch((function(e) {
                                            console.error("Automation: ERROR while replacing manifest.json", e), (0, T.oj)({
                                                message: e.message,
                                                transactionName: "automation-error",
                                                level: "error",
                                                tags: [
                                                    ["scenario", "run-profile"],
                                                    ["profileId", y]
                                                ]
                                            })
                                        }))), t.finish()
                                    }
                                    return { profileExtensionsCheckRes: e }
                                }));
                                return function(n) { return e.apply(this, arguments) }
                            }()).catch((function(e) {
                                var n = e instanceof Error ? e.message : e;
                                return (0, T.oj)({
                                    message: n,
                                    transactionName: "check-chrome-extensions-at-profile-start",
                                    level: "error",
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["profileId", y]
                                    ]
                                }), console.error("checkChromeExtensions error: ", e), { profileExtensionsCheckRes: [] }
                            })).finally((function() { ee.finish(), m.removeStatus({ status: "downloading_profile_chrome_ext" }) }))));
                            var ne = c.startChild({ op: "download-user-extensions" });
                            Q.length && (m.addStatus({ status: "downloading_profile_user_ext" }), z.push(en.checkLocalUserChromeExtensions(Q, y).then((function(e) { return { profileUserExtensionsCheckRes: e } })).catch((function(e) {
                                var n = e instanceof Error ? e.message : e;
                                return (0, T.oj)({
                                    message: n,
                                    transactionName: "check-user-extensions-error",
                                    level: "error",
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["profileId", y]
                                    ]
                                }), []
                            })).finally((function() { ne.finish(), m.removeStatus({ status: "downloading_profile_user_ext" }) }))));
                            var re = I.xL.replace("{profileId}", y) + "Preferences",
                                te = I.xL.replace("{profileId}", y) + "Bookmarks";
                            z.push((0, u.access)(re).catch((function() {
                                return (0, u.writeFile)(re, JSON.stringify(Z.H), { mode: 438 }).catch((function(e) {
                                    var n = e instanceof Error ? e.message : e;
                                    (0, T.zd)({
                                        message: n,
                                        transactionName: "write-preferences-before-profile-start",
                                        tags: [
                                            ["scenario", "write-preferences"],
                                            ["profileId", y]
                                        ]
                                    })
                                }))
                            })));
                            var { bookmarks: ae = { bookmark_bar: null } } = r;
                            z.push(We(y, ae, te).then((function(e) { ae = e; var n = Ve(Ve({}, q), {}, { roots: ae }); return (0, u.writeFile)(te, JSON.stringify(n), { mode: 438 }) })).catch((function() {})));
                            var oe = (0, Se.lZ)(),
                                ie = function(e, n) { return "darwin" === e ? "mac" : "linux" === e ? "linux" : 10 === n || 11 === n ? "win".concat(n) : null }(Ye, oe);
                            if (ie && "2:green-square" === v.design) {
                                var { scaleFactor: le = 1 } = p.screen.getPrimaryDisplay(), ce = c.startChild({ op: "save-browser-icons" }), ue = { iconsPngs: v.pngs, os: ie, profilePath: N, scaleFactor: le, iconDesignVersion: v.design };
                                z.push((0, J.O)(ue, ce));
                                var de = [];
                                switch (!0) {
                                    case "mac" === ie:
                                        de = V.YZ;
                                        break;
                                    case "win10" === ie:
                                        de = V.Hk;
                                        break;
                                    case "win11" === ie:
                                        de = V.sc
                                }
                                var me = de.map((function(e) { return e * le })).reduce((function(e, n) { return e["".concat(n)] = "".concat(n, ".png"), e }), {}),
                                    fe = { enabled: !0, full_size: !0 };
                                "2:green-square" === v.design && (fe = { enabled: !0, windows_icons: me }), r.gologin.icon = { avatar: fe }
                            }
                            r.chromeExtensions = [];
                            var pe = g().utc(),
                                ve = (yield Promise.all(z)).flat().filter(Boolean);
                            l.promises = g().utc().diff(pe);
                            var ge = ve.find((function(e) { return Object.prototype.hasOwnProperty.call(e, "isError") }));
                            if (ge) { var { errorTxt: he = "" } = ge; return c.setStatus("aborted"), c.finish(), m.addStatus({ status: "error", statusMessage: he, startProfileTimestamp: a, profileOptions: L }), C && C(null, { status: 403, message: he }), "error" }
                            var ye = "--load-extension=",
                                { extensionsEnabled: be } = r;
                            be || (ye = "--disable-extensions-except=");
                            var we = ve.find((function(e) { return "profileGologinExtensionPath" in e })),
                                ke = (null == we ? void 0 : we.profileGologinExtensionPath) || "",
                                _e = (null == we ? void 0 : we.passwordsTemporaryToken) || "";
                            W.push("".concat(ye, '"').concat(ke, '"')), r.debugMode && ("win32" === Ye ? W.push("--enable-logging=stderr") : W.push("--enable-logging"), W.push("--v=1"), W.push("--vmodule=metrics=2"), W.push("--no-sandbox"));
                            var { webglParams: Pe } = r;
                            r.gologin.webgl.metadata.mode ? Pe && "webgl" === Pe.glCanvas && W.push("--disable-webgl2") : (W.push("--disable-webgl"), W.push("--disable-webgl2")), Pe && Object.prototype.hasOwnProperty.call(Pe, "antialiasing") && !Pe.antialiasing && W.push("--webgl-antialiasing-mode=none"), !r.session || null != f && f.workflowId || W.push("--restore-last-session");
                            var { autoProxyServer: Te } = r, { mode: Ee = "none", host: Ce = "", port: Me = 80 } = r.proxy, Oe = Ee.toLowerCase();
                            if (r.proxyEnabled) {
                                var xe = ["gologin", "tor"].includes(Oe) ? Te : Ce,
                                    Ne = "";
                                if ("http" === Oe && (Ne = "http://"), "socks4" === Oe && (Ne = "socks4://"), "socks5" === Oe && (Ne = "socks5://"), xe.includes("http://") && ([, xe] = xe.split("http://"), Ne = "http://"), xe.includes("https://") && ([, xe] = xe.split("https://"), Ne = "https://"), xe.includes("socks5://") && ([, xe] = xe.split("socks5://"), Ne = "socks5://"), xe.includes("socks4://") && ([, xe] = xe.split("socks4://"), Ne = "socks4://"), ["gologin", "tor"].includes(Oe)) {
                                    console.log("autoProxyServer", Te);
                                    var Ie = Te.split("://")[1].split(":"),
                                        [Be, je] = Ie;
                                    W.push("--proxy-server=".concat(Be, ":").concat(je)), Ne.includes("socks4") || W.push('--host-resolver-rules="MAP * 0.0.0.0 , EXCLUDE '.concat(Be, '"'))
                                } else W.push("--proxy-server=".concat(Ne).concat(xe, ":").concat(+Me)), Ne.includes("socks4") || W.push('--host-resolver-rules="MAP * 0.0.0.0 , EXCLUDE '.concat(xe, '"'))
                            }
                            var De = s.eventEmitter;
                            return De.on("profile-ready", function() {
                                var e = i()((function*(e) {
                                    if (r.proxyEnabled && Fe.updateProxyStatus(r.proxy.id || "", e), "string" == typeof e.body) { var n = "error" === e.status ? e.body : "notifications.error.timezoneRequestError"; return "Promise was canceled" === n && (n = "profilesTable.error.proxyNonfunctional"), m.addStatus({ status: "error", statusMessage: n, startProfileTimestamp: a, profileOptions: L }), C && C(null, { status: 403, message: n }), "error" }
                                    if ("https" === e.protocol) {
                                        var o = W.findIndex((function(e) { return e.startsWith("--proxy-server") }));
                                        W[o] = W[o].replace("http://", "https://")
                                    }
                                    var i = "darwin" === Ye,
                                        s = wn(r, e.body),
                                        u = i ? "en-US" : s;
                                    W.push("--lang=".concat(u)), console.log("args:", W), U({ timezoneCheckResult: e.body, startProfileTimestamp: a, profileOptions: L, remoteCb: C, profileData: r, automation: f, args: W, channel: t, passwordsTemporaryToken: _e, currentMs: x, ProfileReadyEventEmitterInst: De, profilePreparingRes: ve, timings: l, startProfileTransactionSentry: c, ProfileStatusManagerInst: m, ProfileStatusManagerInstances: an, deepLinkProtocol: h }).catch((function(e) {
                                        var n = e instanceof Error ? e.message : e,
                                            r = "profileStatusMessages.prepareProfileError";
                                        "No installed Orbita" === n && (r = "profileStatusMessages.noOrbita"), (0, T.oj)({
                                            message: n,
                                            tags: [
                                                ["scenario", "run-profile"],
                                                ["profileId", y]
                                            ],
                                            transactionName: "prepare-orbita-launch-error",
                                            level: "fatal"
                                        }), c.setStatus("aborted"), c.finish(), m.addStatus({ status: "error", statusMessage: r })
                                    }))
                                }));
                                return function(n) { return e.apply(this, arguments) }
                            }()), s.isProfilePrepared = !0, "success"
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    gn = function(e) {
                        var { link: n = "" } = e;
                        y()(n).catch((function() { return null }))
                    },
                    hn = function() {
                        var e = i()((function*(e) {
                            var { profileId: n, channel: r, onlyUpload: t = !1 } = e, a = an[n];
                            a || (a = new Ne(r, n), an[n] = a);
                            var o = t ? "cloud_uploading" : "archiving";
                            a.addStatus({ status: o }), a.unblock(), a.removeStatus({ status: "error" });
                            var { s3SignedUrl: i = { url: "" }, profileArchiveBuffer: s, stopProfileTransactionSentry: l } = (yield(0, S.g0)({ profileId: n, channel: r, onlyUpload: t, ProfileStatusManagerInst: a, vaultToken: "" }).catch((function(e) {
                                console.log(e);
                                var r = e instanceof Error ? e.message : JSON.stringify(e);
                                "archiving profile error" !== r && (0, T.oj)({
                                    message: r,
                                    transactionName: "sync-process-status-error",
                                    level: "fatal",
                                    tags: [
                                        ["scenario", "close-profile"],
                                        ["profileId", n]
                                    ]
                                })
                            }))) || {};
                            if (!s) return console.log("error, no buffer (sync)"), void a.addStatus({ status: "error", statusMessage: "Archive with profile not found, synchronization is not possible" });
                            yield(0, S.Ke)({ profileId: n, s3SignedUrl: i, profileArchiveBuffer: s, ProfileStatusManagerInst: a, ProfileStatusManagerInstances: an, stopProfileTransactionSentry: l })
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    yn = function(e, n, r) { var t = bn(e.body); "timezone" !== e.type ? "proxy" !== e.type ? n.addStatus({ status: "error", statusMessage: { errorType: "notifications.error.somethingWentWrong", errorMessage: t, prefix: "proxy" }, startProfileTimestamp: r }) : n.addStatus({ status: "error", statusMessage: { errorType: "notifications.error.proxyError", errorMessage: t, prefix: "proxy" }, startProfileTimestamp: r }) : n.addStatus({ status: "error", statusMessage: { errorType: "notifications.error.timezoneRequestError", errorMessage: "error", prefix: "timezone" }, startProfileTimestamp: r }) },
                    bn = function(e) { return !0 == ("Promise was canceled" === e) ? "profilesTable.error.proxyNonfunctional" : e },
                    wn = function(e, n) {
                        if (!e.autoLang) return Sn(e);
                        var r = "",
                            { country: t = "", languages: a } = n || {};
                        if (a) {
                            var [o] = a.split(",");
                            r = "".concat(o, "-").concat(t) || "";
                            var i = [],
                                [s = "", l = ""] = r.split("-");
                            l && i.push([s, l].join("-")), i.push(s, "en-US", "en"), i = [...new Set(i)];
                            var c = [],
                                u = i.reduce((function(e, n, r) {
                                    if (!r) return e += "".concat(n, ","), c.push(n), e;
                                    var t = 10 - r;
                                    if (t > 0) {
                                        var a = i.length - r < 2 ? "" : ",";
                                        c.push(n), e += "".concat(n, ";q=").concat(Number(.1 * t).toFixed(1)).concat(a)
                                    }
                                    return e
                                }), "");
                            return [e.browserLang] = i, e.gologin.languages = c.join(","), e.gologin.langHeader = u, e.browserLang
                        }
                        return Sn(e)
                    },
                    Sn = function(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en-US"; return e.gologin.langHeader ? e.browserLang : (e.browserLang = n, e.gologin.languages = n, e.gologin.langHeader = n, n) }
            },
            4740: (e, n, r) => {
                "use strict";
                r.d(n, { H: () => x });
                var t = r(9591),
                    a = r.n(t),
                    o = r(8779),
                    i = r.n(o),
                    s = r(3292),
                    l = r(8050),
                    c = r(1583),
                    u = r(4040),
                    d = r(2928),
                    m = r(4594),
                    f = r(5753),
                    p = r(2111),
                    v = r(6745),
                    g = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en-US",
                            r = "",
                            t = "";
                        if (e.gologin.languages) try {
                            var a = e.gologin.languages.split(",");
                            t = h(a), r = e.gologin.languages
                        } catch (e) {}
                        return { accept_languages: r || n, selected_languages: r || n, app_locale: t || n, forced_languages: [t || n] }
                    },
                    h = function(e) { for (var n of e) { if (v.xd.includes(n)) return n; var [r] = n.split("-"); if (v.xd.includes(r)) return r } return "" },
                    y = r(4223),
                    b = r(1104),
                    w = r(5472),
                    S = r(8062),
                    k = r(7703),
                    _ = r(5664),
                    P = r(135);

                function T(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function E(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? T(Object(r), !0).forEach((function(n) { i()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                var C = new m.ExtensionsManager,
                    M = new u.CommonDataManager,
                    O = new c.o;
                class x {
                    constructor() { return i()(this, "paths", {}), i()(this, "apiUrl", ""), x.instance || (x.instance = this), x.instance }
                    init() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        this.paths = e, this.apiUrl = n
                    }
                    prepareProfileToLaunch(e) {
                        var n = this;
                        return a()((function*() {
                            var { profileFingerprint: r, profileId: t, automation: a } = e, o = M.accessToken, { name: i = "", devicePixelRatio: s, owner: l, profile: c = "", debugMode: u = !1, fonts: d, os: m, osSpec: g, osProfileRunPrefs: h, isM1: y = !1, navigator: b = {}, checkCookies: w = !0, clientRects: S = { mode: "noise", noise: 0 }, chromeExtensions: k = [], userChromeExtensions: _ = [], cookies: P = { clearCookies: !1, userCookies: !1 }, storageInfo: T, startUrl: C = "", useCookiesExt: O = !0, vaultToken: x = "", bookmarks: N, isAutoGenerated: I = !1, autoLang: B = !0, webRTC: j, isBookmarksSynced: D, lockEnabled: R = !1 } = r, A = "mac" === m && (null == g ? void 0 : g.includes("M")) || y;
                            if (C.includes("iphey.com/{compare_profile}")) {
                                var L = yield(0, f.es)(n.apiUrl);
                                r.startUrl = r.startUrl.replace("iphey.com/{compare_profile}", "iphey.com/fingerprint_params?token=".concat(null == L ? void 0 : L.token, "&profile_id=").concat(t))
                            }
                            var { platform: F = "win32", resolution: G = "1920x1080", userAgent: U, doNotTrack: z = !1, language: H = "en-US,en;q=0.9", hardwareConcurrency: W = 2, deviceMemory: K = 2, maxTouchPoints: V = 0 } = b, [q, Z] = G.split("x"), { canvas: J } = r, { mode: $, noise: X } = J, { proxy: Y = {}, proxyEnabled: Q = !1 } = r, { username: ee = "", password: ne = "", mode: re = "none", autoProxyRegion: te = "us", torProxyRegion: ae = "us" } = Y, { autoProxyServer: oe = "", autoProxyUsername: ie = "", autoProxyPassword: se = "" } = r, { webGL: le = {} } = r, { mode: ce = "noise", noise: ue, getClientRectsNoise: de = 0 } = le, me = S.noise || de, { webGLMetadata: fe = {}, webglParams: pe = {} } = r, { vendor: ve = "", renderer: ge = "", mode: he = "mask" } = fe, { mediaDevices: ye = {} } = r, { enableMasking: be = !0, uid: we, audioInputs: Se = 1, videoInputs: ke = 1, audioOutputs: _e = 1 } = ye, { plugins: Pe = {} } = r, { enableVulnerable: Te = !0, enableFlash: Ee = !0 } = Pe, { storage: Ce = {} } = r, { local: Me = !0, bookmarks: Oe = !0, history: xe = !0, passwords: Ne = !0, extensions: Ie = !0, session: Be = !0, indexedDb: je = !0, enableExternalExtensions: De = !1 } = Ce, { timezone: Re } = r, { timezone: Ae, fillBasedOnIp: Le = !1 } = Re, { audioContext: Fe = {} } = r, { mode: Ge = "off", noise: Ue } = Fe, [ze] = H.split(";"), [He] = ze.split(","), We = ze;
                            H.split(",").forEach((function(e, n) {
                                if (n) {
                                    var [r] = e.split(";");
                                    We += ",".concat(r)
                                } else We = e
                            }));
                            var Ke, Ve, { geolocation: qe = {} } = r,
                                Ze = r.dns || "",
                                { createdInOs: Je } = r;
                            if (null != a && a.workflowId && null != a && a.extensionId) {
                                var $e = (0, p.NE)({ extensionId: a.extensionId, workflowId: a.workflowId });
                                console.info("automationStartUrl:", $e), [Ke, Ve] = [$e, [$e]]
                            } else Ke = n.getFirstStartupUrl(r.startUrl) || "", Ve = (r.startUrl || "").split(",").map((function(e) { return e.trim() }));
                            var Xe = s;
                            return Math.ceil(s || 3.5) === s && (Xe += 1e-8), { profileId: t, lockEnabled: R, vaultToken: x, storageInfo: T, useCookiesExt: O, accessToken: o, proxy: Y, profile: c, owner: l, os: m, osSpec: g, autoLang: B, proxyEnabled: Q, autoProxyRegion: te, torProxyRegion: ae, autoProxyServer: oe, autoProxyUsername: ie, autoProxyPassword: se, region: "US", timezoneValue: Ae, browserLang: He, fillProxyByIp: Le, debugMode: u, session: Be, createdInOs: Je, checkCookies: w, isAutoGenerated: I, bookmarks: N, isBookmarksSynced: D, bookmarksSettings: { editing_enabled: Oe }, history: { saving_disabled: !xe }, credentials_enable_service: Ne, extensionsEnabled: Ie, localStorageEnabled: Me, indexedDbEnabled: je, enableExternalExtensions: De, fonts: d, chromeExtensions: null != a && a.workflowId ? [...new Set([...k, v.up])] : k, userChromeExtensions: _, cookies: P, gologin: E(E({ profile_id: t, name: i, is_m1: A }, h), {}, { geoLocation: qe, navigator: { platform: F, max_touch_points: V }, dns: Ze, proxy: { username: "none" !== re ? ee : "", password: "none" !== re ? ne : "" }, screenHeight: parseInt(Z, 10), screenWidth: parseInt(q, 10), userAgent: U, webGl: { vendor: ve, renderer: ge, mode: "mask" === he }, webRTC: j, webgl: { metadata: { vendor: ve, renderer: ge, mode: "mask" === he } }, mobile: { enable: "android" === m, width: parseInt(q, 10), height: parseInt(Z, 10), device_scale_factor: Xe }, webglParams: pe, webgl_noice_enable: "noise" === ce, webglNoiceEnable: "noise" === ce, webgl_noise_enable: "noise" === ce, webgl_noise_value: ue, webglNoiseValue: ue, getClientRectsNoice: me, get_client_rects_noise: me, client_rects_noise_enable: "noise" === S.mode, mediaDevices: { enable: be, uid: we, audioInputs: Se, audioOutputs: _e, videoInputs: ke }, doNotTrack: z, plugins: { all_enable: Te, flash_enable: Ee }, storage: { enable: Me }, audioContext: { enable: "off" !== Ge, noiseValue: Ue }, languages: We, langHeader: H, canvasMode: $, canvasNoise: X, hardwareConcurrency: W, deviceMemory: 1024 * K, startupUrl: Ke, startup_urls: Ve }) }
                        }))()
                    }
                    updatingBrowserSettings(e) {
                        return a()((function*() {
                            var n, { profileData: r, publicUserIp: t, profileExtensionsCheckRes: a = [], timezoneCheckResult: o, args: i } = e,
                                c = (null === (n = r.gologin) || void 0 === n ? void 0 : n.userAgent) || "",
                                u = (new l.BrowserReleasesManager).getMajorVersionByUA(c);
                            if (Number(u || 120) >= k.ED) {
                                var d = function(e, n) {
                                        if (!e.autoLang) return g(e);
                                        var r = "",
                                            { country: t = "", languages: a } = n;
                                        if (!a) return g(e);
                                        var [o] = a.split(",");
                                        r = "".concat(o, "-").concat(t) || "";
                                        var i = [],
                                            [s = "", l = ""] = r.split("-");
                                        l && i.push([s, l].join("-")), i.push(s, "en-US", "en"), i = [...new Set(i)];
                                        var c = h(i);
                                        return { accept_languages: i.join(","), selected_languages: i.join(","), app_locale: c, forced_languages: [c] }
                                    }(r, o),
                                    m = { intl: d };
                                yield(0, S.s)(k.IE.replace("{profileId}", r.profileId), m)
                            }
                            var { profileId: f } = r, p = k.xL.replace("{profileId}", f) + "Preferences";
                            console.log("path to preferences: ", p);
                            var y, w = yield(0, s.readFile)(p, "utf-8").catch((function() { return console.log("no pref file"), JSON.stringify(b.H) }));
                            try { y = JSON.parse(w) } catch (e) { throw console.log(w), e }
                            y.gologin = r.gologin, y.gologin.unpinable_extension_names = ["passwords-ext"], y.bookmarks = r.bookmarksSettings, y.history = r.history, y.credentials_enable_service = r.credentials_enable_service, y.extensions.block_external_extensions = !r.enableExternalExtensions, y.gologin.webrtc = { enable: r.gologin.webRTC.enable, should_fill_empty_ice_list: r.gologin.webRTC.isEmptyIceList, mode: r.gologin.webRTC.mode }, delete y.gologin.webRTC;
                            var _ = yield O.setExtPathsAndRemoveDeleted({ settings: y, profileExtensionsCheckRes: a, profileId: f }),
                                P = C.getExtensionsToInstall(_, a),
                                T = a.find((function(e) { return e.includes(v.up) }));
                            T && (P.push(T), P = [...new Set(P)]), console.log("extensionsToInstall:", P);
                            var E = i.findIndex((function(e) { return e.includes("--load-extension") })) || 0;
                            if (P.length && E > 0 && (i[E] = i[E].slice(0, -1) + "," + P.join(",") + '"'), _) {
                                var M = y.extensions || {};
                                M.settings = _, y.extensions = M
                            }
                            yield(0, s.writeFile)(p, JSON.stringify(y), { mode: 438 }), console.log("Preferences has been successfully updated")
                        }))()
                    }
                    prepareCookies(e, n) {
                        var r = arguments,
                            t = this;
                        return a()((function*() {
                            var a = (r.length > 2 && void 0 !== r[2] ? r[2] : w.Ng).startChild({ op: "prepare-cookies" }) || { finish: function() { return null } },
                                o = t.paths.PROFILES_DIR + e + t.paths.COOKIES_FILE;
                            return yield(0, s.access)(o).catch((function() { o = t.paths.PROFILES_DIR + e + t.paths.COOKIES_FILE_NEW })), console.log("startProf cookiesFilePath:", o), d.t.prepareCookies(e, n, o).finally((function() { return a.finish() }))
                        }))()
                    }
                    prepareGologinExts(e) {
                        return a()((function*() {
                            var { name: n, profileId: r, owner: t, useCookiesExt: a, vaultToken: o, startProfileTransactionSentry: i } = e, s = i.startChild({ op: "prepare-gologin-extensions" }), l = o, c = { name: n, profileId: r, password: t, token: l, useCookiesExt: a };
                            return (0, y.r)(c, !1, i).then((function(e) { return { profileGologinExtensionPath: e.map((function(e) { return (null == e ? void 0 : e.extPath) || "" })).join(","), passwordsTemporaryToken: l } })).catch((function(e) {
                                var n = e instanceof Error ? e.message : e;
                                (0, _.oj)({
                                    message: n,
                                    transactionName: "creating-profile-extensions-error",
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["profileId", r]
                                    ]
                                })
                            })).finally((function() { return s.finish() }))
                        }))()
                    }
                    checkTempFiles(e, n) {
                        var r = this;
                        return a()((function*() {
                            var t = n.startChild({ op: "check-temp-files" });
                            console.log("Removing stuck files");
                            var a = ["".concat(r.paths.ROUTE_SLASH, "SingletonLock"), "".concat(r.paths.ROUTE_SLASH, "RunningChromeVersion"), "".concat(r.paths.ROUTE_SLASH, "SingletonCookie"), "".concat(r.paths.ROUTE_SLASH, "SingletonSocket")].map((function(n) { return (0, s.unlink)(r.paths.PROFILES_DIR + e + n).catch((function() { return Promise.resolve() })) }));
                            return Promise.all(a).catch((function(n) {
                                var r = n instanceof Error ? n.message : n;
                                throw (0, _.oj)({
                                    message: r,
                                    transactionName: "check-temp-files",
                                    level: "warning",
                                    tags: [
                                        ["scenario", "run-profile"],
                                        ["profileId", e]
                                    ]
                                }), n
                            })).finally((function() { return t.finish() }))
                        }))()
                    }
                    removeUselessFolders(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w.Ng;
                        console.log("Removing useless folders");
                        var t = r.startChild({ op: "remove-useless-folders" });
                        return "android" === n ? (0, P.kA)(this.paths.PROFILES_DIR + e + "".concat(this.paths.ROUTE_SLASH, "Default").concat(this.paths.ROUTE_SLASH, "Sessions")).catch((function(n) {
                            var r = n instanceof Error ? n.message : n;
                            (0, _.oj)({
                                message: r,
                                transactionName: "remove-useless-folder",
                                level: "warning",
                                tags: [
                                    ["scenario", "run-profile"],
                                    ["profileId", e]
                                ]
                            })
                        })).finally((function() { return t.finish() })) : Promise.resolve()
                    }
                    getFirstStartupUrl(e) { if (!e) return ""; var [n] = e.split(","); return n.trim() }
                }
                i()(x, "instance", void 0)
            },
            5753: (e, n, r) => {
                "use strict";
                r.d(n, { T: () => d, Wr: () => u, es: () => c });
                var t = r(9591),
                    a = r.n(t),
                    o = r(5346),
                    i = r(5664),
                    s = r(8911),
                    l = new(r(4040).CommonDataManager),
                    c = function(e) {
                        return (0, o.$)({ url: "".concat(e, "/browser/features/profile-params-token"), method: "GET", timeout: 3e4, retryLimit: 5 }).catch((function(e) {
                            var n = e instanceof Error ? e.message : e;
                            return (0, i.oj)({
                                message: n,
                                transactionName: "get-profile-params-token-error",
                                level: "warning",
                                tags: [
                                    ["scenario", "run-profile"]
                                ]
                            }), {}
                        }))
                    },
                    u = function(e) { return (0, s.Z)({ fn: () => (0, o.$)({ url: "".concat(l.apiBaseUrl, "/browser/features/").concat(e, "/info-for-run") }), retryDelay: 300 }) },
                    d = function() { var e = a()((function*(e) { return (0, o.$)({ url: "".concat(l.apiBaseUrl, "/proxy/set_proxy_statuses"), method: "POST", body: { proxies: e } }).catch((function() {})) })); return function(n) { return e.apply(this, arguments) } }()
            },
            2111: (e, n, r) => {
                "use strict";
                r.d(n, { NE: () => o, ir: () => i, yj: () => s });
                var t = r(6113),
                    a = r.n(t),
                    o = function(e) { var { extensionId: n = "", workflowId: r = "" } = e; return "javascript:;window.open('chrome-extension://".concat(n, "/newtab.html#/workflows/").concat(r, "/run', '_self')") },
                    i = function() { return a().generateKeyPairSync("rsa", { modulusLength: 2048, publicKeyEncoding: { type: "spki", format: "pem" }, privateKeyEncoding: { type: "pkcs8", format: "pem" } }).publicKey.concat().split("\n").join("").replace("-----BEGIN PUBLIC KEY-----", "").replace("-----END PUBLIC KEY-----", "") },
                    s = function(e) {
                        var n = Buffer.from(e, "base64"),
                            r = [...a().createHash("sha256").update(n).digest().slice(0, 16).toString("hex").toLowerCase()];
                        return (r = r.map((function(e) { return isNaN(+e) ? String.fromCharCode(e.charCodeAt(0) + 10) : "abcdefghijklmnop" [parseInt(e, 16)] }))).join("")
                    }
            },
            3405: (e, n, r) => {
                "use strict";
                r.d(n, { AD: () => c, bc: () => u, mC: () => l });
                var t = r(3292),
                    a = r(1017),
                    o = r.n(a),
                    i = r(7703),
                    s = r(6745),
                    l = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; if (!e.split) return "0"; var [n] = e.split("."); return n },
                    c = function() { var e = o().join(i.wk, i.ko, "version"); return "darwin" === i.iw && (e = o().join(i.wk, "version", s.Ey)), (0, t.readFile)(e, { encoding: "utf-8" }).catch((function() { return "0.0.0" })) },
                    u = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = e || "0";
                        return [i.ko, n].join("-")
                    }
            },
            8393: (e, n, r) => {
                "use strict";
                r.d(n, { C: () => c });
                var t = r(3292),
                    a = r(6197),
                    o = r.n(a),
                    i = r(8740),
                    s = r.n(i),
                    l = r(8911);
                class c {
                    static extractExtension(e, n) { if (!e || !n) throw new Error("Missing parameter"); return (0, t.access)(e).then((function() { return (0, l.Z)({ fn: () => o()(e, n, { plugins: [s()()], filter: function(e) { return !e.path.endsWith("/") } }) }) })) }
                    static deleteExtensionArchive(e) { if (!e) throw new Error("Missing parameter"); return (0, t.access)(e).then((function() { return (0, t.unlink)(e) }), (function() { return Promise.resolve() })) }
                }
            },
            4223: (e, n, r) => {
                "use strict";
                r.d(n, { h: () => b, r: () => _ });
                var t = r(8779),
                    a = r.n(t),
                    o = r(9591),
                    i = r.n(o),
                    s = r(1017),
                    l = r.n(s),
                    c = r(5472),
                    u = r(725),
                    d = r(7703),
                    m = r(135);

                function f(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function p(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? f(Object(r), !0).forEach((function(n) { a()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                var { access: v, readFile: g, writeFile: h, readdir: y } = r(7147).promises, b = function(e) { return v(l().join(d.im, e.baseFolderName)).then((function() { return !0 })).catch((function() { return !1 })) }, w = function() {
                    var e = i()((function*(e, n) {
                        var r = l().join(d.im, e.baseFolderName),
                            t = l().join(d.im, e.extName, n);
                        yield(0, m.MZ)(r, t);
                        return k(e, { profileId: n }, !0)
                    }));
                    return function(n, r) { return e.apply(this, arguments) }
                }(), S = function() {
                    var e = i()((function*(e, n) {
                        var { profileId: r, password: t, token: a, name: o } = n, i = yield g(l().join(d.im, e.extName, r, "uid.example.json"), "utf-8"), s = JSON.parse(i);
                        s.uid = r, s.port = global.appPort || 36912, e.name.includes("Pass") && (delete s.port, s.password = t, s.token = a, s.name = o), yield h(l().join(d.im, e.extName, r, "uid.json"), JSON.stringify(s), { mode: 438 })
                    }));
                    return function(n, r) { return e.apply(this, arguments) }
                }(), k = function() {
                    var e = i()((function*(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            { profileId: t } = n,
                            a = { extPath: "" },
                            o = yield v(l().join(d.im, e.extName, t, "manifest.json")).then((function() { return !0 })).catch((function() { return !1 }));
                        if (r || !o) return r ? o : a;
                        var i = yield g(l().join(d.im, e.versionFile), "utf-8").catch((function() { return "" }));
                        if (console.log("".concat(e.name, " extVersionFileContent:"), i), !i) { console.log("ext version file not found!!"); var s = yield y(d.im).catch((function(e) { return console.log(e) })); return console.log(s), yield(0, u.checkGologinExtensions)(), a }
                        return yield S(e, n).then((function() { return !0 })).catch((function() { return !1 })), p(p({}, a), {}, { extPath: l().join(d.im, e.extName, t) })
                    }));
                    return function(n, r) { return e.apply(this, arguments) }
                }(), _ = function() {
                    var e = i()((function*(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Ng,
                            { profileId: t, token: a, useCookiesExt: o = !0 } = e,
                            s = u.EXTENSIONS_TO_DOWNLOAD.map(function() {
                                var n = i()((function*(n) {
                                    if ("Passwords Ext" === n.name && !a || "Cookies Ext" === n.name && !o) throw "do nothing";
                                    var i = yield k(n, e),
                                        { extPath: s } = "boolean" == typeof i ? { extPath: null } : i;
                                    if (s) return { extPath: s };
                                    if (!b(n)) {
                                        r.setTag("download-gologin-extensions", !0), console.log("ext version file not found!!");
                                        var c = yield y(d.im).catch((function(e) { return console.log(e) }));
                                        console.log(c), yield(0, u.checkGologinExtensions)()
                                    }
                                    if (!(yield w(n, t))) throw "".concat(n.name, " extracting failed");
                                    return yield S(n, e).then((function() { return !0 })).catch((function() { return !1 })), { extPath: l().join(d.im, n.extName, t) }
                                }));
                                return function(e) { return n.apply(this, arguments) }
                            }()),
                            m = yield Promise.allSettled(s);
                        return m.every((function(e) { return "fulfilled" === e.status })) || n ? m.map((function(e) { return e.value })) : _(e, !0)
                    }));
                    return function(n) { return e.apply(this, arguments) }
                }()
            },
            9408: (e, n, r) => {
                "use strict";
                r.d(n, { N: () => m });
                var t = r(8779),
                    a = r.n(t);
                const o = require("axios");
                var i = r.n(o),
                    s = r(4040),
                    l = r(5346);

                function c(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function u(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? c(Object(r), !0).forEach((function(n) { a()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                i().defaults.headers["Content-Type"] = "application/json";
                var d = new s.CommonDataManager,
                    m = function(e) { var { endpoint: n, method: r, headers: t, body: a } = e, o = { url: "".concat(d.apiBaseUrl).concat(n), method: r, headers: u(u({}, t), {}, { Authorization: "Bearer ".concat(d.accessToken), "user-agent": d.userAgent, "x-two-factor-token": d.twoFaKey }) }; return "GET" !== r && (o.body = a), (0, l.$)(o).catch((function() { return null })) }
            },
            5499: (e, n, r) => {
                "use strict";
                r.r(n), r.d(n, { ProxyService: () => c });
                var t = r(9591),
                    a = r.n(t);
                const o = require("net");
                var i = r.n(o),
                    s = r(2964),
                    l = r(5664);
                class c {
                    static checkProxy(e) {
                        var n = arguments,
                            r = this;
                        return a()((function*() {
                            var t = n.length > 1 && void 0 !== n[1] && n[1],
                                a = "fail",
                                o = "",
                                i = "",
                                u = "",
                                d = "",
                                m = "",
                                f = "",
                                p = "",
                                { username: v = "", password: g = "", host: h } = e;
                            if ((!v || !g) && h.includes("floppydata.com")) return { status: "fail", error: "profileStatusMessages.invalidProxy" };
                            if (e.port < 0 || e.port > 65535) return { status: "fail", error: "notifications.error.invalidPort" };
                            if (t && (p = yield r.getPing(e)), "Check timeout exceeded" === p) return { status: "fail", error: "notifications.error.timeoutExceeded" };
                            var y = (yield(0, s.i)(e).catch((function(e) {
                                var n = e instanceof Error ? e.message : e;
                                return (0, l.oj)({
                                    message: n,
                                    transactionName: "check-proxy",
                                    tags: [
                                        ["scenario", "check-proxy"]
                                    ]
                                }), f = c.getFormattedError(e), { response: {}, status: "fail", error: "profileStatusMessages.invalidProxy" }
                            }))).response;
                            if (Object.prototype.hasOwnProperty.call(y, "status")) return { status: a, origin: o, country: i, timezone: u, languages: d, city: m, ping: p, error: f || "notifications.error.proxyError" };
                            var b = y;
                            return !b.ip && b.statusCode && b.statusCode.toString().startsWith("4") && (f = c.getFormattedError(y)), b.toString().toLowerCase().includes("access denied") ? f = "notifications.error.proxyAuthError" : (o = b.ip || "", i = b.country || "", u = b.timezone || "", d = b.languages || "", m = b.city || "", a = o && o.length ? "success" : "fail"), { status: a, origin: o, country: i, timezone: u, languages: d, city: m, ping: p, error: f || "notifications.error.proxyError" }
                        }))()
                    }
                    static getPing(e) {
                        return a()((function*() {
                            return new Promise((function(n) {
                                var r = setTimeout((function() { t.destroy(), n("Check timeout exceeded") }), 1e4),
                                    t = new(i().Socket),
                                    a = process.hrtime();
                                t.connect(e.port, e.host, (function() {
                                    clearTimeout(r);
                                    var e = process.hrtime(a),
                                        o = parseInt(((1e9 * e[0] + e[1]) / 1e6).toString());
                                    t.destroy(), n(o)
                                })), t.on("error", (function() { clearTimeout(r), t.destroy(), n(null) }))
                            }))
                        }))()
                    }
                    static getFormattedError(e) { return JSON.stringify(e).includes("407") ? "notifications.error.proxyAuthError" : "notifications.error.proxyConnectionError" }
                }
            },
            9846: (e, n, r) => {
                "use strict";
                r.d(n, { $c: () => m, pI: () => p, qS: () => d, qn: () => f });
                var t = r(9591),
                    a = r.n(t),
                    o = r(1017),
                    i = r.n(o),
                    s = r(9496),
                    l = r(8062),
                    c = r(7703),
                    u = i().join(c.Mv, "appConfig.json"),
                    d = function() {
                        var e = a()((function*(e) {
                            var n = yield f();
                            if (n) {
                                var { windowWidth: r, windowHeight: t, windowPosX: a = 0, windowPosY: o = 0, isMaximized: i = !1, isFullScreen: l = !1, theme: c = "system" } = n;
                                r && Number(r) > 1e3 && (e.windowWidth = Number(r)), t && Number(t) > 500 && (e.windowHeight = Number(t)), !l && (e.windowPosX = Number(a)), !l && (e.windowPosY = Number(o)), e.isMaximized = i, e.isFullScreen = l;
                                var u = c;
                                "system" === u && (u = null !== s.nativeTheme && void 0 !== s.nativeTheme && s.nativeTheme.shouldUseDarkColors ? "dark" : "light");
                                var d = "dark" === u ? "#191A23" : "#F9F9F9";
                                e.backgroundColor = d
                            }
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    m = function() {
                        var e = a()((function*(e, n, r) {
                            var t = {},
                                { language: a } = n || {};
                            a && (t.language = a);
                            var { width: o = 1024, height: i = 500, x: s = 0, y: l = 0 } = e && e.getBounds() || {};
                            t.windowWidth = o, t.windowHeight = i, t.windowPosX = s, t.windowPosY = l, t.isMaximized = !!e.isMaximized(), t.isFullScreen = !!e.isFullScreen(), t.theme = r, yield p(t).catch((function(e) { return console.log(e) }))
                        }));
                        return function(n, r, t) { return e.apply(this, arguments) }
                    }(),
                    f = function() { var e = a()((function*() { return (0, l.D)(u) })); return function() { return e.apply(this, arguments) } }(),
                    p = function() {
                        var e = a()((function*(e) {
                            var { CommonDataManager: n } = yield Promise.resolve().then(r.bind(r, 4040)), t = new n, a = t.appConfig, o = Object.entries(e);
                            o.length && (o.forEach((function(e) {
                                var [n, r = null] = e;
                                n && null !== r && (a[n] = r)
                            })), t.appConfig = a, yield(0, l.s)(u, a))
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }()
            },
            5879: (e, n, r) => {
                "use strict";
                r.d(n, { N: () => p, O: () => u });
                var t = r(9591),
                    a = r.n(t),
                    o = r(3292),
                    i = r(1017),
                    s = r.n(i),
                    l = r(9496),
                    c = r(8057),
                    u = function() {
                        var e = a()((function*(e, n) {
                            var { iconsPngs: r = [], profilePath: t = "", os: a, iconDesignVersion: i = null } = e, { browserIconsSizes: u } = (0, c.R)(a), { scaleFactor: d = 1 } = l.screen.getPrimaryDisplay();
                            if (["win10", "win11", "mac"].includes(a) && (u = u.map((function(e) { return e * d })), "win10" === a)) {
                                var [m] = u;
                                u = [m, m / 2]
                            }
                            var f = r.reduce((function(e, n, r) {
                                var a = "avatar.png";
                                if ("2:green-square" === i) {
                                    var l = "".concat(u[r]);
                                    a = "".concat(l, ".png")
                                }
                                var c = s().join(t, a),
                                    d = n.replace(/^data:image\/png;base64,/, "");
                                return e.push((0, o.writeFile)(c, d, "base64")), e
                            }), []);
                            yield Promise.all(f), null == n || n.finish()
                        }));
                        return function(n, r) { return e.apply(this, arguments) }
                    }(),
                    d = r(6745),
                    m = r(8050),
                    f = r(6069),
                    p = function(e) {
                        if (e) {
                            var { scaleFactor: n = 1 } = l.screen.getPrimaryDisplay(), r = process.platform, t = 10;
                            e.webContents.executeJavaScript("\n    localStorage.setItem('".concat(d.E_, ":osPlatform', '").concat(r, "');\n    localStorage.setItem('").concat(d.E_, ":scaleFactor', ").concat(n, ");\n  ")), "win32" === r && (t = (0, f.lZ)(), e.webContents.executeJavaScript("localStorage.setItem('".concat(d.E_, ":winVersionMajor', '").concat(t, "');"))), e && (new m.BrowserReleasesManager).updateReleasesListInLocalStorage(e)
                        }
                    }
            },
            2311: (e, n, r) => {
                "use strict";
                r.r(n), r.d(n, { checkBrowser: () => W, downloadBrowser: () => V });
                var t = r(9591),
                    a = r.n(t),
                    o = r(8779),
                    i = r.n(o),
                    s = r(3292),
                    l = r(2037),
                    c = r.n(l),
                    u = r(1017),
                    d = r.n(u),
                    m = r(6464),
                    f = r.n(m),
                    p = r(6197),
                    v = r.n(p);
                const g = require("decompress-targz");
                var h = r.n(g),
                    y = r(8740),
                    b = r.n(y),
                    w = r(5630),
                    S = r(5346),
                    k = r(7703),
                    _ = r(5664),
                    P = r(6069),
                    T = r(135),
                    E = r(8911),
                    C = r(6745),
                    M = r(8050),
                    O = r(3405);

                function x(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function N(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? x(Object(r), !0).forEach((function(n) { i()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                var I = f().promisify(r(2081).exec),
                    B = { step: 0, inProgress: !0 },
                    j = null,
                    D = N({}, B),
                    R = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        console.log("IN checkBrowserArchive"), D = N(N({}, D), {}, { step: 1 }), j && j.sender.send("download-browser", { progressState: D, result: !1, orbitaVersion: e });
                        var n = d().join(k.wk, C.qU).replace("{{orbita-version}}", "");
                        return (0, E.Z)({ fn: () => (0, s.access)(n), retryDelay: 100 })
                    },
                    A = function() {
                        var e = a()((function*() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            console.log("IN downloadNewBrowser", { orbitaVersion: e }), j && j.sender.send("download-browser", { progressState: D, result: !1, orbitaVersion: e });
                            var n = d().join(k.wk, C.qU).replace("{{orbita-version}}", "");
                            yield(0, T.kA)(n).catch((function() { return null }));
                            var r = (new M.BrowserReleasesManager).localOrbitaReleasesList,
                                t = e,
                                a = t ? "-".concat(t) : "",
                                o = C.XZ;
                            if ("win32" === k.iw) {
                                if ((0, P.lZ)() < 10) {
                                    if (t && Number(t) >= 110) throw j && j.sender.send("download-browser", { progressState: D, result: !0, unsupportedWinVersion: !0 }), new Error("notifications.error.unsupportedWinVersion");
                                    t || r[109] || (t = "109", a = "-109")
                                }
                                o = C.YX
                            }
                            "darwin" === k.iw && (o = C.s1, "macM1" === (yield(0, P.Ij)()) && (o = C.E9));
                            o = o.replace("{{orbita-version}}", a), yield(0, E.Z)({ fn: () => (0, s.mkdir)(k.wk, { recursive: !0 }) }).catch((function(e) { throw console.log("error in making browser dir"), e })), console.log("orbita download started"), yield(0, w.Sc)({ url: o, destFile: n, progressEvent: j, progressEventName: "download-browser", progressState: D, isContinueStream: !0, retryDelay: 5e3, retryLimit: 100, orbitaVersion: e }), console.log("orbita download finished"), yield R(e), yield U(t)
                        }));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    L = function() {
                        var e = a()((function*() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            console.log("IN downloadHashFile");
                            var n = k.iw,
                                r = C.mN,
                                t = d().join(k.wk, C.Wm);
                            if ("win32" === n) return Promise.resolve();
                            "darwin" === n && (r = C.XS, t = d().join(k.wk, C.gZ), "macM1" === (yield(0, P.Ij)()) && (r = C.xD, t = d().join(k.wk, C.x8)));
                            var a = e ? "-".concat(e) : "";
                            return r = r.replace("{{orbita-version}}", a), t = t.replace("{{orbita-version}}", a), (0, E.Z)({ fn: () => (0, S.$)({ url: r, timeout: 3e4, method: "GET", json: !1 }).then((function(e) { return (0, s.writeFile)(t, e, { mode: 438 }) })).then((function() { return (0, s.access)(t) })).then((function() { return Promise.resolve() }), (function() { return Promise.reject(new Error("Hash file has not been downloaded")) })), retryDelay: 1e3, limit: 10 })
                        }));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    F = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return L(e).then((function() {
                            console.log("IN checkBrowserSum");
                            var n = k.iw,
                                r = d().join(k.wk, C.xM),
                                t = e ? "-".concat(e) : "";
                            if ("win32" === k.iw) return Promise.resolve();
                            if ("darwin" === n) {
                                var a = d().join(k.wk, C.xM, "Orbita-Browser.app"),
                                    o = d().join(k.wk, C.gZ).replace("{{orbita-version}}", t);
                                return (0, E.Z)({ fn: () => I("mtree -p ".concat(a, " < ").concat(o, " || echo ").concat(C._y)).then((function() { return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().trim().includes(C._y) ? c().release().toLowerCase().includes("debian") ? Promise.reject(new Error("Debian os is not supported")) : Promise.reject(new Error("Error in sum matching")) : Promise.resolve() })) })
                            }
                            var i = d().join(k.wk, C.Wm).replace("{{orbita-version}}", t);
                            return (0, E.Z)({
                                fn: () => (0, s.readFile)(i, "utf-8").then((function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                        n = e.trim();
                                    return [n] = e.split(" "), n = n.replace(/(\r\n|\n|\r)/gm, ""), I("cd ".concat(r, " && find orbita-browser -type f -print0 | sort -z |              xargs -0 sha256sum > ").concat(k.wk, "/calculatedFolderSha.txt")).then((function() { return I("cd ".concat(k.wk, " && sha256sum calculatedFolderSha.txt")) })).then((function(e) { var r = (e.stdout || "").toString().trim(); return [r] = r.split(" "), r !== n ? Promise.reject(new Error("Error in sum matching")) : Promise.resolve() }))
                                }))
                            })
                        }))
                    },
                    G = function() {
                        var e = a()((function*() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            console.log("IN replaceBrowser"), D = N(N({}, D), {}, { step: 2 }), j && j.sender.send("download-browser", { progressState: D, result: !1, orbitaVersion: e });
                            var n = yield H(e).catch((function(e) {
                                    var n = e instanceof Error ? e.message : e;
                                    throw (0, _.zd)({
                                        message: n,
                                        transactionName: "request-last-orbita-version-error",
                                        level: "fatal",
                                        tags: [
                                            ["scenario", "download-orbita"],
                                            ["name", "request-last-orbita-version-error"]
                                        ]
                                    }), e
                                })),
                                [r] = n.split("."),
                                t = d().join(k.wk, k.ko + "-" + r);
                            console.log("browserPath:", t);
                            var a = "darwin" === k.iw ? d().join(k.wk, C.xM) : d().join(k.wk, C.xM, k.ko);
                            if (yield(0, s.rm)(t, { recursive: !0 }).catch((function() { return null })), yield(0, s.rename)(a, t).catch(console.log), "darwin" === k.iw) return (0, E.Z)({ fn: () => (0, s.mkdir)(d().join(t, "version"), { recursive: !0 }).then((function() { return (0, s.writeFile)(d().join(t, "version", C.Ey), n, { mode: 438 }) })), retryDelay: 100 }).catch((function(e) {
                                var n = e instanceof Error ? e.message : e;
                                (0, _.oj)({
                                    message: n,
                                    transactionName: "writing-orbita-version-file-error",
                                    tags: [
                                        ["scenario", "download-orbita"]
                                    ]
                                })
                            }))
                        }));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    U = function() {
                        var e = a()((function*() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            yield z(e), yield R(), yield F(e), yield G(e), D = N(N({}, D), {}, { step: 3 }), j && j.sender.send("download-browser", { progressState: D, result: !1 })
                        }));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    z = function() {
                        var e = a()((function*(e) {
                            console.log("IN extractBrowser"), console.log("extractBrowser absolutePath: ".concat(k.wk)), console.log("creating folder for extraction");
                            var n = d().join(k.wk, C.xM),
                                r = d().join(k.wk, C.qU).replace("{{orbita-version}}", "");
                            if (yield(0, E.Z)({ fn: () => (0, s.mkdir)(n, { recursive: !0 }), retryDelay: 100 }), console.log("starting decompress"), "darwin" !== k.iw) {
                                var t = { plugins: [h()()], filter: function(e) { return !e.path.endsWith("/") } };
                                if ("win32" === k.iw && (t.plugins[0] = b()()), "decompress error" === (yield(0, E.Z)({ fn: () => v()(r, n, t) }).catch((function() { return "decompress error" })))) {
                                    yield(0, s.rm)(r, { recursive: !0 });
                                    var a = yield q(e);
                                    console.log(a), yield(0, w.Sc)({ url: a, destFile: r, progressEvent: j, progressEventName: "download-browser", progressState: D, isContinueStream: !0, retryDelay: 5e3, retryLimit: 100, orbitaVersion: e }), yield(0, E.Z)({ fn: () => v()(r, n, t) })
                                }
                            } else yield I('tar -xzf "'.concat(r, '" -C "').concat(n, '"')).catch((function(e) { var n; if (null === (n = e.message) || void 0 === n || !n.includes("Ignoring malformed pax extended attribute")) throw e }))
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    H = function() {
                        var e = a()((function*() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                n = k.iw,
                                r = C.bk;
                            if ("win32" === n) r = C.fy;
                            else if ("darwin" === n) { r = C.l2, "macM1" === (yield(0, P.Ij)()) && (r = C._g) }
                            var t = e ? "-".concat(e) : "";
                            return r = r.replace("{{orbita-version}}", t), (0, E.Z)({ fn: () => (0, S.$)({ url: r, timeout: 1e4, json: !1 }).then((function(e) { return e ? e.replace(/(\r\n|\n|\r)/gm, "") : Promise.reject(new Error("Latest Version has not been provided")) })), retryDelay: 300 })
                        }));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    W = function() {
                        return (0, s.mkdir)(k.wk, { recursive: !0 }).catch(console.log).then((function() { return H() })).then((function(e) {
                            var n = e,
                                r = (0, O.mC)(n);
                            console.log("majorChromeVersion:", r);
                            var t = (new M.BrowserReleasesManager).localOrbitaReleasesList;
                            if (console.log("localBrowserReleases:", t), "win32" === k.iw) {
                                var a = (0, P.lZ)();
                                if (a < 10 && Number(r) >= 110 && t[109]) return { needDownloadNewBrowser: !1 };
                                a < 10 && !t[109] && (n = "109.1.2.9", r = "109")
                            }
                            var o = t[r];
                            if (!t[r]) return { needDownloadNewBrowser: !0 };
                            var i = d().join(k.wk, o),
                                l = d().join(i, "chrome");
                            return "darwin" === k.iw ? l = d().join(i, "Orbita-Browser.app") : "win32" === k.iw && (l = d().join(i, "chrome.exe")), console.log("executableFilePath:", l), (0, E.Z)({ fn: () => (0, s.access)(l), limit: 3 }).then((function() { return !0 }), (function() { return !1 })).then((function(e) { return e ? (0, E.Z)({ fn: () => (new M.BrowserReleasesManager).getLocalOrbitaVersionByPath(i) }).then((function(e) { return console.log("latestBrowserVersion:", n), console.log("currentVersion:", e), console.log("latestBrowserVersion === currentVersion:", n === e), n === e ? { needDownloadNewBrowser: !1 } : { needDownloadNewBrowser: !0, browserExist: !0 } })) : (0, T.kA)(d().join(i)).then((function() { return { needDownloadNewBrowser: !0 } })) }))
                        })).catch((function(e) {
                            var n = e instanceof Error ? e.message : e;
                            (0, _.zd)({
                                message: n,
                                transactionName: "check-orbita",
                                tags: [
                                    ["scenario", "download-orbita"],
                                    ["name", "check-orbita"]
                                ]
                            })
                        }))
                    },
                    K = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return (0, E.Z)({
                            fn: () => (0, s.rm)(d().join(k.wk, C.xM), { recursive: !0, force: !0 }).then((function() { return (0, s.readdir)(k.wk) })).then((function(e) { var n = []; return e.forEach((function(e) { e.match(/.*\.txt$/) && n.push((0, s.rm)(d().join(k.wk, e), { recursive: !0, force: !0 })) })), Promise.all(n) })).then(a()((function*() { if ("darwin" === k.iw) { var n = e ? "-".concat(e) : ""; return "macM1" === (yield(0, P.Ij)()) ? (0, s.rm)(d().join(k.wk, C.x8).replace("{{orbita-version}}", n), { recursive: !0, force: !0 }) : (0, s.rm)(d().join(k.wk, C.gZ).replace("{{orbita-version}}", n), { recursive: !0, force: !0 }) } }))).catch((function(e) {
                                var n = e instanceof Error ? e.message : e;
                                if ("string" != typeof n || !n.includes("ENOENT")) {
                                    if ("string" == typeof n && n.includes("ENOTEMPTY")) throw e;
                                    return (0, _.zd)({
                                        message: n,
                                        transactionName: "delete-orbita-installation-files",
                                        level: "warning",
                                        tags: [
                                            ["scenario", "download-orbita"],
                                            ["name", "delete-orbita-installation-files"]
                                        ]
                                    }), Promise.resolve()
                                }
                            })),
                            retryDelay: 300
                        })
                    },
                    V = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { orbitaVersion: "" },
                            { orbitaVersion: r } = n;
                        return j = e, "100" === r && (r = "10"), "103" === r && (r = "13"), A(r).then((function() { return (new M.BrowserReleasesManager).checkLocalOrbitaReleases() })).then((function() { return K(r) })).catch((function(e) { var n = e instanceof Error ? e.message : e; "string" == typeof n && n.includes("ENOSPC") && j && j.sender.send("download-browser", { progressState: D, result: !0, isDiscSpaceError: !0 }), D = N(N({}, D), {}, { errorMessage: n }); var t = "string" == typeof n ? n : "deleting old files error"; return K(r).finally((function() { return Promise.reject(new Error(t)) })) })).finally((function() {
                            var e = { progressState: N(N({}, D), {}, { inProgress: !1 }), result: !D.errorMessage, errorMessage: D.errorMessage || "" };
                            D = N({}, B), j && j.sender.send("download-browser", e)
                        }))
                    },
                    q = function() {
                        var e = a()((function*(e) {
                            var n = C.he;
                            ("win32" === k.iw && (n = C.Iy), "darwin" === k.iw) && (n = C.vd, "macM1" === (yield(0, P.Ij)()) && (n = C.a4));
                            return n.replace("{{orbita-version}}", e ? "-".concat(e) : "")
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }()
            },
            725: (e, n, r) => {
                "use strict";
                r.r(n), r.d(n, { EXTENSIONS_TO_DOWNLOAD: () => w, checkGologinExtensions: () => _, deleteProfileExtFolder: () => P });
                var t = r(9591),
                    a = r.n(t),
                    o = r(3292),
                    i = r(1017),
                    s = r.n(i);
                const l = require("fs-extra");
                var c = r.n(l),
                    u = r(6452),
                    d = r.n(u),
                    m = r(5630),
                    f = r(2197),
                    p = r(7703),
                    v = r(8911),
                    g = r(5346),
                    h = r(5664),
                    y = r(4223),
                    b = r(6464).promisify(r(2081).exec),
                    w = [{ name: "Cookies Ext", extName: "cookies-ext", extZipName: "cookies-ext.zip", hashFile: "hashfile.txt", hashFileUrl: "https://extensions.gologin.com/hashfile.txt", versionFile: "latest-version.txt", versionFileUrl: "https://extensions.gologin.com/latest-version.txt", extArchiveUrl: "https://extensions.gologin.com/gologin-browser-ext.zip", tempFolder: "downloaded-cookies-ext", baseFolderName: "cookies-ext-base" }, { name: "Passwords Ext", extName: "passwords-ext", extZipName: "passwords-ext.zip", hashFile: "passwords-hashfile.txt", hashFileUrl: "https://extensions.gologin.com/passwords-hashfile.txt", versionFile: "passwords-latest-version.txt", versionFileUrl: "https://extensions.gologin.com/passwords-latest-version.txt", extArchiveUrl: "https://extensions.gologin.com/gologin-browser-passwords-ext.zip", tempFolder: "downloaded-passwords-ext", baseFolderName: "passwords-ext-base" }],
                    S = function() {
                        var e = a()((function*(e) {
                            console.log("IN checkArchiveSum ".concat(e.name));
                            var { platform: n } = process, r = s().join(p.im, e.tempFolder), t = s().join(r, e.hashFile), a = "cd ".concat(r, " && sha256sum ").concat(e.extZipName);
                            return "win32" === n ? Promise.resolve() : ("darwin" === n && (a = "cd ".concat(r, " && shasum -a 256 ").concat(e.extZipName)), (0, v.Z)({
                                fn: () => new Promise((function(n, r) {
                                    var a = d().stream(e.hashFileUrl, { timeout: { request: 3e4 } });
                                    a.on("response", (function() {
                                        var e = c().createWriteStream(t, { mode: 438 });
                                        a.pipe(e), e.on("close", (function() { n(null) })), e.on("error", (function(e) { r(e) }))
                                    })), a.on("error", (function(e) { r(e) }))
                                }))
                            }).then((function() { return (0, v.Z)({ fn: () => (0, o.access)(t).catch((function() { return Promise.reject(new Error("Ext Hash file has not been downloaded")) })) }) })).then((function() {
                                return (0, v.Z)({
                                    fn: () => (0, o.readFile)(t, "utf8").then((function(n) {
                                        var r = n;
                                        return b(a).then((function(n) {
                                            var t = (n.stdout || "").toString().trim(),
                                                [a] = r.split(" "),
                                                o = t.split(" "),
                                                [i] = o;
                                            return o.length > 2 && (o.pop(), i = o.join("")), console.log("serverHash ".concat(e.name, ":"), a), console.log("userHash ".concat(e.name, ":"), i), i !== a ? Promise.reject(new Error("Error in ".concat(e.name, " sum matching"))) : Promise.resolve()
                                        }))
                                    }))
                                })
                            })))
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    k = function(e) {
                        return console.log("IN downloadNewExt ".concat(e.name)), (0, m.$j)({ url: e.extArchiveUrl, destFile: s().join(p.im, e.tempFolder, e.extZipName) }).then((function() { return console.log("download completed") })).then((function() {
                            return function(e) {
                                return (0, v.Z)({
                                    fn: () => (0, o.access)(s().join(p.im, e.tempFolder, e.extZipName)).catch((function(n) {
                                        var r = n instanceof Error ? n.message : n;
                                        return (0, h.zd)({
                                            message: r,
                                            transactionName: "check-gologin-extensions",
                                            tags: [
                                                ["scenario", "download-extensions"],
                                                ["name", "check-gologin-extensions"]
                                            ]
                                        }), Promise.reject(new Error("".concat(e.name, " Archive has not been found. ").concat(r)))
                                    }))
                                })
                            }(e)
                        })).then((function() { return S(e) })).then((function() {
                            return function(e) {
                                return console.log("IN moveNewExt ".concat(e.name)), (0, v.Z)({ fn: () => c().remove(s().join(p.im, e.extZipName)).then((function() { return c().remove(s().join(p.im, e.versionFile)) })).then((function() { return (0, f.N)(s().join(p.im, e.tempFolder, e.extZipName), s().join(p.im, e.baseFolderName)) })).then((function() { return c().copy(s().join(p.im, e.tempFolder, e.versionFile), s().join(p.im, e.versionFile)) })) }).then((function() { return c().remove(s().join(p.im, e.tempFolder)) })).catch((function(e) {
                                    var n = e instanceof Error ? e.message : e;
                                    return (0, h.zd)({
                                        message: n,
                                        transactionName: "extract-gologin-extension",
                                        tags: [
                                            ["scenario", "download-extensions"],
                                            ["name", "extract-gologin-extension"]
                                        ]
                                    }), Promise.resolve()
                                }))
                            }(e)
                        })).catch((function(e) {
                            var n = e instanceof Error ? e.message : e;
                            (0, h.zd)({
                                message: n,
                                transactionName: "download-gologin-extensions",
                                tags: [
                                    ["name", "download-gologin-extensions"]
                                ]
                            })
                        }))
                    },
                    _ = function() {
                        var e = a()((function*() {
                            var e = w.map(function() {
                                    var e = a()((function*(e) {
                                        var n, r = (yield(0, o.readFile)(s().join(p.im, e.versionFile)).catch((function() { return "" }))).toString(),
                                            t = (yield(n = e.versionFileUrl, (0, g.$)({ url: n, json: !1 }))).toString().trim(),
                                            a = yield(0, y.h)(e);
                                        !t || t === r && a || (yield(0, v.Z)({ fn: () => (0, o.mkdir)(s().join(p.im, e.tempFolder), { recursive: !0 }).then((function() { return (0, o.writeFile)(s().join(p.im, e.tempFolder, e.versionFile), t, { mode: 438 }) })).then((function() { return (0, o.mkdir)(s().join(p.im, e.extName), { recursive: !0 }) })) }).catch((function(e) { return Promise.reject(e) })), yield k(e))
                                    }));
                                    return function(n) { return e.apply(this, arguments) }
                                }()),
                                n = e.map((function(e) {
                                    return e.catch((function(e) {
                                        var n = e instanceof Error ? e.message : e;
                                        (0, h.zd)({
                                            message: n,
                                            transactionName: "check-gologin-extensions",
                                            tags: [
                                                ["scenario", "download-extensions"],
                                                ["name", "check-gologin-extensions"]
                                            ]
                                        })
                                    }))
                                }));
                            yield Promise.allSettled(n)
                        }));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    P = function(e) {
                        var n = [],
                            r = function(r) { n.push((0, v.Z)({ fn: () => c().remove(s().join(p.im, r.extName, e)) })) };
                        for (var t of w) r(t);
                        return Promise.all(n).catch((function() { return Promise.resolve() }))
                    }
            },
            8062: (e, n, r) => {
                "use strict";
                r.d(n, { D: () => l, s: () => s });
                var t = r(9591),
                    a = r.n(t),
                    o = r(3292),
                    i = r(5664),
                    s = function() {
                        var e = a()((function*(e, n) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "app";
                            try {
                                var t = JSON.stringify(n, null, "\t");
                                yield(0, o.writeFile)(e, t)
                            } catch (e) {
                                console.error("Error saving config file", e);
                                var a = e instanceof Error ? e.message : e;
                                (0, i.oj)({
                                    message: a,
                                    transactionName: "save-".concat(r, "-config-error"),
                                    level: "warning",
                                    tags: [
                                        ["scenario", "save-".concat(r, "-config")]
                                    ]
                                })
                            }
                        }));
                        return function(n, r) { return e.apply(this, arguments) }
                    }(),
                    l = function() {
                        var e = a()((function*(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "app";
                            try { var r = yield(0, o.readFile)(e, "utf-8"); return JSON.parse(r) } catch (e) {
                                var t = e instanceof Error ? e.message : e,
                                    { code: a = "" } = e;
                                if ("ENOENT" === a) return {};
                                (0, i.oj)({
                                    message: t,
                                    transactionName: "load-".concat(n, "-config-error"),
                                    level: "warning",
                                    tags: [
                                        ["scenario", "load-".concat(n, "-config")]
                                    ]
                                })
                            }
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }()
            },
            4342: (e, n, r) => {
                "use strict";
                r.d(n, { AI: () => b, KO: () => w, WB: () => _, ms: () => k });
                var t = r(9591),
                    a = r.n(t),
                    o = r(3292),
                    i = r(4254),
                    s = r(661),
                    l = r.n(s),
                    c = r(9613),
                    u = r(4040),
                    d = r(2928),
                    m = r(5664),
                    f = r(8911),
                    p = { "-1": "unspecified", 0: "no_restriction", 1: "lax", 2: "strict" },
                    v = function(e, n, r) { var t = e; return e.startsWith(".") && (t = e.substring(1)), "http" + (n ? "s" : "") + "://" + t + r },
                    g = function(e) { return 0 === e ? e : 1e6 * (e - new Date(Date.UTC(1601, 0, 1)).getTime() / 1e3) },
                    h = function(e) { var n = e.toString().length; if (0 === e || n > 18) return e; var r = e; return n < 18 && (r = Number(r + "0".repeat(18 - n))), (r / 1e4 + new Date(Date.UTC(1601, 0, 1)).getTime()) / 1e3 },
                    y = function(e) { return function(n) { var { domain: r, name: t, path: a } = n; return (e.domain && e.domain.startsWith(".") ? e.domain.substring(1) : e.domain) === (r.startsWith(".") ? r.substring(1) : r) && e.name === t && e.path === a } },
                    b = function() {
                        var e = a()((function*(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = yield(0, c.V)(e),
                                t = [];
                            try {
                                var a = yield r.all("select * from cookies");
                                for (var o of a) {
                                    var { host_key: i, name: s, encrypted_value: l, path: u, is_secure: d, is_httponly: g, expires_utc: y, is_persistent: b, samesite: w, creation_utc: S } = o;
                                    t.push({ url: v(i, d, u), domain: i, name: s, value: n ? l.toString("utf8") : l, path: u, sameSite: p[w], secure: Boolean(d), httpOnly: Boolean(g), hostOnly: !i.startsWith("."), session: !b, expirationDate: h(y), creationDate: h(S) })
                                }
                            } catch (e) {
                                var k = e instanceof Error ? e.message : e;
                                (0, m.oj)({
                                    message: k,
                                    transactionName: "cookies-decrypt",
                                    level: "error",
                                    tags: [
                                        ["scenario", "start-profile"]
                                    ]
                                })
                            } finally {
                                yield(0, f.Z)({ fn: () => r.close(), retryDelay: 300 }).catch((function(e) {
                                    (0, m.oj)({
                                        message: e.message,
                                        transactionName: "close-cookie-db-error",
                                        level: "error",
                                        tags: [
                                            ["scenario", "start-profile"]
                                        ]
                                    })
                                }))
                            }
                            return { cookies: t }
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    w = function() {
                        var e = a()((function*(e) {
                            var n, r, { cookiesFromFile: t = [], serverCookies: a, profileId: o, cookiesFilePath: i } = e,
                                s = (n = t, { unique: (r = a).filter((function(e) { return -1 === n.findIndex(y(e)) })), withNewValue: r.filter((function(e) { var r = n.find(y(e)); return r && 0 !== Buffer.compare(Buffer.from(r.value), Buffer.from(e.value)) })) }),
                                l = function(e) {
                                    var n = Math.floor((new Date).getTime() / 1e3),
                                        r = function(e) {
                                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                                r = [...e],
                                                t = [];
                                            if (n <= 0) return t;
                                            for (; r.length;) t.push(r.splice(0, n));
                                            return t
                                        }(e, 76);
                                    return r.map((function(e) {
                                        var r = e.map((function() { return "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)" })).join(", ");
                                        return ["insert or replace into cookies (creation_utc, host_key, top_frame_site_key, name, value, encrypted_value, path, expires_utc, is_secure, is_httponly, last_access_utc, has_expires, is_persistent, priority, samesite, source_scheme, source_port, is_same_party, last_update_utc) values ".concat(r), e.flatMap((function(e) {
                                            var r, t, a = e.creationDate || g(n),
                                                o = e.session ? 0 : g(e.expirationDate),
                                                i = Buffer.from(e.value),
                                                s = Object.keys(p).find((function(n) { return p[n] === (e.sameSite || "-1") })),
                                                l = e.name.startsWith("__Host-") || e.name.startsWith("__Secure-") ? 1 : Number(null !== (r = e.secure) && void 0 !== r ? r : 1),
                                                c = 1 === l ? 2 : 1,
                                                u = 1 === l ? 443 : 80,
                                                d = void 0 === e.session ? Number(0 !== o) : Number(!e.session);
                                            return /^(\.)?mail.google.com$/.test(e.domain) && "COMPASS" === e.name && (o = 0, d = 0), [a, e.domain, "", e.name, "", i, e.path, o, l, Number(null !== (t = e.httpOnly) && void 0 !== t ? t : 1), 0, 0 === o ? 0 : 1, d, 1, s, c, u, 0, 0]
                                        }))]
                                    }))
                                }([...s.unique, ...s.withNewValue]),
                                d = yield(0, c.V)(i, !1),
                                f = (yield S({ chunkInsertValues: l, db: d, cookiesFilePath: i, profileId: o }).catch((function(e) { return e.message }))) || "",
                                v = new u.CommonDataManager;
                            if (f.includes("no such table: cookies") && (yield d.run(v.createCookiesTableQuery), yield S({ chunkInsertValues: l, db: d, cookiesFilePath: i, profileId: o }).catch((function(e) {
                                    console.log(e), f = e.message, (0, m.oj)({
                                        message: e.message,
                                        transactionName: "save-cookies-to-file",
                                        level: "error",
                                        tags: [
                                            ["scenario", "start-profile"]
                                        ]
                                    })
                                }))), f.includes("table cookies has no column named")) {
                                console.log("insertCookiesResult", f);
                                var [h] = f.split(" ").reverse(), b = "ALTER TABLE cookies ADD ".concat(h, " INTEGER");
                                yield d.run(b), yield S({ chunkInsertValues: l, db: d, cookiesFilePath: i, profileId: o }).catch((function(e) {
                                    console.log(e), (0, m.oj)({
                                        message: e.message,
                                        transactionName: "save-cookies-to-file-after-add-column-error",
                                        level: "error",
                                        tags: [
                                            ["scenario", "start-profile"]
                                        ]
                                    })
                                }))
                            }
                            yield d.close().catch((function(e) {
                                (0, m.oj)({
                                    message: e.message,
                                    transactionName: "close-cookie-db-error",
                                    level: "error",
                                    tags: [
                                        ["scenario", "start-profile"]
                                    ]
                                })
                            }))
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    S = function() {
                        var e = a()((function*(e) {
                            var { chunkInsertValues: n, db: r, cookiesFilePath: t, profileId: a } = e;
                            for (var [o, i] of n) {
                                var s = yield r.prepare(o);
                                yield s.run(i), yield s.finalize()
                            }
                            yield d.t.copyCookiesFile(t, a)
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    k = function(e) { return (0, f.Z)({ fn: () => (0, o.rm)(e, { recursive: !0, force: !0 }), retryDelay: 300 }) },
                    _ = function() {
                        var e = a()((function*(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            yield(0, o.writeFile)(e, "", { mode: 438 }).catch(console.log), yield new Promise((function(n) {
                                new(l().Database)(e, (function(e) {
                                    if (e) throw e;
                                    n(null)
                                }))
                            }));
                            var r = { filename: e, driver: l().Database },
                                t = new u.CommonDataManager,
                                a = yield(0, i.open)(r);
                            yield a.run(t.createCookiesTableQuery), yield a.close(), n && (yield(0, o.copyFile)(e, n).catch(console.log))
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }()
            },
            9613: (e, n, r) => {
                "use strict";
                r.d(n, { Q: () => p, V: () => v });
                var t = r(9591),
                    a = r.n(t),
                    o = r(3292),
                    i = r(1017),
                    s = r.n(i),
                    l = r(4254),
                    c = r(661),
                    u = r.n(c),
                    d = r(4342),
                    m = r(5346),
                    f = r(8911),
                    p = function() { var e = a()((function*(e) { return (yield(0, m.$)({ url: "http://localhost:".concat(global.appPort, "/cookies/").concat(e, "?isAvailable=true"), method: "GET" }).catch((function() { return {} }))).status || !1 })); return function(n) { return e.apply(this, arguments) } }(),
                    v = function() {
                        var e = a()((function*(e) {
                            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                r = { filename: e, driver: u().Database };
                            return yield(0, o.access)(e).then((function() { return console.log("".concat(e, " cookies file exists")) })).catch((function() { return console.log("creating new cookies file"), (0, o.mkdir)(s().dirname(e), { recursive: !0 }).then((function() { return (0, d.WB)(e) })).catch((function(e) { if (!e.message.includes("table cookies already exists")) throw e })) })), n && (r.mode = u().OPEN_READONLY), (0, f.Z)({ fn: () => (0, l.open)(r), retryDelay: 500 })
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }()
            },
            1247: (e, n, r) => {
                "use strict";
                r.d(n, { H: () => t });
                class t extends Error { constructor(e) { super(e), this.name = "ElectronError" } }
            },
            5630: (e, n, r) => {
                "use strict";
                r.d(n, { $j: () => h, A5: () => y, Sc: () => b });
                var t = r(8779),
                    a = r.n(t),
                    o = r(7147),
                    i = r(1017),
                    s = r.n(i),
                    l = r(6452),
                    c = r.n(l),
                    u = r(8911),
                    d = r(4040);

                function m(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function f(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? m(Object(r), !0).forEach((function(n) { a()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                var { rm: p, readdir: v } = o.promises, g = new d.CommonDataManager, h = function(e) {
                    return (0, u.Z)({
                        fn: () => new Promise((function(n, r) {
                            var t = { timeout: { request: 35e4 } };
                            e.profileId && (t.headers = { Authorization: "Bearer ".concat(g.accessToken), "x-two-factor-token": g.twoFaKey || "", browserId: e.profileId });
                            var a = c().stream(e.url, t),
                                i = (0, o.createWriteStream)(e.destFile, { mode: 438 });
                            i.on("error", (function(e) { i.destroy(), r(e) })), a.on("response", (function(e) {
                                if (e.statusCode.toString().startsWith("2")) return a.pipe(i), void i.on("close", (function() { n("success") }));
                                i.destroy(), r(e)
                            })), a.on("error", (function(e) { i.destroy(), r(e) }))
                        })),
                        retryDelay: 300
                    })
                }, y = function(e) {
                    return (0, u.Z)({
                        fn: () => new Promise((function(n, r) {
                            var t = [],
                                a = c().stream(e.url, { timeout: { request: 3e4 } });
                            a.on("response", (function(e) {
                                if (e.statusCode.toString().startsWith("2")) return a.on("data", (function(e) { return t.push(e) })), void a.on("end", (function() { return n(Buffer.concat(t)) }));
                                r(e)
                            })), a.on("error", (function(e) { r(e) }))
                        }))
                    })
                }, b = function(e) {
                    var { url: n, destFile: r, progressEvent: t = null, progressEventName: a = "", retryDelay: i = 0, retryLimit: l = 5, orbitaVersion: d = "" } = e, { progressState: m = {} } = e;
                    return (0, u.Z)({
                        fn: () => p(r).then((function() { return 0 }), (function() { return 0 })).then((function(e) {
                            return new Promise((function(i, l) {
                                var u = Number.MAX_SAFE_INTEGER;
                                console.log("bytes=".concat(e, "-").concat(u));
                                var p = c().stream(n, { headers: {} });
                                p.on("error", (function(e) { console.log("request error", e), h.end(), l(e) }));
                                var g = {};
                                e && (g = { start: e, mode: 438, flags: "r+" });
                                var h = (0, o.createWriteStream)(r, g);
                                h.on("error", (function(e) {
                                    console.log("stream error", e);
                                    try { v(s().dirname(r)).then((function(e) { console.log("dir content", e) })).catch(console.log) } catch (e) { console.log("dir content error", e) }
                                    var n = e instanceof Error ? e.message : e;
                                    if ("string" == typeof n && n.includes("ENOSPC")) return h.end(), void l(n);
                                    h.end(), l(e)
                                })), p.on("response", (function(e) {
                                    if (e.statusCode.toString().startsWith("2")) return console.log("received success code"), p.pipe(h), void h.on("close", (function() { console.log("stream closed"), i("success") }));
                                    h.end(), l(e)
                                })), p.on("downloadProgress", (function(n) {
                                    var r, o;
                                    if (t) {
                                        n.total = e + n.total, n.transferred = e + n.transferred, n.percent = n.transferred / n.total;
                                        var i = (null === (r = m) || void 0 === r || null === (o = r.percent) || void 0 === o ? void 0 : o.toFixed(2)) !== n.percent.toFixed(2);
                                        m = f(f({}, m), n), i && t.sender.send(a, { progressState: m, result: !1, orbitaVersion: d })
                                    }
                                }))
                            }))
                        })),
                        retryDelay: i,
                        onRetry: function() { t.sender.send(a, { progressState: m, result: !1, isRetrying: !0 }) },
                        callLimit: l
                    })
                }
            },
            2197: (e, n, r) => {
                "use strict";
                r.d(n, { N: () => p, $: () => f });
                var t = r(9591),
                    a = r.n(t),
                    o = r(7147),
                    i = r(3292),
                    s = r(1017),
                    l = r.n(s);
                const c = require("unzipper");
                var u = r.n(c);
                const d = require("yauzl");
                var m = r.n(d),
                    f = function(e, n) {
                        return new Promise((function(r, t) {
                            return m().open(e, { lazyEntries: !0, autoClose: !1 }, (function(e, s) {
                                if (e) t(e);
                                else if (s) {
                                    s.on("error", (function(e) { console.log("zip File Error"), s.close(), t(e) })), s.readEntry();
                                    var c = [];
                                    s.on("entry", (function(e) { s.readEntry(), /\/$/.test(e.fileName) || c.push(e) })), s.on("end", (function() {
                                        return console.log("zipFile entries ended"), Promise.all(c.map(function() {
                                            var e = a()((function*(e) {
                                                return (0, i.mkdir)(l().join(n, l().dirname(e.fileName)), { recursive: !0 }).then((function() {
                                                    return new Promise((function(r, t) {
                                                        s.openReadStream(e, (function(a, i) {
                                                            if (a) t(a);
                                                            else {
                                                                i.on("error", (function(e) { i.destroy(), t(e) }));
                                                                var s = (0, o.createWriteStream)(l().join(n, e.fileName), { mode: 438 });
                                                                s.on("error", (function(e) { s.end(), t(e) })), s.on("close", r), i.pipe(s)
                                                            }
                                                        }))
                                                    }))
                                                }))
                                            }));
                                            return function(n) { return e.apply(this, arguments) }
                                        }())).then((function() { console.log("decompress resolved"), r(), s.close() })).catch((function(e) { console.log("rejected"), t(e), s.close() }))
                                    }))
                                } else t(new Error("no zipFile"))
                            }))
                        }))
                    },
                    p = function(e, n) {
                        return new Promise((function(r, t) {
                            var s = (0, o.createReadStream)(e);
                            s.on("error", t), s.pipe(u().Extract({ path: n })).on("close", a()((function*() { yield(0, i.writeFile)(l().join(n, "First Run"), "", { mode: 438 }).catch((function() { return null })), console.log("Extraction complete."), r() }))).on("error", (function(e) { t(e) }))
                        }))
                    }
            },
            5346: (e, n, r) => {
                "use strict";
                r.d(n, { $: () => l, U: () => c });
                var t = r(6452),
                    a = r.n(t),
                    o = new(r(4040).CommonDataManager),
                    i = function(e) { return { Authorization: "Bearer ".concat(e.accessToken), "user-agent": e.userAgent, "x-two-factor-token": e.twoFaKey || "", "GoLogin-Meta-Header": e.metaHeader || "" } },
                    s = function(e) { var { method: n, headers: r = i(o), timeout: t, retryLimit: a } = e; return { method: n, headers: r, timeout: { request: t }, retry: { limit: a, errorCodes: ["ETIMEDOUT", "ECONNRESET", "EADDRINUSE", "ECONNREFUSED", "EPIPE", "ENOTFOUND", "EAI_AGAIN"] } } },
                    l = function(e) { var { method: n = "GET", url: r, body: t = {}, headers: o, timeout: i = 3e4, json: l = !0, isBuffer: c = !1, retryLimit: u = 3 } = e, d = s({ method: n, headers: o, timeout: i, retryLimit: u }); return ["GET", "HEAD"].includes(n) || (d.json = t), c && (delete d.json, d.body = t), l ? a()(r, d).json() : a()(r, d).then((function(e) { return e.body })) },
                    c = function(e) { var { method: n = "GET", url: r, body: t = {}, headers: o, timeout: i = 3e4, isBuffer: l = !1, retryLimit: c = 3 } = e, u = s({ method: n, headers: o, timeout: i, retryLimit: c }); return ["GET", "HEAD"].includes(n) || (u.json = t), l && (delete u.json, u.body = t), a()(r, u) }
            },
            7703: (e, n, r) => {
                "use strict";
                r.d(n, { $c: () => S, ED: () => A, IE: () => R, IT: () => B, Me: () => _, Mv: () => P, eZ: () => b, fv: () => E, im: () => w, iw: () => g, ko: () => T, nI: () => y, qW: () => k, wk: () => C, xL: () => D });
                var t = r(8779),
                    a = r.n(t),
                    o = r(2081),
                    i = r(6113),
                    s = r.n(i),
                    l = r(7147),
                    c = r(2037),
                    u = r.n(c),
                    d = r(1017),
                    m = r.n(d);

                function f(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function p(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? f(Object(r), !0).forEach((function(n) { a()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                var v = u().homedir(),
                    g = process.platform,
                    h = m().sep,
                    y = ".gologin",
                    b = ".gologin_test",
                    w = m().join(v, y, "extensions"),
                    S = m().join(w, "chrome-extensions"),
                    k = m().join(w, "user-extensions"),
                    _ = m().join(v, y, "gologin-cached-profiles"),
                    P = m().join(v, y),
                    T = "orbita-browser",
                    E = "Orbita-Browser.app",
                    C = m().join(v, y, "browser"),
                    M = function(e) {
                        if (!e.BASE_FOLDER || "win32" === g) return e;
                        var n = (0, o.execSync)("echo $USER").toString().trim();
                        try {
                            (0, l.accessSync)(e.BASE_FOLDER)
                        } catch (n) { e.BASE_FOLDER = m().sep + m().join("tmp", "gologin") }
                        var r = s().createHash("sha1").update(n).digest("hex").substring(0, 10);
                        return e.BASE_FOLDER = "".concat(e.BASE_FOLDER, "_").concat(r), e.PROFILES_DIR = "".concat(e.PROFILES_DIR.replace("{base_folder}", e.BASE_FOLDER)), e.START_DIR_PATH = "".concat(e.START_DIR_PATH.replace("{base_folder}", e.BASE_FOLDER)), e.STARTED_DIR_PATH = "".concat(e.STARTED_DIR_PATH.replace("{base_folder}", e.BASE_FOLDER)), e
                    },
                    O = { BASE_FOLDER: m().sep + m().join("tmp", "gologin"), PROFILES_DIR: "{base_folder}/profiles/", START_DIR_PATH: "{base_folder}/start", STARTED_DIR_PATH: "{base_folder}/started", ROUTE_SLASH: h, COOKIES_FILE: m().join(h, "Default", "Cookies"), COOKIES_FILE_NEW: m().join(h, "Default", "Network", "Cookies"), PASSWORDS_FILE: m().join(h, "Default", "Login Data"), BROWSER_BASE_PATH: C },
                    x = M(p(p({}, O), {}, { BROWSER_EXEC_FILE_NAME: ["chrome"], DOLPHIN_DIR_PATH: m().join(v, ".config", "dolphin_anty") + m().sep, OCTO_DIR_PATH: m().join(v, ".config", "Octo Browser") + m().sep, MULTILOGIN_DIR_PATH: m().join(v, ".config", "Multilogin") + m().sep, ADSPOWER_DIR_PATH: m().join(v, ".config", "adspower_global") + m().sep, UNDETECTABLE_DIR_PATH: m().join(v, ".config", "Undetectable") + m().sep, INDIGO_DIR_PATH: m().join(v, ".config", "Indigo") + m().sep, INCOGNITION_DIR_PATH: m().join(v, ".config", "Incogniton") + m().sep, MORELOGIN_DIR_PATH: m().join(v, ".config", "MoreLogin") + m().sep })),
                    N = M(p(p({}, O), {}, { BASE_FOLDER: m().sep + m().join("private", "tmp", "gologin"), BROWSER_EXEC_FILE_NAME: [E, "Contents", "MacOS", "Orbita"], BROWSER_OLD_EXEC_FILE_NAME: "", BROWSER_BASE_PATH: C, DOLPHIN_DIR_PATH: m().join(v, "Library", "Application Support", "dolphin_anty") + m().sep, OCTO_DIR_PATH: m().join(v, ".Octo Browser") + m().sep, MULTILOGIN_DIR_PATH: m().join(v, "Library", "Application Support", "Multilogin") + m().sep, ADSPOWER_DIR_PATH: m().join(v, "Library", "Application Support", "adspower_global") + m().sep, UNDETECTABLE_DIR_PATH: m().join(v, "Library", "Application Support", "Undetectable") + m().sep, INDIGO_DIR_PATH: m().join(v, "Library", "Application Support", "Indigo") + m().sep, INCOGNITION_DIR_PATH: m().join(v, "Library", "Application Support", "Incogniton") + m().sep, MORELOGIN_DIR_PATH: m().join(v, "Library", "Application Support", "MoreLogin") + m().sep })),
                    I = { BASE_FOLDER: m().join(v, "AppData", "Local", "Temp", "GoLogin") + m().sep, PROFILES_DIR: m().join(v, "AppData", "Local", "Temp", "GoLogin", "profiles") + m().sep, START_DIR_PATH: m().join(v, "AppData", "Local", "Temp", "GoLogin", "start") + m().sep, STARTED_DIR_PATH: m().join(v, "AppData", "Local", "Temp", "GoLogin", "started") + m().sep, ROUTE_SLASH: h, BROWSER_EXEC_FILE_NAME: ["chrome.exe"], BROWSER_BASE_PATH: C, COOKIES_FILE: m().join(h, "Default", "Cookies"), COOKIES_FILE_NEW: m().join(h, "Default", "Network", "Cookies"), PASSWORDS_FILE: m().join(h, "Default", "Login Data"), DOLPHIN_DIR_PATH: m().join(v, "AppData", "Roaming", "dolphin_anty") + m().sep, OCTO_DIR_PATH: m().join(v, "AppData", "Roaming", "Octo Browser") + m().sep, MULTILOGIN_DIR_PATH: m().join(v, "AppData", "Roaming", "Multilogin") + m().sep, ADSPOWER_DIR_PATH: m().join(v, "AppData", "Roaming", "adspower_global") + m().sep, UNDETECTABLE_DIR_PATH: m().join(v, "..", "..", "Program Files", "Undetectable") + m().sep, INDIGO_DIR_PATH: m().join(v, "AppData", "Roaming", "Indigo") + m().sep, INCOGNITION_DIR_PATH: m().join(v, "AppData", "Roaming", "Incogniton") + m().sep, MORELOGIN_DIR_PATH: m().join(v, "AppData", "Roaming", "MoreLogin") + m().sep },
                    B = function() { return "win32" === g ? I : "darwin" === g ? N : x },
                    j = B(),
                    D = j.PROFILES_DIR + "{profileId}" + j.ROUTE_SLASH + "Default" + j.ROUTE_SLASH,
                    R = j.PROFILES_DIR + "{profileId}" + j.ROUTE_SLASH + "orbita.config",
                    A = 121
            },
            7774: (e, n, r) => {
                "use strict";
                r.d(n, { Dr: () => v, kO: () => g, M_: () => h });
                var t = r(9591),
                    a = r.n(t),
                    o = r(7147),
                    i = r(3292),
                    s = r(1017),
                    l = r.n(s);
                const c = require("yazl");
                var u = r.n(c),
                    d = r(2197),
                    m = r(7703),
                    f = [{ name: "Cache", subs: [], isDirectory: !0 }, { name: "DawnCache", subs: [], isDirectory: !0 }, { name: "Extensions", subs: [], isDirectory: !0 }, { name: "GPUCache", subs: [], isDirectory: !0 }, { name: "fonts_config", subs: [], isDirectory: !1 }, { name: "Service Worker", subs: [], isDirectory: !0 }, { name: "Code Cache", subs: [], isDirectory: !0 }, { name: "GPUCache", subs: [], isDirectory: !0 }],
                    p = r(9276),
                    v = function() {
                        var e = a()((function*() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            if (!(yield(0, i.access)(e).then((function() { return !0 }), (function() { return !1 })))) throw new Error("Invalid profile folder path: " + e);
                            var r, t = l().join(e, "Default"),
                                a = new(u().ZipFile),
                                s = !1;
                            a.once("error", (function(e) { a.end(), console.log("archive error", e), s = !0, r = e })), yield y({ folderPath: t, archive: a, relativePath: "Default" });
                            try { a.addFile(l().join(e, "First Run"), "/") } catch (e) { a.addBuffer(Buffer.from(""), "First Run") }
                            var c = "".concat(l().join(m.Me, n, p.DQ), ".zip");
                            if (s) throw r;
                            return yield(0, i.mkdir)(l().join(m.Me, n), { recursive: !0 }).catch((function(e) { console.log("mkdir error", e), console.log("cached profile path", c) })), yield new Promise((function(e, n) {
                                var r = (0, o.createWriteStream)(c, { mode: 438 });
                                a.once("error", (function(e) { a.end(), r.destroy(), console.log("archive error inside promise", e), n(e) })), r.on("error", (function(e) { r.destroy(), n(e) })), r.on("close", (function() { e("") })), a.end(), a.outputStream.pipe(r)
                            })), (0, i.readFile)(c)
                        }));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    g = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return (0, d.$)(e, n).catch((function() { return (0, d.N)(e, n) }))
                    },
                    h = function() { var e = a()((function*(e, n) { var r = l().join(m.Me, e, n + ".zip"); return (0, i.readFile)(r).catch((function(e) { throw console.log(e), Error("zip error") })) })); return function(n, r) { return e.apply(this, arguments) } }(),
                    y = function() {
                        var e = a()((function*(e) {
                            var { folderPath: n, archive: r, relativePath: t } = e, a = f.reduce((function(e, n) { var r = s.sep + "Default" + s.sep + n.name; return n.subs.length ? n.subs.forEach((function(n) { return e.push(r + s.sep + n) })) : e.push(r), e }), []), o = yield(0, i.readdir)(n);
                            for (var c of o) {
                                var u = l().resolve(n, c),
                                    d = yield(0, i.stat)(u).catch((function() { return null }));
                                d && (a.includes("".concat(l().sep).concat(l().join(t, c))) || (d.isDirectory() ? (r.addEmptyDirectory(l().join(t, c)), yield y({ folderPath: u, archive: r, relativePath: l().join(t, c) })) : r.addFile(u, "".concat(t, "/").concat(c))))
                            }
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }()
            },
            2964: (e, n, r) => {
                "use strict";
                r.d(n, { i: () => h });
                var t = r(9591),
                    a = r.n(t),
                    o = r(6452),
                    i = r.n(o);
                const s = require("https-proxy-agent"),
                    l = require("socks-proxy-agent");
                var c = r(5664),
                    u = r(6745),
                    d = r(4040),
                    m = 12e3,
                    f = "http://",
                    p = "https://",
                    v = ["socket hang up", "read ECONNRESET", "Proxy connection ended before receiving CONNECT response"],
                    g = new d.CommonDataManager,
                    h = function() {
                        var e = a()((function*(e) {
                            var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                                t = {},
                                { username: a, password: o, mode: s = "" } = e,
                                { host: d = "", port: h = "", type: b } = e,
                                w = b;
                            b.includes("socks") && (w = "socks"), (d = d.trim().replace(" ", "")).includes(".") && ([d] = d.split(":")), (h = h.toString().trim()).includes(":") && ([, h] = h.split(":"));
                            var S = s.includes("gologin"),
                                k = "tor" === s,
                                _ = "".concat(w, "://");
                            a && o && (_ += "".concat(encodeURIComponent(a), ":").concat(encodeURIComponent(o), "@")), _ += "".concat(d, ":").concat(h), S || k || console.log("proxyString:", _, "host:", d, "port:", h), n = _.startsWith("http") ? y(_) : new l.SocksProxyAgent(_);
                            var P = u.Hf,
                                T = { Authorization: "Bearer ".concat(g.accessToken), "user-agent": g.userAgent, "x-two-factor-token": g.twoFaKey || "" };
                            (S || k) && (T = {});
                            for (var E = function*() {
                                    var e, r = i()(P, { agent: { https: n }, headers: T }),
                                        a = setTimeout((function() { return r.cancel() }), m);
                                    return t = yield r.json().catch((function(e) { return e.message })), clearTimeout(a), v.includes(t) && _.startsWith(f) ? (b = "https", n = y(_.replace(f, p)), "continue") : null !== (e = t) && void 0 !== e && e.ip ? { v: { response: t, protocol: b } } : void 0
                                }; r--;) { var C = yield* E(); if ("continue" !== C && "object" == typeof C) return C.v }
                            var M = d.includes("floppydata.com"),
                                O = "check-proxy-response";
                            return console.log(M, "isFloppyData"), M && (O = "check-proxy-response-floppydata"), (0, c.oj)({
                                message: t,
                                level: "warning",
                                transactionName: O,
                                tags: [
                                    ["proxy-mode", s]
                                ]
                            }), { response: t, protocol: b }
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    y = function(e) { return new s.HttpsProxyAgent(e, { keepAlive: !0, keepAliveMsecs: 1e3, maxSockets: 256, maxFreeSockets: 256, scheduling: "lifo" }) }
            },
            6683: (e, n, r) => {
                "use strict";
                r.d(n, { e: () => u });
                var t = r(8779),
                    a = r.n(t),
                    o = r(5346),
                    i = r(4147);

                function s(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
                    }
                    return r
                }

                function l(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? s(Object(r), !0).forEach((function(n) { a()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
                    }
                    return e
                }
                var c = new(r(4040).CommonDataManager),
                    u = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        n.appVersion = i.version, (0, o.$)({ method: "POST", url: "".concat(c.apiBaseUrl, "/analytics/add_action_analytics"), body: l({ action: e }, n) }).catch((function() { return null }))
                    }
            },
            5664: (e, n, r) => {
                "use strict";
                r.d(n, { j6: () => i, oj: () => o, zd: () => s });
                var t = r(1789),
                    a = r(1247),
                    o = function(e) {
                        var { message: n, level: r = "error", tags: o = [], transactionName: i } = e;
                        t.captureException(new a.H(n.toString()), (function(e) {
                            return e.setLevel(r), e.setTransactionName(i), e.setFingerprint([i]), o.forEach((function(n) {
                                var [r, t] = n;
                                e.setTag(r, t)
                            })), e
                        }))
                    },
                    i = function() { t.init({ dsn: "https://8a490970aa7e0c82863d55ce224b68cb@sentry.amzn.pro/3", tracesSampleRate: 1, release: process.env.npm_package_version, environment: "production", ignoreErrors: ["Invalid Minidump", "Object has been destroyed", "Cannot set headers after they are sent to the client", "Cannot read properties of undefined (reading 'isServer')", "The `onCancel` handler was attached after the promise settled."] }) },
                    s = function(e) {
                        var { message: n, tags: r = [] } = e, { transactionName: o } = e;
                        switch (!0) {
                            case ["SSL", "certificate", "socket hang up", "ECONNRESET", "getaddrinfo", "connect", "Timeout"].some((function(e) { return n.includes(e) })):
                                o = "internet-error";
                                break;
                            case n.includes("402"):
                                o = "payment-required";
                                break;
                            case n.includes("EPERM") || n.includes("EACCES"):
                                o = "permission-error";
                                break;
                            case n.includes("429") || "too many requests" === n.toLowerCase():
                                o = "too-many-requests";
                                break;
                            case n.includes("ENOSPC") || n.includes("SQLITE_FULL"):
                                o = "no-disc-space";
                                break;
                            case n.includes("The server aborted pending request"):
                                o = "aws-aborted";
                                break;
                            case n.includes("unexpected number of bytes"):
                                o = "orbita-files-busy"
                        }
                        t.captureException(new a.H(n.toString()), (function(e) {
                            return e.setTransactionName(o), e.setFingerprint([o]), r.forEach((function(n) {
                                var [r, t] = n;
                                e.setTag(r, t)
                            })), e
                        }))
                    }
            },
            6069: (e, n, r) => {
                "use strict";
                r.d(n, { Ij: () => f, Yu: () => m, e4: () => g, lZ: () => v });
                var t = r(9591),
                    a = r.n(t),
                    o = r(2081),
                    i = r(2037),
                    s = r(6464),
                    l = r(4147),
                    c = (0, s.promisify)(o.exec),
                    { version: u, subVersion: d } = l,
                    m = process.platform,
                    f = function() { var e = a()((function*() { return "win32" === process.platform ? "win" : "darwin" === process.platform ? (yield p()) ? "macM1" : "mac" : "lin" })); return function() { return e.apply(this, arguments) } }(),
                    p = function() { var e = a()((function*() { var { stdout: e } = yield c("sysctl machdep.cpu").catch((function(e) { return console.log("error in M1 detection ", e), { stdout: "" } })); return /Apple M\d/.test(e) })); return function() { return e.apply(this, arguments) } }(),
                    v = function() {
                        var e = i.release() || "",
                            [n = "10", r, t] = e.split(".");
                        return t.startsWith("2") ? 11 : +n
                    },
                    g = function() {
                        var e = a()((function*() {
                            var e = yield f(),
                                [n = ""] = i.release(),
                                r = "".concat(u, " ").concat(d);
                            return "win" === e ? "".concat(r, "-").concat(e, "-").concat(v()) : "".concat(r, "-").concat(e, "-").concat(n, "}")
                        }));
                        return function() { return e.apply(this, arguments) }
                    }()
            },
            135: (e, n, r) => {
                "use strict";
                r.d(n, { MZ: () => c, Uw: () => d, kA: () => u, rJ: () => l, sZ: () => m, sj: () => f });
                var t = r(9591),
                    a = r.n(t),
                    o = r(3292),
                    i = r(1017),
                    s = r.n(i),
                    l = function() { var e = a()((function*(e) { try { var [n] = e.split(s().sep).reverse(); if (".DS_Store" === n) return 0; var r = yield(0, o.stat)(e); if (!r.isDirectory()) return r.size; var t = (yield(0, o.readdir)(e)).map(function() { var n = a()((function*(n) { return l(s().join(e, n)) })); return function(e) { return n.apply(this, arguments) } }()); return (yield Promise.all(t)).reduce((function(e, n) { return e + n }), 0) } catch (e) { return -1 } })); return function(n) { return e.apply(this, arguments) } }(),
                    c = function() {
                        var e = a()((function*(e, n) {
                            if (!(yield(0, o.stat)(e)).isDirectory()) return (0, o.copyFile)(e, n);
                            yield(0, o.mkdir)(n, { recursive: !0 }).catch((function() {}));
                            var r = (yield(0, o.readdir)(e)).map(function() { var r = a()((function*(r) { return yield(0, o.mkdir)(n, { recursive: !0 }).catch((function() {})), c(s().join(e, r), s().join(n, r)) })); return function(e) { return r.apply(this, arguments) } }());
                            return Promise.all(r)
                        }));
                        return function(n, r) { return e.apply(this, arguments) }
                    }(),
                    u = function() { var e = a()((function*(e) { var n = yield(0, o.stat)(e).catch((function() { return null })); if (n) return n.isDirectory() ? (0, o.rmdir)(e, { recursive: !0 }) : (0, o.unlink)(e) })); return function(n) { return e.apply(this, arguments) } }(),
                    d = function() { return __dirname },
                    m = { 0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", 7: "h", 8: "i", 9: "j", a: "k", b: "l", c: "m", d: "n", e: "o", f: "p" },
                    f = function(e, n) {
                        var r = e.indexOf(n);
                        r < -1 || e.splice(r, 1)
                    }
            },
            8911: (e, n, r) => {
                "use strict";
                r.d(n, { Z: () => t });
                const t = function e(n) {
                    var r = n || {},
                        { retryDelay: t = 0, limit: a = 5, fn: o, callCounter: i = 1, onRetry: s, stopRetryErrorPatterns: l = [404, 403, 429, 500, 401] } = r;
                    return delete r.callCounter, o(r).catch((function(n) {
                        var o = n instanceof Error ? n.message : "unknown",
                            c = l.some((function(e) { return o.includes(e.toString()) }));
                        if (i >= a || c || !1) return Promise.reject(n);
                        s && s(), r.callCounter = i + 1;
                        var u = t ? function(e) { return new Promise((function() { return setTimeout(e, t) })) } : function(e) { return process.nextTick(e) };
                        return new Promise((function(e) { return u(e) })).then((function() { return e(r) }))
                    }))
                }
            },
            2370: (e, n, r) => {
                "use strict";
                r.r(n), r.d(n, { focusOrbitaWindow: () => v, getWinOrbitaRealPid: () => p, pidList: () => f });
                var t = r(9591),
                    a = r.n(t),
                    o = r(2037),
                    i = r.n(o),
                    s = r(6464),
                    l = r.n(s),
                    c = r(9435),
                    u = r(7703),
                    d = r(6683),
                    m = l().promisify(r(2081).exec),
                    f = {},
                    p = function() {
                        var e = a()((function*(e) {
                            var { stdout: n } = yield m('wmic process get ProcessID, ParentProcessID | find "'.concat(e, '"')).catch((function() { return { stdout: "" } }));
                            if (!n) return "";
                            var r = n.toString().split("\n");
                            console.log("array of pid: ", r);
                            var [t] = r.filter((function(n) { return n.split(" ")[0] === e.toString() }));
                            console.log("target array: ", t);
                            var [a, o] = t.split(" ").filter(Boolean);
                            return o
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    v = function() {
                        var e = a()((function*(e, n) {
                            var t = f[e];
                            if ("win32" === u.iw) {
                                var a = r(2924);
                                if (!(t = yield p(f[e]))) return;
                                a.awaken(Number(t))
                            }
                            if ("linux" === u.iw) {
                                var o = r(2289),
                                    { stdout: s } = yield m("pgrep -P ".concat(t)).catch((function() { return { stdout: "" } }));
                                if (!s) return;
                                o.awaken(Number(s))
                            }
                            "darwin" === u.iw && "x64" === i().arch() && r(1956).awaken(Number(t));
                            "darwin" === u.iw && "arm64" === i().arch() && r(7486).awaken(Number(t));
                            n && (0, d.e)(c.M.focused, { mode: n, profile: e })
                        }));
                        return function(n, r) { return e.apply(this, arguments) }
                    }()
            },
            1956: (e, n, r) => { e = r.nmd(e); try { process.dlopen(e, __dirname + r(1017).sep + r.p + "c1ce21a4e14afcf3fac288acd8271e92.node") } catch (e) { throw new Error("node-loader:\n" + e) } },
            7486: (e, n, r) => { e = r.nmd(e); try { process.dlopen(e, __dirname + r(1017).sep + r.p + "22e092f604fa76275821d9e439296082.node") } catch (e) { throw new Error("node-loader:\n" + e) } },
            2289: (e, n, r) => { e = r.nmd(e); try { process.dlopen(e, __dirname + r(1017).sep + r.p + "a31b39500533eb1843a297db3624cc0a.node") } catch (e) { throw new Error("node-loader:\n" + e) } },
            2924: (e, n, r) => { e = r.nmd(e); try { process.dlopen(e, __dirname + r(1017).sep + r.p + "473d8d23bc0a26322367b595674dadda.node") } catch (e) { throw new Error("node-loader:\n" + e) } },
            9591: e => {
                "use strict";
                e.exports = require("@babel/runtime/helpers/asyncToGenerator")
            },
            6116: e => {
                "use strict";
                e.exports = require("@babel/runtime/helpers/classPrivateFieldGet")
            },
            8640: e => {
                "use strict";
                e.exports = require("@babel/runtime/helpers/classPrivateFieldSet")
            },
            8779: e => {
                "use strict";
                e.exports = require("@babel/runtime/helpers/defineProperty")
            },
            1789: e => {
                "use strict";
                e.exports = require("@sentry/electron")
            },
            6197: e => {
                "use strict";
                e.exports = require("decompress")
            },
            8740: e => {
                "use strict";
                e.exports = require("decompress-unzip")
            },
            9496: e => {
                "use strict";
                e.exports = require("electron")
            },
            1305: e => {
                "use strict";
                e.exports = require("electron-reload")
            },
            1239: e => {
                "use strict";
                e.exports = require("events")
            },
            2496: e => {
                "use strict";
                e.exports = require("get-system-fonts")
            },
            6452: e => {
                "use strict";
                e.exports = require("got")
            },
            2245: e => {
                "use strict";
                e.exports = require("moment")
            },
            4254: e => {
                "use strict";
                e.exports = require("sqlite")
            },
            661: e => {
                "use strict";
                e.exports = require("sqlite3")
            },
            1041: e => {
                "use strict";
                e.exports = require("tree-kill")
            },
            6464: e => {
                "use strict";
                e.exports = require("util")
            },
            5828: e => {
                "use strict";
                e.exports = require("uuid")
            },
            2081: e => {
                "use strict";
                e.exports = require("child_process")
            },
            6113: e => {
                "use strict";
                e.exports = require("crypto")
            },
            7147: e => {
                "use strict";
                e.exports = require("fs")
            },
            3292: e => {
                "use strict";
                e.exports = require("fs/promises")
            },
            2037: e => {
                "use strict";
                e.exports = require("os")
            },
            1017: e => {
                "use strict";
                e.exports = require("path")
            },
            4147: e => {
                "use strict";
                e.exports = JSON.parse('{"name":"GoLogin","version":"3.3.44","subVersion":"Jupiter","description":"","main":"dist/main.js","engines":{"node":">=20.9.0"},"packageManager":"yarn@1.22.19","browser":{"colors":false,"events":"eventemitter3","checkForModuleDuplicates":false,"tracer":false},"scripts":{"build:react":"cross-env IS_ELECTRON=true CONFIG_ENV=production webpack --mode development --config webpack.react.config.js","build:react:dev":"cross-env IS_ELECTRON=true CONFIG_ENV=dev webpack --mode development --config webpack.react.config.js","watch":"cross-env CONFIG_ENV=mqa webpack --mode development --watch --config webpack.react.config.js","watch:frontonly":"cross-env CONFIG_ENV=dev-front-only webpack --mode development --watch --config webpack.react.config.js","prod":"cross-env IS_ELECTRON=true CONFIG_ENV=production webpack --mode production --config webpack.react.config.js","preprod":"cross-env IS_ELECTRON=true CONFIG_ENV=preprod webpack --mode production --config webpack.react.config.js","prod:site":"cross-env CONFIG_ENV=production webpack --mode production --config webpack.react.config.js","mqa:site":"cross-env CONFIG_ENV=mqa webpack --mode production --config webpack.react.config.js","alpha:site":"cross-env CONFIG_ENV=alpha webpack --mode production --config webpack.react.config.js","gamma:site":"cross-env CONFIG_ENV=gamma webpack --mode production --config webpack.react.config.js","delta:site":"cross-env CONFIG_ENV=delta webpack --mode production --config webpack.react.config.js","omega:site":"cross-env CONFIG_ENV=omega webpack --mode production --config webpack.react.config.js","sigma:site":"cross-env CONFIG_ENV=sigma webpack --mode production --config webpack.react.config.js","build":"cross-env IS_ELECTRON=true CONFIG_ENV=production webpack --mode development","build:prod":"cross-env CONFIG_ENV=production webpack --mode production","build:preprod":"cross-env CONFIG_ENV=preprod webpack --mode production","build:dev":"cross-env CONFIG_ENV=dev webpack --mode development","deploy:pricing":"node cf-worker-pricing/prepare-deploy-json.js --mode production && wrangler kv:bulk put --namespace-id=330a8206009c449cb9a1a591e717265f cf-worker-pricing/master/kv-data.json","deploy:pricing:mqa":"node cf-worker-pricing/prepare-deploy-json.js --mode mqa && wrangler kv:bulk put --namespace-id=ae844e8eb1d34c7390569a5d061a9219 cf-worker-pricing/mqa/kv-data.json","start":"electron ./dist/main.js","serve":"serve -s dist","serve-pricing":"serve -s dist-pricing","start-main":"webpack --config webpack.config.js --watch","start-renderer":"cross-env CONFIG_ENV=mqa webpack-dev-server --config webpack.react.config.js","start-electron":"electron ./dist/main.js","dev":"concurrently \\"npm run start-main\\" \\"npm run start-renderer\\" \\"npm run start-electron\\"","test-main":"jest ./test/ts-modules/* --runInBand --silent","dev:localhost":"yarn build:dev && yarn build:react:dev && yarn start","dev:prod":"yarn build && yarn build:react && yarn start","compose-deb-installer":"electron-builder --config electron-builder-deb.yml","compose-appimage-installer":"electron-builder --config electron-builder-appimage.yml","compose-appimage-beta-installer":"electron-builder --config electron-builder-appimage-beta.yml","compose-test-appimage-installer":"electron-builder --config electron-builder-appimage-test.yml","compose-win-installer":"electron-builder --config electron-builder-win.yml","compose-aff-win-installer":"electron-builder --config electron-builder-aff-win.yml","compose-win-test-installer":"electron-builder --config electron-builder-win-test.yml","compose-win-upgradable-test-installer":"electron-builder --config electron-builder-win-upgradable-test.yml","compose-mac-upgradable-test-installer":"electron-builder --config electron-builder-mac-upgradable-test.yml","compose-win-beta-installer":"electron-builder --config electron-builder-win-beta.yml","compose-mac-installer":"electron-builder --config electron-builder-mac.yml","compose-mac-test-installer":"electron-builder --config electron-builder-mac-test.yml","compose-mac-arm-test-installer":"electron-builder --config electron-builder-mac-arm-test.yml","compose-mac-beta-installer":"electron-builder --config electron-builder-mac-beta-dmg.yml","compose-mac-arm-installer":"electron-builder --config electron-builder-mac-arm-dmg.yml","compose-mac-dmg-installer":"electron-builder --config electron-builder-mac-dmg.yml"},"keywords":[],"author":{"name":"GoLogin","email":"4061808@gmail.com"},"homepage":"https://gologinapp.com","license":"ISC","devDependencies":{"@babel/cli":"^7.6.2","@babel/core":"^7.6.2","@babel/plugin-proposal-class-properties":"^7.5.5","@babel/plugin-transform-arrow-functions":"^7.2.0","@babel/plugin-transform-runtime":"^7.6.2","@babel/preset-env":"^7.6.2","@babel/preset-react":"^7.0.0","@babel/preset-typescript":"^7.6.0","@babel/runtime":"^7.6.2","@sentry/webpack-plugin":"^2.10.0","@testing-library/react":"^12.0.0","@testing-library/user-event":"^13.1.9","@types/adm-zip":"^0.5.0","@types/country-flag-icons":"^1.2.0","@types/deep-equal":"^1.0.4","@types/dompurify":"^3.0.5","@types/electron":"^1.6.10","@types/express":"^4.17.9","@types/fs-extra":"^8.0.0","@types/jest":"^26.0.23","@types/loadable__component":"^5.13.8","@types/moment":"^2.13.0","@types/node":"^14.14.16","@types/react":"^16.9.4","@types/react-copy-to-clipboard":"^4.3.0","@types/react-credit-cards":"^0.8.0","@types/react-dom":"^16.9.1","@types/react-gtm-module":"^2.0.0","@types/react-helmet":"^5.0.14","@types/react-infinite-scroll-component":"^4.2.5","@types/react-redux":"^7.1.4","@types/react-resizable":"^3.0.1","@types/react-router-dom":"^5.1.0","@types/react-sortable-hoc":"^0.7.1","@types/react-stripe-elements":"^6.0.3","@types/react-test-renderer":"^16.9.0","@types/react-virtualized":"^9.21.30","@types/react-window":"^1.8.5","@types/request":"^2.48.5","@types/requestretry":"^1.12.7","@types/superagent":"^4.1.3","@types/unzipper":"^0.10.6","@types/uuid":"^8.3.0","@types/ws":"^7.2.4","@types/yauzl":"^2.10.0","@types/yazl":"^2.4.2","@typescript-eslint/eslint-plugin":"^5.30.7","@typescript-eslint/parser":"^5.30.7","babel-core":"^6.26.3","babel-jest":"^24.9.0","babel-loader":"^8.0.6","babel-plugin-import":"^1.12.2","babel-plugin-macros":"^3.1.0","babel-polyfill":"^6.26.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-0":"^6.24.1","concurrently":"^8.2.2","copy-webpack-plugin":"^5.0.4","cross-env":"^7.0.3","css-loader":"^3.2.0","electron":"29.1.0","electron-builder":"24.13.3","electron-devtools-installer":"^3.1.1","electron-reload":"^2.0.0-alpha.1","eslint":"^8.20.0","eslint-import-resolver-typescript":"^3.3.0","eslint-plugin-hooks":"^0.4.3","eslint-plugin-import":"^2.26.0","eslint-plugin-react":"^7.30.1","eslint-plugin-react-hooks":"^4.6.0","file-loader":"^4.2.0","html-webpack-plugin":"^4.5.0","husky":"^3.0.8","javascript-obfuscator":"^2.9.4","jest":"25.4.0","less":"^3.10.3","less-loader":"^5.0.0","lint-staged":"^9.4.1","nock":"^13.2.4","node-loader":"^2.0.0","prettier":"^1.18.2","proxyquire":"^2.1.3","react-test-renderer":"^16.10.1","terser":"^5.5.1","terser-webpack-plugin":"^5.0.3","ts-jest":"^24.1.0","typescript":"^4.8.4","webpack":"^5.9.0","webpack-bundle-analyzer":"^4.9.1","webpack-cli":"^4.2.0","webpack-dev-server":"^4.15.1","webpack-obfuscator":"^3.1.0"},"dependencies":{"@dnd-kit/core":"^6.1.0","@dnd-kit/sortable":"^8.0.0","@electron/remote":"2.1.2","@emotion/core":"^10.0.20","@emotion/css":"^10.0.14","@emotion/styled":"^10.0.17","@hcaptcha/react-hcaptcha":"^1.8.1","@livesession/electron-cookies":"^1.0.1","@livesession/sdk":"^1.1.4","@loadable/component":"^5.15.3","@material-ui/core":"^4.11.4","@material-ui/icons":"^4.11.2","@react-oauth/google":"^0.7.1","@sentry/browser":"^6.2.1","@sentry/electron":"^4.1.2","@sentry/react":"^7.54.0","@sentry/tracing":"^7.23.0","@stripe/react-stripe-js":"^2.1.0","@stripe/stripe-js":"^1.54.0","@tolgee/core":"5.0.0","@tolgee/format-icu":"^5.12.0","@tolgee/i18next":"5.1.0","@tolgee/react":"^5.24.1","@types/react-beautiful-dnd":"^13.1.4","antd":"^3.23.5","axios":"^0.19.0","body-parser":"^1.19.0","buffer-crc32":"^0.2.13","connected-react-router":"^6.5.2","cors":"^2.8.5","country-flag-icons":"^1.2.6","date-fns":"^2.5.0","decompress":"^4.2.0","decompress-targz":"^4.1.1","decompress-unzip":"^4.0.1","deep-equal":"^2.2.3","dompurify":"^3.0.6","electron-updater":"^5.3.0","express":"^4.17.3","form-data":"^3.0.0","fs-extra":"^8.1.0","get-system-fonts":"^2.0.2","got":"11.8.5","https-proxy-agent":"^7.0.4","i18next":"^22.4.6","i18next-icu":"^2.1.0","intl-messageformat":"^10.2.5","is-port-reachable":"^3.0.0","jotai":"^2.6.1","keytar":"^7.9.0","locize":"^2.2.4","locize-lastused":"^3.0.12","moment":"^2.25.3","open":"^7.0.0","qrcode.react":"^3.0.1","react":"^16.10.1","react-beautiful-dnd":"^13.1.1","react-coinbase-commerce":"^1.4.4","react-copy-to-clipboard":"^5.0.2","react-credit-cards":"^0.8.3","react-dom":"^16.10.1","react-drag-listview":"^0.2.1","react-facebook-pixel":"^0.1.3","react-ga":"^2.7.0","react-ga4":"^2.1.0","react-gtm-module":"^2.0.11","react-helmet":"^5.2.1","react-i18next":"^12.1.4","react-infinite-scroll-component":"^5.0.5","react-intercom":"^1.0.15","react-quill":"^2.0.0","react-redux":"^7.1.1","react-resizable":"^3.0.4","react-router-dom":"^5.1.2","react-sortable-hoc":"^1.11.0","react-stripe-elements":"^6.0.1","react-virtualized":"^9.22.5","react-window":"^1.8.8","redux":"^4.0.4","redux-starter-kit":"^0.7.0","redux-thunk":"^2.3.0","refresh-fetch":"^0.6.2","request":"^2.88.2","requestretry":"^4.1.1","resize-observer-polyfill":"^1.5.1","scroll-into-view":"^1.16.2","socks-proxy-agent":"^8.0.2","sqlite":"^4.0.18","sqlite3":"^5.1.6","start":"^5.1.0","style-loader":"^1.0.0","superagent":"^5.1.0","tree-kill":"^1.2.2","unzipper":"^0.10.14","userflow.js":"^2.12.0","uuid":"^8.3.2","web-vitals":"^2.1.0","webpack-node-externals":"^2.5.2","ws":"^7.2.5","yauzl":"^2.10.0","yazl":"^2.5.1","zip-dir":"^2.0.0"},"resolutions":{"loader-utils":"^2.0.1"},"lint-staged":{"src/**/*.{js,jsx,ts,tsx,json,md}":["prettier --single-quote --write","git add"]},"protocols":{"name":"gologin-protocol","schemes":["gologin"]},"jest":{"moduleNameMapper":{"\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":"<rootDir>/__mocks__/fileMock.js","\\\\.(css|less)$":"<rootDir>/__mocks__/styleMock.js"}}}')
            }
        },
        r = {};

    function t(e) { var a = r[e]; if (void 0 !== a) return a.exports; var o = r[e] = { id: e, loaded: !1, exports: {} }; return n[e](o, o.exports, t), o.loaded = !0, o.exports }
    t.m = n, t.n = e => { var n = e && e.__esModule ? () => e.default : () => e; return t.d(n, { a: n }), n }, t.d = (e, n) => { for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] }) }, t.f = {}, t.e = e => Promise.all(Object.keys(t.f).reduce(((n, r) => (t.f[r](e, n), n)), [])), t.u = e => e + ".main.js", t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), t.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.nmd = e => (e.paths = [], e.children || (e.children = []), e), t.p = "", e = { 179: 1 }, t.f.require = (n, r) => {
        e[n] || (n => {
            var r = n.modules,
                a = n.ids,
                o = n.runtime;
            for (var i in r) t.o(r, i) && (t.m[i] = r[i]);
            o && o(t);
            for (var s = 0; s < a.length; s++) e[a[s]] = 1
        })(require("./" + t.u(n)))
    };
    var a = {};
    (() => {
        "use strict";
        t.r(a);
        var e = t(9591),
            n = t.n(e),
            r = t(3292),
            o = t(1017),
            i = t.n(o);
        const s = require("url");
        var l = t.n(s);
        const c = require("@electron/remote/main");
        var u = t(1789);
        const d = require("@sentry/tracing");
        var m = t(9496);
        const f = require("electron-updater");
        var p, v = function(e) { return null !== e },
            g = t(8779),
            h = t.n(g),
            y = t(2245),
            b = t.n(y),
            w = t(5828),
            S = t(8062),
            k = t(7703),
            _ = t(5664),
            P = i().join(k.Mv, i().sep, "gologin-metadata"),
            T = i().join(P, i().sep, "data.json"),
            E = function() {
                var e = n()((function*() {
                    var e = yield(0, S.D)(T, "metadata");
                    if (!e || e.fingerprint) return e;
                    var n = { fingerprint: (0, w.v4)(), data: {} };
                    return yield(0, r.mkdir)(P, { recursive: !0 }).then((function() { return (0, S.s)(T, n, "metadata") })).catch((function(e) {
                        var n = e instanceof Error ? e.message : e;
                        (0, _.oj)({
                            message: n,
                            tags: [
                                ["scenario", "check-competitors"]
                            ],
                            transactionName: "saveing-competitor-check-metadata-error",
                            level: "warning"
                        })
                    })), n
                }));
                return function() { return e.apply(this, arguments) }
            }(),
            C = function() { var e = n()((function*(e) { return (0, S.s)(T, e, "metadata") })); return function(n) { return e.apply(this, arguments) } }();
        ! function(e) { e.INSTALLED = "competitor installed", e.UNINSTALLED = "competitor uninstalled" }(p || (p = {}));
        var M = t(4040),
            O = { DOLPHIN: "rjzfxd", OCTO: "0fprsl", MULTILOGIN: "yx2dnu", ADSPOWER: "wpvub7", UNDETECTABLE: "j5qcm9", INCOGNITION: "9o1tie", INDIGO: "lhzv3p", MORELOGIN: "9dbawo7" },
            x = t(4147),
            N = t(5346);

        function I(e, n) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(e);
                n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
            }
            return r
        }

        function B(e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2 ? I(Object(r), !0).forEach((function(n) { h()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
            }
            return e
        }
        var j = new M.CommonDataManager;

        function D(e, n) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(e);
                n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
            }
            return r
        }

        function R(e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2 ? D(Object(r), !0).forEach((function(n) { h()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
            }
            return e
        }
        var A = new M.CommonDataManager,
            L = (0, k.IT)(),
            { DOLPHIN_DIR_PATH: F, OCTO_DIR_PATH: G, MULTILOGIN_DIR_PATH: U, ADSPOWER_DIR_PATH: z, UNDETECTABLE_DIR_PATH: H, INCOGNITION_DIR_PATH: W, INDIGO_DIR_PATH: K, MORELOGIN_DIR_PATH: V } = L,
            q = { DOLPHIN_DIR_PATH: F, OCTO_DIR_PATH: G, MULTILOGIN_DIR_PATH: U, ADSPOWER_DIR_PATH: z, UNDETECTABLE_DIR_PATH: H, INCOGNITION_DIR_PATH: W, INDIGO_DIR_PATH: K, MORELOGIN_DIR_PATH: V },
            Z = function() {
                var e = n()((function*() {
                    var e = Object.keys(q).map((function(e) {
                        var [n] = e.split("_");
                        return (0, r.access)(q[e]).then((function() {
                            return {
                                [n]: !0
                            }
                        }), (function() {
                            return {
                                [n]: !1
                            }
                        }))
                    }));
                    return Promise.all(e)
                }));
                return function() { return e.apply(this, arguments) }
            }(),
            J = function() {
                var e = n()((function*(e) {
                    var { lastCheckDate: n = "" } = e, r = !1, t = {}, a = {};
                    try {
                        if (!(!n || b()(n).utc().add(1, "d").valueOf() < b()().utc().valueOf()) || !A.accessToken) return;
                        (yield Z()).forEach((function(e) {
                            Object.keys(e).forEach((function(n) {
                                var r;
                                t[(r = n, O[r])] = e[n]
                            }))
                        })), a = yield E();
                        var { data: o = {} } = a, i = Object.keys(t).map((function(e) {
                            var n, r = !o[e] && t[e],
                                i = o[e] && !t[e],
                                s = (n = e, Object.keys(O).find((function(e) { return O[e] === n })) || "unknown").toLowerCase();
                            if (!r && !i) return null;
                            var l = r ? p.INSTALLED : p.UNINSTALLED;
                            return $({ action: l, actionId: a.fingerprint, decryptedName: s })
                        }));
                        yield Promise.all(i).then((function(e) { e.includes("error") && (r = !0) })).catch((function(e) {
                            r = !0;
                            var n = e instanceof Error ? e.message : e;
                            (0, _.oj)({
                                message: n,
                                tags: [
                                    ["scenario", "check-competitors"]
                                ],
                                transactionName: "check-competitors-apps-states-error",
                                level: "warning"
                            })
                        }))
                    } catch (e) {
                        r = !0;
                        var s = e instanceof Error ? e.message : e;
                        (0, _.oj)({
                            message: s,
                            tags: [
                                ["scenario", "check-competitors"]
                            ],
                            transactionName: "in-check-process-error",
                            level: "warning"
                        })
                    }
                    if (!r) {
                        var l = R(R({}, a), {}, { data: t });
                        yield C(l).catch((function(e) {
                                var n = e instanceof Error ? e.message : e;
                                (0, _.oj)({
                                    message: n,
                                    tags: [
                                        ["scenario", "check-competitors"]
                                    ],
                                    transactionName: "save-metadata-error",
                                    level: "warning"
                                })
                            })),
                            function(e) { return (0, N.$)({ method: "PUT", url: "".concat(j.apiBaseUrl, "/gologin-settings/gologin-metadata"), body: e }) }({ lastCheckDate: b()().utc().toDate() }).catch((function(e) {
                                var n = e instanceof Error ? e.message : e;
                                (0, _.oj)({
                                    message: n,
                                    tags: [
                                        ["scenario", "check-competitors"]
                                    ],
                                    transactionName: "sync-metadata-with-db-error",
                                    level: "warning"
                                })
                            }))
                    }
                }));
                return function(n) { return e.apply(this, arguments) }
            }(),
            $ = function(e) {
                var { action: n, actionId: r, decryptedName: t } = e;
                return function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { version: r } = x;
                    return n.appVersion = r, (0, N.$)({ method: "POST", url: "".concat(j.apiBaseUrl, "/analytics/add_action_analytics"), body: B({ action: e }, n) })
                }("".concat(n, " - ").concat(t), { actionInfo: t, actionId: r }).then((function() { return "ok" })).catch((function(e) {
                    var r = e instanceof Error ? e.message : e;
                    return (0, _.oj)({
                        message: r,
                        tags: [
                            ["scenario", "check-competitors"],
                            ["competitor", t]
                        ],
                        transactionName: "sending-analytics-".concat(n, "-error"),
                        level: "warning"
                    }), "error"
                }))
            },
            X = t(1583),
            Y = t(4342),
            Q = t(7774),
            ee = t(8911),
            ne = (0, k.IT)(),
            re = function() {
                var e = n()((function*(e) {
                    var t = e.map(function() {
                        var e = n()((function*(e) {
                            var n = (0, o.join)(ne.DOLPHIN_DIR_PATH, o.sep, "browser_profiles", o.sep, e, o.sep, "".concat(e, ".datadir.zip"));
                            if (!(yield(0, r.access)(n).then((function() { return !0 }), (function() { return !1 })))) return null;
                            var t = (0, o.join)(ne.BASE_FOLDER, o.sep, "dolphin-temp", o.sep, e);
                            if ("error" === (yield te(n, t)).status) return null;
                            var a = (0, o.join)(t, o.sep, "Default", o.sep, "Cookies"),
                                i = yield(0, Y.AI)(a, !0).finally((function() { return (0, r.rmdir)(t, { recursive: !0 }) })),
                                { cookies: s = [] } = i;
                            return s.length ? { profileId: e, cookies: s } : null
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }());
                    return Promise.all(t)
                }));
                return function(n) { return e.apply(this, arguments) }
            }(),
            te = function() {
                var e = n()((function*(e, t) {
                    console.log("zipPath: ".concat(e, ", profilePath: ").concat(t));
                    var a = (yield(0, ee.Z)({ fn: () => (0, Q.kO)(e, t).then((function() { return { status: "success" } })), retryDelay: 300 }).catch(function() {
                        var t = n()((function*(n) {
                            var t = n instanceof Error ? n.message : n;
                            if ("string" == typeof t && "Invalid filename" === t) {
                                var a = yield(0, r.access)(e).then((function() { return !0 }), (function() { return !1 }));
                                console.log("input: ", e), console.log("isFolderExists: ", a)
                            }
                            return (0, _.oj)({
                                message: t,
                                transactionName: "extract-dolphin-profile",
                                level: "fatal",
                                tags: [
                                    ["scenario", "import-dolphin-cookies"]
                                ]
                            }), console.error("error extracting dolphin profile zip"), console.log(e), { status: "error", error: n }
                        }));
                        return function(e) { return t.apply(this, arguments) }
                    }())) || {};
                    return a
                }));
                return function(n, r) { return e.apply(this, arguments) }
            }();
        const ae = require("body-parser");
        var oe = t.n(ae);
        const ie = require("cors"),
            se = require("express");
        var le = t.n(se);
        const ce = require("is-port-reachable");
        var ue = t(6452),
            de = t.n(ue),
            me = t(1041),
            fe = t.n(me),
            pe = t(4293),
            ve = function() { var e = n()((function*() { for (var e = ge(2e4, 3e4), n = yield ce(e); n;) e = ge(2e4, 3e4), n = yield ce(e); return e })); return function() { return e.apply(this, arguments) } }(),
            ge = function(e, n) { return e = Math.ceil(e), n = Math.floor(n), Math.floor(Math.random() * (n - e + 1)) + e },
            he = t(9408),
            ye = (0, se.Router)(),
            be = new M.CommonDataManager;
        ye.get("/service/check-server", (function(e, n) { return console.log("check-server"), n.status(200), n.json({ status: !0 }) })), ye.post("/service/credentials", (function(e, n) { console.log("credentials"); var { access: r = "", api: t = "https://api.gologin.com", twoFa: a = "" } = e.body; return global.credentials = { access: r, api: t, twoFa: a, userAgent: e.headers["user-agent"] }, n.status(200), n.json({ credentials: global.credentials }) })), ye.post("/browser/start-profile", function() {
            var e = n()((function*(e, r) {
                console.log("start-profile");
                var { profileId: t = "", sync: a = !1 } = e.body;
                if (!t) return r.status(400).send("Invalid params").end();
                var o = 0;
                a && (o = yield ve());
                var i = function() {
                        var e = n()((function*(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (n) { var { status: t = 400, message: a = "" } = n; return r.status(t).send(a).end() }
                            var i = "";
                            if (o) {
                                var s = yield de()("http://127.0.0.1:".concat(o, "/json/version")).json().catch((function() { return null }));
                                s && (i = s.webSocketDebuggerUrl)
                            }
                            r.status(200).json({ status: "success", wsUrl: i })
                        }));
                        return function(n) { return e.apply(this, arguments) }
                    }(),
                    s = { cb: i, sync: a, debuggingPort: o };
                yield(0, pe.loadProfile)({ profileId: t, iconBase64: "", channel: global.channel, remoteApiOptions: s, launchViaRestApi: !0 }).catch((function() { return null }))
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), ye.post("/browser/stop-profile", function() { var e = n()((function*(e, n) { console.log("stop-profile"); var { profileId: r = "" } = e.body; return r ? ((0, pe.killProfile)(r), n.status(204).end()) : n.status(400).send("Invalid params").end() })); return function(n, r) { return e.apply(this, arguments) } }()), ye.get("/cookies/:id", function() {
            var e = n()((function*(e, n) {
                var r, t, a;
                if (console.log("get cookies"), "true" === (null === (r = e.query) || void 0 === r ? void 0 : r.isAvailable)) return n.json({ status: !0 });
                if (null !== (t = pe.BRAVE_PROCESSES[e.params.id]) && void 0 !== t && t.init) return n.json([]);
                var o = null === (a = pe.BRAVE_PROCESSES[e.params.id]) || void 0 === a ? void 0 : a.startProfileTimestamp,
                    i = (yield(0, he.N)({ endpoint: "/browser/".concat(e.params.id, "/cookies"), method: "GET" })) || [];
                if (o) {
                    var s, l = b().now() - o;
                    console.log(l, "browser start"), (0, he.N)({ endpoint: "/analytics/compound_action_analytics", method: "POST", headers: { "Content-Type": "application/json", Authorization: "Bearer ".concat(be.accessToken), "user-agent": be.userAgent, "x-two-factor-token": be.twoFaKey || "" }, body: JSON.stringify({ action: "browser opened", time: l, mode: (null === (s = pe.BRAVE_PROCESSES[e.params.id]) || void 0 === s ? void 0 : s.startMode) || "unknown", profile: e.params.id.toString() }) }).catch((function() { return null }))
                }
                return pe.BRAVE_PROCESSES[e.params.id] && (pe.BRAVE_PROCESSES[e.params.id].init = !0), n.json(i)
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), ye.post("/cookies/:id", function() { var e = n()((function*(e, n) { console.log("post cookies"); var r = yield(0, he.N)({ endpoint: "/browser/".concat(e.params.id, "/cookies"), method: "POST", body: e.body }); return n.json(r) })); return function(n, r) { return e.apply(this, arguments) } }()), ye.post("/cookies/:id/cookies_stats", function() { var e = n()((function*(e, n) { console.log("cookies_stats"); var r = yield(0, he.N)({ endpoint: "/browser/".concat(e.params.id, "/cookies/cookies_stats"), method: "POST", body: e.body }); return n.json(r) })); return function(n, r) { return e.apply(this, arguments) } }()), ye.get("/session/ready", (function(e, n) { return n.end() })), ye.get("/timer/update/:id", (function(e, n) { return n.end() })), ye.get("/close/:id", (function(e, n) {
            console.log("close");
            var r = e.params.id;
            try { var t; if ("darwin" === process.platform) console.log("Closing browser..."), pe.BRAVE_PROCESSES[r] && fe()(null === (t = pe.BRAVE_PROCESSES[r].orbitaProc) || void 0 === t ? void 0 : t.pid, "SIGTERM") } catch (e) {
                console.log(r), console.log(pe.BRAVE_PROCESSES);
                var a = e instanceof Error ? e.message : e;
                (0, _.oj)({
                    message: a,
                    transactionName: "kill-process-mac",
                    tags: [
                        ["scenario", "run-profile"],
                        ["profileId", r]
                    ]
                })
            }
            n.end()
        }));
        const we = ye;
        var Se = le()();

        function ke(e) { return _e.apply(this, arguments) }

        function _e() {
            return (_e = n()((function*(e) {
                for (var n = 36912, r = yield ce(n); r;) r = yield ce(++n);
                var t = Se.listen(n, (function() { console.log("Local server started on port ".concat(n)) }));
                e.appPort = n, t.on("error", (function(n) {
                    n.message.includes("EADDRINUSE") ? ke(e) : (0, _.zd)({
                        message: n.message,
                        transactionName: "local-server-init-error",
                        tags: [
                            ["name", "local-server-init-error"]
                        ]
                    })
                }))
            }))).apply(this, arguments)
        }
        Se.use(ie({ origin: /.*/, optionsSuccessStatus: 200 })), Se.use(oe().json({ limit: "10mb" })), Se.use(we);
        var Pe = t(9846),
            Te = t(5879),
            Ee = (0, k.IT)(),
            Ce = i().join(k.Mv, i().sep, "migration"),
            Me = i().join(Ce, i().sep, "migrationConfig.json"),
            Oe = function() {
                var e = n()((function*(e, n) {
                    var { migrationData: t = {} } = n;
                    if (t.isDolphinChecked) return null;
                    var a = yield(0, S.D)(Me);
                    if (a) { var { dolphinChecked: o } = a; if (o) return { isDolphinChecked: !0 } }
                    var i = Ee.DOLPHIN_DIR_PATH;
                    if (!(yield(0, r.access)(i).then((function() { return !0 }), (function() { return !1 })))) return null;
                    e && e.webContents.send("dolphin-anty-detected");
                    var s = a || {};
                    return s.dolphinChecked = !0, yield(0, r.mkdir)(Ce, { recursive: !0 }), yield(0, S.s)(Me, s, "migration").catch((function() {})), { isDolphinChecked: !0 }
                }));
                return function(n, r) { return e.apply(this, arguments) }
            }(),
            xe = t(1247),
            Ne = t(6745),
            Ie = "".concat(Ne.E_, ":access_token"),
            Be = "file://".concat(i().join(__dirname, "index.html")),
            je = t(8149),
            De = function() {
                var e = n()((function*(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    try {
                        var { searchParams: r } = new URL(n), t = r.get("accessToken"), a = r.get("twoFaToken"), o = !!r.get("isNewUser");
                        if (!t) return;
                        var i = o ? "quiz" : "profileList";
                        yield e.webContents.executeJavaScript("\n      localStorage.setItem('".concat(Ie, "', '").concat(t, "');\n      localStorage.setItem('").concat(je.B7, "', '").concat(a, "');\n    "));
                        var s = new URL("".concat(Be, "#/").concat(i));
                        e.loadURL(s.toString())
                    } catch (e) {
                        var l = e instanceof Error ? e.message : JSON.stringify(e);
                        (0, _.oj)({
                            message: l,
                            transactionName: "google-oauth-error",
                            tags: [
                                ["scenario", "google-oauth"]
                            ]
                        })
                    }
                }));
                return function(n) { return e.apply(this, arguments) }
            }(),
            Re = t(9435),
            Ae = "run-profile-with-external-protocol",
            Le = "share-profile-with-external-protocol",
            Fe = "/profileList",
            Ge = "/".concat("checkout"),
            Ue = ("".concat(Ge, "/payment-methods"), t(6683));

        function ze(e, n) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(e);
                n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
            }
            return r
        }

        function He(e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2 ? ze(Object(r), !0).forEach((function(n) { h()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ze(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
            }
            return e
        }
        var We = function() {
                var e = n()((function*(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        { href: r, searchParams: t, search: a } = new URL(n),
                        o = t.get("protocol") || "custom",
                        i = { mode: o };
                    (0, Ue.e)(Re.M.startedHandling, i), "http" !== o && (0, Ue.e)(Re.M.visited, i);
                    var [s, l, c] = r.split("/").filter(Boolean), u = "open" === l && c ? c.replace(a, "") : l;
                    if (!u) return (0, _.oj)({
                        message: "profile id or name is falsy",
                        transactionName: "profile-id-or-name-is-falsy",
                        tags: [
                            ["scenario", "open-profiles-via-link"]
                        ]
                    });
                    if (e.webContents.getURL().includes(Fe)) return (0, Ue.e)(Re.M.startedRedirecting, He(He({}, i), {}, { actionInfo: Fe })), e.webContents.send(Ae, { profileIdOrName: u, deepLinkProtocol: o });
                    (0, Ue.e)(Re.M.startedRedirecting, i);
                    var d = "".concat(Be, "#").concat(Fe, "?profile-id-or-name=").concat(u, "&protocol=").concat(o);
                    return e.loadURL(d.toString())
                }));
                return function(n) { return e.apply(this, arguments) }
            }(),
            Ke = function() {
                var e = n()((function*(e, n) {
                    return (0, N.$)({ url: "".concat(je.CT, "/share-links/profiles/share"), method: "POST", body: { profileName: e, linkId: n } }).then((function(e) { return e })).catch((function(e) {
                        var n = e instanceof Error ? e.message : "unknown";
                        switch (!0) {
                            case n.includes("400"):
                                return "tableProfiles.notification.cannotShareProfilesToYourself";
                            case n.includes("404"):
                                return "tableProfiles.notification.linkNotFound";
                            case n.includes("405"):
                                return "tableProfiles.notification.linkIsPaused";
                            default:
                                return null
                        }
                    }))
                }));
                return function(n, r) { return e.apply(this, arguments) }
            }();

        function Ve(e, n) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(e);
                n && (t = t.filter((function(n) { return Object.getOwnPropertyDescriptor(e, n).enumerable }))), r.push.apply(r, t)
            }
            return r
        }

        function qe(e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2 ? Ve(Object(r), !0).forEach((function(n) { h()(e, n, r[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ve(Object(r)).forEach((function(n) { Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n)) }))
            }
            return e
        }
        var Ze = new M.CommonDataManager,
            Je = function() {
                var e = n()((function*(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        { pathname: r, searchParams: t } = new URL(n),
                        [a, o] = r.split("/").filter(Boolean),
                        i = t.get("access-token");
                    if (a && o) {
                        var s = Ze.accessToken;
                        try {
                            if (!s && i && (Ze.accessToken = i, yield e.webContents.executeJavaScript("\n        localStorage.setItem('".concat(Ie, "', '").concat(i, "');\n      "))), !Ze.accessToken) return;
                            var l = yield Ke(a, o);
                            if (!l || "string" == typeof l) return e.webContents.send(Le, { message: l });
                            (0, pe.updateDeletedProfiles)([l.id]);
                            var c = e.webContents.getURL();
                            if (c.includes(Fe)) return e.webContents.send(Le, { profile: qe(qe({}, l), {}, { isShared: !0 }), isUpdatePage: c.includes("/update/") });
                            var u = JSON.stringify(qe(qe({}, l), {}, { isShared: !0 }));
                            return yield e.webContents.executeJavaScript("\n      sessionStorage.setItem('".concat(je.Qx, "', '").concat(u, "');\n    ")).catch(console.error), e.loadURL("".concat(Be, "#").concat(Fe))
                        } catch (e) {
                            var d = e instanceof Error ? e.message : JSON.stringify(e);
                            (0, _.oj)({
                                message: d,
                                transactionName: "share-profiles-via-link-error",
                                tags: [
                                    ["scenario", "share-profiles-via-link"]
                                ]
                            })
                        }
                    }
                }));
                return function(n) { return e.apply(this, arguments) }
            }(),
            $e = function() {
                var e = n()((function*(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (e && n.includes("gologin://")) {
                        var [r, t, a, o] = n.split("/").filter(Boolean);
                        switch (!0) {
                            case t.startsWith("o-auth"):
                                return De(e, n);
                            case t.startsWith("redirect") && a.startsWith("after-payment"):
                                var i = new URL("".concat(Be, "#/profileList"));
                                e.loadURL(i.toString());
                                break;
                            case a && o && "share" === t:
                                return Je(e, n);
                            case "open" === t || t && !a:
                                return We(e, n);
                            default:
                                return console.info("Pathname is not recognised")
                        }
                    } else console.info("Skipping handling a deep link")
                }));
                return function(n) { return e.apply(this, arguments) }
            }(),
            Xe = t(6069);
        const Ye = require("keytar");
        var Qe = t.n(Ye),
            en = new M.CommonDataManager,
            nn = "GoLogin",
            rn = "temp_auth_token",
            tn = "google_client_id",
            an = function() {
                return cn().catch((function(e) {
                    var n = e instanceof Error ? e.message : e;
                    (0, _.oj)({
                        message: n,
                        transactionName: "write-app-config-error",
                        level: "warning",
                        tags: [
                            ["scenario", "write-app-config"]
                        ]
                    })
                }))
            },
            on = function() {
                var e = n()((function*(e) {
                    (yield Qe().getPassword(nn, rn)) !== e && (yield Qe().setPassword(nn, tn, e))
                }));
                return function(n) { return e.apply(this, arguments) }
            }(),
            sn = Qe().getPassword(nn, tn),
            ln = function() {
                var e = n()((function*() {
                    var e = yield Qe().getPassword(nn, rn);
                    e && (en.accessToken = e, Qe().deletePassword(nn, rn).catch((function() { return null })))
                }));
                return function() { return e.apply(this, arguments) }
            }(),
            cn = function() { var e = n()((function*() { return Qe().setPassword(nn, rn, en.accessToken) })); return function() { return e.apply(this, arguments) } }();
        try { t(1305)(__dirname, { electron: i().join(__dirname, "node_modules", ".bin", "electron") }) } catch (e) {}
        var { name: un, version: dn, subVersion: mn } = x, fn = !1, pn = !1, vn = !1;
        ke(global), (0, d.addExtensionMethods)(), c.initialize();
        var gn = !1,
            hn = (0, k.IT)();
        console.log("folderPaths:", hn);
        var yn, bn, wn, Sn = Date.now(),
            kn = "gologin",
            _n = "";
        "win32" === process.platform && (_n = process.argv.find((function(e) { return e.startsWith(kn) })) || ""), global.channel = null;
        var Pn = m.app.requestSingleInstanceLock();
        (0, _.j6)();
        var Tn, En, Cn = u.startTransaction({ name: "start-app" }),
            Mn = Cn.startChild({ op: "electron" }),
            On = m.Menu.buildFromTemplate([{ label: "Show", click: function() { var e; return null === (e = yn) || void 0 === e ? void 0 : e.show() } }, { label: "Quit", click: function() { m.app.quit() } }]),
            xn = function() { vn || pn || fn || (fn = !0, f.autoUpdater.checkForUpdatesAndNotify().then((function(e) { e || (fn = !1) })).catch((function() { return null }))) },
            Nn = [{
                label: "GoLogin",
                submenu: [{ label: "Quit", accelerator: "CmdOrCtrl+Q", click: function() { m.app.quit() } }, {
                    label: "Hide",
                    accelerator: "CmdOrCtrl+W",
                    click: function() {
                        var e;
                        null === (e = yn) || void 0 === e || e.hide()
                    }
                }]
            }, { label: "Edit", submenu: [{ role: "undo" }, { role: "redo" }, { type: "separator" }, { role: "cut" }, { role: "copy" }, { role: "paste" }, { role: "selectAll" }] }];
        m.Menu.setApplicationMenu(m.Menu.buildFromTemplate(Nn));
        var In = "".concat(un, " v").concat(dn, " ").concat(mn),
            Bn = function() {
                var e = n()((function*() {
                    var { CommonDataManager: e } = yield Promise.resolve().then(t.bind(t, 4040)), n = new e, r = { windowHeight: 768, windowWidth: 1200, windowPosX: 0, windowPosY: 0, isFullScreen: !1, isMaximized: !1, backgroundColor: "#F9F9F9" };
                    yield(0, Pe.qS)(r), process.env.GOLOGIN_ELECTRON_THEME = n.appConfig.theme || "system";
                    var a = m.screen.getPrimaryDisplay(),
                        { width: o } = a.workAreaSize;
                    yn = new m.BrowserWindow({ minWidth: 1024, minHeight: 500, width: r.windowWidth, height: r.windowHeight, x: r.windowPosX, y: r.windowPosY, useContentSize: !0, title: In, webPreferences: { nodeIntegration: !0, contextIsolation: !1 }, show: !1, backgroundColor: r.backgroundColor }), c.enable(yn.webContents), (o <= 1400 || r.isMaximized) && yn.maximize(), yn.setFullScreen(r.isFullScreen), setTimeout((function() { return yn.show() }), 600), yn.webContents.on("new-window", (function(e) { return e.preventDefault() })), Mn.finish(), Tn = Cn.startChild({ op: "render-dom" }), En = Date.now(), yn.loadURL(l().format({ pathname: i().join(__dirname, "index.html"), protocol: "file:", slashes: !0 })), _n && $e(yn, _n);
                    var s = i().join(__dirname, "iconTemplate@5x.png");
                    yn.tray = new m.Tray(m.nativeImage.createFromPath(s)), yn.tray.setToolTip("GoLogin"), yn.tray.setContextMenu(On), yn.tray.on("double-click", (function() { var e; return null === (e = yn) || void 0 === e ? void 0 : e.show() })), yn.on("close", (function(e) {
                        var n, r;
                        (console.log("Window Close Event Detected"), gn) || (console.log("No update application detected"), e.preventDefault(), null !== (n = yn) && void 0 !== n && n.isFullScreen() ? (yn.once("leave-full-screen", (function() { var e; return null === (e = yn) || void 0 === e ? void 0 : e.hide() })), yn.setFullScreen(!1)) : null === (r = yn) || void 0 === r || r.hide())
                    })), "win" === (yield(0, Xe.Ij)()) && (yield ln()), m.globalShortcut.register("CmdOrCtrl+Shift+I", (function() {
                        var e, n;
                        (null === (e = yn) || void 0 === e ? void 0 : e.isFocused()) && (null === (n = yn) || void 0 === n || n.webContents.toggleDevTools())
                    }))
                }));
                return function() { return e.apply(this, arguments) }
            }(),
            jn = function() { return yn && yn.removeAllListeners("close"), yn && yn.close(), null };
        m.app.on("activate", (function() { var e; return null === (e = yn) || void 0 === e ? void 0 : e.show() })), m.app.on("render-process-gone", (function(e, n, r) {
            ["clean-exit", "killed"].includes(r.reason) || (console.log(r.reason), (0, _.oj)({
                message: "crash-electron-renderer",
                transactionName: "crash-electron-renderer",
                level: "fatal",
                tags: [
                    ["scenario", "crash-electron"]
                ]
            }))
        })), m.app.on("child-process-gone", (function(e, n) {
            ["clean-exit", "killed"].includes(n.reason) || (console.log(n.reason), (0, _.oj)({
                message: "crash-electron-gpu",
                transactionName: "crash-electron-gpu",
                level: "fatal",
                tags: [
                    ["scenario", "crash-electron"]
                ]
            }))
        })), console.log("gotApplicationLock", Pn), Pn ? (m.app.on("second-instance", function() {
            var e = n()((function*(e, n, r, t) {
                console.info(e, n, r, t);
                var a = n.at(-1);
                yn ? (yn.isMinimized() && yn.restore(), yn.show(), yn.focus()) : a && (_n = a), yield $e(yn, a)
            }));
            return function(n, r, t, a) { return e.apply(this, arguments) }
        }()), m.app.on("ready", n()((function*() {
            var [{ checkGologinExtensions: e }, { checkSystemFonts: n }, { CommonDataManager: a }, { BrowserReleasesManager: o }, { ExtensionsManager: i }] = yield Promise.all([Promise.resolve().then(t.bind(t, 725)), t.e(694).then(t.bind(t, 9694)), Promise.resolve().then(t.bind(t, 4040)), Promise.resolve().then(t.bind(t, 8050)), Promise.resolve().then(t.bind(t, 4594))]), s = new a;
            (new o).getSupportedOrbitaVersions(s.apiBaseUrl).catch((function() { return null })), (new o).checkLocalOrbitaReleases().catch((function() { return null })), hn.BASE_FOLDER && (0, r.rm)(hn.BASE_FOLDER).catch((function(e) { return console.log("Error in removing base folder:", e) }));
            var l = new i;
            l.init().then((function() { return l.updateExtensions() })).catch((function() {}));
            var c = new X.o;
            Bn(), e().catch(console.log), c.downloadFonts([], !0).catch((function() { return null })), n().catch((function(e) { return console.log("Error in checkSystemFonts:", e.message) })), xn()
        }))), m.app.whenReady().then((function() {
            var e = !1;
            process.defaultApp ? process.argv.length >= 2 && (e = m.app.setAsDefaultProtocolClient(kn, process.execPath, [i().resolve(process.argv[1])])) : e = m.app.setAsDefaultProtocolClient(kn), console.log("Protocol success creation:", e)
        }))) : m.app.quit(), f.autoUpdater.on("update-downloaded", (function() { vn = !0, fn = !1, pn = !1, yn && yn.webContents.send("app-update-downloaded") })), f.autoUpdater.on("update-available", (function() { pn = !0, fn = !1 })), f.autoUpdater.on("update-not-available", (function() { fn = !1 })), m.ipcMain.handle("check-is-update-ready", (function() { vn && yn && yn.webContents.send("app-update-downloaded") })), f.autoUpdater.on("error", (function() { return null })), m.ipcMain.handle("check-competitors-metadata", (function(e, n) { return J(n) })), m.ipcMain.handle("check-competitors-apps-for-migration", (function(e, n) { return Oe(yn, n) })), m.ipcMain.handle("check-app-update", (function() { return xn() })), m.ipcMain.handle("app-loaded", (function() {
            var e, n = Date.now();
            null === (e = Tn) || void 0 === e || e.finish(), Cn.finish(), (0, Te.N)(yn), console.log("electron: ", En / 1e3 - Sn / 1e3), console.log("dom: ", n / 1e3 - En / 1e3)
        })), m.ipcMain.handle("set-user", function() {
            var e = n()((function*(e, n) {
                var { CommonDataManager: r } = yield Promise.resolve().then(t.bind(t, 4040)), a = new r, { userId: o, isFirstSession: i, plan: s, planId: l } = n, c = m.nativeTheme.shouldUseDarkColors ? "dark" : "light";
                a.userPlanId = l, u.setTag("is-first-session", i), u.setUser({ id: o }), u.setTag("plan", s), u.setTag("system-theme", c)
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), m.ipcMain.handle("set-global-channel", (function(e) { global.channel = e })), m.ipcMain.handle("start-profile", function() { var e = n()((function*(e, n) { var { loadProfile: r } = yield Promise.resolve().then(t.bind(t, 4293)), { profileId: a, proxyInfo: o, proxyEnabled: i, automation: s, icons: l, traceId: c, deepLinkProtocol: d } = n; return console.log("starting profile: ", a), r({ profileId: a, channel: e, proxyEnabled: i, proxyInfo: o, automation: s, icons: l, traceId: c, deepLinkProtocol: d }).catch((function(e) { u.captureException(new xe.H(e), (function(e) { return e.setLevel("error"), e.setTag("scenario", "run-profile"), e.setTransactionName("load-profile-error"), e.setFingerprint(["load-profile-error"]), e })) })) })); return function(n, r) { return e.apply(this, arguments) } }()), m.ipcMain.handle("retry-sync-profile", function() {
            var e = n()((function*(e, n) {
                var { profileId: r, onlyUpload: a = !1 } = n, { syncProfile: o } = yield Promise.resolve().then(t.bind(t, 4293));
                return o({ profileId: r, channel: e, onlyUpload: a }).catch((function(e) {
                    var n = e instanceof Error ? e.message : e;
                    (0, _.oj)({
                        message: n,
                        transactionName: "sync-profile-error",
                        tags: [
                            ["scenario", "sync-profile"]
                        ]
                    })
                }))
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), m.ipcMain.handle("focus-orbita-window", function() {
            var e = n()((function*(e, n) {
                var { focusOrbitaWindow: r } = yield Promise.resolve().then(t.bind(t, 2370));
                r(n.profileId).catch((function(e) {
                    var n = e instanceof Error ? e.message : e;
                    (0, _.oj)({
                        message: n,
                        transactionName: "view-button-error",
                        tags: [
                            ["scenario", "view-profile"]
                        ]
                    })
                }))
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), m.ipcMain.handle("send-translation-data-to-electron", (function(e, n) { bn = n })), m.ipcMain.handle("send-theme-to-electron", (function(e, n) { wn = n })), m.ipcMain.handle("install-app-updates", n()((function*() {
            var [{ closeAllProfiles: e }, { CommonDataManager: n }] = yield Promise.all([Promise.resolve().then(t.bind(t, 4293)), Promise.resolve().then(t.bind(t, 4040))]), r = new n;
            gn = !0;
            var a = [e()];
            "win" === r.userOs && a.push(an()), yield Promise.all(a);
            try { f.autoUpdater.quitAndInstall() } catch (e) {
                var o = e instanceof Error ? e.message : JSON.stringify(e);
                (0, _.oj)({
                    message: o,
                    transactionName: "electron-update",
                    level: "fatal",
                    tags: [
                        ["scenario", "crash-electron"]
                    ]
                })
            }
        }))), m.ipcMain.handle("download-chrome-extension", function() {
            var e = n()((function*(e, n) {
                var { ExtensionsManager: r } = yield Promise.resolve().then(t.bind(t, 4594)), [a] = n;
                (new r).checkChromeExtensions([a], !0).catch((function(e) { return console.log(e) }))
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), m.ipcMain.handle("download-user-chrome-extension", function() {
            var e = n()((function*(e, n) {
                var { ExtensionsManager: r } = yield Promise.resolve().then(t.bind(t, 4594)), [a] = n;
                (new r).checkLocalUserChromeExtensions([a], "", !0).catch((function(e) { return console.log(e) }))
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), m.ipcMain.handle("set-token", function() {
            var e = n()((function*(e, n) {
                var { token: r, twoFa: a } = n, { updateToken: o } = yield Promise.resolve().then(t.bind(t, 4293));
                console.log("update token: ", !!r), o(r, a)
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), m.ipcMain.handle("set-useragent", function() {
            var e = n()((function*(e, n) {
                var { ua: r } = n, { updateUseragent: a } = yield Promise.resolve().then(t.bind(t, 4293));
                a(r)
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), m.ipcMain.handle("stop-profile", function() {
            var e = n()((function*(e, n) {
                var { killProfile: r } = yield Promise.resolve().then(t.bind(t, 4293));
                r(n)
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), m.ipcMain.handle("stop-multiple-profiles", function() {
            var e = n()((function*(e, n) {
                var { killProfile: r } = yield Promise.resolve().then(t.bind(t, 4293));
                n.map((function(e) { return r(e) }))
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), m.ipcMain.handle("check-profiles", n()((function*() {
            var { checkProfiles: e } = yield Promise.resolve().then(t.bind(t, 4293));
            e()
        }))), m.ipcMain.handle("check-proxy", function() { var e = n()((function*(e, n) { var { ProxyService: r } = yield Promise.resolve().then(t.bind(t, 5499)); return r.checkProxy(n, !0) })); return function(n, r) { return e.apply(this, arguments) } }()), m.ipcMain.handle("check-cached-storage-size", n()((function*() { var { ProfileCachingManager: e } = yield Promise.resolve().then(t.bind(t, 7451)), n = new e; return n.init().then((function() { return n.checkCachedStorageSize() })).catch((function() { return 0 })) }))), m.ipcMain.handle("clear-cached-storage", n()((function*() { var { ProfileCachingManager: e } = yield Promise.resolve().then(t.bind(t, 7451)), n = new e; return n.init().then((function() { return n.clearCachedStorage() })).catch((function() {})) }))), m.ipcMain.handle("clear-profile-cache", function() { var e = n()((function*(e, n) { var { ProfileCachingManager: r } = yield Promise.resolve().then(t.bind(t, 7451)), a = new r; return a.init().then((function() { return a.clearProfileCache(n) })).catch((function() {})) })); return function(n, r) { return e.apply(this, arguments) } }()), m.ipcMain.handle("restore-profiles", function() {
            var e = n()((function*(e, n) {
                var { updateDeletedProfiles: r } = yield Promise.resolve().then(t.bind(t, 4293));
                r(n)
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), m.ipcMain.handle("del-profile-ext-folder", function() {
            var e = n()((function*(e, n) {
                var { deletedProfiles: a } = yield Promise.resolve().then(t.bind(t, 4293)), { deleteProfileExtFolder: o } = yield Promise.resolve().then(t.bind(t, 725)), i = (0, k.IT)();
                a.push(n), (0, r.rm)(i.PROFILES_DIR + n, { recursive: !0 }), o(n)
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), m.ipcMain.handle("del-profiles-ext-folder", function() {
            var e = n()((function*(e, n) {
                var { deletedProfiles: a } = yield Promise.resolve().then(t.bind(t, 4293)), { deleteProfileExtFolder: o } = yield Promise.resolve().then(t.bind(t, 725)), i = (0, k.IT)();
                a.push(...n), n.forEach((function(e) {
                    (0, r.rm)(i.PROFILES_DIR + e, { recursive: !0, force: !0 }).catch((function() { return null })), o(e).catch((function() { return null }))
                }))
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), m.ipcMain.handle("get-app-version", (function() { return "".concat(dn, " ").concat(mn) })), m.ipcMain.handle("get-orbita-browser-version", n()((function*() { var { BrowserReleasesManager: e } = yield Promise.resolve().then(t.bind(t, 8050)); return (yield(new e).getLocalOrbitaVersionByPath()) || "0.0.0" }))), m.ipcMain.handle("check-supported-orbita", function() { var e = n()((function*(e, n) { var { key: r = "orbitaMajorVersion", value: a } = n, { BrowserReleasesManager: o } = yield Promise.resolve().then(t.bind(t, 8050)), i = (new o).getOrbitaVersionToDownload({ key: r, value: a }), s = (new o).getMajorVersionByUA(a), { pickedMajorVer: l } = (new o).getOrbitaPathToStart(s); return { versionToDownload: i, pickedVersionIfSkipDownload: l } })); return function(n, r) { return e.apply(this, arguments) } }()), m.ipcMain.handle("check-orbita-compatible", function() { var e = n()((function*(e, n) { var { key: r = "orbitaMajorVersion", value: a } = n, { BrowserReleasesManager: o } = yield Promise.resolve().then(t.bind(t, 8050)); return (new o).checkOrbitaWinCompatible({ key: r, value: a }) })); return function(n, r) { return e.apply(this, arguments) } }()), m.ipcMain.handle("check-orbitas-available", function() { var e = n()((function*(e, n) { var { BrowserReleasesManager: r } = yield Promise.resolve().then(t.bind(t, 8050)); return (new r).checkOrbitasAvailable(n) })); return function(n, r) { return e.apply(this, arguments) } }()), m.ipcMain.handle("check-browser", function() { var e = n()((function*(e) { var { checkBrowser: n } = yield Promise.resolve().then(t.bind(t, 2311)); return n().then((function(n) { return e.sender.send("check-browser", n) })).catch((function() { return e.sender.send("check-browser", {}) })) })); return function(n) { return e.apply(this, arguments) } }()), m.ipcMain.handle("download-browser", function() {
            var e = n()((function*(e, n) {
                var { downloadBrowser: r } = yield Promise.resolve().then(t.bind(t, 2311));
                r(e, n).catch((function(e) {
                    (0, _.oj)({
                        message: e.message,
                        level: "fatal",
                        transactionName: "download-orbita-global",
                        tags: [
                            ["scenario", "download-orbita"]
                        ]
                    })
                }))
            }));
            return function(n, r) { return e.apply(this, arguments) }
        }()), m.ipcMain.handle("check-profiles-running", n()((function*() { var { BRAVE_PROCESSES: e } = yield Promise.resolve().then(t.bind(t, 4293)); return Object.keys(e).length > 0 }))), m.ipcMain.handle("close-all-profiles", n()((function*() {
            var { closeAllProfiles: e } = yield Promise.resolve().then(t.bind(t, 4293));
            e()
        }))), m.ipcMain.handle("get-client-id-from-metadata", n()((function*() {
            var e = (yield t.e(422).then(t.bind(t, 5422))).default,
                n = "win32" === process.platform && (yield sn.catch((function() { return null })));
            return n || e()
        }))), m.ipcMain.handle("update-google-client-id", function() { var e = n()((function*(e, n) { "win32" === process.platform && (yield on(n)) })); return function(n, r) { return e.apply(this, arguments) } }()), m.ipcMain.handle("get-system-fonts-from-file", n()((function*() { var { getSystemFontsFromFile: e } = yield t.e(694).then(t.bind(t, 9694)); return e().catch((function() { return [] })) }))), m.ipcMain.handle("upload-custom-extension", function() { var e = n()((function*(e, n) { var { ExtensionsManager: r } = yield Promise.resolve().then(t.bind(t, 4594)); return (new r).addCustomExtension(n) })); return function(n, r) { return e.apply(this, arguments) } }()), m.ipcMain.handle("get-dolphin-cookies", function() { var e = n()((function*(e, n) { return (yield re(n)).filter(v) })); return function(n, r) { return e.apply(this, arguments) } }()), m.ipcMain.handle("get-system-locale", (function() { return m.app.getLocale() || "en" })), m.ipcMain.handleOnce("check-auth-token", n()((function*() { var { CommonDataManager: e } = yield Promise.resolve().then(t.bind(t, 4040)); return (new e).accessToken }))), m.ipcMain.handle("remove-token-electron", n()((function*() {
            var { CommonDataManager: e } = yield Promise.resolve().then(t.bind(t, 4040));
            (new e).accessToken = ""
        }))), m.ipcMain.handle("get-app-config", n()((function*() { var { CommonDataManager: e } = yield Promise.resolve().then(t.bind(t, 4040)); return (new e).appConfig }))), m.ipcMain.handle("set-app-config", function() { var e = n()((function*(e, n) { yield(0, Pe.pI)(n) })); return function(n, r) { return e.apply(this, arguments) } }()), m.ipcMain.handle("too-many-requests", n()((function*() { return console.log("TOO MANY REQUESTS") }))), m.ipcMain.handle("redirected-to-2fa", n()((function*() { return console.log("REDIRECTED-TO-2FA") }))), m.ipcMain.handle("redirected-to-sign-up", n()((function*() { return console.log("REDIRECTED-TO-SIGN-UP") }))), m.ipcMain.handle("changed-account", n()((function*() { return console.log("CHANGED ACCOUNT") }))), m.app.on("open-url", function() { var e = n()((function*(e, n) { yn ? (yn.isMinimized() && yn.restore(), yn.focus()) : _n = n, yield $e(yn, n) })); return function(n, r) { return e.apply(this, arguments) } }()), m.app.on("before-quit", function() {
            var e = n()((function*(e) {
                var n, r = [];
                yn && (r.push((0, Pe.$c)(yn, bn, wn).catch((function() {}))), r.push(yn.webContents.session.clearCache().catch((function() {})))), vn && r.push(an().catch((function() {}))), yield Promise.all(r);
                var { BRAVE_PROCESSES: a, closeAllProfiles: o } = yield Promise.resolve().then(t.bind(t, 4293)), i = a || {};
                if (!((null === (n = Object.keys(i)) || void 0 === n ? void 0 : n.length) || 0)) return jn();
                try {
                    var { closeAppTitle: s, closeAppMessage: l, closeAppBtnClose: c, closeAppBtnCancel: u } = bn;
                    if (0 === m.dialog.showMessageBoxSync(yn, { type: "question", buttons: [u, c], title: s, message: l, noLink: !0 })) return console.log("Preventing close application"), e.preventDefault(), null;
                    yield o()
                } catch (e) {
                    var d = e instanceof Error ? e.message : e;
                    console.log(d)
                }
                return jn()
            }));
            return function(n) { return e.apply(this, arguments) }
        }()), m.app.on("activate", (function() { var e; return null === (e = yn) || void 0 === e ? void 0 : e.show() })), m.app.on("window-all-closed", m.app.quit)
    })();
    var o = exports;
    for (var i in a) o[i] = a[i];
    a.__esModule && Object.defineProperty(o, "__esModule", { value: !0 })
})();
//# sourceMappingURL=main.js.map