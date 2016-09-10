






















window.glam_is_https=(window.location.href.indexOf('https://')==-1?false:true);
window.glam_qsecure='';
window.glam_session = new Object();
window.glam_session.country_code = null;



window.glam_session.edge = true;

window.glam_session.glam_sid='112775146813073928811';

window.glam_session.qcsegs='D';

window.glam_session.country_code='KE';

window.glam_session.sid_set=1;

window.glam_affiliate_id = '1678908993';
window.glam_zone = '';
window.glam_ad_size = '160x600';
window.glam_status = '';
window.glam_status = (window.glam_status==''?null:window.glam_status);

function GlamShowCustomDefaultAd(zone, adSize) {}
window.glam_affiliate_info = new Array();
window.glam_homepage_urls = [];
window.glam_dart_ge_tags = '';
window.glam_dart_pepe_tags = '';





/* Default ads for afid=1678908993 */

function GlamShowCustomDefaultAd(pZone, pAdSize) {
 var adSize_array = pAdSize.split(',');
 var adSize = ( adSize_array[0] ? adSize_array[0] : '' );
 var zone = ( pZone.indexOf('Marketplace') > -1 ? 'Marketplace' : 'Premium');
 var adKey = zone + '_ownad' + adSize;

 var defaultAds={"Premium_noad_320x50":["yes"],"Premium_noad":["yes"]};

 if ( defaultAds[zone + '_ownad_' + adSize] )
  {
    var adItem=Math.floor(Math.random()*defaultAds[zone + '_ownad_' + adSize].length);
    document.write(defaultAds[zone + '_ownad_' + adSize][adItem]);
  }


 else if ( defaultAds[zone + '_ownad' + adSize] )
  {
    var adItem=Math.floor(Math.random()*defaultAds[zone + '_ownad' + adSize].length);
    document.write(defaultAds[zone + '_ownad' + adSize][adItem]);
  }
}

window.glam_affiliate_info={"ga_adb":null,"ga_api_tt":null,"ga_api_dt":null,"nopdasplit":null,"rs":null,"enable_int":null,"vpec":"blif","pec":"ls","home_url":"http:\/\/www.stevebooker.co.uk","country":"UK","currency":"GBP","network":"Brash","dart_tags":"nt=b;cc=uk;ec=ron;p=0;p=1;a9=live;acc=wl;cl=cvr60pls;cl=ivmbl;cl=pubbraent;cl=pubpre;cnt=q;ec=te;ec=teb;ec=tgt;ec=tls;ec=tmst;ec=tq;ec=tshb;ec=ttec;go_nagap=1;go_nags=1;go_napap=1;go_naps=1;go_nasl=1;ia=s;lng=en;mlogo=brashlifewht;mlogo=mmpremiumwht;mo=flo;mo=fp;mo=fpc;mo=ps;mo=pu;mo=puc;mo=sl;mob=ready;nat=y;natcb=y;natci=y;natcr=y;natvb=y;natvr=y;pec=ls;pubmatic=live;rmt=ov;sling=121;vce=grp3;vec=blif;vec=sp;vpec=blif;","dart_tags_orig":"nt=b;cc=uk;aft=p;ec=ron;p=0;p=1;arcadia=brash;a9=live;acc=wl;atf=o;ath=yes;ca=bb;ca=vb;cl=176950;cl=audioon;cl=cvr60pls;cl=ivmbl;cl=mdpre;cl=pgdw35;cl=pubbraent;cl=pubpre;cnt=q;ec=taud;ec=te;ec=teb;ec=tgt;ec=tls;ec=tmst;ec=tmu;ec=tmub;ec=tq;ec=tshb;ec=ttec;go_nagap=1;go_nags=1;go_napap=1;go_naps=1;go_nasl=1;ia=s;iatc=y;lng=en;mlogo=brashlifewht;mlogo=mmpremiumwht;mo=adh;mo=flo;mo=fp;mo=fpc;mo=pmp;mo=ps;mo=pu;mo=puc;mo=sl;mob=ready;nat=y;natcb=y;natci=y;natcr=y;natvb=y;natvr=y;npt=1;pec=ls;pm_60001=zoneid;pm_60002=zoneid;pm_60009=zoneid;pubmatic=live;rmt=ov;sling=121;st=ugc;uk=googlewhite;ukdeal_b03=b03031;ukdeal_b23=b23031;ukdeal_pmb=pmb;vce=grp3;vec=blif;vec=sp;vpec=blif;","list_tags":"arcadia=brash;a9=live;acc=wl;atf=o;ath=yes;ca=bb;ca=vb;cl=176950;cl=audioon;cl=cvr60pls;cl=ivmbl;cl=mdpre;cl=pgdw35;cl=pubbraent;cl=pubpre;cnt=q;ec=taud;ec=te;ec=teb;ec=tgt;ec=tls;ec=tmst;ec=tmu;ec=tmub;ec=tq;ec=tshb;ec=ttec;go_nagap=1;go_nags=1;go_napap=1;go_naps=1;go_nasl=1;ia=s;iatc=y;lng=en;mlogo=brashlifewht;mlogo=mmpremiumwht;mo=adh;mo=flo;mo=fp;mo=fpc;mo=pmp;mo=ps;mo=pu;mo=puc;mo=sl;mob=ready;nat=y;natcb=y;natci=y;natcr=y;natvb=y;natvr=y;npt=1;pec=ls;pm_60001=zoneid;pm_60002=zoneid;pm_60009=zoneid;pubmatic=live;rmt=ov;sling=121;st=ugc;uk=googlewhite;ukdeal_b03=b03031;ukdeal_b23=b23031;ukdeal_pmb=pmb;vce=grp3;vec=blif;vec=sp;vpec=blif;","affiliate_type":"Publisher","list_info_tags":"ad_888x11=dormant;ad_888x23=native;afpreset_3317=1;atp_de=50;atp_default=50;atp_fr=50;atp_jp=50;atp_uk=50;atp_us=50;default_floor_120x600=.70;default_floor_160x600=.70;default_floor_300x250=.70;default_floor_300x600=.70;default_floor_320x50=.70;default_floor_555x2=.70;default_floor_728x90=.70;default_floor_970x66=.70;dir=tec;dt=yes;ga_a9=live;ga_hawk_pids=oFuqdh:160x600,hGUGTN:300x250,EM5GAx:728x90,VAMC1l:320x50,ihXeV4:970x250;ga_pubmatic_pids=s72890:5000176621,s300250:5000176620,s160600:5000176619;iash_audit=s;iashsum=t;iatc=y;log_inventory_pid=12633;native_async=1;pm_60001=zoneid;pm_60002=zoneid;pm_60009=zoneid;pm_ca=93973,s300250:286824,s160600:286823,s300600:286825,s72890:286826,s97066:286827,s970250:314671;pm_de=93974,s160600:286828,s300250:286829,s300600:286830,s72890:286831,s97066:286832,s970250:314673;pm_fr=98796,s970250:314676;pm_gb=93972,s160600:286838,s300250:286839,s300600:286840,s72890:286841,s97066:286842,s970250:314672;pm_jp=93975,s160600:286833,s300250:286834,s300x600:286835,s72890:286836,s97066:286837,s970250:314674;pm_row=29944;pm_uk=93972,s160600:286838,s300250:286839,s300600:286840,s72890:286841,s97066:286842,s970250:314672;pm_us=29944,s160600:134568,s300250:134567,s300600:144252,s72890:134566,s97066:144253,s970250:314670;pm_us_m=65237,s32050:144254;","list_bt_tags":"fa=1;rf=1;","parent_affiliate_id":1678908993,"atp_rank":50,"dart_site_id":"1678908993","ctr_opt_tags":null,"ctr_opt_tags_orig":null,"is_site_targeted":0,"bt_tags_used":"","all_targeted_countries":"","all_dart_targeted_countries":"","all_glam_targeted_countries":"","all_glamadapt_ad_sizes":"","ap_info":"dt=yes","ga_hawk_call_pids":"oFuqdh,hGUGTN,EM5GAx,VAMC1l,ihXeV4","ga_pubmatic_call_pids":"s72890,s300250,s160600","dormant_sizes":"888x11","native_sizes":"888x23","disable_sizes":null,"status":"l","is_takeover_targeted":0,"site_targeted_ad_sizes":"","Premium_noad_320x50":"yes","Premium_noad":"yes","timestamp":"20160915am"};
window.glam_homepage_urls=["http:\/\/www.stevebooker.co.uk"];
window.glam_dart_ge_tags = window.glam_dart_pepe_tags + 'nt=b;cc=uk;ec=ron;p=0;p=1;a9=live;acc=wl;cl=cvr60pls;cl=ivmbl;cl=pubbraent;cl=pubpre;cnt=q;ec=te;ec=teb;ec=tgt;ec=tls;ec=tmst;ec=tq;ec=tshb;ec=ttec;go_nagap=1;go_nags=1;go_napap=1;go_naps=1;go_nasl=1;ia=s;lng=en;mlogo=brashlifewht;mlogo=mmpremiumwht;mo=flo;mo=fp;mo=fpc;mo=ps;mo=pu;mo=puc;mo=sl;mob=ready;nat=y;natcb=y;natci=y;natcr=y;natvb=y;natvr=y;pec=ls;pubmatic=live;rmt=ov;sling=121;vce=grp3;vec=blif;vec=sp;vpec=blif;';


/* PDA data for afid=1678908993 */

function GlamGetPdaData() {
 return {"Marketplace":{"Default":"dt=n;!c=hagl;!c=hagn;"},"ap_info":"dt=yes","Premium":{"Default":"dt=n;;!c=hagl;!c=hagn;","320x50":"dt=n;"}};
}




if ( !window.glamadapt_timer )
  window.glamadapt_timer = new Date().getTime();

window.GlamLogWithTimer = function(pLog)
{
  var glamadapt_elapsed = new Date().getTime() - window.glamadapt_timer;
  if (window.console != undefined )
    console.log(glamadapt_elapsed + ': ' + pLog);
}

if ( !window.glam_session  )
 window.glam_session = new Object();
window.glam_session.country_code = null;

if ( !window.glamadapt_pvid )
{
 window.glamadapt_pvid = Math.random()*10000000000000000;
}


window.glam_session.glam_sid='112775146813073928811';

window.glam_session.country_code='KE';

function GlamGetGeoData(pName){
 var vName = (pName == 'cc' || pName == 'co' ? 'country_code' : pName);
 return (window.glam_session && window.glam_session[vName] ? window.glam_session[vName] : null);
}
function GlamGetSessionId(){
 return ( window.glam_session && window.glam_session.glam_sid ? window.glam_session.glam_sid : null );
}

function GlamLoadJsAsync(js_async_url)
{
 try {
  window.asiPqTag = false;
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = js_async_url;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 } catch(err) { }
}

function GlamSetPageUrl(myurl)
{
 window.glamadapt_current_url = myurl;
}

function GlamGetPageUrl(myurl)
{
 return (window.glamadapt_current_url?window.glamadapt_current_url:'');;
}

function GlamGetStyleProperty(el,styleProp)
{
 var y = null;
 var x = document.getElementById(el);
 if (x && x.currentStyle)
  y = x.currentStyle[styleProp];
 else if (x && window.getComputedStyle)
  y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
 else if (x && x.style && x.style[styleProp])
  y = x.style[styleProp];
 GlamLogWithTimer('GlamGetStyleProperty('+el+','+styleProp+')='+y);
 return y;
}

function GlamGetReferrerUrl()
{
if ( window.glamadapt_current_url )
 return window.glamadapt_current_url;

var glamParentIsPermitted = false;
var glamCurWin = window;
try {
 try {
  for (i = 0; i <= 10; i++) {
   if ((glamCurWin.parent != null) && (glamCurWin.parent != glamCurWin)) {
    var loc = glamCurWin.parent.location.toString();
    var x = loc.length;
    if (x > 0) {
     glamCurWin = glamCurWin.parent;
     glamParentIsPermitted = true;
    }
    else {
     glamParentIsPermitted = false;
     break;
    }
   }
   else {
    if (i == 0) { glamParentIsPermitted = true; }
     break;
   }
  }
 }
 catch (e)
 { glamParentIsPermitted = false; }

 if (glamCurWin.document.referrer.length == 0) {
  glamURL = glamCurWin.location.href;
 }
 else {
  if (glamParentIsPermitted) {
   glamURL = glamCurWin.location.href;
  }
  else {
   glamURL = glamCurWin.document.referrer;
  }
 }
}
catch (ex) {};
return glamURL;
}

























































































if ( !window.glam_rtbf )
{
window.glam_rtbf = new Object();
window.glam_rtbf['s728x90'] = new Object();
window.glam_rtbf['s300x250'] = new Object();
window.glam_rtbf['s160x600'] = new Object();

window.glam_rtbf['s728x90']['pm'] = new Object();
window.glam_rtbf['s300x250']['pm'] = new Object();
window.glam_rtbf['s160x600']['pm'] = new Object();

window.glam_rtbf['s728x90']['pm'].pid = 's72890';
window.glam_rtbf['s300x250']['pm'].pid = 's300250';
window.glam_rtbf['s160x600']['pm'].pid = 's160600';

window.glam_rtbf['s728x90']['a9'] = new Object();
window.glam_rtbf['s300x250']['a9'] = new Object();
window.glam_rtbf['s160x600']['a9'] = new Object();

window.glam_rtbf['s728x90']['a9'].pid = 'g7x9p';
window.glam_rtbf['s300x250']['a9'].pid = 'g3x2p';
window.glam_rtbf['s160x600']['a9'].pid = 'g1x6p';
}

window.GlamRtbMaxCpm = function(slot)
{
 var rtb_providers = ['a9', 'pm'];
 var rtb_max_cpm = -1;
 for(rtbp in rtb_providers)
 {
    var rtb_provider=rtb_providers[rtbp];
    if ( window.glam_rtbf[slot] && window.glam_rtbf[slot][rtb_provider] && window.glam_rtbf[slot][rtb_provider].isAvailable && window.glam_rtbf[slot][rtb_provider].isAvailable() && window.glam_rtbf[slot][rtb_provider].getCpm && window.glam_rtbf[slot][rtb_provider].getCpm() > rtb_max_cpm )
    {
      rtb_max_cpm = window.glam_rtbf[slot][rtb_provider].getCpm();
    }
 }
 return rtb_max_cpm;
}

window.GlamRtbIsAvailable = function(slot)
{
 var rtb_providers = ['a9', 'pm'];
 for(rtbp in rtb_providers)
 {
    var rtb_provider=rtb_providers[rtbp];
    if ( window.glam_rtbf[slot] && window.glam_rtbf[slot][rtb_provider] && window.glam_rtbf[slot][rtb_provider].isAvailable && window.glam_rtbf[slot][rtb_provider].isAvailable())
    {
      return true;
    }
 }
 return false;
}


window.GlamShowRtbIfAvailable = function(slot)
{
 var rtb_providers = ['a9', 'pm'];
 for(rtbp in rtb_providers)
 {
    var rtb_provider=rtb_providers[rtbp];
    if ( window.glam_rtbf[slot] && window.glam_rtbf[slot][rtb_provider] && window.glam_rtbf[slot][rtb_provider].showIfAvailable && window.glam_rtbf[slot][rtb_provider].showIfAvailable())
    {
      return true;
    }
 }
 return false;
}

window.GlamProcessRtbSlot = function(slot, provider)
{
if ( window.glam_rtbf[slot] && window.glam_rtbf[slot][provider] && window.glam_rtbf[slot][provider].processRtbResults)
{
 return window.glam_rtbf[slot][provider].processRtbResults();
}
return false;
}
window.GlamCreateRtbSlot = function(slot, provider)
{
if ( !window.glam_rtbf[slot] )
 window.glam_rtbf[slot] = new Object();
if ( !window.glam_rtbf[slot][provider] )
 window.glam_rtbf[slot][provider] = new Object();
}
window.GlamSetRtbSlotAttribute = function(slot, provider, attr, value)
{
GlamCreateRtbSlot(slot, provider);
window.glam_rtbf[slot][provider][attr] = value;
}


window.glam_rtbf['s728x90'].floor = (parseFloat('')?parseFloat(''):parseFloat('.70'));
window.glam_rtbf['s300x250'].floor = (parseFloat('')?parseFloat(''):parseFloat('.70'));
window.glam_rtbf['s160x600'].floor = (parseFloat('')?parseFloat(''):parseFloat('.70'));



window.GlamRegisterRtbApiResponse = function(pax, slot, response)
{
  GlamLogWithTimer('GlamRegisterRtbApiResponse(' + pax + ',' + slot + ')');

  if ( window.GlamRegisterSlotRtbApiResponse )
   GlamRegisterSlotRtbApiResponse(pax, slot, response);
}


if ( !window.glam_a9_ads )
{
  window.glam_a9_ads = {};

  window.logA9Bid = function(params)
  {
   var cb = new Date().getTime();
   glam_img_a9=new Image();
   glam_img_a9.src='http' + window.glam_qsecure + '://www22.glam.com/cTags'+'ImgCmd.act?gcmd=imps&afid=&reqsq=200&ord='+cb+'&sz=1x1&tile=1&adid=5000188119&';
  }

  window.GlamIsA9Available = function(rid)
  {
    var a9avail = ( window.amznads &&  window.amznads.ads ? true : false);
    for(i=20 ; (a9avail && i >= ((parseInt(window.glam_rtbf[rid].floor.toString())/0.5)+1)) ; i--)
    {
      if (window.amznads.ads[window.glam_rtbf[rid].a9.pid + i])
      {
        window.glam_a9_ads[rid] = new Object();
        window.glam_a9_ads[rid].pid = window.glam_rtbf[rid].a9.pid + i;
        window.glam_a9_ads[rid].cpm = i*0.5;
        break;
      }
    }
    a9avail = ( a9avail && window.glam_a9_ads[rid] && !window.glam_a9_ads[rid].shown ? true : false);
    GlamLogWithTimer('GlamIsA9Available(' + rid + ')=' + a9avail + '/' + (window.glam_a9_ads[rid] && window.glam_a9_ads[rid].pid ? window.glam_a9_ads[rid].pid :''));
    return a9avail;
  }

  window.GlamA9Cpm = function(rid)
  {
    return ( window.glam_a9_ads[rid] && window.glam_a9_ads[rid].cpm && window.glam_a9_ads[rid].pid ? window.glam_a9_ads[rid].cpm : 0.00);
  }

  window.GlamA9LogInfo = function(rid)
  {
    if ( window.glam_a9_ads[rid] && window.glam_a9_ads[rid].cpm && window.glam_a9_ads[rid].pid )
    {
      return (';ga_rtbfloor='+window.glam_rtbf[rid].floor+';ga_rtbcpm='+window.glam_a9_ads[rid].cpm+';a9_slot='+rid+';a9_rid='+window.glam_a9_ads[rid].pid);
    }
    return '';
  }
  window.GlamShowA9 = function(rid)
  {
    var a9avail = GlamIsA9Available(rid);
    if ( a9avail )
    {
      window.glam_a9_ads[rid].shown = true;
      amznads.renderAd(document, window.glam_a9_ads[rid].pid);
    }
    GlamLogWithTimer('GlamShowA9(' + rid + ')=' + a9avail);
    return a9avail;
  }
  if ( !window.glam_a9_called )
  {
   window.glam_a9_called=true;
   window.glam_a9_kvs='ga_a9=1;ga_a9.pids=a728x90p1,a300x250p2';
   GlamLogWithTimer('GlamLaunchA9Async()');
   var amznads = amznads || {};
   amznads.tasks = amznads.tasks || [];
   amznads.asyncParams = {'id': '3114'};
   var data = {};
   if ( window != window.top )
   {
      data.u = encodeURIComponent(GlamGetReferrerUrl());
      amznads.asyncParams.data = data;
   }

   (function() {
    var a, s = document.getElementsByTagName("script")[0];
    a = document.createElement("script");
    a.type="text/javascript";
    a.async = true;
    a.src = "http" + window.glam_qsecure + "://c.amazon-adsystem.com/aax2/amzn_ads.js";
    s.parentNode.insertBefore(a, s);
   })();
  }
}




if ( !window.glam_pubmatic_ads )
{
  window.glam_pubmatic_ads = {};

  window.logPubMaticBid = function(params)
  {
   var cb = new Date().getTime();
   glam_img_pubmatic=new Image();
   glam_img_pubmatic.src='http' + window.glam_qsecure + '://www22.glam.com/cTags'+'ImgCmd.act?gcmd=imps&afid=&reqsq=200&ord='+cb+'&sz=1x1&tile=1&adid=5000178304&tt=' + (window==window.top?'j':'i');
  }
  window.processPubMaticBid = function(pmdata)
  {
   if ( pmdata && pmdata.PubMatic_Bid && pmdata.PubMatic_Bid.creative_tag && pmdata.PubMatic_Bid.tracking_url && pmdata.meta_data && pmdata.meta_data.rid && pmdata.PubMatic_Bid.ecpm )
   {
    window.glam_pubmatic_ads['s'+pmdata.meta_data.rid]=pmdata;
    GlamLogWithTimer('processPubMaticBid(' + pmdata.meta_data.rid + ')=' + pmdata.PubMatic_Bid.ecpm);
   }
   else if ( pmdata && pmdata.PubMatic_Bid && pmdata.PubMatic_Bid.creative_tag && pmdata.PubMatic_Bid.tracking_url && pmdata.meta_data && pmdata.meta_data.rid )
   {
    GlamLogWithTimer('processPubMaticBid(' + pmdata.meta_data.rid + ')=' + pmdata.PubMatic_Bid.ecpm);
   }
  }
  window.GlamIsPubmaticAvailable = function(rid)
  {
    var pmavail = ( window.glam_pubmatic_ads[rid] && !window.glam_pubmatic_ads[rid].shown ? true : false );
    GlamLogWithTimer('GlamIsPubmaticAvailable(' + rid + ')=' + pmavail);
    return pmavail;
  }
  window.GlamPubmaticDealId = function(rid)
  {
    return ( window.glam_pubmatic_ads[rid] && window.glam_pubmatic_ads[rid].PubMatic_Bid && window.glam_pubmatic_ads[rid].PubMatic_Bid.wdeal ? window.glam_pubmatic_ads[rid].PubMatic_Bid.wdeal : null);
  }
  window.GlamPubmaticCpm = function(rid)
  {
    return ( window.glam_pubmatic_ads[rid] && window.glam_pubmatic_ads[rid].PubMatic_Bid && window.glam_pubmatic_ads[rid].PubMatic_Bid.ecpm ? window.glam_pubmatic_ads[rid].PubMatic_Bid.ecpm : 0.00);
  }
  window.GlamPubmaticLogInfo = function(rid)
  {
    if ( window.glam_pubmatic_ads[rid] && window.glam_pubmatic_ads[rid].PubMatic_Bid && window.glam_pubmatic_ads[rid].PubMatic_Bid.ecpm )
    {
      return ((window.glam_pubmatic_ads[rid].PubMatic_Bid.wdeal ? ';rpdeal='+window.glam_pubmatic_ads[rid].PubMatic_Bid.wdeal : '') +
              (window.glam_pubmatic_ads[rid].PubMatic_Bid.advertiser_id ? ';rpadvertiser='+window.glam_pubmatic_ads[rid].PubMatic_Bid.advertiser_id : '') +
              ';ga_rtbcpm='+window.glam_pubmatic_ads[rid].PubMatic_Bid.ecpm+';pm_slot='+rid+';pm_rid='+window.glam_pubmatic_ads[rid].meta_data.rid+';tt='+(window==window.top?'j':'i')+';pm_tt='+(window==window.top?'j':'i'));
    }
    else
    {
      return (';pm_slot='+rid+';tt='+(window==window.top?'j':'i')+';pm_tt='+(window==window.top?'j':'i'));
    }
  }
  window.GlamShowPubmatic = function(rid)
  {
    var pmavail = false;
    if ( window.glam_pubmatic_ads[rid] && !window.glam_pubmatic_ads[rid].shown && window.glam_pubmatic_ads[rid].PubMatic_Bid && window.glam_pubmatic_ads[rid].PubMatic_Bid.creative_tag)
    {
      window.glam_pubmatic_ads[rid].shown = true;
      document.write(window.glam_pubmatic_ads[rid].PubMatic_Bid.creative_tag);
      document.write('<iframe height="0" width="0" frameborder="0" style="position:absolute;visibility:hidden;" src="' + window.glam_pubmatic_ads[rid].PubMatic_Bid.tracking_url + '"></iframe>');
      pmavail = true;
    }
    GlamLogWithTimer('GlamShowPubmatic(' + rid + ')=' + pmavail);
    return pmavail;
  }
}

if ( !window.glam_pubmatic_called )
{

 window.glam_pubmatic_called=true;
 window.glam_pubmatic_kvs='ga_pubmatic=1;ga_pubmatic_pids=s300250,s72890,s160600,s97066,s300600';
 (function() {
  try {
  GlamLogWithTimer('GlamLaunchPubmaticAsync()');
  document.write('<iframe height="0" width="0" frameborder="0" style="position:absolute;visibility:hidden;" src="http' + window.glam_qsecure + '://ads.pubmatic.com/AdServer/js/showad.js#PIX&ptask=DSP&SPug=1"></iframe>');

   var cb = new Date().getTime();
    window.pad = function (num) {
    norm = Math.abs(Math.floor(num));
    return (norm < 10 ? '0' : '') + norm;
    }
    window.pmtimeformat = function(pmtime) {
     var yyyy = pmtime.getFullYear().toString();
     var mm = (pmtime.getMonth()+1).toString(); // getMonth() is zero-based
     var dd  = pmtime.getDate().toString();
     var hh  = pmtime.getHours().toString();
     var mi  = pmtime.getMinutes().toString();
     var ss  = pmtime.getSeconds().toString();
     var tzo = -pmtime.getTimezoneOffset();
     var sign = tzo >= 0 ? '+' : '-';
     var tz =  sign + pad(tzo / 60) + '.' + pad(tzo % 60);
     var pt = {};
     pt['timezone'] = tz;
     pt['time'] = yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]) + ' ' +
     (hh[1]?hh:"0"+hh[0]) + ':' + (mi[1]?mi:"0"+mi[0]) + ':' + (ss[1]?ss:"0"+ss[0]);
     return pt
    };

  d = new Date();
  var pmtime = pmtimeformat(d);



  var pm_ZoneIdPmp = '60001,60002,60009';

//To process siteId and KadId
var pm_siteId = '29944';


//To get siteId


var pmKadId={};
//To get KadId







var pm_site_var='pm_ke';

  var pm_siteId = 29944;



var pm_siteId_m = '';













  pm_siteId_m= "None";




   var pm_sizes = {"s728x90":"rid=72890&oadId=134566&adId="+pmKadId['s72890']+"&pmZoneIdBySize=302020&kadheight=90&kadwidth=728&kadfloor=",
                   "s300x250":"rid=300250&oadId=134567&adId="+pmKadId['s300250']+"&pmZoneIdBySize=302010&kadheight=250&kadwidth=300&kadfloor=",
                   "s160x600":"rid=160600&oadId=134568&adId="+pmKadId['s160600']+"&pmZoneIdBySize=302030&kadheight=600&kadwidth=160&kadfloor=",
                   "s970x66":"rid=97066&oadId=144253&adId="+pmKadId['s97066']+"&pmZoneIdBySize=302030&kadheight=66&kadwidth=970&kadfloor=",
                   "s970x250":"rid=970250&oadId=&adId="+pmKadId['s970250']+"&pmZoneIdBySize=&kadheight=250&kadwidth=970&kadfloor=",
                   "s320x50":"rid=32050&oadId=&adId="+pmKadId['s32050']+"&pmZoneIdBySize=&kadheight=50&kadwidth=320&kadfloor=",
                   "s300x600":"rid=300600&oadId=144252&adId="+pmKadId['s300600']+"&pmZoneIdBySize=302030&kadheight=600&kadwidth=300&kadfloor="};





   pm_sizes.s728x90 += (1.4*(parseFloat('')?parseFloat(''):parseFloat('.70')));
   pm_sizes.s300x250 += (1.4*(parseFloat('')?parseFloat(''):parseFloat('.70')));
   pm_sizes.s160x600 += (1.4*(parseFloat('')?parseFloat(''):parseFloat('.70')));
   pm_sizes.s970x66 += (1.4*(parseFloat('')?parseFloat(''):parseFloat('.70')));
   pm_sizes.s300x600 += (1.4*(parseFloat('')?parseFloat(''):parseFloat('.70')));
   pm_sizes.s970x250 += (1.4*(parseFloat('')?parseFloat(''):parseFloat('')));
   pm_sizes.s320x50 += (1.4*(parseFloat('')?parseFloat(''):parseFloat('.70')));

   var pm_siteIdMain = '';
   var iIsGlamSecure = (window.glam_qsecure == 's') ? 1 : 0;
   for(pm_size in pm_sizes)
   {
     window.glam_pubmatic_ads[pm_size]=null;
     var ga = document.createElement('script');
     ga.type = 'text/javascript';
     ga.async = true;
     pm_siteIdMain = (pm_size == 's320x50') ? pm_siteId_m:pm_siteId;
     ga.src = "http" + window.glam_qsecure + "://showads.pubmatic.com/AdServer/AdServerServlet?pubId=29943&sec="+ iIsGlamSecure +"&siteId=" + pm_siteIdMain + "&pmZoneId=" + pm_ZoneIdPmp + "&operId=102&rs=2&" + pm_sizes[pm_size] +
              "&kltstamp="+escape(pmtime['time']) + "&timezone=" + escape(pmtime['timezone']) +
              "&ranreq=" + Math.random() + "&pageURL="+encodeURIComponent(GlamGetReferrerUrl()) + "&kadpageurl="+encodeURIComponent(GlamGetReferrerUrl()) + "&screenResolution=-1x-1&adPosition=-1x-1&inIframe=1&adVisibility=0";
     (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
   }
   glam_img_pubmatic=new Image();
   glam_img_pubmatic.src='http' + window.glam_qsecure + '://www22.glam.com/cTags'+'ImgCmd.act?gcmd=imps&afid=&reqsq=200&ord='+cb+'&sz=1x1&tile=1&adid=5000178304&';
 } catch(err) { }
 })();
}















function GlamProcessScriptParams()
{

}









window.glam_affiliateId=window.glam_affiliate_id;window.glam_ad_sequence=0;window.glam_atf_line=1350;window.glam_atf_kv='uatf=s';function GlamGetQueryVariable(variable){var query=window.location.search.substring(1);var vars=query.split("&");for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");if(pair[0]==variable){return pair[1];}}
return null;}
function GlamGetDartViewId()
{if(!window.glam_dart_ord)
{window.glam_dart_ord=Math.random()*10000000000000000;}
return window.glam_dart_ord;}
function GlamCallExternalJs(pFile)
{document.write('<scr'+'ipt type="text/javascript" language="JavaScript" src="'+
(!window.glam_is_https?pFile:pFile.replace('http://','https://'))+'"><'+'/sc'+'ript>');}
function GlamGetReferrerUrl()
{var glamParentIsPermitted=false;var glamCurWin=window;try{try{for(i=0;i<=10;i++){if((glamCurWin.parent!=null)&&(glamCurWin.parent!=glamCurWin)){var loc=glamCurWin.parent.location.toString();var x=loc.length;if(x>0){glamCurWin=glamCurWin.parent;glamParentIsPermitted=true;}
else{glamParentIsPermitted=false;break;}}
else{if(i==0){glamParentIsPermitted=true;}
break;}}}
catch(e)
{glamParentIsPermitted=false;}
if(glamCurWin.document.referrer.length==0){glamURL=glamCurWin.location.href;}
else{if(glamParentIsPermitted){glamURL=glamCurWin.location.href;}
else{glamURL=glamCurWin.document.referrer;}}}
catch(ex){};return glamURL;}
function GlamGetAdaptCallStr(glam_adcall_url)
{var my_glam_adapt_kvs_str=glam_adcall_url.replace('?','');var d=new Date();var dl=':'
var _glt=d.getTimezoneOffset()+dl+d.getDay()+dl+
d.getHours()+dl+d.getMinutes()+dl+d.getSeconds()+dl+d.getMilliseconds()+dl+
d.getFullYear()+dl+(d.getMonth()+1)+dl+d.getDate();my_glam_adapt_kvs_str+=(window.location.href.indexOf('glamCallGlamAdaptJs')>-1?';glamadapt=js':'')+
(window.location.href.indexOf('glamCallGlamAdaptDefault')>-1?';glamadapt=default':'')+';ga_ctime='+d.getTime()+';url='+GlamGetUrlId()+';seq='+window.glam_ad_sequence+';ux='+GlamGetUValuesExploded()+';_glt='+_glt+';a_tz='+-d.getTimezoneOffset();return my_glam_adapt_kvs_str;}
function GlamGetUrlId()
{tmpStr=window.location.href.substr(7+window.location.href.indexOf('http://'));key=tmpStr.substr(tmpStr.indexOf('/'));return glamURLHash(key);}
function GlamGetUValuesExploded()
{var uValues='';if(window.glam_uvalues)
{for(vname in window.glam_uvalues)
{uValues+=vname+'-'+window.glam_uvalues[vname]+',';}}
return uValues;}
function GlamCallQuantcast(quant_id,quant_pec)
{_qoptions={qacct:"p-874AVp33Bbtkg",labels:"Style"};_qoptions['qacct']=quant_id;var glam_qc_map={gl:'Style',b:'Style',c:'Entertainment',co:'Entertainment',e:'Entertainment',f:'Style',fm:'Family',h:'HealthAndWellness',ls:'Style',lt:'Lifestyle',lu:'Luxury',lv:'Living',q:'Entertainment',s:'Style',t:'Entertainment',w:'HealthAndWellness',mi:'Style',be:'Entertainment',bls:'Lifestyle',ba:'Autos',bt:'Technology',br:'Lifestyle'};if(quant_pec==null&&glam_info['pec']&&glam_qc_map[glam_info['pec']])
{_qoptions['labels']=glam_qc_map[glam_info['pec']];}
else if(quant_pec!=null)
{_qoptions['labels']=quant_pec;}
window.glam_qsecure=(window.location.href.indexOf('https://')==-1?'':'s');if(GlamGetGeoData('co')!='DE'&&(window.glam_qsecure!='s'||(GlamGetGeoData('co')!='JP'&&GlamGetGeoData('co')!='UK'&&GlamGetGeoData('co')!='GB'))){GlamCallExternalJs("http://edge.quantserve.com/quant.js");}
if((window.glam_session.ga_debug&&window.glam_session.ga_debug=='yes')||(window.GlamGetAffiliateInfo&&GlamGetAffiliateInfo('cc')=='de'&&(GlamGetGeoData('co')=='DE'||GlamGetGeoData('co')=='CH'||GlamGetGeoData('co')=='AT')))
{var glam_adServerURL='http'+window.glam_qsecure+'://www22.glam.com/cTagsImgCmd.act?gname=nuggadkvs&gvalue=NUGGVARS&gcmd=setc&gexpires=2592000&bkrand='+Math.random()*100000000000000000;glam_adServerURL=encodeURIComponent(glam_adServerURL);var nuggrid=encodeURIComponent(top.location.href);var nuggcall=new Image();nuggcall.src='http'+window.glam_qsecure+'://glammedia.nuggad.net/bk?nuggn=235681100&nuggrid='+nuggrid+'&nuggl='+glam_adServerURL;}
if(GlamGetGeoData('co')=='AU')
{_rsCI="us-glam";_rsCG=_qoptions['labels'];_rsDN="//secure-us.imrworldwide.com/";_rsPLfl=0;_rsSE=1;_rsSM=1.0;GlamCallExternalJs("http://secure-us.imrworldwide.com/v53.js");}
if(GlamGetGeoData('co')!='FR'&&GlamGetGeoData('co')!='DE'&&!window.glam_comscore_beacon&&window.GlamGetAffiliateInfo&&GlamGetAffiliateInfo('cs_beacon')!='disable'){document.write('<scr'+'ipt src="'+(document.location.protocol=="https:"?"https://sb":"http://b")+'.scorecardresearch.com/beacon.js"'+'"></scr'+'ipt>');document.write('<scr'+'ipt src="http'+window.glam_qsecure+'://www8.glam.com/js/widgets/glam_comscore.js"></scr'+'ipt>');window.glam_comscore_beacon=true;}}
function GlamGetZone()
{return window.glam_zone;}
function GlamGetAdSizeMetaData(adSize){if(!window.glam_ad_size_meta){window.glam_ad_size_meta={"968x90":{"id":"19"},"224x126":{"id":"22"},"444x10":{"id":"22"},"160x600":{"id":"1"},"300x250":{"id":"2"},"800x150":{"id":"7"},"630x150":{"id":"8"},"480x270":{"id":"22"},"444x2":{"id":"22"},"444x3":{"id":"22"},"300x250,300x600":{"id":"6"},"968x16":{"id":"20"},"928x60":{"id":"21"},"160x600,300x600":{"id":"5"},"444x1":{"id":"22"},"270x150":{"id":"9"},"984x258":{"id":"13"},"468x60":{"id":"17"},"120x600,160x600":{"id":"23"},"240x135":{"id":"22"},"728x90":{"id":"3"},"160x160":{"id":"11"},"120x600":{"id":"16"},"300x600":{"id":"4"},"728x91":{"id":"15"},"650x35":{"id":"12"},"990x26":{"id":"14"},"800x50":{"id":"10"}};}
var real_size=adSize.split(',');var width_height=real_size[0].split('x');if(window.glam_ad_size_meta[adSize]&&width_height[0]&&width_height[1]){window.glam_ad_size_meta[adSize].width=parseInt(width_height[0]);window.glam_ad_size_meta[adSize].height=parseInt(width_height[1]);}
return(window.glam_ad_size_meta[adSize]?window.glam_ad_size_meta[adSize]:null);}
function glamStringHash(str){var hash=0;for(var i=0;i<str.length;i++){hash=hash<<1;if(hash<0){hash|=1;}
hash^=str.charCodeAt(i);}
return hash&0x7FFFFFFF;}
function glamURLHash(url){var urlHash=glamStringHash(url);var urlHashString=urlHash.toString(36).slice(-6);urlHashString='000000'.substring(urlHashString.length)+urlHashString;return urlHashString;}
function glamOrd(){var url=window.location.host+window.location.pathname;if(window!=window.top){url=document.referrer;var query=url.indexOf('?');if(query>-1)
url=url.slice(0,query);}
var urlHashString=glamURLHash(url);var now=new Date().getTime();var timestamp=Math.floor((now-1199145600000)/1000);var timestampString=timestamp.toString(36).slice(-6);timestampString='000000'.substring(timestampString.length)+timestampString;return urlHashString+timestampString+(Math.random()).toString(36).slice(-2);}
function glamGetUValue(formatid,keyvalues){if(formatid.charAt(0)!='b'){return formatid;}
var flagkeys={error:1,i:2};var u='';var subformat='';var tile='x';var adsize='x';var error=0;var flags=0;if(arguments.length>1){var pageid='';var kv='';if(keyvalues){for(key in keyvalues){if(typeof key!='string')
continue;var value=keyvalues[key];if(key=='pid'){pageid=value;continue;}else if(key=='fid'){value=value.toString();subformat=value.charAt(0);if(value.length>1)
error=1;continue;}else if(key=='aid'){value=value.toString();adsize=value.charAt(0);if(value.length>1)
error=1;continue;}else if(key=='tid'){tile=parseInt(value).toString(36);if(tile.length>1){tile=tile.charAt(0);error=1;}
continue;}else if(flagkeys[key]){if(parseInt(value))
flags|=flagkeys[key];continue;}else if(key=='g'){if(typeof value[1]=='undefined'){var sequence='0';var networkFlags=parseInt(value).toString(36);}else{var sequence=parseInt(value[1]).toString(36);var networkFlags=parseInt(value[0]).toString(36);}
value=sequence.slice(0,1)+'00000'.substring(networkFlags.length)+networkFlags;}
var k=key.charAt(0);kv+=','+k;if(typeof value=='number'||(typeof value=='string'&&key!='g'&&value.match(/^\d+$/))){value=parseInt(value).toString(36);}
if(typeof value!='string')
value='';if(value.length>6){error=1;value=value.slice(0,5)+'x';}
value='000000'.substring(value.length)+value;kv+=value;}}
if(pageid.length!=14){error=1;pageid='00000000000000'.substring(pageid.length)+pageid;u+=pageid.slice(0,13)+'x';}else
u+=pageid;u+=kv;if(u.length>58){error=1;u=u.slice(0,58);}
if(!subformat&&formatid.length>1){subformat=formatid.charAt(1);}else if(!subformat){subformat='0';}
flags|=error;flags=flags.toString(36);return'b'+subformat+flags+adsize+tile+u;}else{return'b01';}}
function GlamResetUValues()
{window.glam_uvalues={};}
function GlamSetUValue(vName,vValue)
{if(!window.glam_uvalues){GlamResetUValues();}
if(arguments.length<3)
window.glam_uvalues[vName]=vValue;else
window.glam_uvalues[vName]=Array.prototype.slice.call(arguments,1);}
function GlamGetUValue(vName)
{if(window.glam_uvalues[vName]){return window.glam_uvalues[vName];}}
function GlamGetUValuesAsString(pFormat)
{return glamGetUValue('b',window.glam_uvalues);}
function GlamDisplayAtpRules()
{document.write('<br>');for(atpvar in window.glam_affiliate_info.atp_rules)
{for(i=0;i<window.glam_affiliate_info.atp_rules[atpvar].length;i++)
{document.write(atpvar);document.write(' : ');document.write(window.glam_affiliate_info.atp_rules[atpvar][i].atp_key);document.write(' => ');document.write(window.glam_affiliate_info.atp_rules[atpvar][i].atp_rank);document.write('<br>');}}
document.write('<strong>Country='+(GlamGetGeoData('co')?GlamGetGeoData('co').toLowerCase():'undef')+' / ATP=');document.write(GlamGetAtpRankByRules());document.write('</strong><br>');}
function GlamGetAtpRankByRules()
{if(!window.glam_affiliate_info.atp_rules)
{return 8;}
atpvar=(GlamGetGeoData('co')?GlamGetGeoData('co').toLowerCase():'undef');atpvar=(atpvar=='gb'?'uk':atpvar);atp_co_var='atp_'+atpvar;if(GlamGetAffiliateInfo(atp_co_var))
{return parseInt(GlamGetAffiliateInfo(atp_co_var));}
else if(GlamGetAffiliateInfo('atp_rank')&&GlamGetAffiliateInfo('country')&&atpvar==GlamGetAffiliateInfo('country').toLowerCase())
{return parseInt(GlamGetAffiliateInfo('atp_rank'));}
var ratp=7;if(window.glam_affiliate_info.atp_rules['default']&&window.glam_affiliate_info.atp_rules['default'][0]&&window.glam_affiliate_info.atp_rules['default'][0].atp_rank)
{ratp=parseInt(window.glam_affiliate_info.atp_rules['default'][0].atp_rank);}
if(window.glam_affiliate_info.atp_rules[atpvar])
{for(i=0;i<window.glam_affiliate_info.atp_rules[atpvar].length;i++)
{if(parseInt(window.glam_affiliate_info.atp_rules[atpvar][i].atp_rank)<ratp)
{ratp=parseInt(window.glam_affiliate_info.atp_rules[atpvar][i].atp_rank);}}}
return ratp;}
function GlamPrioritizeSplit(site_priority,seed)
{var glam_split=seed-Math.floor(Math.random()*seed);if(glam_split>=site_priority)
{return true;}
return false;}
function GlamIsPremiumPriority()
{if(!window.glam_priority_split)
{window.glam_priority_split=GlamPrioritizeSplit(GlamGetAtpRankByRules(),5);}
if(window.location.href.indexOf('glamAtpDebug')>-1)
{GlamDisplayAtpRules();document.write('<strong>IsPremium='+(window.glam_priority_split?'TRUE':'NO')+'</strong>');}
return window.glam_priority_split;}
if(!window.glam_atf_line)
{window.glam_atf_line=800;}
if(!window.glam_atf_kv)
{window.glam_atf_kv='uatf=s';}
function GlamCallDlNodeIdWithBt(dl_study_id){}
function GlamIsStandardAdSize(adSize)
{return(GlamGetAdSizeMetaData(adSize)==null?false:true);}
function GlamGetGeoData(pName)
{var vName=(pName=='cc'||pName=='co'?'country_code':pName);return(window.glam_session&&window.glam_session[vName]?window.glam_session[vName]:null);}
function GlamGetSessionId()
{return(window.glam_session&&window.glam_session.glam_sid?window.glam_session.glam_sid:null);}
function GlamGetStatus()
{return window.glam_status;}
function GlamSetStatus(status)
{window.glam_status=status;}
function GlamDisplayAd()
{{if(GlamGetBtData()!=null){GlamAppendAdTag(GlamGetBtData());}
GlamDoDisplayAd();}}
function GlamGetULogData()
{if(!window.glam_ulog_info){return null;}
return window.glam_ulog_info;}
function GlamGetULogData(uData)
{window.glam_ulog_info=uData;}
function GlamGetLastCallTags()
{if(!window.window.glam_last_call_tags){return null;}
return window.window.glam_last_call_tags;}
function GlamSetBtData(btData)
{window.glam_bt_data=btData;}
function GlamGetBtData()
{window.glam_bt_data=(window.glam_session&&window.glam_session.glam_bt?window.glam_session.glam_bt:null);window.glam_bt_data=(window.glam_session&&window.glam_session.ctags?window.glam_bt_data+';'+window.glam_session.ctags:window.glam_bt_data);window.glam_bt_data=(window.glam_session&&window.glam_session.nuggadkvs?window.glam_bt_data+';'+window.glam_session.nuggadkvs:window.glam_bt_data);window.glam_bt_data=(window.glam_session&&window.glam_session.qcsegs?window.glam_bt_data+';'+window.glam_session.qcsegs.replace(/(^|,)/g,';qc='):window.glam_bt_data);return(window.glam_bt_data?window.glam_bt_data:null);}
function GlamGetMode(){return null;}
function GlamGetAffiliateId(){if(!window.glam_affiliate_id){window.glam_affiliate_id=null;}
return window.glam_affiliate_id;}
function GlamGetAdTile(){if(!document.glam_dart_tile)
{document.glam_dart_tile=0;}
return document.glam_dart_tile;}
function GlamGetAdSize(){if(!window.glam_ad_size){window.glam_ad_size=null;}
return window.glam_ad_size;}
function GlamCleanupKeyValues(st)
{var st_ar={};var vars=st.split(";");for(var i=0;i<vars.length;i++){if(vars[i].indexOf('=')>-1){var pair=vars[i].replace('=','___');st_ar[pair]=1;}}
var st_clean='';for(v in st_ar)
{st_clean=st_clean+v.replace('___','=')+';';}
return st_clean.replace(/;+/g,';');}
function GlamGetAdCallData(){if(!window.glam_dart_ge_tags){window.glam_dart_ge_tags='';}
window.glam_dart_ge_tags=GlamCleanupKeyValues(window.glam_dart_ge_tags);return window.glam_dart_ge_tags;}
function GlamResetAdTag(){window.glam_ad_tag_type=null;window.glam_client_ad_tag='';GlamResetUValues();}
function GlamAppendAdTag(ad_tag_string){window.glam_client_ad_tag=(window.glam_client_ad_tag?window.glam_client_ad_tag+ad_tag_string+';':ad_tag_string+';');return window.glam_client_ad_tag;}
function GlamGetAdSizeId(pAdSize)
{var ads_data=GlamGetAdSizeMetaData(pAdSize);if(ads_data==null){return'0';}
else{return ads_data.id;}}
function GlamGetPageViewId()
{if(!window.glam_page_view_id)
{window.glam_page_view_id=glamOrd();}
return('a'+GlamGetAdSizeId(window.glam_ad_size)+window.glam_page_view_id);}
function GlamGetPageViewIdN()
{if(!window.glam_page_view_id)
{window.glam_page_view_id=glamOrd();}
return window.glam_page_view_id;}
function GlamGetAdTagType()
{if(window.glam_ad_tag_type)
{return window.glam_ad_tag_type;}
else
{return'jscript';}}
function GlamGetAdTagTypeId()
{if(GlamGetAdTagType()=='jscript'){return'j';}
else if(GlamGetAdTagType()=='iframe'){return'i';}
else{return'u';}}
function GlamSetAdTagType(tagType)
{window.glam_ad_tag_type=tagType;}
function GlamDisableAds(glamDisableAdPars)
{var doDisableAdPars='ALL';if(glamDisableAdPars){doDisableAdPars=glamDisableAdPars;}
if(!window.glam_ads_disabled){window.glam_ads_disabled='';}
window.glam_ads_disabled=window.glam_ads_disabled+';'+doDisableAdPars;}
function GlamIsAdDisabled()
{if(window.glam_ads_disabled&&window.glam_ads_disabled.indexOf('ALL')>-1)
{return true;}
else if(window.glam_ads_disabled&&window.glam_ads_disabled.indexOf(GlamGetAdSize()+'|'+GlamGetAffiliateId())>-1)
{return true;}
else if(window.glam_ads_disabled&&window.glam_ads_disabled.indexOf('*|'+GlamGetAffiliateId())>-1)
{return true;}
else if(window.glam_ads_disabled&&window.glam_ads_disabled.indexOf(GlamGetAdSize()+'|*')>-1)
{return true;}
return false;}
function GlamCallAd()
{if(GlamIsAdDisabled())
{return;}
if(!window.glam_excluded_urls)
{window.glam_excluded_urls=[];window.glam_excluded_urls.push('k8l.info');window.glam_excluded_urls.push('purplepussy.net');window.glam_excluded_urls.push('gay.skinindex.com');window.glam_excluded_urls.push('www.arkansasexpats.com');window.glam_excluded_urls.push('sexiest.tamil-actress.ever.com');window.glam_excluded_urls.push('sexiest.namitha.ever.com');window.glam_excluded_urls.push('sexiest.halloweenpartypics.ever.com');window.glam_excluded_urls.push('sexiest.newsanchor.ever.com');window.glam_excluded_urls.push('sexiest.quotes.ever.com');window.glam_excluded_urls.push('sexiest.indian-actress.ever.com');window.glam_excluded_urls.push('sexiest.games.ever.com');window.glam_excluded_urls.push('mobile.arkansasexpats.com');window.glam_excluded_urls.push('sexiest.model.ever.com');window.glam_excluded_urls.push('sexiest.woman.ever.com');window.glam_excluded_urls.push('sexiest.womens-halloween-costumes.ever.com');window.glam_excluded_urls.push('sexiest.blond.ever.com');window.glam_excluded_urls.push('sexiest.christmas-songs.ever.com');window.glam_excluded_urls.push('sexiest.halloweencostume.ever.com');window.glam_excluded_urls.push('sexiest.musician.ever.com');window.glam_excluded_urls.push('sexiest.cheerleader.ever.com');window.glam_excluded_urls.push('sexiest.gameshow.ever.com');window.glam_excluded_urls.push('sexiest.kareena.ever.com');window.glam_excluded_urls.push('sexiest.gift.ever.com');window.glam_excluded_urls.push('crazysexymetalchick.instablogs.com');window.glam_excluded_urls.push('sexiest.actress.ever.com');window.glam_excluded_urls.push('sexiest.mom.ever.com');window.glam_excluded_urls.push('sexysienna.blogs.experienceproject.com');window.glam_excluded_urls.push('sexiest.blog.ever.com');window.glam_excluded_urls.push('sexiest.shoes.ever.com');window.glam_excluded_urls.push('howtolastlongerduringsex.blogs.experienceproject.c');window.glam_excluded_urls.push('sexiest.movie.ever.com');window.glam_excluded_urls.push('sexiest.sexyvideogirls.ever.com');window.glam_excluded_urls.push('sexiest.cheerleaders.ever.com');window.glam_excluded_urls.push('best.sexy-girls.ever.com');window.glam_excluded_urls.push('sexiest.person.ever.com');window.glam_excluded_urls.push('mooad-sexyy.instablogs.com');window.glam_excluded_urls.push('sexiest.girlsofgames.ever.com');window.glam_excluded_urls.push('sexleksaker24.instablogs.com');window.glam_excluded_urls.push('chicktrip.com');window.glam_excluded_urls.push('ever.com');window.glam_excluded_urls.push('Rapidshare-uae.com');window.glam_excluded_urls.push('10shahi.com');window.glam_excluded_urls.push('ThePirateBay.org');window.glam_excluded_urls.push('unblockyoutube.com');window.glam_excluded_urls.push('01nov09.it02.info');window.glam_excluded_urls.push('facebookoxy.com');window.glam_excluded_urls.push('clio.missouristate.edu');window.glam_excluded_urls.push('porr.la');window.glam_excluded_urls.push('www.barbarianmovies.com');window.glam_excluded_urls.push('planetaamateur.com');window.glam_excluded_urls.push('freepornii.com');window.glam_excluded_urls.push('Slaunchreport.com');window.glam_excluded_urls.push('hidemyass.com');}
var url=window.location.href.toLowerCase();if(window.glam_excluded_urls)
{for(i=0;i<window.glam_excluded_urls.length;i++)
{var exc_url=window.glam_excluded_urls[i].toLowerCase();if(window!=window.top&&document.referrer&&document.referrer.toLowerCase().indexOf(exc_url)>-1)
{return;}
else if(url.indexOf(exc_url)>-1)
{return;}}}
var my_ad_flags=64;var my_glam_tags=GlamGetAdCallData();var my_zone=GlamGetZone();var glam_url=(window==window.top?window.location.href:GlamGetReferrerUrl());glam_url=glam_url.substr(0,512);if(window!=window.top)
{my_glam_tags=my_glam_tags+';&ga_url='+escape(glam_url.replace('#',''))+'&;'}
var tmpStr=glam_url.substr(7+glam_url.indexOf('http://'));var url_key=tmpStr.substr(tmpStr.indexOf('/'));url_key=url_key.replace('?glamShowKvsUrl','');var key=glamURLHash(url_key);if(window.glam_url_info&&window.glam_url_info[key])
{my_glam_tags=my_glam_tags+';'+window.glam_url_info[key];}
window.glam_callseq=(window.glam_callseq?++window.glam_callseq:1);my_glam_tags=my_glam_tags+';ga_callseq='+window.glam_callseq+';';if(glam_dart_ge_tags.indexOf('!c=nptr')==-1)
{my_glam_tags=my_glam_tags+';p=0;pt=0';}
glam_ctags=GlamAppendAdTag('');if(window!=window.top)
{my_ad_flags=my_ad_flags|8;GlamSetAdTagType('iframe');GlamSetUValue('i',1);}
my_glam_tags+=';afid='+GlamGetAffiliateId()+';dsid='+GlamGetAffiliateInfo('dart_site_id')+';';window.glam_reskin_tags=my_glam_tags+';url='+GlamGetUrlId();window.glam_last_call_tags=GlamCleanupKeyValues(my_glam_tags+';');if(!window.glam_dormant_called&&GlamGetAdTagTypeId()=='j'&&(window.location.href.indexOf('enable_int=yes')>-1||window.location.href.indexOf('enable_dormant=yes')>-1||GlamGetAffiliateInfo('native_sizes')||GlamGetAffiliateInfo('dormant_sizes')))
{window.glam_int_tags=window.glam_last_call_tags;my_glam_tags+=';gszd=-;gsz='+(GlamGetAffiliateInfo('dormant_sizes')?GlamGetAffiliateInfo('dormant_sizes')+':999-':'');if(GlamGetAffiliateInfo('native_sizes')&&(GlamGetAffiliateInfo('native_async')||(window.glam_session&&window.glam_session.ga_kvs&&window.glam_session.ga_kvs.indexOf('native_async')>-1))){setTimeout(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src='http'+window.glam_qsecure+'://www35.glam.com/gad/glamadapt_psrv.act?;sz=1x1;gszd=-;'+';gsz=1x1:111-'+GlamGetAffiliateInfo('native_sizes')+':998'+';tt='+(window==top?'j':'i')+';afid='+window.glam_affiliate_id+';ord='+(window.glam_dart_ord?window.glam_dart_ord:(window.glam_dart_ord=Math.random()*10000000000000000))+';_g_cv=2;ga_native_async=1;';(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(ga);},1000);}
else if(GlamGetAffiliateInfo('native_sizes')){my_glam_tags+=(GlamGetAffiliateInfo('native_sizes')?GlamGetAffiliateInfo('native_sizes')+':998-':'');}
my_glam_tags+=GlamGetAdSize()+':'+GlamGetAdTile();window.glam_reskin_called=1;window.glam_dormant_called=1;window.glamadapt_native_created=1;window.glamadapt_dormant_created=true;window.glamadapt_reskin_created=true;}
if(!window.glam_adapt_notrack&&!window.glam_adapt_nocall&&GlamGetAdTagTypeId()=='j'&&((window.glam_info['rs']&&window.glam_info['rs']==1)||window.location.href.indexOf('enable_rs=yes')>-1)&&!window.glam_reskin_called)
{window.glam_reskin_called=1;window.glamadapt_reskin_created=true;my_glam_tags+=';pt=sk;'+'gsz=888x11:999,'+GlamGetAdSize()+':'+GlamGetAdTile();}
window.glam_ad_sequence++;my_glam_tags=GlamCleanupKeyValues(my_glam_tags+';');var my_glam_ord=(window.glam_append_adtags&&window.glam_append_adtags['ord']?window.glam_append_adtags['ord']:GlamGetDartViewId());var my_glam_tile=(window.glam_append_adtags&&window.glam_append_adtags['tile']?window.glam_append_adtags['tile']:document.glam_dart_tile);if((GlamGetAffiliateInfo('enable_kvo')=='yes'||GlamGetAffiliateId()==1||GlamGetAffiliateId()==0||GlamGetAffiliateId()==327467724)&&window.glam_ad_call_str)
{if((my_ad_flags&4)==4)
{window.glam_ad_call_str=window.glam_ad_call_str.replace('p=0','p=1');window.glam_ad_call_str=window.glam_ad_call_str.replace('pt=0','pt=1');window.glam_ad_call_str=window.glam_ad_call_str.replace('rmt=exp','');window.glam_ad_call_str=window.glam_ad_call_str.replace('rmt=ov','');}
var my_glam_appended_tags=GlamAppendAdTag('')+';';my_glam_appended_tags=my_glam_appended_tags.replace('p=0','p=1');my_glam_appended_tags=my_glam_appended_tags.replace('pt=0','pt=1');if(window.location.href.indexOf('glam_pda_override')>-1||(window.glam_pda_override&&window.glam_pda_override.indexOf(GlamGetAdSize())>-1))
{GlamHideAdsByGlam();GlamShowPublisherDefaultAd();}
else
{var my_glam_adcall_url=';'+
window.glam_ad_call_str+';'+my_glam_appended_tags+';tt='+GlamGetAdTagTypeId()+';u='+GlamGetUValuesAsString('dart')+';sz='+glam_ad_size+';tile='+my_glam_tile+';ord='+my_glam_ord+';';window.glam_adapt_kvs_str=GlamGetAdaptCallStr(my_glam_adcall_url);window.glam_ad_flags=my_ad_flags;window.glam_adapt_kvs=';flg='+my_ad_flags+';'+window.glam_adapt_kvs_str+';_g_cv=2;';GlamCallExternalJs('http://www35.glam.com/gad/glamadapt_jsrv.act?'+GlamCleanupKeyValues(window.glam_adapt_kvs));window.glam_ad_call_str=null;}}
else
{if(my_zone.indexOf('Marketplace')>-1||my_glam_tags.indexOf('npt=1')>-1)
{if(my_glam_tags.indexOf('p=0')==-1){my_glam_tags=my_glam_tags+';p=0';}
if(my_glam_tags.indexOf('pt=0')==-1){my_glam_tags=my_glam_tags+';pt=0';}
my_ad_flags=my_ad_flags|16;}
var glam_appended_zone='';if(glam_ctags.indexOf('ap=atk')>-1||my_glam_tags.indexOf('ap=atk')>-1)
{my_ad_flags=my_ad_flags|256;if(my_glam_tags.indexOf('at=dft')>-1)
{my_glam_tags=';ap=atk;at=dft;';}
else
{while(my_glam_tags.indexOf('ec=ron')>-1||my_glam_tags.indexOf('p=1')>-1)
{my_glam_tags=my_glam_tags.replace('ec=ron','');my_glam_tags=my_glam_tags.replace('p=1','');}}
my_glam_tags=my_glam_tags+';at=m;';glam_appended_zone='GlamApp/';}
GlamSetUValue('g',my_ad_flags,window.glam_ad_sequence);my_glam_tags+=(window.glam_session.ga_kvs?window.glam_session.ga_kvs:'');my_glam_tags+=(window.glam_session.ga_debug?';gadebug='+window.glam_session.ga_debug+';':'');my_glam_tags+=(window.gad_regions_kvs?window.gad_regions_kvs+';':'');my_glam_tags+=(window.glam&&window.glam.SimpleMetrics?';ga_lib_sm=1;':'');my_glam_tags=GlamCleanupKeyValues(my_glam_tags);var my_glam_adcall_url=';afid='+GlamGetAffiliateId()+';zone=/'+my_zone+glam_appended_zone+';'+
my_glam_tags+';tt='+GlamGetAdTagTypeId()+';u='+GlamGetUValuesAsString('dart')+';sz='+GlamGetAdSize()+';tile='+
my_glam_tile+';ord='+my_glam_ord+';?';window.glam_adapt_kvs_str=GlamGetAdaptCallStr(my_glam_adcall_url);window.glam_ad_flags=my_ad_flags;window.glam_adapt_kvs=';flg='+my_ad_flags+';'+window.glam_adapt_kvs_str+';_g_cv=2;';var adSize=GlamGetAdSize();if(window.location.href.indexOf('glam_pda_override')>-1||(window.glam_pda_override&&window.glam_pda_override.indexOf(GlamGetAdSize())>-1))
{GlamHideAdsByGlam();GlamShowPublisherDefaultAd();}
else
{GlamCallExternalJs('http://www35.glam.com/gad/glamadapt_jsrv.act?'+GlamCleanupKeyValues(window.glam_adapt_kvs));}}
window.glam_append_adtags=null;window.glam_append_user_info=null;if(!window.glam_adapt_notrack&&!window._quantcast_called&&glam_info['pec']&&!glam_info['nielsen_track']&&GlamGetAdSize()!='888x12')
{window._quantcast_called=1;GlamCallQuantcast((glam_info['qid']?glam_info['qid']:'p-874AVp33Bbtkg'),(glam_info['qc']?glam_info['qc']:null));}}
function GlamLoadEvolutionPlugins()
{window.glamadapt_atf_info={'tile':GlamGetAdTile(),'sz':GlamGetAdSize(),'euid':GlamGetDartViewId()};(function(window,document,undef){var doc_body=(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body;var atf_info=window['glamadapt_atf_info'];if(!window['glamAdVisibility2']){window['glamAdVisibility2']={'VER':2,'check':function(d){var divid="gadvis2_"+d['tile']+"_"+d['pageview'],tagdata={'tile':d['tile'],'atf':'u','pos':'0,0'},ad,ad_pos,vp;if(window!=window.top){return tagdata;}
try{document.write('<div id="'+divid+'" style="display:block;margin:0;padding:0;width:0;height:0;border:0"></div>');ad=document.getElementById(divid);vp=this._getViewport();ad_pos=this._getOffset(ad,vp);if(ad_pos.x>0&&ad_pos.y>0){tagdata['atf']=(ad_pos.y+parseInt(d['size'].split('x')[1],10))<this.fold?"1":(ad_pos.y+this.partialThreshold)<this.fold?"p":"0";tagdata['pos']=ad_pos.x+","+ad_pos.y;tagdata['x']=ad_pos.x;tagdata['y']=ad_pos.y;}else{tagdata['err']=true;}
tagdata['viewport']=vp.w+"x"+vp.h;}catch(e){tagdata['err']=true;}
return tagdata;},_getOffset:function(el,vp){var rect=el.getBoundingClientRect();return{x:rect.left+vp.x,y:rect.top+vp.y};},_getViewport:function(){return{x:window.scrollX!==undef?window.scrollX:(window.pageXOffset!==undef?window.pageXOffset:doc_body.scrollLeft),y:window.scrollY!==undef?window.scrollY:(window.pageYOffset!==undef?window.pageYOffset:doc_body.scrollTop),w:document.documentElement.clientWidth,h:document.documentElement.clientHeight};},fold:1000,partialThreshold:100};}
var tagdata=window['glamAdVisibility2']['check']({'tile':(atf_info['tile']||'0'),'size':atf_info['sz'],'pageview':atf_info['euid']});window['glam_atf_info']=tagdata;if(atf_info['uinfo_url']){(new Image()).src=atf_info['uinfo_url']+';atf='+tagdata['atf']+';x='+tagdata['x']+';y='+tagdata['y'];atf_info['uinfo_url']=null;}})(window,document);if(window.glam_atf_info){GlamAppendAdTag("atf="+window.glam_atf_info.atf);if(window.glam_atf_info.x){if(window.glam_atf_info.x>=300)
GlamAppendAdTag('pfl=3');else if(window.glam_atf_info.x>=160)
GlamAppendAdTag('pfl=1');else
GlamAppendAdTag('pfl=0');}}else
GlamAppendAdTag('pfl=u');}
function GlamCheckClientEnv()
{if(window.glam_append_adtags){for(var k in window.glam_append_adtags){GlamAppendAdTag(k+'='+window.glam_append_adtags[k]);}}
if(window.glam_append_user_info){for(var k in window.glam_append_user_info){GlamSetUValue(k,window.glam_append_user_info[k]);}}
glam_ctags=GlamAppendAdTag('');if(glam_ctags.indexOf('ap=gtv')>-1||glam_ctags.indexOf('ap=btv')>-1)
{GlamHideAdsByGlam();}}
function GlamValidateAdTags()
{var glam_url=(window==window.top?window.location.href:document.referrer);GlamSetAdTagType('jscript');GlamProcessScriptParams();}
function GlamGetAffiliateInfo(info_var){if(window.glam_affiliate_info[info_var]){return window.glam_affiliate_info[info_var];}
else if(window.glam_info[info_var]){return window.glam_info[info_var];}
else{return null;}}
function GlamHideAdsByGlam()
{}
function GlamShowAdsByGlam()
{}
function GlamShowPublisherDefaultAd()
{var gadsize=GlamGetAdSize();var gadsize_array=gadsize.split(',');if(gadsize_array&&gadsize_array[0]){GlamShowCustomDefaultAd(GlamGetZone(),gadsize_array[0]);}}
function GlamShowNoDefaultAd(){}
function GlamSetDlExposedAdTag(ad_entry,ad_kv){}
window.glam_css='';var glam_info=new Array();if(window.glam_affiliate_info['dart_tags'])
{vars=window.glam_affiliate_info['dart_tags'].split(";");for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");glam_info[pair[0]]=pair[1];}}
if(window.glam_affiliate_info['list_info_tags'])
{vars=window.glam_affiliate_info['list_info_tags'].split(";");for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");glam_info[pair[0]]=pair[1];}}
if(!document.glam_dart_tile)
{document.glam_dart_tile=0;}
document.glam_dart_tile=document.glam_dart_tile+1;GlamResetAdTag();GlamCheckClientEnv();function GlamDoDisplayAd(){if(window.glam_ads_disabled&&window.glam_ads_disabled==true)
{return;}
document.glam_protocol='http://';if(window.location.href.indexOf('https')>-1)
{document.glam_protocol='https://';}
if(window.location.href.indexOf('glamAdSizeOverride')>-1&&window.location.href.indexOf('glamAdTile')>-1&&GlamGetQueryVariable('glamAdTile')==document.glam_dart_tile)
{glam_ad_size=GlamGetQueryVariable('glamAdSizeOverride');}
GlamLoadEvolutionPlugins();GlamValidateAdTags();glam_dart_ge_tags=glam_dart_ge_tags+GlamAppendAdTag('');GlamCallAd();}
GlamDisplayAd();


/* viewAdJs via [/files/affiliate/js/viewAdJs_jsmin.js/min/l] on [www2a.glam.com]*/



