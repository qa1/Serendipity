/**
 * Accessible Tabs - jQuery plugin for accessible, unobtrusive tabs
 * Build to seemlessly work with the CCS-Framework YAML (yaml.de) not depending on YAML though
 * @requires jQuery - tested with 1.9.1, 1.7 and 1.4.2 but might as well work with older versions
 *
 * english article: http://blog.ginader.de/archives/2009/02/07/jQuery-Accessible-Tabs-How-to-make-tabs-REALLY-accessible.php
 * german article: http://blog.ginader.de/archives/2009/02/07/jQuery-Accessible-Tabs-Wie-man-Tabs-WIRKLICH-zugaenglich-macht.php
 * 
 * code: http://github.com/ginader/Accessible-Tabs
 * please report issues at: http://github.com/ginader/Accessible-Tabs/issues
 *
 * Copyright (c) 2007 Dirk Ginader (ginader.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
!function(a){function c(a,c){b&&window.console&&window.console.log&&(c?window.console.log(c+": ",a):window.console.log(a))}var b=!1;a.fn.extend({getUniqueId:function(a,b,c){return c=void 0===c?"":"-"+c,a+b+c},accessibleTabs:function(b){var d={wrapperClass:"content",currentClass:"current",tabhead:"h4",tabheadClass:"tabhead",tabbody:".tabbody",fx:"show",fxspeed:"normal",currentInfoText:"current tab: ",currentInfoPosition:"prepend",currentInfoClass:"current-info",tabsListClass:"tabs-list",syncheights:!1,syncHeightMethodName:"syncHeight",cssClassAvailable:!1,saveState:!1,autoAnchor:!1,pagination:!1,position:"top",wrapInnerNavLinks:"",firstNavItemClass:"first",lastNavItemClass:"last",clearfixClass:"clearfix"},e={37:-1,38:-1,39:1,40:1},f={top:"prepend",bottom:"append"};this.options=a.extend(d,b);var g=0;void 0!==a("body").data("accessibleTabsCount")&&(g=a("body").data("accessibleTabsCount")),a("body").data("accessibleTabsCount",this.size()+g);var h=this;return this.each(function(b){var d=a(this),i="",j=0,k=[];a(d).wrapInner('<div class="'+h.options.wrapperClass+'"></div>'),a(d).find(h.options.tabhead).each(function(c){var d="",e=a(this).attr("id");if(e){if(0===e.indexOf("accessibletabscontent"))return;d=' id="'+e+'"'}var f=h.getUniqueId("accessibletabscontent",g+b,c),l=h.getUniqueId("accessibletabsnavigation",g+b,c);if(k.push(f),h.options.cssClassAvailable===!0){var m="";a(this).attr("class")&&(m=a(this).attr("class"),m=' class="'+m+'"'),i+='<li id="'+l+'"><a'+d+m+' href="#'+f+'">'+a(this).html()+"</a></li>"}else i+='<li id="'+l+'"><a'+d+' href="#'+f+'">'+a(this).html()+"</a></li>";a(this).attr({id:f,"class":h.options.tabheadClass,tabindex:"-1"}),j++}),h.options.syncheights&&a.fn[h.options.syncHeightMethodName]&&(a(d).find(h.options.tabbody)[h.options.syncHeightMethodName](),a(window).resize(function(){a(d).find(h.options.tabbody)[h.options.syncHeightMethodName]()}));var l="."+h.options.tabsListClass;a(d).find(l).length||a(d)[f[h.options.position]]('<ul class="'+h.options.clearfixClass+" "+h.options.tabsListClass+" tabamount"+j+'"></ul>'),a(d).find(l).append(i);var m=a(d).find(h.options.tabbody);if(m.length>0&&(a(m).hide(),a(m[0]).show()),a(d).find("ul."+h.options.tabsListClass+">li:first").addClass(h.options.currentClass).addClass(h.options.firstNavItemClass).find("a")[h.options.currentInfoPosition]('<span class="'+h.options.currentInfoClass+'">'+h.options.currentInfoText+"</span>").parents("ul."+h.options.tabsListClass).children("li:last").addClass(h.options.lastNavItemClass),h.options.wrapInnerNavLinks&&a(d).find("ul."+h.options.tabsListClass+">li>a").wrapInner(h.options.wrapInnerNavLinks),a(d).find("ul."+h.options.tabsListClass+">li>a").each(function(b){a(this).click(function(c){c.preventDefault(),d.trigger("showTab.accessibleTabs",[a(c.target)]),h.options.saveState&&a.cookie&&a.cookie("accessibletab_"+d.attr("id")+"_active",b),a(d).find("ul."+h.options.tabsListClass+">li."+h.options.currentClass).removeClass(h.options.currentClass).find("span."+h.options.currentInfoClass).remove(),a(this).blur(),a(d).find(h.options.tabbody+":visible").hide(),a(d).find(h.options.tabbody).eq(b)[h.options.fx](h.options.fxspeed),a(this)[h.options.currentInfoPosition]('<span class="'+h.options.currentInfoClass+'">'+h.options.currentInfoText+"</span>").parent().addClass(h.options.currentClass),a(a(this).attr("href")).focus().keyup(function(c){e[c.keyCode]&&(h.showAccessibleTab(b+e[c.keyCode]),a(this).unbind("keyup"))})}),a(this).focus(function(){a(document).keyup(function(a){e[a.keyCode]&&h.showAccessibleTab(b+e[a.keyCode])})}),a(this).blur(function(){a(document).unbind("keyup")})}),h.options.saveState&&a.cookie){var n=a.cookie("accessibletab_"+d.attr("id")+"_active");c(a.cookie("accessibletab_"+d.attr("id")+"_active")),null!==n&&h.showAccessibleTab(n,d.attr("id"))}if(h.options.autoAnchor&&window.location.hash){var o=a("."+h.options.tabsListClass).find(window.location.hash);o.size()&&o.click()}if(h.options.pagination){var p='<ul class="pagination">';p+='    <li class="previous"><a href="#{previousAnchor}"><span>{previousHeadline}</span></a></li>',p+='    <li class="next"><a href="#{nextAnchor}"><span>{nextHeadline}</span></a></li>',p+="</ul>";var q=a(d).find(".tabbody"),r=q.size();q.each(function(b){a(this).append(p);var c=b+1;c>=r&&(c=0);var e=b-1;0>e&&(e=r-1);var f=a(this).find(".pagination"),g=f.find(".previous");g.find("span").text(a("#"+k[e]).text()),g.find("a").attr("href","#"+k[e]).click(function(b){b.preventDefault(),a(d).find(".tabs-list a").eq(e).click()});var h=f.find(".next");h.find("span").text(a("#"+k[c]).text()),h.find("a").attr("href","#"+k[c]).click(function(b){b.preventDefault(),a(d).find(".tabs-list a").eq(c).click()})})}})},showAccessibleTab:function(b,d){c("showAccessibleTab");var e=this;if(!d)return this.each(function(){var c=a(this);c.trigger("showTab.accessibleTabs");var d=c.find("ul."+e.options.tabsListClass+">li>a");c.trigger("showTab.accessibleTabs",[d.eq(b)]),d.eq(b).click()});var f=a("#"+d),g=f.find("ul."+e.options.tabsListClass+">li>a");f.trigger("showTab.accessibleTabs",[g.eq(b)]),g.eq(b).click()},showAccessibleTabSelector:function(b){c("showAccessibleTabSelector");var d=a(b);d&&("a"===d.get(0).nodeName.toLowerCase()?d.click():c("the selector of a showAccessibleTabSelector() call needs to point to a tabs headline!"))}})}(jQuery);