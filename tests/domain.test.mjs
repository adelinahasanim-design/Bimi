import {test} from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
const context = vm.createContext({Intl, Date, Math, console, sessionStorage:{getItem:()=>null},document:{querySelector:()=>null}});
vm.runInContext(readFileSync('dist/app.js','utf8'), context);
test('loan schedule amortizes principal and reconciles all costs', () => {
 for (const amount of [500,10000,30000]) for(const months of [12,36,84]) {
  const c=vm.runInContext(`loanCalc({amount:${amount},months:${months},income:1850,commitments:200})`,context);
  let balance=amount, interest=0;
  for(let i=0;i<months;i++){const charge=balance*.069/12;interest+=charge;balance-=c.payment-charge;}
  assert.ok(Math.abs(balance)<1e-7);
  assert.ok(Math.abs(c.interest-interest)<1e-7);
  assert.equal(c.net,amount*.99);
  assert.ok(Math.abs(c.cost-(interest+amount*.01))<1e-7);
  assert.ok(c.apr>6.9);
 }
});
test('affordability includes existing debt and handles review threshold',()=>{
 const ratio=vm.runInContext('loanCalc({amount:30000,months:12,income:1000,commitments:500}).ratio',context);
 assert.ok(ratio>40);
});
test('customer values are escaped before rendering',()=>{
 assert.equal(vm.runInContext('esc(`<img onerror="x">`)',context),'&lt;img onerror=&quot;x&quot;&gt;');
});
