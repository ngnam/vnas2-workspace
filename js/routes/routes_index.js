var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"projects/vnas2-app/src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./layouts/layouts.module#LayoutsModule","canActivate":["AuthenticationGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"projects/vnas2-app/src/app/layouts/layouts-routing.module.ts","module":"LayoutsRoutingModule","children":[{"path":"app","component":"LayoutsComponent","children":[{"path":"dashboard","loadChildren":"../dashboard/dashboard.module#DashboardModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/vnas2-app/src/app/dashboard/dashboard-routing.module.ts","module":"DashboardRoutingModule","children":[{"path":"","component":"DashBoardComponent"}],"kind":"module"}],"module":"DashboardModule"}]},{"path":"settings","loadChildren":"@vnas2-workspace/vnas2-settings#Vnas2SettingsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/vnas2-settings/src/lib/vnas2-settings-routing.module.ts","module":"Vnas2SettingsRoutingModule","children":[{"path":"","component":"Vnas2SettingsLayoutComponent","children":[{"path":"organization","component":"Vnas2SettingsComponent","data":{"title":"tổchức","type":"Organization"}},{"path":"person","component":"Vnas2SettingsComponent","data":{"title":"đốitượng","type":"Person"}},{"path":"country","component":"Vnas2SettingsComponent","data":{"title":"quốcgia","type":"Country"}},{"path":"domain","component":"Vnas2SettingsNewsDomainComponent","data":{"title":"danhmục","type":"NewsDomain"}},{"path":"news-basket","component":"Vnas2SettingsNewsBasketComponent","data":{"title":"giỏtin","type":"NewsBacket"}},{"path":"social-object","component":"Vnas2SettingsSocialObjectComponent","data":{"title":"đốitượngmạngxãhội","type":"SocialObject"}},{"path":"","redirectTo":"organization","pathMatch":"prefix"}]}],"kind":"module"}],"module":"Vnas2SettingsModule"}]}]},{"path":"","redirectTo":"/app/dashboard","pathMatch":"full"}],"kind":"module"}],"module":"LayoutsModule"}]},{"path":"auth","loadChildren":"@vnas2-workspace/vnas2-auth#AuthenticationModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/vnas2-auth/src/lib/authentication-routing.module.ts","module":"AuthenticationRoutingModule","children":[{"path":"","component":"LoginComponent"}],"kind":"module"}],"module":"AuthenticationModule"}]},{"path":"**","redirectTo":"/app/dashboard","pathMatch":"full"}],"kind":"module"}]}