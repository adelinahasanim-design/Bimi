/* Bimi v2: a ProCredit-inspired, independent banking concept. All actions stay in this browser. */
'use strict';
Object.assign(icons,{search:'M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',close:'M6 6l12 12M6 18L18 6',swap:'M4 7h15l-4-4M20 17H5l4 4',copy:'M8 8h13v13H8zM16 8V3H3v13h5',calendar:'M4 5h16v16H4zM8 2v6m8-6v6M4 11h16',message:'M3 3h18v14H8l-5 4zM7 8h10m-10 4h7',globe:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M3 12h18M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18',store:'M3 10h18l-2-7H5zM4 10v11h16V10M9 21v-7h6v7',building:'M4 22V3h12v19M8 7h4m-4 4h4m-4 4h4M16 10h4v12M8 22v-3h4v3',spark:'M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3z'});
let hideBalances=false,transferTab='send',loanView='hub',activityFilter='all',activityQuery='',activityFrom='',activityTo='',accountTab='everyday';
const titles={dashboard:'Overview',accounts:'My accounts',transfers:'Payments & transfers',cards:'My cards',loans:'Loans',activity:'Activity',support:'Help & support'};
const navItems=[['dashboard','home','Overview'],['accounts','wallet','Accounts'],['transfers','send','Payments'],['cards','card','Cards'],['loans','loan','Loans'],['activity','history','Activity']];
const masked=n=>hideBalances?'€ ••••••':money(n);
const initials=n=>esc(n.split(/\s+/).filter(Boolean).map(x=>x[0]).slice(0,2).join(''));
function ensureState(){
 if(!state.v2){state.v2=true;state.beneficiaries=[{name:'Arben Berisha',iban:'XK050000000000000001',color:'peach'},{name:'Drita Gashi',iban:'XK050000000000000002',color:'lavender'},{name:'Luan Krasniqi',iban:'XK050000000000000003',color:'mint'}];state.requests=[];state.messages=[];state.paidBills=[];state.preferences={notifications:true,compact:false};
 const history=[['2026-09-21','Monthly salary',1850,'Salary'],['2026-09-22','Apartment rent',-425,'Home'],['2026-09-24','Viva Fresh',-74.8,'Shopping'],['2026-09-28','KESCO',-59.2,'Bills'],['2026-08-21','Monthly salary',1850,'Salary'],['2026-08-23','Apartment rent',-425,'Home'],['2026-08-25','Viva Fresh',-92.3,'Shopping']];state.tx.push(...history.map((t,i)=>({id:'SAMPLE-'+i,date:t[0],name:t[1],amount:t[2],desc:t[3]+' · sample history',category:t[3],kind:t[2]>0?'in':'out'})));
 }
 state.beneficiaries??=[];state.requests??=[];state.messages??=[];state.paidBills??=[];state.preferences??={notifications:true};
}
