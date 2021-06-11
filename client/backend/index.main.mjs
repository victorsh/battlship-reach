// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function attacher(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc3, ctc3, ctc3, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc3, ctc3, ctc3, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc3, ctc3, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc3, ctc3, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc3, ctc0, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc3, ctc0]);
  const ctc18 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc0, ctc0]);
  const ctc19 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc0]);
  const ctc20 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc0, ctc0]);
  const ctc21 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc0]);
  const ctc22 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc23 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  
  
  const v26 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v31] = txn1.data;
  const v34 = txn1.time;
  const v30 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v31), {
    at: './index.rsh:66:27:application',
    fs: ['at ./index.rsh:65:11:application call to [unknown function] (defined at: ./index.rsh:65:15:function exp)'],
    msg: 'acceptWager',
    who: 'attacher'
    });
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:68:7:dot', stdlib.UInt_max, 2), [ctc6, ctc0, ctc0], [v30, v31, v34], [v31, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn2) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc22, [stdlib.checkedBigNumberify('./index.rsh:68:7:dot', stdlib.UInt_max, 1), v30, v31, v34]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc23, [stdlib.checkedBigNumberify('./index.rsh:68:7:dot', stdlib.UInt_max, 1), v30, v31]);
    const [] = txn2.data;
    const v41 = txn2.time;
    const v38 = txn2.from;
    
    const v40 = stdlib.add(v31, v31);
    sim_r.txns.push({
      amt: v31,
      kind: 'to',
      tok: undefined
      });
    const v42 = stdlib.checkedBigNumberify('./index.rsh:71:36:decimal', stdlib.UInt_max, 0);
    const v43 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    const v297 = v41;
    const v299 = v40;
    
    if ((() => {
      const v56 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v56;})()) {
      const v58 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v59 = stdlib.gt(v42, stdlib.checkedBigNumberify('./index.rsh:76:42:decimal', stdlib.UInt_max, 0));
      const v60 = v58 ? v59 : false;
      sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:74:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v42, v297, v299]);
      sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:74:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v42, v299]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:74:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v260 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v263 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:165:14:decimal', stdlib.UInt_max, 2), v31);
      const v265 = v260 ? v30 : v38;
      sim_r.txns.push({
        amt: v263,
        kind: 'from',
        to: v265,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc11, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc11, []);
      sim_r.view = [ctc11, []];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv(3, 0, [], false, false));
    const [] = txn3.data;
    const v282 = txn3.time;
    const v279 = txn3.from;
    ;
    const v281 = stdlib.addressEq(v30, v279);
    stdlib.assert(v281, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:68:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'attacher'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:53:31:application',
      fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:68:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'attacher'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v41 = txn2.time;
    const v38 = txn2.from;
    const v40 = stdlib.add(v31, v31);
    ;
    let v42 = stdlib.checkedBigNumberify('./index.rsh:71:36:decimal', stdlib.UInt_max, 0);
    let v43 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v297 = v41;
    let v299 = v40;
    
    while ((() => {
      const v56 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v56;})()) {
      const v58 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v59 = stdlib.gt(v42, stdlib.checkedBigNumberify('./index.rsh:76:42:decimal', stdlib.UInt_max, 0));
      const v60 = v58 ? v59 : false;
      if (v60) {
        stdlib.protect(ctc1, await interact.seeOutcome(v43), {
          at: './index.rsh:78:30:application',
          fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:25:function exp)'],
          msg: 'seeOutcome',
          who: 'attacher'
          });
        
        }
      else {
        }
      const txn3 = await (ctc.recv(6, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10)));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc0, ctc0, ctc0], [v30, v31, v38, v42, v297, v299], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v30, v31, v38, v42, v297, v299]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v30, v31, v38, v42, v299]);
          const [] = txn4.data;
          const v245 = txn4.time;
          const v242 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v244 = stdlib.addressEq(v38, v242);
          stdlib.assert(v244, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:88:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'attacher'
            });
          sim_r.txns.push({
            amt: v299,
            kind: 'from',
            to: v38,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc11, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc11, []);
          sim_r.view = [ctc11, []];
          sim_r.isHalt = true;
          
          return sim_r;
          })));
        const [] = txn4.data;
        const v245 = txn4.time;
        const v242 = txn4.from;
        ;
        const v244 = stdlib.addressEq(v38, v242);
        stdlib.assert(v244, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:88:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'attacher'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:53:31:application',
          fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:88:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'attacher'
          });
        
        return;
        }
      else {
        const [v76] = txn3.data;
        const v79 = txn3.time;
        const v75 = txn3.from;
        ;
        const v78 = stdlib.addressEq(v30, v75);
        stdlib.assert(v78, {
          at: './index.rsh:88:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'attacher'
          });
        const v83 = stdlib.protect(ctc3, await interact.selectShips(), {
          at: './index.rsh:95:45:application',
          fs: ['at ./index.rsh:94:13:application call to [unknown function] (defined at: ./index.rsh:94:17:function exp)'],
          msg: 'selectShips',
          who: 'attacher'
          });
        const v85 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:60:31:application',
          fs: ['at ./index.rsh:96:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:94:13:application call to [unknown function] (defined at: ./index.rsh:94:17:function exp)'],
          msg: 'random',
          who: 'attacher'
          });
        const v86 = stdlib.digest(ctc4, [v85, v83]);
        
        const txn4 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:99:9:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc0, ctc2, ctc0, ctc0, ctc2], [v30, v31, v38, v42, v76, v79, v299, v86], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('./index.rsh:99:9:dot', stdlib.UInt_max, 6), v30, v31, v38, v42, v76, v79, v299]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('./index.rsh:99:9:dot', stdlib.UInt_max, 6), v30, v31, v38, v42, v76, v299]);
          const [v89] = txn4.data;
          const v92 = txn4.time;
          const v88 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v91 = stdlib.addressEq(v38, v88);
          stdlib.assert(v91, {
            at: './index.rsh:99:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          sim_r.nextSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 8), v30, v31, v38, v42, v76, v89, v92, v299]);
          sim_r.nextSt_noTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 8), v30, v31, v38, v42, v76, v89, v299]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          
          return sim_r;
          })));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv(9, 0, [], false, false));
          const [] = txn5.data;
          const v226 = txn5.time;
          const v223 = txn5.from;
          ;
          const v225 = stdlib.addressEq(v30, v223);
          stdlib.assert(v225, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:99:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'attacher'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:53:31:application',
            fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:99:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'attacher'
            });
          
          return;
          }
        else {
          const [v89] = txn4.data;
          const v92 = txn4.time;
          const v88 = txn4.from;
          ;
          const v91 = stdlib.addressEq(v38, v88);
          stdlib.assert(v91, {
            at: './index.rsh:99:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          const txn5 = await (ctc.recv(10, 1, [ctc3], false, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10)));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv(11, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), [ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc0, ctc0], [v30, v31, v38, v42, v76, v89, v92, v299], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v30, v31, v38, v42, v76, v89, v92, v299]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v30, v31, v38, v42, v76, v89, v299]);
              const [] = txn6.data;
              const v207 = txn6.time;
              const v204 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v206 = stdlib.addressEq(v38, v204);
              stdlib.assert(v206, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:109:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'attacher'
                });
              sim_r.txns.push({
                amt: v299,
                kind: 'from',
                to: v38,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc11, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc11, []);
              sim_r.view = [ctc11, []];
              sim_r.isHalt = true;
              
              return sim_r;
              })));
            const [] = txn6.data;
            const v207 = txn6.time;
            const v204 = txn6.from;
            ;
            const v206 = stdlib.addressEq(v38, v204);
            stdlib.assert(v206, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:109:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'attacher'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:53:31:application',
              fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:109:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'attacher'
              });
            
            return;
            }
          else {
            const [v98] = txn5.data;
            const v101 = txn5.time;
            const v97 = txn5.from;
            ;
            const v100 = stdlib.addressEq(v30, v97);
            stdlib.assert(v100, {
              at: './index.rsh:109:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'attacher'
              });
            const v105 = stdlib.protect(ctc3, await interact.guessShips(), {
              at: './index.rsh:113:56:application',
              fs: ['at ./index.rsh:112:13:application call to [unknown function] (defined at: ./index.rsh:112:17:function exp)'],
              msg: 'guessShips',
              who: 'attacher'
              });
            
            const txn6 = await (ctc.sendrecv(12, 1, stdlib.checkedBigNumberify('./index.rsh:115:9:dot', stdlib.UInt_max, 7), [ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc3, ctc0, ctc0, ctc3], [v30, v31, v38, v42, v76, v89, v98, v101, v299, v105], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:115:9:dot', stdlib.UInt_max, 10), v30, v31, v38, v42, v76, v89, v98, v101, v299]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:115:9:dot', stdlib.UInt_max, 10), v30, v31, v38, v42, v76, v89, v98, v299]);
              const [v107] = txn6.data;
              const v110 = txn6.time;
              const v106 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v109 = stdlib.addressEq(v38, v106);
              stdlib.assert(v109, {
                at: './index.rsh:115:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:116:15:after expr stmt semicolon', stdlib.UInt_max, 12), v30, v31, v38, v42, v76, v89, v98, v107, v110, v299]);
              sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:116:15:after expr stmt semicolon', stdlib.UInt_max, 12), v30, v31, v38, v42, v76, v89, v98, v107, v299]);
              sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:116:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              
              return sim_r;
              })));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.recv(13, 0, [], false, false));
              const [] = txn7.data;
              const v188 = txn7.time;
              const v185 = txn7.from;
              ;
              const v187 = stdlib.addressEq(v30, v185);
              stdlib.assert(v187, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:115:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'attacher'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:53:31:application',
                fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:115:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'attacher'
                });
              
              return;
              }
            else {
              const [v107] = txn6.data;
              const v110 = txn6.time;
              const v106 = txn6.from;
              ;
              const v109 = stdlib.addressEq(v38, v106);
              stdlib.assert(v109, {
                at: './index.rsh:115:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const txn7 = await (ctc.recv(14, 2, [ctc0, ctc3], false, false));
              const [v115, v116] = txn7.data;
              const v119 = txn7.time;
              const v114 = txn7.from;
              ;
              const v118 = stdlib.addressEq(v30, v114);
              stdlib.assert(v118, {
                at: './index.rsh:123:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v121 = stdlib.digest(ctc4, [v115, v116]);
              const v122 = stdlib.digestEq(v76, v121);
              stdlib.assert(v122, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:124:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              const txn8 = await (ctc.sendrecv(15, 2, stdlib.checkedBigNumberify('./index.rsh:130:9:dot', stdlib.UInt_max, 8), [ctc6, ctc0, ctc6, ctc0, ctc2, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc3], [v30, v31, v38, v42, v89, v98, v107, v116, v119, v299, v85, v83], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc3], true, true, false, (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:130:9:dot', stdlib.UInt_max, 14), v30, v31, v38, v42, v89, v98, v107, v116, v119, v299]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:130:9:dot', stdlib.UInt_max, 14), v30, v31, v38, v42, v89, v98, v107, v116, v299]);
                const [v128, v129] = txn8.data;
                const v132 = txn8.time;
                const v127 = txn8.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v131 = stdlib.addressEq(v38, v127);
                stdlib.assert(v131, {
                  at: './index.rsh:130:9:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'attacher'
                  });
                const v134 = stdlib.digest(ctc4, [v128, v129]);
                const v135 = stdlib.digestEq(v89, v134);
                stdlib.assert(v135, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:131:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'attacher'
                  });
                const v137 = stdlib.checkedBigNumberify('./index.rsh:134:40:decimal', stdlib.UInt_max, 0);
                const v138 = stdlib.checkedBigNumberify('./index.rsh:134:43:decimal', stdlib.UInt_max, 0);
                const v139 = stdlib.checkedBigNumberify('./index.rsh:134:37:decimal', stdlib.UInt_max, 0);
                const v300 = v132;
                const v302 = v299;
                
                if ((() => {
                  const v146 = stdlib.lt(v139, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, 9));
                  
                  return v146;})()) {
                  
                  sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:140:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v42, v98, v107, v116, v129, v137, v138, v139, v300, v302]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:140:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v42, v98, v107, v116, v129, v137, v138, v139, v302]);
                  sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:140:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                  sim_r.isHalt = false;
                  }
                else {
                  const v177 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:157:21:decimal', stdlib.UInt_max, 1));
                  let v178;
                  const v179 = stdlib.gt(v137, v138);
                  if (v179) {
                    v178 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                    }
                  else {
                    const v181 = stdlib.gt(v138, v137);
                    if (v181) {
                      v178 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                      }
                    else {
                      v178 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                      }
                    }
                  const cv42 = v177;
                  const cv43 = v178;
                  const cv297 = v300;
                  const cv299 = v302;
                  
                  (() => {
                    const v42 = cv42;
                    const v43 = cv43;
                    const v297 = cv297;
                    const v299 = cv299;
                    
                    if ((() => {
                      const v56 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                      
                      return v56;})()) {
                      const v58 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                      const v59 = stdlib.gt(v42, stdlib.checkedBigNumberify('./index.rsh:76:42:decimal', stdlib.UInt_max, 0));
                      const v60 = v58 ? v59 : false;
                      sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:74:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v42, v297, v299]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:74:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v42, v299]);
                      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:74:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                      sim_r.isHalt = false;
                      }
                    else {
                      const v260 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                      const v263 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:165:14:decimal', stdlib.UInt_max, 2), v31);
                      const v265 = v260 ? v30 : v38;
                      sim_r.txns.push({
                        amt: v263,
                        kind: 'from',
                        to: v265,
                        tok: undefined
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined
                        })
                      sim_r.nextSt = stdlib.digest(ctc11, []);
                      sim_r.nextSt_noTime = stdlib.digest(ctc11, []);
                      sim_r.view = [ctc11, []];
                      sim_r.isHalt = true;
                      }})();}
                return sim_r;
                })));
              const [v128, v129] = txn8.data;
              const v132 = txn8.time;
              const v127 = txn8.from;
              ;
              const v131 = stdlib.addressEq(v38, v127);
              stdlib.assert(v131, {
                at: './index.rsh:130:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v134 = stdlib.digest(ctc4, [v128, v129]);
              const v135 = stdlib.digestEq(v89, v134);
              stdlib.assert(v135, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:131:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              let v137 = stdlib.checkedBigNumberify('./index.rsh:134:40:decimal', stdlib.UInt_max, 0);
              let v138 = stdlib.checkedBigNumberify('./index.rsh:134:43:decimal', stdlib.UInt_max, 0);
              let v139 = stdlib.checkedBigNumberify('./index.rsh:134:37:decimal', stdlib.UInt_max, 0);
              let v300 = v132;
              let v302 = v299;
              
              while ((() => {
                const v146 = stdlib.lt(v139, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, 9));
                
                return v146;})()) {
                stdlib.protect(ctc1, await interact.loadingResult(v139), {
                  at: './index.rsh:138:33:application',
                  fs: ['at ./index.rsh:137:13:application call to [unknown function] (defined at: ./index.rsh:137:25:function exp)'],
                  msg: 'loadingResult',
                  who: 'attacher'
                  });
                
                const txn9 = await (ctc.sendrecv(18, 0, stdlib.checkedBigNumberify('./index.rsh:145:11:dot', stdlib.UInt_max, 11), [ctc6, ctc0, ctc6, ctc0, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0], [v30, v31, v38, v42, v98, v107, v116, v129, v137, v138, v139, v300, v302], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn9) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:145:11:dot', stdlib.UInt_max, 16), v30, v31, v38, v42, v98, v107, v116, v129, v137, v138, v139, v300, v302]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:145:11:dot', stdlib.UInt_max, 16), v30, v31, v38, v42, v98, v107, v116, v129, v137, v138, v139, v302]);
                  const [] = txn9.data;
                  const v157 = txn9.time;
                  const v154 = txn9.from;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v156 = stdlib.addressEq(v38, v154);
                  stdlib.assert(v156, {
                    at: './index.rsh:145:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'attacher'
                    });
                  const v158 = stdlib.add(v139, stdlib.checkedBigNumberify('./index.rsh:148:15:decimal', stdlib.UInt_max, 1));
                  const v160 = v129[v139];
                  const v162 = v98[v139];
                  const v164 = stdlib.eq(v160, v162);
                  const v166 = stdlib.add(v137, stdlib.checkedBigNumberify('./index.rsh:149:50:decimal', stdlib.UInt_max, 1));
                  const v167 = v164 ? v166 : v137;
                  const v169 = v116[v139];
                  const v171 = v107[v139];
                  const v173 = stdlib.eq(v169, v171);
                  const v175 = stdlib.add(v138, stdlib.checkedBigNumberify('./index.rsh:150:50:decimal', stdlib.UInt_max, 1));
                  const v176 = v173 ? v175 : v138;
                  const cv137 = v167;
                  const cv138 = v176;
                  const cv139 = v158;
                  const cv300 = v157;
                  const cv302 = v302;
                  
                  (() => {
                    const v137 = cv137;
                    const v138 = cv138;
                    const v139 = cv139;
                    const v300 = cv300;
                    const v302 = cv302;
                    
                    if ((() => {
                      const v146 = stdlib.lt(v139, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, 9));
                      
                      return v146;})()) {
                      
                      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:140:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v42, v98, v107, v116, v129, v137, v138, v139, v300, v302]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:140:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v42, v98, v107, v116, v129, v137, v138, v139, v302]);
                      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:140:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                      sim_r.isHalt = false;
                      }
                    else {
                      const v177 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:157:21:decimal', stdlib.UInt_max, 1));
                      let v178;
                      const v179 = stdlib.gt(v137, v138);
                      if (v179) {
                        v178 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                        }
                      else {
                        const v181 = stdlib.gt(v138, v137);
                        if (v181) {
                          v178 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                          }
                        else {
                          v178 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                          }
                        }
                      const cv42 = v177;
                      const cv43 = v178;
                      const cv297 = v300;
                      const cv299 = v302;
                      
                      (() => {
                        const v42 = cv42;
                        const v43 = cv43;
                        const v297 = cv297;
                        const v299 = cv299;
                        
                        if ((() => {
                          const v56 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                          
                          return v56;})()) {
                          const v58 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                          const v59 = stdlib.gt(v42, stdlib.checkedBigNumberify('./index.rsh:76:42:decimal', stdlib.UInt_max, 0));
                          const v60 = v58 ? v59 : false;
                          sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:74:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v42, v297, v299]);
                          sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:74:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v42, v299]);
                          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:74:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                          sim_r.isHalt = false;
                          }
                        else {
                          const v260 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                          const v263 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:165:14:decimal', stdlib.UInt_max, 2), v31);
                          const v265 = v260 ? v30 : v38;
                          sim_r.txns.push({
                            amt: v263,
                            kind: 'from',
                            to: v265,
                            tok: undefined
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.nextSt = stdlib.digest(ctc11, []);
                          sim_r.nextSt_noTime = stdlib.digest(ctc11, []);
                          sim_r.view = [ctc11, []];
                          sim_r.isHalt = true;
                          }})();}})();
                  return sim_r;
                  })));
                const [] = txn9.data;
                const v157 = txn9.time;
                const v154 = txn9.from;
                ;
                const v156 = stdlib.addressEq(v38, v154);
                stdlib.assert(v156, {
                  at: './index.rsh:145:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'attacher'
                  });
                const v158 = stdlib.add(v139, stdlib.checkedBigNumberify('./index.rsh:148:15:decimal', stdlib.UInt_max, 1));
                const v160 = v129[v139];
                const v162 = v98[v139];
                const v164 = stdlib.eq(v160, v162);
                const v166 = stdlib.add(v137, stdlib.checkedBigNumberify('./index.rsh:149:50:decimal', stdlib.UInt_max, 1));
                const v167 = v164 ? v166 : v137;
                const v169 = v116[v139];
                const v171 = v107[v139];
                const v173 = stdlib.eq(v169, v171);
                const v175 = stdlib.add(v138, stdlib.checkedBigNumberify('./index.rsh:150:50:decimal', stdlib.UInt_max, 1));
                const v176 = v173 ? v175 : v138;
                const cv137 = v167;
                const cv138 = v176;
                const cv139 = v158;
                const cv300 = v157;
                const cv302 = v302;
                
                v137 = cv137;
                v138 = cv138;
                v139 = cv139;
                v300 = cv300;
                v302 = cv302;
                
                continue;
                }
              const v177 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:157:21:decimal', stdlib.UInt_max, 1));
              let v178;
              const v179 = stdlib.gt(v137, v138);
              if (v179) {
                v178 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                const v181 = stdlib.gt(v138, v137);
                if (v181) {
                  v178 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  v178 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              const cv42 = v177;
              const cv43 = v178;
              const cv297 = v300;
              const cv299 = v302;
              
              v42 = cv42;
              v43 = cv43;
              v297 = cv297;
              v299 = cv299;
              
              continue;
              
              }
            }
          }
        }
      }
    const v260 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v263 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:165:14:decimal', stdlib.UInt_max, 2), v31);
    const v265 = v260 ? v30 : v38;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v43), {
      at: './index.rsh:169:26:application',
      fs: ['at ./index.rsh:168:9:application call to [unknown function] (defined at: ./index.rsh:168:21:function exp)'],
      msg: 'seeOutcome',
      who: 'attacher'
      });
    
    return;}
  
  
  };
export async function deployer(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc4 = stdlib.T_Digest;
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc4, ctc2, ctc2, ctc2, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc4, ctc2, ctc2, ctc2, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc4, ctc4, ctc2, ctc2, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc4, ctc4, ctc2, ctc2, ctc0]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc4, ctc4, ctc2, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc4, ctc4, ctc2, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc4, ctc4, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc4, ctc4, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc4, ctc0, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc4, ctc0]);
  const ctc18 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0, ctc0]);
  const ctc19 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0]);
  const ctc20 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc21 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  const ctc22 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v26 = await ctc.creationTime();
  const v24 = stdlib.protect(ctc0, interact.wager, 'for deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:61:7:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v26, v24], [v24, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc22, [stdlib.checkedBigNumberify('./index.rsh:61:7:dot', stdlib.UInt_max, 0), v26]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:61:7:dot', stdlib.UInt_max, 0)]);
    const [v31] = txn1.data;
    const v34 = txn1.time;
    const v30 = txn1.from;
    
    sim_r.txns.push({
      amt: v31,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('./index.rsh:62:13:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31, v34]);
    sim_r.nextSt_noTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('./index.rsh:62:13:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:62:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v31] = txn1.data;
  const v34 = txn1.time;
  const v30 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10)));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), [ctc6, ctc0, ctc0], [v30, v31, v34], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v30, v31, v34]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v30, v31]);
      const [] = txn3.data;
      const v282 = txn3.time;
      const v279 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v281 = stdlib.addressEq(v30, v279);
      stdlib.assert(v281, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:68:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'deployer'
        });
      sim_r.txns.push({
        amt: v31,
        kind: 'from',
        to: v30,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc11, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc11, []);
      sim_r.view = [ctc11, []];
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn3.data;
    const v282 = txn3.time;
    const v279 = txn3.from;
    ;
    const v281 = stdlib.addressEq(v30, v279);
    stdlib.assert(v281, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:68:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'deployer'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:53:31:application',
      fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:68:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'deployer'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v41 = txn2.time;
    const v38 = txn2.from;
    const v40 = stdlib.add(v31, v31);
    ;
    let v42 = stdlib.checkedBigNumberify('./index.rsh:71:36:decimal', stdlib.UInt_max, 0);
    let v43 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v297 = v41;
    let v299 = v40;
    
    while ((() => {
      const v56 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v56;})()) {
      const v58 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v59 = stdlib.gt(v42, stdlib.checkedBigNumberify('./index.rsh:76:42:decimal', stdlib.UInt_max, 0));
      const v60 = v58 ? v59 : false;
      if (v60) {
        stdlib.protect(ctc1, await interact.seeOutcome(v43), {
          at: './index.rsh:78:30:application',
          fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:25:function exp)'],
          msg: 'seeOutcome',
          who: 'deployer'
          });
        
        }
      else {
        }
      const v70 = stdlib.protect(ctc2, await interact.selectShips(), {
        at: './index.rsh:84:45:application',
        fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
        msg: 'selectShips',
        who: 'deployer'
        });
      const v72 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:85:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
        msg: 'random',
        who: 'deployer'
        });
      const v73 = stdlib.digest(ctc3, [v72, v70]);
      
      const txn3 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:88:9:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc0, ctc0, ctc0, ctc4], [v30, v31, v38, v42, v297, v299, v73], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc4], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:88:9:dot', stdlib.UInt_max, 4), v30, v31, v38, v42, v297, v299]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('./index.rsh:88:9:dot', stdlib.UInt_max, 4), v30, v31, v38, v42, v299]);
        const [v76] = txn3.data;
        const v79 = txn3.time;
        const v75 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v78 = stdlib.addressEq(v30, v75);
        stdlib.assert(v78, {
          at: './index.rsh:88:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'deployer'
          });
        sim_r.nextSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:89:15:after expr stmt semicolon', stdlib.UInt_max, 6), v30, v31, v38, v42, v76, v79, v299]);
        sim_r.nextSt_noTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:89:15:after expr stmt semicolon', stdlib.UInt_max, 6), v30, v31, v38, v42, v76, v299]);
        sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:89:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv(7, 0, [], false, false));
        const [] = txn4.data;
        const v245 = txn4.time;
        const v242 = txn4.from;
        ;
        const v244 = stdlib.addressEq(v38, v242);
        stdlib.assert(v244, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:88:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'deployer'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:53:31:application',
          fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:88:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'deployer'
          });
        
        return;
        }
      else {
        const [v76] = txn3.data;
        const v79 = txn3.time;
        const v75 = txn3.from;
        ;
        const v78 = stdlib.addressEq(v30, v75);
        stdlib.assert(v78, {
          at: './index.rsh:88:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'deployer'
          });
        const txn4 = await (ctc.recv(8, 1, [ctc4], false, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10)));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv(9, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc0, ctc4, ctc0, ctc0], [v30, v31, v38, v42, v76, v79, v299], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v30, v31, v38, v42, v76, v79, v299]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v30, v31, v38, v42, v76, v299]);
            const [] = txn5.data;
            const v226 = txn5.time;
            const v223 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v225 = stdlib.addressEq(v30, v223);
            stdlib.assert(v225, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:99:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'deployer'
              });
            sim_r.txns.push({
              amt: v299,
              kind: 'from',
              to: v30,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc11, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc11, []);
            sim_r.view = [ctc11, []];
            sim_r.isHalt = true;
            
            return sim_r;
            })));
          const [] = txn5.data;
          const v226 = txn5.time;
          const v223 = txn5.from;
          ;
          const v225 = stdlib.addressEq(v30, v223);
          stdlib.assert(v225, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:99:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'deployer'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:53:31:application',
            fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:99:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'deployer'
            });
          
          return;
          }
        else {
          const [v89] = txn4.data;
          const v92 = txn4.time;
          const v88 = txn4.from;
          ;
          const v91 = stdlib.addressEq(v38, v88);
          stdlib.assert(v91, {
            at: './index.rsh:99:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const v96 = stdlib.protect(ctc2, await interact.guessShips(), {
            at: './index.rsh:107:56:application',
            fs: ['at ./index.rsh:106:13:application call to [unknown function] (defined at: ./index.rsh:106:17:function exp)'],
            msg: 'guessShips',
            who: 'deployer'
            });
          
          const txn5 = await (ctc.sendrecv(10, 1, stdlib.checkedBigNumberify('./index.rsh:109:9:dot', stdlib.UInt_max, 6), [ctc6, ctc0, ctc6, ctc0, ctc4, ctc4, ctc0, ctc0, ctc2], [v30, v31, v38, v42, v76, v89, v92, v299, v96], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:109:9:dot', stdlib.UInt_max, 8), v30, v31, v38, v42, v76, v89, v92, v299]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:109:9:dot', stdlib.UInt_max, 8), v30, v31, v38, v42, v76, v89, v299]);
            const [v98] = txn5.data;
            const v101 = txn5.time;
            const v97 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v100 = stdlib.addressEq(v30, v97);
            stdlib.assert(v100, {
              at: './index.rsh:109:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'deployer'
              });
            sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:110:15:after expr stmt semicolon', stdlib.UInt_max, 10), v30, v31, v38, v42, v76, v89, v98, v101, v299]);
            sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:110:15:after expr stmt semicolon', stdlib.UInt_max, 10), v30, v31, v38, v42, v76, v89, v98, v299]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:110:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            
            return sim_r;
            })));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv(11, 0, [], false, false));
            const [] = txn6.data;
            const v207 = txn6.time;
            const v204 = txn6.from;
            ;
            const v206 = stdlib.addressEq(v38, v204);
            stdlib.assert(v206, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:109:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'deployer'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:53:31:application',
              fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:109:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'deployer'
              });
            
            return;
            }
          else {
            const [v98] = txn5.data;
            const v101 = txn5.time;
            const v97 = txn5.from;
            ;
            const v100 = stdlib.addressEq(v30, v97);
            stdlib.assert(v100, {
              at: './index.rsh:109:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'deployer'
              });
            const txn6 = await (ctc.recv(12, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10)));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv(13, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 7), [ctc6, ctc0, ctc6, ctc0, ctc4, ctc4, ctc2, ctc0, ctc0], [v30, v31, v38, v42, v76, v89, v98, v101, v299], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v30, v31, v38, v42, v76, v89, v98, v101, v299]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v30, v31, v38, v42, v76, v89, v98, v299]);
                const [] = txn7.data;
                const v188 = txn7.time;
                const v185 = txn7.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v187 = stdlib.addressEq(v30, v185);
                stdlib.assert(v187, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:115:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'deployer'
                  });
                sim_r.txns.push({
                  amt: v299,
                  kind: 'from',
                  to: v30,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc11, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc11, []);
                sim_r.view = [ctc11, []];
                sim_r.isHalt = true;
                
                return sim_r;
                })));
              const [] = txn7.data;
              const v188 = txn7.time;
              const v185 = txn7.from;
              ;
              const v187 = stdlib.addressEq(v30, v185);
              stdlib.assert(v187, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:115:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'deployer'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:53:31:application',
                fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:51:30:function exp)', 'at ./index.rsh:115:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'deployer'
                });
              
              return;
              }
            else {
              const [v107] = txn6.data;
              const v110 = txn6.time;
              const v106 = txn6.from;
              ;
              const v109 = stdlib.addressEq(v38, v106);
              stdlib.assert(v109, {
                at: './index.rsh:115:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const txn7 = await (ctc.sendrecv(14, 2, stdlib.checkedBigNumberify('./index.rsh:123:9:dot', stdlib.UInt_max, 8), [ctc6, ctc0, ctc6, ctc0, ctc4, ctc4, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2], [v30, v31, v38, v42, v76, v89, v98, v107, v110, v299, v72, v70], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc2], true, true, false, (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:123:9:dot', stdlib.UInt_max, 12), v30, v31, v38, v42, v76, v89, v98, v107, v110, v299]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:123:9:dot', stdlib.UInt_max, 12), v30, v31, v38, v42, v76, v89, v98, v107, v299]);
                const [v115, v116] = txn7.data;
                const v119 = txn7.time;
                const v114 = txn7.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v118 = stdlib.addressEq(v30, v114);
                stdlib.assert(v118, {
                  at: './index.rsh:123:9:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'deployer'
                  });
                const v121 = stdlib.digest(ctc3, [v115, v116]);
                const v122 = stdlib.digestEq(v76, v121);
                stdlib.assert(v122, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:124:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'deployer'
                  });
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:125:15:after expr stmt semicolon', stdlib.UInt_max, 14), v30, v31, v38, v42, v89, v98, v107, v116, v119, v299]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:125:15:after expr stmt semicolon', stdlib.UInt_max, 14), v30, v31, v38, v42, v89, v98, v107, v116, v299]);
                sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:125:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                sim_r.isHalt = false;
                
                return sim_r;
                })));
              const [v115, v116] = txn7.data;
              const v119 = txn7.time;
              const v114 = txn7.from;
              ;
              const v118 = stdlib.addressEq(v30, v114);
              stdlib.assert(v118, {
                at: './index.rsh:123:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v121 = stdlib.digest(ctc3, [v115, v116]);
              const v122 = stdlib.digestEq(v76, v121);
              stdlib.assert(v122, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:124:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'deployer'
                });
              const txn8 = await (ctc.recv(15, 2, [ctc0, ctc2], false, false));
              const [v128, v129] = txn8.data;
              const v132 = txn8.time;
              const v127 = txn8.from;
              ;
              const v131 = stdlib.addressEq(v38, v127);
              stdlib.assert(v131, {
                at: './index.rsh:130:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v134 = stdlib.digest(ctc3, [v128, v129]);
              const v135 = stdlib.digestEq(v89, v134);
              stdlib.assert(v135, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:131:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'deployer'
                });
              let v137 = stdlib.checkedBigNumberify('./index.rsh:134:40:decimal', stdlib.UInt_max, 0);
              let v138 = stdlib.checkedBigNumberify('./index.rsh:134:43:decimal', stdlib.UInt_max, 0);
              let v139 = stdlib.checkedBigNumberify('./index.rsh:134:37:decimal', stdlib.UInt_max, 0);
              let v300 = v132;
              let v302 = v299;
              
              while ((() => {
                const v146 = stdlib.lt(v139, stdlib.checkedBigNumberify('./index.rsh:11:19:decimal', stdlib.UInt_max, 9));
                
                return v146;})()) {
                stdlib.protect(ctc1, await interact.loadingResult(v139), {
                  at: './index.rsh:138:33:application',
                  fs: ['at ./index.rsh:137:13:application call to [unknown function] (defined at: ./index.rsh:137:25:function exp)'],
                  msg: 'loadingResult',
                  who: 'deployer'
                  });
                
                const txn9 = await (ctc.recv(18, 0, [], false, false));
                const [] = txn9.data;
                const v157 = txn9.time;
                const v154 = txn9.from;
                ;
                const v156 = stdlib.addressEq(v38, v154);
                stdlib.assert(v156, {
                  at: './index.rsh:145:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'deployer'
                  });
                const v158 = stdlib.add(v139, stdlib.checkedBigNumberify('./index.rsh:148:15:decimal', stdlib.UInt_max, 1));
                const v160 = v129[v139];
                const v162 = v98[v139];
                const v164 = stdlib.eq(v160, v162);
                const v166 = stdlib.add(v137, stdlib.checkedBigNumberify('./index.rsh:149:50:decimal', stdlib.UInt_max, 1));
                const v167 = v164 ? v166 : v137;
                const v169 = v116[v139];
                const v171 = v107[v139];
                const v173 = stdlib.eq(v169, v171);
                const v175 = stdlib.add(v138, stdlib.checkedBigNumberify('./index.rsh:150:50:decimal', stdlib.UInt_max, 1));
                const v176 = v173 ? v175 : v138;
                const cv137 = v167;
                const cv138 = v176;
                const cv139 = v158;
                const cv300 = v157;
                const cv302 = v302;
                
                v137 = cv137;
                v138 = cv138;
                v139 = cv139;
                v300 = cv300;
                v302 = cv302;
                
                continue;
                }
              const v177 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:157:21:decimal', stdlib.UInt_max, 1));
              let v178;
              const v179 = stdlib.gt(v137, v138);
              if (v179) {
                v178 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                const v181 = stdlib.gt(v138, v137);
                if (v181) {
                  v178 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  v178 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              const cv42 = v177;
              const cv43 = v178;
              const cv297 = v300;
              const cv299 = v302;
              
              v42 = cv42;
              v43 = cv43;
              v297 = cv297;
              v299 = cv299;
              
              continue;
              
              }
            }
          }
        }
      }
    const v260 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v263 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:165:14:decimal', stdlib.UInt_max, 2), v31);
    const v265 = v260 ? v30 : v38;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v43), {
      at: './index.rsh:169:26:application',
      fs: ['at ./index.rsh:168:9:application call to [unknown function] (defined at: ./index.rsh:168:21:function exp)'],
      msg: 'seeOutcome',
      who: 'deployer'
      });
    
    return;}
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
txn RekeyTo
global ZeroAddress
==
assert
txn OnCompletion
int OptIn
==
bz normal
global GroupSize
int 1
==
assert
b done
normal:
gtxna 0 ApplicationArgs 8
store 5
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
==
||
gtxn 2 Sender
byte "{{m10}}"
==
||
gtxn 2 Sender
byte "{{m11}}"
==
||
gtxn 2 Sender
byte "{{m12}}"
==
||
gtxn 2 Sender
byte "{{m13}}"
==
||
gtxn 2 Sender
byte "{{m14}}"
==
||
gtxn 2 Sender
byte "{{m15}}"
==
||
gtxn 2 Sender
byte "{{m18}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
byte base64(bA==)
global Round
app_global_put
int 0
txn NumAccounts
==
assert
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  mapArgSize: 165,
  mapDataKeys: 0,
  mapDataSize: 0,
  mapRecordSize: 33,
  stepargs: [null, {
    count: 9,
    size: 254
    }, {
    count: 9,
    size: 286
    }, {
    count: 9,
    size: 286
    }, null, null, {
    count: 9,
    size: 366
    }, {
    count: 9,
    size: 334
    }, {
    count: 9,
    size: 398
    }, {
    count: 9,
    size: 366
    }, {
    count: 9,
    size: 470
    }, {
    count: 9,
    size: 398
    }, {
    count: 9,
    size: 542
    }, {
    count: 9,
    size: 470
    }, {
    count: 9,
    size: 622
    }, {
    count: 9,
    size: 662
    }, null, null, {
    count: 9,
    size: 646
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 255
pop
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:61:7:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 255
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
byte base64()
load 1
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
load 255
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
pop
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:68:7:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 254
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
int 1
int 1
==
bz l0
byte base64()
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
gtxn 0 Sender
concat
int 0
itob
concat
load 254
dup
+
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
b checkAccts
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxn 0 Sender
load 255
int 1
int 2
==
select
==
assert
gtxn 4 Amount
int 2
load 254
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
dup
gtxn 4 LastValid
>=
assert
dup
gtxn 5 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
pop
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:68:62:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:68:62:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
dup
gtxn 5 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 32
store 250
pop
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:88:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:88:9:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
byte base64()
load 1
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 250
concat
load 251
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
pop
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:88:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:88:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 251
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
dup
gtxn 5 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 120
btoi
store 250
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 32
store 249
pop
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:99:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:99:9:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
byte base64()
load 1
==
assert
// compute state in HM_Set 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 249
concat
load 250
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 120
btoi
store 250
pop
// Handler 9
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:99:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:99:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 250
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
dup
gtxn 5 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 144
store 250
dup
substring 144 152
btoi
store 249
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 72
store 248
pop
// Handler 10
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:109:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:109:9:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
byte base64()
load 1
==
assert
// compute state in HM_Set 10
int 10
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 248
concat
load 249
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 144
store 250
dup
substring 144 152
btoi
store 249
pop
// Handler 11
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:109:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:109:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 249
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
dup
gtxn 5 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 144
store 250
dup
substring 144 216
store 249
dup
substring 216 224
btoi
store 248
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 72
store 247
pop
// Handler 12
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 10
int 10
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
concat
load 248
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:115:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:115:9:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
byte base64()
load 1
==
assert
// compute state in HM_Set 12
int 12
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
concat
load 247
concat
load 248
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 144
store 250
dup
substring 144 216
store 249
dup
substring 216 224
btoi
store 248
pop
// Handler 13
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 10
int 10
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
concat
load 248
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:115:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:115:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 248
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
dup
gtxn 5 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 144
store 250
dup
substring 144 216
store 249
dup
int 216
int 288
substring3
store 248
dup
int 288
int 296
substring3
btoi
store 247
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 246
dup
substring 8 80
store 245
pop
// Handler 14
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 12
int 12
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
concat
load 248
concat
load 247
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:123:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:123:9:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:124:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 251
load 246
itob
load 245
concat
keccak256
==
assert
byte base64()
load 1
==
assert
// compute state in HM_Set 14
int 14
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 250
concat
load 249
concat
load 248
concat
load 245
concat
load 247
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
dup
substring 112 184
store 250
dup
int 184
int 256
substring3
store 249
dup
int 256
int 328
substring3
store 248
dup
int 328
int 336
substring3
btoi
store 247
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 246
dup
substring 8 80
store 245
pop
// Handler 15
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 14
int 14
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
concat
load 248
concat
load 247
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:130:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:130:9:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:131:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 251
load 246
itob
load 245
concat
keccak256
==
assert
int 0
int 9
<
bz l0
byte base64()
load 1
==
assert
// compute state in HM_Set 16
int 16
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 250
concat
load 249
concat
load 248
concat
load 245
concat
int 0
itob
concat
int 0
itob
concat
int 0
itob
concat
load 247
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l0:
int 0
int 0
>
dup
store 243
bz l1
int 2
store 244
b l2
l1:
load 243
bz l3
int 0
store 244
b l4
l3:
int 1
store 244
l4:
l2:
load 244
int 1
==
bz l5
byte base64()
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
int 1
+
itob
concat
load 247
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l5:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
load 255
load 244
int 2
==
select
==
assert
gtxn 4 Amount
int 2
load 254
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 152
store 251
dup
substring 152 224
store 250
dup
int 224
int 296
substring3
store 249
dup
int 296
int 368
substring3
store 248
dup
int 368
int 376
substring3
btoi
store 247
dup
int 376
int 384
substring3
btoi
store 246
dup
int 384
int 392
substring3
btoi
store 245
dup
int 392
int 400
substring3
btoi
store 244
pop
// Handler 18
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 16
int 16
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
concat
load 248
concat
load 247
itob
concat
load 246
itob
concat
load 245
itob
concat
load 244
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:145:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:145:11:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
load 245
int 1
+
store 243
load 247
dup
int 1
+
load 248
int 8
load 245
*
dup
int 8
+
substring3
btoi
load 251
int 8
load 245
*
dup
int 8
+
substring3
btoi
==
select
store 242
load 246
dup
int 1
+
load 249
int 8
load 245
*
dup
int 8
+
substring3
btoi
load 250
int 8
load 245
*
dup
int 8
+
substring3
btoi
==
select
store 241
load 243
int 9
<
bz l0
byte base64()
load 1
==
assert
// compute state in HM_Set 16
int 16
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
concat
load 250
concat
load 249
concat
load 248
concat
load 242
itob
concat
load 241
itob
concat
load 243
itob
concat
load 244
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l0:
load 242
load 241
>
bz l1
int 2
store 240
b l2
l1:
load 241
load 242
>
bz l3
int 0
store 240
b l4
l3:
int 1
store 240
l4:
l2:
load 240
int 1
==
bz l5
byte base64()
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
int 1
+
itob
concat
load 244
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l5:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
load 255
load 240
int 2
==
select
==
assert
gtxn 4 Amount
int 2
load 254
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`],
  unsupported: [],
  version: 1,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[9]",
                "name": "v98",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v98",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v101",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[9]",
                "name": "v107",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v98",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v101",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v98",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v107",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v116",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v98",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v107",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v116",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v119",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T29",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v128",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v129",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T35",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T36",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v98",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v107",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v116",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v129",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v137",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v139",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v300",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v302",
                "type": "uint256"
              }
            ],
            "internalType": "struct T37",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T40",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e18",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v297",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v297",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[9]",
                "name": "v98",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v98",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v101",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[9]",
                "name": "v107",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v98",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v101",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v98",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v107",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v115",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v116",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v98",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v107",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v116",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v119",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T29",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v128",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v129",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T35",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T36",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v98",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v107",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v116",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v129",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v137",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v139",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v300",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v302",
                "type": "uint256"
              }
            ],
            "internalType": "struct T37",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T40",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m18",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v297",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v297",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v299",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382528251808201845260008082529251815283518083018490529051818501528351808203850181526060909101909352825192019190912090556129d7806100826000396000f3fe6080604052600436106100e15760003560e01c8063a44daa431161007f578063c449d69611610059578063c449d696146101ad578063daa95933146101c0578063df3ceab4146101d3578063e163d7c4146101e6576100e8565b8063a44daa4314610174578063b537725c14610187578063bed83c511461019a576100e8565b806356de2b46116100bb57806356de2b46146101285780635afe30821461013b5780639532ef011461014e5780639c7585ed14610161576100e8565b80632438df70146100ed57806325a98d5914610102578063491e0dbe14610115576100e8565b366100e857005b600080fd5b6101006100fb366004611fee565b6101f9565b005b610100610110366004611f43565b61030c565b610100610123366004611fdc565b610418565b610100610136366004611f28565b610723565b610100610149366004611fb9565b610826565b61010061015c366004611fcb565b610a6c565b61010061016f366004611f5f565b610b89565b610100610182366004611f28565b610d02565b610100610195366004611f71565b610ed5565b6101006101a8366004611f83565b610fd8565b6101006101bb366004611f95565b611183565b6101006101ce366004611fa7565b611282565b6101006101e1366004611f43565b611477565b6101006101f4366004611fee565b61166d565b60405161020d906001908390602001612624565b6040516020818303038152906040528051906020012060001c6000541461023357600080fd5b60008055610246600a6040830135612954565b431061025157600080fd5b3460208201351461026157600080fd5b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd8160405161029091906125ae565b60405180910390a16102a0611b54565b6102ad6020830183611f07565b81516001600160a01b0390911690528051602080840135918101829052825133604091820152818401805160009052805160019301929092529051439101526102f69080612954565b6020820151606001526103088161176a565b5050565b6040516103209060069083906020016125fa565b6040516020818303038152906040528051906020012060001c6000541461034657600080fd5b60008055610359600a60a0830135612954565b43101561036557600080fd5b341561037057600080fd5b3361037e6020830183611f07565b6001600160a01b03161461039157600080fd5b61039e6020820182611f07565b6040516001600160a01b03919091169060c083013580156108fc02916000818181858888f193505050501580156103d9573d6000803e3d6000fd5b507fd942081c00e0783013599d1067e28627907deb698319705d718c4f8638cceec581604051610409919061246b565b60405180910390a16000805533ff5b60405161042c906010908390602001612852565b6040516020818303038152906040528051906020012060001c6000541461045257600080fd5b60008055341561046157600080fd5b336104726060830160408401611f07565b6001600160a01b03161461048557600080fd5b7f9ab3065bb5cc6124d63d15bbe7e5b2ddb0ac3bf4bd32b2c6a15d074031a15109816040516104b49190612589565b60405180910390a16104c4611bad565b6104d16020830183611f07565b81516001600160a01b03909116905280516020808401359101526104fb6060830160408401611f07565b81516001600160a01b03909116604091820152815160608085013591015280516101208181019092529060808401906009908390839080828437600092019190915250508251608001919091525060408051610120818101909252906101a0840190600990839083908082843760009201919091525050825160a001919091525060408051610120818101909252906102c0840190600990839083908082843760009201919091525050825160c001919091525060408051610120818101909252906103e0840190600990839083908082843760009201919091525050825160e0019190915250608082016105408301356009811061060a57634e487b7160e01b600052603260045260246000fd5b60200201356103e083016105408401356009811061063857634e487b7160e01b600052603260045260246000fd5b60200201351461064d5761050082013561065d565b61065d6001610500840135612954565b6020820151526101a082016105408301356009811061068c57634e487b7160e01b600052603260045260246000fd5b60200201356102c08301610540840135600981106106ba57634e487b7160e01b600052603260045260246000fd5b6020020135146106cf576105208201356106df565b6106df6001610520840135612954565b60208083015101526106f76001610540840135612954565b6020820180516040019190915280514360609091015251610580830135608090910152610308816118cf565b604051610737906004908390602001612940565b6040516020818303038152906040528051906020012060001c6000541461075d57600080fd5b60008055610770600a6080830135612954565b43101561077c57600080fd5b341561078757600080fd5b336107986060830160408401611f07565b6001600160a01b0316146107ab57600080fd5b6107bb6060820160408301611f07565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f193505050501580156107f6573d6000803e3d6000fd5b507f52f29590b7a33c9f2af14c2e2858ae5418a18262d881789f018d972bc921885581604051610409919061241e565b60405161083a90600e908390602001612792565b6040516020818303038152906040528051906020012060001c6000541461086057600080fd5b60008055341561086f57600080fd5b336108806060830160408401611f07565b6001600160a01b03161461089357600080fd5b6040516108af90610440830135906104608401906020016125de565b60408051601f1981840301815291905280516020909101206080820135146108d657600080fd5b7f13a223441d633207cb5f75925ae8c30c0bb4b9c38f456fe2bdddd5506dd099a9816040516109059190612569565b60405180910390a1610915611bad565b6109226020830183611f07565b81516001600160a01b039091169052805160208084013591015261094c6060830160408401611f07565b81516001600160a01b03909116604091820152815160608085013591015280516101208181019092529060a08401906009908390839080828437600092019190915250508251608001919091525060408051610120818101909252906101c0840190600990839083908082843760009201919091525050825160a001919091525060408051610120818101909252906102e0840190600990839083908082843760009201919091525050825160c0019190915250604080516101208181019092529061046084019060099083908390808284376000920182905250845160e00193909352505060208083018051839052805190910182905280516040019190915280514360609091015251610420830135608090910152610308816118cf565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c60005414610aa957600080fd5b6000805534602082013514610abd57600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a1610b27604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a0015b60408051601f1981840301815291905280516020909101206000555050565b604051610b9d90600890839060200161260f565b6040516020818303038152906040528051906020012060001c60005414610bc357600080fd5b60008055610bd6600a60c0830135612954565b4310610be157600080fd5b3415610bec57600080fd5b33610bfa6020830183611f07565b6001600160a01b031614610c0d57600080fd5b7fb119b5f000672a135c60da3cad35917d0a2578b756000555e91b5b24e5d43b8381604051610c3c919061249c565b60405180910390a1610c4c611bf7565b610c596020830183611f07565b6001600160a01b0316815260208083013590820152610c7e6060830160408401611f07565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015260a080840135908301528051610120818101909252906101008401906009908390839080828437600092019190915250505060c08201524360e080830191909152820135610100820152604051610b6a90600a90839060200161264d565b604051610d16906004908390602001612940565b6040516020818303038152906040528051906020012060001c60005414610d3c57600080fd5b60008055610d4f600a6080830135612954565b4310610d5a57600080fd5b3415610d6557600080fd5b33610d736020830183611f07565b6001600160a01b031614610d8657600080fd5b7f5b0efdf573441f178439b5a8f6c1b19f0030d4dc9f308be7b6cb5a501bef75e081604051610db59190612402565b60405180910390a1610e0f6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b610e1c6020830183611f07565b6001600160a01b0316815260208083013590820152610e416060830160408401611f07565b6001600160a01b03908116604083810191825260608581013581860190815260c08088013560808089019182524360a0808b01918252808c0135858c01908152885160066020808301919091528d518d169a82019a909a52988c0151978901979097529751909816908601529151948401949094525192820192909252915160e08301525161010082015261012001610b6a565b604051610ee990600890839060200161260f565b6040516020818303038152906040528051906020012060001c60005414610f0f57600080fd5b60008055610f22600a60c0830135612954565b431015610f2e57600080fd5b3415610f3957600080fd5b33610f4a6060830160408401611f07565b6001600160a01b031614610f5d57600080fd5b610f6d6060820160408301611f07565b6040516001600160a01b03919091169060e083013580156108fc02916000818181858888f19350505050158015610fa8573d6000803e3d6000fd5b507f239047e7ecda813bd5d0deda901af2cfd51f309e8f9aa8f06ae255dc092fa8a48160405161040991906124c3565b604051610fec90600a908390602001612638565b6040516020818303038152906040528051906020012060001c6000541461101257600080fd5b60008055611026600a6101e0830135612954565b431061103157600080fd5b341561103c57600080fd5b3361104d6060830160408401611f07565b6001600160a01b03161461106057600080fd5b7f0cdc0cfaa7686287db47ae7494ae8f1a08b4daa035f10e19f0dc0d7f4cc292288160405161108f91906124f6565b60405180910390a161109f611c5b565b6110ac6020830183611f07565b6001600160a01b03168152602080830135908201526110d16060830160408401611f07565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015260a0808401359083015280516101208181019092529060c08401906009908390839080828437600092019190915250505060c082015260408051610120818101909252906102208401906009908390839080828437600092019190915250505060e082015243610100820152610200820135610120820152604051610b6a90600c9083906020016126f1565b60405161119790600a908390602001612638565b6040516020818303038152906040528051906020012060001c600054146111bd57600080fd5b600080556111d1600a6101e0830135612954565b4310156111dd57600080fd5b34156111e857600080fd5b336111f66020830183611f07565b6001600160a01b03161461120957600080fd5b6112166020820182611f07565b6040516001600160a01b03919091169061020083013580156108fc02916000818181858888f19350505050158015611252573d6000803e3d6000fd5b507f6c56c36996ccdee054b8c40ed596e1e2083a2c9d2d87d5aba42753ea19798c1881604051610409919061251d565b60405161129690600c9083906020016126dc565b6040516020818303038152906040528051906020012060001c600054146112bc57600080fd5b6000805534156112cb57600080fd5b336112d96020830183611f07565b6001600160a01b0316146112ec57600080fd5b60405161130890610340830135906103608401906020016125de565b60408051601f19818403018152919052805160209091012060808201351461132f57600080fd5b7f436154ca29e5488865822cc3b08aba7f1c29a22ade0bd4453652c9c74c6be9098160405161135e9190612542565b60405180910390a161136e611cb8565b61137b6020830183611f07565b6001600160a01b03168152602080830135908201526113a06060830160408401611f07565b6001600160a01b03166040808301919091526060808401359083015260a0830135608083015280516101208181019092529060c08401906009908390839080828437600092019190915250505060a082015260408051610120818101909252906101e08401906009908390839080828437600092019190915250505060c082015260408051610120818101909252906103608401906009908390839080828437600092019190915250505060e082015243610100820152610320820135610120820152604051610b6a90600e9083906020016127a7565b60405161148b9060069083906020016125fa565b6040516020818303038152906040528051906020012060001c600054146114b157600080fd5b600080556114c4600a60a0830135612954565b43106114cf57600080fd5b34156114da57600080fd5b336114eb6060830160408401611f07565b6001600160a01b0316146114fe57600080fd5b7fee312f330bc747f7ed8a854ea245bb93733f831d3c4296b2fd99db1023ff8f428160405161152d919061244e565b60405180910390a161158f60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b61159c6020830183611f07565b6001600160a01b03168152602080830135908201526115c16060830160408401611f07565b6001600160a01b03908116604083810191825260608581013581860190815260808088013581880190815260e0808a013560a0808b019182524360c0808d01918252808e0135858e019081528a5160086020808301919091528f518f169c82019c909c529a8e0151998b01999099529951909a16948801949094529351928601929092525194840194909452519282019290925291516101008301525161012082015261014001610b6a565b604051611681906001908390602001612624565b6040516020818303038152906040528051906020012060001c600054146116a757600080fd5b600080556116ba600a6040830135612954565b4310156116c657600080fd5b34156116d157600080fd5b336116df6020830183611f07565b6001600160a01b0316146116f257600080fd5b6116ff6020820182611f07565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f1935050505015801561173a573d6000803e3d6000fd5b507fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d856230138160405161040991906125ae565b6001816020015160200151141561187e576117c66040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840190815284516040908101518416818601908152838701805151606080890191825282518501516080808b01918252935182015160a0808c01918252875160049a81019a909a528b518b16978a0197909752965191880191909152925190961690850152935190830152915160c0820152905160e0820152610100015b60408051601f198184030181529190528051602090910120600055506118cc565b611886611d0e565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451931692019190915280830151015181516060015261030881611a19565b50565b60098160200151604001511015611998576118e8611d47565b8151516001600160a01b039081168252825160209081015181840152835160409081015190921682840152835160609081015181850152845160809081015181860152855160a09081015190860152855160c09081015190860152855160e090810151908601528286018051516101008701528051840151610120870152805185015161014087015280519092015161016086015290510151610180840152905161185d91601091849101612867565b6119a0611dd9565b81515181516001600160a01b03918216905282516020908101518351820152835160409081015184519316920191909152825160609081015183518201528184018051518451608090810191909152815190930151845160a00152805190910151835160c00152510151815160e0015261030881611a86565b805160600151600214611a3157805160400151611a35565b8051515b6001600160a01b03166108fc8260000151602001516002611a56919061296c565b6040518115909202916000818181858888f19350505050158015611a7e573d6000803e3d6000fd5b506000805533ff5b604080516020810190915260008152815160a08101516080909101511115611ab15760028152611ad2565b8151608081015160a0909101511115611acd5760008152611ad2565b600181525b611ada611b54565b82515181516001600160a01b0391821690528351602090810151835190910152835160409081015183519216910152825160600151611b1b90600190612954565b60208083018051929092528351825190910152835160c00151815160400152835160e00151905160600152611b4f8161176a565b505050565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001611ba86040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b6040518060400160405280611bc0611e3e565b8152602001611ba86040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001611c47611ea3565b815260200160008152602001600081525090565b60405180610140016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001611cab611ea3565b8152602001611c47611ea3565b60405180610140016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001611d01611ea3565b8152602001611cab611ea3565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081905b8152600060209091015290565b604051806101a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001611d89611ea3565b8152602001611d96611ea3565b8152602001611da3611ea3565b8152602001611db0611ea3565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060400160405280611d3a60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001611e80611ea3565b8152602001611e8d611ea3565b8152602001611e9a611ea3565b8152602001611ba85b6040518061012001604052806009906020820280368337509192915050565b80356001600160a01b0381168114611ed957600080fd5b919050565b600060e08284031215611eef578081fd5b50919050565b60006101008284031215611eef578081fd5b600060208284031215611f18578081fd5b611f2182611ec2565b9392505050565b600060e08284031215611f39578081fd5b611f218383611ede565b60006101008284031215611f55578081fd5b611f218383611ef5565b60006102208284031215611eef578081fd5b60006101208284031215611eef578081fd5b60006103408284031215611eef578081fd5b60006102408284031215611eef578081fd5b60006104808284031215611eef578081fd5b60006105808284031215611eef578081fd5b600060408284031215611eef578081fd5b60006105c08284031215611eef578081fd5b600060808284031215611eef578081fd5b61012080828437600081840152505050565b8060005b6009811015612034578151845260209384019390910190600101612015565b50505050565b6001600160a01b038061204c83611ec2565b168352602082013560208401528061206660408401611ec2565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b03806120ab83611ec2565b16835260208201356020840152806120c560408401611ec2565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b0361211382611ec2565b16825260208181013590830152604090810135910152565b6001600160a01b038061213d83611ec2565b168352602082013560208401528061215760408401611ec2565b16604084015250606081013560608301526080810135608083015260a081013560a083015261012060c0820160c08401376101e0818101359083015261020090810135910152565b6001600160a01b036121b082611ec2565b168252602081013560208301526121c960408201611ec2565b6001600160a01b038116604084015250606081013560608301526080810135608083015260a081013560a083015261220760c0830160c08301611fff565b6101e0612218818401828401611fff565b50610300818101359083015261032090810135910152565b6001600160a01b0361224182611ec2565b1682526020810135602083015261225a60408201611ec2565b6001600160a01b038116604084015250606081013560608301526080810135608083015261228e60a0830160a08301611fff565b6101c061229f818401828401611fff565b506102e06122b1818401828401611fff565b50610400818101359083015261042090810135910152565b8035825261012060208201602084013760006101408301525050565b6122ff826122f283611ec2565b6001600160a01b03169052565b6020810135602083015261231560408201611ec2565b6001600160a01b0381166040840152506060810135606083015261233f6080830160808301611fff565b6101a0612350818401828401611fff565b506102c0612362818401828401611fff565b506103e0612374818401828401611fff565b50610500818101359083015261052080820135908301526105408082013590830152610560808201359083015261058090810135910152565b6001600160a01b03806123bf83611ec2565b16835260208201356020840152806123d960408401611ec2565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b60e0810161241082846123ad565b60c092830135919092015290565b60e0810161242c82846123ad565b60c083013580151580821461244057600080fd5b8060c0850152505092915050565b610100810161245d828461203a565b60e092830135919092015290565b610100810161247a828461203a565b60e083013580151580821461248e57600080fd5b8060e0850152505092915050565b61022081016124ab8284612099565b61010061012081850182850137506000815292915050565b61012081016124d28284612099565b610100808401358015158082146124e857600080fd5b808386015250505092915050565b6103408101612505828461212b565b61022061012081850182850137506000815292915050565b610240810161252c828461212b565b610220808401358015158082146124e857600080fd5b6104808101612551828461219f565b6103406125628184018286016122c9565b5092915050565b61058081016125788284612230565b6104406125628184018286016122c9565b6105c0810161259882846122e5565b6105a0808401358015158082146124e857600080fd5b608081016125bc8284612102565b60608301358015158082146125d057600080fd5b806060850152505092915050565b8281526101408101610120836020840137600081529392505050565b8281526101008101611f21602083018461203a565b8281526101208101611f216020830184612099565b82815260808101611f216020830184612102565b8281526102408101611f21602083018461212b565b60006102408201905083825260018060a01b03835116602083015260208301516040830152604083015161268c60608401826001600160a01b03169052565b5060608301516080830152608083015160a083015260a083015160c083015260c08301516126bd60e0840182612011565b5060e08301516102008301526101008301516102208301529392505050565b8281526103608101611f21602083018461219f565b82815281516001600160a01b03166020820152610360810160208301516040830152604083015161272d60608401826001600160a01b03169052565b5060608301516080830152608083015160a083015260a083015160c083015260c083015161275e60e0840182612011565b5060e0830151612772610200840182612011565b506101008301516103208301526101208301516103408301529392505050565b8281526104608101611f216020830184612230565b82815281516001600160a01b0316602082015261046081016020830151604083015260408301516127e360608401826001600160a01b03169052565b5060608301516080830152608083015160a083015260a083015161280a60c0840182612011565b5060c083015161281e6101e0840182612011565b5060e0830151612832610300840182612011565b506101008301516104208301526101208301516104408301529392505050565b8281526105c08101611f2160208301846122e5565b82815281516001600160a01b031660208201526105c081016020830151604083015260408301516128a360608401826001600160a01b03169052565b506060830151608083015260808301516128c060a0840182612011565b5060a08301516128d46101c0840182612011565b5060c08301516128e86102e0840182612011565b5060e08301516128fc610400840182612011565b506101008301516105208301526101208301516105408301526101408301516105608301526101608301516105808301526101808301516105a08301529392505050565b82815260e08101611f2160208301846123ad565b600082198211156129675761296761298b565b500190565b60008160001904831182151516156129865761298661298b565b500290565b634e487b7160e01b600052601160045260246000fdfea264697066735822122004dd978f4e451418a63e7062df08e2d4853b20022e578046402c779b3e6f655764736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

