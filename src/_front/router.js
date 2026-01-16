import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"643fbaff-9759-44e6-98f5-adc21f20def6","homePageId":"1b710915-7492-4dec-8ed4-6539bdd006d9","authPluginId":null,"baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":false,"isDefaultPath":false},{"lang":"fr","default":true}],"background":{},"workflows":[],"pages":[{"id":"6d80ba2e-74f2-4d70-8cf4-9614b9bc288a","linkId":"6d80ba2e-74f2-4d70-8cf4-9614b9bc288a","name":"About","folder":null,"paths":{"fr":"about","default":"about"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"c80d117c-baf8-4cd9-8788-03e3b7c95d5f","sectionTitle":"Menu-Desktop","linkId":"140c3475-8afb-4afd-a518-9c42f3a46e55"},{"uid":"6c43c115-afe9-44a6-a386-f0252cda2155","sectionTitle":"Section","linkId":"78adc835-43a4-4ded-9fe1-70630bef3c50"},{"uid":"54ce9083-05ce-454f-82cb-47186d5b3ad4","sectionTitle":"Section","linkId":"c81b2aaf-4b3e-4a71-91e8-0b77e571a388"},{"uid":"5ae34be0-f544-4417-83ba-239734d686e3","sectionTitle":"Footer","linkId":"df1045e1-e6bc-4ade-8918-3e5cc830066b"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f05562cc-ee76-4a2f-9913-6154b6770ca4","linkId":"f05562cc-ee76-4a2f-9913-6154b6770ca4","name":"Ecoparc","folder":null,"paths":{"fr":"ecoparc","default":"ecoparc"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"c80d117c-baf8-4cd9-8788-03e3b7c95d5f","sectionTitle":"Menu-Desktop","linkId":"140c3475-8afb-4afd-a518-9c42f3a46e55"},{"uid":"0b63d3fe-2825-4921-acfc-eaded08083cc","sectionTitle":"Section","linkId":"47d00fa4-9455-4b7c-9a40-9a8f7389434e"},{"uid":"5ae34be0-f544-4417-83ba-239734d686e3","sectionTitle":"Footer","linkId":"df1045e1-e6bc-4ade-8918-3e5cc830066b"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"dc6cb675-c988-4f98-a40c-a7e06d491494","linkId":"dc6cb675-c988-4f98-a40c-a7e06d491494","name":"Nevo","folder":null,"paths":{"fr":"nevo","default":"nevo"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"c80d117c-baf8-4cd9-8788-03e3b7c95d5f","sectionTitle":"Menu-Desktop","linkId":"140c3475-8afb-4afd-a518-9c42f3a46e55"},{"uid":"90593f86-5a5b-4b97-92a7-d9bb827c1fb4","sectionTitle":"Section","linkId":"4a6442ed-e047-42fa-b5d2-5ed9ceb64ec7"},{"uid":"5ae34be0-f544-4417-83ba-239734d686e3","sectionTitle":"Footer","linkId":"df1045e1-e6bc-4ade-8918-3e5cc830066b"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"04a61570-ce30-4b47-b50b-0e578f9f643f","linkId":"04a61570-ce30-4b47-b50b-0e578f9f643f","name":"register","folder":null,"paths":{"fr":"register","default":"register"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"c80d117c-baf8-4cd9-8788-03e3b7c95d5f","sectionTitle":"Menu-Desktop","linkId":"140c3475-8afb-4afd-a518-9c42f3a46e55"},{"uid":"11d2b157-0050-4d1d-8b3c-badd70a34cff","sectionTitle":"Section","linkId":"8872128d-7eb0-4fbc-b177-15fc5a6789cf"},{"uid":"5ae34be0-f544-4417-83ba-239734d686e3","sectionTitle":"Footer","linkId":"df1045e1-e6bc-4ade-8918-3e5cc830066b"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"1b710915-7492-4dec-8ed4-6539bdd006d9","linkId":"1b710915-7492-4dec-8ed4-6539bdd006d9","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"c80d117c-baf8-4cd9-8788-03e3b7c95d5f","sectionTitle":"Menu-Desktop","linkId":"140c3475-8afb-4afd-a518-9c42f3a46e55"},{"uid":"1eafd58f-794f-4399-8844-efc493856864","sectionTitle":"Section Header","linkId":"c795ac2f-4738-4a4e-b5b8-280f97613f4f"},{"uid":"9322e94e-9cdd-4097-a127-297104625937","sectionTitle":"Section Projets","linkId":"725aa433-d9fc-43c2-8e64-0a965f4c35f1"},{"uid":"5ae34be0-f544-4417-83ba-239734d686e3","sectionTitle":"Footer","linkId":"df1045e1-e6bc-4ade-8918-3e5cc830066b"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 5;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
