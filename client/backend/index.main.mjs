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
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc3, ctc3, ctc3, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc3, ctc3, ctc3, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc3, ctc3, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc3, ctc3, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc3, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc3, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc0, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc0]);
  const ctc18 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc0, ctc0]);
  const ctc19 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc0]);
  const ctc20 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc21 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  
  
  const v26 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v31] = txn1.data;
  const v34 = txn1.time;
  const v30 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v31), {
    at: './index.rsh:67:27:application',
    fs: ['at ./index.rsh:66:11:application call to [unknown function] (defined at: ./index.rsh:66:15:function exp)'],
    msg: 'acceptWager',
    who: 'attacher'
    });
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:76:7:dot', stdlib.UInt_max, 2), [ctc6, ctc0, ctc0], [v30, v31, v34], [v31, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn2) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('./index.rsh:76:7:dot', stdlib.UInt_max, 1), v30, v31, v34]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('./index.rsh:76:7:dot', stdlib.UInt_max, 1), v30, v31]);
    const [] = txn2.data;
    const v41 = txn2.time;
    const v38 = txn2.from;
    
    const v40 = stdlib.add(v31, v31);
    sim_r.txns.push({
      amt: v31,
      kind: 'to',
      tok: undefined
      });
    const v43 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    const v378 = v41;
    const v380 = v40;
    
    if ((() => {
      const v56 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v56;})()) {
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:82:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v378, v380]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:82:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v380]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:82:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v347 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v350 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:218:14:decimal', stdlib.UInt_max, 2), v31);
      const v352 = v347 ? v30 : v38;
      sim_r.txns.push({
        amt: v350,
        kind: 'from',
        to: v352,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc9, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
      sim_r.view = [ctc9, []];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv(3, 0, [], false, false));
    const [] = txn3.data;
    const v363 = txn3.time;
    const v360 = txn3.from;
    ;
    const v362 = stdlib.addressEq(v30, v360);
    stdlib.assert(v362, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:76:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'attacher'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:54:31:application',
      fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:76:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    let v43 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v378 = v41;
    let v380 = v40;
    
    while ((() => {
      const v56 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v56;})()) {
      const txn3 = await (ctc.recv(6, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10)));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3), [ctc6, ctc0, ctc6, ctc0, ctc0], [v30, v31, v38, v378, v380], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v30, v31, v38, v378, v380]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v30, v31, v38, v380]);
          const [] = txn4.data;
          const v332 = txn4.time;
          const v329 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v331 = stdlib.addressEq(v38, v329);
          stdlib.assert(v331, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:90:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'attacher'
            });
          sim_r.txns.push({
            amt: v380,
            kind: 'from',
            to: v38,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc9, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
          sim_r.view = [ctc9, []];
          sim_r.isHalt = true;
          
          return sim_r;
          })));
        const [] = txn4.data;
        const v332 = txn4.time;
        const v329 = txn4.from;
        ;
        const v331 = stdlib.addressEq(v38, v329);
        stdlib.assert(v331, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:90:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'attacher'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:54:31:application',
          fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:90:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'attacher'
          });
        
        return;
        }
      else {
        const [v67] = txn3.data;
        const v70 = txn3.time;
        const v66 = txn3.from;
        ;
        const v69 = stdlib.addressEq(v30, v66);
        stdlib.assert(v69, {
          at: './index.rsh:90:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'attacher'
          });
        const v74 = stdlib.protect(ctc3, await interact.selectShips(), {
          at: './index.rsh:97:45:application',
          fs: ['at ./index.rsh:96:13:application call to [unknown function] (defined at: ./index.rsh:96:17:function exp)'],
          msg: 'selectShips',
          who: 'attacher'
          });
        const v76 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:60:31:application',
          fs: ['at ./index.rsh:98:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:96:13:application call to [unknown function] (defined at: ./index.rsh:96:17:function exp)'],
          msg: 'random',
          who: 'attacher'
          });
        const v77 = stdlib.digest(ctc4, [v76, v74]);
        
        const txn4 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:101:9:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc2, ctc0, ctc0, ctc2], [v30, v31, v38, v67, v70, v380, v77], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:101:9:dot', stdlib.UInt_max, 6), v30, v31, v38, v67, v70, v380]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('./index.rsh:101:9:dot', stdlib.UInt_max, 6), v30, v31, v38, v67, v380]);
          const [v80] = txn4.data;
          const v83 = txn4.time;
          const v79 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v82 = stdlib.addressEq(v38, v79);
          stdlib.assert(v82, {
            at: './index.rsh:101:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          sim_r.nextSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:102:15:after expr stmt semicolon', stdlib.UInt_max, 8), v30, v31, v38, v67, v80, v83, v380]);
          sim_r.nextSt_noTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:102:15:after expr stmt semicolon', stdlib.UInt_max, 8), v30, v31, v38, v67, v80, v380]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:102:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          
          return sim_r;
          })));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv(9, 0, [], false, false));
          const [] = txn5.data;
          const v313 = txn5.time;
          const v310 = txn5.from;
          ;
          const v312 = stdlib.addressEq(v30, v310);
          stdlib.assert(v312, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:101:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'attacher'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:54:31:application',
            fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:101:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'attacher'
            });
          
          return;
          }
        else {
          const [v80] = txn4.data;
          const v83 = txn4.time;
          const v79 = txn4.from;
          ;
          const v82 = stdlib.addressEq(v38, v79);
          stdlib.assert(v82, {
            at: './index.rsh:101:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          const txn5 = await (ctc.recv(10, 1, [ctc3], false, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10)));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv(11, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc2, ctc2, ctc0, ctc0], [v30, v31, v38, v67, v80, v83, v380], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v30, v31, v38, v67, v80, v83, v380]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v30, v31, v38, v67, v80, v380]);
              const [] = txn6.data;
              const v294 = txn6.time;
              const v291 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v293 = stdlib.addressEq(v38, v291);
              stdlib.assert(v293, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:111:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'attacher'
                });
              sim_r.txns.push({
                amt: v380,
                kind: 'from',
                to: v38,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.view = [ctc9, []];
              sim_r.isHalt = true;
              
              return sim_r;
              })));
            const [] = txn6.data;
            const v294 = txn6.time;
            const v291 = txn6.from;
            ;
            const v293 = stdlib.addressEq(v38, v291);
            stdlib.assert(v293, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:111:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'attacher'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:54:31:application',
              fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:111:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'attacher'
              });
            
            return;
            }
          else {
            const [v89] = txn5.data;
            const v92 = txn5.time;
            const v88 = txn5.from;
            ;
            const v91 = stdlib.addressEq(v30, v88);
            stdlib.assert(v91, {
              at: './index.rsh:111:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'attacher'
              });
            const v96 = stdlib.protect(ctc3, await interact.guessShips(), {
              at: './index.rsh:115:56:application',
              fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:17:function exp)'],
              msg: 'guessShips',
              who: 'attacher'
              });
            
            const txn6 = await (ctc.sendrecv(12, 1, stdlib.checkedBigNumberify('./index.rsh:117:9:dot', stdlib.UInt_max, 6), [ctc6, ctc0, ctc6, ctc2, ctc2, ctc3, ctc0, ctc0, ctc3], [v30, v31, v38, v67, v80, v89, v92, v380, v96], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:117:9:dot', stdlib.UInt_max, 10), v30, v31, v38, v67, v80, v89, v92, v380]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:117:9:dot', stdlib.UInt_max, 10), v30, v31, v38, v67, v80, v89, v380]);
              const [v98] = txn6.data;
              const v101 = txn6.time;
              const v97 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v100 = stdlib.addressEq(v38, v97);
              stdlib.assert(v100, {
                at: './index.rsh:117:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:118:15:after expr stmt semicolon', stdlib.UInt_max, 12), v30, v31, v38, v67, v80, v89, v98, v101, v380]);
              sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:118:15:after expr stmt semicolon', stdlib.UInt_max, 12), v30, v31, v38, v67, v80, v89, v98, v380]);
              sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:118:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              
              return sim_r;
              })));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.recv(13, 0, [], false, false));
              const [] = txn7.data;
              const v275 = txn7.time;
              const v272 = txn7.from;
              ;
              const v274 = stdlib.addressEq(v30, v272);
              stdlib.assert(v274, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:117:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'attacher'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:54:31:application',
                fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:117:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'attacher'
                });
              
              return;
              }
            else {
              const [v98] = txn6.data;
              const v101 = txn6.time;
              const v97 = txn6.from;
              ;
              const v100 = stdlib.addressEq(v38, v97);
              stdlib.assert(v100, {
                at: './index.rsh:117:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const txn7 = await (ctc.recv(14, 2, [ctc0, ctc3], false, false));
              const [v106, v107] = txn7.data;
              const v110 = txn7.time;
              const v105 = txn7.from;
              ;
              const v109 = stdlib.addressEq(v30, v105);
              stdlib.assert(v109, {
                at: './index.rsh:125:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v112 = stdlib.digest(ctc4, [v106, v107]);
              const v113 = stdlib.digestEq(v67, v112);
              stdlib.assert(v113, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:126:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              const txn8 = await (ctc.sendrecv(15, 2, stdlib.checkedBigNumberify('./index.rsh:132:9:dot', stdlib.UInt_max, 7), [ctc6, ctc0, ctc6, ctc2, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc3], [v30, v31, v38, v80, v89, v98, v107, v110, v380, v76, v74], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc3], true, true, false, (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:132:9:dot', stdlib.UInt_max, 14), v30, v31, v38, v80, v89, v98, v107, v110, v380]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:132:9:dot', stdlib.UInt_max, 14), v30, v31, v38, v80, v89, v98, v107, v380]);
                const [v119, v120] = txn8.data;
                const v123 = txn8.time;
                const v118 = txn8.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v122 = stdlib.addressEq(v38, v118);
                stdlib.assert(v122, {
                  at: './index.rsh:132:9:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'attacher'
                  });
                const v125 = stdlib.digest(ctc4, [v119, v120]);
                const v126 = stdlib.digestEq(v80, v125);
                stdlib.assert(v126, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:133:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'attacher'
                  });
                const v128 = v120[stdlib.checkedBigNumberify('./index.rsh:173:34:array ref', stdlib.UInt_max, 0)];
                const v129 = v89[stdlib.checkedBigNumberify('./index.rsh:173:47:array ref', stdlib.UInt_max, 0)];
                const v131 = stdlib.eq(v128, v129);
                const v133 = v131 ? stdlib.checkedBigNumberify('./index.rsh:173:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:173:58:decimal', stdlib.UInt_max, 0);
                const v134 = v107[stdlib.checkedBigNumberify('./index.rsh:174:34:array ref', stdlib.UInt_max, 0)];
                const v135 = v98[stdlib.checkedBigNumberify('./index.rsh:174:47:array ref', stdlib.UInt_max, 0)];
                const v137 = stdlib.eq(v134, v135);
                const v139 = v137 ? stdlib.checkedBigNumberify('./index.rsh:174:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:174:58:decimal', stdlib.UInt_max, 0);
                const v140 = v120[stdlib.checkedBigNumberify('./index.rsh:176:34:array ref', stdlib.UInt_max, 1)];
                const v141 = v89[stdlib.checkedBigNumberify('./index.rsh:176:47:array ref', stdlib.UInt_max, 1)];
                const v143 = stdlib.eq(v140, v141);
                const v145 = v143 ? stdlib.checkedBigNumberify('./index.rsh:176:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:176:58:decimal', stdlib.UInt_max, 0);
                const v146 = v107[stdlib.checkedBigNumberify('./index.rsh:177:34:array ref', stdlib.UInt_max, 1)];
                const v147 = v98[stdlib.checkedBigNumberify('./index.rsh:177:47:array ref', stdlib.UInt_max, 1)];
                const v149 = stdlib.eq(v146, v147);
                const v151 = v149 ? stdlib.checkedBigNumberify('./index.rsh:177:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:177:58:decimal', stdlib.UInt_max, 0);
                const v152 = v120[stdlib.checkedBigNumberify('./index.rsh:179:34:array ref', stdlib.UInt_max, 2)];
                const v153 = v89[stdlib.checkedBigNumberify('./index.rsh:179:47:array ref', stdlib.UInt_max, 2)];
                const v155 = stdlib.eq(v152, v153);
                const v157 = v155 ? stdlib.checkedBigNumberify('./index.rsh:179:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:179:58:decimal', stdlib.UInt_max, 0);
                const v158 = v107[stdlib.checkedBigNumberify('./index.rsh:180:34:array ref', stdlib.UInt_max, 2)];
                const v159 = v98[stdlib.checkedBigNumberify('./index.rsh:180:47:array ref', stdlib.UInt_max, 2)];
                const v161 = stdlib.eq(v158, v159);
                const v163 = v161 ? stdlib.checkedBigNumberify('./index.rsh:180:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:180:58:decimal', stdlib.UInt_max, 0);
                const v164 = v120[stdlib.checkedBigNumberify('./index.rsh:182:34:array ref', stdlib.UInt_max, 3)];
                const v165 = v89[stdlib.checkedBigNumberify('./index.rsh:182:47:array ref', stdlib.UInt_max, 3)];
                const v167 = stdlib.eq(v164, v165);
                const v169 = v167 ? stdlib.checkedBigNumberify('./index.rsh:182:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:182:58:decimal', stdlib.UInt_max, 0);
                const v170 = v107[stdlib.checkedBigNumberify('./index.rsh:183:34:array ref', stdlib.UInt_max, 3)];
                const v171 = v98[stdlib.checkedBigNumberify('./index.rsh:183:47:array ref', stdlib.UInt_max, 3)];
                const v173 = stdlib.eq(v170, v171);
                const v175 = v173 ? stdlib.checkedBigNumberify('./index.rsh:183:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:183:58:decimal', stdlib.UInt_max, 0);
                const v176 = v120[stdlib.checkedBigNumberify('./index.rsh:185:34:array ref', stdlib.UInt_max, 4)];
                const v177 = v89[stdlib.checkedBigNumberify('./index.rsh:185:47:array ref', stdlib.UInt_max, 4)];
                const v179 = stdlib.eq(v176, v177);
                const v181 = v179 ? stdlib.checkedBigNumberify('./index.rsh:185:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:185:58:decimal', stdlib.UInt_max, 0);
                const v182 = v107[stdlib.checkedBigNumberify('./index.rsh:186:34:array ref', stdlib.UInt_max, 4)];
                const v183 = v98[stdlib.checkedBigNumberify('./index.rsh:186:47:array ref', stdlib.UInt_max, 4)];
                const v185 = stdlib.eq(v182, v183);
                const v187 = v185 ? stdlib.checkedBigNumberify('./index.rsh:186:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:186:58:decimal', stdlib.UInt_max, 0);
                const v188 = v120[stdlib.checkedBigNumberify('./index.rsh:188:34:array ref', stdlib.UInt_max, 5)];
                const v189 = v89[stdlib.checkedBigNumberify('./index.rsh:188:47:array ref', stdlib.UInt_max, 5)];
                const v191 = stdlib.eq(v188, v189);
                const v193 = v191 ? stdlib.checkedBigNumberify('./index.rsh:188:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:188:58:decimal', stdlib.UInt_max, 0);
                const v194 = v107[stdlib.checkedBigNumberify('./index.rsh:189:34:array ref', stdlib.UInt_max, 5)];
                const v195 = v98[stdlib.checkedBigNumberify('./index.rsh:189:47:array ref', stdlib.UInt_max, 5)];
                const v197 = stdlib.eq(v194, v195);
                const v199 = v197 ? stdlib.checkedBigNumberify('./index.rsh:189:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:189:58:decimal', stdlib.UInt_max, 0);
                const v200 = v120[stdlib.checkedBigNumberify('./index.rsh:191:34:array ref', stdlib.UInt_max, 6)];
                const v201 = v89[stdlib.checkedBigNumberify('./index.rsh:191:47:array ref', stdlib.UInt_max, 6)];
                const v203 = stdlib.eq(v200, v201);
                const v205 = v203 ? stdlib.checkedBigNumberify('./index.rsh:191:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:191:58:decimal', stdlib.UInt_max, 0);
                const v206 = v107[stdlib.checkedBigNumberify('./index.rsh:192:34:array ref', stdlib.UInt_max, 6)];
                const v207 = v98[stdlib.checkedBigNumberify('./index.rsh:192:47:array ref', stdlib.UInt_max, 6)];
                const v209 = stdlib.eq(v206, v207);
                const v211 = v209 ? stdlib.checkedBigNumberify('./index.rsh:192:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:192:58:decimal', stdlib.UInt_max, 0);
                const v212 = v120[stdlib.checkedBigNumberify('./index.rsh:194:34:array ref', stdlib.UInt_max, 7)];
                const v213 = v89[stdlib.checkedBigNumberify('./index.rsh:194:47:array ref', stdlib.UInt_max, 7)];
                const v215 = stdlib.eq(v212, v213);
                const v217 = v215 ? stdlib.checkedBigNumberify('./index.rsh:194:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:194:58:decimal', stdlib.UInt_max, 0);
                const v218 = v107[stdlib.checkedBigNumberify('./index.rsh:195:34:array ref', stdlib.UInt_max, 7)];
                const v219 = v98[stdlib.checkedBigNumberify('./index.rsh:195:47:array ref', stdlib.UInt_max, 7)];
                const v221 = stdlib.eq(v218, v219);
                const v223 = v221 ? stdlib.checkedBigNumberify('./index.rsh:195:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:195:58:decimal', stdlib.UInt_max, 0);
                const v224 = v120[stdlib.checkedBigNumberify('./index.rsh:197:34:array ref', stdlib.UInt_max, 8)];
                const v225 = v89[stdlib.checkedBigNumberify('./index.rsh:197:47:array ref', stdlib.UInt_max, 8)];
                const v227 = stdlib.eq(v224, v225);
                const v229 = v227 ? stdlib.checkedBigNumberify('./index.rsh:197:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:197:58:decimal', stdlib.UInt_max, 0);
                const v230 = v107[stdlib.checkedBigNumberify('./index.rsh:198:34:array ref', stdlib.UInt_max, 8)];
                const v231 = v98[stdlib.checkedBigNumberify('./index.rsh:198:47:array ref', stdlib.UInt_max, 8)];
                const v233 = stdlib.eq(v230, v231);
                const v235 = v233 ? stdlib.checkedBigNumberify('./index.rsh:198:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:198:58:decimal', stdlib.UInt_max, 0);
                const v236 = stdlib.add(v133, v145);
                const v237 = stdlib.add(v236, v157);
                const v238 = stdlib.add(v237, v169);
                const v239 = stdlib.add(v238, v181);
                const v240 = stdlib.add(v239, v193);
                const v241 = stdlib.add(v240, v205);
                const v242 = stdlib.add(v241, v217);
                const v243 = stdlib.add(v242, v229);
                const v244 = stdlib.add(v139, v151);
                const v245 = stdlib.add(v244, v163);
                const v246 = stdlib.add(v245, v175);
                const v247 = stdlib.add(v246, v187);
                const v248 = stdlib.add(v247, v199);
                const v249 = stdlib.add(v248, v211);
                const v250 = stdlib.add(v249, v223);
                const v251 = stdlib.add(v250, v235);
                let v252;
                const v253 = stdlib.gt(v243, v251);
                if (v253) {
                  v252 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                  }
                else {
                  const v255 = stdlib.gt(v251, v243);
                  if (v255) {
                    v252 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                    }
                  else {
                    v252 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                    }
                  }
                
                let v265;
                if (v253) {
                  v265 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                  }
                else {
                  const v268 = stdlib.gt(v251, v243);
                  if (v268) {
                    v265 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                    }
                  else {
                    v265 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                    }
                  }
                const cv43 = v265;
                const cv378 = v123;
                const cv380 = v380;
                
                (() => {
                  const v43 = cv43;
                  const v378 = cv378;
                  const v380 = cv380;
                  
                  if ((() => {
                    const v56 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                    
                    return v56;})()) {
                    sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:82:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v378, v380]);
                    sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:82:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v380]);
                    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:82:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                    sim_r.isHalt = false;
                    }
                  else {
                    const v347 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                    const v350 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:218:14:decimal', stdlib.UInt_max, 2), v31);
                    const v352 = v347 ? v30 : v38;
                    sim_r.txns.push({
                      amt: v350,
                      kind: 'from',
                      to: v352,
                      tok: undefined
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.nextSt = stdlib.digest(ctc9, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                    sim_r.view = [ctc9, []];
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                })));
              const [v119, v120] = txn8.data;
              const v123 = txn8.time;
              const v118 = txn8.from;
              ;
              const v122 = stdlib.addressEq(v38, v118);
              stdlib.assert(v122, {
                at: './index.rsh:132:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v125 = stdlib.digest(ctc4, [v119, v120]);
              const v126 = stdlib.digestEq(v80, v125);
              stdlib.assert(v126, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:133:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              const v128 = v120[stdlib.checkedBigNumberify('./index.rsh:173:34:array ref', stdlib.UInt_max, 0)];
              const v129 = v89[stdlib.checkedBigNumberify('./index.rsh:173:47:array ref', stdlib.UInt_max, 0)];
              const v131 = stdlib.eq(v128, v129);
              const v133 = v131 ? stdlib.checkedBigNumberify('./index.rsh:173:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:173:58:decimal', stdlib.UInt_max, 0);
              const v134 = v107[stdlib.checkedBigNumberify('./index.rsh:174:34:array ref', stdlib.UInt_max, 0)];
              const v135 = v98[stdlib.checkedBigNumberify('./index.rsh:174:47:array ref', stdlib.UInt_max, 0)];
              const v137 = stdlib.eq(v134, v135);
              const v139 = v137 ? stdlib.checkedBigNumberify('./index.rsh:174:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:174:58:decimal', stdlib.UInt_max, 0);
              const v140 = v120[stdlib.checkedBigNumberify('./index.rsh:176:34:array ref', stdlib.UInt_max, 1)];
              const v141 = v89[stdlib.checkedBigNumberify('./index.rsh:176:47:array ref', stdlib.UInt_max, 1)];
              const v143 = stdlib.eq(v140, v141);
              const v145 = v143 ? stdlib.checkedBigNumberify('./index.rsh:176:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:176:58:decimal', stdlib.UInt_max, 0);
              const v146 = v107[stdlib.checkedBigNumberify('./index.rsh:177:34:array ref', stdlib.UInt_max, 1)];
              const v147 = v98[stdlib.checkedBigNumberify('./index.rsh:177:47:array ref', stdlib.UInt_max, 1)];
              const v149 = stdlib.eq(v146, v147);
              const v151 = v149 ? stdlib.checkedBigNumberify('./index.rsh:177:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:177:58:decimal', stdlib.UInt_max, 0);
              const v152 = v120[stdlib.checkedBigNumberify('./index.rsh:179:34:array ref', stdlib.UInt_max, 2)];
              const v153 = v89[stdlib.checkedBigNumberify('./index.rsh:179:47:array ref', stdlib.UInt_max, 2)];
              const v155 = stdlib.eq(v152, v153);
              const v157 = v155 ? stdlib.checkedBigNumberify('./index.rsh:179:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:179:58:decimal', stdlib.UInt_max, 0);
              const v158 = v107[stdlib.checkedBigNumberify('./index.rsh:180:34:array ref', stdlib.UInt_max, 2)];
              const v159 = v98[stdlib.checkedBigNumberify('./index.rsh:180:47:array ref', stdlib.UInt_max, 2)];
              const v161 = stdlib.eq(v158, v159);
              const v163 = v161 ? stdlib.checkedBigNumberify('./index.rsh:180:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:180:58:decimal', stdlib.UInt_max, 0);
              const v164 = v120[stdlib.checkedBigNumberify('./index.rsh:182:34:array ref', stdlib.UInt_max, 3)];
              const v165 = v89[stdlib.checkedBigNumberify('./index.rsh:182:47:array ref', stdlib.UInt_max, 3)];
              const v167 = stdlib.eq(v164, v165);
              const v169 = v167 ? stdlib.checkedBigNumberify('./index.rsh:182:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:182:58:decimal', stdlib.UInt_max, 0);
              const v170 = v107[stdlib.checkedBigNumberify('./index.rsh:183:34:array ref', stdlib.UInt_max, 3)];
              const v171 = v98[stdlib.checkedBigNumberify('./index.rsh:183:47:array ref', stdlib.UInt_max, 3)];
              const v173 = stdlib.eq(v170, v171);
              const v175 = v173 ? stdlib.checkedBigNumberify('./index.rsh:183:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:183:58:decimal', stdlib.UInt_max, 0);
              const v176 = v120[stdlib.checkedBigNumberify('./index.rsh:185:34:array ref', stdlib.UInt_max, 4)];
              const v177 = v89[stdlib.checkedBigNumberify('./index.rsh:185:47:array ref', stdlib.UInt_max, 4)];
              const v179 = stdlib.eq(v176, v177);
              const v181 = v179 ? stdlib.checkedBigNumberify('./index.rsh:185:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:185:58:decimal', stdlib.UInt_max, 0);
              const v182 = v107[stdlib.checkedBigNumberify('./index.rsh:186:34:array ref', stdlib.UInt_max, 4)];
              const v183 = v98[stdlib.checkedBigNumberify('./index.rsh:186:47:array ref', stdlib.UInt_max, 4)];
              const v185 = stdlib.eq(v182, v183);
              const v187 = v185 ? stdlib.checkedBigNumberify('./index.rsh:186:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:186:58:decimal', stdlib.UInt_max, 0);
              const v188 = v120[stdlib.checkedBigNumberify('./index.rsh:188:34:array ref', stdlib.UInt_max, 5)];
              const v189 = v89[stdlib.checkedBigNumberify('./index.rsh:188:47:array ref', stdlib.UInt_max, 5)];
              const v191 = stdlib.eq(v188, v189);
              const v193 = v191 ? stdlib.checkedBigNumberify('./index.rsh:188:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:188:58:decimal', stdlib.UInt_max, 0);
              const v194 = v107[stdlib.checkedBigNumberify('./index.rsh:189:34:array ref', stdlib.UInt_max, 5)];
              const v195 = v98[stdlib.checkedBigNumberify('./index.rsh:189:47:array ref', stdlib.UInt_max, 5)];
              const v197 = stdlib.eq(v194, v195);
              const v199 = v197 ? stdlib.checkedBigNumberify('./index.rsh:189:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:189:58:decimal', stdlib.UInt_max, 0);
              const v200 = v120[stdlib.checkedBigNumberify('./index.rsh:191:34:array ref', stdlib.UInt_max, 6)];
              const v201 = v89[stdlib.checkedBigNumberify('./index.rsh:191:47:array ref', stdlib.UInt_max, 6)];
              const v203 = stdlib.eq(v200, v201);
              const v205 = v203 ? stdlib.checkedBigNumberify('./index.rsh:191:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:191:58:decimal', stdlib.UInt_max, 0);
              const v206 = v107[stdlib.checkedBigNumberify('./index.rsh:192:34:array ref', stdlib.UInt_max, 6)];
              const v207 = v98[stdlib.checkedBigNumberify('./index.rsh:192:47:array ref', stdlib.UInt_max, 6)];
              const v209 = stdlib.eq(v206, v207);
              const v211 = v209 ? stdlib.checkedBigNumberify('./index.rsh:192:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:192:58:decimal', stdlib.UInt_max, 0);
              const v212 = v120[stdlib.checkedBigNumberify('./index.rsh:194:34:array ref', stdlib.UInt_max, 7)];
              const v213 = v89[stdlib.checkedBigNumberify('./index.rsh:194:47:array ref', stdlib.UInt_max, 7)];
              const v215 = stdlib.eq(v212, v213);
              const v217 = v215 ? stdlib.checkedBigNumberify('./index.rsh:194:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:194:58:decimal', stdlib.UInt_max, 0);
              const v218 = v107[stdlib.checkedBigNumberify('./index.rsh:195:34:array ref', stdlib.UInt_max, 7)];
              const v219 = v98[stdlib.checkedBigNumberify('./index.rsh:195:47:array ref', stdlib.UInt_max, 7)];
              const v221 = stdlib.eq(v218, v219);
              const v223 = v221 ? stdlib.checkedBigNumberify('./index.rsh:195:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:195:58:decimal', stdlib.UInt_max, 0);
              const v224 = v120[stdlib.checkedBigNumberify('./index.rsh:197:34:array ref', stdlib.UInt_max, 8)];
              const v225 = v89[stdlib.checkedBigNumberify('./index.rsh:197:47:array ref', stdlib.UInt_max, 8)];
              const v227 = stdlib.eq(v224, v225);
              const v229 = v227 ? stdlib.checkedBigNumberify('./index.rsh:197:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:197:58:decimal', stdlib.UInt_max, 0);
              const v230 = v107[stdlib.checkedBigNumberify('./index.rsh:198:34:array ref', stdlib.UInt_max, 8)];
              const v231 = v98[stdlib.checkedBigNumberify('./index.rsh:198:47:array ref', stdlib.UInt_max, 8)];
              const v233 = stdlib.eq(v230, v231);
              const v235 = v233 ? stdlib.checkedBigNumberify('./index.rsh:198:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:198:58:decimal', stdlib.UInt_max, 0);
              const v236 = stdlib.add(v133, v145);
              const v237 = stdlib.add(v236, v157);
              const v238 = stdlib.add(v237, v169);
              const v239 = stdlib.add(v238, v181);
              const v240 = stdlib.add(v239, v193);
              const v241 = stdlib.add(v240, v205);
              const v242 = stdlib.add(v241, v217);
              const v243 = stdlib.add(v242, v229);
              const v244 = stdlib.add(v139, v151);
              const v245 = stdlib.add(v244, v163);
              const v246 = stdlib.add(v245, v175);
              const v247 = stdlib.add(v246, v187);
              const v248 = stdlib.add(v247, v199);
              const v249 = stdlib.add(v248, v211);
              const v250 = stdlib.add(v249, v223);
              const v251 = stdlib.add(v250, v235);
              let v252;
              const v253 = stdlib.gt(v243, v251);
              if (v253) {
                v252 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                const v255 = stdlib.gt(v251, v243);
                if (v255) {
                  v252 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  v252 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              stdlib.protect(ctc1, await interact.seeOutcome(v252), {
                at: './index.rsh:206:28:application',
                fs: ['at ./index.rsh:205:11:application call to [unknown function] (defined at: ./index.rsh:205:23:function exp)'],
                msg: 'seeOutcome',
                who: 'attacher'
                });
              
              let v265;
              if (v253) {
                v265 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                const v268 = stdlib.gt(v251, v243);
                if (v268) {
                  v265 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  v265 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              const cv43 = v265;
              const cv378 = v123;
              const cv380 = v380;
              
              v43 = cv43;
              v378 = cv378;
              v380 = cv380;
              
              continue;
              
              }
            }
          }
        }
      }
    const v347 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v350 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:218:14:decimal', stdlib.UInt_max, 2), v31);
    const v352 = v347 ? v30 : v38;
    ;
    return;}
  
  
  };
export async function deployer(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc1, ctc1, ctc1, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc1, ctc1, ctc1, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc3, ctc1, ctc1, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc3, ctc1, ctc1, ctc0]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc3, ctc1, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc3, ctc1, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc3, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc3, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc0, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc0]);
  const ctc18 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0]);
  const ctc19 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0]);
  const ctc20 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc21 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  const ctc22 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v26 = await ctc.creationTime();
  const v24 = stdlib.protect(ctc0, interact.wager, 'for deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:62:7:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v26, v24], [v24, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc22, [stdlib.checkedBigNumberify('./index.rsh:62:7:dot', stdlib.UInt_max, 0), v26]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:62:7:dot', stdlib.UInt_max, 0)]);
    const [v31] = txn1.data;
    const v34 = txn1.time;
    const v30 = txn1.from;
    
    sim_r.txns.push({
      amt: v31,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('./index.rsh:63:13:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31, v34]);
    sim_r.nextSt_noTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('./index.rsh:63:13:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:63:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
      const v363 = txn3.time;
      const v360 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v362 = stdlib.addressEq(v30, v360);
      stdlib.assert(v362, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:76:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    const v363 = txn3.time;
    const v360 = txn3.from;
    ;
    const v362 = stdlib.addressEq(v30, v360);
    stdlib.assert(v362, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:76:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'deployer'
      });
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:54:31:application',
      fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:76:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    let v43 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v378 = v41;
    let v380 = v40;
    
    while ((() => {
      const v56 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v56;})()) {
      const v61 = stdlib.protect(ctc1, await interact.selectShips(), {
        at: './index.rsh:86:45:application',
        fs: ['at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
        msg: 'selectShips',
        who: 'deployer'
        });
      const v63 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:87:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
        msg: 'random',
        who: 'deployer'
        });
      const v64 = stdlib.digest(ctc2, [v63, v61]);
      
      const txn3 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:90:9:dot', stdlib.UInt_max, 3), [ctc6, ctc0, ctc6, ctc0, ctc0, ctc3], [v30, v31, v38, v378, v380, v64], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:90:9:dot', stdlib.UInt_max, 4), v30, v31, v38, v378, v380]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('./index.rsh:90:9:dot', stdlib.UInt_max, 4), v30, v31, v38, v380]);
        const [v67] = txn3.data;
        const v70 = txn3.time;
        const v66 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v69 = stdlib.addressEq(v30, v66);
        stdlib.assert(v69, {
          at: './index.rsh:90:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'deployer'
          });
        sim_r.nextSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:91:15:after expr stmt semicolon', stdlib.UInt_max, 6), v30, v31, v38, v67, v70, v380]);
        sim_r.nextSt_noTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:91:15:after expr stmt semicolon', stdlib.UInt_max, 6), v30, v31, v38, v67, v380]);
        sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:91:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv(7, 0, [], false, false));
        const [] = txn4.data;
        const v332 = txn4.time;
        const v329 = txn4.from;
        ;
        const v331 = stdlib.addressEq(v38, v329);
        stdlib.assert(v331, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:90:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'deployer'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeout(), {
          at: './index.rsh:54:31:application',
          fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:90:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'deployer'
          });
        
        return;
        }
      else {
        const [v67] = txn3.data;
        const v70 = txn3.time;
        const v66 = txn3.from;
        ;
        const v69 = stdlib.addressEq(v30, v66);
        stdlib.assert(v69, {
          at: './index.rsh:90:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'deployer'
          });
        const txn4 = await (ctc.recv(8, 1, [ctc3], false, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10)));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv(9, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc3, ctc0, ctc0], [v30, v31, v38, v67, v70, v380], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v30, v31, v38, v67, v70, v380]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v30, v31, v38, v67, v380]);
            const [] = txn5.data;
            const v313 = txn5.time;
            const v310 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v312 = stdlib.addressEq(v30, v310);
            stdlib.assert(v312, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:101:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'deployer'
              });
            sim_r.txns.push({
              amt: v380,
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
          const v313 = txn5.time;
          const v310 = txn5.from;
          ;
          const v312 = stdlib.addressEq(v30, v310);
          stdlib.assert(v312, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:101:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'deployer'
            });
          ;
          stdlib.protect(ctc4, await interact.informTimeout(), {
            at: './index.rsh:54:31:application',
            fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:101:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'deployer'
            });
          
          return;
          }
        else {
          const [v80] = txn4.data;
          const v83 = txn4.time;
          const v79 = txn4.from;
          ;
          const v82 = stdlib.addressEq(v38, v79);
          stdlib.assert(v82, {
            at: './index.rsh:101:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const v87 = stdlib.protect(ctc1, await interact.guessShips(), {
            at: './index.rsh:109:56:application',
            fs: ['at ./index.rsh:108:13:application call to [unknown function] (defined at: ./index.rsh:108:17:function exp)'],
            msg: 'guessShips',
            who: 'deployer'
            });
          
          const txn5 = await (ctc.sendrecv(10, 1, stdlib.checkedBigNumberify('./index.rsh:111:9:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc3, ctc3, ctc0, ctc0, ctc1], [v30, v31, v38, v67, v80, v83, v380, v87], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:111:9:dot', stdlib.UInt_max, 8), v30, v31, v38, v67, v80, v83, v380]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:111:9:dot', stdlib.UInt_max, 8), v30, v31, v38, v67, v80, v380]);
            const [v89] = txn5.data;
            const v92 = txn5.time;
            const v88 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v91 = stdlib.addressEq(v30, v88);
            stdlib.assert(v91, {
              at: './index.rsh:111:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'deployer'
              });
            sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:112:15:after expr stmt semicolon', stdlib.UInt_max, 10), v30, v31, v38, v67, v80, v89, v92, v380]);
            sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:112:15:after expr stmt semicolon', stdlib.UInt_max, 10), v30, v31, v38, v67, v80, v89, v380]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:112:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            
            return sim_r;
            })));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv(11, 0, [], false, false));
            const [] = txn6.data;
            const v294 = txn6.time;
            const v291 = txn6.from;
            ;
            const v293 = stdlib.addressEq(v38, v291);
            stdlib.assert(v293, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:111:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'deployer'
              });
            ;
            stdlib.protect(ctc4, await interact.informTimeout(), {
              at: './index.rsh:54:31:application',
              fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:111:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'deployer'
              });
            
            return;
            }
          else {
            const [v89] = txn5.data;
            const v92 = txn5.time;
            const v88 = txn5.from;
            ;
            const v91 = stdlib.addressEq(v30, v88);
            stdlib.assert(v91, {
              at: './index.rsh:111:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'deployer'
              });
            const txn6 = await (ctc.recv(12, 1, [ctc1], false, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10)));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv(13, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), [ctc6, ctc0, ctc6, ctc3, ctc3, ctc1, ctc0, ctc0], [v30, v31, v38, v67, v80, v89, v92, v380], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v30, v31, v38, v67, v80, v89, v92, v380]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v30, v31, v38, v67, v80, v89, v380]);
                const [] = txn7.data;
                const v275 = txn7.time;
                const v272 = txn7.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v274 = stdlib.addressEq(v30, v272);
                stdlib.assert(v274, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:117:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'deployer'
                  });
                sim_r.txns.push({
                  amt: v380,
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
              const v275 = txn7.time;
              const v272 = txn7.from;
              ;
              const v274 = stdlib.addressEq(v30, v272);
              stdlib.assert(v274, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:117:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'deployer'
                });
              ;
              stdlib.protect(ctc4, await interact.informTimeout(), {
                at: './index.rsh:54:31:application',
                fs: ['at ./index.rsh:53:11:application call to [unknown function] (defined at: ./index.rsh:53:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:117:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'deployer'
                });
              
              return;
              }
            else {
              const [v98] = txn6.data;
              const v101 = txn6.time;
              const v97 = txn6.from;
              ;
              const v100 = stdlib.addressEq(v38, v97);
              stdlib.assert(v100, {
                at: './index.rsh:117:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const txn7 = await (ctc.sendrecv(14, 2, stdlib.checkedBigNumberify('./index.rsh:125:9:dot', stdlib.UInt_max, 7), [ctc6, ctc0, ctc6, ctc3, ctc3, ctc1, ctc1, ctc0, ctc0, ctc0, ctc1], [v30, v31, v38, v67, v80, v89, v98, v101, v380, v63, v61], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc1], true, true, false, (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:125:9:dot', stdlib.UInt_max, 12), v30, v31, v38, v67, v80, v89, v98, v101, v380]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:125:9:dot', stdlib.UInt_max, 12), v30, v31, v38, v67, v80, v89, v98, v380]);
                const [v106, v107] = txn7.data;
                const v110 = txn7.time;
                const v105 = txn7.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v109 = stdlib.addressEq(v30, v105);
                stdlib.assert(v109, {
                  at: './index.rsh:125:9:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'deployer'
                  });
                const v112 = stdlib.digest(ctc2, [v106, v107]);
                const v113 = stdlib.digestEq(v67, v112);
                stdlib.assert(v113, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:126:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'deployer'
                  });
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:127:15:after expr stmt semicolon', stdlib.UInt_max, 14), v30, v31, v38, v80, v89, v98, v107, v110, v380]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:127:15:after expr stmt semicolon', stdlib.UInt_max, 14), v30, v31, v38, v80, v89, v98, v107, v380]);
                sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:127:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                sim_r.isHalt = false;
                
                return sim_r;
                })));
              const [v106, v107] = txn7.data;
              const v110 = txn7.time;
              const v105 = txn7.from;
              ;
              const v109 = stdlib.addressEq(v30, v105);
              stdlib.assert(v109, {
                at: './index.rsh:125:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v112 = stdlib.digest(ctc2, [v106, v107]);
              const v113 = stdlib.digestEq(v67, v112);
              stdlib.assert(v113, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:126:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'deployer'
                });
              const txn8 = await (ctc.recv(15, 2, [ctc0, ctc1], false, false));
              const [v119, v120] = txn8.data;
              const v123 = txn8.time;
              const v118 = txn8.from;
              ;
              const v122 = stdlib.addressEq(v38, v118);
              stdlib.assert(v122, {
                at: './index.rsh:132:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v125 = stdlib.digest(ctc2, [v119, v120]);
              const v126 = stdlib.digestEq(v80, v125);
              stdlib.assert(v126, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:133:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'deployer'
                });
              const v128 = v120[stdlib.checkedBigNumberify('./index.rsh:173:34:array ref', stdlib.UInt_max, 0)];
              const v129 = v89[stdlib.checkedBigNumberify('./index.rsh:173:47:array ref', stdlib.UInt_max, 0)];
              const v131 = stdlib.eq(v128, v129);
              const v133 = v131 ? stdlib.checkedBigNumberify('./index.rsh:173:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:173:58:decimal', stdlib.UInt_max, 0);
              const v134 = v107[stdlib.checkedBigNumberify('./index.rsh:174:34:array ref', stdlib.UInt_max, 0)];
              const v135 = v98[stdlib.checkedBigNumberify('./index.rsh:174:47:array ref', stdlib.UInt_max, 0)];
              const v137 = stdlib.eq(v134, v135);
              const v139 = v137 ? stdlib.checkedBigNumberify('./index.rsh:174:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:174:58:decimal', stdlib.UInt_max, 0);
              const v140 = v120[stdlib.checkedBigNumberify('./index.rsh:176:34:array ref', stdlib.UInt_max, 1)];
              const v141 = v89[stdlib.checkedBigNumberify('./index.rsh:176:47:array ref', stdlib.UInt_max, 1)];
              const v143 = stdlib.eq(v140, v141);
              const v145 = v143 ? stdlib.checkedBigNumberify('./index.rsh:176:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:176:58:decimal', stdlib.UInt_max, 0);
              const v146 = v107[stdlib.checkedBigNumberify('./index.rsh:177:34:array ref', stdlib.UInt_max, 1)];
              const v147 = v98[stdlib.checkedBigNumberify('./index.rsh:177:47:array ref', stdlib.UInt_max, 1)];
              const v149 = stdlib.eq(v146, v147);
              const v151 = v149 ? stdlib.checkedBigNumberify('./index.rsh:177:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:177:58:decimal', stdlib.UInt_max, 0);
              const v152 = v120[stdlib.checkedBigNumberify('./index.rsh:179:34:array ref', stdlib.UInt_max, 2)];
              const v153 = v89[stdlib.checkedBigNumberify('./index.rsh:179:47:array ref', stdlib.UInt_max, 2)];
              const v155 = stdlib.eq(v152, v153);
              const v157 = v155 ? stdlib.checkedBigNumberify('./index.rsh:179:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:179:58:decimal', stdlib.UInt_max, 0);
              const v158 = v107[stdlib.checkedBigNumberify('./index.rsh:180:34:array ref', stdlib.UInt_max, 2)];
              const v159 = v98[stdlib.checkedBigNumberify('./index.rsh:180:47:array ref', stdlib.UInt_max, 2)];
              const v161 = stdlib.eq(v158, v159);
              const v163 = v161 ? stdlib.checkedBigNumberify('./index.rsh:180:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:180:58:decimal', stdlib.UInt_max, 0);
              const v164 = v120[stdlib.checkedBigNumberify('./index.rsh:182:34:array ref', stdlib.UInt_max, 3)];
              const v165 = v89[stdlib.checkedBigNumberify('./index.rsh:182:47:array ref', stdlib.UInt_max, 3)];
              const v167 = stdlib.eq(v164, v165);
              const v169 = v167 ? stdlib.checkedBigNumberify('./index.rsh:182:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:182:58:decimal', stdlib.UInt_max, 0);
              const v170 = v107[stdlib.checkedBigNumberify('./index.rsh:183:34:array ref', stdlib.UInt_max, 3)];
              const v171 = v98[stdlib.checkedBigNumberify('./index.rsh:183:47:array ref', stdlib.UInt_max, 3)];
              const v173 = stdlib.eq(v170, v171);
              const v175 = v173 ? stdlib.checkedBigNumberify('./index.rsh:183:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:183:58:decimal', stdlib.UInt_max, 0);
              const v176 = v120[stdlib.checkedBigNumberify('./index.rsh:185:34:array ref', stdlib.UInt_max, 4)];
              const v177 = v89[stdlib.checkedBigNumberify('./index.rsh:185:47:array ref', stdlib.UInt_max, 4)];
              const v179 = stdlib.eq(v176, v177);
              const v181 = v179 ? stdlib.checkedBigNumberify('./index.rsh:185:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:185:58:decimal', stdlib.UInt_max, 0);
              const v182 = v107[stdlib.checkedBigNumberify('./index.rsh:186:34:array ref', stdlib.UInt_max, 4)];
              const v183 = v98[stdlib.checkedBigNumberify('./index.rsh:186:47:array ref', stdlib.UInt_max, 4)];
              const v185 = stdlib.eq(v182, v183);
              const v187 = v185 ? stdlib.checkedBigNumberify('./index.rsh:186:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:186:58:decimal', stdlib.UInt_max, 0);
              const v188 = v120[stdlib.checkedBigNumberify('./index.rsh:188:34:array ref', stdlib.UInt_max, 5)];
              const v189 = v89[stdlib.checkedBigNumberify('./index.rsh:188:47:array ref', stdlib.UInt_max, 5)];
              const v191 = stdlib.eq(v188, v189);
              const v193 = v191 ? stdlib.checkedBigNumberify('./index.rsh:188:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:188:58:decimal', stdlib.UInt_max, 0);
              const v194 = v107[stdlib.checkedBigNumberify('./index.rsh:189:34:array ref', stdlib.UInt_max, 5)];
              const v195 = v98[stdlib.checkedBigNumberify('./index.rsh:189:47:array ref', stdlib.UInt_max, 5)];
              const v197 = stdlib.eq(v194, v195);
              const v199 = v197 ? stdlib.checkedBigNumberify('./index.rsh:189:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:189:58:decimal', stdlib.UInt_max, 0);
              const v200 = v120[stdlib.checkedBigNumberify('./index.rsh:191:34:array ref', stdlib.UInt_max, 6)];
              const v201 = v89[stdlib.checkedBigNumberify('./index.rsh:191:47:array ref', stdlib.UInt_max, 6)];
              const v203 = stdlib.eq(v200, v201);
              const v205 = v203 ? stdlib.checkedBigNumberify('./index.rsh:191:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:191:58:decimal', stdlib.UInt_max, 0);
              const v206 = v107[stdlib.checkedBigNumberify('./index.rsh:192:34:array ref', stdlib.UInt_max, 6)];
              const v207 = v98[stdlib.checkedBigNumberify('./index.rsh:192:47:array ref', stdlib.UInt_max, 6)];
              const v209 = stdlib.eq(v206, v207);
              const v211 = v209 ? stdlib.checkedBigNumberify('./index.rsh:192:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:192:58:decimal', stdlib.UInt_max, 0);
              const v212 = v120[stdlib.checkedBigNumberify('./index.rsh:194:34:array ref', stdlib.UInt_max, 7)];
              const v213 = v89[stdlib.checkedBigNumberify('./index.rsh:194:47:array ref', stdlib.UInt_max, 7)];
              const v215 = stdlib.eq(v212, v213);
              const v217 = v215 ? stdlib.checkedBigNumberify('./index.rsh:194:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:194:58:decimal', stdlib.UInt_max, 0);
              const v218 = v107[stdlib.checkedBigNumberify('./index.rsh:195:34:array ref', stdlib.UInt_max, 7)];
              const v219 = v98[stdlib.checkedBigNumberify('./index.rsh:195:47:array ref', stdlib.UInt_max, 7)];
              const v221 = stdlib.eq(v218, v219);
              const v223 = v221 ? stdlib.checkedBigNumberify('./index.rsh:195:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:195:58:decimal', stdlib.UInt_max, 0);
              const v224 = v120[stdlib.checkedBigNumberify('./index.rsh:197:34:array ref', stdlib.UInt_max, 8)];
              const v225 = v89[stdlib.checkedBigNumberify('./index.rsh:197:47:array ref', stdlib.UInt_max, 8)];
              const v227 = stdlib.eq(v224, v225);
              const v229 = v227 ? stdlib.checkedBigNumberify('./index.rsh:197:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:197:58:decimal', stdlib.UInt_max, 0);
              const v230 = v107[stdlib.checkedBigNumberify('./index.rsh:198:34:array ref', stdlib.UInt_max, 8)];
              const v231 = v98[stdlib.checkedBigNumberify('./index.rsh:198:47:array ref', stdlib.UInt_max, 8)];
              const v233 = stdlib.eq(v230, v231);
              const v235 = v233 ? stdlib.checkedBigNumberify('./index.rsh:198:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:198:58:decimal', stdlib.UInt_max, 0);
              const v236 = stdlib.add(v133, v145);
              const v237 = stdlib.add(v236, v157);
              const v238 = stdlib.add(v237, v169);
              const v239 = stdlib.add(v238, v181);
              const v240 = stdlib.add(v239, v193);
              const v241 = stdlib.add(v240, v205);
              const v242 = stdlib.add(v241, v217);
              const v243 = stdlib.add(v242, v229);
              const v244 = stdlib.add(v139, v151);
              const v245 = stdlib.add(v244, v163);
              const v246 = stdlib.add(v245, v175);
              const v247 = stdlib.add(v246, v187);
              const v248 = stdlib.add(v247, v199);
              const v249 = stdlib.add(v248, v211);
              const v250 = stdlib.add(v249, v223);
              const v251 = stdlib.add(v250, v235);
              let v252;
              const v253 = stdlib.gt(v243, v251);
              if (v253) {
                v252 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                const v255 = stdlib.gt(v251, v243);
                if (v255) {
                  v252 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  v252 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              stdlib.protect(ctc4, await interact.seeOutcome(v252), {
                at: './index.rsh:206:28:application',
                fs: ['at ./index.rsh:205:11:application call to [unknown function] (defined at: ./index.rsh:205:23:function exp)'],
                msg: 'seeOutcome',
                who: 'deployer'
                });
              
              let v265;
              if (v253) {
                v265 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                const v268 = stdlib.gt(v251, v243);
                if (v268) {
                  v265 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  v265 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              const cv43 = v265;
              const cv378 = v123;
              const cv380 = v380;
              
              v43 = cv43;
              v378 = cv378;
              v380 = cv380;
              
              continue;
              
              }
            }
          }
        }
      }
    const v347 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v350 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:218:14:decimal', stdlib.UInt_max, 2), v31);
    const v352 = v347 ? v30 : v38;
    ;
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
    size: 358
    }, {
    count: 9,
    size: 326
    }, {
    count: 9,
    size: 390
    }, {
    count: 9,
    size: 358
    }, {
    count: 9,
    size: 462
    }, {
    count: 9,
    size: 390
    }, {
    count: 9,
    size: 534
    }, {
    count: 9,
    size: 462
    }, {
    count: 9,
    size: 614
    }, {
    count: 9,
    size: 654
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
// "./index.rsh:62:7:dot"
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
// "./index.rsh:76:7:dot"
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
// "[at ./index.rsh:76:62:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:76:62:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 32
store 251
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
// "./index.rsh:90:9:dot"
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
// "./index.rsh:90:9:dot"
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
load 251
concat
load 252
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
// "[at ./index.rsh:90:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:90:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
load 252
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
substring 72 104
store 252
dup
substring 104 112
btoi
store 251
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 32
store 250
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
// "./index.rsh:101:9:dot"
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
// "./index.rsh:101:9:dot"
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
substring 72 104
store 252
dup
substring 104 112
btoi
store 251
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
// "[at ./index.rsh:101:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:101:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 72
store 249
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
// "./index.rsh:111:9:dot"
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
// "./index.rsh:111:9:dot"
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
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 144
btoi
store 250
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
// "[at ./index.rsh:111:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:111:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 208
store 250
dup
substring 208 216
btoi
store 249
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 72
store 248
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
// "./index.rsh:117:9:dot"
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
// "./index.rsh:117:9:dot"
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
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 208
store 250
dup
substring 208 216
btoi
store 249
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
// "[at ./index.rsh:117:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:117:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
substring 72 104
store 252
dup
substring 104 136
store 251
dup
substring 136 208
store 250
dup
int 208
int 280
substring3
store 249
dup
int 280
int 288
substring3
btoi
store 248
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 247
dup
substring 8 80
store 246
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
// "./index.rsh:125:9:dot"
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
// "./index.rsh:125:9:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:126:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 252
load 247
itob
load 246
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
load 251
concat
load 250
concat
load 249
concat
load 246
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
substring 72 104
store 252
dup
substring 104 176
store 251
dup
substring 176 248
store 250
dup
int 248
int 320
substring3
store 249
dup
int 320
int 328
substring3
btoi
store 248
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 247
dup
substring 8 80
store 246
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
// "./index.rsh:132:9:dot"
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
// "./index.rsh:132:9:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:133:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 252
load 247
itob
load 246
concat
keccak256
==
assert
int 0
int 1
load 246
substring 0 8
btoi
load 251
substring 0 8
btoi
==
select
int 0
int 1
load 246
substring 8 16
btoi
load 251
substring 8 16
btoi
==
select
+
int 0
int 1
load 246
substring 16 24
btoi
load 251
substring 16 24
btoi
==
select
+
int 0
int 1
load 246
substring 24 32
btoi
load 251
substring 24 32
btoi
==
select
+
int 0
int 1
load 246
substring 32 40
btoi
load 251
substring 32 40
btoi
==
select
+
int 0
int 1
load 246
substring 40 48
btoi
load 251
substring 40 48
btoi
==
select
+
int 0
int 1
load 246
substring 48 56
btoi
load 251
substring 48 56
btoi
==
select
+
int 0
int 1
load 246
substring 56 64
btoi
load 251
substring 56 64
btoi
==
select
+
int 0
int 1
load 246
substring 64 72
btoi
load 251
substring 64 72
btoi
==
select
+
store 244
int 0
int 1
load 249
substring 0 8
btoi
load 250
substring 0 8
btoi
==
select
int 0
int 1
load 249
substring 8 16
btoi
load 250
substring 8 16
btoi
==
select
+
int 0
int 1
load 249
substring 16 24
btoi
load 250
substring 16 24
btoi
==
select
+
int 0
int 1
load 249
substring 24 32
btoi
load 250
substring 24 32
btoi
==
select
+
int 0
int 1
load 249
substring 32 40
btoi
load 250
substring 32 40
btoi
==
select
+
int 0
int 1
load 249
substring 40 48
btoi
load 250
substring 40 48
btoi
==
select
+
int 0
int 1
load 249
substring 48 56
btoi
load 250
substring 48 56
btoi
==
select
+
int 0
int 1
load 249
substring 56 64
btoi
load 250
substring 56 64
btoi
==
select
+
int 0
int 1
load 249
substring 64 72
btoi
load 250
substring 64 72
btoi
==
select
+
store 243
load 244
load 243
>
bz l0
int 2
store 242
b l1
l0:
load 243
load 244
>
bz l2
int 0
store 242
b l3
l2:
int 1
store 242
l3:
l1:
load 242
int 1
==
bz l4
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
b checkAccts
l4:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
load 255
load 242
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v89",
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v89",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v98",
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v89",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v89",
                "type": "uint256[9]"
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
                "name": "v380",
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
                "name": "v106",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v107",
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
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v89",
                "type": "uint256[9]"
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
                "name": "v380",
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
                "name": "v119",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v120",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T33",
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
                "name": "v378",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v67",
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
                "name": "v378",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v80",
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v89",
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v89",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v98",
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v89",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v89",
                "type": "uint256[9]"
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
                "name": "v380",
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
                "name": "v106",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v107",
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
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v89",
                "type": "uint256[9]"
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
                "name": "v380",
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
                "name": "v119",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v120",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T33",
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
                "name": "v378",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v67",
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
                "name": "v378",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
                "name": "v80",
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v70",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v380",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382528251808201845260008082529251815283518083018490529051818501528351808203850181526060909101909352825192019190912090556121c0806100826000396000f3fe6080604052600436106100c65760003560e01c8063935ed3711161007f578063b861cb1011610059578063b861cb101461017f578063c15cd8df14610192578063e163d7c4146101a5578063fb0e04fc146101b8576100cd565b8063935ed371146101465780639532ef0114610159578063b32a639f1461016c576100cd565b806322b688dd146100d25780632438df70146100e75780634188e022146100fa578063499c46c51461010d5780636cc4a844146101205780636dacfd6f14610133576100cd565b366100cd57005b600080fd5b6100e56100e03660046119fa565b6101cb565b005b6100e56100f5366004611a1d565b61060d565b6100e5610108366004611985565b610715565b6100e561011b3660046119a0565b610821565b6100e561012e36600461196a565b6109ad565b6100e5610141366004611985565b610b63565b6100e56101543660046119e8565b610d39565b6100e5610167366004611a0c565b610f23565b6100e561017a3660046119b2565b611025565b6100e561018d36600461196a565b611128565b6100e56101a03660046119c4565b61122b565b6100e56101b3366004611a1d565b6113cb565b6100e56101c63660046119d6565b6114c8565b6040516101df90600e908390602001612074565b6040516020818303038152906040528051906020012060001c6000541461020557600080fd5b6000808055604080516060810182528281526020810183905290810191909152341561023057600080fd5b336102416060840160408501611949565b6001600160a01b03161461025457600080fd5b6040516102709061042084013590610440850190602001611ee1565b60408051601f19818403018152919052805160209091012060608301351461029757600080fd5b610540820135610180830135146102af5760006102b2565b60015b610520830135610160840135146102ca5760006102cd565b60015b610500840135610140850135146102e55760006102e8565b60015b6104e085013561012086013514610300576000610303565b60015b6104c08601356101008701351461031b57600061031e565b60015b6104a087013560e088013514610335576000610338565b60015b61048088013560c08901351461034f576000610352565b60015b61046089013560a08a01351461036957600061036c565b60015b6104408a013560808b013514610383576000610386565b60015b610390919061213d565b61039a919061213d565b6103a4919061213d565b6103ae919061213d565b6103b8919061213d565b6103c2919061213d565b6103cc919061213d565b6103d6919061213d565b81526103c08201356102a0830135146103f05760006103f3565b60015b6103a08301356102808401351461040b57600061040e565b60015b61038084013561026085013514610426576000610429565b60015b61036085013561024086013514610441576000610444565b60015b6103408601356102208701351461045c57600061045f565b60015b6103208701356102008801351461047757600061047a565b60015b6103008801356101e089013514610492576000610495565b60015b6102e08901356101c08a0135146104ad5760006104b0565b60015b6102c08a01356101a08b0135146104c85760006104cb565b60015b6104d5919061213d565b6104df919061213d565b6104e9919061213d565b6104f3919061213d565b6104fd919061213d565b610507919061213d565b610511919061213d565b61051b919061213d565b60208201819052815111156105365760026040820152610557565b80516020820151111561054f5760006040820152610557565b600160408201525b7f9e82ef2e7bb825ef328314a8a0dba9f71fbe9270940eb4972239419b1526ac15826040516105869190611e91565b60405180910390a1610596611796565b6105a36020840184611949565b81516001600160a01b03909116905280516020808501359101526105cd6060840160408501611949565b81516001600160a01b0390911660409182015282810151602080840180519290925281514391015251610400850135910152610608816115c7565b505050565b604051610621906001908390602001611f26565b6040516020818303038152906040528051906020012060001c6000541461064757600080fd5b6000805561065a600a604083013561213d565b431061066557600080fd5b3460208201351461067557600080fd5b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516106a49190611eb1565b60405180910390a16106b4611796565b6106c16020830183611949565b81516001600160a01b039091169052805160208084013591810182905282513360409091015280830180516001905251439101526106ff908061213d565b602082015160400152610711816115c7565b5050565b604051610729906006908390602001611efd565b6040516020818303038152906040528051906020012060001c6000541461074f57600080fd5b60008055610762600a608083013561213d565b43101561076e57600080fd5b341561077957600080fd5b336107876020830183611949565b6001600160a01b03161461079a57600080fd5b6107a76020820182611949565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f193505050501580156107e2573d6000803e3d6000fd5b507fe30737f1ebfc963c65c5913e78ab44df878e431e05d360e374cda18b462b262b816040516108129190611d8a565b60405180910390a16000805533ff5b604051610835906008908390602001611f11565b6040516020818303038152906040528051906020012060001c6000541461085b57600080fd5b6000805561086e600a60a083013561213d565b431061087957600080fd5b341561088457600080fd5b336108926020830183611949565b6001600160a01b0316146108a557600080fd5b7f3e27b2af469b8fb79be0b61a5d1e7608a14f9acedc98e1d5484d151ad183bb1c816040516108d49190611dba565b60405180910390a16108e46117e8565b6108f16020830183611949565b6001600160a01b03168152602080830135908201526109166060830160408401611949565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015280516101208181019092529060e08401906009908390839080828437600092019190915250505060a08201524360c08083019190915282013560e082015260405161098e90600a908390602001611f4f565b60408051601f1981840301815291905280516020909101206000555050565b6040516109c1906004908390602001612129565b6040516020818303038152906040528051906020012060001c600054146109e757600080fd5b600080556109fa600a606083013561213d565b4310610a0557600080fd5b3415610a1057600080fd5b33610a1e6020830183611949565b6001600160a01b031614610a3157600080fd5b7f16424d059cabc243859f670786693b7e657c3f04cbc39631fa14608999bfaef981604051610a609190611d22565b60405180910390a1610ab36040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b610ac06020830183611949565b6001600160a01b0316815260208083013590820152610ae56060830160408401611949565b6001600160a01b03908116604083810191825260a0858101356060808701918252436080808901918252808a0135858a01908152865160066020808301919091528b518b1698820198909852968a0151938701939093529551909616948401949094525190820152915160c08301525160e08201526101000161098e565b604051610b77906006908390602001611efd565b6040516020818303038152906040528051906020012060001c60005414610b9d57600080fd5b60008055610bb0600a608083013561213d565b4310610bbb57600080fd5b3415610bc657600080fd5b33610bd76060830160408401611949565b6001600160a01b031614610bea57600080fd5b7fa03e2b199cbd4c163bca89aa8e3581bcf82ee511c6ed7b600ee5e8a3e78842b481604051610c199190611d6e565b60405180910390a1610c736040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b610c806020830183611949565b6001600160a01b0316815260208083013590820152610ca56060830160408401611949565b6001600160a01b03908116604083810191825260608581013581860190815260c08088013560808089019182524360a0808b01918252808c0135858c01908152885160086020808301919091528d518d169a82019a909a52988c0151978901979097529751909816908601529151948401949094525192820192909252915160e0830152516101008201526101200161098e565b604051610d4d90600c908390602001611fc6565b6040516020818303038152906040528051906020012060001c60005414610d7357600080fd5b600080553415610d8257600080fd5b33610d906020830183611949565b6001600160a01b031614610da357600080fd5b604051610dbf9061032083013590610340840190602001611ee1565b60408051601f198184030181529190528051602090910120606082013514610de657600080fd5b7f46e2c640734469bc13f4827ea7ce662c03163396cb770b3c1a2e03643e69f76f81604051610e159190611e6a565b60405180910390a1610e25611845565b610e326020830183611949565b6001600160a01b0316815260208083013590820152610e576060830160408401611949565b6001600160a01b03166040808301919091526080830135606083015280516101208181019092529060a084019060099083908390808284376000920191909152505050608082015260408051610120818101909252906101c08401906009908390839080828437600092019190915250505060a082015260408051610120818101909252906103408401906009908390839080828437600092019190915250505060c08201524360e082015261030082013561010082015260405161098e90600e908390602001612089565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c60005414610f6057600080fd5b6000805534602082013514610f7457600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a1610fde604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a00161098e565b604051611039906008908390602001611f11565b6040516020818303038152906040528051906020012060001c6000541461105f57600080fd5b60008055611072600a60a083013561213d565b43101561107e57600080fd5b341561108957600080fd5b3361109a6060830160408401611949565b6001600160a01b0316146110ad57600080fd5b6110bd6060820160408301611949565b6040516001600160a01b03919091169060c083013580156108fc02916000818181858888f193505050501580156110f8573d6000803e3d6000fd5b507fe7cd06eed96e73ebf1eef9fa7a8d285d298aa9f119f81a14f729b421ad209bfa816040516108129190611ddf565b60405161113c906004908390602001612129565b6040516020818303038152906040528051906020012060001c6000541461116257600080fd5b60008055611175600a606083013561213d565b43101561118157600080fd5b341561118c57600080fd5b3361119d6060830160408401611949565b6001600160a01b0316146111b057600080fd5b6111c06060820160408301611949565b6040516001600160a01b039190911690608083013580156108fc02916000818181858888f193505050501580156111fb573d6000803e3d6000fd5b507f5005c4e6004c19e98ada43b5f5d05731c1a82aa5d9215871f88ceb584e0f83e0816040516108129190611d3e565b60405161123f90600a908390602001611f3a565b6040516020818303038152906040528051906020012060001c6000541461126557600080fd5b60008055611279600a6101c083013561213d565b431061128457600080fd5b341561128f57600080fd5b336112a06060830160408401611949565b6001600160a01b0316146112b357600080fd5b7f6274e6cd9c8f8fe9e11f6b27e8efa2cd284ff195481caffb23eace88692264e1816040516112e29190611e10565b60405180910390a16112f26118a1565b6112ff6020830183611949565b6001600160a01b03168152602080830135908201526113246060830160408401611949565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015280516101208181019092529060a08401906009908390839080828437600092019190915250505060a082015260408051610120818101909252906102008401906009908390839080828437600092019190915250505060c08201524360e08201526101e082013561010082015260405161098e90600c908390602001611fdb565b6040516113df906001908390602001611f26565b6040516020818303038152906040528051906020012060001c6000541461140557600080fd5b60008055611418600a604083013561213d565b43101561142457600080fd5b341561142f57600080fd5b3361143d6020830183611949565b6001600160a01b03161461145057600080fd5b61145d6020820182611949565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015611498573d6000803e3d6000fd5b507fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d85623013816040516108129190611eb1565b6040516114dc90600a908390602001611f3a565b6040516020818303038152906040528051906020012060001c6000541461150257600080fd5b60008055611516600a6101c083013561213d565b43101561152257600080fd5b341561152d57600080fd5b3361153b6020830183611949565b6001600160a01b03161461154e57600080fd5b61155b6020820182611949565b6040516001600160a01b0391909116906101e083013580156108fc02916000818181858888f19350505050158015611597573d6000803e3d6000fd5b507f0756c2742629731608b2f90c3b8b8cadaaf130c4e3227225a46d514e902ba1c0816040516108129190611e37565b602081015151600114156116be576116196040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401908152845160409081015184168186019081528387018051850151606080890191825291518401516080808a0191825285516004988101989098528951891695880195909552945191860191909152905190941690830152915160a0820152905160c082015260e00160408051601f19818403018152919052805160209091012060005550611726565b6040805160c0810182526000818301818152606083018281526080840183815260a085018481528386526020808701959095528751516001600160a01b0390811690945287518501519092528651909501519091169093528301515190915261071181611729565b50565b80516060015160021461174157805160400151611745565b8051515b6001600160a01b03166108fc82600001516020015160026117669190612155565b6040518115909202916000818181858888f1935050505015801561178e573d6000803e3d6000fd5b506000805533ff5b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016117e360405180606001604052806000815260200160008152602001600081525090565b905290565b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016118316118e6565b815260200160008152602001600081525090565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016118876118e6565b81526020016118946118e6565b81526020016118316118e6565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016118945b6040518061012001604052806009906020820280368337509192915050565b80356001600160a01b038116811461191c57600080fd5b919050565b600060c08284031215611932578081fd5b50919050565b600060e08284031215611932578081fd5b60006020828403121561195a578081fd5b61196382611905565b9392505050565b600060c0828403121561197b578081fd5b6119638383611921565b600060e08284031215611996578081fd5b6119638383611938565b60006102008284031215611932578081fd5b60006101008284031215611932578081fd5b60006103208284031215611932578081fd5b60006102208284031215611932578081fd5b60006104608284031215611932578081fd5b60006105608284031215611932578081fd5b600060408284031215611932578081fd5b600060808284031215611932578081fd5b61012080828437600081840152505050565b8060005b6009811015611a63578151845260209384019390910190600101611a44565b50505050565b6001600160a01b0380611a7b83611905565b1683526020820135602084015280611a9560408401611905565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b0380611ad083611905565b1683526020820135602084015280611aea60408401611905565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b03611b2e82611905565b16825260208181013590830152604090810135910152565b6001600160a01b0380611b5883611905565b1683526020820135602084015280611b7260408401611905565b16604084015250606081013560608301526080810135608083015261012060a0820160a08401376101c081810135908301526101e090810135910152565b6001600160a01b0380611bc283611905565b1683526020820135602084015280611bdc60408401611905565b16604084015250606081013560608301526080810135608083015261012060a0820160a08401376101c080830160008152611c1981838501611a2e565b50506102e0818101359083015261030090810135910152565b6001600160a01b0380611c4483611905565b1683526020820135602084015280611c5e60408401611905565b1660408401525060608101356060830152610120806080830160808501376101a0808401600081528282850182375050506102c080830160008152611ca581838501611a2e565b50506103e0818101359083015261040090810135910152565b8035825261012060208201602084013760006101408301525050565b6001600160a01b0380611cec83611905565b1683526020820135602084015280611d0660408401611905565b1660408401525060608181013590830152608090810135910152565b60c08101611d308284611cda565b60a092830135919092015290565b60c08101611d4c8284611cda565b60a0830135801515808214611d6057600080fd5b8060a0850152505092915050565b60e08101611d7c8284611a69565b60c092830135919092015290565b60e08101611d988284611a69565b60c0830135801515808214611dac57600080fd5b8060c0850152505092915050565b6102008101611dc98284611abe565b61012060e0840160e08401376000815292915050565b6101008101611dee8284611abe565b60e0830135801515808214611e0257600080fd5b8060e0850152505092915050565b6103208101611e1f8284611b46565b61020061012081850182850137506000815292915050565b6102208101611e468284611b46565b61020080840135801515808214611e5c57600080fd5b808386015250505092915050565b6104608101611e798284611bb0565b610320611e8a818401828601611cbe565b5092915050565b6105608101611ea08284611c32565b610420611e8a818401828601611cbe565b60808101611ebf8284611b1d565b6060830135801515808214611ed357600080fd5b806060850152505092915050565b8281526101408101610120836020840137600081529392505050565b82815260e081016119636020830184611a69565b82815261010081016119636020830184611abe565b828152608081016119636020830184611b1d565b82815261022081016119636020830184611b46565b60006102208201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a0830151611fa860c0840182611a40565b5060c08301516101e083015260e08301516102008301529392505050565b82815261034081016119636020830184611bb0565b60006103408201905083825260018060a01b03835116602083015260208301516040830152604083015161201a60608401826001600160a01b03169052565b5060608301516080830152608083015160a083015260a083015161204160c0840182611a40565b5060c08301516120556101e0840182611a40565b5060e08301516103008301526101008301516103208301529392505050565b82815261044081016119636020830184611c32565b82815281516001600160a01b0316602082015261044081016020830151604083015260408301516120c560608401826001600160a01b03169052565b506060830151608083015260808301516120e260a0840182611a40565b5060a08301516120f66101c0840182611a40565b5060c083015161210a6102e0840182611a40565b5060e08301516104008301526101008301516104208301529392505050565b82815260c081016119636020830184611cda565b6000821982111561215057612150612174565b500190565b600081600019048311821515161561216f5761216f612174565b500290565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220eb6249526e07023ab88762c676b7223613abb9bc31af391193f040004a29c05864736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

