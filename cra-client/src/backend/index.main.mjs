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
    at: './index.rsh:92:27:application',
    fs: ['at ./index.rsh:91:11:application call to [unknown function] (defined at: ./index.rsh:91:15:function exp)'],
    msg: 'acceptWager',
    who: 'attacher'
    });
  
  
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:94:7:dot', stdlib.UInt_max, 2), [ctc6, ctc0, ctc0], [v30, v31, v34], [v31, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:38:31:decimal', stdlib.UInt_max, 10), (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc22, [stdlib.checkedBigNumberify('./index.rsh:94:7:dot', stdlib.UInt_max, 1), v30, v31, v34]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc23, [stdlib.checkedBigNumberify('./index.rsh:94:7:dot', stdlib.UInt_max, 1), v30, v31]);
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
    const v282 = v41;
    const v284 = v40;
    
    if ((() => {
      const v55 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v55;})()) {
      sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v282, v284]);
      sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v284]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v245 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v248 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, 2), v31);
      const v250 = v245 ? v30 : v38;
      sim_r.txns.push({
        amt: v248,
        kind: 'from',
        to: v250,
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
    const v267 = txn3.time;
    const v264 = txn3.from;
    ;
    const v266 = stdlib.addressEq(v30, v264);
    stdlib.assert(v266, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:94:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'attacher'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:78:31:application',
      fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:94:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    let v282 = v41;
    let v284 = v40;
    
    while ((() => {
      const v55 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v55;})()) {
      const txn3 = await (ctc.recv(6, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:38:31:decimal', stdlib.UInt_max, 10)));
      if (txn3.didTimeout) {
        
        const txn4 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3), [ctc6, ctc0, ctc6, ctc0, ctc0], [v30, v31, v38, v282, v284], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v30, v31, v38, v282, v284]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v30, v31, v38, v284]);
          const [] = txn4.data;
          const v230 = txn4.time;
          const v227 = txn4.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v229 = stdlib.addressEq(v38, v227);
          stdlib.assert(v229, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:108:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'attacher'
            });
          sim_r.txns.push({
            amt: v284,
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
        const v230 = txn4.time;
        const v227 = txn4.from;
        ;
        const v229 = stdlib.addressEq(v38, v227);
        stdlib.assert(v229, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:108:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'attacher'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:78:31:application',
          fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:108:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
          at: './index.rsh:108:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'attacher'
          });
        const v73 = stdlib.protect(ctc3, await interact.getShips(), {
          at: './index.rsh:114:42:application',
          fs: ['at ./index.rsh:113:13:application call to [unknown function] (defined at: ./index.rsh:113:17:function exp)'],
          msg: 'getShips',
          who: 'attacher'
          });
        const v75 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:60:31:application',
          fs: ['at ./index.rsh:115:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:113:13:application call to [unknown function] (defined at: ./index.rsh:113:17:function exp)'],
          msg: 'random',
          who: 'attacher'
          });
        const v76 = stdlib.digest(ctc4, [v75, v73]);
        
        
        const txn4 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:118:9:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc2, ctc0, ctc0, ctc2], [v30, v31, v38, v66, v69, v284, v76], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, stdlib.checkedBigNumberify('./index.rsh:38:31:decimal', stdlib.UInt_max, 10), (async (txn4) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('./index.rsh:118:9:dot', stdlib.UInt_max, 6), v30, v31, v38, v66, v69, v284]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('./index.rsh:118:9:dot', stdlib.UInt_max, 6), v30, v31, v38, v66, v284]);
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
            at: './index.rsh:118:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          sim_r.nextSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:119:15:after expr stmt semicolon', stdlib.UInt_max, 8), v30, v31, v38, v66, v79, v82, v284]);
          sim_r.nextSt_noTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('./index.rsh:119:15:after expr stmt semicolon', stdlib.UInt_max, 8), v30, v31, v38, v66, v79, v284]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:119:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          
          return sim_r;
          })));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv(9, 0, [], false, false));
          const [] = txn5.data;
          const v211 = txn5.time;
          const v208 = txn5.from;
          ;
          const v210 = stdlib.addressEq(v30, v208);
          stdlib.assert(v210, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:118:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'attacher'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:78:31:application',
            fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:118:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
            at: './index.rsh:118:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          const txn5 = await (ctc.recv(10, 1, [ctc3], false, stdlib.checkedBigNumberify('./index.rsh:38:31:decimal', stdlib.UInt_max, 10)));
          if (txn5.didTimeout) {
            
            const txn6 = await (ctc.sendrecv(11, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc2, ctc2, ctc0, ctc0], [v30, v31, v38, v66, v79, v82, v284], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn6) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v30, v31, v38, v66, v79, v82, v284]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v30, v31, v38, v66, v79, v284]);
              const [] = txn6.data;
              const v192 = txn6.time;
              const v189 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v191 = stdlib.addressEq(v38, v189);
              stdlib.assert(v191, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:128:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'attacher'
                });
              sim_r.txns.push({
                amt: v284,
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
            const v192 = txn6.time;
            const v189 = txn6.from;
            ;
            const v191 = stdlib.addressEq(v38, v189);
            stdlib.assert(v191, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:128:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'attacher'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:78:31:application',
              fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:128:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
              at: './index.rsh:128:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'attacher'
              });
            const v95 = stdlib.protect(ctc3, await interact.selectTargets(), {
              at: './index.rsh:132:59:application',
              fs: ['at ./index.rsh:131:13:application call to [unknown function] (defined at: ./index.rsh:131:17:function exp)'],
              msg: 'selectTargets',
              who: 'attacher'
              });
            
            
            const txn6 = await (ctc.sendrecv(12, 1, stdlib.checkedBigNumberify('./index.rsh:134:9:dot', stdlib.UInt_max, 6), [ctc6, ctc0, ctc6, ctc2, ctc2, ctc3, ctc0, ctc0, ctc3], [v30, v31, v38, v66, v79, v88, v91, v284, v95], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, stdlib.checkedBigNumberify('./index.rsh:38:31:decimal', stdlib.UInt_max, 10), (async (txn6) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:134:9:dot', stdlib.UInt_max, 10), v30, v31, v38, v66, v79, v88, v91, v284]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:134:9:dot', stdlib.UInt_max, 10), v30, v31, v38, v66, v79, v88, v284]);
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
                at: './index.rsh:134:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:135:15:after expr stmt semicolon', stdlib.UInt_max, 12), v30, v31, v38, v66, v79, v88, v97, v100, v284]);
              sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:135:15:after expr stmt semicolon', stdlib.UInt_max, 12), v30, v31, v38, v66, v79, v88, v97, v284]);
              sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:135:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              
              return sim_r;
              })));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.recv(13, 0, [], false, false));
              const [] = txn7.data;
              const v173 = txn7.time;
              const v170 = txn7.from;
              ;
              const v172 = stdlib.addressEq(v30, v170);
              stdlib.assert(v172, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:134:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'attacher'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:78:31:application',
                fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:134:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
                at: './index.rsh:134:9:dot',
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
                at: './index.rsh:143:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v111 = stdlib.digest(ctc4, [v105, v106]);
              const v112 = stdlib.digestEq(v66, v111);
              stdlib.assert(v112, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:144:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              
              
              const txn8 = await (ctc.sendrecv(15, 2, stdlib.checkedBigNumberify('./index.rsh:150:9:dot', stdlib.UInt_max, 7), [ctc6, ctc0, ctc6, ctc2, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc3], [v30, v31, v38, v79, v88, v97, v106, v109, v284, v75, v73], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc3], true, true, false, (async (txn8) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:150:9:dot', stdlib.UInt_max, 14), v30, v31, v38, v79, v88, v97, v106, v109, v284]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:150:9:dot', stdlib.UInt_max, 14), v30, v31, v38, v79, v88, v97, v106, v284]);
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
                  at: './index.rsh:150:9:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'attacher'
                  });
                const v124 = stdlib.digest(ctc4, [v118, v119]);
                const v125 = stdlib.digestEq(v79, v124);
                stdlib.assert(v125, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:151:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'attacher'
                  });
                const v127 = stdlib.checkedBigNumberify('./index.rsh:154:40:decimal', stdlib.UInt_max, 0);
                const v128 = stdlib.checkedBigNumberify('./index.rsh:154:43:decimal', stdlib.UInt_max, 0);
                const v129 = stdlib.checkedBigNumberify('./index.rsh:154:37:decimal', stdlib.UInt_max, 0);
                const v285 = v122;
                const v287 = v284;
                
                if ((() => {
                  const v136 = stdlib.lt(v129, stdlib.checkedBigNumberify('./index.rsh:37:19:decimal', stdlib.UInt_max, 16));
                  
                  return v136;})()) {
                  sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:157:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v285, v287]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:157:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v287]);
                  sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:157:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                  sim_r.isHalt = false;
                  }
                else {
                  let v163;
                  const v164 = stdlib.gt(v127, v128);
                  if (v164) {
                    v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                    }
                  else {
                    const v166 = stdlib.gt(v128, v127);
                    if (v166) {
                      v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                      }
                    else {
                      v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                      }
                    }
                  const cv42 = v163;
                  const cv282 = v285;
                  const cv284 = v287;
                  
                  (() => {
                    const v42 = cv42;
                    const v282 = cv282;
                    const v284 = cv284;
                    
                    if ((() => {
                      const v55 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                      
                      return v55;})()) {
                      sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v282, v284]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v284]);
                      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                      sim_r.isHalt = false;
                      }
                    else {
                      const v245 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                      const v248 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, 2), v31);
                      const v250 = v245 ? v30 : v38;
                      sim_r.txns.push({
                        amt: v248,
                        kind: 'from',
                        to: v250,
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
                at: './index.rsh:150:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v124 = stdlib.digest(ctc4, [v118, v119]);
              const v125 = stdlib.digestEq(v79, v124);
              stdlib.assert(v125, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:151:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              let v127 = stdlib.checkedBigNumberify('./index.rsh:154:40:decimal', stdlib.UInt_max, 0);
              let v128 = stdlib.checkedBigNumberify('./index.rsh:154:43:decimal', stdlib.UInt_max, 0);
              let v129 = stdlib.checkedBigNumberify('./index.rsh:154:37:decimal', stdlib.UInt_max, 0);
              let v285 = v122;
              let v287 = v284;
              
              while ((() => {
                const v136 = stdlib.lt(v129, stdlib.checkedBigNumberify('./index.rsh:37:19:decimal', stdlib.UInt_max, 16));
                
                return v136;})()) {
                
                const txn9 = await (ctc.sendrecv(18, 0, stdlib.checkedBigNumberify('./index.rsh:158:17:dot', stdlib.UInt_max, 10), [ctc6, ctc0, ctc6, ctc3, ctc3, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0], [v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v285, v287], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn9) => {
                  const sim_r = { txns: [] };
                  sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:158:17:dot', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v285, v287]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:158:17:dot', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v287]);
                  const [] = txn9.data;
                  const v143 = txn9.time;
                  const v138 = txn9.from;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v140 = stdlib.addressEq(v38, v138);
                  const v141 = stdlib.addressEq(v30, v138);
                  const v142 = v140 ? true : v141;
                  stdlib.assert(v142, {
                    at: './index.rsh:158:17:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'attacher'
                    });
                  const v144 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:161:15:decimal', stdlib.UInt_max, 1));
                  const v146 = v119[v129];
                  const v148 = v88[v129];
                  const v150 = stdlib.eq(v146, v148);
                  const v152 = stdlib.add(v127, stdlib.checkedBigNumberify('./index.rsh:162:50:decimal', stdlib.UInt_max, 1));
                  const v153 = v150 ? v152 : v127;
                  const v155 = v106[v129];
                  const v157 = v97[v129];
                  const v159 = stdlib.eq(v155, v157);
                  const v161 = stdlib.add(v128, stdlib.checkedBigNumberify('./index.rsh:163:50:decimal', stdlib.UInt_max, 1));
                  const v162 = v159 ? v161 : v128;
                  const cv127 = v153;
                  const cv128 = v162;
                  const cv129 = v144;
                  const cv285 = v143;
                  const cv287 = v287;
                  
                  (() => {
                    const v127 = cv127;
                    const v128 = cv128;
                    const v129 = cv129;
                    const v285 = cv285;
                    const v287 = cv287;
                    
                    if ((() => {
                      const v136 = stdlib.lt(v129, stdlib.checkedBigNumberify('./index.rsh:37:19:decimal', stdlib.UInt_max, 16));
                      
                      return v136;})()) {
                      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:157:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v285, v287]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:157:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v287]);
                      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:157:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                      sim_r.isHalt = false;
                      }
                    else {
                      let v163;
                      const v164 = stdlib.gt(v127, v128);
                      if (v164) {
                        v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                        }
                      else {
                        const v166 = stdlib.gt(v128, v127);
                        if (v166) {
                          v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                          }
                        else {
                          v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                          }
                        }
                      const cv42 = v163;
                      const cv282 = v285;
                      const cv284 = v287;
                      
                      (() => {
                        const v42 = cv42;
                        const v282 = cv282;
                        const v284 = cv284;
                        
                        if ((() => {
                          const v55 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                          
                          return v55;})()) {
                          sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v282, v284]);
                          sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v284]);
                          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                          sim_r.isHalt = false;
                          }
                        else {
                          const v245 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                          const v248 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, 2), v31);
                          const v250 = v245 ? v30 : v38;
                          sim_r.txns.push({
                            amt: v248,
                            kind: 'from',
                            to: v250,
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
                const v143 = txn9.time;
                const v138 = txn9.from;
                ;
                const v140 = stdlib.addressEq(v38, v138);
                const v141 = stdlib.addressEq(v30, v138);
                const v142 = v140 ? true : v141;
                stdlib.assert(v142, {
                  at: './index.rsh:158:17:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'attacher'
                  });
                const v144 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:161:15:decimal', stdlib.UInt_max, 1));
                const v146 = v119[v129];
                const v148 = v88[v129];
                const v150 = stdlib.eq(v146, v148);
                const v152 = stdlib.add(v127, stdlib.checkedBigNumberify('./index.rsh:162:50:decimal', stdlib.UInt_max, 1));
                const v153 = v150 ? v152 : v127;
                const v155 = v106[v129];
                const v157 = v97[v129];
                const v159 = stdlib.eq(v155, v157);
                const v161 = stdlib.add(v128, stdlib.checkedBigNumberify('./index.rsh:163:50:decimal', stdlib.UInt_max, 1));
                const v162 = v159 ? v161 : v128;
                const cv127 = v153;
                const cv128 = v162;
                const cv129 = v144;
                const cv285 = v143;
                const cv287 = v287;
                
                v127 = cv127;
                v128 = cv128;
                v129 = cv129;
                v285 = cv285;
                v287 = cv287;
                
                continue;
                }
              let v163;
              const v164 = stdlib.gt(v127, v128);
              if (v164) {
                v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                const v166 = stdlib.gt(v128, v127);
                if (v166) {
                  v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              const cv42 = v163;
              const cv282 = v285;
              const cv284 = v287;
              
              v42 = cv42;
              v282 = cv282;
              v284 = cv284;
              
              continue;
              
              }
            }
          }
        }
      }
    const v245 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v248 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, 2), v31);
    const v250 = v245 ? v30 : v38;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v42), {
      at: './index.rsh:179:26:application',
      fs: ['at ./index.rsh:178:9:application call to [unknown function] (defined at: ./index.rsh:178:21:function exp)'],
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
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc1, ctc1, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc1, ctc1, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc1, ctc1, ctc1, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc1, ctc1, ctc1, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc1, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc1, ctc0]);
  const ctc15 = stdlib.T_Null;
  const ctc16 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc0, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc0]);
  const ctc18 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc0, ctc0]);
  const ctc19 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc3, ctc0]);
  const ctc20 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc0, ctc0]);
  const ctc21 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc3, ctc0]);
  const ctc22 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc0]);
  const ctc23 = stdlib.T_Tuple([ctc0, ctc5, ctc0]);
  const ctc24 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v26 = await ctc.creationTime();
  const v24 = stdlib.protect(ctc0, interact.wager, 'for deployer\'s interact field wager');
  
  
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:87:7:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v26, v24], [v24, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc24, [stdlib.checkedBigNumberify('./index.rsh:87:7:dot', stdlib.UInt_max, 0), v26]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:87:7:dot', stdlib.UInt_max, 0)]);
    const [v31] = txn1.data;
    const v34 = txn1.time;
    const v30 = txn1.from;
    
    sim_r.txns.push({
      amt: v31,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc22, [stdlib.checkedBigNumberify('./index.rsh:88:13:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31, v34]);
    sim_r.nextSt_noTime = stdlib.digest(ctc23, [stdlib.checkedBigNumberify('./index.rsh:88:13:after expr stmt semicolon', stdlib.UInt_max, 1), v30, v31]);
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:88:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v31] = txn1.data;
  const v34 = txn1.time;
  const v30 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:38:31:decimal', stdlib.UInt_max, 10)));
  if (txn2.didTimeout) {
    
    const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), [ctc5, ctc0, ctc0], [v30, v31, v34], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc22, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v30, v31, v34]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc23, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v30, v31]);
      const [] = txn3.data;
      const v267 = txn3.time;
      const v264 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v266 = stdlib.addressEq(v30, v264);
      stdlib.assert(v266, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:94:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
      sim_r.nextSt = stdlib.digest(ctc10, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc10, []);
      sim_r.view = [ctc10, []];
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn3.data;
    const v267 = txn3.time;
    const v264 = txn3.from;
    ;
    const v266 = stdlib.addressEq(v30, v264);
    stdlib.assert(v266, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:94:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'deployer'
      });
    ;
    stdlib.protect(ctc15, await interact.informTimeout(), {
      at: './index.rsh:78:31:application',
      fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:94:62:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    let v282 = v41;
    let v284 = v40;
    
    while ((() => {
      const v55 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v55;})()) {
      const v60 = stdlib.protect(ctc1, await interact.getShips(), {
        at: './index.rsh:104:42:application',
        fs: ['at ./index.rsh:103:13:application call to [unknown function] (defined at: ./index.rsh:103:17:function exp)'],
        msg: 'getShips',
        who: 'deployer'
        });
      const v62 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:105:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:103:13:application call to [unknown function] (defined at: ./index.rsh:103:17:function exp)'],
        msg: 'random',
        who: 'deployer'
        });
      const v63 = stdlib.digest(ctc2, [v62, v60]);
      
      
      const txn3 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:108:9:dot', stdlib.UInt_max, 3), [ctc5, ctc0, ctc5, ctc0, ctc0, ctc3], [v30, v31, v38, v282, v284, v63], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, stdlib.checkedBigNumberify('./index.rsh:38:31:decimal', stdlib.UInt_max, 10), (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:108:9:dot', stdlib.UInt_max, 4), v30, v31, v38, v282, v284]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:108:9:dot', stdlib.UInt_max, 4), v30, v31, v38, v284]);
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
          at: './index.rsh:108:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'deployer'
          });
        sim_r.nextSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('./index.rsh:109:15:after expr stmt semicolon', stdlib.UInt_max, 6), v30, v31, v38, v66, v69, v284]);
        sim_r.nextSt_noTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('./index.rsh:109:15:after expr stmt semicolon', stdlib.UInt_max, 6), v30, v31, v38, v66, v284]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:109:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv(7, 0, [], false, false));
        const [] = txn4.data;
        const v230 = txn4.time;
        const v227 = txn4.from;
        ;
        const v229 = stdlib.addressEq(v38, v227);
        stdlib.assert(v229, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:108:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'deployer'
          });
        ;
        stdlib.protect(ctc15, await interact.informTimeout(), {
          at: './index.rsh:78:31:application',
          fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:108:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
          at: './index.rsh:108:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'deployer'
          });
        const txn4 = await (ctc.recv(8, 1, [ctc3], false, stdlib.checkedBigNumberify('./index.rsh:38:31:decimal', stdlib.UInt_max, 10)));
        if (txn4.didTimeout) {
          
          const txn5 = await (ctc.sendrecv(9, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), [ctc5, ctc0, ctc5, ctc3, ctc0, ctc0], [v30, v31, v38, v66, v69, v284], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn5) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v30, v31, v38, v66, v69, v284]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v30, v31, v38, v66, v284]);
            const [] = txn5.data;
            const v211 = txn5.time;
            const v208 = txn5.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v210 = stdlib.addressEq(v30, v208);
            stdlib.assert(v210, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:118:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'deployer'
              });
            sim_r.txns.push({
              amt: v284,
              kind: 'from',
              to: v30,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc10, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc10, []);
            sim_r.view = [ctc10, []];
            sim_r.isHalt = true;
            
            return sim_r;
            })));
          const [] = txn5.data;
          const v211 = txn5.time;
          const v208 = txn5.from;
          ;
          const v210 = stdlib.addressEq(v30, v208);
          stdlib.assert(v210, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:118:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'deployer'
            });
          ;
          stdlib.protect(ctc15, await interact.informTimeout(), {
            at: './index.rsh:78:31:application',
            fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:118:70:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
            at: './index.rsh:118:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const v86 = stdlib.protect(ctc1, await interact.selectTargets(), {
            at: './index.rsh:126:59:application',
            fs: ['at ./index.rsh:125:13:application call to [unknown function] (defined at: ./index.rsh:125:17:function exp)'],
            msg: 'selectTargets',
            who: 'deployer'
            });
          
          
          const txn5 = await (ctc.sendrecv(10, 1, stdlib.checkedBigNumberify('./index.rsh:128:9:dot', stdlib.UInt_max, 5), [ctc5, ctc0, ctc5, ctc3, ctc3, ctc0, ctc0, ctc1], [v30, v31, v38, v66, v79, v82, v284, v86], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, stdlib.checkedBigNumberify('./index.rsh:38:31:decimal', stdlib.UInt_max, 10), (async (txn5) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:128:9:dot', stdlib.UInt_max, 8), v30, v31, v38, v66, v79, v82, v284]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('./index.rsh:128:9:dot', stdlib.UInt_max, 8), v30, v31, v38, v66, v79, v284]);
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
              at: './index.rsh:128:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'deployer'
              });
            sim_r.nextSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:129:15:after expr stmt semicolon', stdlib.UInt_max, 10), v30, v31, v38, v66, v79, v88, v91, v284]);
            sim_r.nextSt_noTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:129:15:after expr stmt semicolon', stdlib.UInt_max, 10), v30, v31, v38, v66, v79, v88, v284]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:129:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            
            return sim_r;
            })));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv(11, 0, [], false, false));
            const [] = txn6.data;
            const v192 = txn6.time;
            const v189 = txn6.from;
            ;
            const v191 = stdlib.addressEq(v38, v189);
            stdlib.assert(v191, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:128:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'deployer'
              });
            ;
            stdlib.protect(ctc15, await interact.informTimeout(), {
              at: './index.rsh:78:31:application',
              fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:128:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
              at: './index.rsh:128:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'deployer'
              });
            const txn6 = await (ctc.recv(12, 1, [ctc1], false, stdlib.checkedBigNumberify('./index.rsh:38:31:decimal', stdlib.UInt_max, 10)));
            if (txn6.didTimeout) {
              
              const txn7 = await (ctc.sendrecv(13, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), [ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc0, ctc0], [v30, v31, v38, v66, v79, v88, v91, v284], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn7) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v30, v31, v38, v66, v79, v88, v91, v284]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v30, v31, v38, v66, v79, v88, v284]);
                const [] = txn7.data;
                const v173 = txn7.time;
                const v170 = txn7.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v172 = stdlib.addressEq(v30, v170);
                stdlib.assert(v172, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:134:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'deployer'
                  });
                sim_r.txns.push({
                  amt: v284,
                  kind: 'from',
                  to: v30,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc10, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc10, []);
                sim_r.view = [ctc10, []];
                sim_r.isHalt = true;
                
                return sim_r;
                })));
              const [] = txn7.data;
              const v173 = txn7.time;
              const v170 = txn7.from;
              ;
              const v172 = stdlib.addressEq(v30, v170);
              stdlib.assert(v172, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:134:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'deployer'
                });
              ;
              stdlib.protect(ctc15, await interact.informTimeout(), {
                at: './index.rsh:78:31:application',
                fs: ['at ./index.rsh:77:11:application call to [unknown function] (defined at: ./index.rsh:77:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:134:71:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
                at: './index.rsh:134:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              
              
              const txn7 = await (ctc.sendrecv(14, 2, stdlib.checkedBigNumberify('./index.rsh:143:9:dot', stdlib.UInt_max, 7), [ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc1, ctc0, ctc0, ctc0, ctc1], [v30, v31, v38, v66, v79, v88, v97, v100, v284, v62, v60], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc1], true, true, false, (async (txn7) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:143:9:dot', stdlib.UInt_max, 12), v30, v31, v38, v66, v79, v88, v97, v100, v284]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:143:9:dot', stdlib.UInt_max, 12), v30, v31, v38, v66, v79, v88, v97, v284]);
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
                  at: './index.rsh:143:9:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'deployer'
                  });
                const v111 = stdlib.digest(ctc2, [v105, v106]);
                const v112 = stdlib.digestEq(v66, v111);
                stdlib.assert(v112, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:144:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                  msg: null,
                  who: 'deployer'
                  });
                sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:145:15:after expr stmt semicolon', stdlib.UInt_max, 14), v30, v31, v38, v79, v88, v97, v106, v109, v284]);
                sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:145:15:after expr stmt semicolon', stdlib.UInt_max, 14), v30, v31, v38, v79, v88, v97, v106, v284]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:145:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                sim_r.isHalt = false;
                
                return sim_r;
                })));
              const [v105, v106] = txn7.data;
              const v109 = txn7.time;
              const v104 = txn7.from;
              ;
              const v108 = stdlib.addressEq(v30, v104);
              stdlib.assert(v108, {
                at: './index.rsh:143:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v111 = stdlib.digest(ctc2, [v105, v106]);
              const v112 = stdlib.digestEq(v66, v111);
              stdlib.assert(v112, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:144:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
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
                at: './index.rsh:150:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v124 = stdlib.digest(ctc2, [v118, v119]);
              const v125 = stdlib.digestEq(v79, v124);
              stdlib.assert(v125, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:151:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'deployer'
                });
              let v127 = stdlib.checkedBigNumberify('./index.rsh:154:40:decimal', stdlib.UInt_max, 0);
              let v128 = stdlib.checkedBigNumberify('./index.rsh:154:43:decimal', stdlib.UInt_max, 0);
              let v129 = stdlib.checkedBigNumberify('./index.rsh:154:37:decimal', stdlib.UInt_max, 0);
              let v285 = v122;
              let v287 = v284;
              
              while ((() => {
                const v136 = stdlib.lt(v129, stdlib.checkedBigNumberify('./index.rsh:37:19:decimal', stdlib.UInt_max, 16));
                
                return v136;})()) {
                
                const txn9 = await (ctc.sendrecv(18, 0, stdlib.checkedBigNumberify('./index.rsh:158:17:dot', stdlib.UInt_max, 10), [ctc5, ctc0, ctc5, ctc1, ctc1, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0], [v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v285, v287], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn9) => {
                  const sim_r = { txns: [] };
                  sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:158:17:dot', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v285, v287]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:158:17:dot', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v287]);
                  const [] = txn9.data;
                  const v143 = txn9.time;
                  const v138 = txn9.from;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v140 = stdlib.addressEq(v38, v138);
                  const v141 = stdlib.addressEq(v30, v138);
                  const v142 = v140 ? true : v141;
                  stdlib.assert(v142, {
                    at: './index.rsh:158:17:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'deployer'
                    });
                  const v144 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:161:15:decimal', stdlib.UInt_max, 1));
                  const v146 = v119[v129];
                  const v148 = v88[v129];
                  const v150 = stdlib.eq(v146, v148);
                  const v152 = stdlib.add(v127, stdlib.checkedBigNumberify('./index.rsh:162:50:decimal', stdlib.UInt_max, 1));
                  const v153 = v150 ? v152 : v127;
                  const v155 = v106[v129];
                  const v157 = v97[v129];
                  const v159 = stdlib.eq(v155, v157);
                  const v161 = stdlib.add(v128, stdlib.checkedBigNumberify('./index.rsh:163:50:decimal', stdlib.UInt_max, 1));
                  const v162 = v159 ? v161 : v128;
                  const cv127 = v153;
                  const cv128 = v162;
                  const cv129 = v144;
                  const cv285 = v143;
                  const cv287 = v287;
                  
                  (() => {
                    const v127 = cv127;
                    const v128 = cv128;
                    const v129 = cv129;
                    const v285 = cv285;
                    const v287 = cv287;
                    
                    if ((() => {
                      const v136 = stdlib.lt(v129, stdlib.checkedBigNumberify('./index.rsh:37:19:decimal', stdlib.UInt_max, 16));
                      
                      return v136;})()) {
                      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:157:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v285, v287]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:157:17:after expr stmt semicolon', stdlib.UInt_max, 16), v30, v31, v38, v88, v97, v106, v119, v127, v128, v129, v287]);
                      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:157:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                      sim_r.isHalt = false;
                      }
                    else {
                      let v163;
                      const v164 = stdlib.gt(v127, v128);
                      if (v164) {
                        v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                        }
                      else {
                        const v166 = stdlib.gt(v128, v127);
                        if (v166) {
                          v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                          }
                        else {
                          v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                          }
                        }
                      const cv42 = v163;
                      const cv282 = v285;
                      const cv284 = v287;
                      
                      (() => {
                        const v42 = cv42;
                        const v282 = cv282;
                        const v284 = cv284;
                        
                        if ((() => {
                          const v55 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                          
                          return v55;})()) {
                          sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v282, v284]);
                          sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 4), v30, v31, v38, v284]);
                          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                          sim_r.isHalt = false;
                          }
                        else {
                          const v245 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                          const v248 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, 2), v31);
                          const v250 = v245 ? v30 : v38;
                          sim_r.txns.push({
                            amt: v248,
                            kind: 'from',
                            to: v250,
                            tok: undefined
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined
                            })
                          sim_r.nextSt = stdlib.digest(ctc10, []);
                          sim_r.nextSt_noTime = stdlib.digest(ctc10, []);
                          sim_r.view = [ctc10, []];
                          sim_r.isHalt = true;
                          }})();}})();
                  return sim_r;
                  })));
                const [] = txn9.data;
                const v143 = txn9.time;
                const v138 = txn9.from;
                ;
                const v140 = stdlib.addressEq(v38, v138);
                const v141 = stdlib.addressEq(v30, v138);
                const v142 = v140 ? true : v141;
                stdlib.assert(v142, {
                  at: './index.rsh:158:17:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'deployer'
                  });
                const v144 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:161:15:decimal', stdlib.UInt_max, 1));
                const v146 = v119[v129];
                const v148 = v88[v129];
                const v150 = stdlib.eq(v146, v148);
                const v152 = stdlib.add(v127, stdlib.checkedBigNumberify('./index.rsh:162:50:decimal', stdlib.UInt_max, 1));
                const v153 = v150 ? v152 : v127;
                const v155 = v106[v129];
                const v157 = v97[v129];
                const v159 = stdlib.eq(v155, v157);
                const v161 = stdlib.add(v128, stdlib.checkedBigNumberify('./index.rsh:163:50:decimal', stdlib.UInt_max, 1));
                const v162 = v159 ? v161 : v128;
                const cv127 = v153;
                const cv128 = v162;
                const cv129 = v144;
                const cv285 = v143;
                const cv287 = v287;
                
                v127 = cv127;
                v128 = cv128;
                v129 = cv129;
                v285 = cv285;
                v287 = cv287;
                
                continue;
                }
              let v163;
              const v164 = stdlib.gt(v127, v128);
              if (v164) {
                v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                }
              else {
                const v166 = stdlib.gt(v128, v127);
                if (v166) {
                  v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                  }
                else {
                  v163 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  }
                }
              const cv42 = v163;
              const cv282 = v285;
              const cv284 = v287;
              
              v42 = cv42;
              v282 = cv282;
              v284 = cv284;
              
              continue;
              
              }
            }
          }
        }
      }
    const v245 = stdlib.eq(v42, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v248 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, 2), v31);
    const v250 = v245 ? v30 : v38;
    ;
    stdlib.protect(ctc15, await interact.seeOutcome(v42), {
      at: './index.rsh:179:26:application',
      fs: ['at ./index.rsh:178:9:application call to [unknown function] (defined at: ./index.rsh:178:21:function exp)'],
      msg: 'seeOutcome',
      who: 'deployer'
      });
    
    return;}
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
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
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
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
  stepargs: [null, {
    count: 8,
    size: 89
    }, {
    count: 8,
    size: 121
    }, {
    count: 8,
    size: 121
    }, null, null, {
    count: 8,
    size: 193
    }, {
    count: 8,
    size: 161
    }, {
    count: 8,
    size: 225
    }, {
    count: 8,
    size: 193
    }, {
    count: 8,
    size: 353
    }, {
    count: 8,
    size: 225
    }, {
    count: 8,
    size: 481
    }, {
    count: 8,
    size: 353
    }, {
    count: 8,
    size: 617
    }, {
    count: 8,
    size: 713
    }, null, null, {
    count: 8,
    size: 697
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
gtxna 0 ApplicationArgs 6
pop
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
int 8
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
// "./index.rsh:87:7:dot"
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
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
pop
gtxna 0 ApplicationArgs 7
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
int 8
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
// "./index.rsh:94:7:dot"
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
b done
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
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
pop
gtxna 0 ApplicationArgs 7
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
int 8
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
// "[at ./index.rsh:94:62:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:94:62:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
int 8
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
int 8
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
int 8
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
int 8
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
// "[at ./index.rsh:118:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:118:70:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
int 8
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
// "./index.rsh:128:9:dot"
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
// "./index.rsh:128:9:dot"
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
int 8
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
// "[at ./index.rsh:128:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:128:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
int 8
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
// "./index.rsh:134:9:dot"
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
// "./index.rsh:134:9:dot"
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
int 8
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
// "[at ./index.rsh:134:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "[at ./index.rsh:134:71:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
int 8
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
// "./index.rsh:143:9:dot"
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
// "./index.rsh:143:9:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:144:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
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
int 8
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
// "./index.rsh:150:9:dot"
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
// "./index.rsh:150:9:dot"
// "[]"
load 253
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:151:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
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
b done
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
b done
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
gtxna 0 ApplicationArgs 7
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
int 8
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
// "./index.rsh:158:17:dot"
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
// "./index.rsh:158:17:dot"
// "[]"
load 253
gtxn 0 Sender
==
load 255
gtxn 0 Sender
==
||
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
b done
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
b done
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
done:
int 1
return
`],
  unsupported: false,
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
                "name": "v284",
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
                "name": "v284",
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
                "name": "v284",
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
                "name": "v284",
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
                "name": "v284",
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
                "name": "v284",
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
                "name": "v285",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v287",
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
                "name": "v282",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v284",
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
                "name": "v282",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v284",
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
                "name": "v284",
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
                "name": "v284",
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
                "name": "v284",
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
                "name": "v284",
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
                "name": "v284",
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
                "name": "v284",
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
                "name": "v284",
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
                "name": "v284",
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
                "name": "v285",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v287",
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
                "name": "v282",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v284",
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
                "name": "v282",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v284",
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
                "name": "v284",
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
                "name": "v284",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055612889806100826000396000f3fe6080604052600436106100e15760003560e01c8063709877951161007f578063b32a639f11610059578063b32a639f146101ad578063b3d9f57f146101c0578063b861cb10146101d3578063e163d7c4146101e6576100e8565b806370987795146101745780638f1eb6aa146101875780639532ef011461019a576100e8565b80634372f787116100bb5780634372f787146101285780635f883f871461013b5780636cc4a8441461014e5780636dacfd6f14610161576100e8565b80630b179da1146100ed5780632438df70146101025780634188e02214610115576100e8565b366100e857005b600080fd5b6101006100fb366004611eed565b6101f9565b005b610100610110366004611f22565b610438565b610100610123366004611e78565b61053c565b610100610136366004611f10565b610648565b610100610149366004611e93565b61096c565b61010061015c366004611e5d565b610af8565b61010061016f366004611e78565b610cae565b610100610182366004611eb7565b610e84565b610100610195366004611ec9565b611024565b6101006101a8366004611eff565b611123565b6101006101bb366004611ea5565b611225565b6101006101ce366004611edb565b611328565b6101006101e1366004611e5d565b611512565b6101006101f4366004611f22565b611615565b60405161020d90600e90839060200161265a565b6040516020818303038152906040528051906020012060001c6000541461023357600080fd5b60008055341561024257600080fd5b336102536060830160408401611e3c565b6001600160a01b03161461026657600080fd5b604051610282906106c0830135906106e08401906020016124c7565b60408051601f1981840301815291905280516020909101206060820135146102a957600080fd5b7fe1f63cd2b5b7ba1c1dc24ca5d938be41c2b4e6ed87d423cca7edfe6900bc4068816040516102d89190612452565b60405180910390a16102e8611ab9565b6102f56020830183611e3c565b81516001600160a01b039091169052805160208084013591015261031f6060830160408401611e3c565b81516001600160a01b039091166040918201528051610200818101909252906080840190601090839083908082843760009201919091525050825160600191909152506040805161020081810190925290610280840190601090839083908082843760009201919091525050825160800191909152506040805161020081810190925290610480840190601090839083908082843760009201919091525050825160a001919091525060408051610200818101909252906106e084019060109083908390808284376000920182905250845160c001939093525050602080830180518390528051909101829052805160400191909152805143606090910152516106a083013560809091015261043481611712565b5050565b60405161044c90600190839060200161250c565b6040516020818303038152906040528051906020012060001c6000541461047257600080fd5b60008055610485600a6040830135612806565b431061049057600080fd5b346020820135146104a057600080fd5b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516104cf9190612497565b60405180910390a16104df611b08565b6104ec6020830183611e3c565b81516001600160a01b0390911690528051602080840135918101829052825133604090910152808301805160019052514391015261052a9080612806565b6020820151604001526104348161186b565b6040516105509060069083906020016124e3565b6040516020818303038152906040528051906020012060001c6000541461057657600080fd5b60008055610589600a6080830135612806565b43101561059557600080fd5b34156105a057600080fd5b336105ae6020830183611e3c565b6001600160a01b0316146105c157600080fd5b6105ce6020820182611e3c565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f19350505050158015610609573d6000803e3d6000fd5b507fe30737f1ebfc963c65c5913e78ab44df878e431e05d360e374cda18b462b262b81604051610639919061234b565b60405180910390a16000805533ff5b60405161065c90601090839060200161270f565b6040516020818303038152906040528051906020012060001c6000541461068257600080fd5b60008055341561069157600080fd5b336106a26060830160408401611e3c565b6001600160a01b0316146106cd57336106be6020830183611e3c565b6001600160a01b0316146106d0565b60015b6106d957600080fd5b7f8ba11924f86883ef610634ef52937b22e0d3c12ac008be94bf7c911520939f9f816040516107089190612472565b60405180910390a1610718611ab9565b6107256020830183611e3c565b81516001600160a01b039091169052805160208084013591015261074f6060830160408401611e3c565b81516001600160a01b039091166040918201528051610200818101909252906060840190601090839083908082843760009201919091525050825160600191909152506040805161020081810190925290610260840190601090839083908082843760009201919091525050825160800191909152506040805161020081810190925290610460840190601090839083908082843760009201919091525050825160a00191909152506040805161020081810190925290610660840190601090839083908082843760009201919091525050825160c0019190915250606082016108a08301356010811061085357634e487b7160e01b600052603260045260246000fd5b602002013561066083016108a08401356010811061088157634e487b7160e01b600052603260045260246000fd5b602002013514610896576108608201356108a6565b6108a66001610860840135612806565b60208201515261026082016108a0830135601081106108d557634e487b7160e01b600052603260045260246000fd5b602002013561046083016108a08401356010811061090357634e487b7160e01b600052603260045260246000fd5b60200201351461091857610880820135610928565b6109286001610880840135612806565b602080830151015261094060016108a0840135612806565b60208201805160400191909152805143606090910152516108e083013560809091015261043481611712565b6040516109809060089083906020016124f7565b6040516020818303038152906040528051906020012060001c600054146109a657600080fd5b600080556109b9600a60a0830135612806565b43106109c457600080fd5b34156109cf57600080fd5b336109dd6020830183611e3c565b6001600160a01b0316146109f057600080fd5b7f9fbec521152522192ef96d932f92adf1882950c5b7f7c1a81d574aa912f4249781604051610a1f919061237b565b60405180910390a1610a2f611b55565b610a3c6020830183611e3c565b6001600160a01b0316815260208083013590820152610a616060830160408401611e3c565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015280516102008181019092529060e08401906010908390839080828437600092019190915250505060a08201524360c08083019190915282013560e0820152604051610ad990600a908390602001612535565b60408051601f1981840301815291905280516020909101206000555050565b604051610b0c9060049083906020016127f2565b6040516020818303038152906040528051906020012060001c60005414610b3257600080fd5b60008055610b45600a6060830135612806565b4310610b5057600080fd5b3415610b5b57600080fd5b33610b696020830183611e3c565b6001600160a01b031614610b7c57600080fd5b7f16424d059cabc243859f670786693b7e657c3f04cbc39631fa14608999bfaef981604051610bab91906122e3565b60405180910390a1610bfe6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b610c0b6020830183611e3c565b6001600160a01b0316815260208083013590820152610c306060830160408401611e3c565b6001600160a01b03908116604083810191825260a0858101356060808701918252436080808901918252808a0135858a01908152865160066020808301919091528b518b1698820198909852968a0151938701939093529551909616948401949094525190820152915160c08301525160e082015261010001610ad9565b604051610cc29060069083906020016124e3565b6040516020818303038152906040528051906020012060001c60005414610ce857600080fd5b60008055610cfb600a6080830135612806565b4310610d0657600080fd5b3415610d1157600080fd5b33610d226060830160408401611e3c565b6001600160a01b031614610d3557600080fd5b7fa03e2b199cbd4c163bca89aa8e3581bcf82ee511c6ed7b600ee5e8a3e78842b481604051610d64919061232f565b60405180910390a1610dbe6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b610dcb6020830183611e3c565b6001600160a01b0316815260208083013590820152610df06060830160408401611e3c565b6001600160a01b03908116604083810191825260608581013581860190815260c08088013560808089019182524360a0808b01918252808c0135858c01908152885160086020808301919091528d518d169a82019a909a52988c0151978901979097529751909816908601529151948401949094525192820192909252915160e08301525161010082015261012001610ad9565b604051610e9890600a908390602001612520565b6040516020818303038152906040528051906020012060001c60005414610ebe57600080fd5b60008055610ed2600a6102a0830135612806565b4310610edd57600080fd5b3415610ee857600080fd5b33610ef96060830160408401611e3c565b6001600160a01b031614610f0c57600080fd5b7fa82e9d448fe96433f785a411b6364e24b8989881cd31713b9c84e677dc4069ad81604051610f3b91906123d1565b60405180910390a1610f4b611bb2565b610f586020830183611e3c565b6001600160a01b0316815260208083013590820152610f7d6060830160408401611e3c565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015280516102008181019092529060a08401906010908390839080828437600092019190915250505060a082015260408051610200818101909252906102e08401906010908390839080828437600092019190915250505060c08201524360e08201526102c0820135610100820152604051610ad990600c9083906020016125c1565b60405161103890600a908390602001612520565b6040516020818303038152906040528051906020012060001c6000541461105e57600080fd5b60008055611072600a6102a0830135612806565b43101561107e57600080fd5b341561108957600080fd5b336110976020830183611e3c565b6001600160a01b0316146110aa57600080fd5b6110b76020820182611e3c565b6040516001600160a01b0391909116906102c083013580156108fc02916000818181858888f193505050501580156110f3573d6000803e3d6000fd5b507ffa8cde8dd84ef40604fc7647d1a259f36ec94935193eae6fcb076a980ea639048160405161063991906123f8565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461116057600080fd5b600080553460208201351461117457600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a16111de604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a001610ad9565b6040516112399060089083906020016124f7565b6040516020818303038152906040528051906020012060001c6000541461125f57600080fd5b60008055611272600a60a0830135612806565b43101561127e57600080fd5b341561128957600080fd5b3361129a6060830160408401611e3c565b6001600160a01b0316146112ad57600080fd5b6112bd6060820160408301611e3c565b6040516001600160a01b03919091169060c083013580156108fc02916000818181858888f193505050501580156112f8573d6000803e3d6000fd5b507fe7cd06eed96e73ebf1eef9fa7a8d285d298aa9f119f81a14f729b421ad209bfa8160405161063991906123a0565b60405161133c90600c9083906020016125ac565b6040516020818303038152906040528051906020012060001c6000541461136257600080fd5b60008055341561137157600080fd5b3361137f6020830183611e3c565b6001600160a01b03161461139257600080fd5b6040516113ae906104e0830135906105008401906020016124c7565b60408051601f1981840301815291905280516020909101206060820135146113d557600080fd5b7f3faf57d0f6074a6cba1f19678c9a5980fa174a8f04c9c03b5b5d7619084e37ab81604051611404919061242b565b60405180910390a1611414611c08565b6114216020830183611e3c565b6001600160a01b03168152602080830135908201526114466060830160408401611e3c565b6001600160a01b03166040808301919091526080830135606083015280516102008181019092529060a084019060109083908390808284376000920191909152505050608082015260408051610200818101909252906102a08401906010908390839080828437600092019190915250505060a082015260408051610200818101909252906105008401906010908390839080828437600092019190915250505060c08201524360e08201526104c0820135610100820152604051610ad990600e90839060200161266f565b6040516115269060049083906020016127f2565b6040516020818303038152906040528051906020012060001c6000541461154c57600080fd5b6000805561155f600a6060830135612806565b43101561156b57600080fd5b341561157657600080fd5b336115876060830160408401611e3c565b6001600160a01b03161461159a57600080fd5b6115aa6060820160408301611e3c565b6040516001600160a01b039190911690608083013580156108fc02916000818181858888f193505050501580156115e5573d6000803e3d6000fd5b507f5005c4e6004c19e98ada43b5f5d05731c1a82aa5d9215871f88ceb584e0f83e08160405161063991906122ff565b60405161162990600190839060200161250c565b6040516020818303038152906040528051906020012060001c6000541461164f57600080fd5b60008055611662600a6040830135612806565b43101561166e57600080fd5b341561167957600080fd5b336116876020830183611e3c565b6001600160a01b03161461169a57600080fd5b6116a76020820182611e3c565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f193505050501580156116e2573d6000803e3d6000fd5b507fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d85623013816040516106399190612497565b601081602001516040015110156117ef5761172b611c57565b8151516001600160a01b039081168252825160209081015181840152835160409081015190921682840152835160609081015181850152845160809081015181860152855160a09081015190860152855160c0908101519086015282860180515160e0870152805184015161010087015280518501516101208701528051909201516101408601529051015161016084015290516117ce91601091849101612724565b60408051601f19818403018152919052805160209091012060005550611868565b6117f7611ce2565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451931692019190915280830180515183516060908101919091528151909201518351608090810191909152815190920151835160a00152510151815160c0015261043481611992565b50565b60208101515160011415611946576118bd6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401908152845160409081015184168186019081528387018051850151606080890191825291518401516080808a0191825285516004988101989098528951891695880195909552945191860191909152905190941690830152915160a0820152905160c082015260e0016117ce565b61194e611d4c565b81515181516001600160a01b039182169052825160209081015183518201528351604090810151845193169201919091528201515181516060015261043481611a4c565b6040805160208101909152600081528151608081015160609091015111156119bd57600281526119de565b8151606081015160809091015111156119d957600081526119de565b600181525b6119e6611b08565b82515181516001600160a01b03918216905283516020908101518351820152845160409081015184519316928101929092528351818401805191909152855160a00151815190920191909152845160c00151905190910152611a478161186b565b505050565b805160600151600214611a6457805160400151611a68565b8051515b6001600160a01b03166108fc8260000151602001516002611a89919061281e565b6040518115909202916000818181858888f19350505050158015611ab1573d6000803e3d6000fd5b506000805533ff5b6040518060400160405280611acc611d7c565b8152602001611b036040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b905290565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001611b0360405180606001604052806000815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001611b9e611dd9565b815260200160008152602001600081525090565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001611bfb611dd9565b8152602001611b9e611dd9565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001611c4a611dd9565b8152602001611bfb611dd9565b60405180610180016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001611c92611dd9565b8152602001611c9f611dd9565b8152602001611cac611dd9565b8152602001611cb9611dd9565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060400160405280611d3f6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8152600060209091015290565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190611d3f565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001611db6611dd9565b8152602001611dc3611dd9565b8152602001611dd0611dd9565b8152602001611b035b6040518061020001604052806010906020820280368337509192915050565b80356001600160a01b0381168114611e0f57600080fd5b919050565b600060c08284031215611e25578081fd5b50919050565b600060e08284031215611e25578081fd5b600060208284031215611e4d578081fd5b611e5682611df8565b9392505050565b600060c08284031215611e6e578081fd5b611e568383611e14565b600060e08284031215611e89578081fd5b611e568383611e2b565b60006102e08284031215611e25578081fd5b60006101008284031215611e25578081fd5b60006104e08284031215611e25578081fd5b60006103008284031215611e25578081fd5b60006107008284031215611e25578081fd5b60006108e08284031215611e25578081fd5b600060408284031215611e25578081fd5b60006109208284031215611e25578081fd5b600060808284031215611e25578081fd5b61020080828437600081840152505050565b8060005b6010811015611f68578151845260209384019390910190600101611f49565b50505050565b6001600160a01b0380611f8083611df8565b1683526020820135602084015280611f9a60408401611df8565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b0380611fd583611df8565b1683526020820135602084015280611fef60408401611df8565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b0361203382611df8565b16825260208181013590830152604090810135910152565b6001600160a01b038061205d83611df8565b168352602082013560208401528061207760408401611df8565b16604084015250606081013560608301526080810135608083015261020060a0820160a08401376102a081810135908301526102c090810135910152565b6001600160a01b03806120c783611df8565b16835260208201356020840152806120e160408401611df8565b16604084015250606081013560608301526080810135608083015261020060a0820160a08401376102a08083016000815261211e81838501611f33565b50506104a081810135908301526104c090810135910152565b6001600160a01b038061214983611df8565b168352602082013560208401528061216360408401611df8565b16604084015250606081013560608301526102008060808301608085013761028080840160008152828285018237505050610480808301600081526121aa81838501611f33565b505061068081810135908301526106a090810135910152565b8035825261020060208201602084013760006102208301525050565b6121f9826121ec83611df8565b6001600160a01b03169052565b6020810135602083015261220f60408201611df8565b6001600160a01b0316604083015261222d6060808401908301611f33565b61026061223e818401828401611f33565b50610460612250818401828401611f33565b50610660612262818401828401611f33565b50610860818101359083015261088080820135908301526108a080820135908301526108c080820135908301526108e090810135910152565b6001600160a01b03806122ad83611df8565b16835260208201356020840152806122c760408401611df8565b1660408401525060608181013590830152608090810135910152565b60c081016122f1828461229b565b60a092830135919092015290565b60c0810161230d828461229b565b60a083013580151580821461232157600080fd5b8060a0850152505092915050565b60e0810161233d8284611f6e565b60c092830135919092015290565b60e081016123598284611f6e565b60c083013580151580821461236d57600080fd5b8060c0850152505092915050565b6102e0810161238a8284611fc3565b61020060e0840160e08401376000815292915050565b61010081016123af8284611fc3565b60e08301358015158082146123c357600080fd5b8060e0850152505092915050565b6104e081016123e0828461204b565b6102e061020081850182850137506000815292915050565b6103008101612407828461204b565b6102e08084013580151580821461241d57600080fd5b808386015250505092915050565b610700810161243a82846120b5565b6104e061244b8184018286016121c3565b5092915050565b6108e081016124618284612137565b6106c061244b8184018286016121c3565b610920810161248182846121df565b6109008084013580151580821461241d57600080fd5b608081016124a58284612022565b60608301358015158082146124b957600080fd5b806060850152505092915050565b8281526102208101610200836020840137600081529392505050565b82815260e08101611e566020830184611f6e565b8281526101008101611e566020830184611fc3565b82815260808101611e566020830184612022565b8281526103008101611e56602083018461204b565b60006103008201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a083015161258e60c0840182611f45565b5060c08301516102c083015260e08301516102e08301529392505050565b8281526105008101611e5660208301846120b5565b60006105008201905083825260018060a01b03835116602083015260208301516040830152604083015161260060608401826001600160a01b03169052565b5060608301516080830152608083015160a083015260a083015161262760c0840182611f45565b5060c083015161263b6102c0840182611f45565b5060e08301516104c08301526101008301516104e08301529392505050565b8281526106e08101611e566020830184612137565b82815281516001600160a01b031660208201526106e081016020830151604083015260408301516126ab60608401826001600160a01b03169052565b506060830151608083015260808301516126c860a0840182611f45565b5060a08301516126dc6102a0840182611f45565b5060c08301516126f06104a0840182611f45565b5060e08301516106a08301526101008301516106c08301529392505050565b8281526109208101611e5660208301846121df565b82815281516001600160a01b03166020820152610920810160208301516040830152604083015161276060608401826001600160a01b03169052565b5060608301516127736080840182611f45565b506080830151612787610280840182611f45565b5060a083015161279b610480840182611f45565b5060c08301516127af610680840182611f45565b5060e08301516108808301526101008301516108a08301526101208301516108c08301526101408301516108e08301526101608301516109008301529392505050565b82815260c08101611e56602083018461229b565b600082198211156128195761281961283d565b500190565b60008160001904831182151516156128385761283861283d565b500290565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220284653a8205d0d9870e9a1116748338faa2e66333d997ee62657b1bc2fdd6dad64736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

