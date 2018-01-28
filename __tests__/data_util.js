const DataUtil = require('../common/helpers/data_util');

//decodeString
test('decode &#039; to \'', () => {
  expect(DataUtil.decodeString("&#039;")).toBe("\'");
})

test('decode &quot; to \"', () => {
  expect(DataUtil.decodeString("&quot;")).toBe("\"");
})

test('decode &Scaron; to Š', () => {
  expect(DataUtil.decodeString("&Scaron;")).toBe("Š");
})

test('decode &#38; to &', () => {
  expect(DataUtil.decodeString("&#38;")).toBe("&");
})

//isNotNull
test('DataUtil.isNotNull(undefined) = false', () => {
  expect(DataUtil.isNotNull(undefined)).toBe(false);
})

test('DataUtil.isNotNull(null) = false', () => {
  expect(DataUtil.isNotNull(null)).toBe(false);
})

test('DataUtil.isNotNull(0) = true', () => {
  expect(DataUtil.isNotNull(0)).toBe(true);
})

test('DataUtil.isNotNull(\'s\') = true', () => {
  expect(DataUtil.isNotNull('s')).toBe(true);
})

//isArrayEmpty
test('DataUtil.isArrayEmpty(undefined) = true', () => {
  expect(DataUtil.isArrayEmpty(undefined)).toBe(true);
})

test('DataUtil.isArrayEmpty(null) = true', () => {
  expect(DataUtil.isArrayEmpty(null)).toBe(true);
})

test('DataUtil.isArrayEmpty([]) = true', () => {
  expect(DataUtil.isArrayEmpty([])).toBe(true);
})

test('DataUtil.isArrayEmpty(\'s\') = true', () => {
  expect(DataUtil.isArrayEmpty('s')).toBe(true);
})

test('DataUtil.isArrayEmpty(0) = true', () => {
  expect(DataUtil.isArrayEmpty(0)).toBe(true);
})

test('DataUtil.isArrayEmpty([0]) = false', () => {
  expect(DataUtil.isArrayEmpty([0])).toBe(false);
})

//isStringEmpty
test('DataUtil.isStringEmpty(undefined) = true', () => {
  expect(DataUtil.isStringEmpty(undefined)).toBe(true);
})

test('DataUtil.isStringEmpty(null) = true', () => {
  expect(DataUtil.isStringEmpty(null)).toBe(true);
})

test('DataUtil.isStringEmpty(0) = false', () => {
  expect(DataUtil.isStringEmpty(0)).toBe(false);
})

test('DataUtil.isStringEmpty([]) = true', () => {
  expect(DataUtil.isStringEmpty([])).toBe(true);
})

test('DataUtil.isStringEmpty(\'s\') = false', () => {
  expect(DataUtil.isStringEmpty('s')).toBe(false);
})
