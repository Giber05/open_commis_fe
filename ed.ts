const asciiBitAmt = 8;
const defaultBaseNBitLen = 7;
const StringFromCharCode = String.fromCharCode;
const mathPow = Math.pow;

const charCodeAt = function (src: any, idx: any) {
  return src.charCodeAt(idx);
};

const getSvrKey = function () {
  const tmp = "";
  // key should be encrypted too, so when hacker try to search from memory, it get something else
  return nBitDec(tmp); // better save encrypted key in array not string
};
const genKey = function (keyType:any|null = null) {
  const As = 65;
  const Ze = 91;
  const as = 97;
  const ze = 123;
  const _0s = 48;
  const _9e = 58;
  const QuestionMarks = 63; // ?
  const Colone = 59; // :
  const NumberSigns = 35; // #
  const Ampersande = 39; // Terminate before 39 (& actually 38)
  const LeftParenthiss = 40; // (
  const FullStope = 47; // Terminate before 47, FullStop actually 46
  const LeftSquareBrackete = 92; // Terminate before 92, [ actually 91
  const RightSquareBrackets = 93; // ]
  const LowLinee = 96; // Terminate before 96,  actually 95
  const Tildee = 127; // Terminate before 127, ~ actually 126
  const LatinAwGraves = 192;
  const LatinSmallaee = 231; // Terminate before 231, ae actually 230
  let key = "";
  let suffix = "";
  let arrRange = [As, Ze, as, ze, _0s, _9e]; // [[As,Ze],[as,ze],[0s,9e]],
  let i = 0;
  let j;
  let k;
  let l;
  if (keyType === 0) {
    // standard base 64
    suffix = "+/=";
  } else if (keyType === 1) {
    // non standard uri safe base 64
    suffix = "-."; // standard uri safe using "+-$"
  } else if (keyType === 2) {
    // non standard base 64
    arrRange = [as, ze, QuestionMarks, Ze, _0s, Colone];
  } else if (keyType === 9) {
    // key was from server and session specific after successfull login
    arrRange = [];
    key = getSvrKey();
  } else {
    // own base 2 to base 128
    key = "!";
    arrRange = [
      NumberSigns,
      Ampersande,
      LeftParenthiss,
      FullStope,
      _0s,
      LeftSquareBrackete,
      RightSquareBrackets,
      LowLinee,
      as,
      Tildee,
      LatinAwGraves,
      LatinSmallaee,
    ];
  }

  for (l = arrRange.length; i < l; i += 2) {
    for (j = arrRange[i], k = arrRange[i + 1]; j < k; j++) {
      key += StringFromCharCode(j);
    }
  }
  return key + suffix;
};
const nBitEnc = function (source: any, baseNBitLen: any | null = null, key: any | null = null) {
  // return bNE(baseNBitLen || 6, source, key);
  baseNBitLen = baseNBitLen || defaultBaseNBitLen;
  key = key || genKey();
  let binData = 0;
  let bitLen = 0;
  const baseNBit = 2 ** baseNBitLen - 1;
  const encResult = source.replace(/./g, (v:any) => {
    let encResultTmp = "";
    binData = (binData << asciiBitAmt) + charCodeAt(v, 0); // v.charCodeAt(0);
    bitLen += asciiBitAmt;
    while (bitLen >= baseNBitLen!) {
      bitLen -= baseNBitLen!;
      encResultTmp += key![(binData >>> bitLen) & baseNBit];
      // binData = binData & (mathPow(2,bitLen)-1);
    }
    return encResultTmp;
  });
  return bitLen > 0
    ? encResult + key[(binData << (baseNBitLen - bitLen)) & baseNBit]
    : encResult;
};
var nBitDec = function (source:any, baseNBitLen: any | null = null, key: any | null = null) {
  // return bND(baseNBitLen || 6, source, key);
  baseNBitLen = baseNBitLen || defaultBaseNBitLen;
  let binData = 0;
  let bitLen = 0;
  key = key || genKey();
  return source.replace(/./g, (v:any) => {
    binData = (binData << baseNBitLen!) + key!.indexOf(v);
    bitLen += baseNBitLen!;
    return bitLen < asciiBitAmt
      ? ""
      : StringFromCharCode((binData >>> (bitLen -= asciiBitAmt)) & 0xff);
  });
};
const ed:any = {
  dec(source:any, edType:number|undefined, nBitLen:number|undefined) {
    if (edType === undefined) {
      // default base 128 decrypt
      return nBitDec(source);
    }
    // base 64 uri safe decrypt
    return nBitDec(
      source,
      nBitLen || 6,
      Number.isInteger(edType) ? genKey(edType) : edType,
    );
  },
  enc(source:any, edType:number|undefined, nBitLen:number|undefined) {
    if (edType === undefined) {
      // default base 128 encrypt
      return nBitEnc(source);
    }
    // base 64 uri safe encrypt
    return nBitEnc(
      source,
      nBitLen || 6,
      Number.isInteger(edType) ? genKey(edType) : edType,
    );
  },
  UUID(formated:string): string {
    const format = formated
      ? "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
      : "xxxxxxxxyxxx4xxxyxxxyxxxxxxxxxxx";
    let d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now(); // use high-precision timer if available
    }
    return format.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 17 + (d = Math.floor((d * 9) / 7))) % 16 | 0;
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
  },

};

export default ed;
