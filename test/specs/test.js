var assert = require('assert');


autoLogin = () => {
        if (browser.isExisting('#currentuserID') === false) {
            browser.click('#pingLogin');
        };
};

    //case C2.2
describe('C2.1 deltaqa page', function() {
    it('should delta_logo.png displays on the landingScreen page ', function () {
        browser.url('/');
        var imgElem = $('.pingLoginDiv img');
        var imageName = imgElem.getAttribute('src');
        assert.equal(imageName, ('http://deltaqa.studio.disney.com/images/delta_logo.png'));
    });

    //case C2.2
    it('C2.2 should have a loginWithMyIdButton', function () {
        browser.url('/');
        assert.equal(browser.waitForVisible('#pingLogin'), true);
    });

    //case C2.3
    it('C2-3 should display string Need assistance? Contact support. ', function () {
        browser.url('/');
        var text = browser.getText('.pingLoginSupport');
        assert.equal(text, 'Need assistance? Contact support.')
    });

    //case C2.4
    it('C2.4 "support" is linked to deltasupport@studio.disney.com', function () {
        browser.url('/');
        var elem = $('.pingLoginSupport a');
        var hrefName = elem.getAttribute('href');
        assert.equal(hrefName, 'mailto:deltasupport@studio.disney.com');
    });

    //case C2.5
    it('C2.5 should display NOTICE OF CONFIDENTIALITY ', function () {
        browser.url('/');
        var text = browser.getText('.pingLoginConfidentiality').slice(0, 25);
        assert.equal(text, 'NOTICE OF CONFIDENTIALITY');
    });
});

    //case C3
describe('disneyEnterpriseAuthenticationScreen page', function() {
    it('C3 should display https://enterpriselogin.disney.com/ URL', function () {
        browser.url('/');
        browser.click('#pingLogin');
        var currentUrl = browser.getUrl();
        assert.strictEqual(currentUrl.slice(0, 35), 'https://enterpriselogin.disney.com/');
    });
});


    //case C4
describe('homeScreen page', function() {
    it('C4-1 should navMenuBar', function() {
        loginStatus();
        assert.strictEqual(browser.waitForVisible('#topmenu'), true);
    })

    it('C4-2 should navMenuPortalAssetPrepManufactureAdminButton', function() {
        assert.strictEqual(browser.waitForExist('.submenu'), true);
    })

    it('C4.3 should display navMenuLibraryButton', function() {
        browser.click('[href="home.php"]').waitForExist('.m_library');
        assert.strictEqual(browser.waitForExist('.m_library'), true);
    });

    it('C4.4 should display navMenuOrdersButton', function() {
        browser.click('[href="home.php"]').waitForExist('.m_orders');
        assert.strictEqual(browser.waitForExist('.m_orders'), true);
    });

    it('C4.5 should display navMenuReportsButton', function() {
        browser.click('[href="home.php"]').waitForExist('.m_reports');
        assert.strictEqual(browser.waitForExist('.m_reports'), true);
    });

    it('C4.6 should display navMenuServicesButton', function() {
        browser.click('[href="home.php"]').waitForExist('.m_services');
        assert.strictEqual(browser.waitForExist('.m_services'), true);
    });

    it('C4.7 should display navMenuAvailManagementButton', function() {
        browser.click('[href="home.php"]').waitForExist('[href="report.php?a=avail_management"]');
        assert.strictEqual(browser.waitForExist('[href="report.php?a=avail_management"]'), true);
    });

    it('C4.8 should display navMenuNotificationsButton', function() {
        browser.click('[href="home.php"]').waitForExist('.m_notifications');
        assert.strictEqual(browser.waitForExist('.m_notifications'), true);
    });

    it('C4.9 navPathUrl defaulted to "home"', function() {
        assert.strictEqual(browser.waitForExist('[href="home.php"]'), true);
    });

    it('C4.11 should display logOutUrl', function() {
        assert.strictEqual(browser.waitForExist('[onclick="logout();"]'), true);
    });

    it('C4.12 should display "Welcome to Our Intelligent Digital Library" welcome message', function() {
        assert.strictEqual(browser.getText('.dsop h1'), 'Welcome to Our Intelligent Digital Library');
    });

    it('C4.13 should display welcome message contains link to deltasupport@studio.disney.com', function() {
        var messageWithLink = browser.getText('.dsop');
        assert.strictEqual(messageWithLink.includes("deltasupport@studio.disney.com"), true);
    });
});

    //case C5
describe('navMenuPortalAssetPrepManufactureAdminDropDownMenu', function() {
    it(' C5 it should display navMenuPortalAssetPrepManufactureAdmin', function() {
        browser.moveToObject('.headEl');
        assert.strictEqual(browser.waitForExist('[data-category="portal"]'), true);
        assert.strictEqual(browser.waitForExist('[data-category="asset"]'), true);
        assert.strictEqual(browser.waitForExist('[data-category="manufacture"]'), true);
        assert.strictEqual(browser.waitForExist('[data-category="admin"]'), true);
    });
});

    //case C14
describe('navMenuBar displays Portal state', function() {
    it('C14.1 it should display navMenuBar', function() {
        assert.strictEqual(browser.waitForExist('#topmenu'), true);
  });

    it('C14.2 it should display navMenuPortalAssetPrepManufactureAdminButton', function() {
        assert.strictEqual(browser.waitForExist('.submenu'), true);
  });

    it('C14.3 it should display navMenuLibraryButton', function() {
        assert.strictEqual(browser.waitForExist('.m_library'), true);
  });

   it('C14.4 it should display navMenuOrdersButton', function() {
        assert.strictEqual(browser.waitForExist('.m_orders'), true);
  });

    it('C14.5 it should display navMenuReportsButton', function() {
        assert.strictEqual(browser.waitForExist('.m_reports'), true);
  });

    it('C14.6 it should display navMenuServicesButton', function() {
        assert.strictEqual(browser.waitForExist('.m_services'), true);
  });

    it('C14.7 it should display navMenuAvailManagementButton', function() {
        assert.strictEqual(browser.waitForExist('[href="report.php?a=avail_management"]'), true);
  });

    it('C14.8 it should display navMenuNotificationsButton', function() {
        assert.strictEqual(browser.waitForExist('.m_notifications'), true);
  });

    it('C14.9 it should display navMenuNewsfeedBlueBroadcastIconButton', function() {
        assert.strictEqual(browser.waitForExist('#newsfeed_icon_img'), true);
  });

    it('C14.10 it should display navMenuShippingRequestCartGreenTruckIconButton', function() {
        assert.strictEqual(browser.waitForExist('#openSRorderImage'), true);
  });

    it('C14.11 it should display navMenuComponentAssetRequestRedPuzzlePieceIconButton', function() {
        assert.strictEqual(browser.waitForExist('#openCARorderImage'), true);
  });
});

    //case C6
describe('navMenuOrdersDropDownMenu', function() {
    it('C6 it should display the urls in the dropdowm menu', function() {
        browser.moveToObject('.m_orders');
        assert.strictEqual(browser.getHTML('#topmenu .portal .submenu [href="report.php?a=browse_sr"]').includes("Shipping Request"), true);
        assert.strictEqual(browser.getHTML('#topmenu .portal .submenu [href="report.php?a=browse_car"]').includes("Asset Request"), true);
        assert.strictEqual(browser.getHTML('#topmenu .portal .submenu [href="report.php?a=browse_art"]').includes("Art Orders"), true);
        assert.strictEqual(browser.getHTML('#topmenu .portal .submenu [href="report.php?a=browse_prores"]').includes("ProRes Orders"), true);
        assert.strictEqual(browser.getHTML('#topmenu .portal .submenu [href="report.php?a=browse_do"]').includes("Distribution Order Jobs"), true);
        assert.strictEqual(browser.getHTML('#topmenu .portal .submenu [href="report.php?a=delivery_package"]').includes("Distribution Orders"), true);
        assert.strictEqual(browser.getHTML('#topmenu .portal .submenu [href="report.php?a=search_jobs"]').includes("Search Jobs"), true);
  });
});

    //case C7
describe('navMenuServicesDropDownMenu', function() {
    it('C7 it should display the urls in the dropdowm menu', function() {
        browser.moveToObject('.m_services');
        assert.strictEqual(browser.getHTML('#topmenu .portal .submenu [href="report.php?a=key_art_factory_new"]').includes("Art Factory"), true);
        assert.strictEqual(browser.getHTML('#topmenu .portal .submenu [href="assetMngt.php?a=createFactoryOrder&id="]').includes("ProRes Factory"), true);
        assert.strictEqual(browser.getHTML('#topmenu .portal .submenu [href="assetMngt.php?a=distributionOrder"]').includes("Distribution Order"), true);
        assert.strictEqual(browser.getHTML('#topmenu .portal .submenu [href="assetMngt.php?a=replicationDistributionOrder"]').includes("Replication DO"), true);
        assert.strictEqual(browser.getHTML('#topmenu .portal .submenu [href="report.php?a=cumulus_report"]').includes("Artwork QC"), true);
  });
});

    //case C8
describe('homeScreen', function() {
    it('C8 it should display navMenuBar switched to initial ‘Portal’ state.', function() {
        browser.moveToObject('.headEl');
        browser.click('[href="report.php?a=portal_welcome"]');
        browser.click('[href="home.php"]');
        assert.strictEqual(browser.waitForVisible('#topmenuTextLabel'), true);
        assert.strictEqual(browser.getText('#topmenuTextLabel'), 'PORTAL');

  });
});


    //case C9
describe('navMenuNotificationsDropDownMenu', function() {
    it('C9 it should display navMenuNotificationsDropDownMenu', function() {
        browser.moveToObject('.headEl');
        browser.click('[href="report.php?a=portal_welcome"]');
        browser.moveToObject('.m_notifications');
        assert.strictEqual(browser.waitForVisible('[href="report.php?a=notifications"]'), true);
        assert.strictEqual(browser.waitForVisible('[href="report.php?a=weeklystatusreport"]'), true);
  });
});

    //case C10
describe('logout to landingScreen', function() {
    it('C10 should select logoutUrl', function() {
        browser.keys(['\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE007']);
        assert.strictEqual(browser.getUrl(), 'http://deltaqa.studio.disney.com/index.php');
    });
});

    //case C11
describe('navMenuBar displays Asset Prep state', function() {
    it('C11 should display all buttons', function() {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[data-text="ASSET PREP"]');
        var assetPrepOutput = browser.getText('.asset');
        var expectedAssetPrepOutput = [ 'Title',
                              'Library Admin',
                              'Asset Request',
                              'CORE Asset Prep',
                              'Trailers',
                              'Clips',
                              'Key Art',
                              'Dub Card',
                              'Bonus' ];
        assert.deepEqual(assetPrepOutput, expectedAssetPrepOutput);
        assert.strictEqual(browser.waitForExist('#newsfeed_icon_img'), true);
        assert.strictEqual(browser.waitForExist('#openCARorderImage'), true);
    });
});

    //case C12
describe('navMenuBar displays Manufacture state', function() {
    it('C12 should display all buttons', function() {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[data-category="manufacture"]');
        var manufactureOutput = browser.getText('.manufacture');
        var expectedManufactureOutput = [ 'Factory',
                              'Tasks'];
        assert.deepEqual(manufactureOutput, expectedManufactureOutput);
        assert.strictEqual(browser.waitForExist('#newsfeed_icon_img'), true);
        assert.strictEqual(browser.waitForExist('#openCARorderImage'), true);
    });
});

    //case C13
describe('navMenuBar displays Admin state', function() {
    it('C13 should display all buttons', function() {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[data-category="admin"]');
        var adminOutput = browser.getText('.admin');
        var expectedAdminOutput = [ 'Users',
                              'Resources',
                              'Health',
                              'Master Data'];
        assert.deepEqual(adminOutput, expectedAdminOutput);
        assert.strictEqual(browser.waitForExist('#newsfeed_icon_img'), true);
        assert.strictEqual(browser.waitForExist('#openCARorderImage'), true);
    });
});

    //case C15
describe('navMenuTitleDropDownMenu', function() {
    it('C15 should display titleVersionListUrl', function() {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[data-text="ASSET PREP"]');
        browser.moveToObject('.m_title');
        assert.strictEqual(browser.waitForVisible('[href="report.php?a=title_version_list"]'), true)
    });
});

    //case C16
describe('navMenuLibraryAdminDropDownMenu', function() {
    it('C16 should display assetIngestUrl', function() {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[data-text="ASSET PREP"]');
        browser.moveToObject('.m_library_admin');
        assert.strictEqual(browser.waitForVisible('[href="report.php?a=asset_ingest"]'), true)
    });
});

    //case C17
describe('navMenuAssetRequestDropDownMenu', function() {
    it('C17 should display carOrdersUrl, carOrdersNewUrl, serviceIssuesUrl', function() {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[data-text="ASSET PREP"]');
        browser.moveToObject('.m_asset_request');
        assert.strictEqual(browser.isVisible('[href="report.php?a=car_ordered_item"]'), true)
        assert.strictEqual(browser.isVisible('[href="report.php?a=new_car_ordered_item"]'), true)
        assert.strictEqual(browser.isVisible('[href="report.php?a=asset_issues"]'), true)
    });
});

    //case C18
describe('navMenuCoreAssetPrepDropDownMenu', function() {
    it('C18 should display titleListUrl, coreAssetPrepUrl', function() {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[data-text="ASSET PREP"]');
        browser.moveToObject('.m_core_asset_prep');
        assert.strictEqual(browser.isVisible('[href="report.php?a=titles"]'), true)
        assert.strictEqual(browser.isVisible('[href="report.php?a=browseCoreAssets"]'), true)
    });
});

    //case C19
describe('navMenuTrailersDropDownMenu', function() {
    it('C19 should display titleListUrl, trailerAssetPrepUrl', function() {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[data-text="ASSET PREP"]');
        browser.moveToObject('.m_trailers');
        assert.strictEqual(browser.isVisible('[href="report.php?a=trailer_research"]'), true)
        assert.strictEqual(browser.isVisible('[href="report.php?a=browseTrailerAssets"]'), true)
    });
});

    //case C20
describe('navMenuFactoryDropDownMenu', function() {
    it('C20 should display createFactoryOrderUrl, ordersUrl', function() {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[data-text="MANUFACTURE"]');
        browser.moveToObject('.m_factory');
        assert.strictEqual(browser.waitForVisible('.submenu li:nth-child(1)'), true);
        assert.strictEqual(browser.waitForVisible('[href="report.php?a=browse_prores"]'), true)
    });
});

    //case C21
describe('navMenuTasksDropDownMenu', function() {
    it('C21 should display taskTrackerUrlSelector', function() {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[data-text="MANUFACTURE"]');
        browser.moveToObject('.m_tasks');
        assert.strictEqual(browser.waitForVisible('[href="report.php?a=task_tracker_new"]'), true)
    });
});

    //case C22
describe('navMenuMasterDataDropDownMenu', function() {
    it('C22 should display all links', function() {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[data-text="ADMIN"]');
        browser.moveToObject('.m_master_data');
        assert.strictEqual(browser.waitForVisible('[href="report.php?a=profile_template_base_management"]'), true);
        var linksInDropMenu = browser.getText(".admin .submenu li");
        var expectedLinksInDropMenu = [ 'Base Template',
                                        'Manufacturing Template',
                                        'Milestone Template',
                                        'Source Template',
                                        'Transaction Template',
                                        'Retailer',
                                        'DO Job Template',
                                        'Markets',
                                        'Vendor',
                                        'Workflow Management',
                                        'Subtask Template',
                                        'Media Classes',
                                        'Projector Management' ];
        assert.deepEqual(linksInDropMenu, expectedLinksInDropMenu);
    });
});

    //case C54
describe('navMenuBar', function() {
    it('C54 navMenuBar should display Asset Prep state', function() {
        browser.moveToObject('.headEl');
        browser.click('[data-category="asset"]');
        browser.keys(['\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE004', '\uE007']);
        autoLogin();
        assert.strictEqual(browser.getText('#topmenuTextLabel'), 'ASSET PREP');
    });
});

    //case C23
describe('orderScreen page', function() {
    it('C23', function () {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[href="report.php?a=portal_welcome"]');
        browser.click('.m_orders');
        var ordersOutput = browser.getText('.order-type');
        var expectedOrdersScreen = 'DCP,Mastering,Film Scan QC,Archiving,Distribution Order,Dailies,QC,Off Air,Clip Pull,Ad Hoc,Asset Prep,Update Title Proxies,Non-Title,Editorial Finishing,Asset Research Inquiry,Clip Approval,Asset Research,ADCP,Automated Title DO';
        assert.deepEqual(ordersOutput.join(), expectedOrdersScreen);
        var searchAllButton = browser.getText('.mouse-over-search').toString().slice(19);
        assert.equal(searchAllButton, 'Search All');
    });
});

    //case C24
describe('libraryScreen', function() {
    it('C24.2 should display logoutUrl', function() {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[data-text="PORTAL"]');
        browser.click('.m_library');
        assert.strictEqual(browser.waitForVisible('[onclick="logout();"]'), true);
    });

    it('C24.3 should display navMenuBar in Portal state', function() {
        assert.strictEqual(browser.getText('#topmenuTextLabel'), 'PORTAL');
    });

    it('C24.4 should display "Browse Titles" navigation path', function() {
        assert.strictEqual(browser.getText('.breadCrumb ul li:nth-child(2)'), 'Browse Titles');
    });

    it('C24.5 should dispay "Library" screen title', function() {
        assert.strictEqual(browser.getText('#subtitle'), 'Library');
    });

    it('C24.6 and C24.8 should display Filter, Sort, Title Search button group titles', function() {
        assert.strictEqual(browser.getText('#browseTitleFilters .sub-title').toString(), 'Filter,Sort,Title Search');
    });

    it('C24.7 should display allTitlesButton, liveActionButton, animatedButton, shortsButton', function() {
        var expectedFilterButtonGroup = [ 'All Titles', 'Live Action', 'Animated', 'Shorts' ];
        assert.deepEqual(browser.getText('#titlesFilter .ui-button-text'), expectedFilterButtonGroup);
    });

    it('C24.9 should display aZButton, mostPopularButton, mostRecentButton', function() {
        var expectedSortButtonGroup = [ 'A-Z', 'Most Popular', 'Most Recent' ];
        assert.deepEqual(browser.getText('#titlesSort .ui-button-text'), expectedSortButtonGroup);
    });

    it('C24.10 should display Search by Title, EIDR 1, Radar Group ID, or MPM" placeholder value', function() {
        assert.strictEqual(browser.waitForVisible('[placeholder="Search by Title, EIDR 1, Radar Group ID, MPM"]'), true);
    });

    it('C24.11 should display View text', function() {
        assert.strictEqual(browser.getText('#browseTitleFilters tbody tr:nth-child(2) td:nth-child(4)'), 'View');
    });

    it('C24.12 and C24.13 should display gridViewActiveButton (default) and listViewButton', function() {
        assert.strictEqual(browser.waitForVisible('.grid-view-button-selected'), true);
        assert.strictEqual(browser.waitForVisible('.list-view-button-unselected'), true);
    });
});

    //case 91
// describe('libraryScreen', function() {
//     it('C91 should display each button in active state with dark gray color.', function() {
        // var backgroundColorObj = browser.getCssProperty('.ui-state-active', 'background-color');
        // console.log(backgroundColorObj)
        // assert.strictEqual(backgroundColorObj.value, 'rgba(219,222,224,1)');
    // });

    //case 92
describe('libraryScreen', function() {
    it('C92 should display liveActionDropDownMenu listing.', function() {
        browser.moveToObject('[for="disney_live_action"]');
        var expectedBoolValues = [ true, true, true, true, true, true, true ];
        var expectedLiveActionDropMenu = [ 'Not Defined',
                                              'Disney Channel',
                                              'Documentary',
                                              'Lucas',
                                              'Marvel',
                                              'Other',
                                              'WDS' ]
        assert.deepEqual(browser.isVisible('[data-index="1"]'), expectedBoolValues);
        assert.deepEqual(browser.getText('[data-index="1"]'), expectedLiveActionDropMenu );
    });
});

    //case 93
describe('libraryScreen', function() {
    it('C93 should display animatedDropDownMenu listing.', function() {
        browser.moveToObject('[for="disney_animated"]');
        var expectedBoolValues = [ true, true, true, true, true, true, true, true, true ];
        var expectedAnimatedDropMenu = [ 'Not Defined',
                                              'Disney Toon Studios',
                                              'Feature Animation',
                                              'Lucas',
                                              'Marvel',
                                              'Other',
                                              'Pixar',
                                              'Short',
                                              'WDS' ]
        assert.deepEqual(browser.isVisible('[data-index="2"]'), expectedBoolValues);
        assert.deepEqual(browser.getText('[data-index="2"]'), expectedAnimatedDropMenu );
    });
});

    //case 94
describe('libraryScreen', function() {
    it('C94 should display shortsDropDownMenu listing.', function() {
        browser.moveToObject('[for="other_titles"]');
        var expectedBoolValues = [ true, true, true, true, true, true, true ];
        var expectedShortsDropMenu = [ 'Not Defined',
                                              'BLAM',
                                              'Other',
                                              'Pixar',
                                              'Short',
                                              'Acquisition',
                                              'Disney Acquisition' ]
        assert.deepEqual(browser.isVisible('[data-index="3"]'), expectedBoolValues);
        assert.deepEqual(browser.getText('[data-index="3"]'), expectedShortsDropMenu );
    });
});

    //case 95
describe('libraryScreen', function() {
    it('C95.1-C95.2 should display listViewActiveButton and gridViewButton', function() {
        browser.click('#list_view_button');
        assert.strictEqual(browser.isVisible('.grid-view-button-unselected'), true);
        assert.strictEqual(browser.isVisible('.list-view-button-selected'), true);
    });

    // it('C95.3 should display horizontally grouped elements within a gray box and no border', function() {
    //     console.log(browser.getCssProperty('.title-metadata', 'background-color'));
    // });
});

    //case C25
describe('ordersScreen', function() {
    it('C25.1 should dCPButton display searchButton and createOrderButton', function() {
        browser.url('/');
        autoLogin();
        browser.moveToObject('.headEl');
        browser.click('[data-text="PORTAL"]');
        browser.click('.m_orders');
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(1) td:nth-child(1)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.2 should masteringButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(1) td:nth-child(2)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.3 should filmScanQcButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(1) td:nth-child(3)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.4 should archivingButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(1) td:nth-child(4)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.5 should distributionOrderButton display searchButton, createOrderButton, and createJobButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(1) td:nth-child(5)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create-job'), true);
    });

    it('25.6 should dailiesButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(2) td:nth-child(1)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.7 should qCButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(2) td:nth-child(2)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.8 should offAirButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(2) td:nth-child(3)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.9 should clipPullButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(2) td:nth-child(4)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.10 should adHocButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(2) td:nth-child(5)');
        assert.strictEqual( browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.11 should assetPrepButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(3) td:nth-child(1)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.12 should updateTitleProxiesButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(3) td:nth-child(2)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.13 should nonTitleButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(3) td:nth-child(3)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.14 should editorialFinishingButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(3) td:nth-child(4)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.15 should assetResearchInquiryButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(3) td:nth-child(5)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.16 should assetResearchButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(4) td:nth-child(1)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.17 should aDCPButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(4) td:nth-child(2)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });

    it('25.18 should automatedTitleDOButton display searchButton and createOrderButton', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(4) td:nth-child(3)');
        assert.strictEqual(browser.waitForVisible('.mouse-over-search'), true);
        assert.strictEqual(browser.waitForVisible('.mouse-over-create'), true);
    });
});

    //case C26
describe('ordersScreen', function() {
    it('C26 should Search and create Order buttons display active state with dark yellow color on FilmScanQC', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(1) td:nth-child(3)');

        var myObj = browser.getLocationInView('#ordersTableContainer .order-types tbody tr:nth-child(1) td:nth-child(3) .mouse-over-search');
        browser.moveToObject('.mouse-over-search', myObj.x, myObj.y);
        var backgroundColorObj = browser.getCssProperty('.mouse-over-search-container .grid-active', 'background-color');
        assert.strictEqual(backgroundColorObj.value, 'rgba(243,196,20,1)');

        var myObj2 = browser.getLocationInView('#ordersTableContainer .order-types tbody tr:nth-child(1) td:nth-child(3) .mouse-over-create');
        browser.moveToObject('.mouse-over-create', myObj2.x, myObj2.y);
        var backgroundColorObj2 = browser.getCssProperty('.mouse-over-create-container .grid-active', 'background-color');
        assert.strictEqual(backgroundColorObj2.value, 'rgba(243,196,20,1)');

    });

    it('C26 should Search and create Order buttons display active state with dark yellow color on Archiving ', function() {
        browser.moveToObject('#ordersTableContainer .order-types tbody tr:nth-child(1) td:nth-child(4)');

        var myObj = browser.getLocationInView('#ordersTableContainer .order-types tbody tr:nth-child(1) td:nth-child(4) .mouse-over-search');
        browser.moveToObject('.mouse-over-search', myObj.x, myObj.y);
        var backgroundColorObj = browser.getCssProperty('.mouse-over-search-container .grid-active', 'background-color');
        assert.strictEqual(backgroundColorObj.value, 'rgba(243,196,20,1)');

        var myObj2 = browser.getLocationInView('#ordersTableContainer .order-types tbody tr:nth-child(1) td:nth-child(4) .mouse-over-create');
        browser.moveToObject('.mouse-over-create', myObj2.x, myObj2.y);
        var backgroundColorObj2 = browser.getCssProperty('.mouse-over-create-container .grid-active', 'background-color');
        assert.strictEqual(backgroundColorObj2.value, 'rgba(243,196,20,1)');

    });
});

    //case C50
describe('shippingRequestOrdersScreen', function() {
    it('C50.1 navMenuBar should display Portal state', function() {
        browser.url('/report.php?a=portal_welcome');
        browser.moveToObject('.m_orders');
        browser.click('[href="report.php?a=browse_sr"]');
        assert.strictEqual(browser.getText('#topmenuTextLabel'), 'PORTAL');
    });

    it('C50.2 should display homeIconButton', function() {
        assert.strictEqual(browser.waitForVisible('[src="images/delta.png"]'), true);
    });

    it('C50.3 should display Greeting message with last log in timestamp', function() {
        assert.strictEqual(browser.waitForVisible('[align="right"]'), true);
    });

    it('C50.4 should display logoutButton', function() {
        assert.strictEqual(browser.waitForVisible('[onclick="logout();"]'), true);
    });

    it('C50.5 and C51 should display placedInDropDownMenu', function() {
        var placedInDropDownMenu = browser.getText('#browseFilters tbody tr td:nth-child(1)').toString();
        assert.strictEqual(placedInDropDownMenu.replace( /\s/g, ""), 'Placedin,last30dayslast90days20172016201520142013');
        assert.strictEqual(browser.getTagName('#placed_in'), 'select');
    });

    it('C50.6 - 50.10 should display placedBy Me, DAD, DMD, DATG, LTS buttons', function() {
        var expectedPlaceByOutput = [ 'Placed by', 'Me\nDADT\nDMD\nDATG\nLTS' ];
        assert.deepEqual(browser.getText('#browseFilters tbody tr td:nth-child(2)'), expectedPlaceByOutput);
    });

    it('C50.11 - 50.15 should display orderState Open, InProgress, Closed, Awaiting, NotApproved buttons', function() {
        var expectedOrderStateOutput = [ 'Order State', 'Open\nIn Progress\nClosed\nAwaiting Approval\nNot Approved' ];
        assert.deepEqual(browser.getText('#browseFilters tbody tr td:nth-child(3)'), expectedOrderStateOutput);
    });

    it('C50.16 should display orderSearchInputField', function() {
        assert.strictEqual(browser.getText('#browseFilters tbody tr td:nth-child(4)').toString(), 'Order Search,');
        assert.strictEqual(browser.waitForVisible('[placeholder="search"]'), true);
    });

    it('C50.17 - 50.25 should display all columns in the shippingRequestOrdersTable', function() {
        var expectedColumnsOutput = 'OrderIDOrderDateOrderCreatorCreatorGroupOnBehalfofShipToStatusItems';
        assert.strictEqual(browser.waitForVisible('#ordersTable_wrapper'), true);
        var columnsInShippingRequest = browser.getText('[role="row"]').toString();
        assert.strictEqual(columnsInShippingRequest.replace( /\s/g, ""), expectedColumnsOutput);
        assert.strictEqual(browser.waitForExist('[aria-label="Order ID: activate to sort column ascending"]'), true);
    });
});

    //case C52
// describe('shippingRequestOrdersScreen', function() {
//     it('C52 should display each buttons active state with dark gray color', function() {
        // console.log(browser.getCssProperty('#browseSRForm .ui-state-hover', 'background-color'));
    // });
// });

    //case 102
describe('customerInvoiceManagementScreen', function() {
    it('C102.1 should display "Customer Invoice Management" in navBreadcrumb', function() {
        browser.url('/report.php?a=portal_welcome');
        browser.moveToObject('.m_billing');
        browser.click('[href="report.php?a=accounts_receivable"]');
        assert.strictEqual(browser.getText('#topinfo .breadCrumb'), 'Customer Invoice Management');
    });

    it('C102.3 should display logOutUrl', function() {
       assert.strictEqual(browser.waitForVisible('[onclick="logout();"]'), true);
    });

    it('C102.4 should display "Customer Invoice Management" header', function() {
       assert.strictEqual(browser.getText('#subtitle'), 'Customer Invoice Management');
    });

    it('C102.5 and C102.13 should display  "Export Transactions" and "Customer Invoice History" section title', function() {
        var expectedOutputForSectionTitles = [ 'Export Transactions', 'Customer Invoice History' ];
        assert.deepEqual(browser.getText('.list_head'), expectedOutputForSectionTitles );
    });

    it('C102.6- 102.9 should display generateInvoice, transactionHistoryReport, allTransaction, transactionFromRadio Radio buttons', function() {
        var myOutput = browser.getText('#sub_header_filters');
        assert.strictEqual(myOutput.replace( /\s/g, ""), 'GenerateInvoiceAllTransactionTransactionHistoryReportTransactionfromto');
    });

    it('C102.10 should display fromDatePicker "to" toDatePicker', function() {
        assert.strictEqual(browser.waitForVisible('#fromdate'), true);
        assert.strictEqual(browser.waitForVisible('#todate'), true);
        assert.strictEqual(browser.waitForVisible('.hasDatepicker'), true);
    });

    it('C102.11 - 102.12 should display export and preview button', function() {
        assert.strictEqual(browser.getText('#exportgButton'), 'Export');
        assert.strictEqual(browser.getText('#previewButton'), 'Preview');
    });

    it('C102.14 should display searchInputField', function() {
        assert.strictEqual( browser.waitForVisible('#search_field'), true);
        assert.strictEqual( browser.waitForVisible('[placeholder="search"]'), true);
    });

    it('C102.15 should display searchButton', function() {
        assert.strictEqual( browser.waitForVisible('#searchButton'), true);
        assert.strictEqual( browser.getText('#searchButton'), 'Search');
    });
});











