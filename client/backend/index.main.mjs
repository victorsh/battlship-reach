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
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 18));
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
  const v333 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10));
  stdlib.protect(ctc1, await interact.acceptWager(v39), {
    at: './index.rsh:61:25:application',
    fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:13:function exp)'],
    msg: 'acceptWager',
    who: 'attacher'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v38, v39, v333],
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
      const v355 = v50;
      const v361 = v49;
      
      if ((() => {
        const v65 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v65;})()) {
        const v295 = stdlib.add(v355, stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10));
        sim_r.isHalt = false;
        }
      else {
        const v317 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v320 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:146:12:decimal', stdlib.UInt_max, 2), v39);
        const v322 = v317 ? v38 : v47;
        sim_r.txns.push({
          amt: v320,
          kind: 'from',
          to: v322,
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
    timeoutAt: ['time', v333],
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
    const v339 = txn3.time;
    const v340 = txn3.secs;
    const v336 = txn3.from;
    ;
    const v338 = stdlib.addressEq(v38, v336);
    stdlib.assert(v338, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:63:47:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'attacher'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:50:29:application',
      fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:21:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:48:28:function exp)', 'at ./index.rsh:63:47:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    let v355 = v50;
    let v361 = v49;
    
    while ((() => {
      const v65 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v65;})()) {
      const v295 = stdlib.add(v355, stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10));
      const txn3 = await (ctc.recv({
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc2],
        timeoutAt: ['time', v295],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v38, v39, v47, v295, v361],
          evt_cnt: 0,
          funcNum: 7,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const [] = txn4.data;
            const v301 = txn4.time;
            const v302 = txn4.secs;
            const v298 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v300 = stdlib.addressEq(v47, v298);
            stdlib.assert(v300, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:75:55:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'attacher'
              });
            sim_r.txns.push({
              amt: v361,
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
        const v301 = txn4.time;
        const v302 = txn4.secs;
        const v298 = txn4.from;
        ;
        const v300 = stdlib.addressEq(v47, v298);
        stdlib.assert(v300, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:75:55:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'attacher'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:50:29:application',
          fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:21:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:48:28:function exp)', 'at ./index.rsh:75:55:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
          at: './index.rsh:75:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'attacher'
          });
        const v269 = stdlib.add(v79, stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10));
        const v84 = stdlib.protect(ctc3, await interact.setShips(), {
          at: './index.rsh:80:40:application',
          fs: ['at ./index.rsh:79:11:application call to [unknown function] (defined at: ./index.rsh:79:15:function exp)'],
          msg: 'setShips',
          who: 'attacher'
          });
        const v86 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:60:31:application',
          fs: ['at ./index.rsh:81:48:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:79:11:application call to [unknown function] (defined at: ./index.rsh:79:15:function exp)'],
          msg: 'random',
          who: 'attacher'
          });
        const v87 = stdlib.digest(ctc4, [v86, v84]);
        
        const txn4 = await (ctc.sendrecv({
          args: [v38, v39, v47, v76, v269, v361, v87],
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
              at: './index.rsh:84:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'attacher'
              });
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v269],
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
          const v275 = txn5.time;
          const v276 = txn5.secs;
          const v272 = txn5.from;
          ;
          const v274 = stdlib.addressEq(v38, v272);
          stdlib.assert(v274, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:84:55:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'attacher'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:50:29:application',
            fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:21:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:48:28:function exp)', 'at ./index.rsh:84:55:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
            at: './index.rsh:84:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          const txn5 = await (ctc.recv({
            evt_cnt: 2,
            funcNum: 10,
            out_tys: [ctc0, ctc3],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const [v99, v100] = txn5.data;
          const v103 = txn5.time;
          const v104 = txn5.secs;
          const v98 = txn5.from;
          ;
          const v102 = stdlib.addressEq(v38, v98);
          stdlib.assert(v102, {
            at: './index.rsh:93:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          const v106 = stdlib.digest(ctc4, [v99, v100]);
          const v107 = stdlib.digestEq(v76, v106);
          stdlib.assert(v107, {
            at: 'reach standard library:65:17:application',
            fs: ['at ./index.rsh:94:20:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
            msg: null,
            who: 'attacher'
            });
          const txn6 = await (ctc.sendrecv({
            args: [v38, v39, v47, v90, v100, v361, v86, v84],
            evt_cnt: 2,
            funcNum: 11,
            onlyIf: true,
            out_tys: [ctc0, ctc3],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const [v113, v114] = txn6.data;
              const v117 = txn6.time;
              const v118 = txn6.secs;
              const v112 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v116 = stdlib.addressEq(v47, v112);
              stdlib.assert(v116, {
                at: './index.rsh:100:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v120 = stdlib.digest(ctc4, [v113, v114]);
              const v121 = stdlib.digestEq(v90, v120);
              stdlib.assert(v121, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:101:20:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              const v123 = v114[stdlib.checkedBigNumberify('./index.rsh:105:32:array ref', stdlib.UInt_max, 0)];
              const v124 = v100[stdlib.checkedBigNumberify('./index.rsh:105:43:array ref', stdlib.UInt_max, 9)];
              const v126 = stdlib.eq(v123, v124);
              const v128 = v126 ? stdlib.checkedBigNumberify('./index.rsh:105:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:105:54:decimal', stdlib.UInt_max, 0);
              const v129 = v100[stdlib.checkedBigNumberify('./index.rsh:106:32:array ref', stdlib.UInt_max, 0)];
              const v130 = v114[stdlib.checkedBigNumberify('./index.rsh:106:43:array ref', stdlib.UInt_max, 9)];
              const v132 = stdlib.eq(v129, v130);
              const v134 = v132 ? stdlib.checkedBigNumberify('./index.rsh:106:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:106:54:decimal', stdlib.UInt_max, 0);
              const v135 = v114[stdlib.checkedBigNumberify('./index.rsh:107:32:array ref', stdlib.UInt_max, 1)];
              const v136 = v100[stdlib.checkedBigNumberify('./index.rsh:107:43:array ref', stdlib.UInt_max, 10)];
              const v138 = stdlib.eq(v135, v136);
              const v140 = v138 ? stdlib.checkedBigNumberify('./index.rsh:107:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:107:55:decimal', stdlib.UInt_max, 0);
              const v141 = v100[stdlib.checkedBigNumberify('./index.rsh:108:32:array ref', stdlib.UInt_max, 1)];
              const v142 = v114[stdlib.checkedBigNumberify('./index.rsh:108:43:array ref', stdlib.UInt_max, 10)];
              const v144 = stdlib.eq(v141, v142);
              const v146 = v144 ? stdlib.checkedBigNumberify('./index.rsh:108:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:108:55:decimal', stdlib.UInt_max, 0);
              const v147 = v114[stdlib.checkedBigNumberify('./index.rsh:109:32:array ref', stdlib.UInt_max, 2)];
              const v148 = v100[stdlib.checkedBigNumberify('./index.rsh:109:43:array ref', stdlib.UInt_max, 11)];
              const v150 = stdlib.eq(v147, v148);
              const v152 = v150 ? stdlib.checkedBigNumberify('./index.rsh:109:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:109:55:decimal', stdlib.UInt_max, 0);
              const v153 = v100[stdlib.checkedBigNumberify('./index.rsh:110:32:array ref', stdlib.UInt_max, 2)];
              const v154 = v114[stdlib.checkedBigNumberify('./index.rsh:110:43:array ref', stdlib.UInt_max, 11)];
              const v156 = stdlib.eq(v153, v154);
              const v158 = v156 ? stdlib.checkedBigNumberify('./index.rsh:110:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:110:55:decimal', stdlib.UInt_max, 0);
              const v159 = v114[stdlib.checkedBigNumberify('./index.rsh:111:32:array ref', stdlib.UInt_max, 3)];
              const v160 = v100[stdlib.checkedBigNumberify('./index.rsh:111:43:array ref', stdlib.UInt_max, 12)];
              const v162 = stdlib.eq(v159, v160);
              const v164 = v162 ? stdlib.checkedBigNumberify('./index.rsh:111:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:111:55:decimal', stdlib.UInt_max, 0);
              const v165 = v100[stdlib.checkedBigNumberify('./index.rsh:112:32:array ref', stdlib.UInt_max, 3)];
              const v166 = v114[stdlib.checkedBigNumberify('./index.rsh:112:43:array ref', stdlib.UInt_max, 12)];
              const v168 = stdlib.eq(v165, v166);
              const v170 = v168 ? stdlib.checkedBigNumberify('./index.rsh:112:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:112:55:decimal', stdlib.UInt_max, 0);
              const v171 = v114[stdlib.checkedBigNumberify('./index.rsh:113:32:array ref', stdlib.UInt_max, 4)];
              const v172 = v100[stdlib.checkedBigNumberify('./index.rsh:113:43:array ref', stdlib.UInt_max, 13)];
              const v174 = stdlib.eq(v171, v172);
              const v176 = v174 ? stdlib.checkedBigNumberify('./index.rsh:113:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:113:55:decimal', stdlib.UInt_max, 0);
              const v177 = v100[stdlib.checkedBigNumberify('./index.rsh:114:32:array ref', stdlib.UInt_max, 4)];
              const v178 = v114[stdlib.checkedBigNumberify('./index.rsh:114:43:array ref', stdlib.UInt_max, 13)];
              const v180 = stdlib.eq(v177, v178);
              const v182 = v180 ? stdlib.checkedBigNumberify('./index.rsh:114:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:114:55:decimal', stdlib.UInt_max, 0);
              const v183 = v114[stdlib.checkedBigNumberify('./index.rsh:115:32:array ref', stdlib.UInt_max, 5)];
              const v184 = v100[stdlib.checkedBigNumberify('./index.rsh:115:43:array ref', stdlib.UInt_max, 14)];
              const v186 = stdlib.eq(v183, v184);
              const v188 = v186 ? stdlib.checkedBigNumberify('./index.rsh:115:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:115:55:decimal', stdlib.UInt_max, 0);
              const v189 = v100[stdlib.checkedBigNumberify('./index.rsh:116:32:array ref', stdlib.UInt_max, 5)];
              const v190 = v114[stdlib.checkedBigNumberify('./index.rsh:116:43:array ref', stdlib.UInt_max, 14)];
              const v192 = stdlib.eq(v189, v190);
              const v194 = v192 ? stdlib.checkedBigNumberify('./index.rsh:116:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:116:55:decimal', stdlib.UInt_max, 0);
              const v195 = v114[stdlib.checkedBigNumberify('./index.rsh:117:32:array ref', stdlib.UInt_max, 6)];
              const v196 = v100[stdlib.checkedBigNumberify('./index.rsh:117:43:array ref', stdlib.UInt_max, 15)];
              const v198 = stdlib.eq(v195, v196);
              const v200 = v198 ? stdlib.checkedBigNumberify('./index.rsh:117:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:117:55:decimal', stdlib.UInt_max, 0);
              const v201 = v100[stdlib.checkedBigNumberify('./index.rsh:118:32:array ref', stdlib.UInt_max, 6)];
              const v202 = v114[stdlib.checkedBigNumberify('./index.rsh:118:43:array ref', stdlib.UInt_max, 15)];
              const v204 = stdlib.eq(v201, v202);
              const v206 = v204 ? stdlib.checkedBigNumberify('./index.rsh:118:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:118:55:decimal', stdlib.UInt_max, 0);
              const v207 = v114[stdlib.checkedBigNumberify('./index.rsh:119:32:array ref', stdlib.UInt_max, 7)];
              const v208 = v100[stdlib.checkedBigNumberify('./index.rsh:119:43:array ref', stdlib.UInt_max, 16)];
              const v210 = stdlib.eq(v207, v208);
              const v212 = v210 ? stdlib.checkedBigNumberify('./index.rsh:119:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:119:55:decimal', stdlib.UInt_max, 0);
              const v213 = v100[stdlib.checkedBigNumberify('./index.rsh:120:32:array ref', stdlib.UInt_max, 7)];
              const v214 = v114[stdlib.checkedBigNumberify('./index.rsh:120:43:array ref', stdlib.UInt_max, 16)];
              const v216 = stdlib.eq(v213, v214);
              const v218 = v216 ? stdlib.checkedBigNumberify('./index.rsh:120:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:120:55:decimal', stdlib.UInt_max, 0);
              const v219 = v114[stdlib.checkedBigNumberify('./index.rsh:121:32:array ref', stdlib.UInt_max, 8)];
              const v220 = v100[stdlib.checkedBigNumberify('./index.rsh:121:43:array ref', stdlib.UInt_max, 17)];
              const v222 = stdlib.eq(v219, v220);
              const v224 = v222 ? stdlib.checkedBigNumberify('./index.rsh:121:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:121:55:decimal', stdlib.UInt_max, 0);
              const v225 = v100[stdlib.checkedBigNumberify('./index.rsh:122:32:array ref', stdlib.UInt_max, 8)];
              const v226 = v114[stdlib.checkedBigNumberify('./index.rsh:122:43:array ref', stdlib.UInt_max, 17)];
              const v228 = stdlib.eq(v225, v226);
              const v230 = v228 ? stdlib.checkedBigNumberify('./index.rsh:122:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:122:55:decimal', stdlib.UInt_max, 0);
              const v231 = stdlib.add(v128, v140);
              const v232 = stdlib.add(v231, v152);
              const v233 = stdlib.add(v232, v164);
              const v234 = stdlib.add(v233, v176);
              const v235 = stdlib.add(v234, v188);
              const v236 = stdlib.add(v235, v200);
              const v237 = stdlib.add(v236, v212);
              const v238 = stdlib.add(v237, v224);
              const v239 = stdlib.add(v134, v146);
              const v240 = stdlib.add(v239, v158);
              const v241 = stdlib.add(v240, v170);
              const v242 = stdlib.add(v241, v182);
              const v243 = stdlib.add(v242, v194);
              const v244 = stdlib.add(v243, v206);
              const v245 = stdlib.add(v244, v218);
              const v246 = stdlib.add(v245, v230);
              const v248 = stdlib.gt(v238, v246);
              const v249 = stdlib.lt(v238, v246);
              const v250 = v249 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
              const v251 = v248 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2) : v250;
              
              
              const cv52 = v251;
              const cv355 = v117;
              const cv361 = v361;
              
              (() => {
                const v52 = cv52;
                const v355 = cv355;
                const v361 = cv361;
                
                if ((() => {
                  const v65 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                  
                  return v65;})()) {
                  const v295 = stdlib.add(v355, stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10));
                  sim_r.isHalt = false;
                  }
                else {
                  const v317 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                  const v320 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:146:12:decimal', stdlib.UInt_max, 2), v39);
                  const v322 = v317 ? v38 : v47;
                  sim_r.txns.push({
                    amt: v320,
                    kind: 'from',
                    to: v322,
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
            tys: [ctc5, ctc0, ctc5, ctc2, ctc3, ctc0, ctc0, ctc3],
            waitIfNotPresent: false
            }));
          const [v113, v114] = txn6.data;
          const v117 = txn6.time;
          const v118 = txn6.secs;
          const v112 = txn6.from;
          ;
          const v116 = stdlib.addressEq(v47, v112);
          stdlib.assert(v116, {
            at: './index.rsh:100:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          const v120 = stdlib.digest(ctc4, [v113, v114]);
          const v121 = stdlib.digestEq(v90, v120);
          stdlib.assert(v121, {
            at: 'reach standard library:65:17:application',
            fs: ['at ./index.rsh:101:20:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
            msg: null,
            who: 'attacher'
            });
          const v123 = v114[stdlib.checkedBigNumberify('./index.rsh:105:32:array ref', stdlib.UInt_max, 0)];
          const v124 = v100[stdlib.checkedBigNumberify('./index.rsh:105:43:array ref', stdlib.UInt_max, 9)];
          const v126 = stdlib.eq(v123, v124);
          const v128 = v126 ? stdlib.checkedBigNumberify('./index.rsh:105:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:105:54:decimal', stdlib.UInt_max, 0);
          const v129 = v100[stdlib.checkedBigNumberify('./index.rsh:106:32:array ref', stdlib.UInt_max, 0)];
          const v130 = v114[stdlib.checkedBigNumberify('./index.rsh:106:43:array ref', stdlib.UInt_max, 9)];
          const v132 = stdlib.eq(v129, v130);
          const v134 = v132 ? stdlib.checkedBigNumberify('./index.rsh:106:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:106:54:decimal', stdlib.UInt_max, 0);
          const v135 = v114[stdlib.checkedBigNumberify('./index.rsh:107:32:array ref', stdlib.UInt_max, 1)];
          const v136 = v100[stdlib.checkedBigNumberify('./index.rsh:107:43:array ref', stdlib.UInt_max, 10)];
          const v138 = stdlib.eq(v135, v136);
          const v140 = v138 ? stdlib.checkedBigNumberify('./index.rsh:107:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:107:55:decimal', stdlib.UInt_max, 0);
          const v141 = v100[stdlib.checkedBigNumberify('./index.rsh:108:32:array ref', stdlib.UInt_max, 1)];
          const v142 = v114[stdlib.checkedBigNumberify('./index.rsh:108:43:array ref', stdlib.UInt_max, 10)];
          const v144 = stdlib.eq(v141, v142);
          const v146 = v144 ? stdlib.checkedBigNumberify('./index.rsh:108:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:108:55:decimal', stdlib.UInt_max, 0);
          const v147 = v114[stdlib.checkedBigNumberify('./index.rsh:109:32:array ref', stdlib.UInt_max, 2)];
          const v148 = v100[stdlib.checkedBigNumberify('./index.rsh:109:43:array ref', stdlib.UInt_max, 11)];
          const v150 = stdlib.eq(v147, v148);
          const v152 = v150 ? stdlib.checkedBigNumberify('./index.rsh:109:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:109:55:decimal', stdlib.UInt_max, 0);
          const v153 = v100[stdlib.checkedBigNumberify('./index.rsh:110:32:array ref', stdlib.UInt_max, 2)];
          const v154 = v114[stdlib.checkedBigNumberify('./index.rsh:110:43:array ref', stdlib.UInt_max, 11)];
          const v156 = stdlib.eq(v153, v154);
          const v158 = v156 ? stdlib.checkedBigNumberify('./index.rsh:110:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:110:55:decimal', stdlib.UInt_max, 0);
          const v159 = v114[stdlib.checkedBigNumberify('./index.rsh:111:32:array ref', stdlib.UInt_max, 3)];
          const v160 = v100[stdlib.checkedBigNumberify('./index.rsh:111:43:array ref', stdlib.UInt_max, 12)];
          const v162 = stdlib.eq(v159, v160);
          const v164 = v162 ? stdlib.checkedBigNumberify('./index.rsh:111:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:111:55:decimal', stdlib.UInt_max, 0);
          const v165 = v100[stdlib.checkedBigNumberify('./index.rsh:112:32:array ref', stdlib.UInt_max, 3)];
          const v166 = v114[stdlib.checkedBigNumberify('./index.rsh:112:43:array ref', stdlib.UInt_max, 12)];
          const v168 = stdlib.eq(v165, v166);
          const v170 = v168 ? stdlib.checkedBigNumberify('./index.rsh:112:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:112:55:decimal', stdlib.UInt_max, 0);
          const v171 = v114[stdlib.checkedBigNumberify('./index.rsh:113:32:array ref', stdlib.UInt_max, 4)];
          const v172 = v100[stdlib.checkedBigNumberify('./index.rsh:113:43:array ref', stdlib.UInt_max, 13)];
          const v174 = stdlib.eq(v171, v172);
          const v176 = v174 ? stdlib.checkedBigNumberify('./index.rsh:113:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:113:55:decimal', stdlib.UInt_max, 0);
          const v177 = v100[stdlib.checkedBigNumberify('./index.rsh:114:32:array ref', stdlib.UInt_max, 4)];
          const v178 = v114[stdlib.checkedBigNumberify('./index.rsh:114:43:array ref', stdlib.UInt_max, 13)];
          const v180 = stdlib.eq(v177, v178);
          const v182 = v180 ? stdlib.checkedBigNumberify('./index.rsh:114:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:114:55:decimal', stdlib.UInt_max, 0);
          const v183 = v114[stdlib.checkedBigNumberify('./index.rsh:115:32:array ref', stdlib.UInt_max, 5)];
          const v184 = v100[stdlib.checkedBigNumberify('./index.rsh:115:43:array ref', stdlib.UInt_max, 14)];
          const v186 = stdlib.eq(v183, v184);
          const v188 = v186 ? stdlib.checkedBigNumberify('./index.rsh:115:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:115:55:decimal', stdlib.UInt_max, 0);
          const v189 = v100[stdlib.checkedBigNumberify('./index.rsh:116:32:array ref', stdlib.UInt_max, 5)];
          const v190 = v114[stdlib.checkedBigNumberify('./index.rsh:116:43:array ref', stdlib.UInt_max, 14)];
          const v192 = stdlib.eq(v189, v190);
          const v194 = v192 ? stdlib.checkedBigNumberify('./index.rsh:116:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:116:55:decimal', stdlib.UInt_max, 0);
          const v195 = v114[stdlib.checkedBigNumberify('./index.rsh:117:32:array ref', stdlib.UInt_max, 6)];
          const v196 = v100[stdlib.checkedBigNumberify('./index.rsh:117:43:array ref', stdlib.UInt_max, 15)];
          const v198 = stdlib.eq(v195, v196);
          const v200 = v198 ? stdlib.checkedBigNumberify('./index.rsh:117:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:117:55:decimal', stdlib.UInt_max, 0);
          const v201 = v100[stdlib.checkedBigNumberify('./index.rsh:118:32:array ref', stdlib.UInt_max, 6)];
          const v202 = v114[stdlib.checkedBigNumberify('./index.rsh:118:43:array ref', stdlib.UInt_max, 15)];
          const v204 = stdlib.eq(v201, v202);
          const v206 = v204 ? stdlib.checkedBigNumberify('./index.rsh:118:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:118:55:decimal', stdlib.UInt_max, 0);
          const v207 = v114[stdlib.checkedBigNumberify('./index.rsh:119:32:array ref', stdlib.UInt_max, 7)];
          const v208 = v100[stdlib.checkedBigNumberify('./index.rsh:119:43:array ref', stdlib.UInt_max, 16)];
          const v210 = stdlib.eq(v207, v208);
          const v212 = v210 ? stdlib.checkedBigNumberify('./index.rsh:119:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:119:55:decimal', stdlib.UInt_max, 0);
          const v213 = v100[stdlib.checkedBigNumberify('./index.rsh:120:32:array ref', stdlib.UInt_max, 7)];
          const v214 = v114[stdlib.checkedBigNumberify('./index.rsh:120:43:array ref', stdlib.UInt_max, 16)];
          const v216 = stdlib.eq(v213, v214);
          const v218 = v216 ? stdlib.checkedBigNumberify('./index.rsh:120:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:120:55:decimal', stdlib.UInt_max, 0);
          const v219 = v114[stdlib.checkedBigNumberify('./index.rsh:121:32:array ref', stdlib.UInt_max, 8)];
          const v220 = v100[stdlib.checkedBigNumberify('./index.rsh:121:43:array ref', stdlib.UInt_max, 17)];
          const v222 = stdlib.eq(v219, v220);
          const v224 = v222 ? stdlib.checkedBigNumberify('./index.rsh:121:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:121:55:decimal', stdlib.UInt_max, 0);
          const v225 = v100[stdlib.checkedBigNumberify('./index.rsh:122:32:array ref', stdlib.UInt_max, 8)];
          const v226 = v114[stdlib.checkedBigNumberify('./index.rsh:122:43:array ref', stdlib.UInt_max, 17)];
          const v228 = stdlib.eq(v225, v226);
          const v230 = v228 ? stdlib.checkedBigNumberify('./index.rsh:122:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:122:55:decimal', stdlib.UInt_max, 0);
          const v231 = stdlib.add(v128, v140);
          const v232 = stdlib.add(v231, v152);
          const v233 = stdlib.add(v232, v164);
          const v234 = stdlib.add(v233, v176);
          const v235 = stdlib.add(v234, v188);
          const v236 = stdlib.add(v235, v200);
          const v237 = stdlib.add(v236, v212);
          const v238 = stdlib.add(v237, v224);
          const v239 = stdlib.add(v134, v146);
          const v240 = stdlib.add(v239, v158);
          const v241 = stdlib.add(v240, v170);
          const v242 = stdlib.add(v241, v182);
          const v243 = stdlib.add(v242, v194);
          const v244 = stdlib.add(v243, v206);
          const v245 = stdlib.add(v244, v218);
          const v246 = stdlib.add(v245, v230);
          const v248 = stdlib.gt(v238, v246);
          const v249 = stdlib.lt(v238, v246);
          const v250 = v249 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          const v251 = v248 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2) : v250;
          stdlib.protect(ctc1, await interact.getShips(v114), {
            at: './index.rsh:133:24:application',
            fs: ['at ./index.rsh:132:11:application call to [unknown function] (defined at: ./index.rsh:132:15:function exp)'],
            msg: 'getShips',
            who: 'attacher'
            });
          
          stdlib.protect(ctc1, await interact.seeOutcome(v251), {
            at: './index.rsh:137:26:application',
            fs: ['at ./index.rsh:136:9:application call to [unknown function] (defined at: ./index.rsh:136:21:function exp)'],
            msg: 'seeOutcome',
            who: 'attacher'
            });
          
          const cv52 = v251;
          const cv355 = v117;
          const cv361 = v361;
          
          v52 = cv52;
          v355 = cv355;
          v361 = cv361;
          
          continue;
          
          }
        }
      }
    const v317 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v320 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:146:12:decimal', stdlib.UInt_max, 2), v39);
    const v322 = v317 ? v38 : v47;
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
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 18));
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
      const v333 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10));
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
  const v333 = stdlib.add(v42, stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10));
  const txn2 = await (ctc.recv({
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: ['time', v333],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v38, v39, v333],
      evt_cnt: 0,
      funcNum: 3,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [] = txn3.data;
        const v339 = txn3.time;
        const v340 = txn3.secs;
        const v336 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v338 = stdlib.addressEq(v38, v336);
        stdlib.assert(v338, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:63:47:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    const v339 = txn3.time;
    const v340 = txn3.secs;
    const v336 = txn3.from;
    ;
    const v338 = stdlib.addressEq(v38, v336);
    stdlib.assert(v338, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:63:47:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'deployer'
      });
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:50:29:application',
      fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:21:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:48:28:function exp)', 'at ./index.rsh:63:47:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
    let v355 = v50;
    let v361 = v49;
    
    while ((() => {
      const v65 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v65;})()) {
      const v295 = stdlib.add(v355, stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10));
      const v70 = stdlib.protect(ctc1, await interact.setShips(), {
        at: './index.rsh:71:40:application',
        fs: ['at ./index.rsh:70:11:application call to [unknown function] (defined at: ./index.rsh:70:15:function exp)'],
        msg: 'setShips',
        who: 'deployer'
        });
      const v72 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:72:48:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:70:11:application call to [unknown function] (defined at: ./index.rsh:70:15:function exp)'],
        msg: 'random',
        who: 'deployer'
        });
      const v73 = stdlib.digest(ctc2, [v72, v70]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v38, v39, v47, v295, v361, v73],
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
            at: './index.rsh:75:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const v269 = stdlib.add(v79, stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v295],
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
        const v301 = txn4.time;
        const v302 = txn4.secs;
        const v298 = txn4.from;
        ;
        const v300 = stdlib.addressEq(v47, v298);
        stdlib.assert(v300, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:75:55:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'deployer'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeout(), {
          at: './index.rsh:50:29:application',
          fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:21:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:48:28:function exp)', 'at ./index.rsh:75:55:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
          at: './index.rsh:75:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'deployer'
          });
        const v269 = stdlib.add(v79, stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10));
        const txn4 = await (ctc.recv({
          evt_cnt: 1,
          funcNum: 8,
          out_tys: [ctc3],
          timeoutAt: ['time', v269],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v38, v39, v47, v76, v269, v361],
            evt_cnt: 0,
            funcNum: 9,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const [] = txn5.data;
              const v275 = txn5.time;
              const v276 = txn5.secs;
              const v272 = txn5.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v274 = stdlib.addressEq(v38, v272);
              stdlib.assert(v274, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:84:55:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'deployer'
                });
              sim_r.txns.push({
                amt: v361,
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
          const v275 = txn5.time;
          const v276 = txn5.secs;
          const v272 = txn5.from;
          ;
          const v274 = stdlib.addressEq(v38, v272);
          stdlib.assert(v274, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:84:55:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'deployer'
            });
          ;
          stdlib.protect(ctc4, await interact.informTimeout(), {
            at: './index.rsh:50:29:application',
            fs: ['at ./index.rsh:49:9:application call to [unknown function] (defined at: ./index.rsh:49:21:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:48:28:function exp)', 'at ./index.rsh:84:55:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
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
            at: './index.rsh:84:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const txn5 = await (ctc.sendrecv({
            args: [v38, v39, v47, v76, v90, v361, v72, v70],
            evt_cnt: 2,
            funcNum: 10,
            onlyIf: true,
            out_tys: [ctc0, ctc1],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const [v99, v100] = txn5.data;
              const v103 = txn5.time;
              const v104 = txn5.secs;
              const v98 = txn5.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v102 = stdlib.addressEq(v38, v98);
              stdlib.assert(v102, {
                at: './index.rsh:93:7:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v106 = stdlib.digest(ctc2, [v99, v100]);
              const v107 = stdlib.digestEq(v76, v106);
              stdlib.assert(v107, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:94:20:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'deployer'
                });
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined,
            tys: [ctc5, ctc0, ctc5, ctc3, ctc3, ctc0, ctc0, ctc1],
            waitIfNotPresent: false
            }));
          const [v99, v100] = txn5.data;
          const v103 = txn5.time;
          const v104 = txn5.secs;
          const v98 = txn5.from;
          ;
          const v102 = stdlib.addressEq(v38, v98);
          stdlib.assert(v102, {
            at: './index.rsh:93:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const v106 = stdlib.digest(ctc2, [v99, v100]);
          const v107 = stdlib.digestEq(v76, v106);
          stdlib.assert(v107, {
            at: 'reach standard library:65:17:application',
            fs: ['at ./index.rsh:94:20:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
            msg: null,
            who: 'deployer'
            });
          const txn6 = await (ctc.recv({
            evt_cnt: 2,
            funcNum: 11,
            out_tys: [ctc0, ctc1],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const [v113, v114] = txn6.data;
          const v117 = txn6.time;
          const v118 = txn6.secs;
          const v112 = txn6.from;
          ;
          const v116 = stdlib.addressEq(v47, v112);
          stdlib.assert(v116, {
            at: './index.rsh:100:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const v120 = stdlib.digest(ctc2, [v113, v114]);
          const v121 = stdlib.digestEq(v90, v120);
          stdlib.assert(v121, {
            at: 'reach standard library:65:17:application',
            fs: ['at ./index.rsh:101:20:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
            msg: null,
            who: 'deployer'
            });
          const v123 = v114[stdlib.checkedBigNumberify('./index.rsh:105:32:array ref', stdlib.UInt_max, 0)];
          const v124 = v100[stdlib.checkedBigNumberify('./index.rsh:105:43:array ref', stdlib.UInt_max, 9)];
          const v126 = stdlib.eq(v123, v124);
          const v128 = v126 ? stdlib.checkedBigNumberify('./index.rsh:105:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:105:54:decimal', stdlib.UInt_max, 0);
          const v129 = v100[stdlib.checkedBigNumberify('./index.rsh:106:32:array ref', stdlib.UInt_max, 0)];
          const v130 = v114[stdlib.checkedBigNumberify('./index.rsh:106:43:array ref', stdlib.UInt_max, 9)];
          const v132 = stdlib.eq(v129, v130);
          const v134 = v132 ? stdlib.checkedBigNumberify('./index.rsh:106:50:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:106:54:decimal', stdlib.UInt_max, 0);
          const v135 = v114[stdlib.checkedBigNumberify('./index.rsh:107:32:array ref', stdlib.UInt_max, 1)];
          const v136 = v100[stdlib.checkedBigNumberify('./index.rsh:107:43:array ref', stdlib.UInt_max, 10)];
          const v138 = stdlib.eq(v135, v136);
          const v140 = v138 ? stdlib.checkedBigNumberify('./index.rsh:107:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:107:55:decimal', stdlib.UInt_max, 0);
          const v141 = v100[stdlib.checkedBigNumberify('./index.rsh:108:32:array ref', stdlib.UInt_max, 1)];
          const v142 = v114[stdlib.checkedBigNumberify('./index.rsh:108:43:array ref', stdlib.UInt_max, 10)];
          const v144 = stdlib.eq(v141, v142);
          const v146 = v144 ? stdlib.checkedBigNumberify('./index.rsh:108:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:108:55:decimal', stdlib.UInt_max, 0);
          const v147 = v114[stdlib.checkedBigNumberify('./index.rsh:109:32:array ref', stdlib.UInt_max, 2)];
          const v148 = v100[stdlib.checkedBigNumberify('./index.rsh:109:43:array ref', stdlib.UInt_max, 11)];
          const v150 = stdlib.eq(v147, v148);
          const v152 = v150 ? stdlib.checkedBigNumberify('./index.rsh:109:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:109:55:decimal', stdlib.UInt_max, 0);
          const v153 = v100[stdlib.checkedBigNumberify('./index.rsh:110:32:array ref', stdlib.UInt_max, 2)];
          const v154 = v114[stdlib.checkedBigNumberify('./index.rsh:110:43:array ref', stdlib.UInt_max, 11)];
          const v156 = stdlib.eq(v153, v154);
          const v158 = v156 ? stdlib.checkedBigNumberify('./index.rsh:110:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:110:55:decimal', stdlib.UInt_max, 0);
          const v159 = v114[stdlib.checkedBigNumberify('./index.rsh:111:32:array ref', stdlib.UInt_max, 3)];
          const v160 = v100[stdlib.checkedBigNumberify('./index.rsh:111:43:array ref', stdlib.UInt_max, 12)];
          const v162 = stdlib.eq(v159, v160);
          const v164 = v162 ? stdlib.checkedBigNumberify('./index.rsh:111:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:111:55:decimal', stdlib.UInt_max, 0);
          const v165 = v100[stdlib.checkedBigNumberify('./index.rsh:112:32:array ref', stdlib.UInt_max, 3)];
          const v166 = v114[stdlib.checkedBigNumberify('./index.rsh:112:43:array ref', stdlib.UInt_max, 12)];
          const v168 = stdlib.eq(v165, v166);
          const v170 = v168 ? stdlib.checkedBigNumberify('./index.rsh:112:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:112:55:decimal', stdlib.UInt_max, 0);
          const v171 = v114[stdlib.checkedBigNumberify('./index.rsh:113:32:array ref', stdlib.UInt_max, 4)];
          const v172 = v100[stdlib.checkedBigNumberify('./index.rsh:113:43:array ref', stdlib.UInt_max, 13)];
          const v174 = stdlib.eq(v171, v172);
          const v176 = v174 ? stdlib.checkedBigNumberify('./index.rsh:113:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:113:55:decimal', stdlib.UInt_max, 0);
          const v177 = v100[stdlib.checkedBigNumberify('./index.rsh:114:32:array ref', stdlib.UInt_max, 4)];
          const v178 = v114[stdlib.checkedBigNumberify('./index.rsh:114:43:array ref', stdlib.UInt_max, 13)];
          const v180 = stdlib.eq(v177, v178);
          const v182 = v180 ? stdlib.checkedBigNumberify('./index.rsh:114:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:114:55:decimal', stdlib.UInt_max, 0);
          const v183 = v114[stdlib.checkedBigNumberify('./index.rsh:115:32:array ref', stdlib.UInt_max, 5)];
          const v184 = v100[stdlib.checkedBigNumberify('./index.rsh:115:43:array ref', stdlib.UInt_max, 14)];
          const v186 = stdlib.eq(v183, v184);
          const v188 = v186 ? stdlib.checkedBigNumberify('./index.rsh:115:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:115:55:decimal', stdlib.UInt_max, 0);
          const v189 = v100[stdlib.checkedBigNumberify('./index.rsh:116:32:array ref', stdlib.UInt_max, 5)];
          const v190 = v114[stdlib.checkedBigNumberify('./index.rsh:116:43:array ref', stdlib.UInt_max, 14)];
          const v192 = stdlib.eq(v189, v190);
          const v194 = v192 ? stdlib.checkedBigNumberify('./index.rsh:116:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:116:55:decimal', stdlib.UInt_max, 0);
          const v195 = v114[stdlib.checkedBigNumberify('./index.rsh:117:32:array ref', stdlib.UInt_max, 6)];
          const v196 = v100[stdlib.checkedBigNumberify('./index.rsh:117:43:array ref', stdlib.UInt_max, 15)];
          const v198 = stdlib.eq(v195, v196);
          const v200 = v198 ? stdlib.checkedBigNumberify('./index.rsh:117:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:117:55:decimal', stdlib.UInt_max, 0);
          const v201 = v100[stdlib.checkedBigNumberify('./index.rsh:118:32:array ref', stdlib.UInt_max, 6)];
          const v202 = v114[stdlib.checkedBigNumberify('./index.rsh:118:43:array ref', stdlib.UInt_max, 15)];
          const v204 = stdlib.eq(v201, v202);
          const v206 = v204 ? stdlib.checkedBigNumberify('./index.rsh:118:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:118:55:decimal', stdlib.UInt_max, 0);
          const v207 = v114[stdlib.checkedBigNumberify('./index.rsh:119:32:array ref', stdlib.UInt_max, 7)];
          const v208 = v100[stdlib.checkedBigNumberify('./index.rsh:119:43:array ref', stdlib.UInt_max, 16)];
          const v210 = stdlib.eq(v207, v208);
          const v212 = v210 ? stdlib.checkedBigNumberify('./index.rsh:119:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:119:55:decimal', stdlib.UInt_max, 0);
          const v213 = v100[stdlib.checkedBigNumberify('./index.rsh:120:32:array ref', stdlib.UInt_max, 7)];
          const v214 = v114[stdlib.checkedBigNumberify('./index.rsh:120:43:array ref', stdlib.UInt_max, 16)];
          const v216 = stdlib.eq(v213, v214);
          const v218 = v216 ? stdlib.checkedBigNumberify('./index.rsh:120:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:120:55:decimal', stdlib.UInt_max, 0);
          const v219 = v114[stdlib.checkedBigNumberify('./index.rsh:121:32:array ref', stdlib.UInt_max, 8)];
          const v220 = v100[stdlib.checkedBigNumberify('./index.rsh:121:43:array ref', stdlib.UInt_max, 17)];
          const v222 = stdlib.eq(v219, v220);
          const v224 = v222 ? stdlib.checkedBigNumberify('./index.rsh:121:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:121:55:decimal', stdlib.UInt_max, 0);
          const v225 = v100[stdlib.checkedBigNumberify('./index.rsh:122:32:array ref', stdlib.UInt_max, 8)];
          const v226 = v114[stdlib.checkedBigNumberify('./index.rsh:122:43:array ref', stdlib.UInt_max, 17)];
          const v228 = stdlib.eq(v225, v226);
          const v230 = v228 ? stdlib.checkedBigNumberify('./index.rsh:122:51:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:122:55:decimal', stdlib.UInt_max, 0);
          const v231 = stdlib.add(v128, v140);
          const v232 = stdlib.add(v231, v152);
          const v233 = stdlib.add(v232, v164);
          const v234 = stdlib.add(v233, v176);
          const v235 = stdlib.add(v234, v188);
          const v236 = stdlib.add(v235, v200);
          const v237 = stdlib.add(v236, v212);
          const v238 = stdlib.add(v237, v224);
          const v239 = stdlib.add(v134, v146);
          const v240 = stdlib.add(v239, v158);
          const v241 = stdlib.add(v240, v170);
          const v242 = stdlib.add(v241, v182);
          const v243 = stdlib.add(v242, v194);
          const v244 = stdlib.add(v243, v206);
          const v245 = stdlib.add(v244, v218);
          const v246 = stdlib.add(v245, v230);
          const v248 = stdlib.gt(v238, v246);
          const v249 = stdlib.lt(v238, v246);
          const v250 = v249 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          const v251 = v248 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2) : v250;
          stdlib.protect(ctc4, await interact.getShips(v100), {
            at: './index.rsh:130:24:application',
            fs: ['at ./index.rsh:129:11:application call to [unknown function] (defined at: ./index.rsh:129:15:function exp)'],
            msg: 'getShips',
            who: 'deployer'
            });
          
          stdlib.protect(ctc4, await interact.seeOutcome(v251), {
            at: './index.rsh:137:26:application',
            fs: ['at ./index.rsh:136:9:application call to [unknown function] (defined at: ./index.rsh:136:21:function exp)'],
            msg: 'seeOutcome',
            who: 'deployer'
            });
          
          const cv52 = v251;
          const cv355 = v117;
          const cv361 = v361;
          
          v52 = cv52;
          v355 = cv355;
          v361 = cv361;
          
          continue;
          
          }
        }
      }
    const v317 = stdlib.eq(v52, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v320 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:146:12:decimal', stdlib.UInt_max, 2), v39);
    const v322 = v317 ? v38 : v47;
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
// "./index.rsh:57:5:dot"
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
// "./index.rsh:63:5:dot"
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
// "[at ./index.rsh:63:47:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:63:47:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "./index.rsh:75:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:75:7:dot"
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
// "[at ./index.rsh:75:55:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:75:55:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
// "./index.rsh:84:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:84:7:dot"
// "[]"
load 253
txn Sender
==
assert
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
// "[at ./index.rsh:84:55:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:84:55:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
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
int 144
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
pop
txna ApplicationArgs 2
dup
len
int 152
==
assert
dup
substring 0 8
btoi
store 249
dup
substring 8 152
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
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:93:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:93:7:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:94:20:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 252
load 249
itob
load 248
concat
sha256
==
assert
// compute state in HM_Set 11
byte base64(AAAAAAAAAAs=)
load 255
concat
load 254
itob
concat
load 253
concat
load 251
concat
load 248
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
int 256
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
substring 104 248
store 251
dup
int 248
int 256
substring3
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 152
==
assert
dup
substring 0 8
btoi
store 249
dup
substring 8 152
store 248
pop
// compute state in HM_Check 11
byte base64(AAAAAAAAAAs=)
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
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:100:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:100:7:dot"
// "[]"
load 253
txn Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:101:20:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 252
load 249
itob
load 248
concat
sha256
==
assert
int 0
int 1
load 248
substring 0 8
btoi
load 251
substring 72 80
btoi
==
select
int 0
int 1
load 248
substring 8 16
btoi
load 251
substring 80 88
btoi
==
select
+
int 0
int 1
load 248
substring 16 24
btoi
load 251
substring 88 96
btoi
==
select
+
int 0
int 1
load 248
substring 24 32
btoi
load 251
substring 96 104
btoi
==
select
+
int 0
int 1
load 248
substring 32 40
btoi
load 251
substring 104 112
btoi
==
select
+
int 0
int 1
load 248
substring 40 48
btoi
load 251
substring 112 120
btoi
==
select
+
int 0
int 1
load 248
substring 48 56
btoi
load 251
substring 120 128
btoi
==
select
+
int 0
int 1
load 248
substring 56 64
btoi
load 251
substring 128 136
btoi
==
select
+
int 0
int 1
load 248
substring 64 72
btoi
load 251
substring 136 144
btoi
==
select
+
store 247
int 0
int 1
load 251
substring 0 8
btoi
load 248
substring 72 80
btoi
==
select
int 0
int 1
load 251
substring 8 16
btoi
load 248
substring 80 88
btoi
==
select
+
int 0
int 1
load 251
substring 16 24
btoi
load 248
substring 88 96
btoi
==
select
+
int 0
int 1
load 251
substring 24 32
btoi
load 248
substring 96 104
btoi
==
select
+
int 0
int 1
load 251
substring 32 40
btoi
load 248
substring 104 112
btoi
==
select
+
int 0
int 1
load 251
substring 40 48
btoi
load 248
substring 112 120
btoi
==
select
+
int 0
int 1
load 251
substring 48 56
btoi
load 248
substring 120 128
btoi
==
select
+
int 0
int 1
load 251
substring 56 64
btoi
load 248
substring 128 136
btoi
==
select
+
int 0
int 1
load 251
substring 64 72
btoi
load 248
substring 136 144
btoi
==
select
+
store 246
load 255
load 254
itob
concat
load 253
concat
int 1
int 0
load 247
load 246
<
select
int 2
load 247
load 246
>
select
itob
global Round
itob
concat
load 250
itob
concat
b loop4
l18:
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
bz l19
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
l19:
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
bz l20
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
l20:
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
l21:
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
                "name": "v361",
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
                "internalType": "uint256",
                "name": "v99",
                "type": "uint256"
              },
              {
                "internalType": "uint256[18]",
                "name": "v100",
                "type": "uint256[18]"
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
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256[18]",
                "name": "v100",
                "type": "uint256[18]"
              },
              {
                "internalType": "uint256",
                "name": "v361",
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
                "internalType": "uint256",
                "name": "v113",
                "type": "uint256"
              },
              {
                "internalType": "uint256[18]",
                "name": "v114",
                "type": "uint256[18]"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
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
                "name": "v333",
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
                "name": "v333",
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
                "name": "v295",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v361",
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
                "name": "v295",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v361",
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
                "name": "v269",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v361",
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
                "name": "v269",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v361",
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
                "name": "v361",
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
                "internalType": "uint256",
                "name": "v99",
                "type": "uint256"
              },
              {
                "internalType": "uint256[18]",
                "name": "v100",
                "type": "uint256[18]"
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
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256[18]",
                "name": "v100",
                "type": "uint256[18]"
              },
              {
                "internalType": "uint256",
                "name": "v361",
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
                "internalType": "uint256",
                "name": "v113",
                "type": "uint256"
              },
              {
                "internalType": "uint256[18]",
                "name": "v114",
                "type": "uint256[18]"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
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
                "name": "v333",
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
                "name": "v333",
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
                "name": "v295",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v361",
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
                "name": "v295",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v361",
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
                "name": "v269",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v361",
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
                "name": "v269",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v361",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051808201825243815242602091820152815160008183018190528184018190528351808303850181526060909201909352805191012090556116e4806100766000396000f3fe60806040526004361061008a5760003560e01c80636dacfd6f116100595780636dacfd6f146100e4578063b861cb10146100f7578063bdc6044d1461010a578063c39f606d1461011d578063e163d7c41461013057600080fd5b80631dc091ad146100965780632438df70146100ab5780634188e022146100be5780636cc4a844146100d157600080fd5b3661009157005b600080fd5b6100a96100a43660046112af565b610143565b005b6100a96100b93660046112c1565b610272565b6100a96100cc36600461126d565b610374565b6100a96100df366004611251565b61047b565b6100a96100f236600461126d565b6105f0565b6100a9610105366004611251565b610787565b6100a9610118366004611289565b61088c565b6100a961012b36600461129c565b610a15565b6100a961013e3660046112c1565b610e46565b61019560006101556020840184611236565b6040516020016101719291909182521515602082015260400190565b6040516020818303038152906040528051906020012060001c600054146008610f45565b600080805560408051602081018252918252517f120854c39fdbc847613c8c1a66d23aa6d099c4db8f64d852475191e60a6298d9906101d59084906114dc565b60405180910390a16101ee346020840135146007610f45565b6101f9600a43611661565b81526040805160608082018352600082840190815233835260208681013581850190815286518352855160019281019290925284516001600160a01b0316958201959095529351918401919091525160808301529060a0015b60408051601f198184030181529190528051602090910120600055505050565b6040516102ae9061028a9060019084906020016115a8565b6040516020818303038152906040528051906020012060001c60005414600a610f45565b600080556102c360408201354310600b610f45565b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516102f291906114fd565b60405180910390a161030b346020830135146009610f45565b6103136110ff565b6103206020830183611214565b81516001600160a01b0390911690528051602080840135918101829052825133604090910152808301805160019052514391015261035e9080611661565b60208201516040015261037081610f6a565b5050565b6040516103b09061038c906008908490602001611540565b6040516020818303038152906040528051906020012060001c60005414601e610f45565b600080556103c66080820135431015601f610f45565b7fe30737f1ebfc963c65c5913e78ab44df878e431e05d360e374cda18b462b262b816040516103f59190611469565b60405180910390a16104093415601c610f45565b61042b3361041a6020840184611214565b6001600160a01b031614601d610f45565b6104386020820182611214565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f19350505050158015610473573d6000803e3d6000fd5b506000805533ff5b6040516104b79061049390600690849060200161164d565b6040516020818303038152906040528051906020012060001c600054146012610f45565b600080805560408051602081019091529081526104db606083013543106013610f45565b7f16424d059cabc243859f670786693b7e657c3f04cbc39631fa14608999bfaef98260405161050a919061140a565b60405180910390a161051e34156010610f45565b6105403361052f6020850185611214565b6001600160a01b0316146011610f45565b61054b600a43611661565b81526040805160c08101825260008082526020808301829052928201819052606082018190526080820181905260a08201529061058a90840184611214565b6001600160a01b03168152602080840135908201526105af6060840160408501611214565b6001600160a01b031660408083019190915260a080850135606084015283516080808501919091528501359083015251610252906008908390602001611554565b60405161062c90610608906008908490602001611540565b6040516020818303038152906040528051906020012060001c60005414601a610f45565b6000805561064160808201354310601b610f45565b7fa03e2b199cbd4c163bca89aa8e3581bcf82ee511c6ed7b600ee5e8a3e78842b481604051610670919061144d565b60405180910390a161068434156018610f45565b6106a9336106986060840160408501611214565b6001600160a01b0316146019610f45565b6106f46040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6107016020830183611214565b6001600160a01b03168152602080830135908201526107266060830160408401611214565b6001600160a01b03166040808301919091526060808401359083015260c0830135608083015260a080840135908301525161076890600a908390602001611554565b60408051601f1981840301815291905280516020909101206000555050565b6040516107c39061079f90600690849060200161164d565b6040516020818303038152906040528051906020012060001c600054146016610f45565b600080556107d960608201354310156017610f45565b7f5005c4e6004c19e98ada43b5f5d05731c1a82aa5d9215871f88ceb584e0f83e0816040516108089190611426565b60405180910390a161081c34156014610f45565b610841336108306060840160408501611214565b6001600160a01b0316146015610f45565b6108516060820160408301611214565b6040516001600160a01b039190911690608083013580156108fc02916000818181858888f19350505050158015610473573d6000803e3d6000fd5b6040516108c8906108a490600a908490602001611540565b6040516020818303038152906040528051906020012060001c600054146023610f45565b600080556040517f297bbb2d5bb44b4e5d874733a6cb7c74365b0f51a638b490ec0b1ec65bf3c49f906108fc908390611490565b60405180910390a161091034156020610f45565b610932336109216020840184611214565b6001600160a01b0316146021610f45565b604051610975906109509060c08401359060e0850190602001611524565b60408051601f1981840301815291905280516020909101206060830135146022610f45565b61097d611151565b61098a6020830183611214565b6001600160a01b03168152602080830135908201526109af6060830160408401611214565b6001600160a01b03166040808301919091526080830135606083015280516102408181019092529060e084019060129083908390808284376000920191909152505050608082015260a0808301359082015260405161076890600b9083906020016115d1565b604051610a5190610a2d90600b9084906020016115bc565b6040516020818303038152906040528051906020012060001c600054146027610f45565b60008080556040805180820182528281526020810192909252517f17eed1132f7269b907d9e74af0e354ab5371d4ddb5ad456e78b79583a057d5c390610a989084906114b5565b60405180910390a1610aac34156024610f45565b610ad133610ac06060850160408601611214565b6001600160a01b0316146025610f45565b604051610b1690610af1906102e085013590610300860190602001611524565b60408051601f1981840301815291905280516020909101206060840135146026610f45565b6104008201356102a083013514610b2e576000610b31565b60015b6103e083013561028084013514610b49576000610b4c565b60015b6103c084013561026085013514610b64576000610b67565b60015b6103a085013561024086013514610b7f576000610b82565b60015b61038086013561022087013514610b9a576000610b9d565b60015b61036087013561020088013514610bb5576000610bb8565b60015b6103408801356101e089013514610bd0576000610bd3565b60015b6103208901356101c08a013514610beb576000610bee565b60015b6103008a01356101a08b013514610c06576000610c09565b60015b610c139190611661565b610c1d9190611661565b610c279190611661565b610c319190611661565b610c3b9190611661565b610c459190611661565b610c4f9190611661565b610c599190611661565b815261018082013561052083013514610c73576000610c76565b60015b61016083013561050084013514610c8e576000610c91565b60015b6101408401356104e085013514610ca9576000610cac565b60015b6101208501356104c086013514610cc4576000610cc7565b60015b6101008601356104a087013514610cdf576000610ce2565b60015b60e087013561048088013514610cf9576000610cfc565b60015b60c088013561046089013514610d13576000610d16565b60015b60a08901356104408a013514610d2d576000610d30565b60015b60808a01356104208b013514610d47576000610d4a565b60015b610d549190611661565b610d5e9190611661565b610d689190611661565b610d729190611661565b610d7c9190611661565b610d869190611661565b610d909190611661565b610d9a9190611661565b6020820152610da76110ff565b610db46020840184611214565b81516001600160a01b0390911690528051602080850135910152610dde6060840160408501611214565b81516001600160a01b039091166040909101526020820151825111610e17576020820151825110610e10576001610e1a565b6000610e1a565b60025b6020808301805192909252815143910152516102c0840135604090910152610e4181610f6a565b505050565b604051610e8290610e5e9060019084906020016115a8565b6040516020818303038152906040528051906020012060001c60005414600e610f45565b60008055610e986040820135431015600f610f45565b7fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d8562301381604051610ec791906114fd565b60405180910390a1610edb3415600c610f45565b610efd33610eec6020840184611214565b6001600160a01b031614600d610f45565b610f0a6020820182611214565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610473573d6000803e3d6000fd5b816103705760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160208101909152600081526020820151516001141561103957600a826020015160200151610f9c9190611661565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089019687528b51516001600160a01b039081168a528c5187015186528c518b0151811685528b5183528c8701518b015188528a51600697810197909752895181169a87019a909a529351918501919091529051909616908201529351918401919091525160c08301529060e001610252565b6040805160c0810182526000818301818152606083018281526080840183815260a085018481528386526020808701959095528851516001600160a01b039081169094528851850151909252875190950151909116909352840151519182905290610e419082906002146110b2578051604001516110b6565b8051515b6001600160a01b03166108fc82600001516020015160026110d79190611679565b6040518115909202916000818181858888f19350505050158015610473573d6000803e3d6000fd5b6040805160a0810182526000918101828152606082018390526080820192909252908190815260200161114c60405180606001604052806000815260200160008152602001600081525090565b905290565b6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200161119261119f565b8152602001600081525090565b6040518061024001604052806012906020820280368337509192915050565b80356001600160a01b03811681146111d557600080fd5b919050565b803580151581146111d557600080fd5b600060c082840312156111fc57600080fd5b50919050565b600060e082840312156111fc57600080fd5b60006020828403121561122657600080fd5b61122f826111be565b9392505050565b60006020828403121561124857600080fd5b61122f826111da565b600060c0828403121561126357600080fd5b61122f83836111ea565b600060e0828403121561127f57600080fd5b61122f8383611202565b600061032082840312156111fc57600080fd5b600061054082840312156111fc57600080fd5b6000604082840312156111fc57600080fd5b6000608082840312156111fc57600080fd5b6001600160a01b03806112e5836111be565b16835260208201356020840152806112ff604084016111be565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b03611339826111be565b16825260208181013590830152604090810135910152565b6001600160a01b0380611363836111be565b168352602082013560208401528061137d604084016111be565b16604084015250606081013560608301526102406080820160808401376102c090810135910152565b8035825261024060208201602084013760006102608301525050565b6001600160a01b03806113d4836111be565b16835260208201356020840152806113ee604084016111be565b1660408401525060608181013590830152608090810135910152565b60c0810161141882846113c2565b60a092830135919092015290565b60c0810161143482846113c2565b61144060a084016111da565b151560a083015292915050565b60e0810161145b82846112d3565b60c092830135919092015290565b60e0810161147782846112d3565b61148360c084016111da565b151560c083015292915050565b610320810161149f82846112d3565b6114af60c0830160c085016113a6565b92915050565b61054081016114c48284611351565b6102e06114d58184018286016113a6565b5092915050565b604081016114e9836111da565b151582526020830135602083015292915050565b6080810161150b8284611328565b611517606084016111da565b1515606083015292915050565b8281526102608101610240836020840137600081529392505050565b82815260e0810161122f60208301846112d3565b82815260e0810161122f602083018480516001600160a01b0390811683526020808301519084015260408083015190911690830152606080820151908301526080808201519083015260a090810151910152565b8281526080810161122f6020830184611328565b828152610300810161122f6020830184611351565b600061030082019050838252602060018060a01b0380855116828501528185015160408501528060408601511660608501525060608401516080840152608084015160a0840160005b60128110156116375782518252918301919083019060010161161a565b5050505060a08301516102e08301529392505050565b82815260c0810161122f60208301846113c2565b6000821982111561167457611674611698565b500190565b600081600019048311821515161561169357611693611698565b500290565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d5e75275e4feec5ba994c1c2390f7b983302cfe7ee4ff7ed9b6af0eadf9387d364736f6c63430008050033`,
  BytecodeLen: 5978,
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

