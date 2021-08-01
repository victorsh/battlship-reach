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
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc3, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc3, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc2, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc2, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  
  
  const v25 = await ctc.creationTime();
  const txn1 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeout_delay: false,
    waitIfNotPresent: false
    }));
  const [v30] = txn1.data;
  const v33 = txn1.time;
  const v29 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v30), {
    at: './index.rsh:61:27:application',
    fs: ['at ./index.rsh:60:11:application call to [unknown function] (defined at: ./index.rsh:60:15:function exp)'],
    msg: 'acceptWager',
    who: 'attacher'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v29, v30, v33],
    evt_cnt: 0,
    funcNum: 2,
    hasLastTime: stdlib.checkedBigNumberify('./index.rsh:63:7:dot', stdlib.UInt_max, 2),
    onlyIf: true,
    out_tys: [],
    pay: [v30, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:63:7:dot', stdlib.UInt_max, 1), v29, v30, v33]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:63:7:dot', stdlib.UInt_max, 1), v29, v30]);
      const [] = txn2.data;
      const v40 = txn2.time;
      const v37 = txn2.from;
      
      const v39 = stdlib.add(v30, v30);
      sim_r.txns.push({
        amt: v30,
        kind: 'to',
        tok: undefined
        });
      const v41 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v319 = v40;
      const v321 = v39;
      
      if ((() => {
        const v54 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v54;})()) {
        sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:69:15:after expr stmt semicolon', stdlib.UInt_max, 6), v29, v30, v37, v319, v321]);
        sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:69:15:after expr stmt semicolon', stdlib.UInt_max, 6), v29, v30, v37, v321]);
        sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:69:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        }
      else {
        const v288 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v291 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:147:14:decimal', stdlib.UInt_max, 2), v30);
        const v293 = v288 ? v29 : v37;
        sim_r.txns.push({
          amt: v291,
          kind: 'from',
          to: v293,
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
      }),
    soloSend: true,
    timeout_delay: stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10),
    tys: [ctc6, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeout_delay: false,
      waitIfNotPresent: false
      }));
    const [] = txn3.data;
    const v304 = txn3.time;
    const v301 = txn3.from;
    ;
    const v303 = stdlib.addressEq(v29, v301);
    stdlib.assert(v303, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:63:49:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'attacher'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:49:31:application',
      fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:63:49:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'attacher'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v40 = txn2.time;
    const v37 = txn2.from;
    const v39 = stdlib.add(v30, v30);
    ;
    let v41 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v319 = v40;
    let v321 = v39;
    
    while ((() => {
      const v54 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v54;})()) {
      const txn3 = await (ctc.recv({
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc2],
        timeout_delay: stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10),
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v29, v30, v37, v319, v321],
          evt_cnt: 0,
          funcNum: 7,
          hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3),
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v29, v30, v37, v319, v321]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v29, v30, v37, v321]);
            const [] = txn4.data;
            const v273 = txn4.time;
            const v270 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v272 = stdlib.addressEq(v37, v270);
            stdlib.assert(v272, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:76:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'attacher'
              });
            sim_r.txns.push({
              amt: v321,
              kind: 'from',
              to: v37,
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
            }),
          soloSend: true,
          timeout_delay: false,
          tys: [ctc6, ctc0, ctc6, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const [] = txn4.data;
        const v273 = txn4.time;
        const v270 = txn4.from;
        ;
        const v272 = stdlib.addressEq(v37, v270);
        stdlib.assert(v272, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:76:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'attacher'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:49:31:application',
          fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:76:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'attacher'
          });
        
        return;
        }
      else {
        const [v65] = txn3.data;
        const v68 = txn3.time;
        const v64 = txn3.from;
        ;
        const v67 = stdlib.addressEq(v29, v64);
        stdlib.assert(v67, {
          at: './index.rsh:76:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'attacher'
          });
        const v72 = stdlib.protect(ctc3, await interact.setShips(), {
          at: './index.rsh:81:42:application',
          fs: ['at ./index.rsh:80:13:application call to [unknown function] (defined at: ./index.rsh:80:17:function exp)'],
          msg: 'setShips',
          who: 'attacher'
          });
        const v74 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:60:31:application',
          fs: ['at ./index.rsh:82:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:80:13:application call to [unknown function] (defined at: ./index.rsh:80:17:function exp)'],
          msg: 'random',
          who: 'attacher'
          });
        const v75 = stdlib.digest(ctc4, [v74, v72]);
        
        const txn4 = await (ctc.sendrecv({
          args: [v29, v30, v37, v65, v68, v321, v75],
          evt_cnt: 1,
          funcNum: 8,
          hasLastTime: stdlib.checkedBigNumberify('./index.rsh:85:9:dot', stdlib.UInt_max, 4),
          onlyIf: true,
          out_tys: [ctc2],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:85:9:dot', stdlib.UInt_max, 8), v29, v30, v37, v65, v68, v321]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:85:9:dot', stdlib.UInt_max, 8), v29, v30, v37, v65, v321]);
            const [v78] = txn4.data;
            const v81 = txn4.time;
            const v77 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v80 = stdlib.addressEq(v37, v77);
            stdlib.assert(v80, {
              at: './index.rsh:85:9:dot',
              fs: [],
              msg: 'sender correct',
              who: 'attacher'
              });
            sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:86:15:after expr stmt semicolon', stdlib.UInt_max, 10), v29, v30, v37, v65, v78, v81, v321]);
            sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:86:15:after expr stmt semicolon', stdlib.UInt_max, 10), v29, v30, v37, v65, v78, v321]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:86:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeout_delay: stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10),
          tys: [ctc6, ctc0, ctc6, ctc2, ctc0, ctc0, ctc2],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv({
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeout_delay: false,
            waitIfNotPresent: false
            }));
          const [] = txn5.data;
          const v254 = txn5.time;
          const v251 = txn5.from;
          ;
          const v253 = stdlib.addressEq(v29, v251);
          stdlib.assert(v253, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:85:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'attacher'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:49:31:application',
            fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:85:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'attacher'
            });
          
          return;
          }
        else {
          const [v78] = txn4.data;
          const v81 = txn4.time;
          const v77 = txn4.from;
          ;
          const v80 = stdlib.addressEq(v37, v77);
          stdlib.assert(v80, {
            at: './index.rsh:85:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          const txn5 = await (ctc.recv({
            evt_cnt: 2,
            funcNum: 10,
            out_tys: [ctc0, ctc3],
            timeout_delay: false,
            waitIfNotPresent: false
            }));
          const [v86, v87] = txn5.data;
          const v90 = txn5.time;
          const v85 = txn5.from;
          ;
          const v89 = stdlib.addressEq(v29, v85);
          stdlib.assert(v89, {
            at: './index.rsh:94:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          const v92 = stdlib.digest(ctc4, [v86, v87]);
          const v93 = stdlib.digestEq(v65, v92);
          stdlib.assert(v93, {
            at: 'reach standard library:65:17:application',
            fs: ['at ./index.rsh:95:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
            msg: null,
            who: 'attacher'
            });
          const txn6 = await (ctc.sendrecv({
            args: [v29, v30, v37, v78, v87, v90, v321, v74, v72],
            evt_cnt: 2,
            funcNum: 11,
            hasLastTime: stdlib.checkedBigNumberify('./index.rsh:101:9:dot', stdlib.UInt_max, 5),
            onlyIf: true,
            out_tys: [ctc0, ctc3],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:101:9:dot', stdlib.UInt_max, 11), v29, v30, v37, v78, v87, v90, v321]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:101:9:dot', stdlib.UInt_max, 11), v29, v30, v37, v78, v87, v321]);
              const [v99, v100] = txn6.data;
              const v103 = txn6.time;
              const v98 = txn6.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v102 = stdlib.addressEq(v37, v98);
              stdlib.assert(v102, {
                at: './index.rsh:101:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'attacher'
                });
              const v105 = stdlib.digest(ctc4, [v99, v100]);
              const v106 = stdlib.digestEq(v78, v105);
              stdlib.assert(v106, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:102:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'attacher'
                });
              const v108 = v100[stdlib.checkedBigNumberify('./index.rsh:106:34:array ref', stdlib.UInt_max, 0)];
              const v109 = v87[stdlib.checkedBigNumberify('./index.rsh:106:45:array ref', stdlib.UInt_max, 9)];
              const v111 = stdlib.eq(v108, v109);
              const v113 = v111 ? stdlib.checkedBigNumberify('./index.rsh:106:52:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:106:56:decimal', stdlib.UInt_max, 0);
              const v114 = v87[stdlib.checkedBigNumberify('./index.rsh:107:34:array ref', stdlib.UInt_max, 0)];
              const v115 = v100[stdlib.checkedBigNumberify('./index.rsh:107:45:array ref', stdlib.UInt_max, 9)];
              const v117 = stdlib.eq(v114, v115);
              const v119 = v117 ? stdlib.checkedBigNumberify('./index.rsh:107:52:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:107:56:decimal', stdlib.UInt_max, 0);
              const v120 = v100[stdlib.checkedBigNumberify('./index.rsh:108:34:array ref', stdlib.UInt_max, 1)];
              const v121 = v87[stdlib.checkedBigNumberify('./index.rsh:108:45:array ref', stdlib.UInt_max, 10)];
              const v123 = stdlib.eq(v120, v121);
              const v125 = v123 ? stdlib.checkedBigNumberify('./index.rsh:108:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:108:57:decimal', stdlib.UInt_max, 0);
              const v126 = v87[stdlib.checkedBigNumberify('./index.rsh:109:34:array ref', stdlib.UInt_max, 1)];
              const v127 = v100[stdlib.checkedBigNumberify('./index.rsh:109:45:array ref', stdlib.UInt_max, 10)];
              const v129 = stdlib.eq(v126, v127);
              const v131 = v129 ? stdlib.checkedBigNumberify('./index.rsh:109:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:109:57:decimal', stdlib.UInt_max, 0);
              const v132 = v100[stdlib.checkedBigNumberify('./index.rsh:110:34:array ref', stdlib.UInt_max, 2)];
              const v133 = v87[stdlib.checkedBigNumberify('./index.rsh:110:45:array ref', stdlib.UInt_max, 11)];
              const v135 = stdlib.eq(v132, v133);
              const v137 = v135 ? stdlib.checkedBigNumberify('./index.rsh:110:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:110:57:decimal', stdlib.UInt_max, 0);
              const v138 = v87[stdlib.checkedBigNumberify('./index.rsh:111:34:array ref', stdlib.UInt_max, 2)];
              const v139 = v100[stdlib.checkedBigNumberify('./index.rsh:111:45:array ref', stdlib.UInt_max, 11)];
              const v141 = stdlib.eq(v138, v139);
              const v143 = v141 ? stdlib.checkedBigNumberify('./index.rsh:111:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:111:57:decimal', stdlib.UInt_max, 0);
              const v144 = v100[stdlib.checkedBigNumberify('./index.rsh:112:34:array ref', stdlib.UInt_max, 3)];
              const v145 = v87[stdlib.checkedBigNumberify('./index.rsh:112:45:array ref', stdlib.UInt_max, 12)];
              const v147 = stdlib.eq(v144, v145);
              const v149 = v147 ? stdlib.checkedBigNumberify('./index.rsh:112:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:112:57:decimal', stdlib.UInt_max, 0);
              const v150 = v87[stdlib.checkedBigNumberify('./index.rsh:113:34:array ref', stdlib.UInt_max, 3)];
              const v151 = v100[stdlib.checkedBigNumberify('./index.rsh:113:45:array ref', stdlib.UInt_max, 12)];
              const v153 = stdlib.eq(v150, v151);
              const v155 = v153 ? stdlib.checkedBigNumberify('./index.rsh:113:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:113:57:decimal', stdlib.UInt_max, 0);
              const v156 = v100[stdlib.checkedBigNumberify('./index.rsh:114:34:array ref', stdlib.UInt_max, 4)];
              const v157 = v87[stdlib.checkedBigNumberify('./index.rsh:114:45:array ref', stdlib.UInt_max, 13)];
              const v159 = stdlib.eq(v156, v157);
              const v161 = v159 ? stdlib.checkedBigNumberify('./index.rsh:114:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:114:57:decimal', stdlib.UInt_max, 0);
              const v162 = v87[stdlib.checkedBigNumberify('./index.rsh:115:34:array ref', stdlib.UInt_max, 4)];
              const v163 = v100[stdlib.checkedBigNumberify('./index.rsh:115:45:array ref', stdlib.UInt_max, 13)];
              const v165 = stdlib.eq(v162, v163);
              const v167 = v165 ? stdlib.checkedBigNumberify('./index.rsh:115:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:115:57:decimal', stdlib.UInt_max, 0);
              const v168 = v100[stdlib.checkedBigNumberify('./index.rsh:116:34:array ref', stdlib.UInt_max, 5)];
              const v169 = v87[stdlib.checkedBigNumberify('./index.rsh:116:45:array ref', stdlib.UInt_max, 14)];
              const v171 = stdlib.eq(v168, v169);
              const v173 = v171 ? stdlib.checkedBigNumberify('./index.rsh:116:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:116:57:decimal', stdlib.UInt_max, 0);
              const v174 = v87[stdlib.checkedBigNumberify('./index.rsh:117:34:array ref', stdlib.UInt_max, 5)];
              const v175 = v100[stdlib.checkedBigNumberify('./index.rsh:117:45:array ref', stdlib.UInt_max, 14)];
              const v177 = stdlib.eq(v174, v175);
              const v179 = v177 ? stdlib.checkedBigNumberify('./index.rsh:117:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:117:57:decimal', stdlib.UInt_max, 0);
              const v180 = v100[stdlib.checkedBigNumberify('./index.rsh:118:34:array ref', stdlib.UInt_max, 6)];
              const v181 = v87[stdlib.checkedBigNumberify('./index.rsh:118:45:array ref', stdlib.UInt_max, 15)];
              const v183 = stdlib.eq(v180, v181);
              const v185 = v183 ? stdlib.checkedBigNumberify('./index.rsh:118:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:118:57:decimal', stdlib.UInt_max, 0);
              const v186 = v87[stdlib.checkedBigNumberify('./index.rsh:119:34:array ref', stdlib.UInt_max, 6)];
              const v187 = v100[stdlib.checkedBigNumberify('./index.rsh:119:45:array ref', stdlib.UInt_max, 15)];
              const v189 = stdlib.eq(v186, v187);
              const v191 = v189 ? stdlib.checkedBigNumberify('./index.rsh:119:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:119:57:decimal', stdlib.UInt_max, 0);
              const v192 = v100[stdlib.checkedBigNumberify('./index.rsh:120:34:array ref', stdlib.UInt_max, 7)];
              const v193 = v87[stdlib.checkedBigNumberify('./index.rsh:120:45:array ref', stdlib.UInt_max, 16)];
              const v195 = stdlib.eq(v192, v193);
              const v197 = v195 ? stdlib.checkedBigNumberify('./index.rsh:120:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:120:57:decimal', stdlib.UInt_max, 0);
              const v198 = v87[stdlib.checkedBigNumberify('./index.rsh:121:34:array ref', stdlib.UInt_max, 7)];
              const v199 = v100[stdlib.checkedBigNumberify('./index.rsh:121:45:array ref', stdlib.UInt_max, 16)];
              const v201 = stdlib.eq(v198, v199);
              const v203 = v201 ? stdlib.checkedBigNumberify('./index.rsh:121:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:121:57:decimal', stdlib.UInt_max, 0);
              const v204 = v100[stdlib.checkedBigNumberify('./index.rsh:122:34:array ref', stdlib.UInt_max, 8)];
              const v205 = v87[stdlib.checkedBigNumberify('./index.rsh:122:45:array ref', stdlib.UInt_max, 17)];
              const v207 = stdlib.eq(v204, v205);
              const v209 = v207 ? stdlib.checkedBigNumberify('./index.rsh:122:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:122:57:decimal', stdlib.UInt_max, 0);
              const v210 = v87[stdlib.checkedBigNumberify('./index.rsh:123:34:array ref', stdlib.UInt_max, 8)];
              const v211 = v100[stdlib.checkedBigNumberify('./index.rsh:123:45:array ref', stdlib.UInt_max, 17)];
              const v213 = stdlib.eq(v210, v211);
              const v215 = v213 ? stdlib.checkedBigNumberify('./index.rsh:123:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, 0);
              const v216 = stdlib.add(v113, v125);
              const v217 = stdlib.add(v216, v137);
              const v218 = stdlib.add(v217, v149);
              const v219 = stdlib.add(v218, v161);
              const v220 = stdlib.add(v219, v173);
              const v221 = stdlib.add(v220, v185);
              const v222 = stdlib.add(v221, v197);
              const v223 = stdlib.add(v222, v209);
              const v224 = stdlib.add(v119, v131);
              const v225 = stdlib.add(v224, v143);
              const v226 = stdlib.add(v225, v155);
              const v227 = stdlib.add(v226, v167);
              const v228 = stdlib.add(v227, v179);
              const v229 = stdlib.add(v228, v191);
              const v230 = stdlib.add(v229, v203);
              const v231 = stdlib.add(v230, v215);
              const v233 = stdlib.gt(v223, v231);
              const v234 = stdlib.lt(v223, v231);
              const v235 = v234 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
              const v236 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2) : v235;
              
              
              const cv41 = v236;
              const cv319 = v103;
              const cv321 = v321;
              
              (() => {
                const v41 = cv41;
                const v319 = cv319;
                const v321 = cv321;
                
                if ((() => {
                  const v54 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                  
                  return v54;})()) {
                  sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:69:15:after expr stmt semicolon', stdlib.UInt_max, 6), v29, v30, v37, v319, v321]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:69:15:after expr stmt semicolon', stdlib.UInt_max, 6), v29, v30, v37, v321]);
                  sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:69:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                  sim_r.isHalt = false;
                  }
                else {
                  const v288 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                  const v291 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:147:14:decimal', stdlib.UInt_max, 2), v30);
                  const v293 = v288 ? v29 : v37;
                  sim_r.txns.push({
                    amt: v291,
                    kind: 'from',
                    to: v293,
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
              }),
            soloSend: true,
            timeout_delay: false,
            tys: [ctc6, ctc0, ctc6, ctc2, ctc3, ctc0, ctc0, ctc0, ctc3],
            waitIfNotPresent: false
            }));
          const [v99, v100] = txn6.data;
          const v103 = txn6.time;
          const v98 = txn6.from;
          ;
          const v102 = stdlib.addressEq(v37, v98);
          stdlib.assert(v102, {
            at: './index.rsh:101:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'attacher'
            });
          const v105 = stdlib.digest(ctc4, [v99, v100]);
          const v106 = stdlib.digestEq(v78, v105);
          stdlib.assert(v106, {
            at: 'reach standard library:65:17:application',
            fs: ['at ./index.rsh:102:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
            msg: null,
            who: 'attacher'
            });
          const v108 = v100[stdlib.checkedBigNumberify('./index.rsh:106:34:array ref', stdlib.UInt_max, 0)];
          const v109 = v87[stdlib.checkedBigNumberify('./index.rsh:106:45:array ref', stdlib.UInt_max, 9)];
          const v111 = stdlib.eq(v108, v109);
          const v113 = v111 ? stdlib.checkedBigNumberify('./index.rsh:106:52:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:106:56:decimal', stdlib.UInt_max, 0);
          const v114 = v87[stdlib.checkedBigNumberify('./index.rsh:107:34:array ref', stdlib.UInt_max, 0)];
          const v115 = v100[stdlib.checkedBigNumberify('./index.rsh:107:45:array ref', stdlib.UInt_max, 9)];
          const v117 = stdlib.eq(v114, v115);
          const v119 = v117 ? stdlib.checkedBigNumberify('./index.rsh:107:52:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:107:56:decimal', stdlib.UInt_max, 0);
          const v120 = v100[stdlib.checkedBigNumberify('./index.rsh:108:34:array ref', stdlib.UInt_max, 1)];
          const v121 = v87[stdlib.checkedBigNumberify('./index.rsh:108:45:array ref', stdlib.UInt_max, 10)];
          const v123 = stdlib.eq(v120, v121);
          const v125 = v123 ? stdlib.checkedBigNumberify('./index.rsh:108:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:108:57:decimal', stdlib.UInt_max, 0);
          const v126 = v87[stdlib.checkedBigNumberify('./index.rsh:109:34:array ref', stdlib.UInt_max, 1)];
          const v127 = v100[stdlib.checkedBigNumberify('./index.rsh:109:45:array ref', stdlib.UInt_max, 10)];
          const v129 = stdlib.eq(v126, v127);
          const v131 = v129 ? stdlib.checkedBigNumberify('./index.rsh:109:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:109:57:decimal', stdlib.UInt_max, 0);
          const v132 = v100[stdlib.checkedBigNumberify('./index.rsh:110:34:array ref', stdlib.UInt_max, 2)];
          const v133 = v87[stdlib.checkedBigNumberify('./index.rsh:110:45:array ref', stdlib.UInt_max, 11)];
          const v135 = stdlib.eq(v132, v133);
          const v137 = v135 ? stdlib.checkedBigNumberify('./index.rsh:110:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:110:57:decimal', stdlib.UInt_max, 0);
          const v138 = v87[stdlib.checkedBigNumberify('./index.rsh:111:34:array ref', stdlib.UInt_max, 2)];
          const v139 = v100[stdlib.checkedBigNumberify('./index.rsh:111:45:array ref', stdlib.UInt_max, 11)];
          const v141 = stdlib.eq(v138, v139);
          const v143 = v141 ? stdlib.checkedBigNumberify('./index.rsh:111:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:111:57:decimal', stdlib.UInt_max, 0);
          const v144 = v100[stdlib.checkedBigNumberify('./index.rsh:112:34:array ref', stdlib.UInt_max, 3)];
          const v145 = v87[stdlib.checkedBigNumberify('./index.rsh:112:45:array ref', stdlib.UInt_max, 12)];
          const v147 = stdlib.eq(v144, v145);
          const v149 = v147 ? stdlib.checkedBigNumberify('./index.rsh:112:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:112:57:decimal', stdlib.UInt_max, 0);
          const v150 = v87[stdlib.checkedBigNumberify('./index.rsh:113:34:array ref', stdlib.UInt_max, 3)];
          const v151 = v100[stdlib.checkedBigNumberify('./index.rsh:113:45:array ref', stdlib.UInt_max, 12)];
          const v153 = stdlib.eq(v150, v151);
          const v155 = v153 ? stdlib.checkedBigNumberify('./index.rsh:113:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:113:57:decimal', stdlib.UInt_max, 0);
          const v156 = v100[stdlib.checkedBigNumberify('./index.rsh:114:34:array ref', stdlib.UInt_max, 4)];
          const v157 = v87[stdlib.checkedBigNumberify('./index.rsh:114:45:array ref', stdlib.UInt_max, 13)];
          const v159 = stdlib.eq(v156, v157);
          const v161 = v159 ? stdlib.checkedBigNumberify('./index.rsh:114:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:114:57:decimal', stdlib.UInt_max, 0);
          const v162 = v87[stdlib.checkedBigNumberify('./index.rsh:115:34:array ref', stdlib.UInt_max, 4)];
          const v163 = v100[stdlib.checkedBigNumberify('./index.rsh:115:45:array ref', stdlib.UInt_max, 13)];
          const v165 = stdlib.eq(v162, v163);
          const v167 = v165 ? stdlib.checkedBigNumberify('./index.rsh:115:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:115:57:decimal', stdlib.UInt_max, 0);
          const v168 = v100[stdlib.checkedBigNumberify('./index.rsh:116:34:array ref', stdlib.UInt_max, 5)];
          const v169 = v87[stdlib.checkedBigNumberify('./index.rsh:116:45:array ref', stdlib.UInt_max, 14)];
          const v171 = stdlib.eq(v168, v169);
          const v173 = v171 ? stdlib.checkedBigNumberify('./index.rsh:116:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:116:57:decimal', stdlib.UInt_max, 0);
          const v174 = v87[stdlib.checkedBigNumberify('./index.rsh:117:34:array ref', stdlib.UInt_max, 5)];
          const v175 = v100[stdlib.checkedBigNumberify('./index.rsh:117:45:array ref', stdlib.UInt_max, 14)];
          const v177 = stdlib.eq(v174, v175);
          const v179 = v177 ? stdlib.checkedBigNumberify('./index.rsh:117:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:117:57:decimal', stdlib.UInt_max, 0);
          const v180 = v100[stdlib.checkedBigNumberify('./index.rsh:118:34:array ref', stdlib.UInt_max, 6)];
          const v181 = v87[stdlib.checkedBigNumberify('./index.rsh:118:45:array ref', stdlib.UInt_max, 15)];
          const v183 = stdlib.eq(v180, v181);
          const v185 = v183 ? stdlib.checkedBigNumberify('./index.rsh:118:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:118:57:decimal', stdlib.UInt_max, 0);
          const v186 = v87[stdlib.checkedBigNumberify('./index.rsh:119:34:array ref', stdlib.UInt_max, 6)];
          const v187 = v100[stdlib.checkedBigNumberify('./index.rsh:119:45:array ref', stdlib.UInt_max, 15)];
          const v189 = stdlib.eq(v186, v187);
          const v191 = v189 ? stdlib.checkedBigNumberify('./index.rsh:119:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:119:57:decimal', stdlib.UInt_max, 0);
          const v192 = v100[stdlib.checkedBigNumberify('./index.rsh:120:34:array ref', stdlib.UInt_max, 7)];
          const v193 = v87[stdlib.checkedBigNumberify('./index.rsh:120:45:array ref', stdlib.UInt_max, 16)];
          const v195 = stdlib.eq(v192, v193);
          const v197 = v195 ? stdlib.checkedBigNumberify('./index.rsh:120:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:120:57:decimal', stdlib.UInt_max, 0);
          const v198 = v87[stdlib.checkedBigNumberify('./index.rsh:121:34:array ref', stdlib.UInt_max, 7)];
          const v199 = v100[stdlib.checkedBigNumberify('./index.rsh:121:45:array ref', stdlib.UInt_max, 16)];
          const v201 = stdlib.eq(v198, v199);
          const v203 = v201 ? stdlib.checkedBigNumberify('./index.rsh:121:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:121:57:decimal', stdlib.UInt_max, 0);
          const v204 = v100[stdlib.checkedBigNumberify('./index.rsh:122:34:array ref', stdlib.UInt_max, 8)];
          const v205 = v87[stdlib.checkedBigNumberify('./index.rsh:122:45:array ref', stdlib.UInt_max, 17)];
          const v207 = stdlib.eq(v204, v205);
          const v209 = v207 ? stdlib.checkedBigNumberify('./index.rsh:122:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:122:57:decimal', stdlib.UInt_max, 0);
          const v210 = v87[stdlib.checkedBigNumberify('./index.rsh:123:34:array ref', stdlib.UInt_max, 8)];
          const v211 = v100[stdlib.checkedBigNumberify('./index.rsh:123:45:array ref', stdlib.UInt_max, 17)];
          const v213 = stdlib.eq(v210, v211);
          const v215 = v213 ? stdlib.checkedBigNumberify('./index.rsh:123:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, 0);
          const v216 = stdlib.add(v113, v125);
          const v217 = stdlib.add(v216, v137);
          const v218 = stdlib.add(v217, v149);
          const v219 = stdlib.add(v218, v161);
          const v220 = stdlib.add(v219, v173);
          const v221 = stdlib.add(v220, v185);
          const v222 = stdlib.add(v221, v197);
          const v223 = stdlib.add(v222, v209);
          const v224 = stdlib.add(v119, v131);
          const v225 = stdlib.add(v224, v143);
          const v226 = stdlib.add(v225, v155);
          const v227 = stdlib.add(v226, v167);
          const v228 = stdlib.add(v227, v179);
          const v229 = stdlib.add(v228, v191);
          const v230 = stdlib.add(v229, v203);
          const v231 = stdlib.add(v230, v215);
          const v233 = stdlib.gt(v223, v231);
          const v234 = stdlib.lt(v223, v231);
          const v235 = v234 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          const v236 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2) : v235;
          stdlib.protect(ctc1, await interact.getShips(v100), {
            at: './index.rsh:134:26:application',
            fs: ['at ./index.rsh:133:13:application call to [unknown function] (defined at: ./index.rsh:133:17:function exp)'],
            msg: 'getShips',
            who: 'attacher'
            });
          
          stdlib.protect(ctc1, await interact.seeOutcome(v236), {
            at: './index.rsh:138:28:application',
            fs: ['at ./index.rsh:137:11:application call to [unknown function] (defined at: ./index.rsh:137:23:function exp)'],
            msg: 'seeOutcome',
            who: 'attacher'
            });
          
          const cv41 = v236;
          const cv319 = v103;
          const cv321 = v321;
          
          v41 = cv41;
          v319 = cv319;
          v321 = cv321;
          
          continue;
          
          }
        }
      }
    const v288 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v291 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:147:14:decimal', stdlib.UInt_max, 2), v30);
    const v293 = v288 ? v29 : v37;
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
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc1, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc1, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc3, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc3, ctc0]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc3, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  const ctc18 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v25 = await ctc.creationTime();
  const v24 = stdlib.protect(ctc0, interact.wager, 'for deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v25, v24],
    evt_cnt: 1,
    funcNum: 1,
    hasLastTime: stdlib.checkedBigNumberify('./index.rsh:57:7:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v24, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:57:7:dot', stdlib.UInt_max, 0), v25]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:57:7:dot', stdlib.UInt_max, 0)]);
      const [v30] = txn1.data;
      const v33 = txn1.time;
      const v29 = txn1.from;
      
      sim_r.txns.push({
        amt: v30,
        kind: 'to',
        tok: undefined
        });
      sim_r.nextSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:58:13:after expr stmt semicolon', stdlib.UInt_max, 1), v29, v30, v33]);
      sim_r.nextSt_noTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:58:13:after expr stmt semicolon', stdlib.UInt_max, 1), v29, v30]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:58:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeout_delay: false,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const [v30] = txn1.data;
  const v33 = txn1.time;
  const v29 = txn1.from;
  ;
  const txn2 = await (ctc.recv({
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeout_delay: stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10),
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v29, v30, v33],
      evt_cnt: 0,
      funcNum: 3,
      hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2),
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v29, v30, v33]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v29, v30]);
        const [] = txn3.data;
        const v304 = txn3.time;
        const v301 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v303 = stdlib.addressEq(v29, v301);
        stdlib.assert(v303, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:63:49:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'deployer'
          });
        sim_r.txns.push({
          amt: v30,
          kind: 'from',
          to: v29,
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
        }),
      soloSend: true,
      timeout_delay: false,
      tys: [ctc6, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const [] = txn3.data;
    const v304 = txn3.time;
    const v301 = txn3.from;
    ;
    const v303 = stdlib.addressEq(v29, v301);
    stdlib.assert(v303, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:63:49:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'deployer'
      });
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:49:31:application',
      fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:63:49:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'deployer'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v40 = txn2.time;
    const v37 = txn2.from;
    const v39 = stdlib.add(v30, v30);
    ;
    let v41 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v319 = v40;
    let v321 = v39;
    
    while ((() => {
      const v54 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v54;})()) {
      const v59 = stdlib.protect(ctc1, await interact.setShips(), {
        at: './index.rsh:72:42:application',
        fs: ['at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:17:function exp)'],
        msg: 'setShips',
        who: 'deployer'
        });
      const v61 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:73:50:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:71:13:application call to [unknown function] (defined at: ./index.rsh:71:17:function exp)'],
        msg: 'random',
        who: 'deployer'
        });
      const v62 = stdlib.digest(ctc2, [v61, v59]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v29, v30, v37, v319, v321, v62],
        evt_cnt: 1,
        funcNum: 6,
        hasLastTime: stdlib.checkedBigNumberify('./index.rsh:76:9:dot', stdlib.UInt_max, 3),
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:76:9:dot', stdlib.UInt_max, 6), v29, v30, v37, v319, v321]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:76:9:dot', stdlib.UInt_max, 6), v29, v30, v37, v321]);
          const [v65] = txn3.data;
          const v68 = txn3.time;
          const v64 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v67 = stdlib.addressEq(v29, v64);
          stdlib.assert(v67, {
            at: './index.rsh:76:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:77:15:after expr stmt semicolon', stdlib.UInt_max, 8), v29, v30, v37, v65, v68, v321]);
          sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:77:15:after expr stmt semicolon', stdlib.UInt_max, 8), v29, v30, v37, v65, v321]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:77:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeout_delay: stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10),
        tys: [ctc6, ctc0, ctc6, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv({
          evt_cnt: 0,
          funcNum: 7,
          out_tys: [],
          timeout_delay: false,
          waitIfNotPresent: false
          }));
        const [] = txn4.data;
        const v273 = txn4.time;
        const v270 = txn4.from;
        ;
        const v272 = stdlib.addressEq(v37, v270);
        stdlib.assert(v272, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:76:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'deployer'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeout(), {
          at: './index.rsh:49:31:application',
          fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:76:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'deployer'
          });
        
        return;
        }
      else {
        const [v65] = txn3.data;
        const v68 = txn3.time;
        const v64 = txn3.from;
        ;
        const v67 = stdlib.addressEq(v29, v64);
        stdlib.assert(v67, {
          at: './index.rsh:76:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'deployer'
          });
        const txn4 = await (ctc.recv({
          evt_cnt: 1,
          funcNum: 8,
          out_tys: [ctc3],
          timeout_delay: stdlib.checkedBigNumberify('./index.rsh:19:18:decimal', stdlib.UInt_max, 10),
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v29, v30, v37, v65, v68, v321],
            evt_cnt: 0,
            funcNum: 9,
            hasLastTime: stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4),
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v29, v30, v37, v65, v68, v321]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v29, v30, v37, v65, v321]);
              const [] = txn5.data;
              const v254 = txn5.time;
              const v251 = txn5.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v253 = stdlib.addressEq(v29, v251);
              stdlib.assert(v253, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:85:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'deployer'
                });
              sim_r.txns.push({
                amt: v321,
                kind: 'from',
                to: v29,
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
              }),
            soloSend: true,
            timeout_delay: false,
            tys: [ctc6, ctc0, ctc6, ctc3, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const [] = txn5.data;
          const v254 = txn5.time;
          const v251 = txn5.from;
          ;
          const v253 = stdlib.addressEq(v29, v251);
          stdlib.assert(v253, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:85:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'deployer'
            });
          ;
          stdlib.protect(ctc4, await interact.informTimeout(), {
            at: './index.rsh:49:31:application',
            fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:23:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:85:57:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'deployer'
            });
          
          return;
          }
        else {
          const [v78] = txn4.data;
          const v81 = txn4.time;
          const v77 = txn4.from;
          ;
          const v80 = stdlib.addressEq(v37, v77);
          stdlib.assert(v80, {
            at: './index.rsh:85:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const txn5 = await (ctc.sendrecv({
            args: [v29, v30, v37, v65, v78, v81, v321, v61, v59],
            evt_cnt: 2,
            funcNum: 10,
            hasLastTime: stdlib.checkedBigNumberify('./index.rsh:94:9:dot', stdlib.UInt_max, 5),
            onlyIf: true,
            out_tys: [ctc0, ctc1],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:94:9:dot', stdlib.UInt_max, 10), v29, v30, v37, v65, v78, v81, v321]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:94:9:dot', stdlib.UInt_max, 10), v29, v30, v37, v65, v78, v321]);
              const [v86, v87] = txn5.data;
              const v90 = txn5.time;
              const v85 = txn5.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v89 = stdlib.addressEq(v29, v85);
              stdlib.assert(v89, {
                at: './index.rsh:94:9:dot',
                fs: [],
                msg: 'sender correct',
                who: 'deployer'
                });
              const v92 = stdlib.digest(ctc2, [v86, v87]);
              const v93 = stdlib.digestEq(v65, v92);
              stdlib.assert(v93, {
                at: 'reach standard library:65:17:application',
                fs: ['at ./index.rsh:95:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
                msg: null,
                who: 'deployer'
                });
              sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:96:15:after expr stmt semicolon', stdlib.UInt_max, 11), v29, v30, v37, v78, v87, v90, v321]);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:96:15:after expr stmt semicolon', stdlib.UInt_max, 11), v29, v30, v37, v78, v87, v321]);
              sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:96:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeout_delay: false,
            tys: [ctc6, ctc0, ctc6, ctc3, ctc3, ctc0, ctc0, ctc0, ctc1],
            waitIfNotPresent: false
            }));
          const [v86, v87] = txn5.data;
          const v90 = txn5.time;
          const v85 = txn5.from;
          ;
          const v89 = stdlib.addressEq(v29, v85);
          stdlib.assert(v89, {
            at: './index.rsh:94:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const v92 = stdlib.digest(ctc2, [v86, v87]);
          const v93 = stdlib.digestEq(v65, v92);
          stdlib.assert(v93, {
            at: 'reach standard library:65:17:application',
            fs: ['at ./index.rsh:95:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
            msg: null,
            who: 'deployer'
            });
          const txn6 = await (ctc.recv({
            evt_cnt: 2,
            funcNum: 11,
            out_tys: [ctc0, ctc1],
            timeout_delay: false,
            waitIfNotPresent: false
            }));
          const [v99, v100] = txn6.data;
          const v103 = txn6.time;
          const v98 = txn6.from;
          ;
          const v102 = stdlib.addressEq(v37, v98);
          stdlib.assert(v102, {
            at: './index.rsh:101:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'deployer'
            });
          const v105 = stdlib.digest(ctc2, [v99, v100]);
          const v106 = stdlib.digestEq(v78, v105);
          stdlib.assert(v106, {
            at: 'reach standard library:65:17:application',
            fs: ['at ./index.rsh:102:22:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
            msg: null,
            who: 'deployer'
            });
          const v108 = v100[stdlib.checkedBigNumberify('./index.rsh:106:34:array ref', stdlib.UInt_max, 0)];
          const v109 = v87[stdlib.checkedBigNumberify('./index.rsh:106:45:array ref', stdlib.UInt_max, 9)];
          const v111 = stdlib.eq(v108, v109);
          const v113 = v111 ? stdlib.checkedBigNumberify('./index.rsh:106:52:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:106:56:decimal', stdlib.UInt_max, 0);
          const v114 = v87[stdlib.checkedBigNumberify('./index.rsh:107:34:array ref', stdlib.UInt_max, 0)];
          const v115 = v100[stdlib.checkedBigNumberify('./index.rsh:107:45:array ref', stdlib.UInt_max, 9)];
          const v117 = stdlib.eq(v114, v115);
          const v119 = v117 ? stdlib.checkedBigNumberify('./index.rsh:107:52:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:107:56:decimal', stdlib.UInt_max, 0);
          const v120 = v100[stdlib.checkedBigNumberify('./index.rsh:108:34:array ref', stdlib.UInt_max, 1)];
          const v121 = v87[stdlib.checkedBigNumberify('./index.rsh:108:45:array ref', stdlib.UInt_max, 10)];
          const v123 = stdlib.eq(v120, v121);
          const v125 = v123 ? stdlib.checkedBigNumberify('./index.rsh:108:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:108:57:decimal', stdlib.UInt_max, 0);
          const v126 = v87[stdlib.checkedBigNumberify('./index.rsh:109:34:array ref', stdlib.UInt_max, 1)];
          const v127 = v100[stdlib.checkedBigNumberify('./index.rsh:109:45:array ref', stdlib.UInt_max, 10)];
          const v129 = stdlib.eq(v126, v127);
          const v131 = v129 ? stdlib.checkedBigNumberify('./index.rsh:109:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:109:57:decimal', stdlib.UInt_max, 0);
          const v132 = v100[stdlib.checkedBigNumberify('./index.rsh:110:34:array ref', stdlib.UInt_max, 2)];
          const v133 = v87[stdlib.checkedBigNumberify('./index.rsh:110:45:array ref', stdlib.UInt_max, 11)];
          const v135 = stdlib.eq(v132, v133);
          const v137 = v135 ? stdlib.checkedBigNumberify('./index.rsh:110:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:110:57:decimal', stdlib.UInt_max, 0);
          const v138 = v87[stdlib.checkedBigNumberify('./index.rsh:111:34:array ref', stdlib.UInt_max, 2)];
          const v139 = v100[stdlib.checkedBigNumberify('./index.rsh:111:45:array ref', stdlib.UInt_max, 11)];
          const v141 = stdlib.eq(v138, v139);
          const v143 = v141 ? stdlib.checkedBigNumberify('./index.rsh:111:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:111:57:decimal', stdlib.UInt_max, 0);
          const v144 = v100[stdlib.checkedBigNumberify('./index.rsh:112:34:array ref', stdlib.UInt_max, 3)];
          const v145 = v87[stdlib.checkedBigNumberify('./index.rsh:112:45:array ref', stdlib.UInt_max, 12)];
          const v147 = stdlib.eq(v144, v145);
          const v149 = v147 ? stdlib.checkedBigNumberify('./index.rsh:112:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:112:57:decimal', stdlib.UInt_max, 0);
          const v150 = v87[stdlib.checkedBigNumberify('./index.rsh:113:34:array ref', stdlib.UInt_max, 3)];
          const v151 = v100[stdlib.checkedBigNumberify('./index.rsh:113:45:array ref', stdlib.UInt_max, 12)];
          const v153 = stdlib.eq(v150, v151);
          const v155 = v153 ? stdlib.checkedBigNumberify('./index.rsh:113:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:113:57:decimal', stdlib.UInt_max, 0);
          const v156 = v100[stdlib.checkedBigNumberify('./index.rsh:114:34:array ref', stdlib.UInt_max, 4)];
          const v157 = v87[stdlib.checkedBigNumberify('./index.rsh:114:45:array ref', stdlib.UInt_max, 13)];
          const v159 = stdlib.eq(v156, v157);
          const v161 = v159 ? stdlib.checkedBigNumberify('./index.rsh:114:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:114:57:decimal', stdlib.UInt_max, 0);
          const v162 = v87[stdlib.checkedBigNumberify('./index.rsh:115:34:array ref', stdlib.UInt_max, 4)];
          const v163 = v100[stdlib.checkedBigNumberify('./index.rsh:115:45:array ref', stdlib.UInt_max, 13)];
          const v165 = stdlib.eq(v162, v163);
          const v167 = v165 ? stdlib.checkedBigNumberify('./index.rsh:115:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:115:57:decimal', stdlib.UInt_max, 0);
          const v168 = v100[stdlib.checkedBigNumberify('./index.rsh:116:34:array ref', stdlib.UInt_max, 5)];
          const v169 = v87[stdlib.checkedBigNumberify('./index.rsh:116:45:array ref', stdlib.UInt_max, 14)];
          const v171 = stdlib.eq(v168, v169);
          const v173 = v171 ? stdlib.checkedBigNumberify('./index.rsh:116:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:116:57:decimal', stdlib.UInt_max, 0);
          const v174 = v87[stdlib.checkedBigNumberify('./index.rsh:117:34:array ref', stdlib.UInt_max, 5)];
          const v175 = v100[stdlib.checkedBigNumberify('./index.rsh:117:45:array ref', stdlib.UInt_max, 14)];
          const v177 = stdlib.eq(v174, v175);
          const v179 = v177 ? stdlib.checkedBigNumberify('./index.rsh:117:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:117:57:decimal', stdlib.UInt_max, 0);
          const v180 = v100[stdlib.checkedBigNumberify('./index.rsh:118:34:array ref', stdlib.UInt_max, 6)];
          const v181 = v87[stdlib.checkedBigNumberify('./index.rsh:118:45:array ref', stdlib.UInt_max, 15)];
          const v183 = stdlib.eq(v180, v181);
          const v185 = v183 ? stdlib.checkedBigNumberify('./index.rsh:118:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:118:57:decimal', stdlib.UInt_max, 0);
          const v186 = v87[stdlib.checkedBigNumberify('./index.rsh:119:34:array ref', stdlib.UInt_max, 6)];
          const v187 = v100[stdlib.checkedBigNumberify('./index.rsh:119:45:array ref', stdlib.UInt_max, 15)];
          const v189 = stdlib.eq(v186, v187);
          const v191 = v189 ? stdlib.checkedBigNumberify('./index.rsh:119:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:119:57:decimal', stdlib.UInt_max, 0);
          const v192 = v100[stdlib.checkedBigNumberify('./index.rsh:120:34:array ref', stdlib.UInt_max, 7)];
          const v193 = v87[stdlib.checkedBigNumberify('./index.rsh:120:45:array ref', stdlib.UInt_max, 16)];
          const v195 = stdlib.eq(v192, v193);
          const v197 = v195 ? stdlib.checkedBigNumberify('./index.rsh:120:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:120:57:decimal', stdlib.UInt_max, 0);
          const v198 = v87[stdlib.checkedBigNumberify('./index.rsh:121:34:array ref', stdlib.UInt_max, 7)];
          const v199 = v100[stdlib.checkedBigNumberify('./index.rsh:121:45:array ref', stdlib.UInt_max, 16)];
          const v201 = stdlib.eq(v198, v199);
          const v203 = v201 ? stdlib.checkedBigNumberify('./index.rsh:121:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:121:57:decimal', stdlib.UInt_max, 0);
          const v204 = v100[stdlib.checkedBigNumberify('./index.rsh:122:34:array ref', stdlib.UInt_max, 8)];
          const v205 = v87[stdlib.checkedBigNumberify('./index.rsh:122:45:array ref', stdlib.UInt_max, 17)];
          const v207 = stdlib.eq(v204, v205);
          const v209 = v207 ? stdlib.checkedBigNumberify('./index.rsh:122:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:122:57:decimal', stdlib.UInt_max, 0);
          const v210 = v87[stdlib.checkedBigNumberify('./index.rsh:123:34:array ref', stdlib.UInt_max, 8)];
          const v211 = v100[stdlib.checkedBigNumberify('./index.rsh:123:45:array ref', stdlib.UInt_max, 17)];
          const v213 = stdlib.eq(v210, v211);
          const v215 = v213 ? stdlib.checkedBigNumberify('./index.rsh:123:53:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:123:57:decimal', stdlib.UInt_max, 0);
          const v216 = stdlib.add(v113, v125);
          const v217 = stdlib.add(v216, v137);
          const v218 = stdlib.add(v217, v149);
          const v219 = stdlib.add(v218, v161);
          const v220 = stdlib.add(v219, v173);
          const v221 = stdlib.add(v220, v185);
          const v222 = stdlib.add(v221, v197);
          const v223 = stdlib.add(v222, v209);
          const v224 = stdlib.add(v119, v131);
          const v225 = stdlib.add(v224, v143);
          const v226 = stdlib.add(v225, v155);
          const v227 = stdlib.add(v226, v167);
          const v228 = stdlib.add(v227, v179);
          const v229 = stdlib.add(v228, v191);
          const v230 = stdlib.add(v229, v203);
          const v231 = stdlib.add(v230, v215);
          const v233 = stdlib.gt(v223, v231);
          const v234 = stdlib.lt(v223, v231);
          const v235 = v234 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          const v236 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2) : v235;
          stdlib.protect(ctc4, await interact.getShips(v87), {
            at: './index.rsh:131:26:application',
            fs: ['at ./index.rsh:130:13:application call to [unknown function] (defined at: ./index.rsh:130:17:function exp)'],
            msg: 'getShips',
            who: 'deployer'
            });
          
          stdlib.protect(ctc4, await interact.seeOutcome(v236), {
            at: './index.rsh:138:28:application',
            fs: ['at ./index.rsh:137:11:application call to [unknown function] (defined at: ./index.rsh:137:23:function exp)'],
            msg: 'seeOutcome',
            who: 'deployer'
            });
          
          const cv41 = v236;
          const cv319 = v103;
          const cv321 = v321;
          
          v41 = cv41;
          v319 = cv319;
          v321 = cv321;
          
          continue;
          
          }
        }
      }
    const v288 = stdlib.eq(v41, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v291 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:147:14:decimal', stdlib.UInt_max, 2), v30);
    const v293 = v288 ? v29 : v37;
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
store 2
substring 32 64
store 3
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
int 8
==
assert
dup
btoi
store 255
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 254
pop
// compute state in HM_Check 0
int 8
bzero
load 255
itob
concat
sha256
load 2
==
assert
int 16
bzero
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l1
dig 1
gtxns FirstValid
<=
assert
b l2
l1:
pop
l2:
load 1
substring 8 16
btoi
dup
bz l3
dig 1
gtxns LastValid
>=
assert
b l4
l3:
pop
l4:
pop
// "CheckPay"
// "./index.rsh:57:7:dot"
// "[]"
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
dup
load 1
substring 0 8
btoi
dup
bz l6
dig 1
gtxns FirstValid
<=
assert
b l7
l6:
pop
l7:
load 1
substring 8 16
btoi
dup
bz l8
dig 1
gtxns LastValid
>=
assert
b l9
l8:
pop
l9:
pop
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
load 3
dig 1
gtxns Receiver
==
assert
l5:
pop
// compute state in HM_Set 1
byte base64(AAAAAAAAAAE=)
txn Sender
concat
load 254
itob
concat
global Round
itob
concat
sha256
store 2
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
bz l10
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
load 2
==
assert
int 8
bzero
load 253
int 10
+
itob
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l11
dig 1
gtxns FirstValid
<=
assert
b l12
l11:
pop
l12:
load 1
substring 8 16
btoi
dup
bz l13
dig 1
gtxns LastValid
>=
assert
b l14
l13:
pop
l14:
pop
// "CheckPay"
// "./index.rsh:63:7:dot"
// "[]"
load 254
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
dup
load 1
substring 0 8
btoi
dup
bz l16
dig 1
gtxns FirstValid
<=
assert
b l17
l16:
pop
l17:
load 1
substring 8 16
btoi
dup
bz l18
dig 1
gtxns LastValid
>=
assert
b l19
l18:
pop
l19:
pop
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
load 3
dig 1
gtxns Receiver
==
assert
l15:
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
l10:
// Handler 3
dup
int 3
==
bz l20
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
load 2
==
assert
load 253
int 10
+
itob
int 8
bzero
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l21
dig 1
gtxns FirstValid
<=
assert
b l22
l21:
pop
l22:
load 1
substring 8 16
btoi
dup
bz l23
dig 1
gtxns LastValid
>=
assert
b l24
l23:
pop
l24:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:63:49:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:63:49:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l25
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
dup
load 1
substring 0 8
btoi
dup
bz l26
dig 1
gtxns FirstValid
<=
assert
b l27
l26:
pop
l27:
load 1
substring 8 16
btoi
dup
bz l28
dig 1
gtxns LastValid
>=
assert
b l29
l28:
pop
l29:
pop
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
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l25:
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
dup
load 1
substring 0 8
btoi
dup
bz l31
dig 1
gtxns FirstValid
<=
assert
b l32
l31:
pop
l32:
load 1
substring 8 16
btoi
dup
bz l33
dig 1
gtxns LastValid
>=
assert
b l34
l33:
pop
l34:
pop
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
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l30:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l20:
l35:
l36:
// Handler 6
dup
int 6
==
bz l37
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
load 2
==
assert
int 8
bzero
load 252
int 10
+
itob
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l38
dig 1
gtxns FirstValid
<=
assert
b l39
l38:
pop
l39:
load 1
substring 8 16
btoi
dup
bz l40
dig 1
gtxns LastValid
>=
assert
b l41
l40:
pop
l41:
pop
// "CheckPay"
// "./index.rsh:76:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:76:9:dot"
// "[]"
load 255
txn Sender
==
assert
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
global Round
itob
concat
load 251
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l37:
// Handler 7
dup
int 7
==
bz l42
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
load 2
==
assert
load 252
int 10
+
itob
int 8
bzero
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l43
dig 1
gtxns FirstValid
<=
assert
b l44
l43:
pop
l44:
load 1
substring 8 16
btoi
dup
bz l45
dig 1
gtxns LastValid
>=
assert
b l46
l45:
pop
l46:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:76:57:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:76:57:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 253
txn Sender
==
assert
load 251
dup
bz l47
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
dup
load 1
substring 0 8
btoi
dup
bz l48
dig 1
gtxns FirstValid
<=
assert
b l49
l48:
pop
l49:
load 1
substring 8 16
btoi
dup
bz l50
dig 1
gtxns LastValid
>=
assert
b l51
l50:
pop
l51:
pop
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
load 3
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l47:
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
dup
load 1
substring 0 8
btoi
dup
bz l53
dig 1
gtxns FirstValid
<=
assert
b l54
l53:
pop
l54:
load 1
substring 8 16
btoi
dup
bz l55
dig 1
gtxns LastValid
>=
assert
b l56
l55:
pop
l56:
pop
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
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l52:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l42:
// Handler 8
dup
int 8
==
bz l57
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
load 2
==
assert
int 8
bzero
load 251
int 10
+
itob
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l58
dig 1
gtxns FirstValid
<=
assert
b l59
l58:
pop
l59:
load 1
substring 8 16
btoi
dup
bz l60
dig 1
gtxns LastValid
>=
assert
b l61
l60:
pop
l61:
pop
// "CheckPay"
// "./index.rsh:85:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:85:9:dot"
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
global Round
itob
concat
load 250
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l57:
// Handler 9
dup
int 9
==
bz l62
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
load 2
==
assert
load 251
int 10
+
itob
int 8
bzero
concat
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l63
dig 1
gtxns FirstValid
<=
assert
b l64
l63:
pop
l64:
load 1
substring 8 16
btoi
dup
bz l65
dig 1
gtxns LastValid
>=
assert
b l66
l65:
pop
l66:
pop
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:85:57:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:85:57:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 250
dup
bz l67
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
dup
load 1
substring 0 8
btoi
dup
bz l68
dig 1
gtxns FirstValid
<=
assert
b l69
l68:
pop
l69:
load 1
substring 8 16
btoi
dup
bz l70
dig 1
gtxns LastValid
>=
assert
b l71
l70:
pop
l71:
pop
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
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l67:
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
dup
load 1
substring 0 8
btoi
dup
bz l73
dig 1
gtxns FirstValid
<=
assert
b l74
l73:
pop
l74:
load 1
substring 8 16
btoi
dup
bz l75
dig 1
gtxns LastValid
>=
assert
b l76
l75:
pop
l76:
pop
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
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l72:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l62:
// Handler 10
dup
int 10
==
bz l77
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
int 152
==
assert
dup
substring 0 8
btoi
store 248
dup
substring 8 152
store 247
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
load 2
==
assert
int 16
bzero
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l78
dig 1
gtxns FirstValid
<=
assert
b l79
l78:
pop
l79:
load 1
substring 8 16
btoi
dup
bz l80
dig 1
gtxns LastValid
>=
assert
b l81
l80:
pop
l81:
pop
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
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:95:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 252
load 248
itob
load 247
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
load 247
concat
global Round
itob
concat
load 249
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l77:
// Handler 11
dup
int 11
==
bz l82
pop
txna ApplicationArgs 1
dup
len
int 264
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
dup
int 256
int 264
substring3
btoi
store 249
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
store 248
dup
substring 8 152
store 247
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
load 249
itob
concat
sha256
load 2
==
assert
int 16
bzero
store 1
int 0
load 1
substring 0 8
btoi
dup
bz l83
dig 1
gtxns FirstValid
<=
assert
b l84
l83:
pop
l84:
load 1
substring 8 16
btoi
dup
bz l85
dig 1
gtxns LastValid
>=
assert
b l86
l85:
pop
l86:
pop
// "CheckPay"
// "./index.rsh:101:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:101:9:dot"
// "[]"
load 253
txn Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:102:22:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 252
load 248
itob
load 247
concat
sha256
==
assert
int 0
int 1
load 247
substring 0 8
btoi
load 251
substring 72 80
btoi
==
select
int 0
int 1
load 247
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
load 247
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
load 247
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
load 247
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
load 247
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
load 247
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
load 247
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
load 247
substring 64 72
btoi
load 251
substring 136 144
btoi
==
select
+
store 246
int 0
int 1
load 251
substring 0 8
btoi
load 247
substring 72 80
btoi
==
select
int 0
int 1
load 251
substring 8 16
btoi
load 247
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
load 247
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
load 247
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
load 247
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
load 247
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
load 247
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
load 247
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
load 247
substring 136 144
btoi
==
select
+
store 245
load 255
load 254
itob
concat
load 253
concat
int 1
int 0
load 246
load 245
<
select
int 2
load 246
load 245
>
select
itob
global Round
itob
concat
load 249
itob
concat
b loop4
l82:
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
bz l87
// compute state in HM_Set 6
byte base64(AAAAAAAAAAY=)
load 252
concat
load 251
itob
concat
load 250
concat
load 254
itob
concat
load 253
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l87:
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
bz l88
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
dup
load 1
substring 0 8
btoi
dup
bz l89
dig 1
gtxns FirstValid
<=
assert
b l90
l89:
pop
l90:
load 1
substring 8 16
btoi
dup
bz l91
dig 1
gtxns LastValid
>=
assert
b l92
l91:
pop
l92:
pop
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
load 3
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
l88:
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
dup
load 1
substring 0 8
btoi
dup
bz l94
dig 1
gtxns FirstValid
<=
assert
b l95
l94:
pop
l95:
load 1
substring 8 16
btoi
dup
bz l96
dig 1
gtxns LastValid
>=
assert
b l97
l96:
pop
l97:
pop
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
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l93:
pop
global ZeroAddress
store 2
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 2
load 3
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
store 3
// compute state in HM_Set 0
int 8
bzero
global Round
itob
concat
sha256
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
`,
  appClear: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
global GroupSize
int 1
==
assert
byte base64()
app_global_get
substring 0 32
global ZeroAddress
==
assert
done:
int 1
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v25",
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
                "name": "v30",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v81",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
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
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256[18]",
                "name": "v87",
                "type": "uint256[18]"
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256[18]",
                "name": "v87",
                "type": "uint256[18]"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
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
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v33",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v33",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
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
                "name": "v65",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
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
                "name": "v78",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
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
                "name": "v25",
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
                "name": "v30",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v81",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
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
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256[18]",
                "name": "v87",
                "type": "uint256[18]"
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256[18]",
                "name": "v87",
                "type": "uint256[18]"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
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
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v33",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v33",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
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
                "name": "v65",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
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
                "name": "v78",
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
                "name": "v29",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v30",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v321",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382528251808201845260008082529251815283518083018490529051818501528351808203850181526060909101909352825192019190912090556117a7806100826000396000f3fe60806040526004361061008a5760003560e01c80636cc4a844116100595780636cc4a844146100e45780636dacfd6f146100f75780639532ef011461010a578063b861cb101461011d578063e163d7c41461013057600080fd5b8063136bf7e1146100965780631a99a665146100ab5780632438df70146100be5780634188e022146100d157600080fd5b3661009157005b600080fd5b6100a96100a436600461131c565b610143565b005b6100a96100b936600461132f565b6102f2565b6100a96100cc366004611354565b610726565b6100a96100df366004611300565b610832565b6100a96100f23660046112e4565b610943565b6100a9610105366004611300565b610afe565b6100a9610118366004611342565b610cd9565b6100a961012b3660046112e4565b610dde565b6100a961013e366004611354565b610ee6565b60405161017f9061015b90600a90849060200161164b565b6040516020818303038152906040528051906020012060001c600054146023610fe8565b6000805561018f34156020610fe8565b6101b1336101a060208401846112c2565b6001600160a01b0316146021610fe8565b6040516101f5906101d09060e08401359061010085019060200161161b565b60408051601f1981840301815291905280516020909101206060830135146022610fe8565b7f9a18cb828c36048387824b5defc3fbe9767131a37117464d8107f28372304a8c81604051610224919061159f565b60405180910390a16102346111b6565b61024160208301836112c2565b6001600160a01b031681526020808301359082015261026660608301604084016112c2565b6001600160a01b0316604080830191909152608083013560608301528051610240818101909252906101008401906012908390839080828437600092019190915250505060808201524360a082015260c080830135908201526040516102d390600b908390602001611689565b60408051601f1981840301815291905280516020909101206000555050565b60405161032e9061030a90600b908490602001611674565b6040516020818303038152906040528051906020012060001c600054146027610fe8565b600080805560408051808201909152818152602081019190915261035434156024610fe8565b6103793361036860608501604086016112c2565b6001600160a01b0316146025610fe8565b6040516103be90610399906103008501359061032086019060200161161b565b60408051601f1981840301815291905280516020909101206060840135146026610fe8565b6104208201356102a0830135146103d65760006103d9565b60015b610400830135610280840135146103f15760006103f4565b60015b6103e08401356102608501351461040c57600061040f565b60015b6103c08501356102408601351461042757600061042a565b60015b6103a086013561022087013514610442576000610445565b60015b6103808701356102008801351461045d576000610460565b60015b6103608801356101e08901351461047857600061047b565b60015b6103408901356101c08a013514610493576000610496565b60015b6103208a01356101a08b0135146104ae5760006104b1565b60015b6104bb9190611724565b6104c59190611724565b6104cf9190611724565b6104d99190611724565b6104e39190611724565b6104ed9190611724565b6104f79190611724565b6105019190611724565b81526101808201356105408301351461051b57600061051e565b60015b61016083013561052084013514610536576000610539565b60015b61014084013561050085013514610551576000610554565b60015b6101208501356104e08601351461056c57600061056f565b60015b6101008601356104c08701351461058757600061058a565b60015b60e08701356104a0880135146105a15760006105a4565b60015b60c0880135610480890135146105bb5760006105be565b60015b60a08901356104608a0135146105d55760006105d8565b60015b60808a01356104408b0135146105ef5760006105f2565b60015b6105fc9190611724565b6106069190611724565b6106109190611724565b61061a9190611724565b6106249190611724565b61062e9190611724565b6106389190611724565b6106429190611724565b60208201526040517fd08797d8cc6478925c30d56f4a50fb6b02f4de7e296f068ce8229683368b227e906106779084906115c4565b60405180910390a161068761120b565b61069460208401846112c2565b81516001600160a01b03909116905280516020808501359101526106be60608401604085016112c2565b81516001600160a01b0390911660409091015260208201518251116106f75760208201518251106106f05760016106fa565b60006106fa565b60025b6020808301805192909252815143910152516102e08401356040909101526107218161100d565b505050565b6040516107629061073e906001908490602001611660565b6040516020818303038152906040528051906020012060001c60005414600a610fe8565b60008055610781610778600a6040840135611724565b4310600b610fe8565b610792346020830135146009610fe8565b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516107c191906115eb565b60405180910390a16107d161120b565b6107de60208301836112c2565b81516001600160a01b0390911690528051602080840135918101829052825133604090910152808301805160019052514391015261081c9080611724565b60208201516040015261082e8161100d565b5050565b60405161086e9061084a906008908490602001611637565b6040516020818303038152906040528051906020012060001c60005414601e610fe8565b6000805561088e610884600a6080840135611724565b431015601f610fe8565b61089a3415601c610fe8565b6108bc336108ab60208401846112c2565b6001600160a01b031614601d610fe8565b6108c960208201826112c2565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f19350505050158015610904573d6000803e3d6000fd5b507fe30737f1ebfc963c65c5913e78ab44df878e431e05d360e374cda18b462b262b81604051610934919061156f565b60405180910390a16000805533ff5b60405161097f9061095b906006908490602001611710565b6040516020818303038152906040528051906020012060001c600054146012610fe8565b6000805561099e610995600a6060840135611724565b43106013610fe8565b6109aa34156010610fe8565b6109cc336109bb60208401846112c2565b6001600160a01b0316146011610fe8565b7f16424d059cabc243859f670786693b7e657c3f04cbc39631fa14608999bfaef9816040516109fb9190611507565b60405180910390a1610a4e6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b610a5b60208301836112c2565b6001600160a01b0316815260208083013590820152610a8060608301604084016112c2565b6001600160a01b03908116604083810191825260a0858101356060808701918252436080808901918252808a0135858a01908152865160086020808301919091528b518b1698820198909852968a0151938701939093529551909616948401949094525190820152915160c08301525160e0820152610100016102d3565b604051610b3a90610b16906008908490602001611637565b6040516020818303038152906040528051906020012060001c60005414601a610fe8565b60008055610b59610b50600a6080840135611724565b4310601b610fe8565b610b6534156018610fe8565b610b8a33610b7960608401604085016112c2565b6001600160a01b0316146019610fe8565b7fa03e2b199cbd4c163bca89aa8e3581bcf82ee511c6ed7b600ee5e8a3e78842b481604051610bb99190611553565b60405180910390a1610c136040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b610c2060208301836112c2565b6001600160a01b0316815260208083013590820152610c4560608301604084016112c2565b6001600160a01b03908116604083810191825260608581013581860190815260c08088013560808089019182524360a0808b01918252808c0135858c019081528851600a6020808301919091528d518d169a82019a909a52988c0151978901979097529751909816908601529151948401949094525192820192909252915160e083015251610100820152610120016102d3565b6040805160006020820152823591810191909152610d18906060016040516020818303038152906040528051906020012060001c600054146008610fe8565b60008055610d2d346020830135146007610fe8565b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a1610d97604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a0016102d3565b604051610e1a90610df6906006908490602001611710565b6040516020818303038152906040528051906020012060001c600054146016610fe8565b60008055610e3a610e30600a6060840135611724565b4310156017610fe8565b610e4634156014610fe8565b610e6b33610e5a60608401604085016112c2565b6001600160a01b0316146015610fe8565b610e7b60608201604083016112c2565b6040516001600160a01b039190911690608083013580156108fc02916000818181858888f19350505050158015610eb6573d6000803e3d6000fd5b507f5005c4e6004c19e98ada43b5f5d05731c1a82aa5d9215871f88ceb584e0f83e0816040516109349190611523565b604051610f2290610efe906001908490602001611660565b6040516020818303038152906040528051906020012060001c60005414600e610fe8565b60008055610f42610f38600a6040840135611724565b431015600f610fe8565b610f4e3415600c610fe8565b610f7033610f5f60208401846112c2565b6001600160a01b031614600d610fe8565b610f7d60208201826112c2565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610fb8573d6000803e3d6000fd5b507fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d856230138160405161093491906115eb565b8161082e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b602081015151600114156110e85761105f6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401908152845160409081015184168186019081528387018051850151606080890191825291518401516080808a0191825285516006988101989098528951891695880195909552945191860191909152905190941690830152915160a0820152905160c082015260e0016102d3565b6040805160c0810182526000818301818152606083018281526080840183815260a085018481528386526020808701959095528751516001600160a01b03908116909452875185015190925286519095015190911690935283015151918290529061082e90829060021461116157805160400151611165565b8051515b6001600160a01b03166108fc8260000151602001516002611186919061173c565b6040518115909202916000818181858888f193505050501580156111ae573d6000803e3d6000fd5b506000805533ff5b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016111f761125d565b815260200160008152602001600081525090565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260200161125860405180606001604052806000815260200160008152602001600081525090565b905290565b6040518061024001604052806012906020820280368337509192915050565b80356001600160a01b038116811461129357600080fd5b919050565b600060c082840312156112aa57600080fd5b50919050565b600060e082840312156112aa57600080fd5b6000602082840312156112d457600080fd5b6112dd8261127c565b9392505050565b600060c082840312156112f657600080fd5b6112dd8383611298565b600060e0828403121561131257600080fd5b6112dd83836112b0565b600061034082840312156112aa57600080fd5b600061056082840312156112aa57600080fd5b6000604082840312156112aa57600080fd5b6000608082840312156112aa57600080fd5b6001600160a01b03806113788361127c565b16835260208201356020840152806113926040840161127c565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b03806113cd8361127c565b16835260208201356020840152806113e76040840161127c565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b0361142b8261127c565b16825260208181013590830152604090810135910152565b6001600160a01b03806114558361127c565b168352602082013560208401528061146f6040840161127c565b16604084015250606081013560608301526102406080820160808401376102c081810135908301526102e090810135910152565b8035825261024060208201602084013760006102608301525050565b6001600160a01b03806114d18361127c565b16835260208201356020840152806114eb6040840161127c565b1660408401525060608181013590830152608090810135910152565b60c0810161151582846114bf565b60a092830135919092015290565b60c0810161153182846114bf565b60a083013580151580821461154557600080fd5b8060a0850152505092915050565b60e081016115618284611366565b60c092830135919092015290565b60e0810161157d8284611366565b60c083013580151580821461159157600080fd5b8060c0850152505092915050565b61034081016115ae82846113bb565b6115be60e0830160e085016114a3565b92915050565b61056081016115d38284611443565b6103006115e48184018286016114a3565b5092915050565b608081016115f9828461141a565b606083013580151580821461160d57600080fd5b806060850152505092915050565b8281526102608101610240836020840137600081529392505050565b82815260e081016112dd6020830184611366565b82815261010081016112dd60208301846113bb565b828152608081016112dd602083018461141a565b82815261032081016112dd6020830184611443565b600061032082019050838252602060018060a01b0380855116828501528185015160408501528060408601511660608501525060608401516080840152608084015160a0840160005b60128110156116ef578251825291830191908301906001016116d2565b5050505060a08301516102e083015260c08301516103008301529392505050565b82815260c081016112dd60208301846114bf565b600082198211156117375761173761175b565b500190565b60008160001904831182151516156117565761175661175b565b500290565b634e487b7160e01b600052601160045260246000fdfea26469706673582212203a04b01f8aaf9522df89ee760a8346a012cc8247325d2368ce83021811172a3464736f6c63430008050033`,
  BytecodeLen: 6185,
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

