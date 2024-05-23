# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
my-financial-lg
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 0c
│  │  │  └─ 589eccd4d48e270e161a1ab91baee5e5f4b4bc
│  │  ├─ 38
│  │  │  └─ 8cad14a0218dcccac8ff49e0972c91916a46ad
│  │  ├─ 3e
│  │  │  └─ 212e1d4307a332e8511f530bc48a4ad5ed6f95
│  │  ├─ 40
│  │  │  └─ 8cd4629c72f75429061013457591df1b95cc0a
│  │  ├─ 54
│  │  │  └─ b39dd1d900e866bb91ee441d372a8924b9d87a
│  │  ├─ 55
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 5a
│  │  │  └─ 33944a9b41b59a9cf06ee4bb5586c77510f06b
│  │  ├─ 61
│  │  │  └─ 19ad9a8faaa5073a454f67b50fb98a25972fd2
│  │  ├─ 6c
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 73
│  │  │  └─ 8448e7add689d1eb0267fad928f287db6f23a4
│  │  ├─ 94
│  │  │  └─ c0b2fc152a086447a04f62793957235d2475be
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ b8
│  │  │  └─ b8473a3696b4f77deff889a84ab45629c42079
│  │  ├─ b9
│  │  │  └─ d355df2a5956b526c004531b7b0ffe412461e0
│  │  ├─ cf
│  │  │  └─ 11e43eff0fade0df05346f651e7f6dfc807cda
│  │  ├─ e7
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ ea
│  │  │  └─ 06e7e329d2d23077148f3747a1cb10238c715d
│  │  ├─ f7
│  │  │  └─ 68e33fc946e6074d6bd3ce5d454853adb3615e
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ Props-drilling
│     ├─ remotes
│     │  └─ origin
│     │     └─ Props-drilling
│     └─ tags
├─ .gitignore
├─ README.md
├─ index.html
├─ package.json
├─ public
│  └─ vite.svg
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  └─ Layout.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Expenses.jsx
│  │  └─ Home.jsx
│  └─ shard
│     └─ Router.jsx
├─ vite.config.js
└─ yarn.lock

```

```
my-financial-lg
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 06
│  │  │  └─ 163c952437a02428c2a2492bbdb9934e39d69d
│  │  ├─ 07
│  │  │  └─ 8ca39f9199255db21232e81970c9612999a54f
│  │  ├─ 08
│  │  │  └─ d4bcd01aae8b583ed4fe38469d34470dae930b
│  │  ├─ 09
│  │  │  └─ 7b9df9f034871769e7c18c7c2e04bb8b56f512
│  │  ├─ 0c
│  │  │  └─ 589eccd4d48e270e161a1ab91baee5e5f4b4bc
│  │  ├─ 15
│  │  │  └─ 12bb11ddcfc40f059a2f74fba26615df0bdb07
│  │  ├─ 1a
│  │  │  ├─ b23325be125054e3e31994aa5b5b0e0767daa3
│  │  │  └─ bc5dc1b98ac89c8bc48881f741230ded7dd454
│  │  ├─ 1f
│  │  │  └─ fbea562d76eec7790e362e0645288382cc8cf1
│  │  ├─ 21
│  │  │  └─ 766bd046312c4b603e50120d58297c92ccf6b9
│  │  ├─ 2a
│  │  │  └─ 9fa1ea83a49e7b8108b4f0f0b7a1a0e5f4af82
│  │  ├─ 32
│  │  │  └─ 4c6ca7699f26b964effacf8fc8cfd60fb890ed
│  │  ├─ 35
│  │  │  ├─ 107180266545fe2fc63e6badcac6c23a90a59f
│  │  │  └─ 5986c69c7fdbc5fa81bc7480bdc5db4f111f9b
│  │  ├─ 37
│  │  │  └─ 9bec192b491e4b3decc9d061e4ce9cdfa06129
│  │  ├─ 38
│  │  │  └─ 8cad14a0218dcccac8ff49e0972c91916a46ad
│  │  ├─ 3b
│  │  │  └─ 9991363cd3c1af530ad31a7a5e527d5827f641
│  │  ├─ 3c
│  │  │  └─ 615affa305c226f215b32450ea24495b86a5a9
│  │  ├─ 3d
│  │  │  └─ b7f4a8673df3f449a10b39c4dc8cd0fc3086db
│  │  ├─ 3e
│  │  │  └─ 212e1d4307a332e8511f530bc48a4ad5ed6f95
│  │  ├─ 40
│  │  │  └─ 8cd4629c72f75429061013457591df1b95cc0a
│  │  ├─ 45
│  │  │  └─ a05ecf85c7b4f0f39a41408ff098e738f5ada9
│  │  ├─ 48
│  │  │  └─ 6190b5cf3b6ccc19820705e105ad0c96479a79
│  │  ├─ 49
│  │  │  ├─ 07b0ae53b9abd0415d0ae06ac878cc25992356
│  │  │  └─ de719a68cd2b458d712d1dd89f7761e213995d
│  │  ├─ 4b
│  │  │  └─ 77a259055f56b3a689f8d30b0f605a6209f5d1
│  │  ├─ 54
│  │  │  └─ b39dd1d900e866bb91ee441d372a8924b9d87a
│  │  ├─ 55
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 5a
│  │  │  └─ 33944a9b41b59a9cf06ee4bb5586c77510f06b
│  │  ├─ 5c
│  │  │  └─ ae541e74a4455f979de9b9865c58d79a5a6bec
│  │  ├─ 5e
│  │  │  └─ 49251f5bfd4ec01d7e153caed13c00be7e36f7
│  │  ├─ 5f
│  │  │  └─ 4763fcf7cf8763d7754d306024f06c89d9aa6c
│  │  ├─ 61
│  │  │  ├─ 19ad9a8faaa5073a454f67b50fb98a25972fd2
│  │  │  └─ 3814007b8102d5489710b6f3a0ce38b7708f95
│  │  ├─ 64
│  │  │  └─ 5a23e56af1e3a723dedae615c05c8986f89ed1
│  │  ├─ 67
│  │  │  └─ 72b6e89d2d82005f0aac8192ee1e8c3915f54f
│  │  ├─ 69
│  │  │  └─ 019fdf908a3e5059aac0a7818d04019d65c513
│  │  ├─ 6c
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 71
│  │  │  └─ d30fa57e172449cf19ffe776f74239df317900
│  │  ├─ 73
│  │  │  └─ 8448e7add689d1eb0267fad928f287db6f23a4
│  │  ├─ 76
│  │  │  └─ e2e8e275192466d4decfaf74d3654a3b27ed43
│  │  ├─ 7b
│  │  │  └─ aca7e8cb5c921f0279802235014e79bfae44d8
│  │  ├─ 88
│  │  │  └─ 9a59ec57e5084dabb4d7edb9b130f256acf0c6
│  │  ├─ 92
│  │  │  └─ 02db4c921922668aae02e1767adb573ff20d81
│  │  ├─ 94
│  │  │  └─ c0b2fc152a086447a04f62793957235d2475be
│  │  ├─ 9b
│  │  │  └─ b9fcec4f36bbf6af5352b25e4e62e5bdf132ab
│  │  ├─ 9d
│  │  │  └─ db5951f6859088ca42e12da6b8c866a99e59e2
│  │  ├─ a5
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a8
│  │  │  └─ 6124eb545d189998e50b42e94e1c25ee919cb0
│  │  ├─ ab
│  │  │  └─ 70c377f4efa19c152497161061cd6b52ec0a73
│  │  ├─ af
│  │  │  ├─ 6b8ffa2daac921e137c006fca3f816f4154d45
│  │  │  └─ 7856d5321444b31a73cdc4da2f2ebc88216c16
│  │  ├─ b3
│  │  │  └─ 9d7a8ae33771faa7adc184dfa43a8f10d38827
│  │  ├─ b4
│  │  │  ├─ dd4ca20b1dd08b2c2b17bdbd3a74f05ba0afbf
│  │  │  └─ e7071caee86b89c95cff7265dd65ec3e679638
│  │  ├─ b5
│  │  │  └─ 795ddfc66bf66144ff3e2acc670c3b55ecfae0
│  │  ├─ b8
│  │  │  ├─ 070405f2e2423017affd845663f33f7e9ceb7c
│  │  │  └─ b8473a3696b4f77deff889a84ab45629c42079
│  │  ├─ b9
│  │  │  └─ d355df2a5956b526c004531b7b0ffe412461e0
│  │  ├─ bc
│  │  │  └─ 79ac19af4e0f715d3697b5850538b245cbe94e
│  │  ├─ bd
│  │  │  └─ 11175ebc2241a7c8737280c4555e955a0f71cc
│  │  ├─ c2
│  │  │  └─ 86b2e1bc62f011f9835be0e339213709a52178
│  │  ├─ c6
│  │  │  └─ 72f287b813f8374daf83cead92e99055c88d16
│  │  ├─ cc
│  │  │  └─ b817c04dbc4ead841515df288f54aff69c379a
│  │  ├─ cf
│  │  │  └─ 11e43eff0fade0df05346f651e7f6dfc807cda
│  │  ├─ d3
│  │  │  └─ 93292cbfc326e89302c68bb93674547d3a469e
│  │  ├─ d4
│  │  │  └─ 06b21b2e2e1847aa392efa5af00647c935222c
│  │  ├─ de
│  │  │  └─ 202883b6eeb2c193ec5cb210a9d4b9e14644aa
│  │  ├─ e0
│  │  │  └─ 201e5c090c41a28aa05ac1499e76a7f769085f
│  │  ├─ e3
│  │  │  └─ 7d961fdb4b2e6dd10c3608ed3f38db9b3e3387
│  │  ├─ e7
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ ea
│  │  │  └─ 06e7e329d2d23077148f3747a1cb10238c715d
│  │  ├─ ec
│  │  │  └─ cfe1b812e0df24971245d1c1499ac5ca69a611
│  │  ├─ f7
│  │  │  ├─ 4dcaccac63dcd75c0b6dac14fe671f85c31dd4
│  │  │  └─ 68e33fc946e6074d6bd3ce5d454853adb3615e
│  │  ├─ ff
│  │  │  └─ 8bbaecacbcf0e6ea52b1d030f9b77044188282
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ Props-drilling
│     ├─ remotes
│     │  └─ origin
│     │     └─ Props-drilling
│     └─ tags
├─ .gitignore
├─ README.md
├─ index.html
├─ package.json
├─ public
│  └─ vite.svg
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ ExpenseDetail.jsx
│  │  ├─ ExpenseForm.jsx
│  │  ├─ ExpenseRecord.jsx
│  │  ├─ ExpensesButton.jsx
│  │  ├─ ExpensesByMonth.jsx
│  │  └─ Layout.jsx
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Expenses.jsx
│  │  └─ Home.jsx
│  ├─ shard
│  │  └─ Router.jsx
│  └─ styles
│     ├─ GlobalStyles.jsx
│     └─ reset.css
├─ vite.config.js
└─ yarn.lock

```