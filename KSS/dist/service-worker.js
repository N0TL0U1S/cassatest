if (!self.define) {
    let s, e = {};
    const o = (o, n) => (o = new URL(o + ".js", n).href, e[o] || new Promise((e => {
      if ("document" in self) {
        const s = document.createElement("script");
        s.src = o, s.onload = e, document.head.appendChild(s)
      } else s = o, importScripts(o), e()
    })).then((() => {
      let s = e[o];
      if (!s) throw new Error(`Module ${o} didn’t register its module`);
      return s
    })));
    self.define = (n, a) => {
      const l = s || ("document" in self ? document.currentScript.src : "") || location.href;
      if (e[l]) return;
      let i = {};
      const f = s => o(s, l),
        t = {
          module: {
            uri: l
          },
          exports: i,
          require: f
        };
      e[l] = Promise.all(n.map((s => t[s] || f(s)))).then((s => (a(...s), i)))
    }
  }
  define(["./workbox-460519b3"], (function(s) {
    "use strict";
    self.skipWaiting(), s.clientsClaim(), s.precacheAndRoute([{
      url: "245.bundle.868a64a6d16d68e33a62.js",
      revision: null
    }, {
      url: "245.bundle.868a64a6d16d68e33a62.js.LICENSE.txt",
      revision: "a4186658d6f60ad1e965921a96caaef2"
    }, {
      url: "342.bundle.170159b969d0077ff3ca.js",
      revision: null
    }, {
      url: "393.bundle.d2958d4ccd1479b93fbd.js",
      revision: null
    }, {
      url: "41.bundle.9a26d14e42f2e48d3317.js",
      revision: null
    }, {
      url: "470.bundle.4843a7ab787e4403e57c.js",
      revision: null
    }, {
      url: "484.bundle.468f2b910cfb51d7ade7.js",
      revision: null
    }, {
      url: "484.bundle.468f2b910cfb51d7ade7.js.LICENSE.txt",
      revision: "af9b5091c50b7ff1d1cf64212675adf3"
    }, {
      url: "534.bundle.1ecea836d8ca994461d7.js",
      revision: null
    }, {
      url: "748.bundle.96e1459a1c7ed9ea62fb.js",
      revision: null
    }, {
      url: "748.bundle.96e1459a1c7ed9ea62fb.js.LICENSE.txt",
      revision: "11ba6bbe7acfcc6f0660e132a4496982"
    }, {
      url: "806.bundle.ae6960a5811d55f09505.js",
      revision: null
    }, {
      url: "846.bundle.bf88ca0a089b12ebb328.js",
      revision: null
    }, {
      url: "846.bundle.bf88ca0a089b12ebb328.js.LICENSE.txt",
      revision: "d212cde176a95bca9522e0a366a4f50d"
    }, {
      url: "900.bundle.aaa5a883155a4d8e70f8.js",
      revision: null
    }, {
      url: "900.bundle.aaa5a883155a4d8e70f8.js.LICENSE.txt",
      revision: "817ad4647b87686eef3570d285495f05"
    }, {
      url: "93.bundle.1cda811dbc20bd4a6e9c.js",
      revision: null
    }, {
      url: "gamepool.417e83b1676a8662af2f.css",
      revision: null
    }, {
      url: "gamepool.bundle.80533c2794edc7718db5.js",
      revision: null
    }, {
      url: "gamepool.bundle.80533c2794edc7718db5.js.LICENSE.txt",
      revision: "25aacd4a50f9e9b2e2e18485f84ab852"
    }, {
      url: "games/common/assets/coinfonts/a/a_0120daf2c7e766ee7341a.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/a/a_101681a8d735a07f74a91.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/a/a_29f1c8282885809289507.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/a/a_3cc0a85256d9d95f90c02.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/a/a_4926036337803e8f153b4.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/a/a_5bf0b44fcaaadb5130774.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/a/a_6d127e06c087f9b47e853.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/a/a_7e53dad9ec657c619fc75.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/a/a_8bf27f0999ee92acd7c64.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/a/a_99c3baae742fa2f6d8842.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/a/a_komma5971448059be7cfe8bc3.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/a/a_punkt9f95eadae61ae13e7447.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/b/b_09e8ca51312a4e08a5192.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/b/b_1ae1f41f6b6f758598ee5.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/b/b_2da41592c85481db0edc1.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/b/b_31fd8895d891805b76e44.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/b/b_4bab306408e57c01a1ce3.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/b/b_520de8e402e7eadb34e05.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/b/b_6e182a71c32f7846ae91a.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/b/b_7e2ac0620f9958f0e5dc0.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/b/b_802f3e8439f88399300ad.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/b/b_9db1d7bf128a0b4c674d5.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/b/b_kommad21a67b9fd181d5db76b.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/b/b_punkt72050c7c81d2d33864ac.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/c/c_06fc384f68e5eb2fe7aae.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/c/c_16fb583a644bb4196426d.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/c/c_20df4e4ca477d538d1db3.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/c/c_36e2fe6baf4316039c7c9.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/c/c_42670aa0090b3a12d7ae6.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/c/c_517cd7791ce50f3966ccc.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/c/c_6feff47f088ae7ce7345d.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/c/c_72aefc4a0269e8c0bde31.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/c/c_8f737dcff192fb3fcb907.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/c/c_988114cbcd1e472241009.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/c/c_kommafa07b82398e2ffee5a23.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/c/c_punkt2fc78124fa50ac641e60.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/d/d_038f1c43d0b200bee6c63.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/d/d_1cb73b70924e0b69e03a5.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/d/d_2fed0f098781ced9790ab.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/d/d_3f944208753a4cf4b3aee.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/d/d_4b8c45898b786c3dbfddb.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/d/d_54be1eac9f5dfd87abbc8.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/d/d_6f835f40b8b90f2f1a1c2.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/d/d_7cf9adfac6979d27d550f.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/d/d_8005059d55bf510e6dc80.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/d/d_946d1209aea5a6c6f254e.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/d/d_komma1f0708018afd73aa749e.svg",
      revision: null
    }, {
      url: "games/common/assets/coinfonts/d/d_punkt74ba815274fad0b9be62.svg",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/bold-italic.de4f26e64fd1ebb5effe..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/bold-italic.ec89be876209e17625ea..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/bold.8e82503b66e4cbe106d7..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/bold.d3f88f892a07f8c9fbad..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/light-italic.8861724e40605d8a7dec..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/light-italic.91568ed87df4754ac7a0..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/light.44fb110c1dbd4a2fcac3..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/light.eac04c28dce293280272..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/medium-italic.3c53fb05ff28bd2e4e11..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/medium-italic.e125cddf1268b0748e97..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/medium.7d47f55888261de2b575..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/medium.9af96d7937fca45bf6d1..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/regular-italic.19d8bf50f1956696ad54..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/regular-italic.7e77b53a3a53b4e21c0e..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/regular.0f175fec54220412b139..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-lt-pro/regular.69f3ccae80def551a6f8..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/bold-italic.606654fa5e13c4d3d795..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/bold-italic.b5b2c5b76cc808a40201..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/bold.2bda3d457eb6679c5758..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/bold.b242da83005eac181de5..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/light-italic.83d0b0096031ab68840b..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/light-italic.ee8e3d0fbf5e678cc7b5..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/light.32375e125d8072c427f8..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/light.a4129f7e8420d1cb9e5a..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/medium-italic.635f7290bfda6ad62eb5..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/medium-italic.f76a05624c54d2f71247..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/medium.449a78f02f52f7b0a6dd..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/medium.8311437af2f896e221bc..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/regular-italic.978d039b2fa61a8591a7..woff2",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/regular-italic.a6108a0ec15d70ebf6a8..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/regular.03b24aa03603a29aad8f..woff",
      revision: null
    }, {
      url: "games/common/assets/fonts/din-w10/regular.b661ba2707025c3d4269..woff2",
      revision: null
    }, {
      url: "games/common/assets/loadingscreen/ds_logo_login4fbc4a0b0b6b7de4a921.png",
      revision: null
    }, {
      url: "games/common/assets/loadingscreen/games_img6598856eec74261232ab.png",
      revision: null
    }, {
      url: "games/common/assets/login/butt_login_act23932c25e077827ba5cb.svg",
      revision: null
    }, {
      url: "games/common/assets/login/butt_login_hov46d34fe42130ad8ff908.svg",
      revision: null
    }, {
      url: "games/common/assets/login/butt_logindba0cc4e6bef485cefc7.svg",
      revision: null
    }, {
      url: "games/common/assets/login/butt_rot_x6e2e9e04f807592414c8.svg",
      revision: null
    }, {
      url: "games/common/assets/login/exitd8e4dbba7db093a17253.svg",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Bold Italic.3d16c834dfc732298e62..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Bold Italic.587900478db04571fd33..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Bold Italic.e36831548e3d3e26b6bd..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Bold.178abac64d7ec90d1a3a..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Bold.7e71b349f5bde93143b7..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Bold.b361ed02df82f4db2973..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Heavy Italic.43df405fc28f2ae66eef..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Heavy Italic.a2d62aa4d830d142e279..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Heavy Italic.d4aaf6da7129706cc27e..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Heavy.1243244dffea2d7e55da..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Heavy.47cd50f4f5b2ca5803b4..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Heavy.945eae5f2cfe95c55880..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Light Italic.65f9ea7e36b6c201701f..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Light Italic.735fbd6c40d96aeb66a2..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Light Italic.dbb7fabd2a493c0a4900..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Light.8b7283193f7781689d30..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Light.9a9952f428e3e3817734..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Light.dc7f4669224f40710634..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Medium Italic.26bf45bfcaf193c64e45..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Medium Italic.68e83b70623ba41573e2..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR Medium Italic.f87c07b86f68e2d3aa5a..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR.36930c7b0e963a8bf127..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR.49a0f659dd5a0c718952..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/cyril/DIN Next CYR.d2736d2a4aad6144cd15..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-Bold.6f6cb0de7fe4c6f5e7bf..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-Bold.899038b138d6dee70b2a..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-Bold.de51b8ab31646835bbd8..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-BoldItalic.182120f64025709a86ed..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-BoldItalic.beb507cf9ef398fb9eb0..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-Heavy.db113ca4a4597da19e9d..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-Heavy.e0a3a6fdca436bd0f781..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-Heavy.f557bc8138815c76e9c7..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-HeavyItalic.49af18dcfcde7323743e..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-HeavyItalic.9d64a9f273bce2670afd..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-HeavyItalic.e5daa5e2df6ce21361ca..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-Light.4e5b66b9939024bf514d..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-Light.9761c34b4bb21a7a6eb4..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-Light.f4d1d1c7592aa0c94bdc..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-LightItalic.614e6a593827f43a3b23..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-LightItalic.8cd1e7003afc25ac9585..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-LightItalic.d97b29ada01551cc4dde..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-MediumItalic.1cd28be8686c04e47332..woff2",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-MediumItalic.442a88a86100b6f3576a..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-MediumItalic.7931a078b5162c14d74c..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-Regular.003e4287f0b24b5e7ca9..woff",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-Regular.3b2d0db23ef9882c5db2..ttf",
      revision: null
    }, {
      url: "games/pos/assets/fonts/standard/DINNextLTPro-Regular.59b2129da7ffb5f1b1a0..woff2",
      revision: null
    }, {
      url: "games/pos/assets/rtt/BernardMT-Condensed.7cd54b45cef733f48f23..woff",
      revision: null
    }, {
      url: "games/pos/assets/rtt/BernardMT-Condensed.c37e7c5ab8b7aba36c72..woff2",
      revision: null
    }, {
      url: "games/pos/assets/rtt/CenturySchoolbook.7449fbf956a65a6d683c..woff",
      revision: null
    }, {
      url: "games/pos/assets/rtt/CenturySchoolbook.9f694dbc74e888a398b2..ttf",
      revision: null
    }, {
      url: "poseightgame.2f41a0ea5bda4348786b.css",
      revision: null
    }, {
      url: "poseightgame.bundle.21684a3c974c3647a173.js",
      revision: null
    }, {
      url: "posgame.03109b9841f40f810c79.css",
      revision: null
    }, {
      url: "posgame.bundle.1bc9414610cc157e8910.js",
      revision: null
    }, {
      url: "poshorsecgame.1e5943b93fe4f148c75b.css",
      revision: null
    }, {
      url: "poshorsecgame.bundle.13df61b84732dd47795a.js",
      revision: null
    }, {
      url: "poshorsegame.8de02ead72af2de12743.css",
      revision: null
    }, {
      url: "poshorsegame.bundle.5a9acd4b25f727d10901.js",
      revision: null
    }, {
      url: "poskartgame.26a123678d1777485eae.css",
      revision: null
    }, {
      url: "poskartgame.bundle.b5cfa6f3028e63d76bff.js",
      revision: null
    }, {
      url: "poskickboxgame.b5c0648181f8e9110b80.css",
      revision: null
    }, {
      url: "poskickboxgame.bundle.505f2331e2aff71393dd.js",
      revision: null
    }, {
      url: "posroulettegame-0df231fe.bundle.767a06070a5de5a20fd8.js",
      revision: null
    }, {
      url: "posroulettegame-ebddc939.b83ab0a3657c0731f94f.css",
      revision: null
    }, {
      url: "posroulettegame-ebddc939.bundle.f9822add60b1273fc342.js",
      revision: null
    }, {
      url: "possixgame.4a49cddd5365f581e777.css",
      revision: null
    }, {
      url: "possixgame.bundle.3b2029e48da6b119f907.js",
      revision: null
    }, {
      url: "possixthreegame.a3f189ecf68641ffeabb.css",
      revision: null
    }, {
      url: "possixthreegame.bundle.52448b83cf9780d5eec7.js",
      revision: null
    }, {
      url: "postrotgame.4304a77a65ed89a73988.css",
      revision: null
    }, {
      url: "postrotgame.bundle.241bbe0bedc9e31073c2.js",
      revision: null
    }], {})
  }));