import{u as N,h as E,o as B}from"./links.Ce9S4kjc.js";import"./default-i18n.DXRQgkn2.js";import{_ as U}from"./_plugin-vue_export-helper.BN1snXvA.js";import{u as H,W as P}from"./Wizard.CFQPLwgY.js";import{B as R}from"./Checkbox.CmdF-nFt.js";import{C as V}from"./Caret.BthVBOwE.js";import{C as F}from"./Index.hENYR9Tl.js";import{C as O}from"./ProBadge.CVd2ImKm.js";import{C as Y}from"./Tooltip.DhkkBQWW.js";import{G as D,a as G}from"./Row.DRnp1mVs.js";import{a as q}from"./index.B6JTtDta.js";import{W as j,a as J,b as Q}from"./Header.COc3bf2s.js";import{W as K}from"./CloseAndExit.BgITO2y9.js";import{_ as X}from"./Steps.o4ZsDC27.js";import{v as n,c as _,B as e,l as o,o as u,a as t,C as a,t as i,b as k,F as Z,J as ee,k as te}from"./runtime-dom.esm-bundler.tPRhSV4q.js";import"./helpers.CXsRrhc8.js";import"./addons.DW40jBC1.js";import"./upperFirst.yVnsg4QL.js";import"./_stringToArray.DnK4tKcY.js";import"./toString.zLSwYOtv.js";import"./Checkmark.DOG99yeO.js";import"./Logo.bX-u9KVJ.js";const se={setup(){const{strings:r}=H();return{rootStore:N(),setupWizardStore:E(),composableStrings:r}},components:{BaseCheckbox:R,CoreAlert:V,CoreModal:F,CoreProBadge:O,CoreTooltip:Y,GridColumn:D,GridRow:G,SvgCircleQuestionMark:q,WizardBody:j,WizardCloseAndExit:K,WizardContainer:J,WizardHeader:Q,WizardSteps:X},mixins:[P],data(){return{loading:!1,stage:"smart-recommendations",showModal:!1,loadingModal:!1,strings:B(this.composableStrings,{setupSiteAnalyzer:this.$t.__("Setup Site Analyzer + Smart Recommendations",this.$td),description:this.$t.sprintf(this.$t.__("Get helpful suggestions from %1$s on how to optimize your website content, so you can rank higher in search results.",this.$td),"AIOSEO"),yourEmailAddress:this.$t.__("Your Email Address",this.$td),yourEmailIsNeeded:this.$t.__("Your email is needed so you can receive SEO recommendations. This email will also be used to connect your site with our SEO API.",this.$td),helpMakeAioseoBetter:this.$t.sprintf(this.$t.__("Help make %1$s better for everyone",this.$td),"AIOSEO"),yesCountMeIn:this.$t.__("Yes, count me in",this.$td),wouldYouLikeToPurchase:this.$t.__("Would you like to purchase and install the following features now?",this.$td),theseFeaturesAreAvailable:this.$t.__("An upgrade is required to unlock the following features.",this.$td),youWontHaveAccess:this.$t.__("You won't have access to this functionality until the extensions have been purchased and installed.",this.$td),illDoItLater:this.$t.__("I'll do it later",this.$td),purchaseAndInstallNow:this.$t.__("Purchase and Install Now",this.$td),bonusText:this.$t.sprintf(this.$t.__("%1$sBonus:%2$s You can upgrade to the %3$s plan today and %4$ssave %5$s off%6$s (discount auto-applied).",this.$td),"<strong>","</strong>","Pro","<strong>",this.$constants.DISCOUNT_PERCENTAGE,"</strong>"),usageTrackingTooltip:this.$t.sprintf(this.$t.__("Complete documentation on usage tracking is available %1$shere%2$s.",this.$td),this.$t.sprintf('<strong><a href="%1$s" target="_blank">',this.$links.getDocUrl("usageTracking")),"</a></strong>")})}},computed:{selectedFeaturesNeedsUpsell(){let r=!1;return this.setupWizardStore.features.forEach(l=>{this.needsUpsell(this.features.find(g=>g.value===l))&&(r=!0)}),r}},methods:{purchase(){const r=`&license-redirect=${btoa(this.rootStore.aioseo.urls.aio.wizard)}#/license-key`;window.open("https://aioseo.com/pricing/?features[]="+this.getSelectedUpsellFeatures.map(l=>l.value).join("&features[]=")+r),this.$router.push(this.setupWizardStore.getNextLink)},saveAndContinue(){this.loading=!0,this.setupWizardStore.saveWizard("smartRecommendations").then(()=>{if(!this.selectedFeaturesNeedsUpsell)return this.$router.push(this.setupWizardStore.getNextLink);this.showModal=!0,this.loading=!1})},skipStep(){this.setupWizardStore.saveWizard(),this.$router.push(this.setupWizardStore.getNextLink)},preventUncheck(r){r.preventDefault(),r.stopPropagation()}},mounted(){this.setupWizardStore.smartRecommendations.accountInfo=this.rootStore.aioseo.user.data.data.user_email}},oe={class:"aioseo-wizard-smart-recommendations"},ne={class:"header"},ie={class:"description"},re={class:"aioseo-settings-row no-border small-padding"},ae={class:"settings-name"},le={class:"name small-margin"},de={class:"aioseo-description"},ce={key:0,class:"aioseo-settings-row no-border no-margin small-padding"},ue={class:"settings-name"},me={class:"name small-margin"},_e=["innerHTML"],pe={class:"go-back"},he=t("div",{class:"spacer"},null,-1),ge={class:"aioseo-modal-body"},fe=["innerHTML"],ke={class:"settings-name"},ve={class:"name small-margin"},ye={class:"aioseo-description-text"},be=["innerHTML"],ze={class:"actions"},Se=t("div",{class:"spacer"},null,-1),we={class:"go-back"},Ce=["innerHTML"];function We(r,l,g,c,s,m){const v=n("wizard-header"),y=n("wizard-steps"),b=n("base-input"),z=n("svg-circle-question-mark"),S=n("core-tooltip"),w=n("base-toggle"),p=n("router-link"),h=n("base-button"),C=n("wizard-body"),W=n("wizard-close-and-exit"),A=n("wizard-container"),T=n("core-pro-badge"),f=n("grid-column"),$=n("base-checkbox"),x=n("grid-row"),L=n("core-alert"),M=n("core-modal");return u(),_("div",oe,[e(v),e(A,null,{default:o(()=>[e(C,null,{footer:o(()=>[t("div",pe,[e(p,{to:c.setupWizardStore.getPrevLink,class:"no-underline"},{default:o(()=>[a("←")]),_:1},8,["to"]),a("   "),e(p,{to:c.setupWizardStore.getPrevLink},{default:o(()=>[a(i(s.strings.goBack),1)]),_:1},8,["to"])]),he,e(h,{type:"gray",onClick:m.skipStep},{default:o(()=>[a(i(s.strings.skipThisStep),1)]),_:1},8,["onClick"]),e(h,{type:"blue",loading:s.loading,onClick:m.saveAndContinue},{default:o(()=>[a(i(s.strings.saveAndContinue)+" →",1)]),_:1},8,["loading","onClick"])]),default:o(()=>[e(y),t("div",ne,i(s.strings.setupSiteAnalyzer),1),t("div",ie,i(s.strings.description),1),t("div",re,[t("div",ae,[t("div",le,i(s.strings.yourEmailAddress),1)]),e(b,{size:"medium",modelValue:c.setupWizardStore.smartRecommendations.accountInfo,"onUpdate:modelValue":l[0]||(l[0]=d=>c.setupWizardStore.smartRecommendations.accountInfo=d)},null,8,["modelValue"]),t("div",de,i(s.strings.yourEmailIsNeeded),1)]),r.$isPro?k("",!0):(u(),_("div",ce,[t("div",ue,[t("div",me,[a(i(s.strings.helpMakeAioseoBetter)+" ",1),e(S,null,{tooltip:o(()=>[t("div",{innerHTML:s.strings.usageTrackingTooltip},null,8,_e)]),default:o(()=>[e(z)]),_:1})])]),e(w,{modelValue:c.setupWizardStore.smartRecommendations.usageTracking,"onUpdate:modelValue":l[1]||(l[1]=d=>c.setupWizardStore.smartRecommendations.usageTracking=d)},{default:o(()=>[a(i(s.strings.yesCountMeIn),1)]),_:1},8,["modelValue"])]))]),_:1}),e(W)]),_:1}),e(M,{show:s.showModal,onClose:l[2]||(l[2]=d=>s.showModal=!1),classes:["aioseo-smart-recommendations-modal"]},{headerTitle:o(()=>[a(i(s.strings.wouldYouLikeToPurchase),1)]),body:o(()=>[t("div",ge,[t("div",{class:"available-features",innerHTML:s.strings.theseFeaturesAreAvailable},null,8,fe),(u(!0),_(Z,null,ee(r.getSelectedUpsellFeatures,(d,I)=>(u(),_("div",{key:I,class:"aioseo-settings-row feature-grid small-padding medium-margin"},[e(x,null,{default:o(()=>[e(f,{xs:"11"},{default:o(()=>[t("div",ke,[t("div",ve,[a(i(d.name)+" ",1),r.needsUpsell(d)?(u(),te(T,{key:0})):k("",!0)]),t("div",ye,i(d.description),1)])]),_:2},1024),e(f,{xs:"1"},{default:o(()=>[e($,{round:"",class:"no-clicks",type:"green",modelValue:!0,onClick:m.preventUncheck},null,8,["onClick"])]),_:1})]),_:2},1024)]))),128)),t("div",{class:"available-features no-access",innerHTML:s.strings.youWontHaveAccess},null,8,be),t("div",ze,[Se,t("div",we,[e(p,{to:c.setupWizardStore.getNextLink},{default:o(()=>[a(i(s.strings.illDoItLater),1)]),_:1},8,["to"])]),e(h,{type:"green",loading:s.loadingModal,onClick:m.purchase},{default:o(()=>[a(i(s.strings.purchaseAndInstallNow),1)]),_:1},8,["loading","onClick"])]),e(L,{class:"bonus-alert",type:"yellow"},{default:o(()=>[a(" 🎁 "),t("span",{innerHTML:s.strings.bonusText},null,8,Ce)]),_:1})])]),_:1},8,["show"])])}const Je=U(se,[["render",We]]);export{Je as default};
