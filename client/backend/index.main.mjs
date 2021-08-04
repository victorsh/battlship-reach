// Automatically generated with Reach 0.1.3
/* eslint-disable */
export const _version = '0.1.3';
export const _backendVersion = 1;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
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
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for attacher expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for attacher expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc5 = stdlib.T_Address;
  
  
  const v33 = await ctc.creationTime();
  const v34 = await ctc.creationSecs();
  
  const txn1 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v39] = txn1.data;
  const v42 = txn1.time;
  const v43 = txn1.secs;
  const v38 = txn1.from;
  ;
  const v399 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
  stdlib.protect(ctc1, await interact.acceptWager(v39), {
    at: './index.rsh:55:27:application',
    fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:15:function exp)'],
    msg: 'acceptWager',
    who: 'attacher'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v38, v39, v399],
    evt_cnt: 0,
    funcNum: 2,
    onlyIf: true,
    out_tys: [],
    pay: [v39, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [] = txn2.data;
      const v50 = txn2.time;
      const v51 = txn2.secs;
      const v47 = txn2.from;
      
      const v49 = stdlib.add(v39, v39);
      sim_r.txns.push({
        amt: v39,
        kind: 'to',
        tok: undefined
        });
      const v52 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v421 = v50;
      const v427 = v49;
      
      if ((() => {
        const v65 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v65;})()) {
        const v361 = stdlib.add(v421, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
        sim_r.isHalt = false;
        }
      else {
        const v383 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v386 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:154:14:decimal', stdlib.UInt_max, 2), v39);
        const v388 = v383 ? v38 : v47;
        sim_r.txns.push({
          amt: v386,
          kind: 'from',
          to: v388,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v399],
    tys: [ctc5, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [] = txn3.data;
    const v405 = txn3.time;
    const v406 = txn3.secs;
    const v402 = txn3.from;
    ;
    const v404 = stdlib.addressEq(v38, v402);
    stdlib.assert(v404, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:58:49:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'attacher'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:42:31:application',
      fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:58:49:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'attacher'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v50 = txn2.time;
    const v51 = txn2.secs;
    const v47 = txn2.from;
    const v49 = stdlib.add(v39, v39);
    ;
    let v52 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v421 = v50;
    let v427 = v49;
    
    while ((() => {
      const v65 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v65;})()) {
      const v361 = stdlib.add(v421, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
      const txn3 = await (ctc.recv({
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc2],
        timeoutAt: ['time', v361],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v38, v39, v47, v361, v427],
          evt_cnt: 0,
          funcNum: 7,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const [] = txn4.data;
            const v367 = txn4.time;
            const v368 = txn4.secs;
            const v364 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v366 = stdlib.addressEq(v47, v364);
            stdlib.assert(v366, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:73:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'attacher'
              });
            sim_r.txns.push({
              amt: v427,
              kind: 'from',
              to: v47,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc5, ctc0, ctc5, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const [] = txn4.data;
        const v367 = txn4.time;
        const v368 = txn4.secs;
        const v364 = txn4.from;
        ;
        const v366 = stdlib.addressEq(v47, v364);
        stdlib.assert(v366, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:73:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'attacher'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:42:31:application',
          fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:73:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'attacher'
          });
        
        return;
        }
      else {
        const [v76] = txn3.data;
        const v79 = txn3.time;
        const v80 = txn3.secs;
        const v75 = txn3.from;
        ;
        const v78 = stdlib.addressEq(v38, v75);
        stdlib.assert(v78, {
          at: './index.rsh:73:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'attacher'
          });
        const v335 = stdlib.add(v79, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
        const v84 = stdlib.protect(ctc3, await interact.selectShips(), {
          at: './index.rsh:80:45:application',
          fs: ['at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:17:function exp)'],
          msg: 'selectShips',
          who: 'attacher'
          });
        const v86 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:60:31:application',
          fs: ['at ./index.rsh:81:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:17:function exp)'],
          msg: 'random',
          who: 'attacher'
          });
        const v87 = stdlib.digest(ctc4, [v86, v84]);
        
        const txn4 = await (ctc.sendrecv({
          args: [v38, v39, v47, v76, v335, v427, v87],
          evt_cnt: 1,
          funcNum: 8,
          onlyIf: true,
          out_tys: [ctc2],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const [v90] = txn4.data;
            const v93 = txn4.time;
            const v94 = txn4.secs;
            const v89 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v92 = stdlib.addressEq(v47, v89);
            stdlib.assert(v92, {
              at: './index.rsh:84:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'attacher'
              });
            const v309 = stdlib.add(v93, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v335],
          tys: [ctc5, ctc0, ctc5, ctc2, ctc0, ctc0, ctc2],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv({
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const [] = txn5.data;
          const v341 = txn5.time;
          const v342 = txn5.secs;
          const v338 = txn5.from;
          ;
          const v340 = stdlib.addressEq(v38, v338);
          stdlib.assert(v340, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:84:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'attacher'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:42:31:application',
            fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:84:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'attacher'
            });
          
          return;
          }
        else {
          const [v90] = txn4.data;
          const v93 = txn4.time;
          const v94 = txn4.secs;
          const v89 = txn4.from;
          ;
          const v92 = stdlib.addressEq(v47, v89);
          stdlib.assert(v92, {
            at: './index.rsh:84:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          const v309 = stdlib.add(v93, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
          const txn5 = await (ctc.recv({
            evt_cnt: 1,
            funcNum: 10,
            out_tys: [ctc3],
            timeoutAt: ['time', v309],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v38, v39, v47, v76, v90, v309, v427],
              evt_cnt: 0,
              funcNum: 11,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const [] = txn6.data;
                const v315 = txn6.time;
                const v316 = txn6.secs;
                const v312 = txn6.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v314 = stdlib.addressEq(v47, v312);
                stdlib.assert(v314, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./index.rsh:94:58:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                  msg: 'sender correct',
                  who: 'attacher'
                  });
                sim_r.txns.push({
                  amt: v427,
                  kind: 'from',
                  to: v47,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc5, ctc0, ctc5, ctc2, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const [] = txn6.data;
            const v315 = txn6.time;
            const v316 = txn6.secs;
            const v312 = txn6.from;
            ;
            const v314 = stdlib.addressEq(v47, v312);
            stdlib.assert(v314, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:94:58:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'attacher'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:42:31:application',
              fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:94:58:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'attacher'
              });
            
            return;
            }
          else {
            const [v100] = txn5.data;
            const v103 = txn5.time;
            const v104 = txn5.secs;
            const v99 = txn5.from;
            ;
            const v102 = stdlib.addressEq(v38, v99);
            stdlib.assert(v102, {
              at: './index.rsh:94:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'attacher'
              });
            const v283 = stdlib.add(v103, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
            const v108 = stdlib.protect(ctc3, await interact.guessShips(), {
              at: './index.rsh:98:56:application',
              fs: ['at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:17:function exp)'],
              msg: 'guessShips',
              who: 'attacher'
              });
            
            const txn6 = await (ctc.sendrecv({
              args: [v38, v39, v47, v76, v90, v100, v283, v427, v108],
              evt_cnt: 1,
              funcNum: 12,
              onlyIf: true,
              out_tys: [ctc3],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const [v110] = txn6.data;
                const v113 = txn6.time;
                const v114 = txn6.secs;
                const v109 = txn6.from;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v112 = stdlib.addressEq(v47, v109);
                stdlib.assert(v112, {
                  at: './index.rsh:100:9:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'attacher'
                  });
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v283],
              tys: [ctc5, ctc0, ctc5, ctc2, ctc2, ctc3, ctc0, ctc0, ctc3],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.recv({
                evt_cnt: 0,
                funcNum: 13,
                out_tys: [],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const [] = txn7.data;
              const v289 = txn7.time;
              const v290 = txn7.secs;
              const v286 = txn7.from;
              ;
              const v288 = stdlib.addressEq(v38, v286);
              stdlib.assert(v288, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:100:58:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'attacher'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:42:31:application',
                fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:100:58:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'attacher'
                });
              
              return;
              }
            else {
              const [v110] = txn6.data;
              const v113 = txn6.time;
              const v114 = txn6.secs;
              const v109 = txn6.from;
              ;
              const v112 = stdlib.addressEq(v47, v109);
              stdlib.assert(v112, {
                at: './index.rsh:100:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const txn7 = await (ctc.recv({
                evt_cnt: 2,
                funcNum: 14,
                out_tys: [ctc0, ctc3],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const [v119, v120] = txn7.data;
              const v123 = txn7.time;
              const v124 = txn7.secs;
              const v118 = txn7.from;
              ;
              const v122 = stdlib.addressEq(v38, v118);
              stdlib.assert(v122, {
                at: './index.rsh:108:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v126 = stdlib.digest(ctc4, [v119, v120]);
              const v127 = stdlib.digestEq(v76, v126);
              stdlib.assert(v127, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:109:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              const txn8 = await (ctc.sendrecv({
                args: [v38, v39, v47, v90, v100, v110, v120, v427, v86, v84],
                evt_cnt: 2,
                funcNum: 15,
                onlyIf: true,
                out_tys: [ctc0, ctc3],
                pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const [v133, v134] = txn8.data;
                  const v137 = txn8.time;
                  const v138 = txn8.secs;
                  const v132 = txn8.from;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v136 = stdlib.addressEq(v47, v132);
                  stdlib.assert(v136, {
                    at: './index.rsh:115:9:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'attacher'
                    });
                  const v140 = stdlib.digest(ctc4, [v133, v134]);
                  const v141 = stdlib.digestEq(v90, v140);
                  stdlib.assert(v141, {
                    at: 'reach standard library:65:17:application',
                    fs: ['at ./index.rsh:116:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                    msg: null,
                    who: 'attacher'
                    });
                  const v143 = v134[stdlib.checkedBigNumberify('./index.rsh:119:34:array ref', stdlib.UInt_max, 0)];
                  const v144 = v100[stdlib.checkedBigNumberify('./index.rsh:119:47:array ref', stdlib.UInt_max, 0)];
                  const v146 = stdlib.eq(v143, v144);
                  const v148 = v146 ? stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:119:58:decimal', stdlib.UInt_max, 0);
                  const v149 = v120[stdlib.checkedBigNumberify('./index.rsh:120:34:array ref', stdlib.UInt_max, 0)];
                  const v150 = v110[stdlib.checkedBigNumberify('./index.rsh:120:47:array ref', stdlib.UInt_max, 0)];
                  const v152 = stdlib.eq(v149, v150);
                  const v154 = v152 ? stdlib.checkedBigNumberify('./index.rsh:120:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:120:58:decimal', stdlib.UInt_max, 0);
                  const v155 = v134[stdlib.checkedBigNumberify('./index.rsh:121:34:array ref', stdlib.UInt_max, 1)];
                  const v156 = v100[stdlib.checkedBigNumberify('./index.rsh:121:47:array ref', stdlib.UInt_max, 1)];
                  const v158 = stdlib.eq(v155, v156);
                  const v160 = v158 ? stdlib.checkedBigNumberify('./index.rsh:121:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:121:58:decimal', stdlib.UInt_max, 0);
                  const v161 = v120[stdlib.checkedBigNumberify('./index.rsh:122:34:array ref', stdlib.UInt_max, 1)];
                  const v162 = v110[stdlib.checkedBigNumberify('./index.rsh:122:47:array ref', stdlib.UInt_max, 1)];
                  const v164 = stdlib.eq(v161, v162);
                  const v166 = v164 ? stdlib.checkedBigNumberify('./index.rsh:122:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:122:58:decimal', stdlib.UInt_max, 0);
                  const v167 = v134[stdlib.checkedBigNumberify('./index.rsh:123:34:array ref', stdlib.UInt_max, 2)];
                  const v168 = v100[stdlib.checkedBigNumberify('./index.rsh:123:47:array ref', stdlib.UInt_max, 2)];
                  const v170 = stdlib.eq(v167, v168);
                  const v172 = v170 ? stdlib.checkedBigNumberify('./index.rsh:123:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:123:58:decimal', stdlib.UInt_max, 0);
                  const v173 = v120[stdlib.checkedBigNumberify('./index.rsh:124:34:array ref', stdlib.UInt_max, 2)];
                  const v174 = v110[stdlib.checkedBigNumberify('./index.rsh:124:47:array ref', stdlib.UInt_max, 2)];
                  const v176 = stdlib.eq(v173, v174);
                  const v178 = v176 ? stdlib.checkedBigNumberify('./index.rsh:124:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:124:58:decimal', stdlib.UInt_max, 0);
                  const v179 = v134[stdlib.checkedBigNumberify('./index.rsh:125:34:array ref', stdlib.UInt_max, 3)];
                  const v180 = v100[stdlib.checkedBigNumberify('./index.rsh:125:47:array ref', stdlib.UInt_max, 3)];
                  const v182 = stdlib.eq(v179, v180);
                  const v184 = v182 ? stdlib.checkedBigNumberify('./index.rsh:125:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:125:58:decimal', stdlib.UInt_max, 0);
                  const v185 = v120[stdlib.checkedBigNumberify('./index.rsh:126:34:array ref', stdlib.UInt_max, 3)];
                  const v186 = v110[stdlib.checkedBigNumberify('./index.rsh:126:47:array ref', stdlib.UInt_max, 3)];
                  const v188 = stdlib.eq(v185, v186);
                  const v190 = v188 ? stdlib.checkedBigNumberify('./index.rsh:126:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:126:58:decimal', stdlib.UInt_max, 0);
                  const v191 = v134[stdlib.checkedBigNumberify('./index.rsh:127:34:array ref', stdlib.UInt_max, 4)];
                  const v192 = v100[stdlib.checkedBigNumberify('./index.rsh:127:47:array ref', stdlib.UInt_max, 4)];
                  const v194 = stdlib.eq(v191, v192);
                  const v196 = v194 ? stdlib.checkedBigNumberify('./index.rsh:127:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:127:58:decimal', stdlib.UInt_max, 0);
                  const v197 = v120[stdlib.checkedBigNumberify('./index.rsh:128:34:array ref', stdlib.UInt_max, 4)];
                  const v198 = v110[stdlib.checkedBigNumberify('./index.rsh:128:47:array ref', stdlib.UInt_max, 4)];
                  const v200 = stdlib.eq(v197, v198);
                  const v202 = v200 ? stdlib.checkedBigNumberify('./index.rsh:128:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:128:58:decimal', stdlib.UInt_max, 0);
                  const v203 = v134[stdlib.checkedBigNumberify('./index.rsh:129:34:array ref', stdlib.UInt_max, 5)];
                  const v204 = v100[stdlib.checkedBigNumberify('./index.rsh:129:47:array ref', stdlib.UInt_max, 5)];
                  const v206 = stdlib.eq(v203, v204);
                  const v208 = v206 ? stdlib.checkedBigNumberify('./index.rsh:129:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:129:58:decimal', stdlib.UInt_max, 0);
                  const v209 = v120[stdlib.checkedBigNumberify('./index.rsh:130:34:array ref', stdlib.UInt_max, 5)];
                  const v210 = v110[stdlib.checkedBigNumberify('./index.rsh:130:47:array ref', stdlib.UInt_max, 5)];
                  const v212 = stdlib.eq(v209, v210);
                  const v214 = v212 ? stdlib.checkedBigNumberify('./index.rsh:130:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:130:58:decimal', stdlib.UInt_max, 0);
                  const v215 = v134[stdlib.checkedBigNumberify('./index.rsh:131:34:array ref', stdlib.UInt_max, 6)];
                  const v216 = v100[stdlib.checkedBigNumberify('./index.rsh:131:47:array ref', stdlib.UInt_max, 6)];
                  const v218 = stdlib.eq(v215, v216);
                  const v220 = v218 ? stdlib.checkedBigNumberify('./index.rsh:131:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:131:58:decimal', stdlib.UInt_max, 0);
                  const v221 = v120[stdlib.checkedBigNumberify('./index.rsh:132:34:array ref', stdlib.UInt_max, 6)];
                  const v222 = v110[stdlib.checkedBigNumberify('./index.rsh:132:47:array ref', stdlib.UInt_max, 6)];
                  const v224 = stdlib.eq(v221, v222);
                  const v226 = v224 ? stdlib.checkedBigNumberify('./index.rsh:132:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:132:58:decimal', stdlib.UInt_max, 0);
                  const v227 = v134[stdlib.checkedBigNumberify('./index.rsh:133:34:array ref', stdlib.UInt_max, 7)];
                  const v228 = v100[stdlib.checkedBigNumberify('./index.rsh:133:47:array ref', stdlib.UInt_max, 7)];
                  const v230 = stdlib.eq(v227, v228);
                  const v232 = v230 ? stdlib.checkedBigNumberify('./index.rsh:133:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:133:58:decimal', stdlib.UInt_max, 0);
                  const v233 = v120[stdlib.checkedBigNumberify('./index.rsh:134:34:array ref', stdlib.UInt_max, 7)];
                  const v234 = v110[stdlib.checkedBigNumberify('./index.rsh:134:47:array ref', stdlib.UInt_max, 7)];
                  const v236 = stdlib.eq(v233, v234);
                  const v238 = v236 ? stdlib.checkedBigNumberify('./index.rsh:134:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:134:58:decimal', stdlib.UInt_max, 0);
                  const v239 = v134[stdlib.checkedBigNumberify('./index.rsh:135:34:array ref', stdlib.UInt_max, 8)];
                  const v240 = v100[stdlib.checkedBigNumberify('./index.rsh:135:47:array ref', stdlib.UInt_max, 8)];
                  const v242 = stdlib.eq(v239, v240);
                  const v244 = v242 ? stdlib.checkedBigNumberify('./index.rsh:135:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:135:58:decimal', stdlib.UInt_max, 0);
                  const v245 = v120[stdlib.checkedBigNumberify('./index.rsh:136:34:array ref', stdlib.UInt_max, 8)];
                  const v246 = v110[stdlib.checkedBigNumberify('./index.rsh:136:47:array ref', stdlib.UInt_max, 8)];
                  const v248 = stdlib.eq(v245, v246);
                  const v250 = v248 ? stdlib.checkedBigNumberify('./index.rsh:136:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:136:58:decimal', stdlib.UInt_max, 0);
                  const v251 = stdlib.add(v148, v160);
                  const v252 = stdlib.add(v251, v172);
                  const v253 = stdlib.add(v252, v184);
                  const v254 = stdlib.add(v253, v196);
                  const v255 = stdlib.add(v254, v208);
                  const v256 = stdlib.add(v255, v220);
                  const v257 = stdlib.add(v256, v232);
                  const v258 = stdlib.add(v257, v244);
                  const v259 = stdlib.add(v154, v166);
                  const v260 = stdlib.add(v259, v178);
                  const v261 = stdlib.add(v260, v190);
                  const v262 = stdlib.add(v261, v202);
                  const v263 = stdlib.add(v262, v214);
                  const v264 = stdlib.add(v263, v226);
                  const v265 = stdlib.add(v264, v238);
                  const v266 = stdlib.add(v265, v250);
                  const v268 = stdlib.gt(v258, v266);
                  const v269 = stdlib.lt(v258, v266);
                  const v270 = v269 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                  const v271 = v268 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2) : v270;
                  
                  const cv52 = v271;
                  const cv421 = v137;
                  const cv427 = v427;
                  
                  (() => {
                    const v52 = cv52;
                    const v421 = cv421;
                    const v427 = cv427;
                    
                    if ((() => {
                      const v65 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                      
                      return v65;})()) {
                      const v361 = stdlib.add(v421, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
                      sim_r.isHalt = false;
                      }
                    else {
                      const v383 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                      const v386 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:154:14:decimal', stdlib.UInt_max, 2), v39);
                      const v388 = v383 ? v38 : v47;
                      sim_r.txns.push({
                        amt: v386,
                        kind: 'from',
                        to: v388,
                        tok: undefined
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined
                        })
                      sim_r.isHalt = true;
                      }})();
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: undefined,
                tys: [ctc5, ctc0, ctc5, ctc2, ctc3, ctc3, ctc3, ctc0, ctc0, ctc3],
                waitIfNotPresent: false
                }));
              const [v133, v134] = txn8.data;
              const v137 = txn8.time;
              const v138 = txn8.secs;
              const v132 = txn8.from;
              ;
              const v136 = stdlib.addressEq(v47, v132);
              stdlib.assert(v136, {
                at: './index.rsh:115:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v140 = stdlib.digest(ctc4, [v133, v134]);
              const v141 = stdlib.digestEq(v90, v140);
              stdlib.assert(v141, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:116:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              const v143 = v134[stdlib.checkedBigNumberify('./index.rsh:119:34:array ref', stdlib.UInt_max, 0)];
              const v144 = v100[stdlib.checkedBigNumberify('./index.rsh:119:47:array ref', stdlib.UInt_max, 0)];
              const v146 = stdlib.eq(v143, v144);
              const v148 = v146 ? stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:119:58:decimal', stdlib.UInt_max, 0);
              const v149 = v120[stdlib.checkedBigNumberify('./index.rsh:120:34:array ref', stdlib.UInt_max, 0)];
              const v150 = v110[stdlib.checkedBigNumberify('./index.rsh:120:47:array ref', stdlib.UInt_max, 0)];
              const v152 = stdlib.eq(v149, v150);
              const v154 = v152 ? stdlib.checkedBigNumberify('./index.rsh:120:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:120:58:decimal', stdlib.UInt_max, 0);
              const v155 = v134[stdlib.checkedBigNumberify('./index.rsh:121:34:array ref', stdlib.UInt_max, 1)];
              const v156 = v100[stdlib.checkedBigNumberify('./index.rsh:121:47:array ref', stdlib.UInt_max, 1)];
              const v158 = stdlib.eq(v155, v156);
              const v160 = v158 ? stdlib.checkedBigNumberify('./index.rsh:121:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:121:58:decimal', stdlib.UInt_max, 0);
              const v161 = v120[stdlib.checkedBigNumberify('./index.rsh:122:34:array ref', stdlib.UInt_max, 1)];
              const v162 = v110[stdlib.checkedBigNumberify('./index.rsh:122:47:array ref', stdlib.UInt_max, 1)];
              const v164 = stdlib.eq(v161, v162);
              const v166 = v164 ? stdlib.checkedBigNumberify('./index.rsh:122:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:122:58:decimal', stdlib.UInt_max, 0);
              const v167 = v134[stdlib.checkedBigNumberify('./index.rsh:123:34:array ref', stdlib.UInt_max, 2)];
              const v168 = v100[stdlib.checkedBigNumberify('./index.rsh:123:47:array ref', stdlib.UInt_max, 2)];
              const v170 = stdlib.eq(v167, v168);
              const v172 = v170 ? stdlib.checkedBigNumberify('./index.rsh:123:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:123:58:decimal', stdlib.UInt_max, 0);
              const v173 = v120[stdlib.checkedBigNumberify('./index.rsh:124:34:array ref', stdlib.UInt_max, 2)];
              const v174 = v110[stdlib.checkedBigNumberify('./index.rsh:124:47:array ref', stdlib.UInt_max, 2)];
              const v176 = stdlib.eq(v173, v174);
              const v178 = v176 ? stdlib.checkedBigNumberify('./index.rsh:124:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:124:58:decimal', stdlib.UInt_max, 0);
              const v179 = v134[stdlib.checkedBigNumberify('./index.rsh:125:34:array ref', stdlib.UInt_max, 3)];
              const v180 = v100[stdlib.checkedBigNumberify('./index.rsh:125:47:array ref', stdlib.UInt_max, 3)];
              const v182 = stdlib.eq(v179, v180);
              const v184 = v182 ? stdlib.checkedBigNumberify('./index.rsh:125:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:125:58:decimal', stdlib.UInt_max, 0);
              const v185 = v120[stdlib.checkedBigNumberify('./index.rsh:126:34:array ref', stdlib.UInt_max, 3)];
              const v186 = v110[stdlib.checkedBigNumberify('./index.rsh:126:47:array ref', stdlib.UInt_max, 3)];
              const v188 = stdlib.eq(v185, v186);
              const v190 = v188 ? stdlib.checkedBigNumberify('./index.rsh:126:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:126:58:decimal', stdlib.UInt_max, 0);
              const v191 = v134[stdlib.checkedBigNumberify('./index.rsh:127:34:array ref', stdlib.UInt_max, 4)];
              const v192 = v100[stdlib.checkedBigNumberify('./index.rsh:127:47:array ref', stdlib.UInt_max, 4)];
              const v194 = stdlib.eq(v191, v192);
              const v196 = v194 ? stdlib.checkedBigNumberify('./index.rsh:127:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:127:58:decimal', stdlib.UInt_max, 0);
              const v197 = v120[stdlib.checkedBigNumberify('./index.rsh:128:34:array ref', stdlib.UInt_max, 4)];
              const v198 = v110[stdlib.checkedBigNumberify('./index.rsh:128:47:array ref', stdlib.UInt_max, 4)];
              const v200 = stdlib.eq(v197, v198);
              const v202 = v200 ? stdlib.checkedBigNumberify('./index.rsh:128:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:128:58:decimal', stdlib.UInt_max, 0);
              const v203 = v134[stdlib.checkedBigNumberify('./index.rsh:129:34:array ref', stdlib.UInt_max, 5)];
              const v204 = v100[stdlib.checkedBigNumberify('./index.rsh:129:47:array ref', stdlib.UInt_max, 5)];
              const v206 = stdlib.eq(v203, v204);
              const v208 = v206 ? stdlib.checkedBigNumberify('./index.rsh:129:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:129:58:decimal', stdlib.UInt_max, 0);
              const v209 = v120[stdlib.checkedBigNumberify('./index.rsh:130:34:array ref', stdlib.UInt_max, 5)];
              const v210 = v110[stdlib.checkedBigNumberify('./index.rsh:130:47:array ref', stdlib.UInt_max, 5)];
              const v212 = stdlib.eq(v209, v210);
              const v214 = v212 ? stdlib.checkedBigNumberify('./index.rsh:130:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:130:58:decimal', stdlib.UInt_max, 0);
              const v215 = v134[stdlib.checkedBigNumberify('./index.rsh:131:34:array ref', stdlib.UInt_max, 6)];
              const v216 = v100[stdlib.checkedBigNumberify('./index.rsh:131:47:array ref', stdlib.UInt_max, 6)];
              const v218 = stdlib.eq(v215, v216);
              const v220 = v218 ? stdlib.checkedBigNumberify('./index.rsh:131:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:131:58:decimal', stdlib.UInt_max, 0);
              const v221 = v120[stdlib.checkedBigNumberify('./index.rsh:132:34:array ref', stdlib.UInt_max, 6)];
              const v222 = v110[stdlib.checkedBigNumberify('./index.rsh:132:47:array ref', stdlib.UInt_max, 6)];
              const v224 = stdlib.eq(v221, v222);
              const v226 = v224 ? stdlib.checkedBigNumberify('./index.rsh:132:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:132:58:decimal', stdlib.UInt_max, 0);
              const v227 = v134[stdlib.checkedBigNumberify('./index.rsh:133:34:array ref', stdlib.UInt_max, 7)];
              const v228 = v100[stdlib.checkedBigNumberify('./index.rsh:133:47:array ref', stdlib.UInt_max, 7)];
              const v230 = stdlib.eq(v227, v228);
              const v232 = v230 ? stdlib.checkedBigNumberify('./index.rsh:133:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:133:58:decimal', stdlib.UInt_max, 0);
              const v233 = v120[stdlib.checkedBigNumberify('./index.rsh:134:34:array ref', stdlib.UInt_max, 7)];
              const v234 = v110[stdlib.checkedBigNumberify('./index.rsh:134:47:array ref', stdlib.UInt_max, 7)];
              const v236 = stdlib.eq(v233, v234);
              const v238 = v236 ? stdlib.checkedBigNumberify('./index.rsh:134:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:134:58:decimal', stdlib.UInt_max, 0);
              const v239 = v134[stdlib.checkedBigNumberify('./index.rsh:135:34:array ref', stdlib.UInt_max, 8)];
              const v240 = v100[stdlib.checkedBigNumberify('./index.rsh:135:47:array ref', stdlib.UInt_max, 8)];
              const v242 = stdlib.eq(v239, v240);
              const v244 = v242 ? stdlib.checkedBigNumberify('./index.rsh:135:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:135:58:decimal', stdlib.UInt_max, 0);
              const v245 = v120[stdlib.checkedBigNumberify('./index.rsh:136:34:array ref', stdlib.UInt_max, 8)];
              const v246 = v110[stdlib.checkedBigNumberify('./index.rsh:136:47:array ref', stdlib.UInt_max, 8)];
              const v248 = stdlib.eq(v245, v246);
              const v250 = v248 ? stdlib.checkedBigNumberify('./index.rsh:136:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:136:58:decimal', stdlib.UInt_max, 0);
              const v251 = stdlib.add(v148, v160);
              const v252 = stdlib.add(v251, v172);
              const v253 = stdlib.add(v252, v184);
              const v254 = stdlib.add(v253, v196);
              const v255 = stdlib.add(v254, v208);
              const v256 = stdlib.add(v255, v220);
              const v257 = stdlib.add(v256, v232);
              const v258 = stdlib.add(v257, v244);
              const v259 = stdlib.add(v154, v166);
              const v260 = stdlib.add(v259, v178);
              const v261 = stdlib.add(v260, v190);
              const v262 = stdlib.add(v261, v202);
              const v263 = stdlib.add(v262, v214);
              const v264 = stdlib.add(v263, v226);
              const v265 = stdlib.add(v264, v238);
              const v266 = stdlib.add(v265, v250);
              const v268 = stdlib.gt(v258, v266);
              const v269 = stdlib.lt(v258, v266);
              const v270 = v269 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
              const v271 = v268 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2) : v270;
              stdlib.protect(ctc1, await interact.seeOutcome(v271), {
                at: './index.rsh:145:28:application',
                fs: ['at ./index.rsh:144:11:application call to [unknown function] (defined at: ./index.rsh:144:23:function exp)'],
                msg: 'seeOutcome',
                who: 'attacher'
                });
              
              const cv52 = v271;
              const cv421 = v137;
              const cv427 = v427;
              
              v52 = cv52;
              v421 = cv421;
              v427 = cv427;
              
              continue;
              
              }
            }
          }
        }
      }
    const v383 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v386 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:154:14:decimal', stdlib.UInt_max, 2), v39);
    const v388 = v383 ? v38 : v47;
    ;
    return;}
  
  
  };
export async function deployer(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deployer expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 9));
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const v33 = await ctc.creationTime();
  const v34 = await ctc.creationSecs();
  
  const v32 = stdlib.protect(ctc0, interact.wager, 'for deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v32],
    evt_cnt: 1,
    funcNum: 1,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v32, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v39] = txn1.data;
      const v42 = txn1.time;
      const v43 = txn1.secs;
      const v38 = txn1.from;
      
      sim_r.txns.push({
        amt: v39,
        kind: 'to',
        tok: undefined
        });
      const v399 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const [v39] = txn1.data;
  const v42 = txn1.time;
  const v43 = txn1.secs;
  const v38 = txn1.from;
  ;
  const v399 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
  const txn2 = await (ctc.recv({
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: ['time', v399],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v38, v39, v399],
      evt_cnt: 0,
      funcNum: 3,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [] = txn3.data;
        const v405 = txn3.time;
        const v406 = txn3.secs;
        const v402 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v404 = stdlib.addressEq(v38, v402);
        stdlib.assert(v404, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:58:49:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'deployer'
          });
        sim_r.txns.push({
          amt: v39,
          kind: 'from',
          to: v38,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc5, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const [] = txn3.data;
    const v405 = txn3.time;
    const v406 = txn3.secs;
    const v402 = txn3.from;
    ;
    const v404 = stdlib.addressEq(v38, v402);
    stdlib.assert(v404, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:58:49:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'deployer'
      });
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:42:31:application',
      fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:58:49:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'deployer'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v50 = txn2.time;
    const v51 = txn2.secs;
    const v47 = txn2.from;
    const v49 = stdlib.add(v39, v39);
    ;
    let v52 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v421 = v50;
    let v427 = v49;
    
    while ((() => {
      const v65 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v65;})()) {
      const v361 = stdlib.add(v421, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
      const v70 = stdlib.protect(ctc1, await interact.selectShips(), {
        at: './index.rsh:69:45:application',
        fs: ['at ./index.rsh:68:13:application call to [unknown function] (defined at: ./index.rsh:68:17:function exp)'],
        msg: 'selectShips',
        who: 'deployer'
        });
      const v72 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:70:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:68:13:application call to [unknown function] (defined at: ./index.rsh:68:17:function exp)'],
        msg: 'random',
        who: 'deployer'
        });
      const v73 = stdlib.digest(ctc2, [v72, v70]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v38, v39, v47, v361, v427, v73],
        evt_cnt: 1,
        funcNum: 6,
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const [v76] = txn3.data;
          const v79 = txn3.time;
          const v80 = txn3.secs;
          const v75 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v78 = stdlib.addressEq(v38, v75);
          stdlib.assert(v78, {
            at: './index.rsh:73:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const v335 = stdlib.add(v79, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v361],
        tys: [ctc5, ctc0, ctc5, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv({
          evt_cnt: 0,
          funcNum: 7,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const [] = txn4.data;
        const v367 = txn4.time;
        const v368 = txn4.secs;
        const v364 = txn4.from;
        ;
        const v366 = stdlib.addressEq(v47, v364);
        stdlib.assert(v366, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:73:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'deployer'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeout(), {
          at: './index.rsh:42:31:application',
          fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:73:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'deployer'
          });
        
        return;
        }
      else {
        const [v76] = txn3.data;
        const v79 = txn3.time;
        const v80 = txn3.secs;
        const v75 = txn3.from;
        ;
        const v78 = stdlib.addressEq(v38, v75);
        stdlib.assert(v78, {
          at: './index.rsh:73:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'deployer'
          });
        const v335 = stdlib.add(v79, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
        const txn4 = await (ctc.recv({
          evt_cnt: 1,
          funcNum: 8,
          out_tys: [ctc3],
          timeoutAt: ['time', v335],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v38, v39, v47, v76, v335, v427],
            evt_cnt: 0,
            funcNum: 9,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const [] = txn5.data;
              const v341 = txn5.time;
              const v342 = txn5.secs;
              const v338 = txn5.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v340 = stdlib.addressEq(v38, v338);
              stdlib.assert(v340, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:84:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'deployer'
                });
              sim_r.txns.push({
                amt: v427,
                kind: 'from',
                to: v38,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined,
            tys: [ctc5, ctc0, ctc5, ctc3, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const [] = txn5.data;
          const v341 = txn5.time;
          const v342 = txn5.secs;
          const v338 = txn5.from;
          ;
          const v340 = stdlib.addressEq(v38, v338);
          stdlib.assert(v340, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:84:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'deployer'
            });
          ;
          stdlib.protect(ctc4, await interact.informTimeout(), {
            at: './index.rsh:42:31:application',
            fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:84:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'deployer'
            });
          
          return;
          }
        else {
          const [v90] = txn4.data;
          const v93 = txn4.time;
          const v94 = txn4.secs;
          const v89 = txn4.from;
          ;
          const v92 = stdlib.addressEq(v47, v89);
          stdlib.assert(v92, {
            at: './index.rsh:84:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const v309 = stdlib.add(v93, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
          const v98 = stdlib.protect(ctc1, await interact.guessShips(), {
            at: './index.rsh:92:56:application',
            fs: ['at ./index.rsh:91:13:application call to [unknown function] (defined at: ./index.rsh:91:17:function exp)'],
            msg: 'guessShips',
            who: 'deployer'
            });
          
          const txn5 = await (ctc.sendrecv({
            args: [v38, v39, v47, v76, v90, v309, v427, v98],
            evt_cnt: 1,
            funcNum: 10,
            onlyIf: true,
            out_tys: [ctc1],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const [v100] = txn5.data;
              const v103 = txn5.time;
              const v104 = txn5.secs;
              const v99 = txn5.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v102 = stdlib.addressEq(v38, v99);
              stdlib.assert(v102, {
                at: './index.rsh:94:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v283 = stdlib.add(v103, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v309],
            tys: [ctc5, ctc0, ctc5, ctc3, ctc3, ctc0, ctc0, ctc1],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv({
              evt_cnt: 0,
              funcNum: 11,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const [] = txn6.data;
            const v315 = txn6.time;
            const v316 = txn6.secs;
            const v312 = txn6.from;
            ;
            const v314 = stdlib.addressEq(v47, v312);
            stdlib.assert(v314, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:94:58:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'deployer'
              });
            ;
            stdlib.protect(ctc4, await interact.informTimeout(), {
              at: './index.rsh:42:31:application',
              fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:94:58:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'deployer'
              });
            
            return;
            }
          else {
            const [v100] = txn5.data;
            const v103 = txn5.time;
            const v104 = txn5.secs;
            const v99 = txn5.from;
            ;
            const v102 = stdlib.addressEq(v38, v99);
            stdlib.assert(v102, {
              at: './index.rsh:94:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'deployer'
              });
            const v283 = stdlib.add(v103, stdlib.checkedBigNumberify('./index.rsh:12:18:decimal', stdlib.UInt_max, 10));
            const txn6 = await (ctc.recv({
              evt_cnt: 1,
              funcNum: 12,
              out_tys: [ctc1],
              timeoutAt: ['time', v283],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v38, v39, v47, v76, v90, v100, v283, v427],
                evt_cnt: 0,
                funcNum: 13,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const [] = txn7.data;
                  const v289 = txn7.time;
                  const v290 = txn7.secs;
                  const v286 = txn7.from;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v288 = stdlib.addressEq(v38, v286);
                  stdlib.assert(v288, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./index.rsh:100:58:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                    msg: 'sender correct',
                    who: 'deployer'
                    });
                  sim_r.txns.push({
                    amt: v427,
                    kind: 'from',
                    to: v38,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: undefined,
                tys: [ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const [] = txn7.data;
              const v289 = txn7.time;
              const v290 = txn7.secs;
              const v286 = txn7.from;
              ;
              const v288 = stdlib.addressEq(v38, v286);
              stdlib.assert(v288, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:100:58:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'deployer'
                });
              ;
              stdlib.protect(ctc4, await interact.informTimeout(), {
                at: './index.rsh:42:31:application',
                fs: ['at ./index.rsh:41:11:application call to [unknown function] (defined at: ./index.rsh:41:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:40:30:function exp)', 'at ./index.rsh:100:58:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'informTimeout',
                who: 'deployer'
                });
              
              return;
              }
            else {
              const [v110] = txn6.data;
              const v113 = txn6.time;
              const v114 = txn6.secs;
              const v109 = txn6.from;
              ;
              const v112 = stdlib.addressEq(v47, v109);
              stdlib.assert(v112, {
                at: './index.rsh:100:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const txn7 = await (ctc.sendrecv({
                args: [v38, v39, v47, v76, v90, v100, v110, v427, v72, v70],
                evt_cnt: 2,
                funcNum: 14,
                onlyIf: true,
                out_tys: [ctc0, ctc1],
                pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                  
                  const [v119, v120] = txn7.data;
                  const v123 = txn7.time;
                  const v124 = txn7.secs;
                  const v118 = txn7.from;
                  
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v122 = stdlib.addressEq(v38, v118);
                  stdlib.assert(v122, {
                    at: './index.rsh:108:9:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'deployer'
                    });
                  const v126 = stdlib.digest(ctc2, [v119, v120]);
                  const v127 = stdlib.digestEq(v76, v126);
                  stdlib.assert(v127, {
                    at: 'reach standard library:65:17:application',
                    fs: ['at ./index.rsh:109:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                    msg: null,
                    who: 'deployer'
                    });
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: undefined,
                tys: [ctc5, ctc0, ctc5, ctc3, ctc3, ctc1, ctc1, ctc0, ctc0, ctc1],
                waitIfNotPresent: false
                }));
              const [v119, v120] = txn7.data;
              const v123 = txn7.time;
              const v124 = txn7.secs;
              const v118 = txn7.from;
              ;
              const v122 = stdlib.addressEq(v38, v118);
              stdlib.assert(v122, {
                at: './index.rsh:108:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v126 = stdlib.digest(ctc2, [v119, v120]);
              const v127 = stdlib.digestEq(v76, v126);
              stdlib.assert(v127, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:109:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'deployer'
                });
              const txn8 = await (ctc.recv({
                evt_cnt: 2,
                funcNum: 15,
                out_tys: [ctc0, ctc1],
                timeoutAt: undefined,
                waitIfNotPresent: false
                }));
              const [v133, v134] = txn8.data;
              const v137 = txn8.time;
              const v138 = txn8.secs;
              const v132 = txn8.from;
              ;
              const v136 = stdlib.addressEq(v47, v132);
              stdlib.assert(v136, {
                at: './index.rsh:115:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v140 = stdlib.digest(ctc2, [v133, v134]);
              const v141 = stdlib.digestEq(v90, v140);
              stdlib.assert(v141, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:116:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'deployer'
                });
              const v143 = v134[stdlib.checkedBigNumberify('./index.rsh:119:34:array ref', stdlib.UInt_max, 0)];
              const v144 = v100[stdlib.checkedBigNumberify('./index.rsh:119:47:array ref', stdlib.UInt_max, 0)];
              const v146 = stdlib.eq(v143, v144);
              const v148 = v146 ? stdlib.checkedBigNumberify('./index.rsh:119:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:119:58:decimal', stdlib.UInt_max, 0);
              const v149 = v120[stdlib.checkedBigNumberify('./index.rsh:120:34:array ref', stdlib.UInt_max, 0)];
              const v150 = v110[stdlib.checkedBigNumberify('./index.rsh:120:47:array ref', stdlib.UInt_max, 0)];
              const v152 = stdlib.eq(v149, v150);
              const v154 = v152 ? stdlib.checkedBigNumberify('./index.rsh:120:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:120:58:decimal', stdlib.UInt_max, 0);
              const v155 = v134[stdlib.checkedBigNumberify('./index.rsh:121:34:array ref', stdlib.UInt_max, 1)];
              const v156 = v100[stdlib.checkedBigNumberify('./index.rsh:121:47:array ref', stdlib.UInt_max, 1)];
              const v158 = stdlib.eq(v155, v156);
              const v160 = v158 ? stdlib.checkedBigNumberify('./index.rsh:121:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:121:58:decimal', stdlib.UInt_max, 0);
              const v161 = v120[stdlib.checkedBigNumberify('./index.rsh:122:34:array ref', stdlib.UInt_max, 1)];
              const v162 = v110[stdlib.checkedBigNumberify('./index.rsh:122:47:array ref', stdlib.UInt_max, 1)];
              const v164 = stdlib.eq(v161, v162);
              const v166 = v164 ? stdlib.checkedBigNumberify('./index.rsh:122:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:122:58:decimal', stdlib.UInt_max, 0);
              const v167 = v134[stdlib.checkedBigNumberify('./index.rsh:123:34:array ref', stdlib.UInt_max, 2)];
              const v168 = v100[stdlib.checkedBigNumberify('./index.rsh:123:47:array ref', stdlib.UInt_max, 2)];
              const v170 = stdlib.eq(v167, v168);
              const v172 = v170 ? stdlib.checkedBigNumberify('./index.rsh:123:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:123:58:decimal', stdlib.UInt_max, 0);
              const v173 = v120[stdlib.checkedBigNumberify('./index.rsh:124:34:array ref', stdlib.UInt_max, 2)];
              const v174 = v110[stdlib.checkedBigNumberify('./index.rsh:124:47:array ref', stdlib.UInt_max, 2)];
              const v176 = stdlib.eq(v173, v174);
              const v178 = v176 ? stdlib.checkedBigNumberify('./index.rsh:124:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:124:58:decimal', stdlib.UInt_max, 0);
              const v179 = v134[stdlib.checkedBigNumberify('./index.rsh:125:34:array ref', stdlib.UInt_max, 3)];
              const v180 = v100[stdlib.checkedBigNumberify('./index.rsh:125:47:array ref', stdlib.UInt_max, 3)];
              const v182 = stdlib.eq(v179, v180);
              const v184 = v182 ? stdlib.checkedBigNumberify('./index.rsh:125:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:125:58:decimal', stdlib.UInt_max, 0);
              const v185 = v120[stdlib.checkedBigNumberify('./index.rsh:126:34:array ref', stdlib.UInt_max, 3)];
              const v186 = v110[stdlib.checkedBigNumberify('./index.rsh:126:47:array ref', stdlib.UInt_max, 3)];
              const v188 = stdlib.eq(v185, v186);
              const v190 = v188 ? stdlib.checkedBigNumberify('./index.rsh:126:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:126:58:decimal', stdlib.UInt_max, 0);
              const v191 = v134[stdlib.checkedBigNumberify('./index.rsh:127:34:array ref', stdlib.UInt_max, 4)];
              const v192 = v100[stdlib.checkedBigNumberify('./index.rsh:127:47:array ref', stdlib.UInt_max, 4)];
              const v194 = stdlib.eq(v191, v192);
              const v196 = v194 ? stdlib.checkedBigNumberify('./index.rsh:127:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:127:58:decimal', stdlib.UInt_max, 0);
              const v197 = v120[stdlib.checkedBigNumberify('./index.rsh:128:34:array ref', stdlib.UInt_max, 4)];
              const v198 = v110[stdlib.checkedBigNumberify('./index.rsh:128:47:array ref', stdlib.UInt_max, 4)];
              const v200 = stdlib.eq(v197, v198);
              const v202 = v200 ? stdlib.checkedBigNumberify('./index.rsh:128:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:128:58:decimal', stdlib.UInt_max, 0);
              const v203 = v134[stdlib.checkedBigNumberify('./index.rsh:129:34:array ref', stdlib.UInt_max, 5)];
              const v204 = v100[stdlib.checkedBigNumberify('./index.rsh:129:47:array ref', stdlib.UInt_max, 5)];
              const v206 = stdlib.eq(v203, v204);
              const v208 = v206 ? stdlib.checkedBigNumberify('./index.rsh:129:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:129:58:decimal', stdlib.UInt_max, 0);
              const v209 = v120[stdlib.checkedBigNumberify('./index.rsh:130:34:array ref', stdlib.UInt_max, 5)];
              const v210 = v110[stdlib.checkedBigNumberify('./index.rsh:130:47:array ref', stdlib.UInt_max, 5)];
              const v212 = stdlib.eq(v209, v210);
              const v214 = v212 ? stdlib.checkedBigNumberify('./index.rsh:130:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:130:58:decimal', stdlib.UInt_max, 0);
              const v215 = v134[stdlib.checkedBigNumberify('./index.rsh:131:34:array ref', stdlib.UInt_max, 6)];
              const v216 = v100[stdlib.checkedBigNumberify('./index.rsh:131:47:array ref', stdlib.UInt_max, 6)];
              const v218 = stdlib.eq(v215, v216);
              const v220 = v218 ? stdlib.checkedBigNumberify('./index.rsh:131:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:131:58:decimal', stdlib.UInt_max, 0);
              const v221 = v120[stdlib.checkedBigNumberify('./index.rsh:132:34:array ref', stdlib.UInt_max, 6)];
              const v222 = v110[stdlib.checkedBigNumberify('./index.rsh:132:47:array ref', stdlib.UInt_max, 6)];
              const v224 = stdlib.eq(v221, v222);
              const v226 = v224 ? stdlib.checkedBigNumberify('./index.rsh:132:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:132:58:decimal', stdlib.UInt_max, 0);
              const v227 = v134[stdlib.checkedBigNumberify('./index.rsh:133:34:array ref', stdlib.UInt_max, 7)];
              const v228 = v100[stdlib.checkedBigNumberify('./index.rsh:133:47:array ref', stdlib.UInt_max, 7)];
              const v230 = stdlib.eq(v227, v228);
              const v232 = v230 ? stdlib.checkedBigNumberify('./index.rsh:133:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:133:58:decimal', stdlib.UInt_max, 0);
              const v233 = v120[stdlib.checkedBigNumberify('./index.rsh:134:34:array ref', stdlib.UInt_max, 7)];
              const v234 = v110[stdlib.checkedBigNumberify('./index.rsh:134:47:array ref', stdlib.UInt_max, 7)];
              const v236 = stdlib.eq(v233, v234);
              const v238 = v236 ? stdlib.checkedBigNumberify('./index.rsh:134:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:134:58:decimal', stdlib.UInt_max, 0);
              const v239 = v134[stdlib.checkedBigNumberify('./index.rsh:135:34:array ref', stdlib.UInt_max, 8)];
              const v240 = v100[stdlib.checkedBigNumberify('./index.rsh:135:47:array ref', stdlib.UInt_max, 8)];
              const v242 = stdlib.eq(v239, v240);
              const v244 = v242 ? stdlib.checkedBigNumberify('./index.rsh:135:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:135:58:decimal', stdlib.UInt_max, 0);
              const v245 = v120[stdlib.checkedBigNumberify('./index.rsh:136:34:array ref', stdlib.UInt_max, 8)];
              const v246 = v110[stdlib.checkedBigNumberify('./index.rsh:136:47:array ref', stdlib.UInt_max, 8)];
              const v248 = stdlib.eq(v245, v246);
              const v250 = v248 ? stdlib.checkedBigNumberify('./index.rsh:136:54:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:136:58:decimal', stdlib.UInt_max, 0);
              const v251 = stdlib.add(v148, v160);
              const v252 = stdlib.add(v251, v172);
              const v253 = stdlib.add(v252, v184);
              const v254 = stdlib.add(v253, v196);
              const v255 = stdlib.add(v254, v208);
              const v256 = stdlib.add(v255, v220);
              const v257 = stdlib.add(v256, v232);
              const v258 = stdlib.add(v257, v244);
              const v259 = stdlib.add(v154, v166);
              const v260 = stdlib.add(v259, v178);
              const v261 = stdlib.add(v260, v190);
              const v262 = stdlib.add(v261, v202);
              const v263 = stdlib.add(v262, v214);
              const v264 = stdlib.add(v263, v226);
              const v265 = stdlib.add(v264, v238);
              const v266 = stdlib.add(v265, v250);
              const v268 = stdlib.gt(v258, v266);
              const v269 = stdlib.lt(v258, v266);
              const v270 = v269 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
              const v271 = v268 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2) : v270;
              stdlib.protect(ctc4, await interact.seeOutcome(v271), {
                at: './index.rsh:145:28:application',
                fs: ['at ./index.rsh:144:11:application call to [unknown function] (defined at: ./index.rsh:144:23:function exp)'],
                msg: 'seeOutcome',
                who: 'deployer'
                });
              
              const cv52 = v271;
              const cv421 = v137;
              const cv427 = v427;
              
              v52 = cv52;
              v421 = cv421;
              v427 = cv427;
              
              continue;
              
              }
            }
          }
        }
      }
    const v383 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v386 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:154:14:decimal', stdlib.UInt_max, 2), v39);
    const v388 = v383 ? v38 : v47;
    ;
    return;}
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 32
store 1
substring 32 64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
dup
bz ctor
// Handler 1
dup
int 1
==
bz l0
pop
txna ApplicationArgs 1
dup
len
int 0
==
assert
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 255
pop
// compute state in HM_Check 0
int 8
bzero
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:50:7:dot"
// "[]"
load 255
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Receiver
==
assert
l1:
pop
global Round
int 10
+
store 254
// compute state in HM_Set 1
byte base64(AAAAAAAAAAE=)
txn Sender
concat
load 255
itob
concat
load 254
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 2
dup
int 2
==
bz l2
pop
txna ApplicationArgs 1
dup
len
int 48
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 1
byte base64(AAAAAAAAAAE=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
sha256
load 1
==
assert
global Round
load 253
<
assert
// "CheckPay"
// "./index.rsh:58:7:dot"
// "[]"
load 254
dup
bz l3
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Receiver
==
assert
l3:
pop
load 255
load 254
itob
concat
txn Sender
concat
byte base64(AAAAAAAAAAE=)
global Round
itob
concat
load 254
dup
+
itob
concat
b loop4
l2:
// Handler 3
dup
int 3
==
bz l4
pop
txna ApplicationArgs 1
dup
len
int 48
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 1
byte base64(AAAAAAAAAAE=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
sha256
load 1
==
assert
global Round
load 253
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:58:49:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:58:49:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l5
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l5:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l6:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l4:
l7:
l8:
// Handler 6
dup
int 6
==
bz l9
pop
txna ApplicationArgs 1
dup
len
int 88
==
assert
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
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 250
pop
// compute state in HM_Check 6
byte base64(AAAAAAAAAAY=)
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
sha256
load 1
==
assert
global Round
load 252
<
assert
// "CheckPay"
// "./index.rsh:73:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:73:9:dot"
// "[]"
load 255
txn Sender
==
assert
global Round
int 10
+
store 249
// compute state in HM_Set 8
byte base64(AAAAAAAAAAg=)
load 255
concat
load 254
itob
concat
load 253
concat
load 250
concat
load 249
itob
concat
load 251
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l9:
// Handler 7
dup
int 7
==
bz l10
pop
txna ApplicationArgs 1
dup
len
int 88
==
assert
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
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 6
byte base64(AAAAAAAAAAY=)
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
sha256
load 1
==
assert
global Round
load 252
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:73:57:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:73:57:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
txn Sender
==
assert
load 251
dup
bz l11
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l11:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l12:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l10:
// Handler 8
dup
int 8
==
bz l13
pop
txna ApplicationArgs 1
dup
len
int 120
==
assert
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
dup
substring 112 120
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 249
pop
// compute state in HM_Check 8
byte base64(AAAAAAAAAAg=)
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
load 250
itob
concat
sha256
load 1
==
assert
global Round
load 251
<
assert
// "CheckPay"
// "./index.rsh:84:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:84:9:dot"
// "[]"
load 253
txn Sender
==
assert
global Round
int 10
+
store 248
// compute state in HM_Set 10
byte base64(AAAAAAAAAAo=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 249
concat
load 248
itob
concat
load 250
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l13:
// Handler 9
dup
int 9
==
bz l14
pop
txna ApplicationArgs 1
dup
len
int 120
==
assert
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
dup
substring 112 120
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 8
byte base64(AAAAAAAAAAg=)
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
load 250
itob
concat
sha256
load 1
==
assert
global Round
load 251
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:84:57:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:84:57:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 250
dup
bz l15
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l15:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l16:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l14:
// Handler 10
dup
int 10
==
bz l17
pop
txna ApplicationArgs 1
dup
len
int 152
==
assert
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
dup
substring 144 152
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 72
==
assert
dup
store 248
pop
// compute state in HM_Check 10
byte base64(AAAAAAAAAAo=)
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
load 249
itob
concat
sha256
load 1
==
assert
global Round
load 250
<
assert
// "CheckPay"
// "./index.rsh:94:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:94:9:dot"
// "[]"
load 255
txn Sender
==
assert
global Round
int 10
+
store 247
// compute state in HM_Set 12
byte base64(AAAAAAAAAAw=)
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
load 248
concat
load 247
itob
concat
load 249
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l17:
// Handler 11
dup
int 11
==
bz l18
pop
txna ApplicationArgs 1
dup
len
int 152
==
assert
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
dup
substring 144 152
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 10
byte base64(AAAAAAAAAAo=)
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
load 249
itob
concat
sha256
load 1
==
assert
global Round
load 250
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:94:58:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:94:58:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
txn Sender
==
assert
load 249
dup
bz l19
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l19:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l20:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l18:
// Handler 12
dup
int 12
==
bz l21
pop
txna ApplicationArgs 1
dup
len
int 224
==
assert
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
dup
substring 216 224
btoi
store 248
pop
txna ApplicationArgs 2
dup
len
int 72
==
assert
dup
store 247
pop
// compute state in HM_Check 12
byte base64(AAAAAAAAAAw=)
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
load 248
itob
concat
sha256
load 1
==
assert
global Round
load 249
<
assert
// "CheckPay"
// "./index.rsh:100:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:100:9:dot"
// "[]"
load 253
txn Sender
==
assert
// compute state in HM_Set 14
byte base64(AAAAAAAAAA4=)
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
load 247
concat
load 248
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l21:
// Handler 13
dup
int 13
==
bz l22
pop
txna ApplicationArgs 1
dup
len
int 224
==
assert
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
dup
substring 216 224
btoi
store 248
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 12
byte base64(AAAAAAAAAAw=)
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
load 248
itob
concat
sha256
load 1
==
assert
global Round
load 249
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:100:58:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:100:58:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 248
dup
bz l23
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l23:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l24:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l22:
// Handler 14
dup
int 14
==
bz l25
pop
txna ApplicationArgs 1
dup
len
int 288
==
assert
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
txna ApplicationArgs 2
dup
len
int 80
==
assert
dup
substring 0 8
btoi
store 247
dup
substring 8 80
store 246
pop
// compute state in HM_Check 14
byte base64(AAAAAAAAAA4=)
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
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:108:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:108:9:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:109:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 252
load 247
itob
load 246
concat
sha256
==
assert
// compute state in HM_Set 15
byte base64(AAAAAAAAAA8=)
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
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l25:
// Handler 15
dup
int 15
==
bz l26
pop
txna ApplicationArgs 1
dup
len
int 328
==
assert
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
txna ApplicationArgs 2
dup
len
int 80
==
assert
dup
substring 0 8
btoi
store 247
dup
substring 8 80
store 246
pop
// compute state in HM_Check 15
byte base64(AAAAAAAAAA8=)
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
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:115:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:115:9:dot"
// "[]"
load 253
txn Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:116:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 252
load 247
itob
load 246
concat
sha256
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
store 245
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
store 244
load 255
load 254
itob
concat
load 253
concat
int 1
int 0
load 245
load 244
<
select
int 2
load 245
load 244
>
select
itob
global Round
itob
concat
load 248
itob
concat
b loop4
l26:
int 0
assert
loop4:
dup
substring 0 8
btoi
store 255
dup
substring 8 16
btoi
store 254
dup
substring 16 24
btoi
store 253
pop
dup
substring 0 32
store 252
dup
substring 32 40
btoi
store 251
dup
substring 40 72
store 250
pop
load 255
int 1
==
bz l27
load 254
int 10
+
store 249
// compute state in HM_Set 6
byte base64(AAAAAAAAAAY=)
load 252
concat
load 251
itob
concat
load 250
concat
load 249
itob
concat
load 253
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l27:
load 252
load 251
itob
concat
load 250
concat
load 255
itob
concat
byte base64()
loop5:
pop
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
int 2
load 254
*
dup
bz l28
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 253
load 255
load 252
int 2
==
select
dig 1
gtxns Receiver
==
assert
l28:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l29:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
load 2
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
byte base64()
int 64
bzero
app_global_put
b checkSize
ctor:
txn Sender
global CreatorAddress
==
assert
txna ApplicationArgs 1
store 2
// compute state in HM_Set 0
int 8
bzero
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
`,
  appClear: `#pragma version 4
int 0
`,
  escrow: `#pragma version 4
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  unsupported: [],
  version: 2,
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
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
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v39",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v309",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[9]",
                "name": "v100",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v309",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
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
        "internalType": "struct T23",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v100",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[9]",
                "name": "v110",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v100",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
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
        "internalType": "struct T27",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v100",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v110",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
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
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v100",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v110",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v120",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v133",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v134",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T31",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T32",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
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
        "internalType": "struct T7",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
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
        "internalType": "struct T7",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v361",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
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
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v361",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
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
        "internalType": "struct T14",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
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
        "internalType": "struct T18",
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
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v39",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v309",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[9]",
                "name": "v100",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v309",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T23",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v100",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[9]",
                "name": "v110",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v100",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T27",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v100",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v110",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T24",
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
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T30",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v100",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v110",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v120",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v133",
                "type": "uint256"
              },
              {
                "internalType": "uint256[9]",
                "name": "v134",
                "type": "uint256[9]"
              }
            ],
            "internalType": "struct T31",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T32",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
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
        "internalType": "struct T7",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v399",
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
        "internalType": "struct T7",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v361",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
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
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v361",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
                "name": "v38",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v39",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v427",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T18",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051808201825243815242602091820152815160008183018190528184018190528351808303850181526060909201909352805191012090556121a2806100766000396000f3fe6080604052600436106100c65760003560e01c80636cc4a8441161007f578063b861cb1011610059578063b861cb101461017f578063c15cd8df14610192578063e163d7c4146101a5578063fb0e04fc146101b857600080fd5b80636cc4a844146101465780636dacfd6f14610159578063b32a639f1461016c57600080fd5b806316b73540146100d25780631dc091ad146100e75780632438df70146100fa5780634188e0221461010d57806348e3cc1214610120578063499c46c51461013357600080fd5b366100cd57005b600080fd5b6100e56100e0366004611a46565b6101cb565b005b6100e56100f5366004611a59565b6105fc565b6100e5610108366004611a6b565b61072b565b6100e561011b3660046119cb565b61082d565b6100e561012e366004611a33565b610934565b6100e56101413660046119e7565b610b3d565b6100e56101543660046119af565b610cc2565b6100e56101673660046119cb565b610e75565b6100e561017a3660046119fa565b611048565b6100e561018d3660046119af565b61114d565b6100e56101a0366004611a0d565b611252565b6100e56101b3366004611a6b565b6113e6565b6100e56101c6366004611a20565b6114e5565b604051610207906101e390600f90849060200161206c565b6040516020818303038152906040528051906020012060001c6000541460376115e6565b60008080556040805180820182528281526020810192909252517fb34279bff2f61831b1b7ce3ef987ca48bc3690632a5022bc7af3b498cdfa3f7d9061024e908490611e8a565b60405180910390a1610262341560346115e6565b610287336102766060850160408601611972565b6001600160a01b03161460356115e6565b6040516102cc906102a79061040085013590610420860190602001611ef2565b60408051601f19818403018152919052805160209091012060608401351460366115e6565b610520820135610180830135146102e45760006102e7565b60015b610500830135610160840135146102ff576000610302565b60015b6104e08401356101408501351461031a57600061031d565b60015b6104c085013561012086013514610335576000610338565b60015b6104a086013561010087013514610350576000610353565b60015b61048087013560e08801351461036a57600061036d565b60015b61046088013560c089013514610384576000610387565b60015b61044089013560a08a01351461039e5760006103a1565b60015b6104208a013560808b0135146103b85760006103bb565b60015b6103c5919061211f565b6103cf919061211f565b6103d9919061211f565b6103e3919061211f565b6103ed919061211f565b6103f7919061211f565b610401919061211f565b61040b919061211f565b81526103c08201356102a083013514610425576000610428565b60015b6103a083013561028084013514610440576000610443565b60015b6103808401356102608501351461045b57600061045e565b60015b61036085013561024086013514610476576000610479565b60015b61034086013561022087013514610491576000610494565b60015b610320870135610200880135146104ac5760006104af565b60015b6103008801356101e0890135146104c75760006104ca565b60015b6102e08901356101c08a0135146104e25760006104e5565b60015b6102c08a01356101a08b0135146104fd576000610500565b60015b61050a919061211f565b610514919061211f565b61051e919061211f565b610528919061211f565b610532919061211f565b61053c919061211f565b610546919061211f565b610550919061211f565b602082015261055d6117a0565b61056a6020840184611972565b81516001600160a01b03909116905280516020808501359101526105946060840160408501611972565b81516001600160a01b0390911660409091015260208201518251116105cd5760208201518251106105c65760016105d0565b60006105d0565b60025b6020808301805192909252815143910152516103e08401356040909101526105f78161160b565b505050565b61064e600061060e6020840184611994565b60405160200161062a9291909182521515602082015260400190565b6040516020818303038152906040528051906020012060001c6000541460086115e6565b600080805560408051602081018252918252517f120854c39fdbc847613c8c1a66d23aa6d099c4db8f64d852475191e60a6298d99061068e908490611eaa565b60405180910390a16106a73460208401351460076115e6565b6106b2600a4361211f565b81526040805160608082018352600082840190815233835260208681013581850190815286518352855160019281019290925284516001600160a01b0316958201959095529351918401919091525160808301529060a0015b60408051601f198184030181529190528051602090910120600055505050565b60405161076790610743906001908490602001611f37565b6040516020818303038152906040528051906020012060001c60005414600a6115e6565b6000805561077c60408201354310600b6115e6565b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516107ab9190611ecb565b60405180910390a16107c43460208301351460096115e6565b6107cc6117a0565b6107d96020830183611972565b81516001600160a01b03909116905280516020808401359181018290528251336040909101528083018051600190525143910152610817908061211f565b6020820151604001526108298161160b565b5050565b60405161086990610845906008908490602001611f0e565b6040516020818303038152906040528051906020012060001c60005414601e6115e6565b6000805561087f6080820135431015601f6115e6565b7fe30737f1ebfc963c65c5913e78ab44df878e431e05d360e374cda18b462b262b816040516108ae9190611d9e565b60405180910390a16108c23415601c6115e6565b6108e4336108d36020840184611972565b6001600160a01b031614601d6115e6565b6108f16020820182611972565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f1935050505015801561092c573d6000803e3d6000fd5b506000805533ff5b6040516109709061094c90600e908490602001611fd7565b6040516020818303038152906040528051906020012060001c6000541460336115e6565b600080556040517f6d4bb450ad49204e43e5c0b2d68e801e747cd15aa7e9fc7c480f9cc7c1ceb976906109a4908390611e63565b60405180910390a16109b8341560306115e6565b6109da336109c96020840184611972565b6001600160a01b03161460316115e6565b604051610a1f906109fa9061030084013590610320850190602001611ef2565b60408051601f19818403018152919052805160209091012060608301351460326115e6565b610a276117f2565b610a346020830183611972565b6001600160a01b0316815260208083013590820152610a596060830160408401611972565b6001600160a01b03166040808301919091526080830135606083015280516101208181019092529060a084019060099083908390808284376000920191909152505050608082015260408051610120818101909252906101c08401906009908390839080828437600092019190915250505060a082015260408051610120818101909252906103208401906009908390839080828437600092019190915250505060c08201526102e082013560e0820152604051610b1e90600f908390602001612081565b60408051601f1981840301815291905280516020909101206000555050565b604051610b7990610b5590600a908490602001611f22565b6040516020818303038152906040528051906020012060001c6000541460226115e6565b60008080556040805160208101909152908152610b9d60a0830135431060236115e6565b7f3e27b2af469b8fb79be0b61a5d1e7608a14f9acedc98e1d5484d151ad183bb1c82604051610bcc9190611dc5565b60405180910390a1610be0341560206115e6565b610c0233610bf16020850185611972565b6001600160a01b03161460216115e6565b610c0d600a4361211f565b8152610c1761185b565b610c246020840184611972565b6001600160a01b0316815260208084013590820152610c496060840160408501611972565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015280516101208181019092529060e08501906009908390839080828437600092019190915250505060a0820152815160c08083019190915283013560e082015260405161070b90600c908390602001611f60565b604051610cfe90610cda90600690849060200161210b565b6040516020818303038152906040528051906020012060001c6000541460126115e6565b60008080556040805160208101909152908152610d226060830135431060136115e6565b7f16424d059cabc243859f670786693b7e657c3f04cbc39631fa14608999bfaef982604051610d519190611d3f565b60405180910390a1610d65341560106115e6565b610d8733610d766020850185611972565b6001600160a01b03161460116115e6565b610d92600a4361211f565b81526040805160c08101825260008082526020808301829052928201819052606082018190526080820181905260a082015290610dd190840184611972565b6001600160a01b0316815260208084013590820152610df66060840160408501611972565b6001600160a01b03908116604083810191825260a086810135606080870191825287516080808901918252808b0135858a01908152865160086020808301919091528b518b1698820198909852968a0151938701939093529551909616948401949094525190820152915160c08301525160e08201526101000161070b565b604051610eb190610e8d906008908490602001611f0e565b6040516020818303038152906040528051906020012060001c60005414601a6115e6565b60008080556040805160208101909152908152610ed560808301354310601b6115e6565b7fa03e2b199cbd4c163bca89aa8e3581bcf82ee511c6ed7b600ee5e8a3e78842b482604051610f049190611d82565b60405180910390a1610f18341560186115e6565b610f3d33610f2c6060850160408601611972565b6001600160a01b03161460196115e6565b610f48600a4361211f565b81526040805160e08101825260008082526020808301829052928201819052606082018190526080820181905260a0820181905260c082015290610f8e90840184611972565b6001600160a01b0316815260208084013590820152610fb36060840160408501611972565b6001600160a01b03908116604083810191825260608681013581860190815260c0808901356080808901918252895160a0808b01918252808d0135858c019081528851600a6020808301919091528d518d169a82019a909a52988c0151978901979097529751909816908601529151948401949094525192820192909252915160e0830152516101008201526101200161070b565b6040516110849061106090600a908490602001611f22565b6040516020818303038152906040528051906020012060001c6000541460266115e6565b6000805561109a60a082013543101560276115e6565b7fe7cd06eed96e73ebf1eef9fa7a8d285d298aa9f119f81a14f729b421ad209bfa816040516110c99190611dea565b60405180910390a16110dd341560246115e6565b611102336110f16060840160408501611972565b6001600160a01b03161460256115e6565b6111126060820160408301611972565b6040516001600160a01b03919091169060c083013580156108fc02916000818181858888f1935050505015801561092c573d6000803e3d6000fd5b6040516111899061116590600690849060200161210b565b6040516020818303038152906040528051906020012060001c6000541460166115e6565b6000805561119f606082013543101560176115e6565b7f5005c4e6004c19e98ada43b5f5d05731c1a82aa5d9215871f88ceb584e0f83e0816040516111ce9190611d5b565b60405180910390a16111e2341560146115e6565b611207336111f66060840160408501611972565b6001600160a01b03161460156115e6565b6112176060820160408301611972565b6040516001600160a01b039190911690608083013580156108fc02916000818181858888f1935050505015801561092c573d6000803e3d6000fd5b60405161128e9061126a90600c908490602001611f4b565b6040516020818303038152906040528051906020012060001c60005414602a6115e6565b600080556112a46101c08201354310602b6115e6565b7f6274e6cd9c8f8fe9e11f6b27e8efa2cd284ff195481caffb23eace88692264e1816040516112d39190611e12565b60405180910390a16112e7341560286115e6565b61130c336112fb6060840160408501611972565b6001600160a01b03161460296115e6565b6113146118b8565b6113216020830183611972565b6001600160a01b03168152602080830135908201526113466060830160408401611972565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015280516101208181019092529060a08401906009908390839080828437600092019190915250505060a082015260408051610120818101909252906102008401906009908390839080828437600092019190915250505060c08201526101e082013560e0820152604051610b1e90600e908390602001611fec565b604051611422906113fe906001908490602001611f37565b6040516020818303038152906040528051906020012060001c60005414600e6115e6565b600080556114386040820135431015600f6115e6565b7fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d85623013816040516114679190611ecb565b60405180910390a161147b3415600c6115e6565b61149d3361148c6020840184611972565b6001600160a01b031614600d6115e6565b6114aa6020820182611972565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f1935050505015801561092c573d6000803e3d6000fd5b604051611521906114fd90600c908490602001611f4b565b6040516020818303038152906040528051906020012060001c60005414602e6115e6565b600080556115386101c0820135431015602f6115e6565b7f0756c2742629731608b2f90c3b8b8cadaaf130c4e3227225a46d514e902ba1c0816040516115679190611e39565b60405180910390a161157b3415602c6115e6565b61159d3361158c6020840184611972565b6001600160a01b031614602d6115e6565b6115aa6020820182611972565b6040516001600160a01b0391909116906101e083013580156108fc02916000818181858888f1935050505015801561092c573d6000803e3d6000fd5b816108295760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516020810190915260008152602082015151600114156116da57600a82602001516020015161163d919061211f565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089019687528b51516001600160a01b039081168a528c5187015186528c518b0151811685528b5183528c8701518b015188528a51600697810197909752895181169a87019a909a529351918501919091529051909616908201529351918401919091525160c08301529060e00161070b565b6040805160c0810182526000818301818152606083018281526080840183815260a085018481528386526020808701959095528851516001600160a01b0390811690945288518501519092528751909501519091169093528401515191829052906105f790829060021461175357805160400151611757565b8051515b6001600160a01b03166108fc82600001516020015160026117789190612137565b6040518115909202916000818181858888f1935050505015801561092c573d6000803e3d6000fd5b6040805160a081018252600091810182815260608201839052608082019290925290819081526020016117ed60405180606001604052806000815260200160008152602001600081525090565b905290565b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016118346118fd565b81526020016118416118fd565b815260200161184e6118fd565b8152602001600081525090565b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016118a46118fd565b815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016118415b6040518061012001604052806009906020820280368337509192915050565b80356001600160a01b038116811461193357600080fd5b919050565b8035801515811461193357600080fd5b600060c0828403121561195a57600080fd5b50919050565b600060e0828403121561195a57600080fd5b60006020828403121561198457600080fd5b61198d8261191c565b9392505050565b6000602082840312156119a657600080fd5b61198d82611938565b600060c082840312156119c157600080fd5b61198d8383611948565b600060e082840312156119dd57600080fd5b61198d8383611960565b6000610200828403121561195a57600080fd5b6000610100828403121561195a57600080fd5b6000610320828403121561195a57600080fd5b6000610220828403121561195a57600080fd5b6000610440828403121561195a57600080fd5b6000610540828403121561195a57600080fd5b60006040828403121561195a57600080fd5b60006080828403121561195a57600080fd5b8060005b6009811015611aa0578151845260209384019390910190600101611a81565b50505050565b6001600160a01b0380611ab88361191c565b1683526020820135602084015280611ad26040840161191c565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b0380611b0d8361191c565b1683526020820135602084015280611b276040840161191c565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b03611b6b8261191c565b16825260208181013590830152604090810135910152565b6001600160a01b0380611b958361191c565b1683526020820135602084015280611baf6040840161191c565b16604084015250606081013560608301526080810135608083015261012060a0820160a08401376101c081810135908301526101e090810135910152565b6001600160a01b0380611bff8361191c565b1683526020820135602084015280611c196040840161191c565b1660408401525060608101356060830152608081013560808301526101208060a0830160a08501376101c0808401600081528282850182375050506102e090810135910152565b6001600160a01b0380611c728361191c565b1683526020820135602084015280611c8c6040840161191c565b1660408401525060608101356060830152610120806080830160808501376101a08084016000815282828501823750506102c0808401600081528282850182375050506103e090810135910152565b8035825261012060208201602084013760006101408301525050565b6001600160a01b0380611d098361191c565b1683526020820135602084015280611d236040840161191c565b1660408401525060608181013590830152608090810135910152565b60c08101611d4d8284611cf7565b60a092830135919092015290565b60c08101611d698284611cf7565b611d7560a08401611938565b151560a083015292915050565b60e08101611d908284611aa6565b60c092830135919092015290565b60e08101611dac8284611aa6565b611db860c08401611938565b151560c083015292915050565b6102008101611dd48284611afb565b61012060e0840160e08401376000815292915050565b6101008101611df98284611afb565b611e0560e08401611938565b151560e083015292915050565b6103208101611e218284611b83565b61020061012081850182850137506000815292915050565b6102208101611e488284611b83565b610200611e56818501611938565b1515818401525092915050565b6104408101611e728284611bed565b610300611e83818401828601611cdb565b5092915050565b6105408101611e998284611c60565b610400611e83818401828601611cdb565b60408101611eb783611938565b151582526020830135602083015292915050565b60808101611ed98284611b5a565b611ee560608401611938565b1515606083015292915050565b8281526101408101610120836020840137600081529392505050565b82815260e0810161198d6020830184611aa6565b828152610100810161198d6020830184611afb565b8281526080810161198d6020830184611b5a565b828152610220810161198d6020830184611b83565b60006102208201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a0830151611fb960c0840182611a7d565b5060c08301516101e083015260e08301516102008301529392505050565b828152610320810161198d6020830184611bed565b60006103208201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a083015161204560c0840182611a7d565b5060c08301516120596101e0840182611a7d565b5060e08301516103008301529392505050565b828152610420810161198d6020830184611c60565b60006104208201905083825260018060a01b0380845116602084015260208401516040840152806040850151166060840152506060830151608083015260808301516120d060a0840182611a7d565b5060a08301516120e46101c0840182611a7d565b5060c08301516120f86102e0840182611a7d565b5060e08301516104008301529392505050565b82815260c0810161198d6020830184611cf7565b6000821982111561213257612132612156565b500190565b600081600019048311821515161561215157612151612156565b500290565b634e487b7160e01b600052601160045260246000fdfea26469706673582212207ac685dab8cf4554bfb16d94e09108e1c566a6a33a49478a31cf7dd7a6d8f2f364736f6c63430008050033`,
  BytecodeLen: 8728,
  Which: `oD`,
  deployMode: `DM_constructor`,
  version: 1,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

