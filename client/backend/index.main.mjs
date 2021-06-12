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
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc3, ctc3, ctc3, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc3, ctc3, ctc3, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc3, ctc3, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc3, ctc3, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc3, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc3, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc0, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc0]);
  const ctc18 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc0, ctc0]);
  const ctc19 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc2, ctc0]);
  const ctc20 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc21 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  
  
  const v26 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v31] = txn1.data;
  const v34 = txn1.time;
  const v30 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v31), {
    at: './index.rsh:68:27:application',
    fs: ['at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:15:function exp)'],
    msg: 'acceptWager',
    who: 'attacher'
    });
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:77:7:dot', stdlib.UInt_max, 2), [ctc6, ctc0, ctc0], [v30, v31, v34], [v31, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn2) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('./index.rsh:77:7:dot', stdlib.UInt_max, 1), v30, v31, v34]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('./index.rsh:77:7:dot', stdlib.UInt_max, 1), v30, v31]);
    const [] = txn2.data;
    const v41 = txn2.time;
    const v38 = txn2.from;
    
    const v40 = stdlib.add(v31, v31);
    sim_r.txns.push({
      amt: v31,
      kind: 'to',
      tok: undefined
      });
    const v42 = stdlib.checkedBigNumberify('./index.rsh:80:36:decimal', stdlib.UInt_max, 0);
    const v43 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    const v435 = v41;
    const v437 = v40;
    
    if ((() => {
      const v56 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v56;})()) {
      const v58 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v59 = stdlib.gt(v42, stdlib.checkedBigNumberify('./index.rsh:85:42:decimal', stdlib.UInt_max, 0));
      const v60 = v58 ? v59 : false;
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:83:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v42, v435, v437]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:83:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v42, v437]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:83:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v398 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v401 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, 2), v31);
      const v403 = v398 ? v30 : v38;
      sim_r.txns.push({
        amt: v401,
        kind: 'from',
        to: v403,
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
    const v420 = txn3.time;
    const v417 = txn3.from;
    ;
    const v419 = stdlib.addressEq(v30, v417);
    stdlib.assert(v419, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:77:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'attacher'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:55:31:application',
      fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:53:30:function exp)', 'at ./index.rsh:77:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    let v42 = stdlib.checkedBigNumberify('./index.rsh:80:36:decimal', stdlib.UInt_max, 0);
    let v43 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v435 = v41;
    let v437 = v40;
    
    while ((() => {
      const v56 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v56;})()) {
      const v58 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v59 = stdlib.gt(v42, stdlib.checkedBigNumberify('./index.rsh:85:42:decimal', stdlib.UInt_max, 0));
      const v60 = v58 ? v59 : false;
      if (v60) {
        stdlib.protect(ctc1, await interact.seeOutcome(v43), {
          at: './index.rsh:87:30:application',
          fs: ['at ./index.rsh:86:13:application call to [unknown function] (defined at: ./index.rsh:86:25:function exp)'],
          msg: 'seeOutcome',
          who: 'attacher'
          });
        
        }
      else {
        }
      const txn3 = await (ctc.recv(6, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10)));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc0, ctc0, ctc0], [v30, v31, v38, v42, v435, v437], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v30, v31, v38, v42, v435, v437]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v30, v31, v38, v42, v437]);
          const [] = txn4.data;
          const v383 = txn4.time;
          const v380 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v382 = stdlib.addressEq(v38, v380);
          stdlib.assert(v382, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:97:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'attacher'
            });
          sim_r.txns.push({
            amt: v437,
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
        const v383 = txn4.time;
        const v380 = txn4.from;
        ;
        const v382 = stdlib.addressEq(v38, v380);
        stdlib.assert(v382, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:97:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'attacher'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:55:31:application',
          fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:53:30:function exp)', 'at ./index.rsh:97:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
          at: './index.rsh:97:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'attacher'
          });
        const v83 = stdlib.protect(ctc3, await interact.selectShips(), {
          at: './index.rsh:104:45:application',
          fs: ['at ./index.rsh:103:13:application call to [unknown function] (defined at: ./index.rsh:103:17:function exp)'],
          msg: 'selectShips',
          who: 'attacher'
          });
        const v85 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:60:31:application',
          fs: ['at ./index.rsh:105:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:103:13:application call to [unknown function] (defined at: ./index.rsh:103:17:function exp)'],
          msg: 'random',
          who: 'attacher'
          });
        const v86 = stdlib.digest(ctc4, [v85, v83]);
        
        const txn4 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:108:9:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc0, ctc2, ctc0, ctc0, ctc2], [v30, v31, v38, v42, v76, v79, v437, v86], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:108:9:dot', stdlib.UInt_max, 6), v30, v31, v38, v42, v76, v79, v437]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('./index.rsh:108:9:dot', stdlib.UInt_max, 6), v30, v31, v38, v42, v76, v437]);
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
            at: './index.rsh:108:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          sim_r.nextSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:109:15:after expr stmt semicolon', stdlib.UInt_max, 8), v30, v31, v38, v42, v76, v89, v92, v437]);
          sim_r.nextSt_noTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:109:15:after expr stmt semicolon', stdlib.UInt_max, 8), v30, v31, v38, v42, v76, v89, v437]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:109:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          
          return sim_r;
          })));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv(9, 0, [], false, false));
          const [] = txn5.data;
          const v364 = txn5.time;
          const v361 = txn5.from;
          ;
          const v363 = stdlib.addressEq(v30, v361);
          stdlib.assert(v363, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:108:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'attacher'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:55:31:application',
            fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:53:30:function exp)', 'at ./index.rsh:108:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
            at: './index.rsh:108:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          const txn5 = await (ctc.recv(10, 1, [ctc3], false, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10)));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv(11, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), [ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc0, ctc0], [v30, v31, v38, v42, v76, v89, v92, v437], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v30, v31, v38, v42, v76, v89, v92, v437]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v30, v31, v38, v42, v76, v89, v437]);
              const [] = txn6.data;
              const v345 = txn6.time;
              const v342 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v344 = stdlib.addressEq(v38, v342);
              stdlib.assert(v344, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:118:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'attacher'
                });
              sim_r.txns.push({
                amt: v437,
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
            const v345 = txn6.time;
            const v342 = txn6.from;
            ;
            const v344 = stdlib.addressEq(v38, v342);
            stdlib.assert(v344, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:118:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'attacher'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:55:31:application',
              fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:53:30:function exp)', 'at ./index.rsh:118:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
              at: './index.rsh:118:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'attacher'
              });
            const v105 = stdlib.protect(ctc3, await interact.guessShips(), {
              at: './index.rsh:122:56:application',
              fs: ['at ./index.rsh:121:13:application call to [unknown function] (defined at: ./index.rsh:121:17:function exp)'],
              msg: 'guessShips',
              who: 'attacher'
              });
            
            const txn6 = await (ctc.sendrecv(12, 1, stdlib.checkedBigNumberify('./index.rsh:124:9:dot', stdlib.UInt_max, 7), [ctc6, ctc0, ctc6, ctc0, ctc2, ctc2, ctc3, ctc0, ctc0, ctc3], [v30, v31, v38, v42, v76, v89, v98, v101, v437, v105], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:124:9:dot', stdlib.UInt_max, 10), v30, v31, v38, v42, v76, v89, v98, v101, v437]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:124:9:dot', stdlib.UInt_max, 10), v30, v31, v38, v42, v76, v89, v98, v437]);
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
                at: './index.rsh:124:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:125:15:after expr stmt semicolon', stdlib.UInt_max, 12), v30, v31, v38, v42, v76, v89, v98, v107, v110, v437]);
              sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:125:15:after expr stmt semicolon', stdlib.UInt_max, 12), v30, v31, v38, v42, v76, v89, v98, v107, v437]);
              sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:125:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              
              return sim_r;
              })));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.recv(13, 0, [], false, false));
              const [] = txn7.data;
              const v326 = txn7.time;
              const v323 = txn7.from;
              ;
              const v325 = stdlib.addressEq(v30, v323);
              stdlib.assert(v325, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:124:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'attacher'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:55:31:application',
                fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:53:30:function exp)', 'at ./index.rsh:124:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
                at: './index.rsh:124:9:dot',
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
                at: './index.rsh:132:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v121 = stdlib.digest(ctc4, [v115, v116]);
              const v122 = stdlib.digestEq(v76, v121);
              stdlib.assert(v122, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:133:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              const txn8 = await (ctc.sendrecv(15, 2, stdlib.checkedBigNumberify('./index.rsh:139:9:dot', stdlib.UInt_max, 8), [ctc6, ctc0, ctc6, ctc0, ctc2, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc3], [v30, v31, v38, v42, v89, v98, v107, v116, v119, v437, v85, v83], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc3], true, true, false, (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:139:9:dot', stdlib.UInt_max, 14), v30, v31, v38, v42, v89, v98, v107, v116, v119, v437]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:139:9:dot', stdlib.UInt_max, 14), v30, v31, v38, v42, v89, v98, v107, v116, v437]);
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
                  at: './index.rsh:139:9:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'attacher'
                  });
                const v134 = stdlib.digest(ctc4, [v128, v129]);
                const v135 = stdlib.digestEq(v89, v134);
                stdlib.assert(v135, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:140:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'attacher'
                  });
                const v137 = v129[stdlib.checkedBigNumberify('./index.rsh:165:34:array ref', stdlib.UInt_max, 0)];
                const v138 = v98[stdlib.checkedBigNumberify('./index.rsh:165:47:array ref', stdlib.UInt_max, 0)];
                const v140 = stdlib.eq(v137, v138);
                const v142 = v140 ? stdlib.checkedBigNumberify('./index.rsh:165:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:165:58:decimal', stdlib.UInt_max, 0);
                const v143 = v116[stdlib.checkedBigNumberify('./index.rsh:166:34:array ref', stdlib.UInt_max, 0)];
                const v144 = v107[stdlib.checkedBigNumberify('./index.rsh:166:47:array ref', stdlib.UInt_max, 0)];
                const v146 = stdlib.eq(v143, v144);
                const v148 = v146 ? stdlib.checkedBigNumberify('./index.rsh:166:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:166:58:decimal', stdlib.UInt_max, 0);
                
                const v155 = v129[stdlib.checkedBigNumberify('./index.rsh:171:34:array ref', stdlib.UInt_max, 1)];
                const v156 = v98[stdlib.checkedBigNumberify('./index.rsh:171:47:array ref', stdlib.UInt_max, 1)];
                const v158 = stdlib.eq(v155, v156);
                const v160 = v158 ? stdlib.checkedBigNumberify('./index.rsh:171:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:171:58:decimal', stdlib.UInt_max, 0);
                const v161 = v116[stdlib.checkedBigNumberify('./index.rsh:172:34:array ref', stdlib.UInt_max, 1)];
                const v162 = v107[stdlib.checkedBigNumberify('./index.rsh:172:47:array ref', stdlib.UInt_max, 1)];
                const v164 = stdlib.eq(v161, v162);
                const v166 = v164 ? stdlib.checkedBigNumberify('./index.rsh:172:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:172:58:decimal', stdlib.UInt_max, 0);
                
                const v173 = v129[stdlib.checkedBigNumberify('./index.rsh:177:34:array ref', stdlib.UInt_max, 2)];
                const v174 = v98[stdlib.checkedBigNumberify('./index.rsh:177:47:array ref', stdlib.UInt_max, 2)];
                const v176 = stdlib.eq(v173, v174);
                const v178 = v176 ? stdlib.checkedBigNumberify('./index.rsh:177:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:177:58:decimal', stdlib.UInt_max, 0);
                const v179 = v116[stdlib.checkedBigNumberify('./index.rsh:178:34:array ref', stdlib.UInt_max, 2)];
                const v180 = v107[stdlib.checkedBigNumberify('./index.rsh:178:47:array ref', stdlib.UInt_max, 2)];
                const v182 = stdlib.eq(v179, v180);
                const v184 = v182 ? stdlib.checkedBigNumberify('./index.rsh:178:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:178:58:decimal', stdlib.UInt_max, 0);
                
                const v191 = v129[stdlib.checkedBigNumberify('./index.rsh:183:34:array ref', stdlib.UInt_max, 3)];
                const v192 = v98[stdlib.checkedBigNumberify('./index.rsh:183:47:array ref', stdlib.UInt_max, 3)];
                const v194 = stdlib.eq(v191, v192);
                const v196 = v194 ? stdlib.checkedBigNumberify('./index.rsh:183:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:183:58:decimal', stdlib.UInt_max, 0);
                const v197 = v116[stdlib.checkedBigNumberify('./index.rsh:184:34:array ref', stdlib.UInt_max, 3)];
                const v198 = v107[stdlib.checkedBigNumberify('./index.rsh:184:47:array ref', stdlib.UInt_max, 3)];
                const v200 = stdlib.eq(v197, v198);
                const v202 = v200 ? stdlib.checkedBigNumberify('./index.rsh:184:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:184:58:decimal', stdlib.UInt_max, 0);
                
                const v209 = v129[stdlib.checkedBigNumberify('./index.rsh:189:34:array ref', stdlib.UInt_max, 4)];
                const v210 = v98[stdlib.checkedBigNumberify('./index.rsh:189:47:array ref', stdlib.UInt_max, 4)];
                const v212 = stdlib.eq(v209, v210);
                const v214 = v212 ? stdlib.checkedBigNumberify('./index.rsh:189:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:189:58:decimal', stdlib.UInt_max, 0);
                const v215 = v116[stdlib.checkedBigNumberify('./index.rsh:190:34:array ref', stdlib.UInt_max, 4)];
                const v216 = v107[stdlib.checkedBigNumberify('./index.rsh:190:47:array ref', stdlib.UInt_max, 4)];
                const v218 = stdlib.eq(v215, v216);
                const v220 = v218 ? stdlib.checkedBigNumberify('./index.rsh:190:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:190:58:decimal', stdlib.UInt_max, 0);
                
                const v227 = v129[stdlib.checkedBigNumberify('./index.rsh:195:34:array ref', stdlib.UInt_max, 5)];
                const v228 = v98[stdlib.checkedBigNumberify('./index.rsh:195:47:array ref', stdlib.UInt_max, 5)];
                const v230 = stdlib.eq(v227, v228);
                const v232 = v230 ? stdlib.checkedBigNumberify('./index.rsh:195:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:195:58:decimal', stdlib.UInt_max, 0);
                const v233 = v116[stdlib.checkedBigNumberify('./index.rsh:196:34:array ref', stdlib.UInt_max, 5)];
                const v234 = v107[stdlib.checkedBigNumberify('./index.rsh:196:47:array ref', stdlib.UInt_max, 5)];
                const v236 = stdlib.eq(v233, v234);
                const v238 = v236 ? stdlib.checkedBigNumberify('./index.rsh:196:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:196:58:decimal', stdlib.UInt_max, 0);
                
                const v245 = v129[stdlib.checkedBigNumberify('./index.rsh:201:34:array ref', stdlib.UInt_max, 6)];
                const v246 = v98[stdlib.checkedBigNumberify('./index.rsh:201:47:array ref', stdlib.UInt_max, 6)];
                const v248 = stdlib.eq(v245, v246);
                const v250 = v248 ? stdlib.checkedBigNumberify('./index.rsh:201:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:201:58:decimal', stdlib.UInt_max, 0);
                const v251 = v116[stdlib.checkedBigNumberify('./index.rsh:202:34:array ref', stdlib.UInt_max, 6)];
                const v252 = v107[stdlib.checkedBigNumberify('./index.rsh:202:47:array ref', stdlib.UInt_max, 6)];
                const v254 = stdlib.eq(v251, v252);
                const v256 = v254 ? stdlib.checkedBigNumberify('./index.rsh:202:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:202:58:decimal', stdlib.UInt_max, 0);
                
                const v263 = v129[stdlib.checkedBigNumberify('./index.rsh:207:34:array ref', stdlib.UInt_max, 7)];
                const v264 = v98[stdlib.checkedBigNumberify('./index.rsh:207:47:array ref', stdlib.UInt_max, 7)];
                const v266 = stdlib.eq(v263, v264);
                const v268 = v266 ? stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:207:58:decimal', stdlib.UInt_max, 0);
                const v269 = v116[stdlib.checkedBigNumberify('./index.rsh:208:34:array ref', stdlib.UInt_max, 7)];
                const v270 = v107[stdlib.checkedBigNumberify('./index.rsh:208:47:array ref', stdlib.UInt_max, 7)];
                const v272 = stdlib.eq(v269, v270);
                const v274 = v272 ? stdlib.checkedBigNumberify('./index.rsh:208:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:208:58:decimal', stdlib.UInt_max, 0);
                
                const v281 = v129[stdlib.checkedBigNumberify('./index.rsh:213:34:array ref', stdlib.UInt_max, 8)];
                const v282 = v98[stdlib.checkedBigNumberify('./index.rsh:213:47:array ref', stdlib.UInt_max, 8)];
                const v284 = stdlib.eq(v281, v282);
                const v286 = v284 ? stdlib.checkedBigNumberify('./index.rsh:213:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:213:58:decimal', stdlib.UInt_max, 0);
                const v287 = v116[stdlib.checkedBigNumberify('./index.rsh:214:34:array ref', stdlib.UInt_max, 8)];
                const v288 = v107[stdlib.checkedBigNumberify('./index.rsh:214:47:array ref', stdlib.UInt_max, 8)];
                const v290 = stdlib.eq(v287, v288);
                const v292 = v290 ? stdlib.checkedBigNumberify('./index.rsh:214:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:214:58:decimal', stdlib.UInt_max, 0);
                
                const v299 = stdlib.add(v142, v160);
                const v300 = stdlib.add(v299, v178);
                const v301 = stdlib.add(v300, v196);
                const v302 = stdlib.add(v301, v214);
                const v303 = stdlib.add(v302, v232);
                const v304 = stdlib.add(v303, v250);
                const v305 = stdlib.add(v304, v268);
                const v306 = stdlib.add(v305, v286);
                const v307 = stdlib.add(v148, v166);
                const v308 = stdlib.add(v307, v184);
                const v309 = stdlib.add(v308, v202);
                const v310 = stdlib.add(v309, v220);
                const v311 = stdlib.add(v310, v238);
                const v312 = stdlib.add(v311, v256);
                const v313 = stdlib.add(v312, v274);
                const v314 = stdlib.add(v313, v292);
                const v315 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:223:21:decimal', stdlib.UInt_max, 1));
                let v316;
                const v317 = stdlib.gt(v306, v314);
                if (v317) {
                  v316 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                  }
                else {
                  const v319 = stdlib.gt(v314, v306);
                  if (v319) {
                    v316 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                    }
                  else {
                    v316 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                    }
                  }
                const cv42 = v315;
                const cv43 = v316;
                const cv435 = v132;
                const cv437 = v437;
                
                (() => {
                  const v42 = cv42;
                  const v43 = cv43;
                  const v435 = cv435;
                  const v437 = cv437;
                  
                  if ((() => {
                    const v56 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                    
                    return v56;})()) {
                    const v58 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                    const v59 = stdlib.gt(v42, stdlib.checkedBigNumberify('./index.rsh:85:42:decimal', stdlib.UInt_max, 0));
                    const v60 = v58 ? v59 : false;
                    sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:83:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v42, v435, v437]);
                    sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:83:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v42, v437]);
                    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:83:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                    sim_r.isHalt = false;
                    }
                  else {
                    const v398 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                    const v401 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, 2), v31);
                    const v403 = v398 ? v30 : v38;
                    sim_r.txns.push({
                      amt: v401,
                      kind: 'from',
                      to: v403,
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
              const [v128, v129] = txn8.data;
              const v132 = txn8.time;
              const v127 = txn8.from;
              ;
              const v131 = stdlib.addressEq(v38, v127);
              stdlib.assert(v131, {
                at: './index.rsh:139:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v134 = stdlib.digest(ctc4, [v128, v129]);
              const v135 = stdlib.digestEq(v89, v134);
              stdlib.assert(v135, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:140:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              const v137 = v129[stdlib.checkedBigNumberify('./index.rsh:165:34:array ref', stdlib.UInt_max, 0)];
              const v138 = v98[stdlib.checkedBigNumberify('./index.rsh:165:47:array ref', stdlib.UInt_max, 0)];
              const v140 = stdlib.eq(v137, v138);
              const v142 = v140 ? stdlib.checkedBigNumberify('./index.rsh:165:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:165:58:decimal', stdlib.UInt_max, 0);
              const v143 = v116[stdlib.checkedBigNumberify('./index.rsh:166:34:array ref', stdlib.UInt_max, 0)];
              const v144 = v107[stdlib.checkedBigNumberify('./index.rsh:166:47:array ref', stdlib.UInt_max, 0)];
              const v146 = stdlib.eq(v143, v144);
              const v148 = v146 ? stdlib.checkedBigNumberify('./index.rsh:166:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:166:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:168:32:decimal', stdlib.UInt_max, 1)), {
                at: './index.rsh:168:31:application',
                fs: ['at ./index.rsh:167:11:application call to [unknown function] (defined at: ./index.rsh:167:23:function exp)'],
                msg: 'loadingResult',
                who: 'attacher'
                });
              
              const v155 = v129[stdlib.checkedBigNumberify('./index.rsh:171:34:array ref', stdlib.UInt_max, 1)];
              const v156 = v98[stdlib.checkedBigNumberify('./index.rsh:171:47:array ref', stdlib.UInt_max, 1)];
              const v158 = stdlib.eq(v155, v156);
              const v160 = v158 ? stdlib.checkedBigNumberify('./index.rsh:171:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:171:58:decimal', stdlib.UInt_max, 0);
              const v161 = v116[stdlib.checkedBigNumberify('./index.rsh:172:34:array ref', stdlib.UInt_max, 1)];
              const v162 = v107[stdlib.checkedBigNumberify('./index.rsh:172:47:array ref', stdlib.UInt_max, 1)];
              const v164 = stdlib.eq(v161, v162);
              const v166 = v164 ? stdlib.checkedBigNumberify('./index.rsh:172:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:172:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:174:32:decimal', stdlib.UInt_max, 2)), {
                at: './index.rsh:174:31:application',
                fs: ['at ./index.rsh:173:11:application call to [unknown function] (defined at: ./index.rsh:173:23:function exp)'],
                msg: 'loadingResult',
                who: 'attacher'
                });
              
              const v173 = v129[stdlib.checkedBigNumberify('./index.rsh:177:34:array ref', stdlib.UInt_max, 2)];
              const v174 = v98[stdlib.checkedBigNumberify('./index.rsh:177:47:array ref', stdlib.UInt_max, 2)];
              const v176 = stdlib.eq(v173, v174);
              const v178 = v176 ? stdlib.checkedBigNumberify('./index.rsh:177:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:177:58:decimal', stdlib.UInt_max, 0);
              const v179 = v116[stdlib.checkedBigNumberify('./index.rsh:178:34:array ref', stdlib.UInt_max, 2)];
              const v180 = v107[stdlib.checkedBigNumberify('./index.rsh:178:47:array ref', stdlib.UInt_max, 2)];
              const v182 = stdlib.eq(v179, v180);
              const v184 = v182 ? stdlib.checkedBigNumberify('./index.rsh:178:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:178:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, 3)), {
                at: './index.rsh:180:31:application',
                fs: ['at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:23:function exp)'],
                msg: 'loadingResult',
                who: 'attacher'
                });
              
              const v191 = v129[stdlib.checkedBigNumberify('./index.rsh:183:34:array ref', stdlib.UInt_max, 3)];
              const v192 = v98[stdlib.checkedBigNumberify('./index.rsh:183:47:array ref', stdlib.UInt_max, 3)];
              const v194 = stdlib.eq(v191, v192);
              const v196 = v194 ? stdlib.checkedBigNumberify('./index.rsh:183:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:183:58:decimal', stdlib.UInt_max, 0);
              const v197 = v116[stdlib.checkedBigNumberify('./index.rsh:184:34:array ref', stdlib.UInt_max, 3)];
              const v198 = v107[stdlib.checkedBigNumberify('./index.rsh:184:47:array ref', stdlib.UInt_max, 3)];
              const v200 = stdlib.eq(v197, v198);
              const v202 = v200 ? stdlib.checkedBigNumberify('./index.rsh:184:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:184:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:186:32:decimal', stdlib.UInt_max, 4)), {
                at: './index.rsh:186:31:application',
                fs: ['at ./index.rsh:185:11:application call to [unknown function] (defined at: ./index.rsh:185:23:function exp)'],
                msg: 'loadingResult',
                who: 'attacher'
                });
              
              const v209 = v129[stdlib.checkedBigNumberify('./index.rsh:189:34:array ref', stdlib.UInt_max, 4)];
              const v210 = v98[stdlib.checkedBigNumberify('./index.rsh:189:47:array ref', stdlib.UInt_max, 4)];
              const v212 = stdlib.eq(v209, v210);
              const v214 = v212 ? stdlib.checkedBigNumberify('./index.rsh:189:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:189:58:decimal', stdlib.UInt_max, 0);
              const v215 = v116[stdlib.checkedBigNumberify('./index.rsh:190:34:array ref', stdlib.UInt_max, 4)];
              const v216 = v107[stdlib.checkedBigNumberify('./index.rsh:190:47:array ref', stdlib.UInt_max, 4)];
              const v218 = stdlib.eq(v215, v216);
              const v220 = v218 ? stdlib.checkedBigNumberify('./index.rsh:190:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:190:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:192:32:decimal', stdlib.UInt_max, 5)), {
                at: './index.rsh:192:31:application',
                fs: ['at ./index.rsh:191:11:application call to [unknown function] (defined at: ./index.rsh:191:23:function exp)'],
                msg: 'loadingResult',
                who: 'attacher'
                });
              
              const v227 = v129[stdlib.checkedBigNumberify('./index.rsh:195:34:array ref', stdlib.UInt_max, 5)];
              const v228 = v98[stdlib.checkedBigNumberify('./index.rsh:195:47:array ref', stdlib.UInt_max, 5)];
              const v230 = stdlib.eq(v227, v228);
              const v232 = v230 ? stdlib.checkedBigNumberify('./index.rsh:195:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:195:58:decimal', stdlib.UInt_max, 0);
              const v233 = v116[stdlib.checkedBigNumberify('./index.rsh:196:34:array ref', stdlib.UInt_max, 5)];
              const v234 = v107[stdlib.checkedBigNumberify('./index.rsh:196:47:array ref', stdlib.UInt_max, 5)];
              const v236 = stdlib.eq(v233, v234);
              const v238 = v236 ? stdlib.checkedBigNumberify('./index.rsh:196:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:196:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:198:32:decimal', stdlib.UInt_max, 6)), {
                at: './index.rsh:198:31:application',
                fs: ['at ./index.rsh:197:11:application call to [unknown function] (defined at: ./index.rsh:197:23:function exp)'],
                msg: 'loadingResult',
                who: 'attacher'
                });
              
              const v245 = v129[stdlib.checkedBigNumberify('./index.rsh:201:34:array ref', stdlib.UInt_max, 6)];
              const v246 = v98[stdlib.checkedBigNumberify('./index.rsh:201:47:array ref', stdlib.UInt_max, 6)];
              const v248 = stdlib.eq(v245, v246);
              const v250 = v248 ? stdlib.checkedBigNumberify('./index.rsh:201:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:201:58:decimal', stdlib.UInt_max, 0);
              const v251 = v116[stdlib.checkedBigNumberify('./index.rsh:202:34:array ref', stdlib.UInt_max, 6)];
              const v252 = v107[stdlib.checkedBigNumberify('./index.rsh:202:47:array ref', stdlib.UInt_max, 6)];
              const v254 = stdlib.eq(v251, v252);
              const v256 = v254 ? stdlib.checkedBigNumberify('./index.rsh:202:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:202:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:204:32:decimal', stdlib.UInt_max, 7)), {
                at: './index.rsh:204:31:application',
                fs: ['at ./index.rsh:203:11:application call to [unknown function] (defined at: ./index.rsh:203:23:function exp)'],
                msg: 'loadingResult',
                who: 'attacher'
                });
              
              const v263 = v129[stdlib.checkedBigNumberify('./index.rsh:207:34:array ref', stdlib.UInt_max, 7)];
              const v264 = v98[stdlib.checkedBigNumberify('./index.rsh:207:47:array ref', stdlib.UInt_max, 7)];
              const v266 = stdlib.eq(v263, v264);
              const v268 = v266 ? stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:207:58:decimal', stdlib.UInt_max, 0);
              const v269 = v116[stdlib.checkedBigNumberify('./index.rsh:208:34:array ref', stdlib.UInt_max, 7)];
              const v270 = v107[stdlib.checkedBigNumberify('./index.rsh:208:47:array ref', stdlib.UInt_max, 7)];
              const v272 = stdlib.eq(v269, v270);
              const v274 = v272 ? stdlib.checkedBigNumberify('./index.rsh:208:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:208:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:210:32:decimal', stdlib.UInt_max, 8)), {
                at: './index.rsh:210:31:application',
                fs: ['at ./index.rsh:209:11:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                msg: 'loadingResult',
                who: 'attacher'
                });
              
              const v281 = v129[stdlib.checkedBigNumberify('./index.rsh:213:34:array ref', stdlib.UInt_max, 8)];
              const v282 = v98[stdlib.checkedBigNumberify('./index.rsh:213:47:array ref', stdlib.UInt_max, 8)];
              const v284 = stdlib.eq(v281, v282);
              const v286 = v284 ? stdlib.checkedBigNumberify('./index.rsh:213:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:213:58:decimal', stdlib.UInt_max, 0);
              const v287 = v116[stdlib.checkedBigNumberify('./index.rsh:214:34:array ref', stdlib.UInt_max, 8)];
              const v288 = v107[stdlib.checkedBigNumberify('./index.rsh:214:47:array ref', stdlib.UInt_max, 8)];
              const v290 = stdlib.eq(v287, v288);
              const v292 = v290 ? stdlib.checkedBigNumberify('./index.rsh:214:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:214:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:216:32:decimal', stdlib.UInt_max, 9)), {
                at: './index.rsh:216:31:application',
                fs: ['at ./index.rsh:215:11:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
                msg: 'loadingResult',
                who: 'attacher'
                });
              
              const v299 = stdlib.add(v142, v160);
              const v300 = stdlib.add(v299, v178);
              const v301 = stdlib.add(v300, v196);
              const v302 = stdlib.add(v301, v214);
              const v303 = stdlib.add(v302, v232);
              const v304 = stdlib.add(v303, v250);
              const v305 = stdlib.add(v304, v268);
              const v306 = stdlib.add(v305, v286);
              const v307 = stdlib.add(v148, v166);
              const v308 = stdlib.add(v307, v184);
              const v309 = stdlib.add(v308, v202);
              const v310 = stdlib.add(v309, v220);
              const v311 = stdlib.add(v310, v238);
              const v312 = stdlib.add(v311, v256);
              const v313 = stdlib.add(v312, v274);
              const v314 = stdlib.add(v313, v292);
              const v315 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:223:21:decimal', stdlib.UInt_max, 1));
              let v316;
              const v317 = stdlib.gt(v306, v314);
              if (v317) {
                v316 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                const v319 = stdlib.gt(v314, v306);
                if (v319) {
                  v316 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  v316 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              const cv42 = v315;
              const cv43 = v316;
              const cv435 = v132;
              const cv437 = v437;
              
              v42 = cv42;
              v43 = cv43;
              v435 = cv435;
              v437 = cv437;
              
              continue;
              
              }
            }
          }
        }
      }
    const v398 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v401 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, 2), v31);
    const v403 = v398 ? v30 : v38;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v43), {
      at: './index.rsh:235:26:application',
      fs: ['at ./index.rsh:234:9:application call to [unknown function] (defined at: ./index.rsh:234:21:function exp)'],
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
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:63:7:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v26, v24], [v24, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc22, [stdlib.checkedBigNumberify('./index.rsh:63:7:dot', stdlib.UInt_max, 0), v26]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:63:7:dot', stdlib.UInt_max, 0)]);
    const [v31] = txn1.data;
    const v34 = txn1.time;
    const v30 = txn1.from;
    
    sim_r.txns.push({
      amt: v31,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('./index.rsh:64:13:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31, v34]);
    sim_r.nextSt_noTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('./index.rsh:64:13:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:64:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
      const v420 = txn3.time;
      const v417 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v419 = stdlib.addressEq(v30, v417);
      stdlib.assert(v419, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:77:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    const v420 = txn3.time;
    const v417 = txn3.from;
    ;
    const v419 = stdlib.addressEq(v30, v417);
    stdlib.assert(v419, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:77:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'deployer'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:55:31:application',
      fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:53:30:function exp)', 'at ./index.rsh:77:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    let v42 = stdlib.checkedBigNumberify('./index.rsh:80:36:decimal', stdlib.UInt_max, 0);
    let v43 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v435 = v41;
    let v437 = v40;
    
    while ((() => {
      const v56 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v56;})()) {
      const v58 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v59 = stdlib.gt(v42, stdlib.checkedBigNumberify('./index.rsh:85:42:decimal', stdlib.UInt_max, 0));
      const v60 = v58 ? v59 : false;
      if (v60) {
        stdlib.protect(ctc1, await interact.seeOutcome(v43), {
          at: './index.rsh:87:30:application',
          fs: ['at ./index.rsh:86:13:application call to [unknown function] (defined at: ./index.rsh:86:25:function exp)'],
          msg: 'seeOutcome',
          who: 'deployer'
          });
        
        }
      else {
        }
      const v70 = stdlib.protect(ctc2, await interact.selectShips(), {
        at: './index.rsh:93:45:application',
        fs: ['at ./index.rsh:92:13:application call to [unknown function] (defined at: ./index.rsh:92:17:function exp)'],
        msg: 'selectShips',
        who: 'deployer'
        });
      const v72 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:94:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:92:13:application call to [unknown function] (defined at: ./index.rsh:92:17:function exp)'],
        msg: 'random',
        who: 'deployer'
        });
      const v73 = stdlib.digest(ctc3, [v72, v70]);
      
      const txn3 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:97:9:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc0, ctc0, ctc0, ctc4], [v30, v31, v38, v42, v435, v437, v73], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc4], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:97:9:dot', stdlib.UInt_max, 4), v30, v31, v38, v42, v435, v437]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('./index.rsh:97:9:dot', stdlib.UInt_max, 4), v30, v31, v38, v42, v437]);
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
          at: './index.rsh:97:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'deployer'
          });
        sim_r.nextSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:98:15:after expr stmt semicolon', stdlib.UInt_max, 6), v30, v31, v38, v42, v76, v79, v437]);
        sim_r.nextSt_noTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:98:15:after expr stmt semicolon', stdlib.UInt_max, 6), v30, v31, v38, v42, v76, v437]);
        sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:98:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv(7, 0, [], false, false));
        const [] = txn4.data;
        const v383 = txn4.time;
        const v380 = txn4.from;
        ;
        const v382 = stdlib.addressEq(v38, v380);
        stdlib.assert(v382, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:97:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'deployer'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:55:31:application',
          fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:53:30:function exp)', 'at ./index.rsh:97:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
          at: './index.rsh:97:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'deployer'
          });
        const txn4 = await (ctc.recv(8, 1, [ctc4], false, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10)));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv(9, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc0, ctc4, ctc0, ctc0], [v30, v31, v38, v42, v76, v79, v437], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v30, v31, v38, v42, v76, v79, v437]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v30, v31, v38, v42, v76, v437]);
            const [] = txn5.data;
            const v364 = txn5.time;
            const v361 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v363 = stdlib.addressEq(v30, v361);
            stdlib.assert(v363, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:108:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'deployer'
              });
            sim_r.txns.push({
              amt: v437,
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
          const v364 = txn5.time;
          const v361 = txn5.from;
          ;
          const v363 = stdlib.addressEq(v30, v361);
          stdlib.assert(v363, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:108:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'deployer'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:55:31:application',
            fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:53:30:function exp)', 'at ./index.rsh:108:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
            at: './index.rsh:108:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const v96 = stdlib.protect(ctc2, await interact.guessShips(), {
            at: './index.rsh:116:56:application',
            fs: ['at ./index.rsh:115:13:application call to [unknown function] (defined at: ./index.rsh:115:17:function exp)'],
            msg: 'guessShips',
            who: 'deployer'
            });
          
          const txn5 = await (ctc.sendrecv(10, 1, stdlib.checkedBigNumberify('./index.rsh:118:9:dot', stdlib.UInt_max, 6), [ctc6, ctc0, ctc6, ctc0, ctc4, ctc4, ctc0, ctc0, ctc2], [v30, v31, v38, v42, v76, v89, v92, v437, v96], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10), (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:118:9:dot', stdlib.UInt_max, 8), v30, v31, v38, v42, v76, v89, v92, v437]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:118:9:dot', stdlib.UInt_max, 8), v30, v31, v38, v42, v76, v89, v437]);
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
              at: './index.rsh:118:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'deployer'
              });
            sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:119:15:after expr stmt semicolon', stdlib.UInt_max, 10), v30, v31, v38, v42, v76, v89, v98, v101, v437]);
            sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:119:15:after expr stmt semicolon', stdlib.UInt_max, 10), v30, v31, v38, v42, v76, v89, v98, v437]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:119:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            
            return sim_r;
            })));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv(11, 0, [], false, false));
            const [] = txn6.data;
            const v345 = txn6.time;
            const v342 = txn6.from;
            ;
            const v344 = stdlib.addressEq(v38, v342);
            stdlib.assert(v344, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:118:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'deployer'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:55:31:application',
              fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:53:30:function exp)', 'at ./index.rsh:118:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
              at: './index.rsh:118:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'deployer'
              });
            const txn6 = await (ctc.recv(12, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:12:31:decimal', stdlib.UInt_max, 10)));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv(13, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 7), [ctc6, ctc0, ctc6, ctc0, ctc4, ctc4, ctc2, ctc0, ctc0], [v30, v31, v38, v42, v76, v89, v98, v101, v437], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v30, v31, v38, v42, v76, v89, v98, v101, v437]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v30, v31, v38, v42, v76, v89, v98, v437]);
                const [] = txn7.data;
                const v326 = txn7.time;
                const v323 = txn7.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v325 = stdlib.addressEq(v30, v323);
                stdlib.assert(v325, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:124:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'deployer'
                  });
                sim_r.txns.push({
                  amt: v437,
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
              const v326 = txn7.time;
              const v323 = txn7.from;
              ;
              const v325 = stdlib.addressEq(v30, v323);
              stdlib.assert(v325, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:124:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'deployer'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:55:31:application',
                fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:53:30:function exp)', 'at ./index.rsh:124:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
                at: './index.rsh:124:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const txn7 = await (ctc.sendrecv(14, 2, stdlib.checkedBigNumberify('./index.rsh:132:9:dot', stdlib.UInt_max, 8), [ctc6, ctc0, ctc6, ctc0, ctc4, ctc4, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2], [v30, v31, v38, v42, v76, v89, v98, v107, v110, v437, v72, v70], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc2], true, true, false, (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:132:9:dot', stdlib.UInt_max, 12), v30, v31, v38, v42, v76, v89, v98, v107, v110, v437]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:132:9:dot', stdlib.UInt_max, 12), v30, v31, v38, v42, v76, v89, v98, v107, v437]);
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
                  at: './index.rsh:132:9:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'deployer'
                  });
                const v121 = stdlib.digest(ctc3, [v115, v116]);
                const v122 = stdlib.digestEq(v76, v121);
                stdlib.assert(v122, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:133:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'deployer'
                  });
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:134:15:after expr stmt semicolon', stdlib.UInt_max, 14), v30, v31, v38, v42, v89, v98, v107, v116, v119, v437]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:134:15:after expr stmt semicolon', stdlib.UInt_max, 14), v30, v31, v38, v42, v89, v98, v107, v116, v437]);
                sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:134:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                sim_r.isHalt = false;
                
                return sim_r;
                })));
              const [v115, v116] = txn7.data;
              const v119 = txn7.time;
              const v114 = txn7.from;
              ;
              const v118 = stdlib.addressEq(v30, v114);
              stdlib.assert(v118, {
                at: './index.rsh:132:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v121 = stdlib.digest(ctc3, [v115, v116]);
              const v122 = stdlib.digestEq(v76, v121);
              stdlib.assert(v122, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:133:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
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
                at: './index.rsh:139:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v134 = stdlib.digest(ctc3, [v128, v129]);
              const v135 = stdlib.digestEq(v89, v134);
              stdlib.assert(v135, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:140:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'deployer'
                });
              const v137 = v129[stdlib.checkedBigNumberify('./index.rsh:165:34:array ref', stdlib.UInt_max, 0)];
              const v138 = v98[stdlib.checkedBigNumberify('./index.rsh:165:47:array ref', stdlib.UInt_max, 0)];
              const v140 = stdlib.eq(v137, v138);
              const v142 = v140 ? stdlib.checkedBigNumberify('./index.rsh:165:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:165:58:decimal', stdlib.UInt_max, 0);
              const v143 = v116[stdlib.checkedBigNumberify('./index.rsh:166:34:array ref', stdlib.UInt_max, 0)];
              const v144 = v107[stdlib.checkedBigNumberify('./index.rsh:166:47:array ref', stdlib.UInt_max, 0)];
              const v146 = stdlib.eq(v143, v144);
              const v148 = v146 ? stdlib.checkedBigNumberify('./index.rsh:166:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:166:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:168:32:decimal', stdlib.UInt_max, 1)), {
                at: './index.rsh:168:31:application',
                fs: ['at ./index.rsh:167:11:application call to [unknown function] (defined at: ./index.rsh:167:23:function exp)'],
                msg: 'loadingResult',
                who: 'deployer'
                });
              
              const v155 = v129[stdlib.checkedBigNumberify('./index.rsh:171:34:array ref', stdlib.UInt_max, 1)];
              const v156 = v98[stdlib.checkedBigNumberify('./index.rsh:171:47:array ref', stdlib.UInt_max, 1)];
              const v158 = stdlib.eq(v155, v156);
              const v160 = v158 ? stdlib.checkedBigNumberify('./index.rsh:171:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:171:58:decimal', stdlib.UInt_max, 0);
              const v161 = v116[stdlib.checkedBigNumberify('./index.rsh:172:34:array ref', stdlib.UInt_max, 1)];
              const v162 = v107[stdlib.checkedBigNumberify('./index.rsh:172:47:array ref', stdlib.UInt_max, 1)];
              const v164 = stdlib.eq(v161, v162);
              const v166 = v164 ? stdlib.checkedBigNumberify('./index.rsh:172:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:172:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:174:32:decimal', stdlib.UInt_max, 2)), {
                at: './index.rsh:174:31:application',
                fs: ['at ./index.rsh:173:11:application call to [unknown function] (defined at: ./index.rsh:173:23:function exp)'],
                msg: 'loadingResult',
                who: 'deployer'
                });
              
              const v173 = v129[stdlib.checkedBigNumberify('./index.rsh:177:34:array ref', stdlib.UInt_max, 2)];
              const v174 = v98[stdlib.checkedBigNumberify('./index.rsh:177:47:array ref', stdlib.UInt_max, 2)];
              const v176 = stdlib.eq(v173, v174);
              const v178 = v176 ? stdlib.checkedBigNumberify('./index.rsh:177:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:177:58:decimal', stdlib.UInt_max, 0);
              const v179 = v116[stdlib.checkedBigNumberify('./index.rsh:178:34:array ref', stdlib.UInt_max, 2)];
              const v180 = v107[stdlib.checkedBigNumberify('./index.rsh:178:47:array ref', stdlib.UInt_max, 2)];
              const v182 = stdlib.eq(v179, v180);
              const v184 = v182 ? stdlib.checkedBigNumberify('./index.rsh:178:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:178:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:180:32:decimal', stdlib.UInt_max, 3)), {
                at: './index.rsh:180:31:application',
                fs: ['at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:23:function exp)'],
                msg: 'loadingResult',
                who: 'deployer'
                });
              
              const v191 = v129[stdlib.checkedBigNumberify('./index.rsh:183:34:array ref', stdlib.UInt_max, 3)];
              const v192 = v98[stdlib.checkedBigNumberify('./index.rsh:183:47:array ref', stdlib.UInt_max, 3)];
              const v194 = stdlib.eq(v191, v192);
              const v196 = v194 ? stdlib.checkedBigNumberify('./index.rsh:183:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:183:58:decimal', stdlib.UInt_max, 0);
              const v197 = v116[stdlib.checkedBigNumberify('./index.rsh:184:34:array ref', stdlib.UInt_max, 3)];
              const v198 = v107[stdlib.checkedBigNumberify('./index.rsh:184:47:array ref', stdlib.UInt_max, 3)];
              const v200 = stdlib.eq(v197, v198);
              const v202 = v200 ? stdlib.checkedBigNumberify('./index.rsh:184:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:184:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:186:32:decimal', stdlib.UInt_max, 4)), {
                at: './index.rsh:186:31:application',
                fs: ['at ./index.rsh:185:11:application call to [unknown function] (defined at: ./index.rsh:185:23:function exp)'],
                msg: 'loadingResult',
                who: 'deployer'
                });
              
              const v209 = v129[stdlib.checkedBigNumberify('./index.rsh:189:34:array ref', stdlib.UInt_max, 4)];
              const v210 = v98[stdlib.checkedBigNumberify('./index.rsh:189:47:array ref', stdlib.UInt_max, 4)];
              const v212 = stdlib.eq(v209, v210);
              const v214 = v212 ? stdlib.checkedBigNumberify('./index.rsh:189:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:189:58:decimal', stdlib.UInt_max, 0);
              const v215 = v116[stdlib.checkedBigNumberify('./index.rsh:190:34:array ref', stdlib.UInt_max, 4)];
              const v216 = v107[stdlib.checkedBigNumberify('./index.rsh:190:47:array ref', stdlib.UInt_max, 4)];
              const v218 = stdlib.eq(v215, v216);
              const v220 = v218 ? stdlib.checkedBigNumberify('./index.rsh:190:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:190:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:192:32:decimal', stdlib.UInt_max, 5)), {
                at: './index.rsh:192:31:application',
                fs: ['at ./index.rsh:191:11:application call to [unknown function] (defined at: ./index.rsh:191:23:function exp)'],
                msg: 'loadingResult',
                who: 'deployer'
                });
              
              const v227 = v129[stdlib.checkedBigNumberify('./index.rsh:195:34:array ref', stdlib.UInt_max, 5)];
              const v228 = v98[stdlib.checkedBigNumberify('./index.rsh:195:47:array ref', stdlib.UInt_max, 5)];
              const v230 = stdlib.eq(v227, v228);
              const v232 = v230 ? stdlib.checkedBigNumberify('./index.rsh:195:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:195:58:decimal', stdlib.UInt_max, 0);
              const v233 = v116[stdlib.checkedBigNumberify('./index.rsh:196:34:array ref', stdlib.UInt_max, 5)];
              const v234 = v107[stdlib.checkedBigNumberify('./index.rsh:196:47:array ref', stdlib.UInt_max, 5)];
              const v236 = stdlib.eq(v233, v234);
              const v238 = v236 ? stdlib.checkedBigNumberify('./index.rsh:196:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:196:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:198:32:decimal', stdlib.UInt_max, 6)), {
                at: './index.rsh:198:31:application',
                fs: ['at ./index.rsh:197:11:application call to [unknown function] (defined at: ./index.rsh:197:23:function exp)'],
                msg: 'loadingResult',
                who: 'deployer'
                });
              
              const v245 = v129[stdlib.checkedBigNumberify('./index.rsh:201:34:array ref', stdlib.UInt_max, 6)];
              const v246 = v98[stdlib.checkedBigNumberify('./index.rsh:201:47:array ref', stdlib.UInt_max, 6)];
              const v248 = stdlib.eq(v245, v246);
              const v250 = v248 ? stdlib.checkedBigNumberify('./index.rsh:201:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:201:58:decimal', stdlib.UInt_max, 0);
              const v251 = v116[stdlib.checkedBigNumberify('./index.rsh:202:34:array ref', stdlib.UInt_max, 6)];
              const v252 = v107[stdlib.checkedBigNumberify('./index.rsh:202:47:array ref', stdlib.UInt_max, 6)];
              const v254 = stdlib.eq(v251, v252);
              const v256 = v254 ? stdlib.checkedBigNumberify('./index.rsh:202:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:202:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:204:32:decimal', stdlib.UInt_max, 7)), {
                at: './index.rsh:204:31:application',
                fs: ['at ./index.rsh:203:11:application call to [unknown function] (defined at: ./index.rsh:203:23:function exp)'],
                msg: 'loadingResult',
                who: 'deployer'
                });
              
              const v263 = v129[stdlib.checkedBigNumberify('./index.rsh:207:34:array ref', stdlib.UInt_max, 7)];
              const v264 = v98[stdlib.checkedBigNumberify('./index.rsh:207:47:array ref', stdlib.UInt_max, 7)];
              const v266 = stdlib.eq(v263, v264);
              const v268 = v266 ? stdlib.checkedBigNumberify('./index.rsh:207:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:207:58:decimal', stdlib.UInt_max, 0);
              const v269 = v116[stdlib.checkedBigNumberify('./index.rsh:208:34:array ref', stdlib.UInt_max, 7)];
              const v270 = v107[stdlib.checkedBigNumberify('./index.rsh:208:47:array ref', stdlib.UInt_max, 7)];
              const v272 = stdlib.eq(v269, v270);
              const v274 = v272 ? stdlib.checkedBigNumberify('./index.rsh:208:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:208:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:210:32:decimal', stdlib.UInt_max, 8)), {
                at: './index.rsh:210:31:application',
                fs: ['at ./index.rsh:209:11:application call to [unknown function] (defined at: ./index.rsh:209:23:function exp)'],
                msg: 'loadingResult',
                who: 'deployer'
                });
              
              const v281 = v129[stdlib.checkedBigNumberify('./index.rsh:213:34:array ref', stdlib.UInt_max, 8)];
              const v282 = v98[stdlib.checkedBigNumberify('./index.rsh:213:47:array ref', stdlib.UInt_max, 8)];
              const v284 = stdlib.eq(v281, v282);
              const v286 = v284 ? stdlib.checkedBigNumberify('./index.rsh:213:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:213:58:decimal', stdlib.UInt_max, 0);
              const v287 = v116[stdlib.checkedBigNumberify('./index.rsh:214:34:array ref', stdlib.UInt_max, 8)];
              const v288 = v107[stdlib.checkedBigNumberify('./index.rsh:214:47:array ref', stdlib.UInt_max, 8)];
              const v290 = stdlib.eq(v287, v288);
              const v292 = v290 ? stdlib.checkedBigNumberify('./index.rsh:214:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:214:58:decimal', stdlib.UInt_max, 0);
              stdlib.protect(ctc1, await interact.loadingResult(stdlib.checkedBigNumberify('./index.rsh:216:32:decimal', stdlib.UInt_max, 9)), {
                at: './index.rsh:216:31:application',
                fs: ['at ./index.rsh:215:11:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
                msg: 'loadingResult',
                who: 'deployer'
                });
              
              const v299 = stdlib.add(v142, v160);
              const v300 = stdlib.add(v299, v178);
              const v301 = stdlib.add(v300, v196);
              const v302 = stdlib.add(v301, v214);
              const v303 = stdlib.add(v302, v232);
              const v304 = stdlib.add(v303, v250);
              const v305 = stdlib.add(v304, v268);
              const v306 = stdlib.add(v305, v286);
              const v307 = stdlib.add(v148, v166);
              const v308 = stdlib.add(v307, v184);
              const v309 = stdlib.add(v308, v202);
              const v310 = stdlib.add(v309, v220);
              const v311 = stdlib.add(v310, v238);
              const v312 = stdlib.add(v311, v256);
              const v313 = stdlib.add(v312, v274);
              const v314 = stdlib.add(v313, v292);
              const v315 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:223:21:decimal', stdlib.UInt_max, 1));
              let v316;
              const v317 = stdlib.gt(v306, v314);
              if (v317) {
                v316 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                const v319 = stdlib.gt(v314, v306);
                if (v319) {
                  v316 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  v316 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              const cv42 = v315;
              const cv43 = v316;
              const cv435 = v132;
              const cv437 = v437;
              
              v42 = cv42;
              v43 = cv43;
              v435 = cv435;
              v437 = cv437;
              
              continue;
              
              }
            }
          }
        }
      }
    const v398 = stdlib.eq(v43, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v401 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:231:14:decimal', stdlib.UInt_max, 2), v31);
    const v403 = v398 ? v30 : v38;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v43), {
      at: './index.rsh:235:26:application',
      fs: ['at ./index.rsh:234:9:application call to [unknown function] (defined at: ./index.rsh:234:21:function exp)'],
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
// "./index.rsh:63:7:dot"
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
// "./index.rsh:77:7:dot"
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
// "[at ./index.rsh:77:62:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:77:62:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "./index.rsh:97:9:dot"
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
// "./index.rsh:97:9:dot"
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
// "[at ./index.rsh:97:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:97:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "./index.rsh:108:9:dot"
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
// "./index.rsh:108:9:dot"
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
// "[at ./index.rsh:108:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:108:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "./index.rsh:118:9:dot"
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
// "./index.rsh:118:9:dot"
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
// "[at ./index.rsh:118:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:118:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "./index.rsh:124:9:dot"
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
// "./index.rsh:124:9:dot"
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
// "[at ./index.rsh:124:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:124:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
load 255
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:133:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
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
// "./index.rsh:139:9:dot"
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
// "./index.rsh:139:9:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:140:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 251
load 246
itob
load 245
concat
keccak256
==
assert
int 0
int 1
load 245
substring 0 8
btoi
load 250
substring 0 8
btoi
==
select
int 0
int 1
load 245
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
load 245
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
load 245
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
load 245
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
load 245
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
load 245
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
load 245
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
load 245
substring 64 72
btoi
load 250
substring 64 72
btoi
==
select
+
store 243
int 0
int 1
load 248
substring 0 8
btoi
load 249
substring 0 8
btoi
==
select
int 0
int 1
load 248
substring 8 16
btoi
load 249
substring 8 16
btoi
==
select
+
int 0
int 1
load 248
substring 16 24
btoi
load 249
substring 16 24
btoi
==
select
+
int 0
int 1
load 248
substring 24 32
btoi
load 249
substring 24 32
btoi
==
select
+
int 0
int 1
load 248
substring 32 40
btoi
load 249
substring 32 40
btoi
==
select
+
int 0
int 1
load 248
substring 40 48
btoi
load 249
substring 40 48
btoi
==
select
+
int 0
int 1
load 248
substring 48 56
btoi
load 249
substring 48 56
btoi
==
select
+
int 0
int 1
load 248
substring 56 64
btoi
load 249
substring 56 64
btoi
==
select
+
int 0
int 1
load 248
substring 64 72
btoi
load 249
substring 64 72
btoi
==
select
+
store 242
load 243
load 242
>
bz l0
int 2
store 241
b l1
l0:
load 242
load 243
>
bz l2
int 0
store 241
b l3
l2:
int 1
store 241
l3:
l1:
load 241
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
l4:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
load 255
load 241
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
                "name": "v437",
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
                "name": "v437",
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
                "name": "v437",
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
                "name": "v437",
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
                "name": "v437",
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
                "name": "v437",
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
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v437",
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
                "name": "v435",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v437",
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
                "name": "v437",
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
                "name": "v437",
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
                "name": "v437",
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
                "name": "v437",
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
                "name": "v437",
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
                "name": "v437",
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
                "name": "v437",
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
                "name": "v437",
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
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v435",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v437",
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
                "name": "v435",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v437",
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
                "name": "v437",
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
                "name": "v437",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382528251808201845260008082529251815283518083018490529051818501528351808203850181526060909101909352825192019190912090556122eb806100826000396000f3fe6080604052600436106100c65760003560e01c8063a44daa431161007f578063c449d69611610059578063c449d6961461017f578063daa9593314610192578063df3ceab4146101a5578063e163d7c4146101b8576100cd565b8063a44daa4314610146578063b537725c14610159578063bed83c511461016c576100cd565b80632438df70146100d257806325a98d59146100e757806356de2b46146100fa5780635afe30821461010d5780639532ef01146101205780639c7585ed14610133576100cd565b366100cd57005b600080fd5b6100e56100e0366004611add565b6101cb565b005b6100e56100f5366004611a44565b6102de565b6100e5610108366004611a29565b6103ea565b6100e561011b366004611aba565b6104ed565b6100e561012e366004611acc565b61094d565b6100e5610141366004611a60565b610a6a565b6100e5610154366004611a29565b610be3565b6100e5610167366004611a72565b610db6565b6100e561017a366004611a84565b610eb9565b6100e561018d366004611a96565b611064565b6100e56101a0366004611aa8565b611163565b6100e56101b3366004611a44565b611358565b6100e56101c6366004611add565b61154e565b6040516101df906001908390602001612026565b6040516020818303038152906040528051906020012060001c6000541461020557600080fd5b60008055610218600a6040830135612268565b431061022357600080fd5b3460208201351461023357600080fd5b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516102629190611fb0565b60405180910390a1610272611838565b61027f6020830183611a08565b81516001600160a01b0390911690528051602080840135918101829052825133604091820152818401805160009052805160019301929092529051439101526102c89080612268565b6020820151606001526102da8161164b565b5050565b6040516102f2906006908390602001611ffc565b6040516020818303038152906040528051906020012060001c6000541461031857600080fd5b6000805561032b600a60a0830135612268565b43101561033757600080fd5b341561034257600080fd5b336103506020830183611a08565b6001600160a01b03161461036357600080fd5b6103706020820182611a08565b6040516001600160a01b03919091169060c083013580156108fc02916000818181858888f193505050501580156103ab573d6000803e3d6000fd5b507fd942081c00e0783013599d1067e28627907deb698319705d718c4f8638cceec5816040516103db9190611e92565b60405180910390a16000805533ff5b6040516103fe906004908390602001612254565b6040516020818303038152906040528051906020012060001c6000541461042457600080fd5b60008055610437600a6080830135612268565b43101561044357600080fd5b341561044e57600080fd5b3361045f6060830160408401611a08565b6001600160a01b03161461047257600080fd5b6104826060820160408301611a08565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f193505050501580156104bd573d6000803e3d6000fd5b507f52f29590b7a33c9f2af14c2e2858ae5418a18262d881789f018d972bc9218855816040516103db9190611e45565b60405161050190600e908390602001612194565b6040516020818303038152906040528051906020012060001c6000541461052757600080fd5b6000808055604080516060810182528281526020810183905290810191909152341561055257600080fd5b336105636060840160408501611a08565b6001600160a01b03161461057657600080fd5b6040516105929061044084013590610460850190602001611fe0565b60408051601f1981840301815291905280516020909101206080830135146105b957600080fd5b6105608201356101a0830135146105d15760006105d4565b60015b610540830135610180840135146105ec5760006105ef565b60015b6105208401356101608501351461060757600061060a565b60015b61050085013561014086013514610622576000610625565b60015b6104e08601356101208701351461063d576000610640565b60015b6104c08701356101008801351461065857600061065b565b60015b6104a088013560e089013514610672576000610675565b60015b61048089013560c08a01351461068c57600061068f565b60015b6104608a013560a08b0135146106a65760006106a9565b60015b6106b39190612268565b6106bd9190612268565b6106c79190612268565b6106d19190612268565b6106db9190612268565b6106e59190612268565b6106ef9190612268565b6106f99190612268565b81526103e08201356102c083013514610713576000610716565b60015b6103c08301356102a08401351461072e576000610731565b60015b6103a08401356102808501351461074957600061074c565b60015b61038085013561026086013514610764576000610767565b60015b6103608601356102408701351461077f576000610782565b60015b6103408701356102208801351461079a57600061079d565b60015b610320880135610200890135146107b55760006107b8565b60015b6103008901356101e08a0135146107d05760006107d3565b60015b6102e08a01356101c08b0135146107eb5760006107ee565b60015b6107f89190612268565b6108029190612268565b61080c9190612268565b6108169190612268565b6108209190612268565b61082a9190612268565b6108349190612268565b61083e9190612268565b6020820181905281511115610859576002604082015261087a565b805160208201511115610872576000604082015261087a565b600160408201525b7f13a223441d633207cb5f75925ae8c30c0bb4b9c38f456fe2bdddd5506dd099a9826040516108a99190611f90565b60405180910390a16108b9611838565b6108c66020840184611a08565b81516001600160a01b03909116905280516020808501359101526108f06060840160408501611a08565b81516001600160a01b0390911660409091015261091260016060850135612268565b6020808301805192909252604080850151835190920191909152815143910152516104208401356060909101526109488161164b565b505050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461098a57600080fd5b600080553460208201351461099e57600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a1610a08604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a0015b60408051601f1981840301815291905280516020909101206000555050565b604051610a7e906008908390602001612011565b6040516020818303038152906040528051906020012060001c60005414610aa457600080fd5b60008055610ab7600a60c0830135612268565b4310610ac257600080fd5b3415610acd57600080fd5b33610adb6020830183611a08565b6001600160a01b031614610aee57600080fd5b7fb119b5f000672a135c60da3cad35917d0a2578b756000555e91b5b24e5d43b8381604051610b1d9190611ec3565b60405180910390a1610b2d611891565b610b3a6020830183611a08565b6001600160a01b0316815260208083013590820152610b5f6060830160408401611a08565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015260a080840135908301528051610120818101909252906101008401906009908390839080828437600092019190915250505060c08201524360e080830191909152820135610100820152604051610a4b90600a90839060200161204f565b604051610bf7906004908390602001612254565b6040516020818303038152906040528051906020012060001c60005414610c1d57600080fd5b60008055610c30600a6080830135612268565b4310610c3b57600080fd5b3415610c4657600080fd5b33610c546020830183611a08565b6001600160a01b031614610c6757600080fd5b7f5b0efdf573441f178439b5a8f6c1b19f0030d4dc9f308be7b6cb5a501bef75e081604051610c969190611e29565b60405180910390a1610cf06040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b610cfd6020830183611a08565b6001600160a01b0316815260208083013590820152610d226060830160408401611a08565b6001600160a01b03908116604083810191825260608581013581860190815260c08088013560808089019182524360a0808b01918252808c0135858c01908152885160066020808301919091528d518d169a82019a909a52988c0151978901979097529751909816908601529151948401949094525192820192909252915160e08301525161010082015261012001610a4b565b604051610dca906008908390602001612011565b6040516020818303038152906040528051906020012060001c60005414610df057600080fd5b60008055610e03600a60c0830135612268565b431015610e0f57600080fd5b3415610e1a57600080fd5b33610e2b6060830160408401611a08565b6001600160a01b031614610e3e57600080fd5b610e4e6060820160408301611a08565b6040516001600160a01b03919091169060e083013580156108fc02916000818181858888f19350505050158015610e89573d6000803e3d6000fd5b507f239047e7ecda813bd5d0deda901af2cfd51f309e8f9aa8f06ae255dc092fa8a4816040516103db9190611eea565b604051610ecd90600a90839060200161203a565b6040516020818303038152906040528051906020012060001c60005414610ef357600080fd5b60008055610f07600a6101e0830135612268565b4310610f1257600080fd5b3415610f1d57600080fd5b33610f2e6060830160408401611a08565b6001600160a01b031614610f4157600080fd5b7f0cdc0cfaa7686287db47ae7494ae8f1a08b4daa035f10e19f0dc0d7f4cc2922881604051610f709190611f1d565b60405180910390a1610f806118f5565b610f8d6020830183611a08565b6001600160a01b0316815260208083013590820152610fb26060830160408401611a08565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015260a0808401359083015280516101208181019092529060c08401906009908390839080828437600092019190915250505060c082015260408051610120818101909252906102208401906009908390839080828437600092019190915250505060e082015243610100820152610200820135610120820152604051610a4b90600c9083906020016120f3565b60405161107890600a90839060200161203a565b6040516020818303038152906040528051906020012060001c6000541461109e57600080fd5b600080556110b2600a6101e0830135612268565b4310156110be57600080fd5b34156110c957600080fd5b336110d76020830183611a08565b6001600160a01b0316146110ea57600080fd5b6110f76020820182611a08565b6040516001600160a01b03919091169061020083013580156108fc02916000818181858888f19350505050158015611133573d6000803e3d6000fd5b507f6c56c36996ccdee054b8c40ed596e1e2083a2c9d2d87d5aba42753ea19798c18816040516103db9190611f44565b60405161117790600c9083906020016120de565b6040516020818303038152906040528051906020012060001c6000541461119d57600080fd5b6000805534156111ac57600080fd5b336111ba6020830183611a08565b6001600160a01b0316146111cd57600080fd5b6040516111e99061034083013590610360840190602001611fe0565b60408051601f19818403018152919052805160209091012060808201351461121057600080fd5b7f436154ca29e5488865822cc3b08aba7f1c29a22ade0bd4453652c9c74c6be9098160405161123f9190611f69565b60405180910390a161124f611952565b61125c6020830183611a08565b6001600160a01b03168152602080830135908201526112816060830160408401611a08565b6001600160a01b03166040808301919091526060808401359083015260a0830135608083015280516101208181019092529060c08401906009908390839080828437600092019190915250505060a082015260408051610120818101909252906101e08401906009908390839080828437600092019190915250505060c082015260408051610120818101909252906103608401906009908390839080828437600092019190915250505060e082015243610100820152610320820135610120820152604051610a4b90600e9083906020016121a9565b60405161136c906006908390602001611ffc565b6040516020818303038152906040528051906020012060001c6000541461139257600080fd5b600080556113a5600a60a0830135612268565b43106113b057600080fd5b34156113bb57600080fd5b336113cc6060830160408401611a08565b6001600160a01b0316146113df57600080fd5b7fee312f330bc747f7ed8a854ea245bb93733f831d3c4296b2fd99db1023ff8f428160405161140e9190611e75565b60405180910390a161147060405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b61147d6020830183611a08565b6001600160a01b03168152602080830135908201526114a26060830160408401611a08565b6001600160a01b03908116604083810191825260608581013581860190815260808088013581880190815260e0808a013560a0808b019182524360c0808d01918252808e0135858e019081528a5160086020808301919091528f518f169c82019c909c529a8e0151998b01999099529951909a16948801949094529351928601929092525194840194909452519282019290925291516101008301525161012082015261014001610a4b565b604051611562906001908390602001612026565b6040516020818303038152906040528051906020012060001c6000541461158857600080fd5b6000805561159b600a6040830135612268565b4310156115a757600080fd5b34156115b257600080fd5b336115c06020830183611a08565b6001600160a01b0316146115d357600080fd5b6115e06020820182611a08565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f1935050505015801561161b573d6000803e3d6000fd5b507fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d85623013816040516103db9190611fb0565b6001816020015160200151141561175e576116a76040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840190815284516040908101518416818601908152838701805151606080890191825282518501516080808b01918252935182015160a0808c01918252875160049a81019a909a528b518b16978a0197909752965191880191909152925190961690850152935190830152915160c0820152905160e08201526101000160408051601f198184030181529190528051602090910120600055506117c8565b6040805160c0810182526000818301818152606083018281526080840183815260a085018481528386526020808701959095528751516001600160a01b0390811690945287518501519092528651909501519091169093528381015101519091526102da816117cb565b50565b8051606001516002146117e3578051604001516117e7565b8051515b6001600160a01b03166108fc82600001516020015160026118089190612280565b6040518115909202916000818181858888f19350505050158015611830573d6000803e3d6000fd5b506000805533ff5b6040805160a0810182526000918101828152606082018390526080820192909252908190815260200161188c6040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016118e16119a4565b815260200160008152602001600081525090565b60405180610140016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016119456119a4565b81526020016118e16119a4565b60405180610140016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200161199b6119a4565b81526020016119455b6040518061012001604052806009906020820280368337509192915050565b80356001600160a01b03811681146119da57600080fd5b919050565b600060e082840312156119f0578081fd5b50919050565b600061010082840312156119f0578081fd5b600060208284031215611a19578081fd5b611a22826119c3565b9392505050565b600060e08284031215611a3a578081fd5b611a2283836119df565b60006101008284031215611a56578081fd5b611a2283836119f6565b600061022082840312156119f0578081fd5b600061012082840312156119f0578081fd5b600061034082840312156119f0578081fd5b600061024082840312156119f0578081fd5b600061048082840312156119f0578081fd5b600061058082840312156119f0578081fd5b6000604082840312156119f0578081fd5b6000608082840312156119f0578081fd5b61012080828437600081840152505050565b8060005b6009811015611b23578151845260209384019390910190600101611b04565b50505050565b6001600160a01b0380611b3b836119c3565b1683526020820135602084015280611b55604084016119c3565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b0380611b9a836119c3565b1683526020820135602084015280611bb4604084016119c3565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b03611c02826119c3565b16825260208181013590830152604090810135910152565b6001600160a01b0380611c2c836119c3565b1683526020820135602084015280611c46604084016119c3565b16604084015250606081013560608301526080810135608083015260a081013560a083015261012060c0820160c08401376101e0818101359083015261020090810135910152565b6001600160a01b03611c9f826119c3565b16825260208101356020830152611cb8604082016119c3565b6001600160a01b038116604084015250606081013560608301526080810135608083015260a081013560a0830152611cf660c0830160c08301611aee565b6101e0611d07818401828401611aee565b50610300818101359083015261032090810135910152565b6001600160a01b03611d30826119c3565b16825260208101356020830152611d49604082016119c3565b6001600160a01b0381166040840152506060810135606083015260808101356080830152611d7d60a0830160a08301611aee565b6101c0611d8e818401828401611aee565b506102e0611da0818401828401611aee565b50610400818101359083015261042090810135910152565b8035825261012060208201602084013760006101408301525050565b6001600160a01b0380611de6836119c3565b1683526020820135602084015280611e00604084016119c3565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b60e08101611e378284611dd4565b60c092830135919092015290565b60e08101611e538284611dd4565b60c0830135801515808214611e6757600080fd5b8060c0850152505092915050565b6101008101611e848284611b29565b60e092830135919092015290565b6101008101611ea18284611b29565b60e0830135801515808214611eb557600080fd5b8060e0850152505092915050565b6102208101611ed28284611b88565b61010061012081850182850137506000815292915050565b6101208101611ef98284611b88565b61010080840135801515808214611f0f57600080fd5b808386015250505092915050565b6103408101611f2c8284611c1a565b61022061012081850182850137506000815292915050565b6102408101611f538284611c1a565b61022080840135801515808214611f0f57600080fd5b6104808101611f788284611c8e565b610340611f89818401828601611db8565b5092915050565b6105808101611f9f8284611d1f565b610440611f89818401828601611db8565b60808101611fbe8284611bf1565b6060830135801515808214611fd257600080fd5b806060850152505092915050565b8281526101408101610120836020840137600081529392505050565b8281526101008101611a226020830184611b29565b8281526101208101611a226020830184611b88565b82815260808101611a226020830184611bf1565b8281526102408101611a226020830184611c1a565b60006102408201905083825260018060a01b03835116602083015260208301516040830152604083015161208e60608401826001600160a01b03169052565b5060608301516080830152608083015160a083015260a083015160c083015260c08301516120bf60e0840182611b00565b5060e08301516102008301526101008301516102208301529392505050565b8281526103608101611a226020830184611c8e565b82815281516001600160a01b03166020820152610360810160208301516040830152604083015161212f60608401826001600160a01b03169052565b5060608301516080830152608083015160a083015260a083015160c083015260c083015161216060e0840182611b00565b5060e0830151612174610200840182611b00565b506101008301516103208301526101208301516103408301529392505050565b8281526104608101611a226020830184611d1f565b82815281516001600160a01b0316602082015261046081016020830151604083015260408301516121e560608401826001600160a01b03169052565b5060608301516080830152608083015160a083015260a083015161220c60c0840182611b00565b5060c08301516122206101e0840182611b00565b5060e0830151612234610300840182611b00565b506101008301516104208301526101208301516104408301529392505050565b82815260e08101611a226020830184611dd4565b6000821982111561227b5761227b61229f565b500190565b600081600019048311821515161561229a5761229a61229f565b500290565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220e44901f6351e96b59b4e6f63423af9d8128102cde62d3376582282e52cd4896e64736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

