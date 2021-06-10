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
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 16));
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc3, ctc3, ctc3, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc3, ctc3, ctc3, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc3, ctc3, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc3, ctc3, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc3, ctc0, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc3, ctc0]);
  const ctc18 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc0, ctc0]);
  const ctc19 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc0]);
  const ctc20 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc0, ctc0]);
  const ctc21 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc0]);
  const ctc22 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc23 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  
  
  const v26 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v31] = txn1.data;
  const v34 = txn1.time;
  const v30 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v31), {
    at: './index.rsh:89:27:application',
    fs: ['at ./index.rsh:88:11:application call to [unknown function] (defined at: ./index.rsh:88:15:function exp)'],
    msg: 'acceptWager',
    who: 'attacher'
    });
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:91:7:dot', stdlib.UInt_max, 2), [ctc6, ctc0, ctc0], [v30, v31, v34], [v31, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:36:31:decimal', stdlib.UInt_max, 10), (async (txn2) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc22, [stdlib.checkedBigNumberify('./index.rsh:91:7:dot', stdlib.UInt_max, 1), v30, v31, v34]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc23, [stdlib.checkedBigNumberify('./index.rsh:91:7:dot', stdlib.UInt_max, 1), v30, v31]);
    const [] = txn2.data;
    const v41 = txn2.time;
    const v38 = txn2.from;
    
    const v40 = stdlib.add(v31, v31);
    sim_r.txns.push({
      amt: v31,
      kind: 'to',
      tok: undefined
      });
    const v42 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    const v280 = v41;
    const v282 = v40;
    
    if ((() => {
      const v55 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v55;})()) {
      sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:97:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v280, v282]);
      sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:97:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v282]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:97:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v243 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v246 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:172:14:decimal', stdlib.UInt_max, 2), v31);
      const v248 = v243 ? v30 : v38;
      sim_r.txns.push({
        amt: v246,
        kind: 'from',
        to: v248,
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
    const v265 = txn3.time;
    const v262 = txn3.from;
    ;
    const v264 = stdlib.addressEq(v30, v262);
    stdlib.assert(v264, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:91:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'attacher'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:76:31:application',
      fs: ['at ./index.rsh:75:11:application call to [unknown function] (defined at: ./index.rsh:75:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:74:30:function exp)', 'at ./index.rsh:91:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    let v42 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v280 = v41;
    let v282 = v40;
    
    while ((() => {
      const v55 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v55;})()) {
      const txn3 = await (ctc.recv(6, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:36:31:decimal', stdlib.UInt_max, 10)));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3), [ctc6, ctc0, ctc6, ctc0, ctc0], [v30, v31, v38, v280, v282], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v30, v31, v38, v280, v282]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v30, v31, v38, v282]);
          const [] = txn4.data;
          const v228 = txn4.time;
          const v225 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v227 = stdlib.addressEq(v38, v225);
          stdlib.assert(v227, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:105:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'attacher'
            });
          sim_r.txns.push({
            amt: v282,
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
        const v228 = txn4.time;
        const v225 = txn4.from;
        ;
        const v227 = stdlib.addressEq(v38, v225);
        stdlib.assert(v227, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:105:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'attacher'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:76:31:application',
          fs: ['at ./index.rsh:75:11:application call to [unknown function] (defined at: ./index.rsh:75:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:74:30:function exp)', 'at ./index.rsh:105:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'attacher'
          });
        
        return;
        }
      else {
        const [v66] = txn3.data;
        const v69 = txn3.time;
        const v65 = txn3.from;
        ;
        const v68 = stdlib.addressEq(v30, v65);
        stdlib.assert(v68, {
          at: './index.rsh:105:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'attacher'
          });
        const v73 = stdlib.protect(ctc3, await interact.selectShips(), {
          at: './index.rsh:112:45:application',
          fs: ['at ./index.rsh:111:13:application call to [unknown function] (defined at: ./index.rsh:111:17:function exp)'],
          msg: 'selectShips',
          who: 'attacher'
          });
        const v75 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:60:31:application',
          fs: ['at ./index.rsh:113:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:111:13:application call to [unknown function] (defined at: ./index.rsh:111:17:function exp)'],
          msg: 'random',
          who: 'attacher'
          });
        const v76 = stdlib.digest(ctc4, [v75, v73]);
        
        const txn4 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:116:9:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc2, ctc0, ctc0, ctc2], [v30, v31, v38, v66, v69, v282, v76], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, stdlib.checkedBigNumberify('./index.rsh:36:31:decimal', stdlib.UInt_max, 10), (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('./index.rsh:116:9:dot', stdlib.UInt_max, 6), v30, v31, v38, v66, v69, v282]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('./index.rsh:116:9:dot', stdlib.UInt_max, 6), v30, v31, v38, v66, v282]);
          const [v79] = txn4.data;
          const v82 = txn4.time;
          const v78 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v81 = stdlib.addressEq(v38, v78);
          stdlib.assert(v81, {
            at: './index.rsh:116:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          sim_r.nextSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:117:15:after expr stmt semicolon', stdlib.UInt_max, 8), v30, v31, v38, v66, v79, v82, v282]);
          sim_r.nextSt_noTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('./index.rsh:117:15:after expr stmt semicolon', stdlib.UInt_max, 8), v30, v31, v38, v66, v79, v282]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:117:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          
          return sim_r;
          })));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv(9, 0, [], false, false));
          const [] = txn5.data;
          const v209 = txn5.time;
          const v206 = txn5.from;
          ;
          const v208 = stdlib.addressEq(v30, v206);
          stdlib.assert(v208, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:116:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'attacher'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:76:31:application',
            fs: ['at ./index.rsh:75:11:application call to [unknown function] (defined at: ./index.rsh:75:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:74:30:function exp)', 'at ./index.rsh:116:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'attacher'
            });
          
          return;
          }
        else {
          const [v79] = txn4.data;
          const v82 = txn4.time;
          const v78 = txn4.from;
          ;
          const v81 = stdlib.addressEq(v38, v78);
          stdlib.assert(v81, {
            at: './index.rsh:116:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          const txn5 = await (ctc.recv(10, 1, [ctc3], false, stdlib.checkedBigNumberify('./index.rsh:36:31:decimal', stdlib.UInt_max, 10)));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv(11, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc2, ctc2, ctc0, ctc0], [v30, v31, v38, v66, v79, v82, v282], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v30, v31, v38, v66, v79, v82, v282]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v30, v31, v38, v66, v79, v282]);
              const [] = txn6.data;
              const v190 = txn6.time;
              const v187 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v189 = stdlib.addressEq(v38, v187);
              stdlib.assert(v189, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:126:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'attacher'
                });
              sim_r.txns.push({
                amt: v282,
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
            const v190 = txn6.time;
            const v187 = txn6.from;
            ;
            const v189 = stdlib.addressEq(v38, v187);
            stdlib.assert(v189, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:126:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'attacher'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:76:31:application',
              fs: ['at ./index.rsh:75:11:application call to [unknown function] (defined at: ./index.rsh:75:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:74:30:function exp)', 'at ./index.rsh:126:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'attacher'
              });
            
            return;
            }
          else {
            const [v88] = txn5.data;
            const v91 = txn5.time;
            const v87 = txn5.from;
            ;
            const v90 = stdlib.addressEq(v30, v87);
            stdlib.assert(v90, {
              at: './index.rsh:126:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'attacher'
              });
            const v95 = stdlib.protect(ctc3, await interact.guessShips(), {
              at: './index.rsh:130:56:application',
              fs: ['at ./index.rsh:129:13:application call to [unknown function] (defined at: ./index.rsh:129:17:function exp)'],
              msg: 'guessShips',
              who: 'attacher'
              });
            
            const txn6 = await (ctc.sendrecv(12, 1, stdlib.checkedBigNumberify('./index.rsh:132:9:dot', stdlib.UInt_max, 6), [ctc6, ctc0, ctc6, ctc2, ctc2, ctc3, ctc0, ctc0, ctc3], [v30, v31, v38, v66, v79, v88, v91, v282, v95], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, stdlib.checkedBigNumberify('./index.rsh:36:31:decimal', stdlib.UInt_max, 10), (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:132:9:dot', stdlib.UInt_max, 10), v30, v31, v38, v66, v79, v88, v91, v282]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:132:9:dot', stdlib.UInt_max, 10), v30, v31, v38, v66, v79, v88, v282]);
              const [v97] = txn6.data;
              const v100 = txn6.time;
              const v96 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v99 = stdlib.addressEq(v38, v96);
              stdlib.assert(v99, {
                at: './index.rsh:132:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:133:15:after expr stmt semicolon', stdlib.UInt_max, 12), v30, v31, v38, v66, v79, v88, v97, v100, v282]);
              sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:133:15:after expr stmt semicolon', stdlib.UInt_max, 12), v30, v31, v38, v66, v79, v88, v97, v282]);
              sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:133:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              
              return sim_r;
              })));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.recv(13, 0, [], false, false));
              const [] = txn7.data;
              const v171 = txn7.time;
              const v168 = txn7.from;
              ;
              const v170 = stdlib.addressEq(v30, v168);
              stdlib.assert(v170, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:132:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'attacher'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:76:31:application',
                fs: ['at ./index.rsh:75:11:application call to [unknown function] (defined at: ./index.rsh:75:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:74:30:function exp)', 'at ./index.rsh:132:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'attacher'
                });
              
              return;
              }
            else {
              const [v97] = txn6.data;
              const v100 = txn6.time;
              const v96 = txn6.from;
              ;
              const v99 = stdlib.addressEq(v38, v96);
              stdlib.assert(v99, {
                at: './index.rsh:132:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const txn7 = await (ctc.recv(14, 2, [ctc0, ctc3], false, false));
              const [v105, v106] = txn7.data;
              const v109 = txn7.time;
              const v104 = txn7.from;
              ;
              const v108 = stdlib.addressEq(v30, v104);
              stdlib.assert(v108, {
                at: './index.rsh:140:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v111 = stdlib.digest(ctc4, [v105, v106]);
              const v112 = stdlib.digestEq(v66, v111);
              stdlib.assert(v112, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:141:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              const txn8 = await (ctc.sendrecv(15, 2, stdlib.checkedBigNumberify('./index.rsh:147:9:dot', stdlib.UInt_max, 7), [ctc6, ctc0, ctc6, ctc2, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc3], [v30, v31, v38, v79, v88, v97, v106, v109, v282, v75, v73], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc3], true, true, false, (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:147:9:dot', stdlib.UInt_max, 14), v30, v31, v38, v79, v88, v97, v106, v109, v282]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:147:9:dot', stdlib.UInt_max, 14), v30, v31, v38, v79, v88, v97, v106, v282]);
                const [v118, v119] = txn8.data;
                const v122 = txn8.time;
                const v117 = txn8.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v121 = stdlib.addressEq(v38, v117);
                stdlib.assert(v121, {
                  at: './index.rsh:147:9:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'attacher'
                  });
                const v124 = stdlib.digest(ctc4, [v118, v119]);
                const v125 = stdlib.digestEq(v79, v124);
                stdlib.assert(v125, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:148:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'attacher'
                  });
                const v127 = stdlib.checkedBigNumberify('./index.rsh:151:40:decimal', stdlib.UInt_max, 0);
                const v128 = stdlib.checkedBigNumberify('./index.rsh:151:43:decimal', stdlib.UInt_max, 0);
                const v129 = stdlib.checkedBigNumberify('./index.rsh:151:37:decimal', stdlib.UInt_max, 0);
                const v283 = v122;
                const v285 = v282;
                
                if ((() => {
                  const v136 = stdlib.lt(v129, stdlib.checkedBigNumberify('./index.rsh:35:19:decimal', stdlib.UInt_max, 16));
                  
                  return v136;})()) {
                  sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v283, v285]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v285]);
                  sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                  sim_r.isHalt = false;
                  }
                else {
                  let v161;
                  const v162 = stdlib.gt(v127, v128);
                  if (v162) {
                    v161 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                    }
                  else {
                    const v164 = stdlib.gt(v128, v127);
                    if (v164) {
                      v161 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                      }
                    else {
                      v161 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                      }
                    }
                  const cv42 = v161;
                  const cv280 = v283;
                  const cv282 = v285;
                  
                  (() => {
                    const v42 = cv42;
                    const v280 = cv280;
                    const v282 = cv282;
                    
                    if ((() => {
                      const v55 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                      
                      return v55;})()) {
                      sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:97:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v280, v282]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:97:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v282]);
                      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:97:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                      sim_r.isHalt = false;
                      }
                    else {
                      const v243 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                      const v246 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:172:14:decimal', stdlib.UInt_max, 2), v31);
                      const v248 = v243 ? v30 : v38;
                      sim_r.txns.push({
                        amt: v246,
                        kind: 'from',
                        to: v248,
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
              const [v118, v119] = txn8.data;
              const v122 = txn8.time;
              const v117 = txn8.from;
              ;
              const v121 = stdlib.addressEq(v38, v117);
              stdlib.assert(v121, {
                at: './index.rsh:147:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v124 = stdlib.digest(ctc4, [v118, v119]);
              const v125 = stdlib.digestEq(v79, v124);
              stdlib.assert(v125, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:148:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              let v127 = stdlib.checkedBigNumberify('./index.rsh:151:40:decimal', stdlib.UInt_max, 0);
              let v128 = stdlib.checkedBigNumberify('./index.rsh:151:43:decimal', stdlib.UInt_max, 0);
              let v129 = stdlib.checkedBigNumberify('./index.rsh:151:37:decimal', stdlib.UInt_max, 0);
              let v283 = v122;
              let v285 = v282;
              
              while ((() => {
                const v136 = stdlib.lt(v129, stdlib.checkedBigNumberify('./index.rsh:35:19:decimal', stdlib.UInt_max, 16));
                
                return v136;})()) {
                const txn9 = await (ctc.sendrecv(18, 0, stdlib.checkedBigNumberify('./index.rsh:155:11:dot', stdlib.UInt_max, 10), [ctc6, ctc0, ctc6, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0], [v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v283, v285], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn9) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:155:11:dot', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v283, v285]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:155:11:dot', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v285]);
                  const [] = txn9.data;
                  const v141 = txn9.time;
                  const v138 = txn9.from;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v140 = stdlib.addressEq(v38, v138);
                  stdlib.assert(v140, {
                    at: './index.rsh:155:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'attacher'
                    });
                  const v142 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:158:15:decimal', stdlib.UInt_max, 1));
                  const v144 = v119[v129];
                  const v146 = v88[v129];
                  const v148 = stdlib.eq(v144, v146);
                  const v150 = stdlib.add(v127, stdlib.checkedBigNumberify('./index.rsh:159:50:decimal', stdlib.UInt_max, 1));
                  const v151 = v148 ? v150 : v127;
                  const v153 = v106[v129];
                  const v155 = v97[v129];
                  const v157 = stdlib.eq(v153, v155);
                  const v159 = stdlib.add(v128, stdlib.checkedBigNumberify('./index.rsh:160:50:decimal', stdlib.UInt_max, 1));
                  const v160 = v157 ? v159 : v128;
                  const cv127 = v151;
                  const cv128 = v160;
                  const cv129 = v142;
                  const cv283 = v141;
                  const cv285 = v285;
                  
                  (() => {
                    const v127 = cv127;
                    const v128 = cv128;
                    const v129 = cv129;
                    const v283 = cv283;
                    const v285 = cv285;
                    
                    if ((() => {
                      const v136 = stdlib.lt(v129, stdlib.checkedBigNumberify('./index.rsh:35:19:decimal', stdlib.UInt_max, 16));
                      
                      return v136;})()) {
                      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v283, v285]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v285]);
                      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                      sim_r.isHalt = false;
                      }
                    else {
                      let v161;
                      const v162 = stdlib.gt(v127, v128);
                      if (v162) {
                        v161 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                        }
                      else {
                        const v164 = stdlib.gt(v128, v127);
                        if (v164) {
                          v161 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                          }
                        else {
                          v161 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                          }
                        }
                      const cv42 = v161;
                      const cv280 = v283;
                      const cv282 = v285;
                      
                      (() => {
                        const v42 = cv42;
                        const v280 = cv280;
                        const v282 = cv282;
                        
                        if ((() => {
                          const v55 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                          
                          return v55;})()) {
                          sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:97:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v280, v282]);
                          sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:97:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v282]);
                          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:97:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                          sim_r.isHalt = false;
                          }
                        else {
                          const v243 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                          const v246 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:172:14:decimal', stdlib.UInt_max, 2), v31);
                          const v248 = v243 ? v30 : v38;
                          sim_r.txns.push({
                            amt: v246,
                            kind: 'from',
                            to: v248,
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
                const v141 = txn9.time;
                const v138 = txn9.from;
                ;
                const v140 = stdlib.addressEq(v38, v138);
                stdlib.assert(v140, {
                  at: './index.rsh:155:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'attacher'
                  });
                const v142 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:158:15:decimal', stdlib.UInt_max, 1));
                const v144 = v119[v129];
                const v146 = v88[v129];
                const v148 = stdlib.eq(v144, v146);
                const v150 = stdlib.add(v127, stdlib.checkedBigNumberify('./index.rsh:159:50:decimal', stdlib.UInt_max, 1));
                const v151 = v148 ? v150 : v127;
                const v153 = v106[v129];
                const v155 = v97[v129];
                const v157 = stdlib.eq(v153, v155);
                const v159 = stdlib.add(v128, stdlib.checkedBigNumberify('./index.rsh:160:50:decimal', stdlib.UInt_max, 1));
                const v160 = v157 ? v159 : v128;
                const cv127 = v151;
                const cv128 = v160;
                const cv129 = v142;
                const cv283 = v141;
                const cv285 = v285;
                
                v127 = cv127;
                v128 = cv128;
                v129 = cv129;
                v283 = cv283;
                v285 = cv285;
                
                continue;
                }
              let v161;
              const v162 = stdlib.gt(v127, v128);
              if (v162) {
                v161 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                const v164 = stdlib.gt(v128, v127);
                if (v164) {
                  v161 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  v161 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              const cv42 = v161;
              const cv280 = v283;
              const cv282 = v285;
              
              v42 = cv42;
              v280 = cv280;
              v282 = cv282;
              
              continue;
              
              }
            }
          }
        }
      }
    const v243 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v246 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:172:14:decimal', stdlib.UInt_max, 2), v31);
    const v248 = v243 ? v30 : v38;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v42), {
      at: './index.rsh:176:26:application',
      fs: ['at ./index.rsh:175:9:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp)'],
      msg: 'seeOutcome',
      who: 'attacher'
      });
    
    return;}
  
  
  };
export async function deployer(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 16));
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc1, ctc1, ctc1, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc1, ctc1, ctc1, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc1, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc1, ctc0]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc0, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc0]);
  const ctc18 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0, ctc0]);
  const ctc19 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0]);
  const ctc20 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc0]);
  const ctc21 = stdlib.T_Tuple([ctc0, ctc5, ctc0]);
  const ctc22 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v26 = await ctc.creationTime();
  const v24 = stdlib.protect(ctc0, interact.wager, 'for deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:84:7:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v26, v24], [v24, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc22, [stdlib.checkedBigNumberify('./index.rsh:84:7:dot', stdlib.UInt_max, 0), v26]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:84:7:dot', stdlib.UInt_max, 0)]);
    const [v31] = txn1.data;
    const v34 = txn1.time;
    const v30 = txn1.from;
    
    sim_r.txns.push({
      amt: v31,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('./index.rsh:85:13:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31, v34]);
    sim_r.nextSt_noTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('./index.rsh:85:13:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31]);
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:85:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v31] = txn1.data;
  const v34 = txn1.time;
  const v30 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:36:31:decimal', stdlib.UInt_max, 10)));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), [ctc5, ctc0, ctc0], [v30, v31, v34], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v30, v31, v34]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v30, v31]);
      const [] = txn3.data;
      const v265 = txn3.time;
      const v262 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v264 = stdlib.addressEq(v30, v262);
      stdlib.assert(v264, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:91:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    const v265 = txn3.time;
    const v262 = txn3.from;
    ;
    const v264 = stdlib.addressEq(v30, v262);
    stdlib.assert(v264, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:91:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'deployer'
      });
    ;
    stdlib.protect(ctc10, await interact.informTimeout(), {
      at: './index.rsh:76:31:application',
      fs: ['at ./index.rsh:75:11:application call to [unknown function] (defined at: ./index.rsh:75:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:74:30:function exp)', 'at ./index.rsh:91:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    let v42 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v280 = v41;
    let v282 = v40;
    
    while ((() => {
      const v55 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v55;})()) {
      const v60 = stdlib.protect(ctc1, await interact.selectShips(), {
        at: './index.rsh:101:45:application',
        fs: ['at ./index.rsh:100:13:application call to [unknown function] (defined at: ./index.rsh:100:17:function exp)'],
        msg: 'selectShips',
        who: 'deployer'
        });
      const v62 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:102:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:100:13:application call to [unknown function] (defined at: ./index.rsh:100:17:function exp)'],
        msg: 'random',
        who: 'deployer'
        });
      const v63 = stdlib.digest(ctc2, [v62, v60]);
      
      const txn3 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:105:9:dot', stdlib.UInt_max, 3), [ctc5, ctc0, ctc5, ctc0, ctc0, ctc3], [v30, v31, v38, v280, v282, v63], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, stdlib.checkedBigNumberify('./index.rsh:36:31:decimal', stdlib.UInt_max, 10), (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:105:9:dot', stdlib.UInt_max, 4), v30, v31, v38, v280, v282]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('./index.rsh:105:9:dot', stdlib.UInt_max, 4), v30, v31, v38, v282]);
        const [v66] = txn3.data;
        const v69 = txn3.time;
        const v65 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v68 = stdlib.addressEq(v30, v65);
        stdlib.assert(v68, {
          at: './index.rsh:105:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'deployer'
          });
        sim_r.nextSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:106:15:after expr stmt semicolon', stdlib.UInt_max, 6), v30, v31, v38, v66, v69, v282]);
        sim_r.nextSt_noTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:106:15:after expr stmt semicolon', stdlib.UInt_max, 6), v30, v31, v38, v66, v282]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:106:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv(7, 0, [], false, false));
        const [] = txn4.data;
        const v228 = txn4.time;
        const v225 = txn4.from;
        ;
        const v227 = stdlib.addressEq(v38, v225);
        stdlib.assert(v227, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:105:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'deployer'
          });
        ;
        stdlib.protect(ctc10, await interact.informTimeout(), {
          at: './index.rsh:76:31:application',
          fs: ['at ./index.rsh:75:11:application call to [unknown function] (defined at: ./index.rsh:75:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:74:30:function exp)', 'at ./index.rsh:105:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'deployer'
          });
        
        return;
        }
      else {
        const [v66] = txn3.data;
        const v69 = txn3.time;
        const v65 = txn3.from;
        ;
        const v68 = stdlib.addressEq(v30, v65);
        stdlib.assert(v68, {
          at: './index.rsh:105:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'deployer'
          });
        const txn4 = await (ctc.recv(8, 1, [ctc3], false, stdlib.checkedBigNumberify('./index.rsh:36:31:decimal', stdlib.UInt_max, 10)));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv(9, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), [ctc5, ctc0, ctc5, ctc3, ctc0, ctc0], [v30, v31, v38, v66, v69, v282], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v30, v31, v38, v66, v69, v282]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v30, v31, v38, v66, v282]);
            const [] = txn5.data;
            const v209 = txn5.time;
            const v206 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v208 = stdlib.addressEq(v30, v206);
            stdlib.assert(v208, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:116:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'deployer'
              });
            sim_r.txns.push({
              amt: v282,
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
          const v209 = txn5.time;
          const v206 = txn5.from;
          ;
          const v208 = stdlib.addressEq(v30, v206);
          stdlib.assert(v208, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:116:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'deployer'
            });
          ;
          stdlib.protect(ctc10, await interact.informTimeout(), {
            at: './index.rsh:76:31:application',
            fs: ['at ./index.rsh:75:11:application call to [unknown function] (defined at: ./index.rsh:75:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:74:30:function exp)', 'at ./index.rsh:116:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'deployer'
            });
          
          return;
          }
        else {
          const [v79] = txn4.data;
          const v82 = txn4.time;
          const v78 = txn4.from;
          ;
          const v81 = stdlib.addressEq(v38, v78);
          stdlib.assert(v81, {
            at: './index.rsh:116:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const v86 = stdlib.protect(ctc1, await interact.guessShips(), {
            at: './index.rsh:124:56:application',
            fs: ['at ./index.rsh:123:13:application call to [unknown function] (defined at: ./index.rsh:123:17:function exp)'],
            msg: 'guessShips',
            who: 'deployer'
            });
          
          const txn5 = await (ctc.sendrecv(10, 1, stdlib.checkedBigNumberify('./index.rsh:126:9:dot', stdlib.UInt_max, 5), [ctc5, ctc0, ctc5, ctc3, ctc3, ctc0, ctc0, ctc1], [v30, v31, v38, v66, v79, v82, v282, v86], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, stdlib.checkedBigNumberify('./index.rsh:36:31:decimal', stdlib.UInt_max, 10), (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:126:9:dot', stdlib.UInt_max, 8), v30, v31, v38, v66, v79, v82, v282]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:126:9:dot', stdlib.UInt_max, 8), v30, v31, v38, v66, v79, v282]);
            const [v88] = txn5.data;
            const v91 = txn5.time;
            const v87 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v90 = stdlib.addressEq(v30, v87);
            stdlib.assert(v90, {
              at: './index.rsh:126:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'deployer'
              });
            sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:127:15:after expr stmt semicolon', stdlib.UInt_max, 10), v30, v31, v38, v66, v79, v88, v91, v282]);
            sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:127:15:after expr stmt semicolon', stdlib.UInt_max, 10), v30, v31, v38, v66, v79, v88, v282]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:127:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            
            return sim_r;
            })));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv(11, 0, [], false, false));
            const [] = txn6.data;
            const v190 = txn6.time;
            const v187 = txn6.from;
            ;
            const v189 = stdlib.addressEq(v38, v187);
            stdlib.assert(v189, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:126:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'deployer'
              });
            ;
            stdlib.protect(ctc10, await interact.informTimeout(), {
              at: './index.rsh:76:31:application',
              fs: ['at ./index.rsh:75:11:application call to [unknown function] (defined at: ./index.rsh:75:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:74:30:function exp)', 'at ./index.rsh:126:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'deployer'
              });
            
            return;
            }
          else {
            const [v88] = txn5.data;
            const v91 = txn5.time;
            const v87 = txn5.from;
            ;
            const v90 = stdlib.addressEq(v30, v87);
            stdlib.assert(v90, {
              at: './index.rsh:126:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'deployer'
              });
            const txn6 = await (ctc.recv(12, 1, [ctc1], false, stdlib.checkedBigNumberify('./index.rsh:36:31:decimal', stdlib.UInt_max, 10)));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv(13, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), [ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc0, ctc0], [v30, v31, v38, v66, v79, v88, v91, v282], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v30, v31, v38, v66, v79, v88, v91, v282]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v30, v31, v38, v66, v79, v88, v282]);
                const [] = txn7.data;
                const v171 = txn7.time;
                const v168 = txn7.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v170 = stdlib.addressEq(v30, v168);
                stdlib.assert(v170, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:132:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'deployer'
                  });
                sim_r.txns.push({
                  amt: v282,
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
              const v171 = txn7.time;
              const v168 = txn7.from;
              ;
              const v170 = stdlib.addressEq(v30, v168);
              stdlib.assert(v170, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:132:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'deployer'
                });
              ;
              stdlib.protect(ctc10, await interact.informTimeout(), {
                at: './index.rsh:76:31:application',
                fs: ['at ./index.rsh:75:11:application call to [unknown function] (defined at: ./index.rsh:75:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:74:30:function exp)', 'at ./index.rsh:132:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'deployer'
                });
              
              return;
              }
            else {
              const [v97] = txn6.data;
              const v100 = txn6.time;
              const v96 = txn6.from;
              ;
              const v99 = stdlib.addressEq(v38, v96);
              stdlib.assert(v99, {
                at: './index.rsh:132:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const txn7 = await (ctc.sendrecv(14, 2, stdlib.checkedBigNumberify('./index.rsh:140:9:dot', stdlib.UInt_max, 7), [ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc1, ctc0, ctc0, ctc0, ctc1], [v30, v31, v38, v66, v79, v88, v97, v100, v282, v62, v60], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc1], true, true, false, (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:140:9:dot', stdlib.UInt_max, 12), v30, v31, v38, v66, v79, v88, v97, v100, v282]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:140:9:dot', stdlib.UInt_max, 12), v30, v31, v38, v66, v79, v88, v97, v282]);
                const [v105, v106] = txn7.data;
                const v109 = txn7.time;
                const v104 = txn7.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v108 = stdlib.addressEq(v30, v104);
                stdlib.assert(v108, {
                  at: './index.rsh:140:9:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'deployer'
                  });
                const v111 = stdlib.digest(ctc2, [v105, v106]);
                const v112 = stdlib.digestEq(v66, v111);
                stdlib.assert(v112, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:141:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'deployer'
                  });
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:142:15:after expr stmt semicolon', stdlib.UInt_max, 14), v30, v31, v38, v79, v88, v97, v106, v109, v282]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:142:15:after expr stmt semicolon', stdlib.UInt_max, 14), v30, v31, v38, v79, v88, v97, v106, v282]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:142:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                sim_r.isHalt = false;
                
                return sim_r;
                })));
              const [v105, v106] = txn7.data;
              const v109 = txn7.time;
              const v104 = txn7.from;
              ;
              const v108 = stdlib.addressEq(v30, v104);
              stdlib.assert(v108, {
                at: './index.rsh:140:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v111 = stdlib.digest(ctc2, [v105, v106]);
              const v112 = stdlib.digestEq(v66, v111);
              stdlib.assert(v112, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:141:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'deployer'
                });
              const txn8 = await (ctc.recv(15, 2, [ctc0, ctc1], false, false));
              const [v118, v119] = txn8.data;
              const v122 = txn8.time;
              const v117 = txn8.from;
              ;
              const v121 = stdlib.addressEq(v38, v117);
              stdlib.assert(v121, {
                at: './index.rsh:147:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v124 = stdlib.digest(ctc2, [v118, v119]);
              const v125 = stdlib.digestEq(v79, v124);
              stdlib.assert(v125, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:148:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'deployer'
                });
              let v127 = stdlib.checkedBigNumberify('./index.rsh:151:40:decimal', stdlib.UInt_max, 0);
              let v128 = stdlib.checkedBigNumberify('./index.rsh:151:43:decimal', stdlib.UInt_max, 0);
              let v129 = stdlib.checkedBigNumberify('./index.rsh:151:37:decimal', stdlib.UInt_max, 0);
              let v283 = v122;
              let v285 = v282;
              
              while ((() => {
                const v136 = stdlib.lt(v129, stdlib.checkedBigNumberify('./index.rsh:35:19:decimal', stdlib.UInt_max, 16));
                
                return v136;})()) {
                const txn9 = await (ctc.recv(18, 0, [], false, false));
                const [] = txn9.data;
                const v141 = txn9.time;
                const v138 = txn9.from;
                ;
                const v140 = stdlib.addressEq(v38, v138);
                stdlib.assert(v140, {
                  at: './index.rsh:155:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'deployer'
                  });
                const v142 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:158:15:decimal', stdlib.UInt_max, 1));
                const v144 = v119[v129];
                const v146 = v88[v129];
                const v148 = stdlib.eq(v144, v146);
                const v150 = stdlib.add(v127, stdlib.checkedBigNumberify('./index.rsh:159:50:decimal', stdlib.UInt_max, 1));
                const v151 = v148 ? v150 : v127;
                const v153 = v106[v129];
                const v155 = v97[v129];
                const v157 = stdlib.eq(v153, v155);
                const v159 = stdlib.add(v128, stdlib.checkedBigNumberify('./index.rsh:160:50:decimal', stdlib.UInt_max, 1));
                const v160 = v157 ? v159 : v128;
                const cv127 = v151;
                const cv128 = v160;
                const cv129 = v142;
                const cv283 = v141;
                const cv285 = v285;
                
                v127 = cv127;
                v128 = cv128;
                v129 = cv129;
                v283 = cv283;
                v285 = cv285;
                
                continue;
                }
              let v161;
              const v162 = stdlib.gt(v127, v128);
              if (v162) {
                v161 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                const v164 = stdlib.gt(v128, v127);
                if (v164) {
                  v161 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  v161 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              const cv42 = v161;
              const cv280 = v283;
              const cv282 = v285;
              
              v42 = cv42;
              v280 = cv280;
              v282 = cv282;
              
              continue;
              
              }
            }
          }
        }
      }
    const v243 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v246 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:172:14:decimal', stdlib.UInt_max, 2), v31);
    const v248 = v243 ? v30 : v38;
    ;
    stdlib.protect(ctc10, await interact.seeOutcome(v42), {
      at: './index.rsh:176:26:application',
      fs: ['at ./index.rsh:175:9:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp)'],
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
    size: 518
    }, {
    count: 9,
    size: 390
    }, {
    count: 9,
    size: 646
    }, {
    count: 9,
    size: 518
    }, {
    count: 9,
    size: 782
    }, {
    count: 9,
    size: 878
    }, null, null, {
    count: 9,
    size: 862
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
// "./index.rsh:84:7:dot"
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
// "./index.rsh:91:7:dot"
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
// "[at ./index.rsh:91:62:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:91:62:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "./index.rsh:105:9:dot"
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
// "./index.rsh:105:9:dot"
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
// "[at ./index.rsh:105:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:105:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "./index.rsh:116:9:dot"
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
// "./index.rsh:116:9:dot"
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
// "[at ./index.rsh:116:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:116:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
substring 0 128
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
// "./index.rsh:126:9:dot"
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
// "./index.rsh:126:9:dot"
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
// "[at ./index.rsh:126:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:126:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
int 136
int 264
substring3
store 250
dup
int 264
int 272
substring3
btoi
store 249
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 128
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
int 136
int 264
substring3
store 250
dup
int 264
int 272
substring3
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
// "[at ./index.rsh:132:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:132:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
int 136
int 264
substring3
store 250
dup
int 264
int 392
substring3
store 249
dup
int 392
int 400
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
substring 8 136
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
// "./index.rsh:140:9:dot"
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
// "./index.rsh:140:9:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:141:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
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
substring 104 232
store 251
dup
int 232
int 360
substring3
store 250
dup
int 360
int 488
substring3
store 249
dup
int 488
int 496
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
substring 8 136
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
// "./index.rsh:147:9:dot"
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
// "./index.rsh:147:9:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:148:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 252
load 247
itob
load 246
concat
keccak256
==
assert
int 0
int 16
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
load 251
concat
load 250
concat
load 249
concat
load 246
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
l0:
int 0
int 0
>
dup
store 244
bz l1
int 2
store 245
b l2
l1:
load 244
bz l3
int 0
store 245
b l4
l3:
int 1
store 245
l4:
l2:
load 245
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
l5:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
load 255
load 245
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
substring 72 200
store 252
dup
int 200
int 328
substring3
store 251
dup
int 328
int 456
substring3
store 250
dup
int 456
int 584
substring3
store 249
dup
int 584
int 592
substring3
btoi
store 248
dup
int 592
int 600
substring3
btoi
store 247
dup
int 600
int 608
substring3
btoi
store 246
dup
int 608
int 616
substring3
btoi
store 245
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
load 247
itob
concat
load 246
itob
concat
load 245
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
// "./index.rsh:155:11:dot"
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
// "./index.rsh:155:11:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
load 246
int 1
+
store 244
load 248
dup
int 1
+
load 249
int 8
load 246
*
dup
int 8
+
substring3
btoi
load 252
int 8
load 246
*
dup
int 8
+
substring3
btoi
==
select
store 243
load 247
dup
int 1
+
load 250
int 8
load 246
*
dup
int 8
+
substring3
btoi
load 251
int 8
load 246
*
dup
int 8
+
substring3
btoi
==
select
store 242
load 244
int 16
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
concat
load 251
concat
load 250
concat
load 249
concat
load 243
itob
concat
load 242
itob
concat
load 244
itob
concat
load 245
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
load 243
load 242
>
bz l1
int 2
store 241
b l2
l1:
load 242
load 243
>
bz l3
int 0
store 241
b l4
l3:
int 1
store 241
l4:
l2:
load 241
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
load 245
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "internalType": "uint256[16]",
                "name": "v88",
                "type": "uint256[16]"
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256[16]",
                "name": "v88",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "internalType": "uint256[16]",
                "name": "v97",
                "type": "uint256[16]"
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256[16]",
                "name": "v88",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256[16]",
                "name": "v88",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256[16]",
                "name": "v97",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256",
                "name": "v100",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v105",
                "type": "uint256"
              },
              {
                "internalType": "uint256[16]",
                "name": "v106",
                "type": "uint256[16]"
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
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256[16]",
                "name": "v88",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256[16]",
                "name": "v97",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256[16]",
                "name": "v106",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "uint256[16]",
                "name": "v119",
                "type": "uint256[16]"
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
                "internalType": "uint256[16]",
                "name": "v88",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256[16]",
                "name": "v97",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256[16]",
                "name": "v106",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256[16]",
                "name": "v119",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256",
                "name": "v127",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v128",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v129",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v285",
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
                "name": "v280",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v66",
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
                "name": "v280",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v69",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v79",
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v69",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "internalType": "uint256[16]",
                "name": "v88",
                "type": "uint256[16]"
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256[16]",
                "name": "v88",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "internalType": "uint256[16]",
                "name": "v97",
                "type": "uint256[16]"
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256[16]",
                "name": "v88",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256[16]",
                "name": "v88",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256[16]",
                "name": "v97",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256",
                "name": "v100",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v105",
                "type": "uint256"
              },
              {
                "internalType": "uint256[16]",
                "name": "v106",
                "type": "uint256[16]"
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
                "name": "v79",
                "type": "uint256"
              },
              {
                "internalType": "uint256[16]",
                "name": "v88",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256[16]",
                "name": "v97",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256[16]",
                "name": "v106",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "uint256[16]",
                "name": "v119",
                "type": "uint256[16]"
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
                "internalType": "uint256[16]",
                "name": "v88",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256[16]",
                "name": "v97",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256[16]",
                "name": "v106",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256[16]",
                "name": "v119",
                "type": "uint256[16]"
              },
              {
                "internalType": "uint256",
                "name": "v127",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v128",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v129",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v285",
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
                "name": "v280",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v66",
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
                "name": "v280",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v69",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
                "name": "v79",
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
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v69",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055612865806100826000396000f3fe6080604052600436106100e15760003560e01c8063709877951161007f578063b32a639f11610059578063b32a639f146101ad578063b3d9f57f146101c0578063b861cb10146101d3578063e163d7c4146101e6576100e8565b806370987795146101745780638f1eb6aa146101875780639532ef011461019a576100e8565b80634372f787116100bb5780634372f787146101285780635f883f871461013b5780636cc4a8441461014e5780636dacfd6f14610161576100e8565b80630b179da1146100ed5780632438df70146101025780634188e02214610115576100e8565b366100e857005b600080fd5b6101006100fb366004611ec9565b6101f9565b005b610100610110366004611efe565b610438565b610100610123366004611e54565b61053c565b610100610136366004611eec565b610648565b610100610149366004611e6f565b610948565b61010061015c366004611e39565b610ad4565b61010061016f366004611e54565b610c8a565b610100610182366004611e93565b610e60565b610100610195366004611ea5565b611000565b6101006101a8366004611edb565b6110ff565b6101006101bb366004611e81565b611201565b6101006101ce366004611eb7565b611304565b6101006101e1366004611e39565b6114ee565b6101006101f4366004611efe565b6115f1565b60405161020d90600e908390602001612636565b6040516020818303038152906040528051906020012060001c6000541461023357600080fd5b60008055341561024257600080fd5b336102536060830160408401611e18565b6001600160a01b03161461026657600080fd5b604051610282906106c0830135906106e08401906020016124a3565b60408051601f1981840301815291905280516020909101206060820135146102a957600080fd5b7fe1f63cd2b5b7ba1c1dc24ca5d938be41c2b4e6ed87d423cca7edfe6900bc4068816040516102d8919061242e565b60405180910390a16102e8611a95565b6102f56020830183611e18565b81516001600160a01b039091169052805160208084013591015261031f6060830160408401611e18565b81516001600160a01b039091166040918201528051610200818101909252906080840190601090839083908082843760009201919091525050825160600191909152506040805161020081810190925290610280840190601090839083908082843760009201919091525050825160800191909152506040805161020081810190925290610480840190601090839083908082843760009201919091525050825160a001919091525060408051610200818101909252906106e084019060109083908390808284376000920182905250845160c001939093525050602080830180518390528051909101829052805160400191909152805143606090910152516106a0830135608090910152610434816116ee565b5050565b60405161044c9060019083906020016124e8565b6040516020818303038152906040528051906020012060001c6000541461047257600080fd5b60008055610485600a60408301356127e2565b431061049057600080fd5b346020820135146104a057600080fd5b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516104cf9190612473565b60405180910390a16104df611ae4565b6104ec6020830183611e18565b81516001600160a01b0390911690528051602080840135918101829052825133604090910152808301805160019052514391015261052a90806127e2565b60208201516040015261043481611847565b6040516105509060069083906020016124bf565b6040516020818303038152906040528051906020012060001c6000541461057657600080fd5b60008055610589600a60808301356127e2565b43101561059557600080fd5b34156105a057600080fd5b336105ae6020830183611e18565b6001600160a01b0316146105c157600080fd5b6105ce6020820182611e18565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f19350505050158015610609573d6000803e3d6000fd5b507fe30737f1ebfc963c65c5913e78ab44df878e431e05d360e374cda18b462b262b816040516106399190612327565b60405180910390a16000805533ff5b60405161065c9060109083906020016126eb565b6040516020818303038152906040528051906020012060001c6000541461068257600080fd5b60008055341561069157600080fd5b336106a26060830160408401611e18565b6001600160a01b0316146106b557600080fd5b7f8ba11924f86883ef610634ef52937b22e0d3c12ac008be94bf7c911520939f9f816040516106e4919061244e565b60405180910390a16106f4611a95565b6107016020830183611e18565b81516001600160a01b039091169052805160208084013591015261072b6060830160408401611e18565b81516001600160a01b039091166040918201528051610200818101909252906060840190601090839083908082843760009201919091525050825160600191909152506040805161020081810190925290610260840190601090839083908082843760009201919091525050825160800191909152506040805161020081810190925290610460840190601090839083908082843760009201919091525050825160a00191909152506040805161020081810190925290610660840190601090839083908082843760009201919091525050825160c0019190915250606082016108a08301356010811061082f57634e487b7160e01b600052603260045260246000fd5b602002013561066083016108a08401356010811061085d57634e487b7160e01b600052603260045260246000fd5b60200201351461087257610860820135610882565b61088260016108608401356127e2565b60208201515261026082016108a0830135601081106108b157634e487b7160e01b600052603260045260246000fd5b602002013561046083016108a0840135601081106108df57634e487b7160e01b600052603260045260246000fd5b6020020135146108f457610880820135610904565b61090460016108808401356127e2565b602080830151015261091c60016108a08401356127e2565b60208201805160400191909152805143606090910152516108e0830135608090910152610434816116ee565b60405161095c9060089083906020016124d3565b6040516020818303038152906040528051906020012060001c6000541461098257600080fd5b60008055610995600a60a08301356127e2565b43106109a057600080fd5b34156109ab57600080fd5b336109b96020830183611e18565b6001600160a01b0316146109cc57600080fd5b7f9fbec521152522192ef96d932f92adf1882950c5b7f7c1a81d574aa912f42497816040516109fb9190612357565b60405180910390a1610a0b611b31565b610a186020830183611e18565b6001600160a01b0316815260208083013590820152610a3d6060830160408401611e18565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015280516102008181019092529060e08401906010908390839080828437600092019190915250505060a08201524360c08083019190915282013560e0820152604051610ab590600a908390602001612511565b60408051601f1981840301815291905280516020909101206000555050565b604051610ae89060049083906020016127ce565b6040516020818303038152906040528051906020012060001c60005414610b0e57600080fd5b60008055610b21600a60608301356127e2565b4310610b2c57600080fd5b3415610b3757600080fd5b33610b456020830183611e18565b6001600160a01b031614610b5857600080fd5b7f16424d059cabc243859f670786693b7e657c3f04cbc39631fa14608999bfaef981604051610b8791906122bf565b60405180910390a1610bda6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b610be76020830183611e18565b6001600160a01b0316815260208083013590820152610c0c6060830160408401611e18565b6001600160a01b03908116604083810191825260a0858101356060808701918252436080808901918252808a0135858a01908152865160066020808301919091528b518b1698820198909852968a0151938701939093529551909616948401949094525190820152915160c08301525160e082015261010001610ab5565b604051610c9e9060069083906020016124bf565b6040516020818303038152906040528051906020012060001c60005414610cc457600080fd5b60008055610cd7600a60808301356127e2565b4310610ce257600080fd5b3415610ced57600080fd5b33610cfe6060830160408401611e18565b6001600160a01b031614610d1157600080fd5b7fa03e2b199cbd4c163bca89aa8e3581bcf82ee511c6ed7b600ee5e8a3e78842b481604051610d40919061230b565b60405180910390a1610d9a6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b610da76020830183611e18565b6001600160a01b0316815260208083013590820152610dcc6060830160408401611e18565b6001600160a01b03908116604083810191825260608581013581860190815260c08088013560808089019182524360a0808b01918252808c0135858c01908152885160086020808301919091528d518d169a82019a909a52988c0151978901979097529751909816908601529151948401949094525192820192909252915160e08301525161010082015261012001610ab5565b604051610e7490600a9083906020016124fc565b6040516020818303038152906040528051906020012060001c60005414610e9a57600080fd5b60008055610eae600a6102a08301356127e2565b4310610eb957600080fd5b3415610ec457600080fd5b33610ed56060830160408401611e18565b6001600160a01b031614610ee857600080fd5b7fa82e9d448fe96433f785a411b6364e24b8989881cd31713b9c84e677dc4069ad81604051610f1791906123ad565b60405180910390a1610f27611b8e565b610f346020830183611e18565b6001600160a01b0316815260208083013590820152610f596060830160408401611e18565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015280516102008181019092529060a08401906010908390839080828437600092019190915250505060a082015260408051610200818101909252906102e08401906010908390839080828437600092019190915250505060c08201524360e08201526102c0820135610100820152604051610ab590600c90839060200161259d565b60405161101490600a9083906020016124fc565b6040516020818303038152906040528051906020012060001c6000541461103a57600080fd5b6000805561104e600a6102a08301356127e2565b43101561105a57600080fd5b341561106557600080fd5b336110736020830183611e18565b6001600160a01b03161461108657600080fd5b6110936020820182611e18565b6040516001600160a01b0391909116906102c083013580156108fc02916000818181858888f193505050501580156110cf573d6000803e3d6000fd5b507ffa8cde8dd84ef40604fc7647d1a259f36ec94935193eae6fcb076a980ea639048160405161063991906123d4565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461113c57600080fd5b600080553460208201351461115057600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a16111ba604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a001610ab5565b6040516112159060089083906020016124d3565b6040516020818303038152906040528051906020012060001c6000541461123b57600080fd5b6000805561124e600a60a08301356127e2565b43101561125a57600080fd5b341561126557600080fd5b336112766060830160408401611e18565b6001600160a01b03161461128957600080fd5b6112996060820160408301611e18565b6040516001600160a01b03919091169060c083013580156108fc02916000818181858888f193505050501580156112d4573d6000803e3d6000fd5b507fe7cd06eed96e73ebf1eef9fa7a8d285d298aa9f119f81a14f729b421ad209bfa81604051610639919061237c565b60405161131890600c908390602001612588565b6040516020818303038152906040528051906020012060001c6000541461133e57600080fd5b60008055341561134d57600080fd5b3361135b6020830183611e18565b6001600160a01b03161461136e57600080fd5b60405161138a906104e0830135906105008401906020016124a3565b60408051601f1981840301815291905280516020909101206060820135146113b157600080fd5b7f3faf57d0f6074a6cba1f19678c9a5980fa174a8f04c9c03b5b5d7619084e37ab816040516113e09190612407565b60405180910390a16113f0611be4565b6113fd6020830183611e18565b6001600160a01b03168152602080830135908201526114226060830160408401611e18565b6001600160a01b03166040808301919091526080830135606083015280516102008181019092529060a084019060109083908390808284376000920191909152505050608082015260408051610200818101909252906102a08401906010908390839080828437600092019190915250505060a082015260408051610200818101909252906105008401906010908390839080828437600092019190915250505060c08201524360e08201526104c0820135610100820152604051610ab590600e90839060200161264b565b6040516115029060049083906020016127ce565b6040516020818303038152906040528051906020012060001c6000541461152857600080fd5b6000805561153b600a60608301356127e2565b43101561154757600080fd5b341561155257600080fd5b336115636060830160408401611e18565b6001600160a01b03161461157657600080fd5b6115866060820160408301611e18565b6040516001600160a01b039190911690608083013580156108fc02916000818181858888f193505050501580156115c1573d6000803e3d6000fd5b507f5005c4e6004c19e98ada43b5f5d05731c1a82aa5d9215871f88ceb584e0f83e08160405161063991906122db565b6040516116059060019083906020016124e8565b6040516020818303038152906040528051906020012060001c6000541461162b57600080fd5b6000805561163e600a60408301356127e2565b43101561164a57600080fd5b341561165557600080fd5b336116636020830183611e18565b6001600160a01b03161461167657600080fd5b6116836020820182611e18565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f193505050501580156116be573d6000803e3d6000fd5b507fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d85623013816040516106399190612473565b601081602001516040015110156117cb57611707611c33565b8151516001600160a01b039081168252825160209081015181840152835160409081015190921682840152835160609081015181850152845160809081015181860152855160a09081015190860152855160c0908101519086015282860180515160e0870152805184015161010087015280518501516101208701528051909201516101408601529051015161016084015290516117aa91601091849101612700565b60408051601f19818403018152919052805160209091012060005550611844565b6117d3611cbe565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451931692019190915280830180515183516060908101919091528151909201518351608090810191909152815190920151835160a00152510151815160c001526104348161196e565b50565b60208101515160011415611922576118996040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401908152845160409081015184168186019081528387018051850151606080890191825291518401516080808a0191825285516004988101989098528951891695880195909552945191860191909152905190941690830152915160a0820152905160c082015260e0016117aa565b61192a611d28565b81515181516001600160a01b039182169052825160209081015183518201528351604090810151845193169201919091528201515181516060015261043481611a28565b60408051602081019091526000815281516080810151606090910151111561199957600281526119ba565b8151606081015160809091015111156119b557600081526119ba565b600181525b6119c2611ae4565b82515181516001600160a01b03918216905283516020908101518351820152845160409081015184519316928101929092528351818401805191909152855160a00151815190920191909152845160c00151905190910152611a2381611847565b505050565b805160600151600214611a4057805160400151611a44565b8051515b6001600160a01b03166108fc8260000151602001516002611a6591906127fa565b6040518115909202916000818181858888f19350505050158015611a8d573d6000803e3d6000fd5b506000805533ff5b6040518060400160405280611aa8611d58565b8152602001611adf6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b905290565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001611adf60405180606001604052806000815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001611b7a611db5565b815260200160008152602001600081525090565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001611bd7611db5565b8152602001611b7a611db5565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001611c26611db5565b8152602001611bd7611db5565b60405180610180016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001611c6e611db5565b8152602001611c7b611db5565b8152602001611c88611db5565b8152602001611c95611db5565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060400160405280611d1b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8152600060209091015290565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190611d1b565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001611d92611db5565b8152602001611d9f611db5565b8152602001611dac611db5565b8152602001611adf5b6040518061020001604052806010906020820280368337509192915050565b80356001600160a01b0381168114611deb57600080fd5b919050565b600060c08284031215611e01578081fd5b50919050565b600060e08284031215611e01578081fd5b600060208284031215611e29578081fd5b611e3282611dd4565b9392505050565b600060c08284031215611e4a578081fd5b611e328383611df0565b600060e08284031215611e65578081fd5b611e328383611e07565b60006102e08284031215611e01578081fd5b60006101008284031215611e01578081fd5b60006104e08284031215611e01578081fd5b60006103008284031215611e01578081fd5b60006107008284031215611e01578081fd5b60006108e08284031215611e01578081fd5b600060408284031215611e01578081fd5b60006109208284031215611e01578081fd5b600060808284031215611e01578081fd5b61020080828437600081840152505050565b8060005b6010811015611f44578151845260209384019390910190600101611f25565b50505050565b6001600160a01b0380611f5c83611dd4565b1683526020820135602084015280611f7660408401611dd4565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b0380611fb183611dd4565b1683526020820135602084015280611fcb60408401611dd4565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b0361200f82611dd4565b16825260208181013590830152604090810135910152565b6001600160a01b038061203983611dd4565b168352602082013560208401528061205360408401611dd4565b16604084015250606081013560608301526080810135608083015261020060a0820160a08401376102a081810135908301526102c090810135910152565b6001600160a01b03806120a383611dd4565b16835260208201356020840152806120bd60408401611dd4565b16604084015250606081013560608301526080810135608083015261020060a0820160a08401376102a0808301600081526120fa81838501611f0f565b50506104a081810135908301526104c090810135910152565b6001600160a01b038061212583611dd4565b168352602082013560208401528061213f60408401611dd4565b166040840152506060810135606083015261020080608083016080850137610280808401600081528282850182375050506104808083016000815261218681838501611f0f565b505061068081810135908301526106a090810135910152565b8035825261020060208201602084013760006102208301525050565b6121d5826121c883611dd4565b6001600160a01b03169052565b602081013560208301526121eb60408201611dd4565b6001600160a01b031660408301526122096060808401908301611f0f565b61026061221a818401828401611f0f565b5061046061222c818401828401611f0f565b5061066061223e818401828401611f0f565b50610860818101359083015261088080820135908301526108a080820135908301526108c080820135908301526108e090810135910152565b6001600160a01b038061228983611dd4565b16835260208201356020840152806122a360408401611dd4565b1660408401525060608181013590830152608090810135910152565b60c081016122cd8284612277565b60a092830135919092015290565b60c081016122e98284612277565b60a08301358015158082146122fd57600080fd5b8060a0850152505092915050565b60e081016123198284611f4a565b60c092830135919092015290565b60e081016123358284611f4a565b60c083013580151580821461234957600080fd5b8060c0850152505092915050565b6102e081016123668284611f9f565b61020060e0840160e08401376000815292915050565b610100810161238b8284611f9f565b60e083013580151580821461239f57600080fd5b8060e0850152505092915050565b6104e081016123bc8284612027565b6102e061020081850182850137506000815292915050565b61030081016123e38284612027565b6102e0808401358015158082146123f957600080fd5b808386015250505092915050565b61070081016124168284612091565b6104e061242781840182860161219f565b5092915050565b6108e0810161243d8284612113565b6106c061242781840182860161219f565b610920810161245d82846121bb565b610900808401358015158082146123f957600080fd5b608081016124818284611ffe565b606083013580151580821461249557600080fd5b806060850152505092915050565b8281526102208101610200836020840137600081529392505050565b82815260e08101611e326020830184611f4a565b8281526101008101611e326020830184611f9f565b82815260808101611e326020830184611ffe565b8281526103008101611e326020830184612027565b60006103008201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a083015161256a60c0840182611f21565b5060c08301516102c083015260e08301516102e08301529392505050565b8281526105008101611e326020830184612091565b60006105008201905083825260018060a01b0383511660208301526020830151604083015260408301516125dc60608401826001600160a01b03169052565b5060608301516080830152608083015160a083015260a083015161260360c0840182611f21565b5060c08301516126176102c0840182611f21565b5060e08301516104c08301526101008301516104e08301529392505050565b8281526106e08101611e326020830184612113565b82815281516001600160a01b031660208201526106e0810160208301516040830152604083015161268760608401826001600160a01b03169052565b506060830151608083015260808301516126a460a0840182611f21565b5060a08301516126b86102a0840182611f21565b5060c08301516126cc6104a0840182611f21565b5060e08301516106a08301526101008301516106c08301529392505050565b8281526109208101611e3260208301846121bb565b82815281516001600160a01b03166020820152610920810160208301516040830152604083015161273c60608401826001600160a01b03169052565b50606083015161274f6080840182611f21565b506080830151612763610280840182611f21565b5060a0830151612777610480840182611f21565b5060c083015161278b610680840182611f21565b5060e08301516108808301526101008301516108a08301526101208301516108c08301526101408301516108e08301526101608301516109008301529392505050565b82815260c08101611e326020830184612277565b600082198211156127f5576127f5612819565b500190565b600081600019048311821515161561281457612814612819565b500290565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220a854c41304b017a9440efc253dc35dd5640f3fe20a9b07b3c9443e1cd8e3822964736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

