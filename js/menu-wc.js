'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">vnas2-workspace documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppCustomLayoutsModule.html" data-type="entity-link">AppCustomLayoutsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppCustomLayoutsModule-003f5ba8d8fcaf959ce0c28d666978f7"' : 'data-target="#xs-components-links-module-AppCustomLayoutsModule-003f5ba8d8fcaf959ce0c28d666978f7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppCustomLayoutsModule-003f5ba8d8fcaf959ce0c28d666978f7"' :
                                            'id="xs-components-links-module-AppCustomLayoutsModule-003f5ba8d8fcaf959ce0c28d666978f7"' }>
                                            <li class="link">
                                                <a href="components/AppCustomLayoutsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppCustomLayoutsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppDialogModule.html" data-type="entity-link">AppDialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppDialogModule-bb33e967918c29bd3ce0eac412136b1b"' : 'data-target="#xs-components-links-module-AppDialogModule-bb33e967918c29bd3ce0eac412136b1b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppDialogModule-bb33e967918c29bd3ce0eac412136b1b"' :
                                            'id="xs-components-links-module-AppDialogModule-bb33e967918c29bd3ce0eac412136b1b"' }>
                                            <li class="link">
                                                <a href="components/AppDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppHeadersModule.html" data-type="entity-link">AppHeadersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppHeadersModule-32e2097345136936f2536a2bfd5a403d"' : 'data-target="#xs-components-links-module-AppHeadersModule-32e2097345136936f2536a2bfd5a403d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppHeadersModule-32e2097345136936f2536a2bfd5a403d"' :
                                            'id="xs-components-links-module-AppHeadersModule-32e2097345136936f2536a2bfd5a403d"' }>
                                            <li class="link">
                                                <a href="components/AppHeadersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppHeadersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppLoaderModule.html" data-type="entity-link">AppLoaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppLoaderModule-5b3e8095868f84b12b4d679b0a62c8d7"' : 'data-target="#xs-components-links-module-AppLoaderModule-5b3e8095868f84b12b4d679b0a62c8d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppLoaderModule-5b3e8095868f84b12b4d679b0a62c8d7"' :
                                            'id="xs-components-links-module-AppLoaderModule-5b3e8095868f84b12b4d679b0a62c8d7"' }>
                                            <li class="link">
                                                <a href="components/AppContentLoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppContentLoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppSpinnerLoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppSpinnerLoaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a7379b7635d6466de3eef7ce684be5dd"' : 'data-target="#xs-components-links-module-AppModule-a7379b7635d6466de3eef7ce684be5dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a7379b7635d6466de3eef7ce684be5dd"' :
                                            'id="xs-components-links-module-AppModule-a7379b7635d6466de3eef7ce684be5dd"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-dcb9b51bbfb720da10cc294377ad7409-1"' : 'data-target="#xs-components-links-module-AppModule-dcb9b51bbfb720da10cc294377ad7409-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-dcb9b51bbfb720da10cc294377ad7409-1"' :
                                            'id="xs-components-links-module-AppModule-dcb9b51bbfb720da10cc294377ad7409-1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-1.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppTwoColumnsLayoutsModule.html" data-type="entity-link">AppTwoColumnsLayoutsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppTwoColumnsLayoutsModule-2c511a2ec2b587cf7695a9b8a2835c05"' : 'data-target="#xs-components-links-module-AppTwoColumnsLayoutsModule-2c511a2ec2b587cf7695a9b8a2835c05"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppTwoColumnsLayoutsModule-2c511a2ec2b587cf7695a9b8a2835c05"' :
                                            'id="xs-components-links-module-AppTwoColumnsLayoutsModule-2c511a2ec2b587cf7695a9b8a2835c05"' }>
                                            <li class="link">
                                                <a href="components/AppTwoColumnsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppTwoColumnsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link">AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthenticationModule-3cfd55725ef5b51286958ee76d3b7d4f"' : 'data-target="#xs-components-links-module-AuthenticationModule-3cfd55725ef5b51286958ee76d3b7d4f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-3cfd55725ef5b51286958ee76d3b7d4f"' :
                                            'id="xs-components-links-module-AuthenticationModule-3cfd55725ef5b51286958ee76d3b7d4f"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationRoutingModule.html" data-type="entity-link">AuthenticationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-f9be984809fd7c1344c61dde1097de98"' : 'data-target="#xs-components-links-module-DashboardModule-f9be984809fd7c1344c61dde1097de98"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-f9be984809fd7c1344c61dde1097de98"' :
                                            'id="xs-components-links-module-DashboardModule-f9be984809fd7c1344c61dde1097de98"' }>
                                            <li class="link">
                                                <a href="components/DashBoardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashBoardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link">DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutsModule.html" data-type="entity-link">LayoutsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutsModule-291f5d2c2aeb0395e6cfa0abf68a9c98"' : 'data-target="#xs-components-links-module-LayoutsModule-291f5d2c2aeb0395e6cfa0abf68a9c98"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutsModule-291f5d2c2aeb0395e6cfa0abf68a9c98"' :
                                            'id="xs-components-links-module-LayoutsModule-291f5d2c2aeb0395e6cfa0abf68a9c98"' }>
                                            <li class="link">
                                                <a href="components/LayoutsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutsRoutingModule.html" data-type="entity-link">LayoutsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link">LoggerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoggerModule-7d1ebdef40a4df2ed3755dbdfd526477"' : 'data-target="#xs-components-links-module-LoggerModule-7d1ebdef40a4df2ed3755dbdfd526477"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoggerModule-7d1ebdef40a4df2ed3755dbdfd526477"' :
                                            'id="xs-components-links-module-LoggerModule-7d1ebdef40a4df2ed3755dbdfd526477"' }>
                                            <li class="link">
                                                <a href="components/LogMonitorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogMonitorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationModule.html" data-type="entity-link">NotificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotificationModule-83e6744c9d32a935ffcb4d19b554a21c"' : 'data-target="#xs-components-links-module-NotificationModule-83e6744c9d32a935ffcb4d19b554a21c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotificationModule-83e6744c9d32a935ffcb4d19b554a21c"' :
                                            'id="xs-components-links-module-NotificationModule-83e6744c9d32a935ffcb4d19b554a21c"' }>
                                            <li class="link">
                                                <a href="components/SnackBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SnackBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NotificationModule-83e6744c9d32a935ffcb4d19b554a21c"' : 'data-target="#xs-injectables-links-module-NotificationModule-83e6744c9d32a935ffcb4d19b554a21c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationModule-83e6744c9d32a935ffcb4d19b554a21c"' :
                                        'id="xs-injectables-links-module-NotificationModule-83e6744c9d32a935ffcb4d19b554a21c"' }>
                                        <li class="link">
                                            <a href="injectables/SnackBarService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SnackBarService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Vnas2ApiModule.html" data-type="entity-link">Vnas2ApiModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-Vnas2ApiModule-3f7311eebd6a6340365181aee6dfeea7"' : 'data-target="#xs-injectables-links-module-Vnas2ApiModule-3f7311eebd6a6340365181aee6dfeea7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Vnas2ApiModule-3f7311eebd6a6340365181aee6dfeea7"' :
                                        'id="xs-injectables-links-module-Vnas2ApiModule-3f7311eebd6a6340365181aee6dfeea7"' }>
                                        <li class="link">
                                            <a href="injectables/ApiDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ApiDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Vnas2CoreModule.html" data-type="entity-link">Vnas2CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-Vnas2CoreModule-0887c84033e8f7251163649b3424d55b"' : 'data-target="#xs-injectables-links-module-Vnas2CoreModule-0887c84033e8f7251163649b3424d55b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Vnas2CoreModule-0887c84033e8f7251163649b3424d55b"' :
                                        'id="xs-injectables-links-module-Vnas2CoreModule-0887c84033e8f7251163649b3424d55b"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CredentialsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CredentialsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoadingService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoadingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Vnas2SettingsModule.html" data-type="entity-link">Vnas2SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Vnas2SettingsModule-93858827db6d334d4d8c9a0111f09402"' : 'data-target="#xs-components-links-module-Vnas2SettingsModule-93858827db6d334d4d8c9a0111f09402"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Vnas2SettingsModule-93858827db6d334d4d8c9a0111f09402"' :
                                            'id="xs-components-links-module-Vnas2SettingsModule-93858827db6d334d4d8c9a0111f09402"' }>
                                            <li class="link">
                                                <a href="components/AppSettingsConfirmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppSettingsConfirmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Vnas2SettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Vnas2SettingsDomainConfirmDeleteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2SettingsDomainConfirmDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Vnas2SettingsDomainFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2SettingsDomainFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Vnas2SettingsFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2SettingsFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Vnas2SettingsLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2SettingsLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Vnas2SettingsListItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2SettingsListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Vnas2SettingsListSocialObjectsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2SettingsListSocialObjectsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Vnas2SettingsMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2SettingsMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Vnas2SettingsNewsBasketComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2SettingsNewsBasketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Vnas2SettingsNewsDomainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2SettingsNewsDomainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Vnas2SettingsSocialObjectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2SettingsSocialObjectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Vnas2SettingsSocialObjectFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2SettingsSocialObjectFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Vnas2SettingsTableTreeableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2SettingsTableTreeableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-Vnas2SettingsModule-93858827db6d334d4d8c9a0111f09402"' : 'data-target="#xs-injectables-links-module-Vnas2SettingsModule-93858827db6d334d4d8c9a0111f09402"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Vnas2SettingsModule-93858827db6d334d4d8c9a0111f09402"' :
                                        'id="xs-injectables-links-module-Vnas2SettingsModule-93858827db6d334d4d8c9a0111f09402"' }>
                                        <li class="link">
                                            <a href="injectables/Vnas2SettingsSandboxService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>Vnas2SettingsSandboxService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Vnas2SettingsRoutingModule.html" data-type="entity-link">Vnas2SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Vnas2UiChartModule.html" data-type="entity-link">Vnas2UiChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Vnas2UiChartModule-288df86b8c831b42a4e34502a76d0215"' : 'data-target="#xs-components-links-module-Vnas2UiChartModule-288df86b8c831b42a4e34502a76d0215"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Vnas2UiChartModule-288df86b8c831b42a4e34502a76d0215"' :
                                            'id="xs-components-links-module-Vnas2UiChartModule-288df86b8c831b42a4e34502a76d0215"' }>
                                            <li class="link">
                                                <a href="components/Vnas2UiChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Vnas2UiChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Vnas2UiCommonsModule.html" data-type="entity-link">Vnas2UiCommonsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Vnas2UiCommonsModule-982d25feaab53d9201c03440fadb1921"' : 'data-target="#xs-components-links-module-Vnas2UiCommonsModule-982d25feaab53d9201c03440fadb1921"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Vnas2UiCommonsModule-982d25feaab53d9201c03440fadb1921"' :
                                            'id="xs-components-links-module-Vnas2UiCommonsModule-982d25feaab53d9201c03440fadb1921"' }>
                                            <li class="link">
                                                <a href="components/CategoryOrganizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoryOrganizationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DailyNewsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DailyNewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormSearchNewsAdvancedComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormSearchNewsAdvancedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HighLightActionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HighLightActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListObjectsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListObjectsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsBasketComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsBasketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsSummaryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsWithDomainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsWithDomainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagingCommonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagingCommonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TreeCategoryVerticalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TreeCategoryVerticalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-Vnas2UiCommonsModule-982d25feaab53d9201c03440fadb1921"' : 'data-target="#xs-directives-links-module-Vnas2UiCommonsModule-982d25feaab53d9201c03440fadb1921"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-Vnas2UiCommonsModule-982d25feaab53d9201c03440fadb1921"' :
                                        'id="xs-directives-links-module-Vnas2UiCommonsModule-982d25feaab53d9201c03440fadb1921"' }>
                                        <li class="link">
                                            <a href="directives/DefaultImageDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DefaultImageDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/RenderDebugDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">RenderDebugDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-Vnas2UiCommonsModule-982d25feaab53d9201c03440fadb1921"' : 'data-target="#xs-pipes-links-module-Vnas2UiCommonsModule-982d25feaab53d9201c03440fadb1921"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-Vnas2UiCommonsModule-982d25feaab53d9201c03440fadb1921"' :
                                            'id="xs-pipes-links-module-Vnas2UiCommonsModule-982d25feaab53d9201c03440fadb1921"' }>
                                            <li class="link">
                                                <a href="pipes/CountDatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CountDatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SortByPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SortByPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppDateAdapter.html" data-type="entity-link">AppDateAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage-1.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseComponent.html" data-type="entity-link">BaseComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigEnvironment.html" data-type="entity-link">ConfigEnvironment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Logger.html" data-type="entity-link">Logger</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoggerConfig.html" data-type="entity-link">LoggerConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewsSearch.html" data-type="entity-link">NewsSearch</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserContext.html" data-type="entity-link">UserContext</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiDataService.html" data-type="entity-link">ApiDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppDialogService.html" data-type="entity-link">AppDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationApiService.html" data-type="entity-link">AuthenticationApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link">AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CredentialsService.html" data-type="entity-link">CredentialsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EnvironmentService.html" data-type="entity-link">EnvironmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IAppDialogService.html" data-type="entity-link">IAppDialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link">LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerService.html" data-type="entity-link">LoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MonitorObjectsService.html" data-type="entity-link">MonitorObjectsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewsBasketService.html" data-type="entity-link">NewsBasketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewsDomainApiService.html" data-type="entity-link">NewsDomainApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NewsService.html" data-type="entity-link">NewsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SnackBarService.html" data-type="entity-link">SnackBarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SocialObjectService.html" data-type="entity-link">SocialObjectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Vnas2SettingsSandboxService.html" data-type="entity-link">Vnas2SettingsSandboxService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Vnas2UiChartService.html" data-type="entity-link">Vnas2UiChartService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ApiPrefixInterceptor.html" data-type="entity-link">ApiPrefixInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/ErrorHandlerInterceptor.html" data-type="entity-link">ErrorHandlerInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/LoaderInterceptor.html" data-type="entity-link">LoaderInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link">TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthenticationGuard.html" data-type="entity-link">AuthenticationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Actions.html" data-type="entity-link">Actions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppGlobalNavigation.html" data-type="entity-link">AppGlobalNavigation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryOrganization.html" data-type="entity-link">CategoryOrganization</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Credentials.html" data-type="entity-link">Credentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DailyNew.html" data-type="entity-link">DailyNew</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatSnackData.html" data-type="entity-link">MatSnackData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatSnackType.html" data-type="entity-link">MatSnackType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MonitorObject.html" data-type="entity-link">MonitorObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MonitorObjectDTO.html" data-type="entity-link">MonitorObjectDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MonitorObjectType.html" data-type="entity-link">MonitorObjectType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewBasket.html" data-type="entity-link">NewBasket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewsDomain.html" data-type="entity-link">NewsDomain</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewsDomainDTO.html" data-type="entity-link">NewsDomainDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewsDomainModel.html" data-type="entity-link">NewsDomainModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewWithDomain.html" data-type="entity-link">NewWithDomain</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ObjectPerson.html" data-type="entity-link">ObjectPerson</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PagesModel.html" data-type="entity-link">PagesModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseModel.html" data-type="entity-link">ResponseModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseModelWrapper.html" data-type="entity-link">ResponseModelWrapper</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectNodeTree.html" data-type="entity-link">SelectNodeTree</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SocialObject.html" data-type="entity-link">SocialObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SocialObjectDTO.html" data-type="entity-link">SocialObjectDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeAble.html" data-type="entity-link">TreeAble</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeFlatNode.html" data-type="entity-link">TreeFlatNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WebsiteModel.html" data-type="entity-link">WebsiteModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});